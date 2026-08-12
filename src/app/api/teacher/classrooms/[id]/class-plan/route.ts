import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireClassroomAccess } from '@/lib/teacher-auth'
import { classPlanCourse, courseForCategory, scoreLabelFromResults, CLASS_PLAN_COURSES } from '@/lib/class-plan-config'

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
 * overrule. Homework status uses the same module-cleared rule everywhere
 * (entrance mastery, or best exit quiz >=80%); only the MCAT ties it to a
 * retake LOCK (`gated`) — for other courses it's informational.
 */

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
const REQUIRED_EXIT_PERCENT = 80

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
        return { key, label: c.label, gated: !!c.gated, studentsWithAttempts: set.size }
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
    select: { userId: true, createdAt: true, results: true },
  })

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
      select: { userId: true, topicId: true, masteryLevel: true },
    }),
    allSlugs.length === 0 ? [] : prisma.exitQuizAttempt.findMany({
      where: { userId: { in: userIds }, topicSlug: { in: allSlugs } },
      select: { userId: true, topicSlug: true, score: true, totalQuestions: true },
    }),
  ])
  const mastery = new Map<string, number>()
  for (const r of progressRows) {
    const slug = slugById.get(r.topicId)
    if (slug) mastery.set(`${r.userId}|${slug}`, r.masteryLevel)
  }
  const bestExit = new Map<string, number>()
  for (const r of exitRows) {
    if (!r.totalQuestions || r.totalQuestions <= 0) continue
    const key = `${r.userId}|${r.topicSlug}`
    const pct = Math.round((r.score / r.totalQuestions) * 100)
    if ((bestExit.get(key) ?? -1) < pct) bestExit.set(key, pct)
  }
  const moduleCleared = (userId: string, slug: string) =>
    (mastery.get(`${userId}|${slug}`) ?? 0) >= 1 || (bestExit.get(`${userId}|${slug}`) ?? 0) >= REQUIRED_EXIT_PERCENT

  // ---- Class aggregation ----
  const agg = new Map<string, { slug: string; name: string; weighted: number; students: { name: string; priority: string; cleared: boolean }[] }>()
  for (const [userId, recs] of recsByUser) {
    for (const t of recs) {
      const entry = agg.get(t.slug) ?? { slug: t.slug, name: t.name, weighted: 0, students: [] }
      entry.weighted += t.priority === 'high' ? 2 : 1
      entry.students.push({ name: nameOf.get(userId) ?? 'Student', priority: t.priority, cleared: moduleCleared(userId, t.slug) })
      agg.set(t.slug, entry)
    }
  }
  const topicFound = new Set(topics.map(t => t.slug))
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
    const recs = recsByUser.get(m.userId) ?? []
    const pending = recs.filter(t => !moduleCleared(m.userId, t.slug)).length
    return {
      userId: m.userId,
      name: nameOf.get(m.userId) ?? 'Student',
      takenAt: attempt?.createdAt ?? null,
      stale: attempt ? now - attempt.createdAt.getTime() > STALE_MS : false,
      scoreLabel: attempt ? scoreLabelFromResults(attempt.results) : null,
      recommendedCount: recs.length,
      pendingCount: pending,
      canRetake: recs.length === 0 || pending === 0,
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
