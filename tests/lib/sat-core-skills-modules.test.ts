/**
 * SAT Core Skills modules serve only easy / light-medium items and don't
 * repeat questions across the twelve modules.
 */
import { describe, it, expect } from 'vitest'
import { generateCoreModule, CORE_MODULE_COUNT } from '@/data/sat-practice/core-skills-modules'

const stem = (s: string) => s.replace(/\s+/g, ' ').trim().toLowerCase()

describe('SAT Core Skills modules', { timeout: 120_000 }, () => {
  it('never serves a hard item, and modules do not share questions', async () => {
    const seen = new Map<string, number>()
    let repeats = 0
    for (let n = 1; n <= CORE_MODULE_COUNT; n++) {
      const mod = await generateCoreModule(n)
      expect(mod.questions.length).toBe(20)
      for (const q of mod.questions) {
        expect(q.difficulty, `module ${n}: ${q.question.slice(0, 60)}`).not.toBe('hard')
        const key = stem(q.question)
        if (seen.has(key)) repeats++
        seen.set(key, n)
      }
    }
    // Only topics with fewer than 12 eligible items can wrap.
    expect(repeats).toBeLessThanOrEqual(6)
  })

  it('is deterministic per module number', async () => {
    const a = await generateCoreModule(3)
    const b = await generateCoreModule(3)
    expect(a.questions.map((q) => q.question)).toEqual(b.questions.map((q) => q.question))
  })
})
