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
  mcatSectionForTopicSlug,
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

/*
 * mapToMCATScore was migrated from a flat linear 472 + blend*56 mapping onto
 * the shared percentile-anchored section curve in @/lib/mcat-scoring (the same
 * curve behind the diagnostic and full-length exam), so all four MCAT scoring
 * surfaces agree. The pinned expectations below changed accordingly:
 *   - endpoints and the 50% midpoint are unchanged (472 / 500 / 528),
 *   - mid-band blends shift slightly because the anchor curve is steeper near
 *     the extremes and "stickier" in the middle than the flat line, e.g.
 *     blended 0.75 now maps to 4 x 129 = 516 (was 514) and blended 0.25 to
 *     4 x 122 = 488 (was 486).
 * The test's intent is preserved: monotonicity, 472..528 bounds, sensible
 * mixed-input behavior, and the 75/25 quiz/mastery blend weighting.
 */
describe('mapToMCATScore (blends 75% quiz + 25% mastery -> 472..528, anchor curve)', () => {
  it('maps a perfect student to the 528 ceiling', () => {
    expect(mapToMCATScore(1, 1)).toBe(528)
  })

  it('maps an all-wrong student to the 472 floor', () => {
    expect(mapToMCATScore(0, 0)).toBe(472)
  })

  it('maps a 50% blended student to the 500 midpoint (anchor: 50% -> 125/section)', () => {
    expect(mapToMCATScore(0.5, 0.5)).toBe(500)
  })

  it('weights quizzes at 75% of the blend', () => {
    // quiz 1.0, mastery 0 -> blended 0.75 -> per-section 129 -> 516
    // (formerly 514 under the flat linear map; the anchor curve sits slightly
    // higher between the 67%->127 and 83%->130 landmarks)
    expect(mapToMCATScore(1, 0)).toBe(516)
    // quiz 0, mastery 1.0 -> blended 0.25 -> per-section 122 -> 488
    // (formerly 486; the curve climbs faster over the 0%->118..33%->123 leg)
    expect(mapToMCATScore(0, 1)).toBe(488)
    // And quizzes must dominate: strong quizzes beat strong mastery.
    expect(mapToMCATScore(1, 0)).toBeGreaterThan(mapToMCATScore(0, 1))
  })

  it('is monotonically non-decreasing in quiz average', () => {
    let prev = -Infinity
    for (let q = 0; q <= 1.0001; q += 0.05) {
      const s = mapToMCATScore(q, 0.5)
      expect(s).toBeGreaterThanOrEqual(prev)
      prev = s
    }
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

  describe('with per-section quiz averages', () => {
    it('scales each provided section through the anchor curve and sums', () => {
      // All four sections at 50% with 50% mastery -> 4 x 125 = 500, matching
      // the sectionless call.
      expect(
        mapToMCATScore(0.5, 0.5, {
          'chem-phys': 0.5,
          cars: 0.5,
          'bio-biochem': 0.5,
          'psych-soc': 0.5,
        }),
      ).toBe(500)
    })

    it('rewards a strong section without inflating the others (mixed inputs)', () => {
      // Chem/Phys perfect, others at 50%, mastery 50%:
      // chem-phys blend 0.875 -> 131; others 125 each -> 506.
      const mixed = mapToMCATScore(0.5, 0.5, {
        'chem-phys': 1,
        cars: 0.5,
        'bio-biochem': 0.5,
        'psych-soc': 0.5,
      })
      expect(mixed).toBe(506)
      // Strictly better than uniform 50%, but far from the 528 ceiling.
      expect(mixed).toBeGreaterThan(500)
      expect(mixed).toBeLessThan(520)
    })

    it('falls back to the overall average for sections without data', () => {
      // Only CARS provided (at the overall average): identical to sectionless.
      expect(mapToMCATScore(0.5, 0.5, { cars: 0.5 })).toBe(mapToMCATScore(0.5, 0.5))
      // Only CARS provided, weaker than overall: total drops by exactly the
      // CARS section's shortfall. With the 75/25 blend, cars quiz 0 + mastery
      // 0.5 -> blend 0*0.75 + 0.5*0.25 = 0.125 -> 120 on the anchor curve
      // (vs overall 125), so 500 - (125 - 120) = 495.
      expect(mapToMCATScore(0.5, 0.5, { cars: 0 })).toBe(500 - (125 - 120))
    })

    it('stays within 472..528 even with extreme section inputs', () => {
      const s = mapToMCATScore(1, 1, {
        'chem-phys': 2,
        cars: 1,
        'bio-biochem': 1,
        'psych-soc': 1,
      })
      expect(s).toBe(528)
    })
  })
})

describe('mcatSectionForTopicSlug (topic slug -> exam section)', () => {
  it('classifies each section family', () => {
    expect(mcatSectionForTopicSlug('mcat-cars-strategy-mcat')).toBe('cars')
    expect(mcatSectionForTopicSlug('mcat-psychology-behavior-learning-memory-mcat')).toBe('psych-soc')
    expect(mcatSectionForTopicSlug('mcat-sociology-groups-interaction-mcat')).toBe('psych-soc')
    expect(mcatSectionForTopicSlug('mcat-cell-biology-signaling-mcat')).toBe('bio-biochem')
    expect(mcatSectionForTopicSlug('mcat-organ-systems-renal-mcat')).toBe('bio-biochem')
    expect(mcatSectionForTopicSlug('mcat-genetics-evolution-mendelian-mcat')).toBe('bio-biochem')
    expect(mcatSectionForTopicSlug('mcat-general-chemistry-kinetics-mcat')).toBe('chem-phys')
    expect(mcatSectionForTopicSlug('mcat-physics-mechanics-kinematics-mcat')).toBe('chem-phys')
  })

  it('sends biochemistry to Chem/Phys, mirroring the diagnostic domains', () => {
    expect(mcatSectionForTopicSlug('mcat-biochemistry-enzymes-kinetics-mcat')).toBe('chem-phys')
  })

  it('returns null for cross-cutting topics that belong to no single section', () => {
    expect(mcatSectionForTopicSlug('mcat-quantitative-skills-mcat')).toBeNull()
  })
})
