import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireClassroomAccess } from '@/lib/teacher-auth'
import { classPlanCourse, courseForCategory, scoreLabelFromResults, CLASS_PLAN_COURSES } from '@/lib/class-plan-config'
import { isEntranceMastery } from '@/lib/flashcard-unlock'
import { TOPIC_CLEAR_PERCENT } from '@/lib/mastery'
import { hasExitQuiz } from '@/data/exit-quizzes'
import { passedUnitTestCycles } from '@/lib/mcat-unit-test-server'
import { buildSatPlan, satPlacementsFor, type SatPlacement, type SatPlan } from '@/lib/sat-plan'

interface Ctx { params: Promise<{ id: string }> }

/**
 * GET /api/teacher/classrooms/[id]/class-plan[?course=<key>]
 *
 * The class-level layer of the weekly diagnostic loop, for ANY course with a
 * diagnostic (MCAT, SAT, every AP, core math — see class-plan-config.ts):
 * students test weekly and study their personal recommendations as homework;
 * this pools every active student's LATEST attempt for the course and ranks
 * what the CLASS collectively needs, sized to the week's four 45-minute
 * teaching blocks (2 meetings x 90 min).
 *
 * Without ?course: discovery — which courses this roster has attempts for.
 *
 * Ranking: high-priority recommendation = 2 points, medium/low = 1, summed
 * across students; per-topic names/counts returned so the teacher can
 * overrule. Homework status uses the same module-cleared rule as the
 * student's own plan: an entrance-quiz test-out, a best exit quiz >=80%, or —
 * only for topics with no exit quiz — the finished lesson. (It used to accept
 * any finished lesson, which reaches mastery 1.0 without the quiz, so the
 * teacher saw modules as cleared that the student's plan still listed.) Only
 * the MCAT ties it to a retake LOCK (`gated`) — elsewhere it's informational.
 *
 * SAT students each study in a lane (Core Skills / standard / 700-800), so
 * their homework comes from the same builder as their own plan (sat-plan.ts),
 * and the class ranking groups a lane lesson under the skill it teaches.
 */

/** Track-lesson slug → the base skill slug a teacher teaches to the class. */
const baseSatSlug = (slug: string) => slug.replace(/-(core-skills|advanced)$/, '')

interface RecommendedTopic { slug: string; name: string; priority: 'high' | 'medium' | 'low' }

function parseRecommendedTopics(results: unknown): RecommendedTopic[] {
  if (!results || typeof results !== 'object') return []
  const raw = (results as { recommendedTopics?: unknown }).recommendedTopics
  if (!Array.isArray(raw)) return []
  const out: RecommendedTopic[] = []
  for (const t of raw) {
    if (!t || typeof t !== 'object') continue
    const slug = typeof (t as { slug?: unknown }).slug === 'string' ? (t as { slug: string }).slug : ''
    if (!slug) continue
    const name = typeof (t as { name?: unknown }).name === 'string' ? (t as { name: string }).name : slug
    const p = (t as { priority?: unknown }).priority
    out.push({ slug, name, priority: p === 'high' || p === 'low' ? p : 'medium' })
  }
  return out
}

const STALE_MS = 7 * 24 * 60 * 60 * 1000
const REQUIRED_EXIT_PERCENT = TOPIC_CLEAR_PERCENT

export async function GET(req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const access = await requireClassroomAccess(id)
  if ('error' in access) return access.error

  const members = await prisma.classroomMember.findMany({
    where: { classroomId: id, isActive: true },
    select: { userId: true, nickname: true, user: { select: { name: true } } },
  })
  const userIds = members.map(m => m.userId)
  const nameOf = new Map(members.map(m => [m.userId, m.nickname || m.user.name || 'Student']))

  const courseKey = req.nextUrl.searchParams.get('course')

  // ---- Discovery: which courses does this roster have diagnostics for? ----
  if (!courseKey) {
    const rows = userIds.length === 0 ? [] : await prisma.diagnosticTest.findMany({
      where: {
        userId: { in: userIds },
        OR: CLASS_PLAN_COURSES.map(c => ({ category: { startsWith: c.categoryPrefix } })),
      },
      select: { userId: true, category: true },
      distinct: ['userId', 'category'],
    })
    const studentsPerCourse = new Map<string, Set<string>>()
    for (const r of rows) {
      const course = courseForCategory(r.category)
      if (!course) continue
      const set = studentsPerCourse.get(course.key) ?? new Set<string>()
      set.add(r.userId)
      studentsPerCourse.set(course.key, set)
    }
    const available = [...studentsPerCourse.entries()]
      .map(([key, set]) => {
        const c = classPlanCourse(key)!
        return { key, label: c.label, gated: !!c.gated, courseSlug: c.courseSlug ?? null, studentsWithAttempts: set.size }
      })
      .sort((a, b) => b.studentsWithAttempts - a.studentsWithAttempts || a.label.localeCompare(b.label))
    return NextResponse.json(
      { availableCourses: available, totalStudents: members.length },
      { headers: { 'Cache-Control': 'private, no-store' } },
    )
  }

  const course = classPlanCourse(courseKey)
  if (!course) return NextResponse.json({ error: `Unknown course: ${courseKey}` }, { status: 400 })

  // ---- Latest attempt per student for this course ----
  const attempts = userIds.length === 0 ? [] : await prisma.diagnosticTest.findMany({
    where: { userId: { in: userIds }, category: { startsWith: course.categoryPrefix } },
    orderBy: { createdAt: 'desc' },
    distinct: ['userId'],
    select: { id: true, userId: true, createdAt: true, results: true },
  })
  // MCAT: the cycle ends with the unit test; only a pass opens the next diagnostic.
  const unitTestPassed = course.gated
    ? await passedUnitTestCycles(attempts.map(a => ({ userId: a.userId, diagnosticId: a.id })))
    : new Set<string>()

  const now = Date.now()
  const byUser = new Map(attempts.map(a => [a.userId, a]))

  const recsByUser = new Map<string, RecommendedTopic[]>()
  for (const a of attempts) {
    const deduped = new Map<string, RecommendedTopic>()
    for (const t of parseRecommendedTopics(a.results)) {
      const cur = deduped.get(t.slug)
      const rank = (p: RecommendedTopic['priority']) => (p === 'high' ? 0 : p === 'medium' ? 1 : 2)
      if (!cur || rank(t.priority) < rank(cur.priority)) deduped.set(t.slug, t)
    }
    recsByUser.set(a.userId, [...deduped.values()])
  }

  // Batch the homework inputs for every recommended module of every student.
  const allSlugs = [...new Set([...recsByUser.values()].flat().map(t => t.slug))]
  const topics = allSlugs.length === 0 ? [] : await prisma.topic.findMany({
    where: { slug: { in: allSlugs } },
    select: { id: true, slug: true },
  })
  const slugById = new Map(topics.map(t => [t.id, t.slug]))
  const [progressRows, exitRows] = await Promise.all([
    topics.length === 0 ? [] : prisma.topicProgress.findMany({
      where: { userId: { in: userIds }, topicId: { in: topics.map(t => t.id) } },
      select: { userId: true, topicId: true, masteryLevel: true, masteredParts: true },
    }),
    allSlugs.length === 0 ? [] : prisma.exitQuizAttempt.findMany({
      where: { userId: { in: userIds }, topicSlug: { in: allSlugs } },
      select: { userId: true, topicSlug: true, score: true, totalQuestions: true },
    }),
  ])
  const progress = new Map<string, { masteryLevel: number; masteredParts: unknown }>()
  for (const r of progressRows) {
    const slug = slugById.get(r.topicId)
    if (slug) progress.set(`${r.userId}|${slug}`, { masteryLevel: r.masteryLevel, masteredParts: r.masteredParts })
  }
  const bestExit = new Map<string, number>()
  for (const r of exitRows) {
    if (!r.totalQuestions || r.totalQuestions <= 0) continue
    const key = `${r.userId}|${r.topicSlug}`
    const pct = Math.round((r.score / r.totalQuestions) * 100)
    if ((bestExit.get(key) ?? -1) < pct) bestExit.set(key, pct)
  }
  const moduleCleared = (userId: string, slug: string) => {
    const p = progress.get(`${userId}|${slug}`)
    const masteryLevel = p?.masteryLevel ?? 0
    return (
      isEntranceMastery({ topicSlug: slug, masteryLevel, masteredParts: p?.masteredParts }) ||
      (bestExit.get(`${userId}|${slug}`) ?? 0) >= REQUIRED_EXIT_PERCENT ||
      (!hasExitQuiz(slug) && masteryLevel >= 1)
    )
  }

  // SAT: each student's real plan (track-routed, pre-cleared topics swapped),
  // from the same builder their own dashboard uses. Built five at a time so a
  // class of 30 doesn't open 180 queries at once.
  const satPlans = new Map<string, SatPlan>()
  let satPlacements: SatPlacement[] = []
  if (course.key === 'sat') {
    satPlacements = await satPlacementsFor(userIds)
    const withAttempts = attempts.map(a => a.userId)
    for (let i = 0; i < withAttempts.length; i += 5) {
      const chunk = withAttempts.slice(i, i + 5)
      const built = await Promise.all(chunk.map(u => buildSatPlan(u)))
      chunk.forEach((u, j) => satPlans.set(u, built[j]))
    }
  }
  const satPlacementBy = new Map(satPlacements.map(p => [p.userId, p]))
  const satTitle = new Map<string, string>()
  if (course.key === 'sat') {
    const bases = [...new Set([...satPlans.values()].flatMap(pl => pl.recommendedTopics.map(t => baseSatSlug(t.slug))))]
    if (bases.length > 0) {
      for (const t of await prisma.topic.findMany({ where: { slug: { in: bases } }, select: { slug: true, title: true } })) {
        satTitle.set(t.slug, t.title)
      }
    }
  }

  // ---- Class aggregation ----
  const agg = new Map<string, { slug: string; name: string; weighted: number; students: { name: string; priority: string; cleared: boolean }[] }>()
  if (course.key === 'sat') {
    for (const [userId, plan] of satPlans) {
      for (const t of plan.recommendedTopics) {
        const base = baseSatSlug(t.slug)
        const entry = agg.get(base) ?? { slug: base, name: satTitle.get(base) ?? t.name, weighted: 0, students: [] }
        entry.weighted += t.priority === 'high' ? 2 : 1
        entry.students.push({ name: nameOf.get(userId) ?? 'Student', priority: t.priority, cleared: t.isSatisfied })
        agg.set(base, entry)
      }
    }
  } else {
    for (const [userId, recs] of recsByUser) {
      for (const t of recs) {
        const entry = agg.get(t.slug) ?? { slug: t.slug, name: t.name, weighted: 0, students: [] }
        entry.weighted += t.priority === 'high' ? 2 : 1
        entry.students.push({ name: nameOf.get(userId) ?? 'Student', priority: t.priority, cleared: moduleCleared(userId, t.slug) })
        agg.set(t.slug, entry)
      }
    }
  }
  const topicFound = new Set([...topics.map(t => t.slug), ...satTitle.keys()])
  const classTopics = [...agg.values()]
    .sort((a, b) => b.weighted - a.weighted || b.students.length - a.students.length || a.name.localeCompare(b.name))
    .slice(0, 8)
    .map(t => ({
      ...t,
      studentCount: t.students.length,
      topicPath: topicFound.has(t.slug) ? `/topics/${t.slug}` : null,
      lessonPath: topicFound.has(t.slug) ? `/topics/${t.slug}/interactive` : null,
    }))

  // ---- Per-student roster status ----
  const students = members.map(m => {
    const attempt = byUser.get(m.userId)
    const satPlan = satPlans.get(m.userId)
    const placement = satPlacementBy.get(m.userId)
    const recs = satPlan ? satPlan.recommendedTopics : recsByUser.get(m.userId) ?? []
    const pending = satPlan
      ? satPlan.recommendedTopics.filter(t => !t.isSatisfied).length
      : recs.filter(t => !moduleCleared(m.userId, t.slug)).length
    return {
      ...(placement ? { satLane: placement.lane, satOverride: placement.override } : {}),
      userId: m.userId,
      name: nameOf.get(m.userId) ?? 'Student',
      takenAt: attempt?.createdAt ?? null,
      stale: attempt ? now - attempt.createdAt.getTime() > STALE_MS : false,
      scoreLabel: attempt ? scoreLabelFromResults(attempt.results) : null,
      recommendedCount: recs.length,
      pendingCount: pending,
      ...(course.gated ? { unitTestPassed: !!attempt && unitTestPassed.has(`${m.userId}|${attempt.id}`) } : {}),
      canRetake: recs.length === 0 || (pending === 0 && (!course.gated || (!!attempt && unitTestPassed.has(`${m.userId}|${attempt.id}`)))),
    }
  }).sort((a, b) => a.name.localeCompare(b.name))

  return NextResponse.json({
    course: { key: course.key, label: course.label, gated: !!course.gated },
    classTopics,
    students,
    studentsWithAttempts: attempts.length,
    totalStudents: members.length,
  }, { headers: { 'Cache-Control': 'private, no-store' } })
}
