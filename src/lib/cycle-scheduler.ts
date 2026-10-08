/**
 * Auto-scheduling for a student's study cycle: when the next diagnostic has a
 * due date (set by their teacher on a class diagnostic, or by the student on
 * the calendar), the cycle's remaining lessons are spread evenly over the days
 * until then, the unit test lands the day before, and the diagnostic on the
 * day. Tasks live in the student's StudyPlan (goalType CYCLE) so the calendar
 * and the planner show them and the student can move any of them.
 *
 * Re-running is safe: a task the student moved (dueDate ≠ autoDueDate) keeps
 * their date; untouched tasks follow the new spacing; cleared lessons are
 * ticked off; leftovers from an earlier cycle are removed.
 */
import { FULL_LENGTH_COURSES, type FullLengthCourse } from '@/lib/full-length-progress'

export const CYCLE_PLAN_GOAL = 'CYCLE'
export const CYCLE_KEY_PREFIX = 'cycle:'

export type CycleUnitType = 'LESSON' | 'UNIT_TEST' | 'DIAGNOSTIC'

export interface CycleUnit {
  /** Stable identity: cycle:<diagnosticId>:<slug|unit-test|diagnostic>. */
  key: string
  title: string
  type: CycleUnitType
  topicSlug: string | null
  done: boolean
  /** Lesson order in the plan (0-based); unit test and diagnostic come after. */
  order: number
}

export function cycleKey(diagnosticId: string, part: string): string {
  return `${CYCLE_KEY_PREFIX}${diagnosticId}:${part}`
}

/** Date-only tasks are stored at 12:00 UTC so every time zone shows the intended day. */
export function dayAtNoonUTC(d: Date): Date {
  return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), 12))
}

/**
 * The calendar day a deadline belongs to. Class diagnostics are stored as the
 * last instant of the chosen day in the teacher's time zone (e.g. Oct 15 in
 * New York = 03:59:59.999Z on Oct 16), so the plain UTC date would be a day
 * late for everyone west of UTC. Stepping back 12 h lands inside the intended
 * day for any zone between UTC−12 and UTC+11; date-only noon stamps are unchanged.
 */
export function deadlineDay(instant: Date): Date {
  return dayAtNoonUTC(new Date(instant.getTime() - 12 * 60 * 60 * 1000))
}

export function addDays(d: Date, days: number): Date {
  const out = new Date(d)
  out.setUTCDate(out.getUTCDate() + days)
  return out
}

const dayIndex = (d: Date) => Math.floor(dayAtNoonUTC(d).getTime() / 86_400_000)

/**
 * `count` dates spread evenly over the days from `start` to `end` (inclusive,
 * every day of the week). More tasks than days → several per day, still
 * evenly; an end before start → everything on `start`.
 */
export function spaceDueDates(count: number, start: Date, end: Date): Date[] {
  if (count <= 0) return []
  const first = dayAtNoonUTC(start)
  const days = Math.max(0, dayIndex(end) - dayIndex(start))
  // Task i sits at the centre of its share of the span (so a single task lands
  // mid-way, five tasks over ten days land every other day).
  return Array.from({ length: count }, (_, i) => {
    const offset = Math.round(((i + 0.5) * (days + 1)) / count - 0.5)
    return addDays(first, Math.max(0, Math.min(days, offset)))
  })
}

export interface ScheduledUnit extends CycleUnit {
  autoDueDate: Date
}

/**
 * Where each unit of the cycle lands before `dueDate`: pending lessons spread
 * from today to the day before the unit test, the unit test the day before
 * the diagnostic, the diagnostic on the due date itself. Already-done lessons
 * keep today as their date (they are ticked off, the date is cosmetic).
 */
export function planSchedule(units: CycleUnit[], today: Date, dueDate: Date): ScheduledUnit[] {
  const start = dayAtNoonUTC(today)
  const dueDay = dayAtNoonUTC(dueDate)
  const hasUnitTest = units.some((u) => u.type === 'UNIT_TEST')
  // The last lesson day: the day before the unit test (or the diagnostic).
  const lessonsEnd = addDays(dueDay, hasUnitTest ? -2 : -1)
  const unitTestDay = addDays(dueDay, -1)
  const pendingLessons = units.filter((u) => u.type === 'LESSON' && !u.done).sort((a, b) => a.order - b.order)
  const lessonDates = spaceDueDates(pendingLessons.length, start, lessonsEnd.getTime() < start.getTime() ? start : lessonsEnd)
  const dateFor = new Map(pendingLessons.map((u, i) => [u.key, lessonDates[i]]))
  const clamp = (d: Date) => (d.getTime() < start.getTime() ? start : d)
  return units.map((u) => {
    if (u.type === 'DIAGNOSTIC') return { ...u, autoDueDate: clamp(dueDay) }
    if (u.type === 'UNIT_TEST') return { ...u, autoDueDate: clamp(unitTestDay) }
    return { ...u, autoDueDate: dateFor.get(u.key) ?? start }
  })
}

export interface ExistingTask {
  id: string
  sourceKey: string | null
  title: string
  dueDate: Date | null
  autoDueDate: Date | null
  completed: boolean
}

export interface TaskChanges {
  create: { sourceKey: string; title: string; type: CycleUnitType; topicSlug: string | null; dueDate: Date; autoDueDate: Date; completed: boolean; sortOrder: number }[]
  update: { id: string; data: { title?: string; dueDate?: Date; autoDueDate?: Date; completed?: boolean; completedAt?: Date | null; sortOrder?: number } }[]
  /** Unfinished auto tasks from an earlier cycle. */
  remove: string[]
}

const sameDay = (a: Date | null, b: Date | null) => !!a && !!b && dayIndex(a) === dayIndex(b)

/** What to write so the plan's auto tasks match the schedule, keeping the student's own moves. */
export function reconcileTasks(existing: ExistingTask[], schedule: ScheduledUnit[], now: Date): TaskChanges {
  const byKey = new Map(existing.filter((t) => t.sourceKey).map((t) => [t.sourceKey as string, t]))
  const wanted = new Set(schedule.map((u) => u.key))
  const changes: TaskChanges = { create: [], update: [], remove: [] }
  schedule.forEach((u, i) => {
    const sortOrder = i
    const t = byKey.get(u.key)
    if (!t) {
      changes.create.push({ sourceKey: u.key, title: u.title, type: u.type, topicSlug: u.topicSlug, dueDate: u.autoDueDate, autoDueDate: u.autoDueDate, completed: u.done, sortOrder })
      return
    }
    const data: TaskChanges['update'][number]['data'] = {}
    // Untouched = still on the date the scheduler gave it (or never dated).
    const untouched = !t.dueDate || sameDay(t.dueDate, t.autoDueDate)
    if (untouched && !sameDay(t.dueDate, u.autoDueDate)) data.dueDate = u.autoDueDate
    if (!sameDay(t.autoDueDate, u.autoDueDate)) data.autoDueDate = u.autoDueDate
    if (u.done && !t.completed) {
      data.completed = true
      data.completedAt = now
    }
    if (t.title !== u.title) data.title = u.title
    if (Object.keys(data).length) changes.update.push({ id: t.id, data: { ...data, sortOrder } })
  })
  for (const t of existing) {
    if (t.sourceKey?.startsWith(CYCLE_KEY_PREFIX) && !wanted.has(t.sourceKey) && !t.completed) changes.remove.push(t.id)
  }
  return changes
}

/** The cycle's units from a live plan (MCAT or SAT plan-status shape). */
export function cycleUnitsFromPlan(input: {
  course: FullLengthCourse
  diagnosticId: string
  topics: { slug: string; name: string; isSatisfied: boolean }[]
  unitTestPassed: boolean
}): CycleUnit[] {
  const cfg = FULL_LENGTH_COURSES[input.course]
  const units: CycleUnit[] = input.topics.map((t, i) => ({
    key: cycleKey(input.diagnosticId, t.slug),
    title: t.name,
    type: 'LESSON',
    topicSlug: t.slug,
    done: t.isSatisfied,
    order: i,
  }))
  units.push({
    key: cycleKey(input.diagnosticId, 'unit-test'),
    title: cfg.unitTestRequired ? `${cfg.label} unit test` : `${cfg.label} unit test (recommended)`,
    type: 'UNIT_TEST',
    topicSlug: null,
    done: input.unitTestPassed,
    order: input.topics.length,
  })
  units.push({
    key: cycleKey(input.diagnosticId, 'diagnostic'),
    title: `${cfg.label} diagnostic (next cycle)`,
    type: 'DIAGNOSTIC',
    topicSlug: null,
    done: false,
    order: input.topics.length + 1,
  })
  return units
}
