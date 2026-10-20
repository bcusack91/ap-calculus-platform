/**
 * Keeps the committed exam-yield labels honest in CI: every in-scope card
 * (the MCAT deck and the four flagship AP decks) in the export mirror is
 * labeled exactly once, no entry labels a card that does not exist, and only
 * known values appear. A newly imported card in a yield course should fail
 * here until someone labels it.
 */
import { describe, it, expect } from 'vitest'
import {
  YIELD_COURSES,
  checkArtifacts,
  fingerprint,
  loadArtifacts,
  loadCourseExport,
  loadScopedExport,
} from '@/lib/flashcard-yield-artifact'

/** Deck sizes in the committed export mirror (topics, cards). */
const EXPECTED: Record<string, { topics: number; cards: number }> = {
  'mcat-prep': { topics: 102, cards: 5169 },
  'ap-chemistry': { topics: 41, cards: 316 },
  'ap-biology': { topics: 30, cards: 187 },
  'ap-physics-1': { topics: 28, cards: 261 },
  'ap-calculus-ab': { topics: 67, cards: 408 },
}

describe('exam-yield artifact integrity', () => {
  const exportByTopic = loadScopedExport()
  const artifacts = loadArtifacts()
  const result = checkArtifacts(exportByTopic, artifacts)

  it('scopes exactly the MCAT deck and the four flagship AP decks', () => {
    expect([...YIELD_COURSES].sort()).toEqual(Object.keys(EXPECTED).sort())
  })

  for (const [course, want] of Object.entries(EXPECTED)) {
    it(`covers the whole ${course} deck: ${want.topics} topics, ${want.cards} cards`, () => {
      const deck = loadCourseExport(course)
      expect(deck.size).toBe(want.topics)
      expect([...deck.values()].reduce((n, cards) => n + cards.length, 0)).toBe(want.cards)
    })
  }

  it('labels every in-scope card exactly once with a valid value', () => {
    expect(result.errors).toEqual([])
    expect(result.totals.labeled).toBe(result.totals.cards)
  })

  for (const course of Object.keys(EXPECTED)) {
    it(`leaves the ${course} LOW share where a trim, not a purge, would put it`, () => {
      // A batch that hides most of a deck is far more likely mis-calibrated than
      // right. Widen deliberately if the owner decides on a deeper cut. AP decks
      // were already trimmed to the CED, so their bar is lower than the MCAT's.
      const topics = loadCourseExport(course)
      const report = result.perTopic.filter((r) => topics.has(r.topic))
      const labeled = report.reduce((n, r) => n + r.labeled, 0)
      const low = report.reduce((n, r) => n + r.counts.LOW, 0)
      expect(labeled).toBeGreaterThan(0)
      expect(low / labeled).toBeLessThan(course === 'mcat-prep' ? 0.45 : 0.2)
    })
  }
})

describe('the fingerprint that identifies a card', () => {
  it('changes when either side of the card changes', () => {
    const base = fingerprint('What is X?', 'X is Y.')
    expect(fingerprint('What is X?', 'X is Z.')).not.toBe(base)
    expect(fingerprint('What is X!', 'X is Y.')).not.toBe(base)
    expect(fingerprint('What is X?', 'X is Y.')).toBe(base)
  })
})
