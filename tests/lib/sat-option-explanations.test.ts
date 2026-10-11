/**
 * Per-option explanations on SAT/PSAT review items: authored in the bank's
 * ORIGINAL option order, served in the order the student SAW. Passage options
 * are shuffled by the form builder (seeded per question id), so the review
 * item must carry the explanations through that same permutation.
 */
import { describe, it, expect, vi } from 'vitest'

vi.mock('@/data/sat-passages', () => {
  const options = ['The first claim', 'The second claim', 'The third claim', 'The fourth claim']
  const question = (n: number) => ({
    question: `Which choice best states the main idea? (${n})`,
    options,
    correctAnswer: 2,
    explanation: 'Because.',
    skill: 'central-ideas',
    optionExplanations: options.map((o) => `why: ${o}`),
  })
  return {
    SAT_PASSAGES: [
      { id: 'fake-p1', title: 'Fake passage', genre: 'science', text: 'Some text.', questions: [question(1), question(2)] },
    ],
  }
})

import { buildSatForm, buildPsatForm, type SATTestQuestion } from '@/data/sat-practice/test-generator'
import { satDiagnosticReviewItems, satOptionExplanations } from '@/lib/question-sources/sat'

const aligned = (q: { options: string[] }, exps: string[] | undefined) => {
  expect(exps).toBeDefined()
  expect(exps).toEqual(q.options.map((o) => `why: ${o}`))
}

describe('satOptionExplanations', { timeout: 180_000 }, () => {
  it('remaps a passage question built into a form through the seeded option shuffle', async () => {
    for (const form of [await buildSatForm(1, 'full'), await buildPsatForm(1)]) {
      const served = form.sections.flatMap((s) => s.questions).filter((q) => q.passage?.id === 'fake-p1')
      expect(served.length).toBeGreaterThan(0)
      for (const q of served) {
        aligned(q, satOptionExplanations(q))
        // The correct answer's explanation sits at the shown correct index.
        expect(satOptionExplanations(q)![q.correctIndex]).toBe('why: The third claim')
      }
    }
  })

  it('remaps a hand-shuffled passage question and passes pool items through', () => {
    const shown = ['The fourth claim', 'The third claim', 'The first claim', 'The second claim']
    const passageQ: SATTestQuestion = {
      id: 'sat-passage-fake-p1-q1', question: 'x', options: shown, correctIndex: 1, explanation: '',
      category: 'passage-science', section: 'reading-writing', sourceSlug: 'passage-science',
      passage: { id: 'fake-p1', title: '', genre: 'science', text: '' },
    }
    aligned(passageQ, satOptionExplanations(passageQ))

    const pool = {
      id: 'q1', question: 'y', options: ['a', 'b', 'c', 'd'], correctIndex: 0, explanation: '',
      category: 'c', section: 'math', sourceSlug: 'sat-functions', optionExplanations: ['A!', 'B!', 'C!', 'D!'],
    } as SATTestQuestion & { optionExplanations: string[] }
    expect(satOptionExplanations(pool)).toEqual(['A!', 'B!', 'C!', 'D!'])
    // Wrong length, absent, or a grid-in: nothing (a misaligned list is worse than none).
    expect(satOptionExplanations({ ...pool, optionExplanations: ['A!'] } as SATTestQuestion)).toBeUndefined()
    expect(satOptionExplanations({ ...pool, optionExplanations: undefined } as SATTestQuestion)).toBeUndefined()
    expect(satOptionExplanations({ ...pool, options: [], gridIn: { correctAnswer: 1, acceptableAnswers: [1], tolerance: 0 } } as SATTestQuestion)).toBeUndefined()
  })

  it('adds explanations to diagnostic review items (stored pool copy, or the passage bank by text)', () => {
    const items = satDiagnosticReviewItems({
      review: {
        questions: [
          { question: 'Which choice best states the main idea? (2)', options: ['The second claim', 'The first claim', 'The fourth claim', 'The third claim'], correctIndex: 3, passageId: 'fake-p1', passage: 'Some text.' },
          { question: 'Solve.', options: ['1', '2', '3', '4'], correctIndex: 1, optionExplanations: ['no', 'yes', 'no', 'no'] },
          { question: 'Unexplained.', options: ['1', '2', '3', '4'], correctIndex: 0 },
        ],
        answers: [0, 1, 2],
      },
    })
    aligned(items[0], items[0].optionExplanations)
    expect(items[1].optionExplanations).toEqual(['no', 'yes', 'no', 'no'])
    expect(items[2].optionExplanations).toBeUndefined()
  })
})
