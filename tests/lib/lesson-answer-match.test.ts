import { describe, expect, it } from 'vitest'
import { isAnswerMatch, parseNumericAnswer } from '@/lib/lesson-answer-match'

// Keys below are real input-box keys from the AP Calculus AB/BC lessons
// (src/data/interactive-lessons/calcab-*/calcbc-*), quoted as authored.

describe('isAnswerMatch — fraction keys accept decimals', () => {
  it('direct-substitution p1 "5/3" ("decimal or fraction")', () => {
    for (const a of ['5/3', '1.667', '1.666', '1.6667', '10/6', ' 5 / 3 ', '1 2/3']) expect(isAnswerMatch(a, '5/3'), a).toBe(true)
    for (const a of ['1.6', '1.7', '1.67x', '1.668', '3/5']) expect(isAnswerMatch(a, '5/3'), a).toBe(false)
  })

  it('1.67 has three significant figures, so it stands in for 5/3', () => {
    expect(isAnswerMatch('1.67', '5/3')).toBe(true)
  })

  it('u-substitution p4 "1/3": 0.333 and 0.3333 yes, 0.3 and 0.33 no', () => {
    for (const a of ['0.333', '0.3333', '.333', '0.33333', '1/3', '2/6']) expect(isAnswerMatch(a, '1/3'), a).toBe(true)
    for (const a of ['0.3', '0.33', '0.34', '0.3', '0.335', '0']) expect(isAnswerMatch(a, '1/3'), a).toBe(false)
  })

  it('terminating fractions match their exact decimal', () => {
    expect(isAnswerMatch('6.25', '25/4')).toBe(true) // direct-substitution p3
    expect(isAnswerMatch('1.6', '8/5')).toBe(true) // factoring-method p3
    expect(isAnswerMatch('0.1', '1/10')).toBe(true) // rationalizing p2
    expect(isAnswerMatch('0.5', '1/2')).toBe(true)
    expect(isAnswerMatch('.5', '1/2')).toBe(true)
    expect(isAnswerMatch('0.125', '1/8')).toBe(true) // rationalizing p3
    expect(isAnswerMatch('1.5', '3/2')).toBe(true) // continuity-introduction p3
    expect(isAnswerMatch('0.13', '1/8')).toBe(false)
    expect(isAnswerMatch('0.12', '1/8')).toBe(false)
  })

  it('rationalizing p3 "1/6" — 0.167 (rounded) and 0.166 (truncated), not 0.17', () => {
    expect(isAnswerMatch('0.167', '1/6')).toBe(true)
    expect(isAnswerMatch('0.1667', '1/6')).toBe(true)
    expect(isAnswerMatch('0.166', '1/6')).toBe(true)
    expect(isAnswerMatch('0.17', '1/6')).toBe(false)
    expect(isAnswerMatch('0.168', '1/6')).toBe(false)
  })

  it('negative keys and mixed sign spellings', () => {
    // implicit-differentiation p1 "-5/12", chain-rule p3 "-3/4"
    for (const a of ['-5/12', '−5/12', '- 5/12', '5/-12', '-(5/12)', '-0.417', '-0.4167', '−0.4166']) {
      expect(isAnswerMatch(a, '-5/12'), a).toBe(true)
    }
    expect(isAnswerMatch('5/12', '-5/12')).toBe(false)
    expect(isAnswerMatch('0.417', '-5/12')).toBe(false)
    expect(isAnswerMatch('-0.75', '-3/4')).toBe(true)
    expect(isAnswerMatch('–0.75', '-3/4')).toBe(true) // en dash
    expect(isAnswerMatch('-10/16', '-5/8')).toBe(true) // basic-diff p7 keys -10/16
    expect(isAnswerMatch('-5/8', '-10/16')).toBe(true)
  })

  it('tiny fractional keys (BC error bounds) accept enough significant figures', () => {
    expect(isAnswerMatch('0.00139', '1/720')).toBe(true) // alternating-series p4
    expect(isAnswerMatch('0.001', '1/720')).toBe(false)
    expect(isAnswerMatch('0.00412', '1/243')).toBe(true) // alternating-series p7
    expect(isAnswerMatch('0.0000125', '1/80000')).toBe(true)
    expect(isAnswerMatch('1.25e-5', '1/80000')).toBe(true)
  })
})

describe('isAnswerMatch — decimal keys accept fractions', () => {
  it('linearization-style decimal keys', () => {
    expect(isAnswerMatch('61/20', '3.05')).toBe(true) // definition-of-derivative p5
    expect(isAnswerMatch('6/5', '1.2')).toBe(true) // linearization p5
    expect(isAnswerMatch('9/20', '0.045')).toBe(false)
    expect(isAnswerMatch('0.045', '0.045')).toBe(true) // differential-equations p4
  })

  it('a decimal key keeps its 0.5% sig-fig tolerance, now for any form', () => {
    expect(isAnswerMatch('1/3', '0.333')).toBe(true)
    expect(isAnswerMatch('0.33', '0.333')).toBe(false)
    expect(isAnswerMatch('2.50', '2.5')).toBe(true)
    expect(isAnswerMatch('3.0e-5', '0.00003')).toBe(true)
    expect(isAnswerMatch('2.6', '2.5')).toBe(false)
    expect(isAnswerMatch('pi/2', '1.5708')).toBe(true)
    expect(isAnswerMatch('53/6', '8.83')).toBe(true) // arc-length p6
    expect(isAnswerMatch('0.0004', '0')).toBe(true)
    expect(isAnswerMatch('1,800', '1800')).toBe(true)
  })
})

describe('isAnswerMatch — π, e, √ and ln forms', () => {
  it('limits-at-infinity p1 "pi/2"', () => {
    for (const a of ['pi/2', 'π/2', 'PI/2', '\\pi/2', '\\frac{\\pi}{2}', '$\\frac{\\pi}{2}$', '1.571', '1.5708', '1.57', '(1/2)pi', '0.5π']) {
      expect(isAnswerMatch(a, 'pi/2'), a).toBe(true)
    }
    for (const a of ['1.5', '1.6', '3.14/2', 'pi', '2/pi']) expect(isAnswerMatch(a, 'pi/2'), a).toBe(false)
  })

  it('bc-exam-strategies p6 "3pi/2" and related-rates p1 "24pi"', () => {
    expect(isAnswerMatch('3π/2', '3pi/2')).toBe(true)
    expect(isAnswerMatch('4.712', '3pi/2')).toBe(true)
    expect(isAnswerMatch('1.5pi', '3pi/2')).toBe(true)
    expect(isAnswerMatch('24 π', '24pi')).toBe(true)
    expect(isAnswerMatch('75.40', '24pi')).toBe(true)
    expect(isAnswerMatch('75.4', '24pi')).toBe(true)
    expect(isAnswerMatch('75', '24pi')).toBe(false)
  })

  it('implicit-differentiation p5 "-1/(2sqrt3)" accepts the rationalized and decimal forms', () => {
    for (const a of ['-√3/6', '-sqrt(3)/6', '-1/(2√3)', '-0.2887', '-0.289', '-0.288']) {
      expect(isAnswerMatch(a, '-1/(2sqrt3)'), a).toBe(true)
    }
    expect(isAnswerMatch('-0.29', '-1/(2sqrt3)')).toBe(false)
    expect(isAnswerMatch('0.2887', '-1/(2sqrt3)')).toBe(false)
  })

  it('ln and e keys', () => {
    expect(isAnswerMatch('0.693', 'ln(2)')).toBe(true) // differential-equations p7
    expect(isAnswerMatch('ln 2', 'ln(2)')).toBe(true)
    expect(isAnswerMatch('0.69', 'ln(2)')).toBe(false)
    expect(isAnswerMatch('3.195', '(e^2-1)/2')).toBe(true) // applications-of-derivatives p5
    expect(isAnswerMatch('(e²-1)/2', '(e^2-1)/2')).toBe(true)
    expect(isAnswerMatch('0.184', '1/(2e)')).toBe(true) // convergence-tests p3
    expect(isAnswerMatch('1/(2*e)', '1/(2e)')).toBe(true)
    expect(isAnswerMatch('2.386', '1 + ln 4')).toBe(true) // u-substitution p5
    expect(isAnswerMatch('1+2ln2', '1 + ln 4')).toBe(true)
  })

  it('ambiguous spellings are not evaluated (only exact strings match)', () => {
    // "1/2e" could be 1/(2e) or e/2; "ln8/5" could be ln(8/5) or ln(8)/5.
    expect(parseNumericAnswer('1/2e')).toBeNull()
    expect(parseNumericAnswer('9/4 pi')).toBeNull()
    expect(parseNumericAnswer('ln8/5')).toBeNull()
    expect(isAnswerMatch('1/2e', '1/2e')).toBe(true)
    expect(isAnswerMatch('1.359', '1/2e')).toBe(false)
    expect(isAnswerMatch('0.416', 'ln8/5')).toBe(false)
    expect(isAnswerMatch('ln(8/5)', 'ln(1.6)')).toBe(true)
  })
})

describe('isAnswerMatch — non-numeric keys keep exact matching', () => {
  it('words, expressions with variables, intervals and lists', () => {
    expect(isAnswerMatch('Increasing', 'increasing')).toBe(true)
    expect(isAnswerMatch('decreasing', 'increasing')).toBe(false)
    expect(isAnswerMatch('x - 2', 'x-2')).toBe(true) // rationalizing p1
    expect(isAnswerMatch('2-x', 'x-2')).toBe(false)
    expect(isAnswerMatch('[2, 8)', '[2, 8)')).toBe(true)
    expect(isAnswerMatch('[2,8]', '[2, 8)')).toBe(false)
    expect(isAnswerMatch('0,3', '0, 3')).toBe(true)
    expect(isAnswerMatch('5+', '5+')).toBe(true) // what-is-a-limit p2
    expect(isAnswerMatch('5', '5+')).toBe(false)
    expect(isAnswerMatch('upper middle', 'upper-middle')).toBe(true)
    expect(isAnswerMatch('[Ne]3s²3p⁵', '[Ne]3s23p5')).toBe(true)
  })

  it('∞ is accepted for an "infinity" key', () => {
    expect(isAnswerMatch('∞', 'infinity')).toBe(true)
    expect(isAnswerMatch('-∞', '-infinity')).toBe(true)
    expect(isAnswerMatch('∞', '-infinity')).toBe(false)
  })

  it('range keys are never evaluated as subtraction', () => {
    expect(isAnswerMatch('-4', '1914-1918')).toBe(false)
    expect(isAnswerMatch('-2', '26-28')).toBe(false)
    expect(isAnswerMatch('26–28', '26-28')).toBe(true)
  })

  it('a capital E is a letter, not Euler’s number', () => {
    expect(isAnswerMatch('2.718', 'E')).toBe(false)
    expect(isAnswerMatch('e', 'E')).toBe(true)
    expect(isAnswerMatch('2.718', 'e')).toBe(true)
  })

  it('empty answers never match', () => {
    expect(isAnswerMatch('', '5/3')).toBe(false)
    expect(isAnswerMatch('   ', '0')).toBe(false)
  })
})
