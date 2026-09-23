/**
 * The yield predicate decides which cards a student is ever shown. The
 * highest-stakes rule is that unlabeled (NULL) cards — every non-MCAT card on
 * the site — always pass; a NULL-unsafe comparison would hide ~8,600 of them.
 */
import { describe, it, expect, afterEach } from 'vitest'
import {
  servedFlashcardWhere,
  servedProgressWhere,
  yieldRank,
  compareByYield,
  lowYieldHiddenByDefault,
} from '@/lib/flashcard-yield'

afterEach(() => {
  delete process.env.FLASHCARD_HIDE_LOW_YIELD
})

describe('the served-card predicate', () => {
  it('spells out the NULL case so unlabeled cards are never hidden', () => {
    const where = servedFlashcardWhere(false)
    // `examYield: { not: 'LOW' }` drops NULL rows in SQL. This shape is the
    // one that keeps every non-MCAT card visible; do not "simplify" it.
    expect(where).toEqual({ OR: [{ examYield: null }, { examYield: { in: ['HIGH', 'MEDIUM'] } }] })
  })

  it('applies no filter at all when the student opts into low-yield cards', () => {
    expect(servedFlashcardWhere(true)).toEqual({})
    expect(servedProgressWhere(true)).toEqual({})
  })

  it('wraps the same rule one relation up for progress rows', () => {
    expect(servedProgressWhere(false)).toEqual({ flashcard: servedFlashcardWhere(false) })
  })

  it('serves everything when the kill switch is thrown', () => {
    process.env.FLASHCARD_HIDE_LOW_YIELD = '0'
    expect(lowYieldHiddenByDefault()).toBe(false)
    expect(servedFlashcardWhere(false)).toEqual({})
    expect(servedProgressWhere(false)).toEqual({})
  })
})

describe('yield ordering', () => {
  it('ranks HIGH first, unlabeled with MEDIUM, LOW last', () => {
    expect(yieldRank('HIGH')).toBe(0)
    expect(yieldRank('MEDIUM')).toBe(1)
    expect(yieldRank(null)).toBe(1)
    expect(yieldRank(undefined)).toBe(1)
    expect(yieldRank('LOW')).toBe(2)
  })

  it('is a total order with deterministic tiebreaks', () => {
    const t0 = new Date('2026-01-01')
    const t1 = new Date('2026-01-02')
    const cards = [
      { id: 'c', examYield: 'LOW' as const, createdAt: t0 },
      { id: 'b', examYield: null, createdAt: t1 },
      { id: 'a', examYield: null, createdAt: t0 },
      { id: 'd', examYield: 'HIGH' as const, createdAt: t1 },
    ]
    expect([...cards].sort(compareByYield).map((c) => c.id)).toEqual(['d', 'a', 'b', 'c'])
    // Same input, same output, whatever order Postgres handed it over in.
    expect([...cards].reverse().sort(compareByYield).map((c) => c.id)).toEqual(['d', 'a', 'b', 'c'])
  })
})
