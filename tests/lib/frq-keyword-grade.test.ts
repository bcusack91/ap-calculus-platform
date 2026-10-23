import { describe, expect, it } from 'vitest'
import {
  gradeKeywordRubric,
  keywordMatches,
  normalizeFrqText,
  prepareResponse,
  responseHasKeyword,
  type FrqKeywordLine,
} from '@/lib/frq-keyword-grade'
import { apCalcABFRQs } from '@/data/ap-calc-ab-frq/questions'
import { getPrecalcFRQs } from '@/data/ap-precalc-frq/questions'

const has = (response: string, keyword: string) => responseHasKeyword(prepareResponse(response), keyword)
const line = (keywords: string[], extra: Partial<FrqKeywordLine> = {}): FrqKeywordLine => ({ points: 1, keywords, ...extra })

describe('normalizeFrqText', () => {
  it('unifies minus signs and dashes', () => {
    expect(normalizeFrqText('x = −3, y = –2, z = —1')).toBe('x = -3, y = -2, z = -1')
  })

  it('strips markdown emphasis and LaTeX dollar delimiters', () => {
    expect(normalizeFrqText('(i) **linear.** and *only* this')).toBe('(i) linear. and only this')
    expect(normalizeFrqText('$h(0) = -1$')).toBe(' h(0) = -1 ')
  })

  it('keeps currency dollar signs', () => {
    expect(normalizeFrqText('p = $55 and \\$20 > \\$9')).toBe('p = $55 and $20 > $9')
  })

  it('unifies times signs, keeping a times asterisk distinct from emphasis', () => {
    expect(normalizeFrqText('0.5 * 2^x')).toBe('0.5·2^x')
    expect(normalizeFrqText('0.5*2^x')).toBe('0.5·2^x')
    expect(normalizeFrqText('3 × 4 = 3 \\cdot 4')).toBe('3·4 = 3·4')
  })

  it('unifies non-breaking spaces, smart quotes, and primes', () => {
    expect(normalizeFrqText('f′(2) = 3 “yes”')).toBe('f\'(2) = 3 "yes"')
  })
})

describe('responseHasKeyword', () => {
  it('matches a U+2212 minus against an ASCII keyword and the reverse', () => {
    expect(has('h(0) = −1', 'h(0) = -1')).toBe(true)
    expect(has('h(0) = -1', 'h(0) = −1')).toBe(true)
    expect(has('the zero is −1.491', '-1.491')).toBe(true)
  })

  it('sees through markdown bold and LaTeX', () => {
    expect(has('8 − 12 − 4 + 7 = **−1**', '+ 7 = -1')).toBe(true)
    expect(has('(i) **Linear.**', '(i) linear')).toBe(true)
    expect(has('$f^{-1}(36) = 4$', '(36) = 4')).toBe(true)
  })

  it('keeps the word-start rule after normalization', () => {
    expect(has('instead', 'tea')).toBe(false)
    expect(has('**instead**', 'tea')).toBe(false)
    expect(has('x = −12', '= -1 ')).toBe(false)
  })

  it('never lets a keyword that normalizes to nothing match everything', () => {
    expect(has('any response at all', '**')).toBe(false)
    expect(has('any response at all', '$')).toBe(false)
  })

  it('keeps every match the raw grader made', () => {
    expect(keywordMatches('cost is $20', '$20')).toBe(true)
    expect(has('cost is $20', '$20')).toBe(true)
    expect(has('cost is 20 units', '$20')).toBe(false)
  })
})

describe('gradeKeywordRubric', () => {
  it('any-of keywords: one keyword earns the line', () => {
    const r = gradeKeywordRubric('the model underestimates', [line(['underestimate', 'too low'])])
    expect(r.pointsEarned).toBe(1)
  })

  it('requiresAll: every group must also match', () => {
    const rubric = [line(['underestimate', 'too low'], { requiresAll: [{ keywords: ['0.08'] }] })]
    expect(gradeKeywordRubric('residual 0.08, so the model underestimates', rubric).pointsEarned).toBe(1)
    expect(gradeKeywordRubric('the model underestimates', rubric).pointsEarned).toBe(0)
    expect(gradeKeywordRubric('residual = 0.08, the model overestimates', rubric).pointsEarned).toBe(0)
  })

  it('minMatches counts distinct keywords', () => {
    const rubric = [line(['tariff', 'tariff', 'embargo'], { minMatches: 2 })]
    expect(gradeKeywordRubric('a tariff and another tariff', rubric).pointsEarned).toBe(0)
    expect(gradeKeywordRubric('a tariff and an embargo', rubric).pointsEarned).toBe(1)
  })

  it('no regression on an AP Calc AB FRQ line', () => {
    const part = apCalcABFRQs[0].parts[1]
    expect(part.rubric[2].keywords).toContain('66 - 24')
    const earned = (text: string) => gradeKeywordRubric(text, part.rubric).breakdown.map((b) => b.earned)
    expect(earned('Start with the initial 50 L, remove 2(12) = 24 L drained: 50 + 66 - 24 = 92 liters.')).toEqual([true, true, true])
    expect(earned('There are 70 gallons left.')).toEqual([false, false, false])
    // U+2212 now matches the ASCII '66 - 24' keyword.
    expect(earned('66 − 24')).toEqual([false, true, true])
  })
})

describe('AP Precalculus AND lines', () => {
  const frq = (id: string) => getPrecalcFRQs().find((q) => q.id === id)!
  const partOf = (id: string, label: string) => frq(id).parts.find((p) => p.label === label)!

  it('every sample answer still earns full credit', () => {
    for (const q of getPrecalcFRQs()) {
      for (const p of q.parts) expect(gradeKeywordRubric(p.sampleAnswer, p.rubric).pointsEarned, `${q.id} ${p.label}`).toBe(p.maxPoints)
    }
  })

  it('a partial answer no longer earns an all-components line', () => {
    const zeros = partOf('precalc-frq-q1-4', 'B').rubric
    expect(gradeKeywordRubric('x ≈ −1.491', zeros).breakdown[0].earned).toBe(false)
    expect(gradeKeywordRubric('x ≈ −1.491, 1.657, 2.834', zeros).breakdown[0].earned).toBe(true)
    const trig = partOf('precalc-frq-q4-4', 'B').rubric
    expect(gradeKeywordRubric('θ = 3π/2, 2π/3, 4π/3', trig).breakdown[0].earned).toBe(false)
    expect(gradeKeywordRubric('θ = π/2, 2π/3, 4π/3, 3π/2', trig).breakdown[0].earned).toBe(true)
  })
})
