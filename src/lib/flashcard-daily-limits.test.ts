import { describe, expect, it } from 'vitest'
import {
  DEFAULT_MAX_REVIEWS_PER_DAY,
  DEFAULT_NEW_PER_DAY,
  composeDailyQueues,
  effectiveDailyLimits,
} from './flashcard-daily-limits'

describe('effectiveDailyLimits', () => {
  it('falls back to defaults for null/undefined prefs', () => {
    expect(effectiveDailyLimits(null)).toEqual({
      newPerDay: DEFAULT_NEW_PER_DAY,
      maxReviewsPerDay: DEFAULT_MAX_REVIEWS_PER_DAY,
    })
    expect(effectiveDailyLimits({ flashcardNewPerDay: null, flashcardMaxReviewsPerDay: null })).toEqual({
      newPerDay: 100,
      maxReviewsPerDay: 200,
    })
  })

  it('uses stored values when set', () => {
    expect(
      effectiveDailyLimits({ flashcardNewPerDay: 30, flashcardMaxReviewsPerDay: 500 }),
    ).toEqual({ newPerDay: 30, maxReviewsPerDay: 500 })
  })

  it('clamps out-of-bounds stored values defensively', () => {
    expect(effectiveDailyLimits({ flashcardNewPerDay: 0, flashcardMaxReviewsPerDay: 5 })).toEqual({
      newPerDay: 1,
      maxReviewsPerDay: 10,
    })
    expect(
      effectiveDailyLimits({ flashcardNewPerDay: 9999, flashcardMaxReviewsPerDay: 9999 }),
    ).toEqual({ newPerDay: 500, maxReviewsPerDay: 1000 })
  })
})

const limits = { newPerDay: 100, maxReviewsPerDay: 200 }

describe('composeDailyQueues', () => {
  it('offers the whole backlog when nothing was studied today (owner bug: 71 unlocked, 20 offered)', () => {
    const q = composeDailyQueues({
      dueReviewCount: 0,
      newAvailableCount: 71, // 20 due now + 51 drip-staggered into the future
      newIntroducedToday: 0,
      reviewsDoneToday: 0,
      limits,
    })
    expect(q.newToday).toBe(71) // pull-forward: all 71 fit in the 100/day allowance
    expect(q.dueToday).toBe(71)
    expect(q.newBeyondLimit).toBe(0)
  })

  it('caps new cards at the remaining daily allowance', () => {
    const q = composeDailyQueues({
      dueReviewCount: 0,
      newAvailableCount: 150,
      newIntroducedToday: 40,
      reviewsDoneToday: 0,
      limits,
    })
    expect(q.newAllowance).toBe(60)
    expect(q.newToday).toBe(60)
    expect(q.newBeyondLimit).toBe(90)
  })

  it('caps reviews at maxReviewsPerDay and reports the overflow', () => {
    const q = composeDailyQueues({
      dueReviewCount: 250,
      newAvailableCount: 0,
      newIntroducedToday: 0,
      reviewsDoneToday: 30,
      limits,
    })
    expect(q.reviewAllowance).toBe(170)
    expect(q.reviewsToday).toBe(170)
    expect(q.reviewsBeyondLimit).toBe(80)
    expect(q.dueToday).toBe(170)
  })

  it('combines both queues into today’s workload', () => {
    const q = composeDailyQueues({
      dueReviewCount: 50,
      newAvailableCount: 30,
      newIntroducedToday: 10,
      reviewsDoneToday: 20,
      limits,
    })
    expect(q.reviewsToday).toBe(50)
    expect(q.newToday).toBe(30)
    expect(q.dueToday).toBe(80)
  })

  it('never goes negative when limits are already exhausted or counters overshoot', () => {
    const q = composeDailyQueues({
      dueReviewCount: 10,
      newAvailableCount: 10,
      newIntroducedToday: 120, // over the limit (e.g. limit lowered mid-day)
      reviewsDoneToday: 500,
      limits,
    })
    expect(q.newAllowance).toBe(0)
    expect(q.reviewAllowance).toBe(0)
    expect(q.newToday).toBe(0)
    expect(q.reviewsToday).toBe(0)
    expect(q.dueToday).toBe(0)
    expect(q.reviewsBeyondLimit).toBe(10)
    expect(q.newBeyondLimit).toBe(10)
  })
})
