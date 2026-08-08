import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireClassroomAccess } from '@/lib/teacher-auth'

interface Ctx { params: Promise<{ id: string }> }

/**
 * GET /api/teacher/classrooms/[id]/mcat-class-plan
 *
 * The class-level layer of the weekly MCAT loop (owner spec):
 * students take the (procedurally generated) MCAT diagnostic weekly and study
 * their personal top-5 as homework — this endpoint pools every active
 * student's LATEST attempt and ranks what the CLASS collectively needs, so the
 * teacher can fill the week's four 45-minute teaching blocks (2 meetings x 90
 * min) with the highest-impact topics.
 *
 * Ranking: a topic scores 2 per student who has it as HIGH priority and 1 per
 * MEDIUM/LOW — so "10 students kind of need circuits" outranks "3 desperately
 * need kinematics" only when the arithmetic says so, and the per-student
 * counts are returned transparently so the teacher can overrule.
 *
 * Also reports each student's homework/retake-gate status (same rule as
 * /api/mcat-diagnostic/plan-status: a module is cleared by entrance mastery or
 * a >=80% exit quiz; all 5 cleared unlocks the next weekly diagnostic) and
 * flags stale attempts (>7 days — "hasn't tested this week").
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

export async function GET(_req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const access = await requireClassroomAccess(id)
  if ('error' in access) return access.error

  const members = await prisma.classroomMember.findMany({
    where: { classroomId: id, isActive: true },
    select: { userId: true, nickname: true, user: { select: { name: true } } },
  })
  const userIds = members.map(m => m.userId)
  const nameOf = new Map(members.map(m => [m.userId, m.nickname || m.user.name || 'Student']))

  // Latest MCAT diagnostic per student (distinct+desc = first row per user).
  const attempts = userIds.length === 0 ? [] : await prisma.diagnosticTest.findMany({
    where: { userId: { in: userIds }, category: 'mcat-full-diagnostic' },
    orderBy: { createdAt: 'desc' },
    distinct: ['userId'],
    select: { userId: true, createdAt: true, results: true },
  })

  const now = Date.now()
  const byUser = new Map(attempts.map(a => [a.userId, a]))

  // Everyone's recommendations, deduped per student (best priority wins).
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

  // Batch the retake-gate inputs for every recommended module of every student.
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
  const mastery = new Map<string, number>() // `${userId}|${slug}` -> masteryLevel
  for (const r of progressRows) {
    const slug = slugById.get(r.topicId)
    if (slug) mastery.set(`${r.userId}|${slug}`, r.masteryLevel)
  }
  const bestExit = new Map<string, number>() // `${userId}|${slug}` -> best %
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
    const results = attempt?.results as { estimatedScore?: unknown; percentage?: unknown } | undefined
    return {
      userId: m.userId,
      name: nameOf.get(m.userId) ?? 'Student',
      takenAt: attempt?.createdAt ?? null,
      stale: attempt ? now - attempt.createdAt.getTime() > STALE_MS : false,
      estimatedScore: typeof results?.estimatedScore === 'number' ? results.estimatedScore : null,
      percentage: typeof results?.percentage === 'number' ? results.percentage : null,
      recommendedCount: recs.length,
      pendingCount: pending,
      canRetake: recs.length === 0 || pending === 0,
    }
  }).sort((a, b) => a.name.localeCompare(b.name))

  return NextResponse.json({
    classTopics,
    students,
    studentsWithAttempts: attempts.length,
    totalStudents: members.length,
  }, { headers: { 'Cache-Control': 'private, no-store' } })
}
