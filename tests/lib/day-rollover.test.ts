import { describe, it, expect } from 'vitest'
import { dayIntervalDueDate } from '@/lib/spaced-repetition'

// tzOffset uses the JS getTimezoneOffset convention: local + offset = UTC.
const EDT = 240 // UTC-4
const JST = -540 // UTC+9

describe('dayIntervalDueDate (4am local day rollover)', () => {
  it('an 8pm 1-day card is due at 4am the NEXT morning, not 8pm', () => {
    // 8:00 pm EDT on Aug 20 = 00:00 UTC Aug 21
    const now = new Date('2026-08-21T00:00:00Z')
    const due = dayIntervalDueDate(1, EDT, now)
    // 4:00 am EDT Aug 21 = 08:00 UTC Aug 21
    expect(due.toISOString()).toBe('2026-08-21T08:00:00.000Z')
  })

  it('a 1am session still counts as "tonight" — its 1-day card lands at the coming 4am', () => {
    // 1:00 am EDT Aug 21 = 05:00 UTC Aug 21 (before the 4am rollover → study day is still Aug 20)
    const now = new Date('2026-08-21T05:00:00Z')
    const due = dayIntervalDueDate(1, EDT, now)
    // due at 4:00 am EDT Aug 21 = 08:00 UTC — three hours later, next rollover
    expect(due.toISOString()).toBe('2026-08-21T08:00:00.000Z')
  })

  it('a morning review lands at 4am the next day (never earlier than the interval implies a day change)', () => {
    // 9:00 am EDT Aug 20 = 13:00 UTC
    const now = new Date('2026-08-20T13:00:00Z')
    const due = dayIntervalDueDate(1, EDT, now)
    expect(due.toISOString()).toBe('2026-08-21T08:00:00.000Z')
  })

  it('multi-day intervals count study days', () => {
    const now = new Date('2026-08-21T00:00:00Z') // 8pm EDT Aug 20
    const due = dayIntervalDueDate(5, EDT, now)
    // 4am EDT on Aug 25
    expect(due.toISOString()).toBe('2026-08-25T08:00:00.000Z')
  })

  it('works east of UTC', () => {
    // 8:00 pm JST Aug 20 = 11:00 UTC Aug 20
    const now = new Date('2026-08-20T11:00:00Z')
    const due = dayIntervalDueDate(1, JST, now)
    // 4:00 am JST Aug 21 = 19:00 UTC Aug 20
    expect(due.toISOString()).toBe('2026-08-20T19:00:00.000Z')
  })

  it('falls back to exact +N days without a timezone', () => {
    const now = new Date('2026-08-21T00:00:00Z')
    const due = dayIntervalDueDate(1, undefined, now)
    expect(due.getTime() - now.getTime()).toBeGreaterThanOrEqual(23 * 3600000)
    expect(due.getTime() - now.getTime()).toBeLessThanOrEqual(25 * 3600000)
  })

  it('rounds fractional mature-card intervals to whole study days', () => {
    const now = new Date('2026-08-21T00:00:00Z') // 8pm EDT Aug 20
    const due = dayIntervalDueDate(42.5, EDT, now)
    // round(42.5) = 43 study days later at 4am EDT (43rd day after Aug 20 = Oct 2)
    expect(due.toISOString()).toBe('2026-10-02T08:00:00.000Z')
  })
})
