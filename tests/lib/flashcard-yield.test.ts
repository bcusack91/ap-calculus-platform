/**
 * The yield predicate decides which cards a student is ever shown. The
 * highest-stakes rule is that unlabeled (NULL) cards — every non-MCAT card on
 * the site — always pass; a NULL-unsafe comparison would hide ~8,600 of them.
 */
import { describe, it, expect, afterEach } from 'vitest'
import {
  servedFlashcardWhere,
  servedProgressWhere,
  servedYields,
  yieldRank,
  compareByYield,
  lowYieldHiddenByDefault,
  DEFAULT_YIELD_PREFS,
} from '@/lib/flashcard-yield'

afterEach(() => {
  delete process.env.FLASHCARD_HIDE_LOW_YIELD
})

describe('the served-card predicate', () => {
  it('always serves ultra-high and high; medium on and low off by default', () => {
    expect(servedYields(DEFAULT_YIELD_PREFS)).toEqual(['ULTRA_HIGH', 'HIGH', 'MEDIUM'])
    expect(servedYields({ includeMedium: false, includeLow: false })).toEqual(['ULTRA_HIGH', 'HIGH'])
    expect(servedYields({ includeMedium: false, includeLow: true })).toEqual(['ULTRA_HIGH', 'HIGH', 'LOW'])
  })

  it('spells out the NULL case so unlabeled cards are never hidden', () => {
    // `examYield: { notIn: [...] }` drops NULL rows in SQL. This shape is the
    // one that keeps every non-MCAT card visible; do not "simplify" it.
    expect(servedFlashcardWhere(DEFAULT_YIELD_PREFS)).toEqual({
      OR: [{ examYield: null }, { examYield: { in: ['ULTRA_HIGH', 'HIGH', 'MEDIUM'] } }],
    })
  })

  it('applies no filter at all when every tier is opted in', () => {
    const all = { includeMedium: true, includeLow: true }
    expect(servedFlashcardWhere(all)).toEqual({})
    expect(servedProgressWhere(all)).toEqual({})
  })

  it('wraps the same rule one relation up for progress rows', () => {
    expect(servedProgressWhere(DEFAULT_YIELD_PREFS)).toEqual({ flashcard: servedFlashcardWhere(DEFAULT_YIELD_PREFS) })
  })

  it('serves everything when the kill switch is thrown', () => {
    process.env.FLASHCARD_HIDE_LOW_YIELD = '0'
    expect(lowYieldHiddenByDefault()).toBe(false)
    expect(servedFlashcardWhere({ includeMedium: false, includeLow: false })).toEqual({})
  })
})

describe('yield ordering', () => {
  it('ranks ULTRA_HIGH, HIGH, then unlabeled with MEDIUM, then LOW', () => {
    expect(yieldRank('ULTRA_HIGH')).toBe(0)
    expect(yieldRank('HIGH')).toBe(1)
    expect(yieldRank('MEDIUM')).toBe(2)
    expect(yieldRank(null)).toBe(2)
    expect(yieldRank(undefined)).toBe(2)
    expect(yieldRank('LOW')).toBe(3)
  })

  it('is a total order with deterministic tiebreaks', () => {
    const t0 = new Date('2026-01-01')
    const t1 = new Date('2026-01-02')
    const cards = [
      { id: 'c', examYield: 'LOW' as const, createdAt: t0 },
      { id: 'b', examYield: null, createdAt: t1 },
      { id: 'a', examYield: null, createdAt: t0 },
      { id: 'd', examYield: 'HIGH' as const, createdAt: t1 },
      { id: 'e', examYield: 'ULTRA_HIGH' as const, createdAt: t1 },
    ]
    expect([...cards].sort(compareByYield).map((c) => c.id)).toEqual(['e', 'd', 'a', 'b', 'c'])
    expect([...cards].reverse().sort(compareByYield).map((c) => c.id)).toEqual(['e', 'd', 'a', 'b', 'c'])
  })
})
