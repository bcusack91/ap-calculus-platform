/**
 * MCAT section practice tests mirror the real exam's format: mostly whole
 * passage sets with discretes filling the remainder, and CARS all passages.
 */
import { describe, it, expect } from 'vitest'
import { MCAT_SECTIONS, generateSectionTest } from '@/data/mcat-practice/test-generator'

/** Minimum share of passage-based questions per section test. */
const MIN_PASSAGE_SHARE: Record<string, number> = {
  'gen-chem-comprehensive': 0.45,
  'organic-comprehensive': 0.45,
  'physics-comprehensive': 0.55,
  'biochem-comprehensive': 0.45,
  'chem-phys': 0.65,
  cars: 1,
  'bio-biochem': 0.65,
  'psych-soc': 0.65,
}

describe('MCAT section practice test composition', { timeout: 120_000 }, () => {
  for (const section of MCAT_SECTIONS) {
    it(`${section.id}: full count, consecutive whole passage sets, passage-heavy`, async () => {
      // Generation is random; repeat to catch packing combinations that fall short.
      for (let run = 0; run < 10; run++) {
        const test = await generateSectionTest(section.id)
        const qs = test.questions
        expect(qs).toHaveLength(section.questionCount)

        const positions = new Map<string, number[]>()
        qs.forEach((q, i) => {
          if (!q.passage) return
          const p = positions.get(q.passage.id) ?? []
          p.push(i)
          positions.set(q.passage.id, p)
        })
        for (const [id, p] of positions) {
          expect(p[p.length - 1] - p[0], `passage ${id} is consecutive`).toBe(p.length - 1)
        }

        const passageShare = qs.filter((q) => q.passage).length / qs.length
        expect(passageShare, `${section.id} passage share`).toBeGreaterThanOrEqual(MIN_PASSAGE_SHARE[section.id] ?? 0)
      }
    })
  }
})
