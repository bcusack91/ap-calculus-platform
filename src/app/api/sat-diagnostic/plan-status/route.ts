import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { HARD_MODULE_CATEGORY } from '@/data/sat-practice/hard-modules'
import {
  CORE_MODULE_CATEGORY,
  coreSkillsTrackStatus,
  type SatTrackOverride,
} from '@/data/sat-practice/core-skills-modules'

type RecommendedTopic = {
  slug: string
  name: string
  priority: 'high' | 'medium' | 'low'
}

function parseRecommendedTopics(results: unknown): RecommendedTopic[] {
  if (!results || typeof results !== 'object') return []
  const recommendedRaw = (results as { recommendedTopics?: unknown }).recommendedTopics
  if (!Array.isArray(recommendedRaw)) return []
  return recommendedRaw
    .map((topic): RecommendedTopic | null => {
      if (!topic || typeof topic !== 'object') return null
      const t = topic as { slug?: unknown; name?: unknown; priority?: unknown }
      const slug = typeof t.slug === 'string' ? t.slug : ''
      const name = typeof t.name === 'string' ? t.name : slug
      const priority: 'high' | 'medium' | 'low' = t.priority === 'high' || t.priority === 'low' ? t.priority : 'medium'
      if (!slug) return null
      return { slug, name, priority }
    })
    .filter((t): t is RecommendedTopic => t !== null)
}

function priorityValue(p: RecommendedTopic['priority']): number {
  return p === 'high' ? 0 : p === 'medium' ? 1 : 2
}

/**
 * The diagnostic can recommend six slugs that have no `-advanced` twin of their
 * own. Each is a narrower cut of a topic that does, so hard-track students are
 * routed to the advanced lesson covering the same skill rather than dropped
 * back into the general lane. (Subject-verb agreement and the other grammar
 * slugs are taught inside the sentence-structure advanced bundle.)
 */
const ADVANCED_SLUG_ALIASES: Record<string, string> = {
  'sat-finding-textual-evidence': 'sat-command-evidence',
  'sat-conciseness-redundancy': 'sat-effective-language-use',
  'sat-punctuation-commas-semicolons': 'sat-punctuation',
  'sat-grammar-usage': 'sat-sentence-structure',
  'sat-grammar-conventions': 'sat-sentence-structure',
  'sat-subject-verb-agreement': 'sat-sentence-structure',
}

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const [latestDiagnostic, user, regularAttempts, coreModuleAttempts] = await Promise.all([
      prisma.diagnosticTest.findFirst({
        // The study plan follows the student's LATEST diagnostic attempt of any
        // kind: the regular screen, a hard-track module (recommendations from
        // the 700-800 items they missed), or a Core Skills module.
        where: {
          userId: session.user.id,
          OR: [
            { category: 'sat-full-diagnostic' },
            { category: { startsWith: HARD_MODULE_CATEGORY } },
            { category: { startsWith: CORE_MODULE_CATEGORY } },
          ],
        },
        orderBy: { createdAt: 'desc' },
        select: { id: true, category: true, createdAt: true, results: true },
      }),
      prisma.user.findUnique({
        where: { id: session.user.id },
        select: { satTrackOverride: true },
      }),
      prisma.diagnosticTest.findMany({
        where: { userId: session.user.id, category: 'sat-full-diagnostic' },
        orderBy: { createdAt: 'desc' },
        select: { results: true },
      }),
      prisma.diagnosticTest.findMany({
        where: { userId: session.user.id, category: { startsWith: CORE_MODULE_CATEGORY } },
        orderBy: { createdAt: 'desc' },
        select: { category: true, results: true },
      }),
    ])

    // Placement is a property of the STUDENT, not of the last attempt: a
    // student who scored 620 on the regular screen needs Core Skills lessons
    // immediately, without first sitting a Core Skills module.
    const coreStatus = coreSkillsTrackStatus(
      regularAttempts,
      coreModuleAttempts,
      (user?.satTrackOverride ?? null) as SatTrackOverride,
    )

    if (!latestDiagnostic) {
      return NextResponse.json({
        hasDiagnostic: false,
        canRetakeDiagnostic: true,
        requiredScorePercent: 80,
        recommendedTopics: [],
        pendingTopics: [],
      })
    }

    const dedupedMap = new Map<string, RecommendedTopic>()
    parseRecommendedTopics(latestDiagnostic.results).forEach((topic) => {
      const existing = dedupedMap.get(topic.slug)
      if (!existing || priorityValue(topic.priority) < priorityValue(existing.priority)) {
        dedupedMap.set(topic.slug, topic)
      }
    })

    let recommendedTopics = Array.from(dedupedMap.values()).sort(
      (a, b) => priorityValue(a.priority) - priorityValue(b.priority),
    )

    // Hard-track attempts recommend the 700-800 ADVANCED lane when a dedicated
    // advanced lesson exists for the topic; otherwise the regular lesson (with
    // its entrance-quiz test-out) stands in.
    // Core Skills placement wins over the hard lane — the two can never both
    // apply, but placement is about the student while the hard lane is about
    // the last attempt, so state the precedence explicitly.
    const isHardSource = !coreStatus.placed && latestDiagnostic.category.startsWith(HARD_MODULE_CATEGORY)
    const suffix = coreStatus.placed ? '-core-skills' : '-advanced'

    if ((coreStatus.placed || isHardSource) && recommendedTopics.length > 0) {
      const advancedFor = (slug: string) => `${ADVANCED_SLUG_ALIASES[slug] ?? slug}${suffix}`
      const advTopics = await prisma.topic.findMany({
        where: { slug: { in: recommendedTopics.map((t) => advancedFor(t.slug)) } },
        select: { slug: true, title: true },
      })
      const advTitle = new Map(advTopics.map((t) => [t.slug, t.title]))
      recommendedTopics = recommendedTopics.map((t) => {
        const adv = advancedFor(t.slug)
        return advTitle.has(adv) ? { ...t, slug: adv, name: advTitle.get(adv)! } : t
      })
      // Several base slugs can alias onto one advanced lesson, so collapse
      // duplicates and keep the highest priority among them.
      const collapsed = new Map<string, RecommendedTopic>()
      recommendedTopics.forEach((t) => {
        const existing = collapsed.get(t.slug)
        if (!existing || priorityValue(t.priority) < priorityValue(existing.priority)) {
          collapsed.set(t.slug, t)
        }
      })
      recommendedTopics = Array.from(collapsed.values()).sort(
        (a, b) => priorityValue(a.priority) - priorityValue(b.priority),
      )
    }

    if (recommendedTopics.length === 0) {
      return NextResponse.json({
        hasDiagnostic: true,
        diagnosticId: latestDiagnostic.id,
        diagnosticCreatedAt: latestDiagnostic.createdAt,
        canRetakeDiagnostic: true,
        requiredScorePercent: 80,
        recommendedTopics: [],
        pendingTopics: [],
      })
    }

    const topicSlugs = recommendedTopics.map((t) => t.slug)
    const topics = await prisma.topic.findMany({
      where: { slug: { in: topicSlugs } },
      select: { id: true, slug: true },
    })

    const topicIdToSlug = new Map(topics.map((t) => [t.id, t.slug]))
    const slugToTopicId = new Map(topics.map((t) => [t.slug, t.id]))

    const [progressRows, exitAttempts] = await Promise.all([
      prisma.topicProgress.findMany({
        where: { userId: session.user.id, topicId: { in: topics.map((t) => t.id) } },
        select: { topicId: true, masteryLevel: true },
      }),
      prisma.exitQuizAttempt.findMany({
        where: { userId: session.user.id, topicSlug: { in: topicSlugs } },
        orderBy: { completedAt: 'desc' },
        select: { topicSlug: true, score: true, totalQuestions: true, completedAt: true },
      }),
    ])

    const progressBySlug = new Map<string, number>()
    progressRows.forEach((row) => {
      const slug = topicIdToSlug.get(row.topicId)
      if (slug) progressBySlug.set(slug, row.masteryLevel)
    })

    const bestExitBySlug = new Map<string, { scorePercent: number; score: number; totalQuestions: number; completedAt: Date }>()
    exitAttempts.forEach((a) => {
      if (!a.totalQuestions || a.totalQuestions <= 0) return
      const pct = Math.round((a.score / a.totalQuestions) * 100)
      const existing = bestExitBySlug.get(a.topicSlug)
      if (!existing || pct > existing.scorePercent) {
        bestExitBySlug.set(a.topicSlug, { scorePercent: pct, score: a.score, totalQuestions: a.totalQuestions, completedAt: a.completedAt })
      }
    })

    const requiredScorePercent = 80

    const recommendedWithStatus = recommendedTopics.map((topic) => {
      const masteryLevel = progressBySlug.get(topic.slug) ?? 0
      const bestExit = bestExitBySlug.get(topic.slug)
      const entranceSatisfied = masteryLevel >= 1
      const exitSatisfied = (bestExit?.scorePercent ?? 0) >= requiredScorePercent
      const isSatisfied = entranceSatisfied || exitSatisfied
      return {
        ...topic,
        topicPath: `/topics/${topic.slug}`,
        topicFound: slugToTopicId.has(topic.slug),
        masteryLevel,
        entranceSatisfied,
        bestExitScorePercent: bestExit?.scorePercent ?? null,
        bestExitScore: bestExit ? `${bestExit.score}/${bestExit.totalQuestions}` : null,
        bestExitCompletedAt: bestExit?.completedAt ?? null,
        exitSatisfied,
        isSatisfied,
      }
    })

    const pendingTopics = recommendedWithStatus.filter((t) => !t.isSatisfied)

    return NextResponse.json({
      hasDiagnostic: true,
      diagnosticId: latestDiagnostic.id,
      diagnosticCreatedAt: latestDiagnostic.createdAt,
      /** 'hard' when the plan comes from a hard-track module attempt. */
      planSource: coreStatus.placed ? 'core-skills' : isHardSource ? 'hard' : 'regular',
      /** Core Skills placement, so the page can show progress toward graduating. */
      coreSkills: {
        placed: coreStatus.placed,
        graduated: coreStatus.graduated,
        bestModuleScore: coreStatus.bestModuleScore,
        pointsToGraduate: coreStatus.pointsToGraduate,
        completedModules: coreStatus.completedModules,
        nextModule: coreStatus.nextModule,
        source: coreStatus.source,
      },
      canRetakeDiagnostic: pendingTopics.length === 0,
      requiredScorePercent,
      recommendedTopics: recommendedWithStatus,
      pendingTopics,
      summary: {
        totalRecommended: recommendedWithStatus.length,
        completed: recommendedWithStatus.length - pendingTopics.length,
        pending: pendingTopics.length,
      },
    })
  } catch (error) {
    console.error('SAT plan status error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
