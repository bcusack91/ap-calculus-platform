/**
 * The v3 conventions bank flows through every SAT surface, checked with a
 * controlled (mocked) bank so the test does not depend on the authored one:
 * v3 forms draw it (and v1/v2 never do), a reviewed attempt gets the bank's
 * question keys and per-option explanations, and the question bank serves it
 * while still skipping the v3 exclusions.
 */
import { describe, it, expect, vi } from 'vitest'

const bank = vi.hoisted(() => {
  const slugs = [
    'sat-grammar-usage',
    'sat-grammar-conventions',
    'sat-punctuation',
    'sat-punctuation-commas-semicolons',
    'sat-sentence-structure',
    'sat-pronoun-agreement',
    'sat-subject-verb-agreement',
  ]
  const tiers = ['easy', 'medium', 'hard'] as const
  return Array.from({ length: 140 }, (_, i) => ({
    id: `sat-v3-conv-test-${i}`,
    question: `Test bank item ${i}: The survey team, after weeks in the field, ______ its findings to the council in item ${i}. Which choice completes the text so that it conforms to the conventions of Standard English?`,
    options: [`submitted ${i}`, `submitting ${i}`, `to submit ${i}`, `having submitted ${i}`],
    correctIndex: 0,
    explanation: `The subject needs a finite verb (${i}).`,
    optionExplanations: [`A is right ${i}`, `B is a participle ${i}`, `C is an infinitive ${i}`, `D is a participle phrase ${i}`],
    difficulty: tiers[i % 3],
    skill: i % 2 ? ('boundaries' as const) : ('form-structure-sense' as const),
    topicSlug: slugs[i % slugs.length],
  }))
})
vi.mock('@/data/sat-practice/v3-bank/conventions', () => ({ SAT_V3_CONVENTIONS: bank }))

import {
  buildPsatForm,
  buildSatForm,
  routedModule2,
  PRACTICE_FORM_COUNT,
  type SATFullTest,
  type SATTestQuestion,
} from '@/data/sat-practice/test-generator'
import { gradeSatPractice, storedSatAnswers } from '@/lib/sat-practice-grading'
import { satPracticeReviewItems } from '@/lib/question-sources/sat'
import { questionKey } from '@/lib/question-key'
import { buildSatPool } from '@/lib/qbank-pools'
import { generateExitQuiz } from '@/data/exit-quizzes'
import { SAT_FORM_V3_ADDED } from '@/data/sat-practice/form-v3-exclusions'

const bankById = new Map(bank.map((b) => [b.id, b]))
const bankIn = (f: SATFullTest) => f.sections.flatMap((s) => s.questions).filter((q) => bankById.has(q.id))

describe('SAT v3 conventions bank (controlled)', { timeout: 300_000 }, () => {
  it('v3 forms (full, mini, PSAT) draw bank items; v1 and v2 never do', async () => {
    let full = 0
    for (let n = 1; n <= PRACTICE_FORM_COUNT; n++) {
      full += bankIn(await buildSatForm(n, 'full', 'harder', 'easier')).length
      expect(bankIn(await buildSatForm(n, 'full', 'harder', 'easier', 2))).toHaveLength(0)
      expect(bankIn(await buildSatForm(n, 'full', 'harder', 'easier', 1))).toHaveLength(0)
    }
    expect(full).toBeGreaterThan(0)
    let other = 0
    for (let n = 1; n <= PRACTICE_FORM_COUNT; n++) other += bankIn(await buildSatForm(n, 'mini')).length
    for (let n = 1; n <= 3; n++) other += bankIn(await buildPsatForm(n, 'easier', 'harder')).length
    expect(other).toBeGreaterThan(0)
    for (const q of bankIn(await buildSatForm(1, 'full', 'harder', 'harder'))) {
      const b = bankById.get(q.id)!
      expect(q).toMatchObject({ section: 'reading-writing', domain: 'conventions', sourceSlug: b.topicSlug, difficulty: b.difficulty })
    }
  })

  it('a reviewed v3 attempt gives bank items their key, topic and per-option explanations', async () => {
    // Find a form whose served modules hold a bank item.
    let form: SATFullTest | null = null
    let testNumber = 0
    for (let n = 1; n <= PRACTICE_FORM_COUNT && !form; n++) {
      const f = await buildSatForm(n, 'full')
      if (bankIn(f).length) {
        form = f
        testNumber = n
      }
    }
    expect(form).not.toBeNull()
    const base = form!
    const rw2 = await routedModule2(base, 1, 'easier')
    const responses = [base.sections[0], rw2, base.sections[2], base.sections[3]].flatMap((s, moduleIndex) =>
      s.questions.map((q: SATTestQuestion) => ({
        moduleIndex,
        questionId: q.id,
        selectedIndex: q.gridIn ? null : 1,
        textValue: null,
        flagged: false,
        seconds: 20,
      })),
    )
    const grade = await gradeSatPractice({ testNumber, format: 'full', responses })
    expect(grade.formVersion).toBe(3)
    expect(grade.rw.tier).toBe('easier')
    const items = await satPracticeReviewItems({
      testNumber,
      format: 'full',
      rwTier: grade.rw.tier,
      mathTier: grade.math.tier,
      scoringVersion: 4,
      answers: JSON.parse(JSON.stringify(storedSatAnswers(grade.items))),
    })
    expect(items).toHaveLength(98)
    const served = grade.items.map((g) => g.question)
    let checked = 0
    items.forEach((it, i) => {
      const b = bankById.get(served[i].id)
      if (!b) return
      checked++
      expect(it.questionKey).toBe(questionKey({ question: b.question, options: b.options, correctIndex: b.correctIndex, passageId: null }))
      expect(it.optionExplanations).toEqual(b.optionExplanations)
      expect(it.topicSlug).toBe(b.topicSlug)
      expect(it.discipline).toBe('Standard English Conventions')
      expect(it.chosenIndex).toBe(1)
    })
    expect(checked).toBeGreaterThan(0)
  })

  it('the SAT question bank serves the bank items and skips the v3 exclusions', async () => {
    const pool = await buildSatPool()
    const served = new Map(pool.units.flatMap((u) => u.items.map((i) => [i.questionKey, i] as const)))
    for (const b of bank) {
      const item = served.get(questionKey({ question: b.question, options: b.options, correctIndex: b.correctIndex }))
      expect(item, b.id).toBeDefined()
      expect(item).toMatchObject({ section: 'reading-writing', discipline: 'Standard English Conventions', difficulty: b.difficulty, passageId: null })
    }
    const addedKeys: string[] = []
    const slugs = new Set([...SAT_FORM_V3_ADDED].map((id) => id.split('#')[0]))
    for (const slug of slugs) {
      for (const q of await generateExitQuiz(slug, 400, undefined, 20260915)) {
        if (q.id && SAT_FORM_V3_ADDED.has(q.id)) addedKeys.push(questionKey({ question: q.question, options: q.options, correctIndex: q.correctIndex }))
      }
    }
    expect(addedKeys.length).toBe(SAT_FORM_V3_ADDED.size)
    expect(addedKeys.filter((k) => served.has(k))).toEqual([])
  })
})
