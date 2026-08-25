import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { CLASS_PLAN_COURSES, diagnosticRouteForKey } from '@/lib/class-plan-config'

/**
 * Every course's diagnostic study plan, with per-topic done/pending state.
 *
 * This is the self-directed student's path. A student with no teacher gets no
 * assignments — permanently — so their only structure is what a diagnostic
 * recommends. That existed for five courses, each hand-wired into the dashboard
 * with its own fetch and its own copy of the same markup; the other 28 courses
 * had no tracked plan at all.
 *
 * Four queries total regardless of how many courses the student has touched:
 * one for their diagnostics, then one each for topics, lesson progress and exit
 * quizzes across the union of recommended slugs. Doing it per course would mean
 * 33 round trips for a page that renders in one.
 */

/** A topic counts as done at lesson mastery, or an exit quiz at/above this. */
const REQUIRED_SCORE_PERCENT = 80

type RecommendedTopic = { slug: string; name: string; priority: 'high' | 'medium' | 'low' }

function parseRecommended(results: unknown): RecommendedTopic[] {
  if (!results || typeof results !== 'object') return []
  const raw = (results as { recommendedTopics?: unknown }).recommendedTopics
  if (!Array.isArray(raw)) return []
  const out: RecommendedTopic[] = []
  for (const t of raw) {
    if (!t || typeof t !== 'object') continue
    const { slug, name, priority } = t as { slug?: unknown; name?: unknown; priority?: unknown }
    if (typeof slug !== 'string' || !slug) continue
    out.push({
      slug,
      name: typeof name === 'string' && name ? name : slug,
      priority: priority === 'high' || priority === 'low' ? priority : 'medium',
    })
  }
  return out
}

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const userId = session.user.id

    // Newest first, so the first row matching a prefix IS that course's latest.
    const attempts = await prisma.diagnosticTest.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      select: { category: true, results: true, createdAt: true },
      take: 200,
    })
    if (attempts.length === 0) return NextResponse.json({ plans: [] })

    // Latest attempt per course, plus the topics it recommended.
    const perCourse = new Map<string, { takenAt: Date; topics: RecommendedTopic[] }>()
    for (const course of CLASS_PLAN_COURSES) {
      const latest = attempts.find((a) => a.category.startsWith(course.categoryPrefix))
      if (!latest) continue
      const topics = parseRecommended(latest.results)
      if (topics.length === 0) continue
      perCourse.set(course.key, { takenAt: latest.createdAt, topics })
    }
    if (perCourse.size === 0) return NextResponse.json({ plans: [] })

    const allSlugs = Array.from(
      new Set(Array.from(perCourse.values()).flatMap((p) => p.topics.map((t) => t.slug))),
    )

    const [topicRows, progressRows, exitRows] = await Promise.all([
      prisma.topic.findMany({ where: { slug: { in: allSlugs } }, select: { id: true, slug: true } }),
      prisma.topicProgress.findMany({
        where: { userId, topic: { slug: { in: allSlugs } } },
        select: { masteryLevel: true, topic: { select: { slug: true } } },
      }),
      prisma.exitQuizAttempt.findMany({
        where: { userId, topicSlug: { in: allSlugs } },
        select: { topicSlug: true, score: true, totalQuestions: true },
      }),
    ])

    const known = new Set(topicRows.map((t) => t.slug))
    const mastery = new Map(progressRows.map((p) => [p.topic.slug, p.masteryLevel]))
    const bestExit = new Map<string, number>()
    for (const a of exitRows) {
      if (!a.totalQuestions) continue
      const pct = Math.round((a.score / a.totalQuestions) * 100)
      if (pct > (bestExit.get(a.topicSlug) ?? -1)) bestExit.set(a.topicSlug, pct)
    }

    const plans = CLASS_PLAN_COURSES.flatMap((course) => {
      const plan = perCourse.get(course.key)
      if (!plan) return []
      const topics = plan.topics.map((t) => {
        const satisfied = (mastery.get(t.slug) ?? 0) >= 1 || (bestExit.get(t.slug) ?? 0) >= REQUIRED_SCORE_PERCENT
        return {
          ...t,
          topicPath: `/topics/${t.slug}`,
          topicFound: known.has(t.slug),
          bestExitScorePercent: bestExit.get(t.slug) ?? null,
          isSatisfied: satisfied,
        }
      })
      const pending = topics.filter((t) => !t.isSatisfied).length
      return [{
        courseKey: course.key,
        label: course.label,
        courseSlug: course.courseSlug ?? null,
        diagnosticRoute: diagnosticRouteForKey(course.key),
        // Only the MCAT locks retakes behind finishing the plan; elsewhere the
        // same numbers are information rather than a gate.
        gated: course.gated === true,
        requiredScorePercent: REQUIRED_SCORE_PERCENT,
        takenAt: plan.takenAt.toISOString(),
        topics,
        summary: { total: topics.length, completed: topics.length - pending, pending },
        canRetakeDiagnostic: course.gated === true ? pending === 0 : true,
      }]
    })

    // Most work outstanding first — that is the course that needs attention.
    plans.sort((a, b) => b.summary.pending - a.summary.pending)

    return NextResponse.json({ plans })
  } catch (error) {
    console.error('[study-plan plan-status] failed:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
