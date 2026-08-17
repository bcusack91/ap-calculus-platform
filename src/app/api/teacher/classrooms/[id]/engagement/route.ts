import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireClassroomAccess } from '@/lib/teacher-auth'

interface Ctx { params: Promise<{ id: string }> }

/**
 * GET /api/teacher/classrooms/[id]/engagement — honest time-on-task accounting.
 *
 * Roster view: per student, total study seconds (TopicProgress.timeSpent has
 * been accumulating per lesson all along), lessons completed, and a
 * CLICK-THROUGH count — lessons marked complete in under 5 minutes (owner
 * decision), which almost always means clicking through for credit.
 *
 * ?student=<userId> adds that student's per-lesson rows (topic, course,
 * status, minutes, flag) so the teacher can see exactly where time went.
 *
 * Also returns live-session attendance: who was in each session and for
 * roughly how many minutes (lastSeenAt − joinedAt from the poll heartbeats).
 */

const CLICK_THROUGH_SECONDS = 5 * 60
const COMPLETED_STATUSES = ['COMPLETED', 'MASTERED']

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

  const detailUserId = req.nextUrl.searchParams.get('student')

  const [progressRows, sessions, flashcardDays] = await Promise.all([
    userIds.length === 0 ? [] : prisma.topicProgress.findMany({
      where: { userId: { in: userIds } },
      select: {
        userId: true, status: true, timeSpent: true, lastAccessed: true, completedAt: true,
        topic: { select: { title: true, slug: true, category: { select: { course: { select: { name: true } } } } } },
      },
    }),
    prisma.liveSession.findMany({
      where: { classroomId: id },
      orderBy: { startedAt: 'desc' },
      take: 20,
      select: {
        id: true, mode: true, status: true, startedAt: true, endedAt: true,
        attendance: { select: { userId: true, joinedAt: true, lastSeenAt: true } },
      },
    }),
    // Daily flashcard habit — last 7 UTC days per student (owner: SAT students
    // should be doing their flashcards 5-7 days a week).
    userIds.length === 0 ? [] : prisma.flashcardDailyActivity.findMany({
      where: { userId: { in: userIds }, day: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } },
      select: { userId: true, day: true, reviews: true },
    }),
  ])

  const perStudent = new Map<string, { totalSeconds: number; completed: number; flagged: number }>()
  for (const uid of userIds) perStudent.set(uid, { totalSeconds: 0, completed: 0, flagged: 0 })
  for (const r of progressRows) {
    const s = perStudent.get(r.userId)
    if (!s) continue
    s.totalSeconds += r.timeSpent
    if (COMPLETED_STATUSES.includes(r.status)) {
      s.completed++
      if (r.timeSpent < CLICK_THROUGH_SECONDS) s.flagged++
    }
  }

  const students = members.map(m => {
    const s = perStudent.get(m.userId)!
    return {
      userId: m.userId,
      name: nameOf.get(m.userId) ?? 'Student',
      totalSeconds: s.totalSeconds,
      completedLessons: s.completed,
      flaggedLessons: s.flagged,
    }
  }).sort((a, b) => a.name.localeCompare(b.name))

  // Per-lesson drill-down for one student.
  let detail: unknown = null
  if (detailUserId && userIds.includes(detailUserId)) {
    detail = {
      userId: detailUserId,
      name: nameOf.get(detailUserId),
      topics: progressRows
        .filter(r => r.userId === detailUserId)
        .sort((a, b) => (b.lastAccessed?.getTime() ?? 0) - (a.lastAccessed?.getTime() ?? 0))
        .map(r => ({
          title: r.topic?.title ?? '(unknown)',
          slug: r.topic?.slug ?? null,
          course: r.topic?.category?.course?.name ?? null,
          status: r.status,
          seconds: r.timeSpent,
          lastAccessed: r.lastAccessed,
          flagged: COMPLETED_STATUSES.includes(r.status) && r.timeSpent < CLICK_THROUGH_SECONDS,
        })),
    }
  }

  // Build per-student last-7-days flashcard grid (UTC days, oldest first).
  const dayKeys: string[] = []
  for (let i = 6; i >= 0; i--) {
    dayKeys.push(new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().slice(0, 10))
  }
  const reviewsByUserDay = new Map<string, number>()
  for (const r of flashcardDays) {
    reviewsByUserDay.set(`${r.userId}|${r.day.toISOString().slice(0, 10)}`, r.reviews)
  }
  const flashcards = members.map(m => {
    const days = dayKeys.map(k => reviewsByUserDay.get(`${m.userId}|${k}`) ?? 0)
    const activeDays = days.filter(n => n > 0).length
    return {
      userId: m.userId,
      name: nameOf.get(m.userId) ?? 'Student',
      days,
      activeDays,
      totalReviews: days.reduce((a, b) => a + b, 0),
    }
  }).sort((a, b) => a.name.localeCompare(b.name))

  return NextResponse.json({
    clickThroughThresholdSeconds: CLICK_THROUGH_SECONDS,
    students,
    detail,
    flashcards,
    flashcardDayKeys: dayKeys,
    sessions: sessions.map(s => ({
      id: s.id,
      mode: s.mode,
      status: s.status,
      startedAt: s.startedAt,
      endedAt: s.endedAt,
      attendees: s.attendance
        .filter(a => nameOf.has(a.userId))
        .map(a => ({
          name: nameOf.get(a.userId) ?? 'Student',
          minutes: Math.max(1, Math.round((a.lastSeenAt.getTime() - a.joinedAt.getTime()) / 60000)),
        }))
        .sort((a, b) => b.minutes - a.minutes),
    })),
  }, { headers: { 'Cache-Control': 'private, no-store' } })
}
