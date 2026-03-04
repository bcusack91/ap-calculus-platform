import { describe, it, expect } from 'vitest'
import {
  calculateNextReview,
  isDueForReview,
  buttonToQuality,
  getIntervalText,
  calculateRetention,
} from '@/lib/spaced-repetition'

describe('calculateNextReview', () => {
  it('throws on invalid quality rating', () => {
    expect(() => calculateNextReview(-1)).toThrow('Quality must be between 0 and 5')
    expect(() => calculateNextReview(6)).toThrow('Quality must be between 0 and 5')
  })

  it('resets card on quality < 3 (Again)', () => {
    const result = calculateNextReview(1)
    expect(result.repetitions).toBe(0)
    expect(result.interval).toBe(1) // 1 minute
    expect(result.isMinuteInterval).toBe(true)
  })

  it('sets 3-minute interval on first Hard review', () => {
    const result = calculateNextReview(3, 2.5, 0, 0)
    expect(result.interval).toBe(3)
    expect(result.isMinuteInterval).toBe(true)
    expect(result.repetitions).toBe(1)
  })

  it('sets 5-minute interval on first Good review', () => {
    const result = calculateNextReview(4, 2.5, 0, 0)
    expect(result.interval).toBe(5)
    expect(result.isMinuteInterval).toBe(true)
    expect(result.repetitions).toBe(1)
  })

  it('graduates to 1 day on first Easy review', () => {
    const result = calculateNextReview(5, 2.5, 0, 0)
    expect(result.interval).toBe(1)
    expect(result.isMinuteInterval).toBe(false)
    expect(result.repetitions).toBe(1)
  })

  it('graduates from minute interval to days on second review', () => {
    // Second review (was minute interval) with Good
    const result = calculateNextReview(4, 2.5, 5, 1, true)
    expect(result.interval).toBe(6) // 6 days
    expect(result.isMinuteInterval).toBe(false)
    expect(result.repetitions).toBe(2)
  })

  it('uses SM-2 formula for graduated cards', () => {
    // Third review with Good, previous interval = 6 days, EF ~2.5
    const result = calculateNextReview(4, 2.5, 6, 2, false)
    expect(result.interval).toBe(15) // 6 * 2.5 = 15
    expect(result.isMinuteInterval).toBe(false)
    expect(result.repetitions).toBe(3)
  })

  it('reduces interval for Hard on graduated cards', () => {
    const result = calculateNextReview(3, 2.5, 10, 3, false)
    // Should be interval * EF * 0.8
    expect(result.interval).toBe(Math.max(1, Math.round(10 * 2.36 * 0.8)))
    expect(result.isMinuteInterval).toBe(false)
  })

  it('increases interval for Easy on graduated cards', () => {
    const result = calculateNextReview(5, 2.5, 10, 3, false)
    // Should be interval * EF * 1.3
    expect(result.interval).toBe(Math.round(10 * 2.6 * 1.3))
    expect(result.isMinuteInterval).toBe(false)
  })

  it('never lets ease factor drop below 1.3', () => {
    // Quality 0 repeatedly should floor EF at 1.3
    let ef = 2.5
    for (let i = 0; i < 20; i++) {
      const result = calculateNextReview(0, ef, 0, 0)
      ef = result.easeFactor
    }
    expect(ef).toBeGreaterThanOrEqual(1.3)
  })

  it('ease factor increases with quality 5', () => {
    const result = calculateNextReview(5, 2.5, 10, 3)
    expect(result.easeFactor).toBeGreaterThan(2.5)
  })
})

describe('isDueForReview', () => {
  it('returns true for past dates', () => {
    const pastDate = new Date(Date.now() - 1000)
    expect(isDueForReview(pastDate)).toBe(true)
  })

  it('returns false for future dates', () => {
    const futureDate = new Date(Date.now() + 100_000)
    expect(isDueForReview(futureDate)).toBe(false)
  })
})

describe('buttonToQuality', () => {
  it('maps buttons correctly', () => {
    expect(buttonToQuality('again')).toBe(1)
    expect(buttonToQuality('hard')).toBe(3)
    expect(buttonToQuality('good')).toBe(4)
    expect(buttonToQuality('easy')).toBe(5)
  })
})

describe('getIntervalText', () => {
  it('formats intervals correctly', () => {
    expect(getIntervalText(0)).toBe('New')
    expect(getIntervalText(1)).toBe('1 day')
    expect(getIntervalText(7)).toBe('7 days')
    expect(getIntervalText(30)).toBe('1 month')
    expect(getIntervalText(90)).toBe('3 months')
    expect(getIntervalText(365)).toBe('1 year')
    expect(getIntervalText(730)).toBe('2 years')
  })
})

describe('calculateRetention', () => {
  it('returns 0 for no reviews', () => {
    expect(calculateRetention(0, 0)).toBe(0)
  })

  it('calculates correct percentage', () => {
    expect(calculateRetention(8, 10)).toBe(80)
    expect(calculateRetention(10, 10)).toBe(100)
    expect(calculateRetention(1, 3)).toBe(33)
  })
})
