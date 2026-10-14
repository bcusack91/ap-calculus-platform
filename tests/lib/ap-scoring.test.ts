import { describe, it, expect } from 'vitest'
import { AP_SCORE_CUTOFFS, estimateApScore } from '@/lib/ap-scoring'

describe('shared AP score scale', () => {
  it('maps percentages to 1–5 at 70 / 57 / 43 / 30', () => {
    expect([100, 70, 69.9, 57, 56.9, 43, 42.9, 30, 29.9, 0].map(estimateApScore)).toEqual([5, 5, 4, 4, 3, 3, 2, 2, 1, 1])
  })

  it('cutoffs only fall as the score falls', () => {
    const mins = AP_SCORE_CUTOFFS.map((c) => c.minPercent)
    expect([...mins].sort((a, b) => b - a)).toEqual(mins)
  })
})
