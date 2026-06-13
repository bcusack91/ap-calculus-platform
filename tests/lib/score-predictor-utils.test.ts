/**
 * Unit tests for the pure score-mapping helpers in score-predictor-utils.
 *
 * The module imports `@/lib/prisma` and `next/cache` at the top level (for the
 * DB-backed `gatherSubjectData`), so we stub those before importing — exactly
 * as tests/lib/progress-api.test.ts stubs prisma — to keep these tests pure and
 * DB-free. We only exercise mapToAPScore / mapToACTScore / mapToMCATScore.
 */
import { describe, it, expect, vi } from 'vitest'

vi.mock('@/lib/prisma', () => ({ prisma: {} }))
vi.mock('next/cache', () => ({
  unstable_cache: (fn: (...a: unknown[]) => unknown) => fn,
}))

import {
  mapToAPScore,
  mapToACTScore,
  mapToMCATScore,
} from '@/lib/score-predictor-utils'

describe('mapToAPScore (blends 70% quiz + 30% mastery -> 1..5)', () => {
  it('returns 5 for a perfect student (100% quizzes, 100% mastery)', () => {
    expect(mapToAPScore(1, 1)).toBe(5)
  })

  it('returns 1 for an all-wrong student with no mastery', () => {
    expect(mapToAPScore(0, 0)).toBe(1)
  })

  it('hits the 5 cutoff exactly at blended 0.85', () => {
    // 0.85*0.7 + 0.85*0.3 = 0.85 -> 5
    expect(mapToAPScore(0.85, 0.85)).toBe(5)
  })

  it('drops to 4 just below the 0.85 blended cutoff', () => {
    // blended = 0.8 -> 4
    expect(mapToAPScore(0.8, 0.8)).toBe(4)
  })

  it('returns 4 at the 0.70 cutoff and 3 just below', () => {
    expect(mapToAPScore(0.7, 0.7)).toBe(4)
    expect(mapToAPScore(0.69, 0.69)).toBe(3)
  })

  it('returns 3 at the 0.55 cutoff and 2 just below', () => {
    expect(mapToAPScore(0.55, 0.55)).toBe(3)
    expect(mapToAPScore(0.54, 0.54)).toBe(2)
  })

  it('returns 2 at the 0.35 cutoff and 1 just below', () => {
    expect(mapToAPScore(0.35, 0.35)).toBe(2)
    expect(mapToAPScore(0.34, 0.34)).toBe(1)
  })

  it('weights quiz performance more heavily than mastery (70/30 blend)', () => {
    // Strong quizzes, zero mastery: 0.9*0.7 = 0.63 -> tier 3
    expect(mapToAPScore(0.9, 0)).toBe(3)
    // Strong mastery, zero quizzes: 0.9*0.3 = 0.27 -> tier 1
    expect(mapToAPScore(0, 0.9)).toBe(1)
  })

  it('always returns a value within the valid 1..5 AP band', () => {
    for (const q of [0, 0.25, 0.5, 0.75, 1]) {
      for (const m of [0, 0.5, 1]) {
        const s = mapToAPScore(q, m)
        expect(s).toBeGreaterThanOrEqual(1)
        expect(s).toBeLessThanOrEqual(5)
      }
    }
  })
})

describe('mapToACTScore (clamps to 1..36)', () => {
  it('maps a perfect quiz average to 36', () => {
    expect(mapToACTScore(1)).toBe(36)
  })

  it('clamps a zero average up to the floor of 1 (never 0)', () => {
    expect(mapToACTScore(0)).toBe(1)
  })

  it('rounds the linear mapping at the midpoint', () => {
    // 0.5 * 36 = 18
    expect(mapToACTScore(0.5)).toBe(18)
  })

  it('rounds to nearest whole composite point', () => {
    // 0.7 * 36 = 25.2 -> 25
    expect(mapToACTScore(0.7)).toBe(25)
    // 0.71 * 36 = 25.56 -> 26
    expect(mapToACTScore(0.71)).toBe(26)
  })

  it('clamps an out-of-range over-100% average down to 36', () => {
    expect(mapToACTScore(1.5)).toBe(36)
  })

  it('clamps a negative average up to 1', () => {
    expect(mapToACTScore(-0.2)).toBe(1)
  })
})

describe('mapToMCATScore (blends 75% quiz + 25% mastery -> 472..528)', () => {
  it('maps a perfect student to the 528 ceiling', () => {
    expect(mapToMCATScore(1, 1)).toBe(528)
  })

  it('maps an all-wrong student to the 472 floor', () => {
    expect(mapToMCATScore(0, 0)).toBe(472)
  })

  it('maps a 50% blended student to the 500 midpoint', () => {
    // 0.5 blended -> 472 + round(0.5*56) = 472 + 28 = 500
    expect(mapToMCATScore(0.5, 0.5)).toBe(500)
  })

  it('weights quizzes at 75% of the blend', () => {
    // quiz 1.0, mastery 0 -> blended 0.75 -> 472 + round(0.75*56)=472+42=514
    expect(mapToMCATScore(1, 0)).toBe(514)
    // quiz 0, mastery 1.0 -> blended 0.25 -> 472 + round(0.25*56)=472+14=486
    expect(mapToMCATScore(0, 1)).toBe(486)
  })

  it('always returns a value within the valid 472..528 MCAT band', () => {
    for (const q of [0, 0.33, 0.5, 0.67, 1]) {
      for (const m of [0, 0.5, 1]) {
        const s = mapToMCATScore(q, m)
        expect(s).toBeGreaterThanOrEqual(472)
        expect(s).toBeLessThanOrEqual(528)
      }
    }
  })

  it('clamps out-of-range (>1) inputs to the ceiling rather than overflowing', () => {
    expect(mapToMCATScore(2, 2)).toBe(528)
  })
})
