/**
 * Structural guarantees of the generated MCAT diagnostic:
 * - each passage's questions form ONE consecutive block, in authored order,
 *   and are served whole (never a partial passage)
 * - the same standalone question text never appears twice in a test
 * - section/domain question counts are unchanged
 * Generation is random, so several tests are generated and each is checked.
 */
import { describe, it, expect } from 'vitest'
import { generateMCATDiagnosticTest, type MCATDiagnosticQuestion } from '@/data/mcat-practice/diagnostic-generator'
import { authoredQuestionIndex } from '@/lib/mcat-diagnostic-order'

// Passage sets are chosen per section and credited to domains by discipline,
// so per-domain counts vary; section totals and block shapes are fixed.
const SECTION_OF: Record<string, string> = {
  'gen-chem': 'chem-phys',
  'org-chem': 'chem-phys',
  physics: 'chem-phys',
  'biochem-cp': 'chem-phys',
  cars: 'cars',
  'cell-mol-bio': 'bio-biochem',
  'organ-systems': 'bio-biochem',
  genetics: 'bio-biochem',
  'psych-soc': 'psych-soc',
}
const SECTION_COUNTS: Record<string, number> = { 'chem-phys': 11, cars: 12, 'bio-biochem': 11, 'psych-soc': 11 }
/** Passage sets per section and questions per set. */
const SECTION_BLOCKS: Record<string, { sets: number; size: number }> = {
  'chem-phys': { sets: 2, size: 3 },
  cars: { sets: 3, size: 4 },
  'bio-biochem': { sets: 2, size: 3 },
  'psych-soc': { sets: 2, size: 3 },
}

const stem = (q: MCATDiagnosticQuestion) => q.question.replace(/\s+/g, ' ').trim().toLowerCase()

describe('generateMCATDiagnosticTest', { timeout: 120_000 }, () => {
  it('keeps passages in consecutive, complete, authored-order blocks with no duplicate questions', async () => {
    const seen = new Set<string>()
    const seenStems = new Set<string>()
    const seenPassages = new Set<string>()
    // 15 back-to-back attempts: past ~6 the unseen pools run dry, which is
    // where partial passages and short tests used to appear.
    for (let attempt = 0; attempt < 15; attempt++) {
      const test = await generateMCATDiagnosticTest({ excludeQuestionIds: new Set(seen) })
      const qs = test.questions

      expect(qs).toHaveLength(45)
      const sectionCounts: Record<string, number> = {}
      const domainCounts: Record<string, number> = {}
      for (const q of qs) {
        sectionCounts[SECTION_OF[q.domain]] = (sectionCounts[SECTION_OF[q.domain]] ?? 0) + 1
        domainCounts[q.domain] = (domainCounts[q.domain] ?? 0) + 1
      }
      expect(sectionCounts).toEqual(SECTION_COUNTS)
      // Every content area is still measured.
      for (const domain of Object.keys(SECTION_OF)) expect(domainCounts[domain] ?? 0, `${domain} count`).toBeGreaterThanOrEqual(1)

      const positions = new Map<string, number[]>()
      qs.forEach((q, i) => {
        if (!q.passage) return
        const p = positions.get(q.passage.id) ?? []
        p.push(i)
        positions.set(q.passage.id, p)
      })
      for (const [passageId, p] of positions) {
        // Consecutive block.
        expect(p[p.length - 1] - p[0], `passage ${passageId} at ${p.map((i) => i + 1)}`).toBe(p.length - 1)
        const block = p.map((i) => qs[i])
        // Authored order.
        const order = block.map((q) => authoredQuestionIndex(q.id))
        expect(order).toEqual([...order].sort((a, b) => a - b))
        // Complete window, not a partial passage.
        expect(block.length, `passage ${passageId} size`).toBe(SECTION_BLOCKS[SECTION_OF[block[0].domain]].size)
      }
      const setsPerSection: Record<string, number> = {}
      for (const p of positions.values()) {
        const section = SECTION_OF[qs[p[0]].domain]
        setsPerSection[section] = (setsPerSection[section] ?? 0) + 1
      }
      for (const [section, { sets }] of Object.entries(SECTION_BLOCKS)) {
        expect(setsPerSection[section] ?? 0, `${section} passage sets`).toBe(sets)
      }

      const standaloneStems = qs.filter((q) => !q.passage).map(stem)
      expect(new Set(standaloneStems).size, 'duplicate standalone question text').toBe(standaloneStems.length)

      // No question repeats across 15 back-to-back attempts, by id or by
      // standalone question text.
      const repeatedIds = qs.filter((q) => seen.has(q.id)).map((q) => q.id)
      expect(repeatedIds, `attempt ${attempt + 1} repeated questions`).toEqual([])
      const repeatedStems = qs.filter((q) => !q.passage && seenStems.has(stem(q))).map((q) => q.id)
      expect(repeatedStems, `attempt ${attempt + 1} repeated question text`).toEqual([])

      // Nor does a passage: re-serving a seen passage with its next window of
      // questions still repeats the passage text.
      const repeatedPassages = [...positions.keys()].filter((id) => seenPassages.has(id))
      expect(repeatedPassages, `attempt ${attempt + 1} repeated passages`).toEqual([])

      for (const q of qs) {
        seen.add(q.id)
        if (!q.passage) seenStems.add(stem(q))
        else seenPassages.add(q.passage.id)
      }
    }
  })
})
