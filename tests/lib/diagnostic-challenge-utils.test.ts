import { describe, it, expect } from 'vitest'
import {
  parseCategoryAndForm,
  getDiagnosticRoute,
  getDiagnosticLabel,
  percentageToTier,
} from '@/lib/diagnostic-challenge-utils'

describe('percentageToTier', () => {
  it('maps a perfect 100% to tier 5', () => {
    expect(percentageToTier(100)).toBe(5)
  })

  it('maps a zero score to tier 1', () => {
    expect(percentageToTier(0)).toBe(1)
  })

  it('returns tier 5 exactly at the 80 cutoff (inclusive)', () => {
    expect(percentageToTier(80)).toBe(5)
  })

  it('returns tier 4 just below the 80 cutoff', () => {
    expect(percentageToTier(79)).toBe(4)
    expect(percentageToTier(79.999)).toBe(4)
  })

  it('returns tier 4 exactly at the 65 cutoff and tier 3 just below', () => {
    expect(percentageToTier(65)).toBe(4)
    expect(percentageToTier(64)).toBe(3)
  })

  it('returns tier 3 exactly at the 50 cutoff and tier 2 just below', () => {
    expect(percentageToTier(50)).toBe(3)
    expect(percentageToTier(49)).toBe(2)
  })

  it('returns tier 2 exactly at the 35 cutoff and tier 1 just below', () => {
    expect(percentageToTier(35)).toBe(2)
    expect(percentageToTier(34)).toBe(1)
  })
})

describe('parseCategoryAndForm', () => {
  it('splits a trailing numeric form off the base category', () => {
    expect(parseCategoryAndForm('ap-calculus-ab-2')).toEqual({
      baseCategory: 'ap-calculus-ab',
      form: 2,
    })
  })

  it('returns null when there is no trailing number', () => {
    expect(parseCategoryAndForm('ap-calculus-ab')).toBeNull()
  })

  it('returns null for a zero or sub-1 form number', () => {
    expect(parseCategoryAndForm('something-0')).toBeNull()
  })

  it('parses multi-digit form numbers', () => {
    expect(parseCategoryAndForm('mcat-12')).toEqual({
      baseCategory: 'mcat',
      form: 12,
    })
  })

  it('greedily keeps internal numbers in the base, only peeling the final group', () => {
    // The regex is `^(.*)-(\d+)$`; `.*` is greedy so only the last -digits split.
    expect(parseCategoryAndForm('form-3-attempt-5')).toEqual({
      baseCategory: 'form-3-attempt',
      form: 5,
    })
  })
})

describe('getDiagnosticRoute', () => {
  it('prefixes the base category with a slash', () => {
    expect(getDiagnosticRoute('ap-calculus-ab')).toBe('/ap-calculus-ab')
  })
})

describe('getDiagnosticLabel', () => {
  it('title-cases a hyphenated slug into a human label', () => {
    expect(getDiagnosticLabel('ap-calculus-ab')).toBe('Ap Calculus Ab')
  })

  it('handles a single-word slug', () => {
    expect(getDiagnosticLabel('mcat')).toBe('Mcat')
  })
})
