import { describe, expect, it } from 'vitest'
import { pickVariant } from '@/lib/flashcard-check-core'

describe('pickVariant (which of a card\'s questions a check asks)', () => {
  it('asks the only question when a card has one', () => {
    expect(pickVariant(1, [], () => 0.9)).toBe(0)
    expect(pickVariant(1, [5], () => 0.9)).toBe(0)
  })
  it('asks a question the student has never seen before repeating one', () => {
    expect(pickVariant(3, [100, undefined, 50], () => 0)).toBe(1)
    const picks = new Set([0, 0.3, 0.6, 0.99, 1].map((r) => pickVariant(7, [10, undefined, 20, undefined, undefined], () => r)))
    for (const p of picks) expect([1, 3, 4, 5, 6]).toContain(p)
    expect(picks.size).toBeGreaterThan(1)
  })
  it('once all are seen, repeats the one asked longest ago', () => {
    expect(pickVariant(3, [300, 100, 200], () => 0.5)).toBe(1)
    expect(pickVariant(3, [100, 300, 200], () => 0.5)).toBe(0)
  })
  it('goes through every question before any repeat', () => {
    const seen: (number | undefined)[] = []
    const order: number[] = []
    for (let t = 1; t <= 7; t++) { const v = pickVariant(7, seen, Math.random); order.push(v); seen[v] = t }
    expect(new Set(order).size).toBe(7)
    expect(pickVariant(7, seen, Math.random)).toBe(order[0])
  })
})
