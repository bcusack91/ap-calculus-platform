/**
 * Class-diagnostic due dates are DAYS, due at the END of the day.
 *
 * The bug: a date-only pick was stored as UTC midnight (the FIRST instant of
 * the day) and rendered/compared as a raw instant, so the student banner said
 * "Overdue" from 8pm ET the evening BEFORE the date the teacher chose, and
 * printed the previous day's date next to it.
 *
 * These assertions are timezone-agnostic on purpose: they check local calendar
 * fields and compare against local wall-clock instants, so they hold in ET, UTC
 * or anywhere else CI runs.
 */
import { describe, it, expect } from 'vitest'
import { dueDeadline, formatDueDate, isDateOnly } from '@/components/ClassDiagnosticBanner'

const LEGACY_DATE_ONLY = '2026-09-18T00:00:00.000Z' // how every existing row is stored

describe('dueDeadline', () => {
  it('treats a date-only value as the END of that local day', () => {
    const d = dueDeadline(LEGACY_DATE_ONLY)
    expect(d.getFullYear()).toBe(2026)
    expect(d.getMonth()).toBe(8) // September
    expect(d.getDate()).toBe(18)
    expect(d.getHours()).toBe(23)
    expect(d.getMinutes()).toBe(59)
  })

  it('is NOT overdue the evening before the due date (the reported bug)', () => {
    const eveningBefore = new Date(2026, 8, 17, 20, 0, 0).getTime()
    expect(dueDeadline(LEGACY_DATE_ONLY).getTime() < eveningBefore).toBe(false)
  })

  it('is NOT overdue at 11pm ON the due date', () => {
    const lateOnDueDay = new Date(2026, 8, 18, 23, 0, 0).getTime()
    expect(dueDeadline(LEGACY_DATE_ONLY).getTime() < lateOnDueDay).toBe(false)
  })

  it('IS overdue once the next day starts', () => {
    const nextMorning = new Date(2026, 8, 19, 0, 1, 0).getTime()
    expect(dueDeadline(LEGACY_DATE_ONLY).getTime() < nextMorning).toBe(true)
  })

  it('leaves a real datetime alone', () => {
    const exact = '2026-09-18T15:30:00.000Z'
    expect(isDateOnly(exact)).toBe(false)
    expect(dueDeadline(exact).toISOString()).toBe(exact)
  })
})

describe('formatDueDate', () => {
  it('prints the day the teacher picked, not the day before', () => {
    // toLocaleDateString's separator/order varies by locale; the day number is
    // the part the bug got wrong.
    expect(formatDueDate(LEGACY_DATE_ONLY)).toBe(new Date(2026, 8, 18, 23, 59, 59, 999).toLocaleDateString())
  })

  it('returns an empty string for junk rather than "Invalid Date"', () => {
    expect(formatDueDate('not-a-date')).toBe('')
  })
})
