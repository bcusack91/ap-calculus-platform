import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { diagnosticRouteForKey } from '@/lib/class-plan-config'
import { isOpenClassDiagnostic } from '@/lib/class-diagnostic-open'
import { UNIT_TEST_COURSES } from '@/lib/unit-test-courses'
import { FULL_LENGTH_COURSES, isFullLengthCourse } from '@/lib/full-length-progress'
import { CYCLE_KEY_PREFIX, CYCLE_PLAN_GOAL } from '@/lib/cycle-scheduler'
import { effectiveDueDate, syncCycleSchedule } from '@/lib/cycle-scheduler-server'

export const dynamic = 'force-dynamic'

import type { CalendarCycle, CalendarEvent, CalendarEventKind } from '@/lib/calendar-types'

const ymd = (d: Date) => d.toISOString().slice(0, 10)
const parseDay = (s: string | null, fallback: Date) => (s && /^\d{4}-\d{2}-\d{2}$/.test(s) ? new Date(`${s}T00:00:00Z`) : fallback)

function lessonHref(slug: string | null, course: string | null): string | null {
  if (!slug) return null
  return course === 'mcat' ? `/topics/${slug}` : `/topics/${slug}/interactive`
}

/**
 * GET /api/calendar?from=YYYY-MM-DD&to=YYYY-MM-DD[&sync=1]
 * Everything with a date in the range: study-plan tasks (the auto-scheduled
 * cycle plus the student's own), class diagnostics due, assignments due.
 * `sync=1` first brings the MCAT/SAT cycle schedules up to date (new
 * diagnostic, lessons cleared since, a due date the teacher just set).
 */
export async function GET(req: NextRequest) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const sp = req.nextUrl.searchParams
  const now = new Date()
  const from = parseDay(sp.get('from'), new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1)))
  const to = parseDay(sp.get('to'), new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 0)))
  const toEnd = new Date(to.getTime() + 86_400_000 - 1)

  try {
    const cycles: CalendarCycle[] = []
    for (const course of ['mcat', 'sat'] as const) {
      const cfg = FULL_LENGTH_COURSES[course]
      const hasDiagnostic = !!(await prisma.diagnosticTest.findFirst({
        where: { userId, category: { startsWith: course === 'mcat' ? 'mcat-full-diagnostic' : 'sat-full-diagnostic' } },
        select: { id: true },
      }))
      if (hasDiagnostic && sp.get('sync') === '1') {
        await syncCycleSchedule(userId, course).catch((err) => console.error('[calendar] sync failed (ignored):', course, err))
      }
      const due = await effectiveDueDate(userId, course)
      const pending = await prisma.studyTask.count({
        where: { plan: { userId, goalType: CYCLE_PLAN_GOAL, courseSlug: course }, sourceKey: { startsWith: CYCLE_KEY_PREFIX }, completed: false },
      })
      if (hasDiagnostic || due.dueDate) {
        cycles.push({ course, label: cfg.label, dueDate: due.dueDate?.toISOString() ?? null, source: due.source, classroomName: due.classroomName ?? null, pending, hasDiagnostic })
      }
    }

    const [tasks, memberships, assignments] = await Promise.all([
      prisma.studyTask.findMany({
        where: { plan: { userId, isActive: true }, dueDate: { gte: from, lte: toEnd } },
        select: {
          id: true, title: true, type: true, topicSlug: true, dueDate: true, autoDueDate: true, completed: true, sourceKey: true,
          plan: { select: { title: true, courseSlug: true, goalType: true } },
        },
        orderBy: [{ dueDate: 'asc' }, { sortOrder: 'asc' }],
      }),
      prisma.classroomMember.findMany({ where: { userId, isActive: true }, select: { classroomId: true } }),
      prisma.assignment.findMany({
        where: { classroom: { members: { some: { userId, isActive: true } } }, dueDate: { gte: from, lte: toEnd } },
        select: { id: true, title: true, dueDate: true, submissions: { where: { studentId: userId }, select: { status: true }, take: 1 } },
      }),
    ])
    const topicSlugs = [...new Set(tasks.map((t) => t.topicSlug).filter((s): s is string => !!s))]
    const knownTopics = new Set(
      topicSlugs.length ? (await prisma.topic.findMany({ where: { slug: { in: topicSlugs } }, select: { slug: true } })).map((t) => t.slug) : [],
    )

    const events: CalendarEvent[] = tasks.map((t) => {
      const auto = !!t.sourceKey?.startsWith(CYCLE_KEY_PREFIX)
      const course = t.plan.goalType === CYCLE_PLAN_GOAL ? t.plan.courseSlug : null
      const kind: CalendarEventKind = auto
        ? t.type === 'UNIT_TEST' ? 'unit-test' : t.type === 'DIAGNOSTIC' ? 'diagnostic' : 'lesson'
        : 'task'
      const href =
        kind === 'unit-test' && isFullLengthCourse(course) ? UNIT_TEST_COURSES[course].path
        : kind === 'diagnostic' && course ? diagnosticRouteForKey(course)
        : t.topicSlug && knownTopics.has(t.topicSlug) ? lessonHref(t.topicSlug, course) : null
      const date = t.dueDate ? ymd(t.dueDate) : null
      return {
        id: `task-${t.id}`,
        kind,
        title: t.title,
        date,
        at: null,
        href,
        completed: t.completed,
        course,
        planTitle: t.plan.title,
        taskId: t.id,
        auto,
        autoDate: t.autoDueDate ? ymd(t.autoDueDate) : null,
        overdue: !t.completed && !!date && date < ymd(now),
      }
    })

    if (memberships.length) {
      const diagnostics = await prisma.classDiagnostic.findMany({
        where: { classroomId: { in: memberships.map((m) => m.classroomId) }, dueDate: { gte: from, lte: toEnd } },
        select: {
          id: true, courseKey: true, title: true, dueDate: true, createdAt: true, testData: true,
          classroom: { select: { name: true } },
          attempts: { where: { userId }, select: { id: true }, take: 1 },
        },
      })
      for (const d of diagnostics) {
        const open = isOpenClassDiagnostic(d.testData)
        const taken = open
          ? !!(await prisma.diagnosticTest.findFirst({ where: { userId, category: { startsWith: d.courseKey }, createdAt: { gte: d.createdAt } }, select: { id: true } }))
          : d.attempts.length > 0
        events.push({
          id: `cd-${d.id}`,
          kind: 'class-diagnostic',
          title: `${d.classroom.name}: ${d.title}`,
          date: null,
          at: d.dueDate!.toISOString(),
          href: open ? diagnosticRouteForKey(d.courseKey) : `${diagnosticRouteForKey(d.courseKey)}?assigned=${d.id}`,
          completed: taken,
          course: d.courseKey,
          planTitle: null,
          taskId: null,
          auto: false,
          autoDate: null,
          overdue: !taken && d.dueDate!.getTime() < now.getTime(),
        })
      }
    }
    for (const a of assignments) {
      const done = a.submissions[0]?.status === 'COMPLETED'
      events.push({
        id: `as-${a.id}`,
        kind: 'assignment',
        title: a.title,
        date: null,
        at: a.dueDate!.toISOString(),
        href: '/assignments',
        completed: done,
        course: null,
        planTitle: null,
        taskId: null,
        auto: false,
        autoDate: null,
        overdue: !done && a.dueDate!.getTime() < now.getTime(),
      })
    }

    return NextResponse.json({ events, cycles, from: ymd(from), to: ymd(to) }, { headers: { 'Cache-Control': 'private, no-store' } })
  } catch (err) {
    console.error('[GET /api/calendar]', err)
    return NextResponse.json({ error: 'Could not load the calendar' }, { status: 500 })
  }
}
