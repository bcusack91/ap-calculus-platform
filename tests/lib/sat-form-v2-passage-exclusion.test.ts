/**
 * Form v2 exclusions with a controlled list: excluding ONE question of a
 * passage keeps the whole passage off v2 forms (passages are drawn whole),
 * excluded pool items never appear, every module still fills, and v1 ignores
 * the list entirely.
 */
import { describe, it, expect, vi } from 'vitest'

const excluded = vi.hoisted(() => new Set<string>())
vi.mock('@/data/sat-practice/form-v2-exclusions', () => ({ SAT_FORM_V2_EXCLUDED: excluded }))

import {
  buildPsatForm,
  buildSatForm,
  generateFullTest,
  generatePsatFullTest,
  type SATFullTest,
} from '@/data/sat-practice/test-generator'
import { SAT_PASSAGES } from '@/data/sat-passages'

const all = (f: SATFullTest) => f.sections.flatMap((s) => s.questions)
const ids = (f: SATFullTest) => all(f).map((q) => q.id)

describe('SAT form v2 exclusions (controlled list)', { timeout: 180_000 }, () => {
  it('drops whole passages and excluded items from v2, and leaves v1 alone', async () => {
    const v1Sat = await generateFullTest(1, 1)
    const v1Psat = await generatePsatFullTest(2, 1)
    // Exclude the LAST question of every passage served on these v1 forms, and
    // every pool item on their first R&W and Math modules.
    const passageIds = new Set([...all(v1Sat), ...all(v1Psat)].flatMap((q) => (q.passage ? [q.passage.id] : [])))
    expect(passageIds.size).toBeGreaterThan(0)
    for (const pid of passageIds) {
      const p = SAT_PASSAGES.find((x) => x.id === pid)!
      excluded.add(`sat-passage-${pid}-q${p.questions.length - 1}`)
    }
    const poolIds = [...v1Sat.sections[0].questions, ...v1Sat.sections[2].questions]
      .filter((q) => !q.passage && !q.gridIn)
      .map((q) => q.id)
    for (const id of poolIds) excluded.add(id)

    // Built at v2 explicitly: v3's list is the v2 list captured at import, plus its own.
    for (const f of [await buildSatForm(1, 'full', 'harder', 'easier', 2), await buildSatForm(1, 'mini', null, null, 2), await buildPsatForm(2, 'easier', 'harder', 2)]) {
      expect(f.formVersion).toBe(2)
      for (const q of all(f)) {
        expect(excluded.has(q.id), q.id).toBe(false)
        if (q.passage) expect(passageIds.has(q.passage.id), q.passage.id).toBe(false)
      }
      for (const s of f.sections) {
        expect(s.questions).toHaveLength(s.questionCount)
        if (s.section === 'reading-writing') expect(s.questions.some((q) => q.passage)).toBe(true)
      }
    }

    // v1 ignores the list: an uncached rebuild is identical.
    expect(ids(await generateFullTest(1, 1))).toEqual(ids(v1Sat))
    expect(ids(await generatePsatFullTest(2, 1))).toEqual(ids(v1Psat))
  })
})
