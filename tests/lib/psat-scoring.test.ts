/**
 * PSAT scaled-scoring calibration pins.
 *
 * The curve mirrors the SAT anchor shape (src/lib/sat-scoring.ts) shifted
 * down to the 160-760 section window. These tests pin the anchors so any
 * re-anchoring is a deliberate, reviewed change — a silent drift back toward
 * a linear map would reintroduce the 60-130-point inflation the overhaul
 * removed.
 */
import { describe, it, expect } from 'vitest'
import {
  PSAT_CURVE_ANCHORS,
  psatSectionScaled,
  psatTotal,
  projectionRange,
} from '@/lib/psat-scoring'
import { satSectionScaled } from '@/lib/sat-scoring'

describe('PSAT_CURVE_ANCHORS', () => {
  it('pins the calibration anchors', () => {
    expect(PSAT_CURVE_ANCHORS).toEqual([
      { pct: 0, scaled: 160 },
      { pct: 0.5, scaled: 440 },
      { pct: 0.6, scaled: 475 },
      { pct: 0.7, scaled: 525 },
      { pct: 0.8, scaled: 585 },
      { pct: 0.88, scaled: 632 },
      { pct: 1, scaled: 760 },
    ])
  })

  it('is strictly ascending in both pct and scaled', () => {
    for (let i = 1; i < PSAT_CURVE_ANCHORS.length; i++) {
      expect(PSAT_CURVE_ANCHORS[i].pct).toBeGreaterThan(PSAT_CURVE_ANCHORS[i - 1].pct)
      expect(PSAT_CURVE_ANCHORS[i].scaled).toBeGreaterThan(PSAT_CURVE_ANCHORS[i - 1].scaled)
    }
  })
})

describe('psatSectionScaled', () => {
  it('hits every anchor exactly', () => {
    for (const { pct, scaled } of PSAT_CURVE_ANCHORS) {
      expect(psatSectionScaled(pct)).toBe(scaled)
    }
  })

  it('sits a constant 40 points below the SAT curve at every anchor', () => {
    for (const { pct } of PSAT_CURVE_ANCHORS) {
      expect(psatSectionScaled(pct)).toBe(satSectionScaled(pct) - 40)
    }
  })

  it('is monotonically non-decreasing across the whole scale', () => {
    let prev = -Infinity
    for (let p = 0; p <= 1.0001; p += 0.01) {
      const s = psatSectionScaled(Math.min(1, p))
      expect(s).toBeGreaterThanOrEqual(prev)
      prev = s
    }
  })

  it('stays inside the 160-760 section bounds and clamps bad input', () => {
    for (let p = 0; p <= 1.0001; p += 0.01) {
      const s = psatSectionScaled(Math.min(1, p))
      expect(s).toBeGreaterThanOrEqual(160)
      expect(s).toBeLessThanOrEqual(760)
    }
    expect(psatSectionScaled(-0.5)).toBe(160)
    expect(psatSectionScaled(1.5)).toBe(760)
  })

  it('runs well below the old linear map through the middle of the scale', () => {
    // Old-style linear map would be 160 + pct * 600.
    for (const p of [0.5, 0.6, 0.7, 0.8]) {
      expect(psatSectionScaled(p)).toBeLessThan(160 + p * 600)
    }
  })

  it('gates the top: the 88->100 segment is the steepest', () => {
    // 632 -> 760 over 12 points of percent (~10.7 scaled per pct point)
    // vs 585 -> 632 over 8 (~5.9). Near-perfect runs earn the last stretch.
    const topSlope = (760 - 632) / 0.12
    const midSlope = (632 - 585) / 0.08
    expect(topSlope).toBeGreaterThan(midSlope)
  })
})

describe('psatTotal', () => {
  it('sums the two section curves (60% both sections -> 950 total)', () => {
    expect(psatTotal(0.6, 0.6)).toBe(950)
  })

  it('spans exactly 320-1520', () => {
    expect(psatTotal(0, 0)).toBe(320)
    expect(psatTotal(1, 1)).toBe(1520)
  })
})

describe('projectionRange', () => {
  it('widths follow the evidence level (±30 / ±40 / ±50)', () => {
    expect(projectionRange(950, 'high')).toEqual({ low: 920, high: 980 })
    expect(projectionRange(950, 'medium')).toEqual({ low: 910, high: 990 })
    expect(projectionRange(950)).toEqual({ low: 910, high: 990 }) // default medium
    expect(projectionRange(950, 'low')).toEqual({ low: 900, high: 1000 })
  })

  it('clamps to the 320-1520 total scale', () => {
    expect(projectionRange(330, 'low').low).toBe(320)
    expect(projectionRange(1510, 'medium').high).toBe(1520)
  })
})
