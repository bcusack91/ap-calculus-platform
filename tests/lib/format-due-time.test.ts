import { describe, it, expect } from 'vitest'
import { formatTimeUntil } from '@/lib/format-due-time'

const now = new Date('2026-08-20T12:00:00Z')
const at = (ms: number) => new Date(now.getTime() + ms)
const MIN = 60000

describe('formatTimeUntil', () => {
  it('handles past and immediate times', () => {
    expect(formatTimeUntil(at(-5 * MIN), now)).toBe('now')
    expect(formatTimeUntil(at(20_000), now)).toBe('in under a minute')
  })

  it('formats minutes precisely (the learning-step range)', () => {
    expect(formatTimeUntil(at(1 * MIN), now)).toBe('in 1 minute')
    expect(formatTimeUntil(at(5 * MIN), now)).toBe('in 5 minutes')
    expect(formatTimeUntil(at(45 * MIN), now)).toBe('in 45 minutes')
  })

  it('formats hours loosely', () => {
    expect(formatTimeUntil(at(65 * MIN), now)).toBe('in about 1 hour')
    expect(formatTimeUntil(at(3 * 60 * MIN), now)).toBe('in about 3 hours')
  })

  it('formats day-scale horizons', () => {
    expect(formatTimeUntil(at(25 * 60 * MIN), now)).toBe('tomorrow')
    expect(formatTimeUntil(at(3 * 24 * 60 * MIN), now)).toBe('in 3 days')
  })

  it('accepts ISO strings', () => {
    expect(formatTimeUntil(at(5 * MIN).toISOString(), now)).toBe('in 5 minutes')
  })
})
