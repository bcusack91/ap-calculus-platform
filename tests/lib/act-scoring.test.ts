/**
 * ACT scaled-scoring calibration pins.
 *
 * The anchors follow real ACT raw-to-scale conversions (50% -> ~19,
 * 70% -> ~24-25, 80% -> ~27, 90% -> ~30-31, 34+ gated behind ~95%+). These
 * tests pin them so any re-anchoring is a deliberate, reviewed change — a
 * silent drift back toward the old linear/step maps would reintroduce the
 * 2-3-point inflation the overhaul removed.
 */
import { describe, it, expect } from 'vitest'
import {
  ACT_CURVE_ANCHORS,
  actSectionScaled,
  actComposite,
  actCompositeFromFractions,
  projectionRange,
} from '@/lib/act-scoring'

describe('ACT_CURVE_ANCHORS', () => {
  it('is strictly ascending in both pct and scaled', () => {
    for (let i = 1; i < ACT_CURVE_ANCHORS.length; i++) {
      expect(ACT_CURVE_ANCHORS[i].pct).toBeGreaterThan(ACT_CURVE_ANCHORS[i - 1].pct)
      expect(ACT_CURVE_ANCHORS[i].scaled).toBeGreaterThan(ACT_CURVE_ANCHORS[i - 1].scaled)
    }
  })

  it('spans the full 1-36 scale', () => {
    expect(ACT_CURVE_ANCHORS[0]).toEqual({ pct: 0, scaled: 1 })
    expect(ACT_CURVE_ANCHORS[ACT_CURVE_ANCHORS.length - 1]).toEqual({ pct: 1, scaled: 36 })
  })
})

describe('actSectionScaled', () => {
  it('pins the real-conversion anchors', () => {
    expect(actSectionScaled(0)).toBe(1)
    expect(actSectionScaled(0.25)).toBe(13) // guessing floor on 4-choice items
    expect(actSectionScaled(0.5)).toBe(19)
    expect(actSectionScaled(0.6)).toBe(22)
    expect(actSectionScaled(0.7)).toBe(25)
    expect(actSectionScaled(0.8)).toBe(27)
    expect(actSectionScaled(0.9)).toBe(31)
    expect(actSectionScaled(0.95)).toBe(34)
    expect(actSectionScaled(1)).toBe(36)
  })

  it('compresses the top: 34+ requires ~95%+', () => {
    expect(actSectionScaled(0.94)).toBeLessThan(34)
    expect(actSectionScaled(0.95)).toBeGreaterThanOrEqual(34)
  })

  it('runs below the old inflated step table through the middle', () => {
    // Old table: 70% -> 27, 80% -> 30, 90% -> 33.
    expect(actSectionScaled(0.7)).toBeLessThan(27)
    expect(actSectionScaled(0.8)).toBeLessThan(30)
    expect(actSectionScaled(0.9)).toBeLessThan(33)
  })

  it('always returns an integer', () => {
    for (let p = 0; p <= 1.0001; p += 0.01) {
      const s = actSectionScaled(Math.min(1, p))
      expect(Number.isInteger(s)).toBe(true)
    }
  })

  it('is monotonically non-decreasing across the whole scale', () => {
    let prev = -Infinity
    for (let p = 0; p <= 1.0001; p += 0.01) {
      const s = actSectionScaled(Math.min(1, p))
      expect(s).toBeGreaterThanOrEqual(prev)
      prev = s
    }
  })

  it('stays inside 1-36 and clamps bad input', () => {
    for (let p = 0; p <= 1.0001; p += 0.01) {
      const s = actSectionScaled(Math.min(1, p))
      expect(s).toBeGreaterThanOrEqual(1)
      expect(s).toBeLessThanOrEqual(36)
    }
    expect(actSectionScaled(-0.5)).toBe(1)
    expect(actSectionScaled(1.5)).toBe(36)
  })
})

describe('actComposite', () => {
  it('is the rounded mean of the section scores', () => {
    expect(actComposite([25, 25, 26, 26])).toBe(26) // 25.5 rounds up
    expect(actComposite([19, 22, 25, 27])).toBe(23) // 23.25 rounds down
    expect(actComposite([36, 36, 36, 36])).toBe(36)
    expect(actComposite([1, 1, 1, 1])).toBe(1)
  })

  it('handles empty and out-of-range input defensively', () => {
    expect(actComposite([])).toBe(1)
    expect(actComposite([40, 40, 40, 40])).toBe(36)
  })

  it('actCompositeFromFractions matches per-section scaling (70% all four -> 25)', () => {
    expect(actCompositeFromFractions([0.7, 0.7, 0.7, 0.7])).toBe(25)
  })
})

describe('projectionRange', () => {
  it('widths follow the evidence level (±1 / ±2 / ±3)', () => {
    expect(projectionRange(24, 'high')).toEqual({ low: 23, high: 25 })
    expect(projectionRange(24, 'medium')).toEqual({ low: 22, high: 26 })
    expect(projectionRange(24)).toEqual({ low: 22, high: 26 }) // default medium
    expect(projectionRange(24, 'low')).toEqual({ low: 21, high: 27 })
  })

  it('clamps to the 1-36 scale', () => {
    expect(projectionRange(36, 'medium')).toEqual({ low: 34, high: 36 })
    expect(projectionRange(1, 'low')).toEqual({ low: 1, high: 4 })
    expect(projectionRange(2, 'medium')).toEqual({ low: 1, high: 4 })
  })
})
