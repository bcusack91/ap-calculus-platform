/**
 * AP score bands for teacher surfaces (src/lib/ap-score-band.ts) and the
 * banded score label every teacher list reads (scoreLabelFromResults).
 *
 * Owner rule: honest ranges everywhere, never a bare point estimate. A
 * 33-question AP diagnostic pins percent correct to about ±8.5 points, so a
 * single sitting reads as a two-score range and a one-point move between two
 * sittings is usually noise.
 */
import { describe, it, expect } from 'vitest'
import { apBandLabel, apClassGrowthBand, apGrowthBand, apSittingOf, formatApGrowth } from '@/lib/ap-score-band'
import { scoreLabelFromResults } from '@/lib/class-plan-config'

const sitting = (correct: number, total: number, score: number, extra: Record<string, unknown> = {}) => ({
  totalCorrect: correct,
  totalQuestions: total,
  percentage: Math.round((correct / total) * 100),
  estimatedAPScore: score,
  ...extra,
})

describe('apSittingOf', () => {
  it('bands a v1 diagnostic from its question counts', () => {
    const s = apSittingOf(sitting(18, 33, 3))!
    expect(s).toMatchObject({ score: 3, low: 3, high: 4 })
    expect(s.percent).toBeCloseTo(54.5, 1)
    expect(s.standardError).toBeGreaterThan(8)
  })

  it('prefers the band a v2 diagnostic stored', () => {
    expect(apSittingOf(sitting(18, 33, 3, { scoreRange: { low: 2, high: 4 } }))).toMatchObject({ low: 2, high: 4 })
  })

  it('ignores a stored band that does not contain the score', () => {
    expect(apSittingOf(sitting(18, 33, 3, { scoreRange: { low: 4, high: 5 } }))).toMatchObject({ low: 3, high: 4 })
  })

  it('falls back to the domain tallies when the totals are missing', () => {
    const s = apSittingOf({ estimatedAPScore: 3, domains: [{ correct: 9, total: 16 }, { correct: 9, total: 17 }] })!
    expect(s).toMatchObject({ low: 3, high: 4 })
  })

  it('keeps the point when an old row has no counts at all, and ignores non-AP results', () => {
    expect(apSittingOf({ estimatedAPScore: 3, percentage: 50 })).toMatchObject({ low: 3, high: 3, percent: null })
    expect(apSittingOf({ estimatedScore: 1200 })).toBeNull()
    expect(apSittingOf(null)).toBeNull()
    expect(apSittingOf(JSON.stringify(sitting(18, 33, 3)))).toMatchObject({ low: 3, high: 4 })
  })
})

describe('labels', () => {
  it('reads "3–4/5", or the single score when the band is one score', () => {
    expect(apBandLabel({ score: 3, low: 3, high: 4 })).toBe('3–4/5')
    expect(apBandLabel({ score: 5, low: 5, high: 5 })).toBe('5/5')
  })

  it('scoreLabelFromResults shows the AP band; SAT/MCAT labels are unchanged', () => {
    expect(scoreLabelFromResults(sitting(18, 33, 3))).toBe('3–4/5')
    expect(scoreLabelFromResults({ estimatedAPScore: 4, percentage: 66 })).toBe('4/5')
    expect(scoreLabelFromResults({ estimatedScore: 1210, percentage: 60 })).toBe('1210')
    expect(scoreLabelFromResults({ estimatedScore: 503 })).toBe('503')
  })
})

describe('apGrowthBand', () => {
  it('reads a one-point move as "up about 1, range 0 to +2" — noise, not progress', () => {
    const band = apGrowthBand(apSittingOf(sitting(18, 33, 3))!, apSittingOf(sitting(20, 33, 4))!)!
    expect(band).toEqual({ delta: 1, low: 0, high: 2, meaningful: false })
    expect(formatApGrowth(band)).toBe('up about 1, range 0 to +2')
  })

  it('keeps the band around the point even for a big move', () => {
    const band = apGrowthBand(apSittingOf(sitting(18, 33, 3))!, apSittingOf(sitting(25, 33, 5))!)!
    expect(band.delta).toBe(2)
    expect(band.low).toBeLessThanOrEqual(2)
    expect(band.high).toBeGreaterThanOrEqual(2)
    expect(band.low).toBeGreaterThanOrEqual(1)
  })

  it('calls a move real only past 2 SE of the difference', () => {
    const band = apGrowthBand(apSittingOf(sitting(9, 33, 1))!, apSittingOf(sitting(28, 33, 5))!)!
    expect(band.meaningful).toBe(true)
    expect(band.delta).toBe(4)
  })

  it('handles a drop and no change', () => {
    const down = apGrowthBand(apSittingOf(sitting(24, 33, 5))!, apSittingOf(sitting(18, 33, 3))!)!
    expect(down.delta).toBe(-2)
    expect(formatApGrowth(down)).toMatch(/^down about 2, range −\d to /)
    const same = apGrowthBand(apSittingOf(sitting(18, 33, 3))!, apSittingOf(sitting(18, 33, 3))!)!
    expect(same.delta).toBe(0)
    expect(formatApGrowth(same)).toMatch(/^about the same, range −1 to \+1$/)
  })

  it('has no band without question counts', () => {
    expect(apGrowthBand(apSittingOf({ estimatedAPScore: 2 })!, apSittingOf(sitting(20, 33, 4))!)).toBeNull()
  })
})

describe('apClassGrowthBand', () => {
  it('averages the changes and narrows the band by the class size', () => {
    const one = { delta: 1, low: 0, high: 2, meaningful: false }
    const c = apClassGrowthBand([one, one, one, one])!
    expect(c).toMatchObject({ pairedCount: 4, delta: 1, low: 0.5, high: 1.5, meaningful: true })
    expect(apClassGrowthBand([one])).toMatchObject({ delta: 1, low: 0, high: 2, meaningful: false })
    expect(apClassGrowthBand([])).toBeNull()
    expect(formatApGrowth(c)).toBe('up about 1, range +0.5 to +1.5')
  })
})
