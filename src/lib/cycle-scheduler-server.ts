import { prisma } from '@/lib/prisma'
import { buildMcatPlanStatus } from '@/lib/mcat-plan'
import { buildSatPlan } from '@/lib/sat-plan'
import { unitTestStatusFor } from '@/lib/mcat-unit-test-server'
import { isOpenClassDiagnostic } from '@/lib/class-diagnostic-open'
import { FULL_LENGTH_COURSES, isFullLengthCourse, type FullLengthCourse } from '@/lib/full-length-progress'
import {
  CYCLE_KEY_PREFIX,
  CYCLE_PLAN_GOAL,
  cycleUnitsFromPlan,
  deadlineDay,
  planSchedule,
  reconcileTasks,
  type CycleUnit,
} from '@/lib/cycle-scheduler'

export interface CycleDueDate {
  dueDate: Date | null
  /** 'class' = a teacher's class diagnostic; 'self' = the student's own target. */
  source: 'class' | 'self' | null
  classroomName?: string | null
}

/** The live cycle as schedulable units, or null before the first diagnostic. */
export async function currentCycleUnits(userId: string, course: FullLengthCourse): Promise<{ diagnosticId: string; units: CycleUnit[] } | null> {
  if (course === 'mcat') {
    const p = await buildMcatPlanStatus(userId)
    if (!p.hasDiagnostic || !p.diagnosticId) return null
    return {
      diagnosticId: p.diagnosticId,
      units: cycleUnitsFromPlan({
        course,
        diagnosticId: p.diagnosticId,
        topics: p.recommendedTopics.map((t) => ({ slug: t.slug, name: t.name, isSatisfied: t.isSatisfied })),
        unitTestPassed: p.unitTest?.passed ?? false,
      }),
    }
  }
  const p = await buildSatPlan(userId)
  if (!p.hasDiagnostic) return null
  const unitTest = await unitTestStatusFor(userId, p.diagnosticId, p.pendingTopics.length === 0, 'sat')
  return {
    diagnosticId: p.diagnosticId,
    units: cycleUnitsFromPlan({
      course,
      diagnosticId: p.diagnosticId,
      topics: p.recommendedTopics.map((t) => ({ slug: t.slug, name: t.name, isSatisfied: t.isSatisfied })),
      unitTestPassed: unitTest.passed,
    }),
  }
}

/** The earliest due date among this course's class diagnostics the student still has to take. */
export async function classDueDateFor(userId: string, course: FullLengthCourse): Promise<{ dueDate: Date; classroomName: string } | null> {
  const memberships = await prisma.classroomMember.findMany({ where: { userId, isActive: true }, select: { classroomId: true } })
  if (memberships.length === 0) return null
  const diagnostics = await prisma.classDiagnostic.findMany({
    where: { classroomId: { in: memberships.map((m) => m.classroomId) }, courseKey: course, dueDate: { not: null } },
    orderBy: { dueDate: 'asc' },
    select: {
      id: true, dueDate: true, createdAt: true, testData: true,
      classroom: { select: { name: true } },
      attempts: { where: { userId }, select: { id: true }, take: 1 },
    },
  })
  if (diagnostics.length === 0) return null
  let latestTaken: Date | null = null
  if (diagnostics.some((d) => isOpenClassDiagnostic(d.testData))) {
    const latest = await prisma.diagnosticTest.findFirst({
      where: { userId, category: { startsWith: course === 'mcat' ? 'mcat-full-diagnostic' : 'sat-full-diagnostic' } },
      orderBy: { createdAt: 'desc' },
      select: { createdAt: true },
    })
    latestTaken = latest?.createdAt ?? null
  }
  for (const d of diagnostics) {
    const pending = isOpenClassDiagnostic(d.testData) ? !latestTaken || latestTaken < d.createdAt : d.attempts.length === 0
    if (pending && d.dueDate) return { dueDate: deadlineDay(d.dueDate), classroomName: d.classroom.name }
  }
  return null
}

/** The student's cycle plan for a course (goalType CYCLE), created on demand. */
export async function cyclePlanFor(userId: string, course: FullLengthCourse, create: boolean) {
  const existing = await prisma.studyPlan.findFirst({
    where: { userId, goalType: CYCLE_PLAN_GOAL, courseSlug: course },
    orderBy: { createdAt: 'desc' },
  })
  if (existing || !create) return existing
  return prisma.studyPlan.create({
    data: { userId, title: `${FULL_LENGTH_COURSES[course].label} study cycle`, goalType: CYCLE_PLAN_GOAL, courseSlug: course, isActive: true },
  })
}

/** Which due date drives the schedule: the teacher's class diagnostic first, else the student's own target. */
export async function effectiveDueDate(userId: string, course: FullLengthCourse): Promise<CycleDueDate> {
  const fromClass = await classDueDateFor(userId, course)
  if (fromClass) return { dueDate: fromClass.dueDate, source: 'class', classroomName: fromClass.classroomName }
  const plan = await cyclePlanFor(userId, course, false)
  if (plan?.examDate) return { dueDate: plan.examDate, source: 'self' }
  return { dueDate: null, source: null }
}

export interface SyncResult {
  planId: string
  diagnosticId: string
  dueDate: Date | null
  created: number
  updated: number
  removed: number
}

/**
 * Bring the student's cycle tasks in line with their live plan and the due
 * date. With `dueDate` given, it becomes the plan's target (null clears a
 * self-set one). With no due date at all, nothing is scheduled — cleared
 * lessons are still ticked and stale tasks removed.
 */
export async function syncCycleSchedule(
  userId: string,
  course: FullLengthCourse,
  opts: { dueDate?: Date | null; now?: Date } = {},
): Promise<SyncResult | null> {
  const now = opts.now ?? new Date()
  const cycle = await currentCycleUnits(userId, course)
  if (!cycle) return null
  const plan = await cyclePlanFor(userId, course, true)
  if (!plan) return null
  let dueDate: Date | null
  if (opts.dueDate !== undefined) {
    dueDate = opts.dueDate
    if ((plan.examDate?.getTime() ?? null) !== (dueDate?.getTime() ?? null)) {
      await prisma.studyPlan.update({ where: { id: plan.id }, data: { examDate: dueDate } })
    }
  } else {
    dueDate = (await effectiveDueDate(userId, course)).dueDate
  }
  const existing = await prisma.studyTask.findMany({
    where: { planId: plan.id, sourceKey: { startsWith: CYCLE_KEY_PREFIX } },
    select: { id: true, sourceKey: true, title: true, dueDate: true, autoDueDate: true, completed: true },
  })
  // No deadline: keep what exists honest (ticks, leftovers) without dating anything new.
  const schedule = dueDate
    ? planSchedule(cycle.units, now, dueDate)
    : cycle.units.filter((u) => existing.some((t) => t.sourceKey === u.key)).map((u) => {
        const t = existing.find((x) => x.sourceKey === u.key)!
        return { ...u, autoDueDate: t.autoDueDate ?? t.dueDate ?? now }
      })
  const changes = reconcileTasks(existing, schedule, now)
  await prisma.$transaction([
    ...(changes.create.length
      ? [prisma.studyTask.createMany({ data: changes.create.map((c) => ({ ...c, planId: plan.id })) })]
      : []),
    ...changes.update.map((u) => prisma.studyTask.update({ where: { id: u.id }, data: u.data })),
    ...(changes.remove.length ? [prisma.studyTask.deleteMany({ where: { id: { in: changes.remove } } })] : []),
  ])
  return { planId: plan.id, diagnosticId: cycle.diagnosticId, dueDate, created: changes.create.length, updated: changes.update.length, removed: changes.remove.length }
}

/**
 * A teacher set a class diagnostic's due date: schedule every active member's
 * current cycle up to it. Students who have not taken the course's diagnostic
 * yet are skipped here and picked up when they open their calendar.
 */
export async function scheduleClassroom(classroomId: string, courseKey: string, dueDate: Date): Promise<number> {
  if (!isFullLengthCourse(courseKey)) return 0
  const members = await prisma.classroomMember.findMany({ where: { classroomId, isActive: true }, select: { userId: true } })
  let scheduled = 0
  for (let i = 0; i < members.length; i += 5) {
    const results = await Promise.all(
      members.slice(i, i + 5).map((m) =>
        syncCycleSchedule(m.userId, courseKey, { dueDate }).catch((err) => {
          console.error('[cycle-scheduler] member sync failed (ignored):', m.userId, err)
          return null
        }),
      ),
    )
    scheduled += results.filter(Boolean).length
  }
  return scheduled
}
