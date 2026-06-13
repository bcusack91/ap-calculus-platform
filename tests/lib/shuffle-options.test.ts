import { describe, it, expect } from 'vitest'
import { shuffleOptions } from '@/lib/shuffle-options'

describe('shuffleOptions', () => {
  it('returns the input unchanged when there is a single option', () => {
    const result = shuffleOptions(['only'], 0, 'seed-1')
    expect(result.options).toEqual(['only'])
    expect(result.correctIndex).toBe(0)
  })

  it('returns the input unchanged when there are zero options', () => {
    const result = shuffleOptions([], 0, 'seed-1')
    expect(result.options).toEqual([])
    expect(result.correctIndex).toBe(0)
  })

  it('preserves the multiset of options (permutation, no loss/dup)', () => {
    const opts = ['A', 'B', 'C', 'D']
    const result = shuffleOptions(opts, 1, 'question-42')
    expect([...result.options].sort()).toEqual([...opts].sort())
    expect(result.options).toHaveLength(4)
  })

  it('keeps correctIndex pointing at the originally-correct option after shuffle', () => {
    const opts = ['A', 'B', 'C', 'D']
    const correctIndex = 2 // 'C' is correct
    const result = shuffleOptions(opts, correctIndex, 'q-stable')
    expect(result.options[result.correctIndex]).toBe('C')
  })

  it('is deterministic for the same seed', () => {
    const opts = ['w', 'x', 'y', 'z']
    const a = shuffleOptions(opts, 0, 'same-seed')
    const b = shuffleOptions(opts, 0, 'same-seed')
    expect(a.options).toEqual(b.options)
    expect(a.correctIndex).toBe(b.correctIndex)
  })

  it('produces different orderings for sufficiently different seeds', () => {
    const opts = ['a', 'b', 'c', 'd', 'e', 'f']
    const a = shuffleOptions(opts, 0, 'seed-AAAA')
    const b = shuffleOptions(opts, 0, 'seed-ZZZZ')
    // Not a strict guarantee for all inputs, but these two seeds differ here.
    expect(a.options).not.toEqual(b.options)
  })

  it('correctIndex stays valid (within bounds) and resolves to the right value across many seeds', () => {
    const opts = ['p', 'q', 'r', 'd']
    const correct = 3
    for (let s = 0; s < 50; s++) {
      const result = shuffleOptions(opts, correct, `seed-${s}`)
      expect(result.correctIndex).toBeGreaterThanOrEqual(0)
      expect(result.correctIndex).toBeLessThan(opts.length)
      expect(result.options[result.correctIndex]).toBe('d')
    }
  })

  it('distributes the correct-answer position across multiple positions (not always index 0)', () => {
    const opts = ['A', 'B', 'C', 'D']
    const positions = new Set<number>()
    for (let s = 0; s < 100; s++) {
      positions.add(shuffleOptions(opts, 0, `dist-${s}`).correctIndex)
    }
    // A good shuffle should land the correct answer in more than one slot.
    expect(positions.size).toBeGreaterThan(1)
  })

  it('handles duplicate option strings without losing the correct slot identity', () => {
    // Note: indexOf finds the FIRST matching value; with duplicates the returned
    // correctIndex points at the first occurrence of the correct VALUE.
    const opts = ['same', 'same', 'unique', 'other']
    const result = shuffleOptions(opts, 2, 'dup-seed')
    expect(result.options[result.correctIndex]).toBe('unique')
  })
})
