import { describe, it, expect } from 'vitest'
import { gradeNumeric, numericMatches, parseNumericAnswer } from '@/lib/numeric-answer'

describe('numeric answers', () => {
  it('reads the forms students type', () => {
    expect(parseNumericAnswer('0.016')).toBeCloseTo(0.016, 6)
    expect(parseNumericAnswer('1.6e-2')).toBeCloseTo(0.016, 6)
    expect(parseNumericAnswer('1.6E-2 C')).toBeCloseTo(0.016, 6)
    expect(parseNumericAnswer('1.6 x 10^-2')).toBeCloseTo(0.016, 6)
    expect(parseNumericAnswer('1.6×10⁻²')).toBeCloseTo(0.016, 6)
    expect(parseNumericAnswer('1.6 * 10^17')).toBe(1.6e17)
    expect(parseNumericAnswer('1.0 × 10¹⁷ electrons')).toBe(1e17)
    expect(parseNumericAnswer('10^17')).toBe(1e17)
    expect(parseNumericAnswer('12,500')).toBe(12500)
    expect(parseNumericAnswer('12 500 ions')).toBe(12500)
    expect(parseNumericAnswer('  6250')).toBe(6250)
    expect(parseNumericAnswer('−70')).toBe(-70)
    expect(parseNumericAnswer('.5')).toBe(0.5)
  })

  it('rejects answers that do not start with a number', () => {
    expect(parseNumericAnswer('')).toBeNull()
    expect(parseNumericAnswer('about twelve thousand')).toBeNull()
    expect(parseNumericAnswer('e17')).toBeNull()
    expect(parseNumericAnswer('C 0.016')).toBeNull()
  })

  it('grades within a relative tolerance (5% by default)', () => {
    expect(numericMatches(12500, 12500)).toBe(true)
    expect(numericMatches(12000, 12500)).toBe(true)
    expect(numericMatches(11000, 12500)).toBe(false)
    expect(numericMatches(1.0e17, 1.0e17)).toBe(true)
    expect(numericMatches(1.6e-19, 1.6e-2)).toBe(false)
    expect(numericMatches(0, 0)).toBe(true)
    expect(numericMatches(6250, 12500)).toBe(false)
    expect(gradeNumeric('1.6e-2 C', 0.016)).toEqual({ value: 0.016, correct: true })
    expect(gradeNumeric('16', 0.016).correct).toBe(false)
    expect(gradeNumeric('6,250', 6250, 0.01).correct).toBe(true)
  })
})
