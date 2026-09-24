/**
 * Keeps the committed exam-yield labels honest in CI: every in-scope MCAT card
 * in the export mirror is labeled exactly once, no entry labels a card that
 * does not exist, and only known values appear. A newly imported MCAT card
 * should fail here until someone labels it.
 */
import { describe, it, expect } from 'vitest'
import { checkArtifacts, loadArtifacts, loadScopedExport, fingerprint } from '@/lib/flashcard-yield-artifact'

describe('exam-yield artifact integrity', () => {
  const exportByTopic = loadScopedExport()
  const result = checkArtifacts(exportByTopic, loadArtifacts())

  it('covers the whole MCAT deck: 102 topics, 5,169 cards', () => {
    expect(exportByTopic.size).toBe(102)
    expect(result.totals.cards).toBe(5169)
  })

  it('labels every in-scope card exactly once with a valid value', () => {
    expect(result.errors).toEqual([])
    expect(result.totals.labeled).toBe(result.totals.cards)
  })

  it('leaves the LOW share where a trim, not a purge, would put it', () => {
    // A batch that hides most of a deck is far more likely mis-calibrated than
    // right. Widen deliberately if the owner decides on a deeper cut.
    const low = result.totals.counts.LOW / Math.max(result.totals.labeled, 1)
    expect(low).toBeLessThan(0.45)
  })
})

describe('the fingerprint that identifies a card', () => {
  it('changes when either side of the card changes', () => {
    const base = fingerprint('What is X?', 'X is Y.')
    expect(fingerprint('What is X?', 'X is Z.')).not.toBe(base)
    expect(fingerprint('What is X!', 'X is Y.')).not.toBe(base)
    expect(fingerprint('What is X?', 'X is Y.')).toBe(base)
  })
})
