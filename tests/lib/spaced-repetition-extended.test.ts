import { describe, it, expect } from 'vitest'
import { calculateNextReview } from '@/lib/spaced-repetition'

describe('calculateNextReview — edge cases', () => {
  it('throws on quality below 0', () => {
    expect(() => calculateNextReview(-1)).toThrow('Quality must be between 0 and 5')
  })

  it('throws on quality above 5', () => {
    expect(() => calculateNextReview(6)).toThrow('Quality must be between 0 and 5')
  })

  it('resets repetitions when quality < 3', () => {
    // After 5 successful reviews, a failure should reset
    const result = calculateNextReview(1, 2.5, 30, 5, false)
    expect(result.repetitions).toBe(0)
    expect(result.isMinuteInterval).toBe(true)
    expect(result.interval).toBe(1) // 1 minute
  })

  it('uses minute intervals for new card (quality 3)', () => {
    const result = calculateNextReview(3, 2.5, 0, 0)
    expect(result.isMinuteInterval).toBe(true)
    expect(result.interval).toBe(3) // 3 minutes for Hard
  })

  it('uses minute intervals for new card (quality 4)', () => {
    const result = calculateNextReview(4, 2.5, 0, 0)
    expect(result.isMinuteInterval).toBe(true)
    expect(result.interval).toBe(5) // 5 minutes for Good
  })

  it('graduates immediately for new card (quality 5)', () => {
    const result = calculateNextReview(5, 2.5, 0, 0)
    expect(result.isMinuteInterval).toBe(false)
    expect(result.interval).toBe(1) // 1 day
  })

  it('ease factor never drops below 1.3', () => {
    // Repeated failures should floor the ease factor
    let ef = 2.5
    for (let i = 0; i < 20; i++) {
      const result = calculateNextReview(0, ef, 0, 0)
      ef = result.easeFactor
    }
    expect(ef).toBeGreaterThanOrEqual(1.3)
  })

  it('returns a future nextReview date', () => {
    const before = new Date()
    const result = calculateNextReview(4, 2.5, 0, 0)
    expect(result.nextReview.getTime()).toBeGreaterThanOrEqual(before.getTime())
  })

  it('increases interval for repeated correct recalls', () => {
    // Simulate multiple correct reviews
    let ef = 2.5
    let interval = 0
    let reps = 0
    let wasMinute = false

    for (let i = 0; i < 5; i++) {
      const result = calculateNextReview(4, ef, interval, reps, wasMinute)
      ef = result.easeFactor
      interval = result.interval
      reps = result.repetitions
      wasMinute = result.isMinuteInterval
    }

    // After 5 correct reviews, interval should be multiple days
    expect(wasMinute).toBe(false)
    expect(interval).toBeGreaterThan(1)
  })
})
