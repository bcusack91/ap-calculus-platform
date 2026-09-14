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

const DOMAIN_COUNTS: Record<string, number> = {
  'gen-chem': 3,
  'org-chem': 3,
  physics: 3,
  'biochem-cp': 2,
  cars: 11,
  'cell-mol-bio': 4,
  'organ-systems': 4,
  genetics: 3,
  'psych-soc': 12,
}
/** Questions served per passage block (the domain's passage window). */
const PASSAGE_WINDOW: Record<string, number> = { cars: 4, physics: 2, 'cell-mol-bio': 2, 'psych-soc': 4 }

const stem = (q: MCATDiagnosticQuestion) => q.question.replace(/\s+/g, ' ').trim().toLowerCase()

describe('generateMCATDiagnosticTest', { timeout: 120_000 }, () => {
  it('keeps passages in consecutive, complete, authored-order blocks with no duplicate questions', async () => {
    const seen = new Set<string>()
    // 15 back-to-back attempts: past ~6 the unseen pools run dry, which is
    // where partial passages and short tests used to appear.
    for (let attempt = 0; attempt < 15; attempt++) {
      const test = await generateMCATDiagnosticTest({ excludeQuestionIds: new Set(seen) })
      const qs = test.questions

      expect(qs).toHaveLength(45)
      const counts: Record<string, number> = {}
      for (const q of qs) counts[q.domain] = (counts[q.domain] ?? 0) + 1
      expect(counts).toEqual(DOMAIN_COUNTS)

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
        expect(block.length, `passage ${passageId} size`).toBe(PASSAGE_WINDOW[block[0].domain])
      }

      const standaloneStems = qs.filter((q) => !q.passage).map(stem)
      expect(new Set(standaloneStems).size, 'duplicate standalone question text').toBe(standaloneStems.length)

      for (const q of qs) seen.add(q.id)
    }
  })
})
