import { describe, it, expect } from 'vitest'
import { cycleUnitsFromPlan, deadlineDay, planSchedule, reconcileTasks, spaceDueDates, type ExistingTask } from '@/lib/cycle-scheduler'

const day = (iso: string) => new Date(`${iso}T12:00:00Z`)
const ymd = (d: Date) => d.toISOString().slice(0, 10)

describe('spaceDueDates', () => {
  it('spreads tasks evenly over every day up to the end, weekends included', () => {
    // 5 lessons over 10 days: every other day, ending on the last day
    expect(spaceDueDates(5, day('2026-10-08'), day('2026-10-17')).map(ymd)).toEqual([
      '2026-10-09', '2026-10-11', '2026-10-13', '2026-10-15', '2026-10-17',
    ])
    // one lesson per day when days match
    expect(spaceDueDates(3, day('2026-10-08'), day('2026-10-10')).map(ymd)).toEqual(['2026-10-08', '2026-10-09', '2026-10-10'])
  })

  it('doubles up when there are more tasks than days, and piles onto today when the end has passed', () => {
    expect(spaceDueDates(4, day('2026-10-08'), day('2026-10-09')).map(ymd)).toEqual(['2026-10-08', '2026-10-08', '2026-10-09', '2026-10-09'])
    expect(spaceDueDates(2, day('2026-10-08'), day('2026-10-01')).map(ymd)).toEqual(['2026-10-08', '2026-10-08'])
    expect(spaceDueDates(0, day('2026-10-08'), day('2026-10-20'))).toEqual([])
  })
})

describe('planSchedule', () => {
  const units = cycleUnitsFromPlan({
    course: 'mcat',
    diagnosticId: 'd1',
    topics: [
      { slug: 'a', name: 'A', isSatisfied: true },
      { slug: 'b', name: 'B', isSatisfied: false },
      { slug: 'c', name: 'C', isSatisfied: false },
      { slug: 'd', name: 'D', isSatisfied: false },
    ],
    unitTestPassed: false,
  })

  it('MCAT: pending lessons up to two days before the due date, unit test the day before, diagnostic on the day', () => {
    const s = planSchedule(units, day('2026-10-08'), day('2026-10-15'))
    const by = Object.fromEntries(s.map((u) => [u.key, ymd(u.autoDueDate)]))
    expect(by['cycle:d1:a']).toBe('2026-10-08') // already cleared: ticked, dated today
    expect([by['cycle:d1:b'], by['cycle:d1:c'], by['cycle:d1:d']]).toEqual(['2026-10-09', '2026-10-11', '2026-10-13'])
    expect(by['cycle:d1:unit-test']).toBe('2026-10-14')
    expect(by['cycle:d1:diagnostic']).toBe('2026-10-15')
    expect(s.find((u) => u.key === 'cycle:d1:unit-test')?.title).toBe('MCAT unit test')
  })

  it('SAT: the unit test is recommended, lessons run up to the day before it', () => {
    const sat = cycleUnitsFromPlan({ course: 'sat', diagnosticId: 'd2', topics: [{ slug: 'x', name: 'X', isSatisfied: false }], unitTestPassed: false })
    const s = planSchedule(sat, day('2026-10-08'), day('2026-10-10'))
    expect(s.map((u) => [u.type, ymd(u.autoDueDate)])).toEqual([
      ['LESSON', '2026-10-08'],
      ['UNIT_TEST', '2026-10-09'],
      ['DIAGNOSTIC', '2026-10-10'],
    ])
    expect(s[1].title).toBe('SAT unit test (recommended)')
  })

  it('never schedules anything before today, even when the due date is past', () => {
    const s = planSchedule(units, day('2026-10-20'), day('2026-10-15'))
    for (const u of s) expect(ymd(u.autoDueDate)).toBe('2026-10-20')
  })
})

describe('reconcileTasks', () => {
  const now = day('2026-10-08')
  const schedule = planSchedule(
    cycleUnitsFromPlan({ course: 'mcat', diagnosticId: 'd1', topics: [{ slug: 'a', name: 'A', isSatisfied: false }, { slug: 'b', name: 'B', isSatisfied: true }], unitTestPassed: false }),
    now,
    day('2026-10-12'),
  )
  const task = (over: Partial<ExistingTask>): ExistingTask => ({ id: 't', sourceKey: null, title: '', dueDate: null, autoDueDate: null, completed: false, ...over })

  it('creates every unit the first time, with cleared lessons already ticked', () => {
    const c = reconcileTasks([], schedule, now)
    expect(c.create.map((t) => [t.sourceKey, t.completed])).toEqual([
      ['cycle:d1:a', false], ['cycle:d1:b', true], ['cycle:d1:unit-test', false], ['cycle:d1:diagnostic', false],
    ])
    expect(c.create[0].dueDate).toEqual(c.create[0].autoDueDate)
    expect(c.update).toEqual([])
  })

  it('moves untouched tasks to the new spacing but keeps a date the student chose', () => {
    const existing = [
      task({ id: 'moved', sourceKey: 'cycle:d1:a', title: 'A', dueDate: day('2026-10-20'), autoDueDate: day('2026-10-10') }),
      task({ id: 'untouched', sourceKey: 'cycle:d1:unit-test', title: 'MCAT unit test', dueDate: day('2026-10-09'), autoDueDate: day('2026-10-09') }),
    ]
    const c = reconcileTasks(existing, schedule, now)
    const moved = c.update.find((u) => u.id === 'moved')!
    expect(moved.data.dueDate).toBeUndefined()
    expect(ymd(moved.data.autoDueDate!)).toBe('2026-10-09')
    const untouched = c.update.find((u) => u.id === 'untouched')!
    expect(ymd(untouched.data.dueDate!)).toBe('2026-10-11')
  })

  it('ticks a lesson off once it is cleared, never un-ticks, and drops leftovers from an older cycle', () => {
    const existing = [
      task({ id: 'b', sourceKey: 'cycle:d1:b', title: 'B', dueDate: day('2026-10-08'), autoDueDate: day('2026-10-08'), completed: false }),
      task({ id: 'old', sourceKey: 'cycle:d0:z', title: 'Z', completed: false }),
      task({ id: 'olddone', sourceKey: 'cycle:d0:y', title: 'Y', completed: true }),
      task({ id: 'mine', sourceKey: null, title: 'Read chapter 4' }),
    ]
    const c = reconcileTasks(existing, schedule, now)
    expect(c.update.find((u) => u.id === 'b')?.data).toMatchObject({ completed: true, completedAt: now })
    expect(c.remove).toEqual(['old'])
  })

  it('is a no-op when nothing changed', () => {
    const first = reconcileTasks([], schedule, now)
    const existing = first.create.map((t, i) => task({ id: `t${i}`, sourceKey: t.sourceKey, title: t.title, dueDate: t.dueDate, autoDueDate: t.autoDueDate, completed: t.completed }))
    const again = reconcileTasks(existing, schedule, now)
    expect(again).toEqual({ create: [], update: [], remove: [] })
  })
})

describe('deadlineDay', () => {
  it('maps an end-of-day deadline to the day it ends, in any common time zone', () => {
    expect(ymd(deadlineDay(new Date('2026-10-16T03:59:59.999Z')))).toBe('2026-10-15') // Oct 15, New York
    expect(ymd(deadlineDay(new Date('2026-10-16T06:59:59.999Z')))).toBe('2026-10-15') // Oct 15, Los Angeles
    expect(ymd(deadlineDay(new Date('2026-10-15T23:59:59.999Z')))).toBe('2026-10-15') // Oct 15, UTC
    expect(ymd(deadlineDay(new Date('2026-10-15T13:59:59.999Z')))).toBe('2026-10-15') // Oct 15, Sydney
    expect(ymd(deadlineDay(day('2026-10-15')))).toBe('2026-10-15') // a date-only noon stamp is unchanged
  })
})
