import { describe, it, expect } from 'vitest'
import { sectionScaledScore, scoreMCAT, projectionRange } from '@/lib/mcat-scoring'
import type { MCATSection } from '@/data/mcat/types'

/*
 * The pinned values below changed when the curve was re-anchored to the shape
 * of released AAMC practice-exam conversions. The old table put 125 at 50%
 * raw, conflating the scale midpoint with median performance; on real AAMC
 * exams the MEDIAN test-taker answers ~70% correct, so 70% → 125 and 50% raw
 * is well below median (121). See the calibration note in mcat-scoring.ts.
 */
describe('sectionScaledScore', () => {
  it('maps 0% correct to the floor of 118', () => {
    expect(sectionScaledScore(0)).toBe(118)
  })

  it('maps 100% correct to the ceiling of 132', () => {
    expect(sectionScaledScore(1)).toBe(132)
  })

  it('maps 50% raw to 121 — below-median, NOT the 125 scale midpoint', () => {
    expect(sectionScaledScore(0.5)).toBe(121)
  })

  it('maps ~70% raw (median performance on real AAMC forms) to the 125 median score', () => {
    expect(sectionScaledScore(0.7)).toBe(125)
  })

  it('hits the AAMC-conversion anchor points exactly', () => {
    expect(sectionScaledScore(0.35)).toBe(119)
    expect(sectionScaledScore(0.6)).toBe(123)
    expect(sectionScaledScore(0.83)).toBe(128)
    expect(sectionScaledScore(0.92)).toBe(130)
  })

  it('clamps inputs below 0 to the floor', () => {
    expect(sectionScaledScore(-0.5)).toBe(118)
  })

  it('clamps inputs above 1 to the ceiling', () => {
    expect(sectionScaledScore(5)).toBe(132)
  })

  it('compresses sub-35% performance onto the 118-119 floor', () => {
    const v = sectionScaledScore(0.25)
    expect(v).toBeGreaterThanOrEqual(118)
    expect(v).toBeLessThanOrEqual(119)
    // 0.25 of the way from 0%..35% is t≈0.714 → 118 + 0.714*1 ≈ 118.71 → round 119
    expect(v).toBe(119)
  })

  it('is monotonic non-decreasing across the range', () => {
    let prev = -Infinity
    for (let p = 0; p <= 1.0001; p += 0.05) {
      const s = sectionScaledScore(p)
      expect(s).toBeGreaterThanOrEqual(prev)
      prev = s
    }
  })
})

const ALL_SECTIONS: MCATSection[] = ['chem-phys', 'cars', 'bio-biochem', 'psych-soc']

function rawAll(correct: number, total: number) {
  return ALL_SECTIONS.reduce(
    (acc, s) => {
      acc[s] = { correct, total }
      return acc
    },
    {} as Record<MCATSection, { correct: number; total: number }>,
  )
}

describe('scoreMCAT', () => {
  it('returns 472 (4*118) when no section is attempted (all totals 0)', () => {
    const report = scoreMCAT(rawAll(0, 0))
    expect(report.total).toBe(472)
    expect(report.percentileLabel).toBe('below ~25th percentile')
  })

  it('returns the perfect 528 when every section is 100% correct', () => {
    const report = scoreMCAT(rawAll(10, 10))
    expect(report.total).toBe(528) // 4 * 132
    expect(report.percentileLabel).toBe('~99th percentile')
  })

  it('returns 484 (4*121) when every section is exactly 50% correct', () => {
    // Re-anchored curve: 50% raw is below-median performance (121/section),
    // not the 500 scale midpoint the old table produced.
    const report = scoreMCAT(rawAll(5, 10))
    expect(report.total).toBe(484)
    expect(report.percentileLabel).toBe('below ~25th percentile')
  })

  it('returns 500 (4*125, the median score) when every section is 70% correct', () => {
    const report = scoreMCAT(rawAll(7, 10))
    expect(report.total).toBe(500)
    expect(report.percentileLabel).toBe('~45th percentile')
  })

  it('floors all-wrong attempts at 472 and labels below-25th', () => {
    const report = scoreMCAT(rawAll(0, 10))
    expect(report.total).toBe(472)
    expect(report.percentileLabel).toBe('below ~25th percentile')
  })

  it('counts unattempted sections as 118 when only some sections are attempted', () => {
    // Only chem-phys attempted at 100% -> 132; other three contribute 118 each.
    const raw = rawAll(0, 0)
    raw['chem-phys'] = { correct: 10, total: 10 }
    const report = scoreMCAT(raw)
    expect(report.total).toBe(132 + 118 * 3) // 486
  })

  it('reports every section in canonical order with correct/total echoed', () => {
    const raw = rawAll(3, 6)
    const report = scoreMCAT(raw)
    expect(report.sections.map((s) => s.section)).toEqual(ALL_SECTIONS)
    for (const s of report.sections) {
      expect(s.correct).toBe(3)
      expect(s.total).toBe(6)
      expect(s.scaled).toBe(121) // 3/6 = 50% -> 121 on the AAMC-shaped curve
    }
  })

  it('total always falls inside the valid 472-528 MCAT band', () => {
    for (const [c, t] of [
      [0, 10],
      [1, 10],
      [4, 9],
      [7, 9],
      [10, 10],
    ] as const) {
      const report = scoreMCAT(rawAll(c, t))
      expect(report.total).toBeGreaterThanOrEqual(472)
      expect(report.total).toBeLessThanOrEqual(528)
    }
  })

  it('treats a missing section entry as unattempted (118), not a crash', () => {
    // Provide only one section; the helper indexes the rest via ?? { 0,0 }.
    const partial = { 'cars': { correct: 5, total: 10 } } as unknown as Record<
      MCATSection,
      { correct: number; total: number }
    >
    const report = scoreMCAT(partial)
    // cars = 121 (50% raw), others 118*3 -> 121 + 354 = 475
    expect(report.total).toBe(475)
  })
})

describe('projectionRange (evidence-keyed ±band on the 472-528 total)', () => {
  it('is ±3 at the default medium evidence', () => {
    expect(projectionRange(500)).toEqual({ low: 497, high: 503 })
  })

  it('tightens to ±2 with high evidence and widens to ±4 with low', () => {
    expect(projectionRange(500, 'high')).toEqual({ low: 498, high: 502 })
    expect(projectionRange(500, 'low')).toEqual({ low: 496, high: 504 })
  })

  it('clamps to the 472-528 scale at both ends', () => {
    expect(projectionRange(473, 'low')).toEqual({ low: 472, high: 477 })
    expect(projectionRange(527, 'low')).toEqual({ low: 523, high: 528 })
  })
})
