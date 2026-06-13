import { describe, it, expect } from 'vitest'
import { sectionScaledScore, scoreMCAT } from '@/lib/mcat-scoring'
import type { MCATSection } from '@/data/mcat/types'

describe('sectionScaledScore', () => {
  it('maps 0% correct to the floor of 118', () => {
    expect(sectionScaledScore(0)).toBe(118)
  })

  it('maps 100% correct to the ceiling of 132', () => {
    expect(sectionScaledScore(1)).toBe(132)
  })

  it('maps the 50% midpoint anchor to 125', () => {
    expect(sectionScaledScore(0.5)).toBe(125)
  })

  it('hits the published anchor points exactly', () => {
    expect(sectionScaledScore(0.33)).toBe(123)
    expect(sectionScaledScore(0.67)).toBe(127)
    expect(sectionScaledScore(0.83)).toBe(130)
  })

  it('clamps inputs below 0 to the floor', () => {
    expect(sectionScaledScore(-0.5)).toBe(118)
  })

  it('clamps inputs above 1 to the ceiling', () => {
    expect(sectionScaledScore(5)).toBe(132)
  })

  it('interpolates linearly between anchors (0.25 sits between 118 and 123)', () => {
    const v = sectionScaledScore(0.25)
    expect(v).toBeGreaterThanOrEqual(118)
    expect(v).toBeLessThanOrEqual(123)
    // 0.25 of the way from 0%..33% is t≈0.758 → 118 + 0.758*5 ≈ 121.79 → round 122
    expect(v).toBe(122)
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

  it('returns 500 (4*125) when every section is exactly 50% correct', () => {
    const report = scoreMCAT(rawAll(5, 10))
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
      expect(s.scaled).toBe(125) // 3/6 = 50% -> 125
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
    // cars=125, others 118*3 -> 125 + 354 = 479
    expect(report.total).toBe(479)
  })
})
