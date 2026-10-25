/**
 * ASVAB scoring pins (src/lib/asvab-scoring.ts).
 *
 * The official pieces (AFQT table, categories, VE/AS weights, AFQT formula,
 * service composites) come from asvab-pipeline/ASVAB-FACTS.md and the DMDC
 * 2004 report it cites; these tests pin them so a typo in an embedded table
 * fails loudly. The percent-correct -> standard-score curve is an
 * uncalibrated ESTIMATE; its tests pin shape (monotone, conservative, honest
 * windows), not truth.
 */
import { describe, it, expect } from 'vitest'
import {
  AFQT_PERCENTILE_TABLE,
  AF_A_PERCENTILE_TABLE,
  AF_E_PERCENTILE_TABLE,
  AF_G_PERCENTILE_TABLE,
  AF_M_PERCENTILE_TABLE,
  AFQT_CATEGORIES,
  AFQT_SUBTESTS,
  ASVAB_SUBTESTS,
  BRANCH_MINIMUMS,
  LINE_SCORE_COMPOSITES,
  STANDARD_SCORE_ANCHORS,
  VE_WEIGHTS,
  AS_WEIGHTS,
  afqtCategory,
  afqtFromStandardScores,
  afqtPercentileFromRaw,
  afqtRawScore,
  asFromAiSi,
  branchesCleared,
  estimateAfqtFromCounts,
  estimateAfqtFromPercentCorrect,
  estimateLineScores,
  estimateStandardScore,
  lineScores,
  standardScoreFromFraction,
  subtestFromLabel,
  subtestOfTopic,
  veFromWkPc,
} from '@/lib/asvab-scoring'

const ALL_50 = { GS: 50, AR: 50, WK: 50, PC: 50, MK: 50, EI: 50, AI: 50, SI: 50, MC: 50, AO: 50 }

describe('official AFQT percentile table (SEGALL Table 2.5)', () => {
  it('covers sums 109..269 with one entry per sum', () => {
    expect(AFQT_PERCENTILE_TABLE.min).toBe(109)
    expect(AFQT_PERCENTILE_TABLE.max).toBe(269)
    expect(AFQT_PERCENTILE_TABLE.pct).toHaveLength(269 - 109 + 1)
  })

  it('hits the ASVAB-FACTS anchors', () => {
    expect(afqtPercentileFromRaw(183)).toBe(31)
    expect(afqtPercentileFromRaw(200)).toBe(48)
    expect(afqtPercentileFromRaw(202)).toBe(50)
    expect(afqtPercentileFromRaw(249)).toBe(93)
  })

  it('matches more spot rows of the compact table', () => {
    const rows: [number, number][] = [
      [100, 1], [109, 1], [110, 2], [118, 2], [119, 3], [125, 4], [134, 5], [152, 10], [157, 12], [170, 20],
      [182, 30], [187, 35], [188, 35], [189, 36], [190, 38], [209, 57], [210, 59], [215, 64], [216, 66],
      [220, 70], [221, 70], [231, 80], [233, 82], [234, 82], [244, 90], [245, 90], [251, 93], [252, 94],
      [260, 97], [263, 97], [264, 98], [268, 98], [269, 99], [300, 99],
    ]
    for (const [raw, pct] of rows) expect(afqtPercentileFromRaw(raw), `raw ${raw}`).toBe(pct)
  })

  it('is non-decreasing, runs 1..99, and skips 37, 58 and 65 (table quirk)', () => {
    const p = AFQT_PERCENTILE_TABLE.pct
    for (let i = 1; i < p.length; i++) expect(p[i]).toBeGreaterThanOrEqual(p[i - 1])
    expect(p[0]).toBe(1)
    expect(p[p.length - 1]).toBe(99)
    for (const missing of [37, 58, 65]) expect(p).not.toContain(missing)
  })
})

describe('Air Force MAGE tables (SEGALL Tables C.1-C.4)', () => {
  const tables = { M: AF_M_PERCENTILE_TABLE, A: AF_A_PERCENTILE_TABLE, G: AF_G_PERCENTILE_TABLE, E: AF_E_PERCENTILE_TABLE }
  it('have one entry per sum and run 1..99, non-decreasing', () => {
    for (const [k, t] of Object.entries(tables)) {
      expect(t.pct, k).toHaveLength(t.max - t.min + 1)
      expect(t.pct[0], k).toBe(1)
      expect(t.pct[t.pct.length - 1], k).toBe(99)
      for (let i = 1; i < t.pct.length; i++) expect(t.pct[i], `${k}[${i}]`).toBeGreaterThanOrEqual(t.pct[i - 1])
    }
  })
  it('place an all-average applicant near the middle', () => {
    const af = Object.fromEntries(lineScores(ALL_50).filter((l) => l.service === 'Air Force').map((l) => [l.code, l.score]))
    // Sums: M 250, A 100, G 100, E 200 -> Tables C.1-C.4 rows.
    expect(af).toEqual({ M: 47, A: 49, G: 49, E: 50 })
  })
})

describe('AFQT categories', () => {
  it('are contiguous from 1 to 99', () => {
    const sorted = [...AFQT_CATEGORIES].sort((a, b) => a.min - b.min)
    expect(sorted[0].min).toBe(1)
    expect(sorted[sorted.length - 1].max).toBe(99)
    for (let i = 1; i < sorted.length; i++) expect(sorted[i].min).toBe(sorted[i - 1].max + 1)
  })
  it('switch at the official edges', () => {
    const edges: [number, string][] = [
      [1, 'V'], [9, 'V'], [10, 'IVC'], [15, 'IVC'], [16, 'IVB'], [20, 'IVB'], [21, 'IVA'], [30, 'IVA'],
      [31, 'IIIB'], [49, 'IIIB'], [50, 'IIIA'], [64, 'IIIA'], [65, 'II'], [92, 'II'], [93, 'I'], [99, 'I'],
    ]
    for (const [p, c] of edges) expect(afqtCategory(p), `percentile ${p}`).toBe(c)
  })
})

describe('VE, AS and the AFQT formula', () => {
  it('VE weights PC at 0.61934 of WK and re-centres at 50', () => {
    expect(VE_WEIGHTS.PC / VE_WEIGHTS.WK).toBeCloseTo(0.61934, 4)
    expect(veFromWkPc(50, 50, false)).toBeCloseTo(50, 4)
    expect(veFromWkPc(50, 50)).toBe(50)
  })
  it('VE is not a plain sum or average: WK moves it more than PC', () => {
    expect(veFromWkPc(60, 50)).toBeGreaterThan(veFromWkPc(50, 60))
    expect(veFromWkPc(60, 60)).toBeGreaterThan(60) // re-standardized composite spreads wider than either part
  })
  it('AS weights AI and SI equally and re-centres at 50', () => {
    expect(AS_WEIGHTS.AI).toBeCloseTo(AS_WEIGHTS.SI, 6)
    expect(asFromAiSi(50, 50)).toBe(50)
    expect(asFromAiSi(60, 40)).toBe(asFromAiSi(40, 60))
  })
  it('AFQT raw = AR + MK + 2·VE', () => {
    expect(afqtRawScore({ AR: 55, MK: 45, VE: 52 })).toBe(55 + 45 + 104)
    const r = afqtFromStandardScores({ WK: 50, PC: 50, AR: 50, MK: 50 })
    expect(r).toEqual({ ve: 50, raw: 200, percentile: 48, category: 'IIIB' })
  })
  it('the all-average applicant is AFQT 48, Category IIIB', () => {
    expect(afqtFromStandardScores({ WK: 50, PC: 50, AR: 50, MK: 50 }).percentile).toBe(48)
  })
})

describe('service composites', () => {
  it('Army GT and Marine composites put the all-average applicant at 100', () => {
    const ls = lineScores(ALL_50)
    const get = (service: string, code: string) => ls.find((l) => l.service === service && l.code === code)?.score
    expect(get('Army', 'GT')).toBe(100)
    for (const code of ['GT', 'MM', 'EL', 'CL']) expect(get('Marine Corps', code), code).toBe(100)
    for (const code of ['CL', 'CO', 'EL', 'FA', 'GM', 'MM', 'OF', 'SC', 'ST']) {
      const v = get('Army', code) as number
      expect(Math.abs(v - 100), `Army ${code}`).toBeLessThanOrEqual(2)
    }
  })
  it('Navy composites are raw sums', () => {
    const navy = Object.fromEntries(lineScores(ALL_50).filter((l) => l.service === 'Navy').map((l) => [l.code, l.score]))
    expect(navy).toEqual({ GT: 100, EL: 200, BEE: 200, ENG: 100, MEC: 150, MEC2: 150, NUC: 200, OPS: 200, HM: 150, ADM: 100 })
  })
  it('Marine GT includes MC; Army GT does not', () => {
    const marine = LINE_SCORE_COMPOSITES.find((c) => c.service === 'Marine Corps' && c.code === 'GT')!
    const armyGt = LINE_SCORE_COMPOSITES.find((c) => c.service === 'Army' && c.code === 'GT')!
    expect(Object.keys(marine.weights).sort()).toEqual(['AR', 'MC', 'VE'])
    expect(Object.keys(armyGt.weights).sort()).toEqual(['AR', 'VE'])
  })
  it('AO only appears in Navy composites', () => {
    for (const c of LINE_SCORE_COMPOSITES) if (c.weights.AO) expect(c.service).toBe('Navy')
  })
  it('skips composites whose inputs are missing', () => {
    const codes = lineScores({ WK: 50, PC: 50, AR: 50, MK: 50 }).map((l) => `${l.service} ${l.code}`)
    expect(codes).toContain('Army GT')
    expect(codes).toContain('Air Force A')
    expect(codes).not.toContain('Air Force M')
    expect(codes).not.toContain('Navy MEC2')
  })
})

describe('percent correct -> standard score (estimate)', () => {
  it('anchors ascend and do not place 50% correct at the mean', () => {
    for (let i = 1; i < STANDARD_SCORE_ANCHORS.length; i++) {
      expect(STANDARD_SCORE_ANCHORS[i].pct).toBeGreaterThan(STANDARD_SCORE_ANCHORS[i - 1].pct)
      expect(STANDARD_SCORE_ANCHORS[i].score).toBeGreaterThan(STANDARD_SCORE_ANCHORS[i - 1].score)
    }
    expect(standardScoreFromFraction(0.5)).toBeLessThan(50)
    expect(standardScoreFromFraction(0.58)).toBeCloseTo(50, 6)
  })
  it('is conservative at the top: a perfect fixed form stays under +2.5 SD', () => {
    expect(estimateStandardScore(10, 10).score).toBeLessThanOrEqual(70)
    expect(estimateStandardScore(15, 15).score).toBeLessThanOrEqual(70)
  })
  it('is monotone in the number correct', () => {
    for (const n of [2, 3, 6, 10, 15]) {
      let prev = -Infinity
      for (let k = 0; k <= n; k++) {
        const v = estimateStandardScore(k, n).value
        expect(v, `${k}/${n}`).toBeGreaterThan(prev)
        prev = v
      }
    }
  })
  it('pulls thin evidence toward the mean and widens its window', () => {
    const two = estimateStandardScore(2, 2)
    const fifteen = estimateStandardScore(15, 15)
    expect(two.value).toBeLessThan(fifteen.value)
    expect(two.high - two.low).toBeGreaterThan(fifteen.high - fifteen.low)
    const none = estimateStandardScore(0, 0)
    expect(none.score).toBe(50)
  })
  it('always brackets the point estimate', () => {
    for (const n of [2, 6, 10]) for (let k = 0; k <= n; k++) {
      const e = estimateStandardScore(k, n)
      expect(e.low).toBeLessThanOrEqual(e.score)
      expect(e.high).toBeGreaterThanOrEqual(e.score)
    }
  })
})

describe('estimateAfqtFromPercentCorrect / estimateAfqtFromCounts', () => {
  it('returns null unless all four AFQT subtests are present', () => {
    expect(estimateAfqtFromPercentCorrect({ WK: 0.8, PC: 0.8, AR: 0.8 })).toBeNull()
    expect(estimateAfqtFromCounts({ WK: { correct: 5, total: 10 }, PC: { correct: 3, total: 6 }, AR: { correct: 5, total: 10 }, MK: { correct: 0, total: 0 } })).toBeNull()
  })
  it('returns { percentile, low, high, category } with low <= percentile <= high', () => {
    const e = estimateAfqtFromPercentCorrect({ WK: 0.7, PC: 0.6, AR: 0.65, MK: 0.55 })!
    expect(e).toMatchObject({ percentile: expect.any(Number), low: expect.any(Number), high: expect.any(Number), category: expect.any(String) })
    expect(e.low).toBeLessThanOrEqual(e.percentile)
    expect(e.high).toBeGreaterThanOrEqual(e.percentile)
    expect(e.range).toEqual({ low: e.low, high: e.high })
    expect(e.category).toBe(afqtCategory(e.percentile))
  })
  it('the average-performance form lands at the all-average AFQT (48)', () => {
    expect(estimateAfqtFromPercentCorrect({ WK: 0.58, PC: 0.58, AR: 0.58, MK: 0.58 })!.percentile).toBe(48)
  })
  it('is monotone in percent correct', () => {
    let prev = 0
    for (let p = 0; p <= 1.0001; p += 0.05) {
      const e = estimateAfqtFromPercentCorrect({ WK: p, PC: p, AR: p, MK: p })!
      expect(e.percentile, `p=${p.toFixed(2)}`).toBeGreaterThanOrEqual(prev)
      prev = e.percentile
    }
  })
  it('chance guessing lands in Category IV or V; a perfect run in Category I or II', () => {
    const chance = estimateAfqtFromCounts({ WK: { correct: 2, total: 10 }, PC: { correct: 1, total: 6 }, AR: { correct: 2, total: 10 }, MK: { correct: 3, total: 10 } })!
    expect(['IVA', 'IVB', 'IVC', 'V']).toContain(chance.category)
    const perfect = estimateAfqtFromCounts({ WK: { correct: 10, total: 10 }, PC: { correct: 6, total: 6 }, AR: { correct: 10, total: 10 }, MK: { correct: 10, total: 10 } })!
    expect(['I', 'II']).toContain(perfect.category)
  })
  it('a ~36-item diagnostic gives an honest window: 15-35 percentile points wide in the middle', () => {
    const e = estimateAfqtFromCounts({ WK: { correct: 6, total: 10 }, PC: { correct: 4, total: 6 }, AR: { correct: 6, total: 10 }, MK: { correct: 6, total: 10 } })!
    const width = e.high - e.low
    expect(width).toBeGreaterThanOrEqual(15)
    expect(width).toBeLessThanOrEqual(35)
  })
  it('more items narrow the window', () => {
    const few = estimateAfqtFromPercentCorrect({ WK: 0.6, PC: 0.6, AR: 0.6, MK: 0.6 }, { WK: 5, PC: 5, AR: 5, MK: 5 })!
    const many = estimateAfqtFromPercentCorrect({ WK: 0.6, PC: 0.6, AR: 0.6, MK: 0.6 }, { WK: 40, PC: 40, AR: 40, MK: 40 })!
    expect(many.high - many.low).toBeLessThan(few.high - few.low)
  })
})

describe('estimateLineScores', () => {
  it('brackets each composite estimate and covers every service when all subtests are present', () => {
    const est = Object.fromEntries(ASVAB_SUBTESTS.map((s) => [s.id, estimateStandardScore(2, 3)]))
    const ls = estimateLineScores(est)
    expect(new Set(ls.map((l) => l.service))).toEqual(new Set(['Air Force', 'Marine Corps', 'Army', 'Navy']))
    expect(ls).toHaveLength(LINE_SCORE_COMPOSITES.length)
    for (const l of ls) {
      expect(l.low, `${l.service} ${l.code}`).toBeLessThanOrEqual(l.score)
      expect(l.high, `${l.service} ${l.code}`).toBeGreaterThanOrEqual(l.score)
    }
  })
})

describe('branch minimums and labels', () => {
  it('lists the ASVAB-FACTS diploma minimums', () => {
    const d = Object.fromEntries(BRANCH_MINIMUMS.map((b) => [b.branch, b.diploma]))
    expect(d).toEqual({ Army: 31, Navy: 31, 'Air Force': 31, 'Marine Corps': 31, 'Coast Guard': 32, 'Space Force': null })
    expect(BRANCH_MINIMUMS.find((b) => b.branch === 'Air Force')!.ged).toBe(50)
  })
  it('branchesCleared compares against the diploma minimum', () => {
    const r = Object.fromEntries(branchesCleared(31).map((b) => [b.branch, b.clears]))
    expect(r).toMatchObject({ Army: true, 'Coast Guard': false, 'Space Force': null })
  })
  it('maps labels and topics to subtests', () => {
    expect(AFQT_SUBTESTS).toEqual(['WK', 'PC', 'AR', 'MK'])
    expect(subtestFromLabel('MK')).toBe('MK')
    expect(subtestFromLabel('Word Knowledge')).toBe('WK')
    expect(subtestFromLabel('arithmetic-reasoning')).toBe('AR')
    expect(subtestFromLabel('asvab-mechanical-comprehension')).toBe('MC')
    expect(subtestFromLabel('asvab-ei-circuits')).toBe('EI')
    expect(subtestFromLabel('Word Knowledge (WK)')).toBe('WK')
    expect(subtestFromLabel('nonsense')).toBeNull()
    expect(subtestOfTopic('asvab-ao-shapes')).toBe('AO')
    expect(subtestOfTopic('asvab-test-strategy')).toBeNull()
  })
})
