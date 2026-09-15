/**
 * SAT full-length practice tests: fixed forms built to the College Board
 * blueprint, with passage sets kept together and no repeats within a test.
 */
import { describe, it, expect } from 'vitest'
import {
  generateFullTest,
  regenerateModule2,
  PRACTICE_FORM_COUNT,
  type SATFullTest,
} from '@/data/sat-practice/test-generator'

const stem = (s: string) => s.replace(/\s+/g, ' ').trim().toLowerCase()
/** Passage prompts are generic, so a passage question is passage + prompt. */
const qKey = (q: { question: string; passage?: { id: string } }) => `${q.passage?.id ?? ''}|${stem(q.question)}`

function domainCounts(questions: { domain?: string }[]) {
  const out: Record<string, number> = {}
  for (const q of questions) out[q.domain ?? '?'] = (out[q.domain ?? '?'] ?? 0) + 1
  return out
}

function passageSetsConsecutive(questions: { passage?: { id: string } }[]) {
  const positions = new Map<string, number[]>()
  questions.forEach((q, i) => {
    if (q.passage) positions.set(q.passage.id, [...(positions.get(q.passage.id) ?? []), i])
  })
  return [...positions.values()].every((p) => p[p.length - 1] - p[0] === p.length - 1)
}

describe('SAT full-length practice tests', { timeout: 120_000 }, () => {
  const forms: SATFullTest[] = []

  it('builds every form to the blueprint', async () => {
    for (let n = 1; n <= PRACTICE_FORM_COUNT; n++) {
      const test = await generateFullTest(n)
      forms.push(test)
      expect(test.totalQuestions).toBe(98)
      expect(test.totalTimeSeconds).toBe(134 * 60)
      const [rw1, rw2, m1, m2] = test.sections
      for (const rw of [rw1, rw2]) {
        expect(rw.questions).toHaveLength(27)
        expect(domainCounts(rw.questions)).toEqual({
          'craft-structure': 8,
          'information-ideas': 7,
          conventions: 7,
          expression: 5,
        })
        expect(passageSetsConsecutive(rw.questions)).toBe(true)
      }
      for (const math of [m1, m2]) {
        expect(math.questions).toHaveLength(22)
        expect(domainCounts(math.questions)).toEqual({ algebra: 8, advanced: 8, 'problem-solving': 3, geometry: 3 })
        expect(math.questions.filter((q) => q.gridIn)).toHaveLength(6)
      }
      const keys = test.sections.flatMap((s) => s.questions.map(qKey))
      expect(new Set(keys).size).toBe(keys.length)
    }
  })

  it('is a fixed form: the same test number yields the same questions', async () => {
    const again = await generateFullTest(1)
    const ids = (t: SATFullTest) => t.sections.flatMap((s) => s.questions.map((q) => stem(q.question)))
    expect(ids(again)).toEqual(ids(forms[0]))
  })

  it('keeps forms mostly disjoint (a thin pool may borrow a few items)', () => {
    const nonGrid = (t: SATFullTest) =>
      new Set(t.sections.flatMap((s) => s.questions.filter((q) => !q.gridIn).map((q) => stem(q.question))))
    for (let a = 0; a < forms.length; a++) {
      for (let b = a + 1; b < forms.length; b++) {
        const shared = [...nonGrid(forms[a])].filter((x) => nonGrid(forms[b]).has(x)).length
        expect(shared, `forms ${a + 1} and ${b + 1}`).toBeLessThanOrEqual(12)
      }
    }
  })

  it('rebuilds Module 2 at a tier without reusing passages or questions from the test', async () => {
    const test = forms[0]
    for (const idx of [1, 3]) {
      const used = new Set(test.sections.flatMap((s) => s.questions.map((q) => q.question)))
      const otherPassages = new Set(
        test.sections
          .filter((_, i) => i !== idx)
          .flatMap((s) => s.questions.filter((q) => q.passage).map((q) => q.passage!.id)),
      )
      const rebuilt = await regenerateModule2(test.sections[idx], 'hard', used, otherPassages, test.testNumber)
      expect(rebuilt.questions).toHaveLength(test.sections[idx].questionCount)
      for (const q of rebuilt.questions) {
        if (q.passage) expect(otherPassages.has(q.passage.id)).toBe(false)
        const elsewhere = test.sections
          .filter((_, i) => i !== idx)
          .some((s) => s.questions.some((x) => qKey(x) === qKey(q)))
        expect(elsewhere).toBe(false)
      }
      if (rebuilt.section === 'reading-writing') expect(passageSetsConsecutive(rebuilt.questions)).toBe(true)
    }
  })
})
