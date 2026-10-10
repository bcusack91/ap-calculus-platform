/**
 * Answer log (batch 1, part 1): every MCAT / exit / unit-test / diagnostic
 * surface writes one row per question with a stable questionKey, its position
 * in the attempt and the option picked — and the teacher totals stay what the
 * old batch rows said. Also pins the pure rebuild helpers the review page and
 * mistake log use (question-sources/mcat, question-sources/exit).
 */
import { describe, it, expect } from 'vitest'
import {
  diagnosticQuestionRows,
  mcatFullLengthQuestionRows,
  mcatFullLengthRows,
  mcatPracticeBatchRow,
  mcatPracticeRows,
  unitTestQuestionRows,
} from '@/lib/question-activity-rows'
import { questionKey, isQuestionKey } from '@/lib/question-key'
import { gradeUnitTest } from '@/lib/mcat-unit-test'
import { scoreMCAT } from '@/lib/mcat-scoring'
import { shuffleOptions } from '@/lib/shuffle-options'
import { generateExitQuiz } from '@/data/exit-quizzes'
import { FULL_LENGTH_FORMS } from '@/data/mcat/full-length'
import { fullLengthQuestionId, type MCATSection } from '@/data/mcat/types'
import { generateSectionTest, MCAT_SECTIONS } from '@/data/mcat-practice/test-generator'
import { resolveExitQuizItems } from '@/lib/exit-quiz-regrade'
import { exitReviewItems } from '@/lib/question-sources/exit'
import {
  buildFullLengthItems,
  fullLengthRawBySection,
  fullLengthReviewItems,
  mcatPracticeReviewItems,
  resolveMcatPracticeRefs,
  sanitizeFullLengthAnswers,
} from '@/lib/question-sources/mcat'

type Totals = Record<string, { answered: number; correct: number }>
function totalsBy(rows: { discipline?: string; answered?: number; correct?: number }[]): Totals {
  const out: Totals = {}
  for (const r of rows) {
    const t = (out[r.discipline ?? ''] ??= { answered: 0, correct: 0 })
    t.answered += r.answered ?? 1
    t.correct += r.correct ?? 0
  }
  return out
}

/** A deterministic pseudo-random answer pattern (some right, some wrong, some skipped). */
function pick(i: number, correct: number, n: number): number | undefined {
  const r = (i * 7919) % 10
  if (r < 5) return correct
  if (r < 8) return (correct + 1) % n
  return undefined
}

describe('diagnosticQuestionRows — answer-log fields', () => {
  const results = {
    review: {
      questions: [
        { id: 'm1', question: 'Which is a noble gas?', options: ['Ne', 'Na', 'Cl', 'O'], correctAnswer: 0, domain: 'gen-chem', sourceSlug: 'mcat-general-chemistry' },
        {
          id: 'm2',
          question: 'The author implies...',
          options: ['A', 'B', 'C', 'D'],
          correctAnswer: 2,
          domain: 'cars',
          sourceSlug: 'mcat-cars',
          passage: { id: 'authored-cars-hum-01', title: 'T', body: 'B' },
        },
        { id: 'm3', correctAnswer: 1, domain: 'cars', sourceSlug: 'mcat-cars' }, // legacy: no text stored
      ],
      answers: [0, 1, null],
    },
    domains: [
      { domainId: 'gen-chem', domainName: 'General Chemistry', correct: 1, total: 1 },
      { domainId: 'cars', domainName: 'CARS', correct: 0, total: 2 },
    ],
  }

  it('sets itemIndex, chosenIndex (null = skipped) and a questionKey() hash with the passage id', () => {
    const rows = diagnosticQuestionRows(results, { category: 'mcat-full-diagnostic', attemptKind: 'diagnostic', attemptId: 'd1' })
    expect(rows.map((r) => [r.itemIndex, r.chosenIndex, r.correct])).toEqual([[0, 0, 1], [1, 1, 0], [2, null, 0]])
    expect(rows[0].questionKey).toBe(questionKey({ question: 'Which is a noble gas?', options: ['Ne', 'Na', 'Cl', 'O'], correctIndex: 0 }))
    expect(rows[1].questionKey).toBe(questionKey({ question: 'The author implies...', options: ['A', 'B', 'C', 'D'], correctIndex: 2, passageId: 'authored-cars-hum-01' }))
    expect(rows.every((r) => r.attemptId === 'd1')).toBe(true)
  })

  it('tags attemptKind only on rows with a hashed key; a legacy row keeps its old key', () => {
    const rows = diagnosticQuestionRows(results, { category: 'mcat-full-diagnostic', attemptKind: 'diagnostic', attemptId: 'd1' })
    expect(rows.map((r) => r.attemptKind)).toEqual(['diagnostic', 'diagnostic', undefined])
    expect(rows[2].questionKey).toBe('m3')
  })

  it('without attempt options (other courses) the rows carry no attemptKind', () => {
    const rows = diagnosticQuestionRows(results, { category: 'x' })
    expect(rows.some((r) => r.attemptKind)).toBe(false)
    expect(isQuestionKey(rows[0].questionKey)).toBe(true)
  })
})

describe('unitTestQuestionRows', () => {
  const questions = [
    { question: 'Q1', options: ['a', 'b', 'c', 'd'], correctIndex: 2, topicSlug: 't1' },
    { question: 'Q2', options: ['a', 'b', 'c', 'd'], correctIndex: 0, topicSlug: 't1' },
    { question: 'Q3', options: ['a', 'b', 'c', 'd'], correctIndex: 3, topicSlug: 't2' },
  ]
  const answers = [2, 1, null]

  it('one UNIT_TEST row per question, totals equal gradeUnitTest', () => {
    const rows = unitTestQuestionRows(questions, answers, { courseSlug: 'mcat-prep', attemptId: 'ut1', timeSpentSeconds: 90 })
    const graded = gradeUnitTest(questions, answers)
    expect(rows).toHaveLength(3)
    expect(rows.reduce((n, r) => n + (r.correct ?? 0), 0)).toBe(graded.correct)
    expect(rows.map((r) => [r.source, r.attemptKind, r.attemptId, r.itemIndex, r.chosenIndex, r.topicSlug, r.courseSlug, r.durationMs])).toEqual([
      ['UNIT_TEST', 'unit-test', 'ut1', 0, 2, 't1', 'mcat-prep', 30_000],
      ['UNIT_TEST', 'unit-test', 'ut1', 1, 1, 't1', 'mcat-prep', 30_000],
      ['UNIT_TEST', 'unit-test', 'ut1', 2, null, 't2', 'mcat-prep', 30_000],
    ])
  })

  it('the key ignores option order, so a unit-test item matches the same exit-pool item', () => {
    const [row] = unitTestQuestionRows([{ question: 'Q1', options: ['c', 'a', 'd', 'b'], correctIndex: 0, topicSlug: 't1' }], [0], { courseSlug: 'sat-prep', attemptId: 'x' })
    expect(row.questionKey).toBe(questionKey({ question: 'Q1', options: ['a', 'b', 'c', 'd'], correctIndex: 2 }))
  })
})

describe('MCAT section practice — refs, rows, review', () => {
  it('per-question rows total exactly what the batch row counted', () => {
    const answers = [
      { questionIndex: 0, selected: 1, correct: 1, ref: 'r0' },
      { questionIndex: 1, selected: 0, correct: 2, ref: 'r1' },
      { questionIndex: 2, selected: null, correct: 0 },
    ]
    const a = { sectionId: 'cars', sectionName: 'CARS', correct: 3, total: 3, timeSpent: 600, answers }
    const resolved = [
      { correctIndex: 1, questionKey: 'q:aaaaaaaaaaaaaaaa', topicSlug: 'mcat-cars-strategy-mcat' },
      { correctIndex: 2, questionKey: 'q:bbbbbbbbbbbbbbbb' },
      null, // no ref → graded from the stored key, kept out of the answer log
    ]
    const rows = mcatPracticeRows(a, resolved, { attemptId: 'p1' })
    const batch = mcatPracticeBatchRow(a)
    expect(totalsBy(rows)).toEqual({ CARS: { answered: batch.answered, correct: batch.correct } })
    expect(rows.map((r) => [r.attemptKind, r.attemptId, r.itemIndex, r.chosenIndex, r.questionKey])).toEqual([
      ['mcat-practice', 'p1', 0, 1, 'q:aaaaaaaaaaaaaaaa'],
      ['mcat-practice', 'p1', 1, 0, 'q:bbbbbbbbbbbbbbbb'],
      [undefined, 'p1', 2, null, 'mcat-practice:cars:2'],
    ])
    expect(rows.reduce((n, r) => n + (r.durationMs ?? 0), 0)).toBe(600_000)
  })

  it('an old client without a per-question key still gets the batch row', () => {
    const rows = mcatPracticeRows({ sectionId: 'cars', sectionName: 'CARS', correct: 2, total: 5, answers: [] }, [])
    expect(rows).toEqual([expect.objectContaining({ answered: 5, correct: 2, questionKey: 'mcat-practice:cars' })])
  })

  it.each(MCAT_SECTIONS.map((s) => s.id))(
    '%s: every generated question carries a ref that re-resolves to what was shown',
    async (sectionId) => {
      const test = await generateSectionTest(sectionId)
      const refs = test.questions.map((q) => q.ref)
      expect(refs.every((r) => typeof r === 'string')).toBe(true)
      const resolved = await resolveMcatPracticeRefs(refs)
      test.questions.forEach((q, i) => {
        const item = resolved[i]
        expect(item, `${q.ref} did not resolve`).not.toBeNull()
        expect(item!.question).toBe(q.question)
        expect(item!.options).toEqual(q.options)
        expect(item!.correctIndex).toBe(q.correctAnswer)
        expect(isQuestionKey(item!.questionKey)).toBe(true)
        if (q.passage) expect(item!.passage?.id).toBe(q.passage.id)
      })

      // Submit the way the page does → rows total what the batch row said.
      const answers = test.questions.map((q, i) => ({ questionIndex: i, selected: pick(i, q.correctAnswer, q.options.length) ?? null, correct: q.correctAnswer, ref: q.ref }))
      const a = { sectionId, sectionName: test.section.name, timeSpent: 1200, answers }
      const rows = mcatPracticeRows(a, resolved, { attemptId: 'p1' })
      const batch = mcatPracticeBatchRow(a)
      expect(totalsBy(rows)).toEqual({ [test.section.name]: { answered: batch.answered, correct: batch.correct } })
      expect(rows.every((r) => r.attemptKind === 'mcat-practice')).toBe(true)

      // And the review rebuild shows the same items with the student's picks.
      const review = await mcatPracticeReviewItems(answers, { timeSpentSeconds: 1200 })
      review.forEach((it, i) => {
        expect(it?.question).toBe(test.questions[i].question)
        expect(it?.chosenIndex).toBe(answers[i].selected)
        expect(it?.questionKey).toBe(rows[i].questionKey)
      })
    },
  )

  it('malformed or unknown refs resolve to null', async () => {
    expect(await resolveMcatPracticeRefs(['', 'nope', 'mcatpsg:missing:0', 'pool:mcat-cars:does-not-exist', 42])).toEqual([null, null, null, null, null])
  })
})

describe('MCAT full-length — per-question grading, rows and rebuild', () => {
  const fl = FULL_LENGTH_FORMS[0]

  /** What the runner keys answers by: "p:q" (positional) and the stable id map it submits. */
  function sitting() {
    const positional: Record<string, number> = {}
    const byId: Record<string, number> = {}
    let i = 0
    fl.passages.forEach((p, pi) => p.questions.forEach((q, qi) => {
      const a = pick(i++, q.correctAnswer, q.options.length)
      if (a === undefined) return
      positional[`${pi}:${qi}`] = a
      byId[fullLengthQuestionId(p, q, qi)] = a
    }))
    return { positional, byId }
  }

  it('question ids are unique within a form and discretes keep their own id', () => {
    for (const form of FULL_LENGTH_FORMS) {
      const ids = form.passages.flatMap((p) => p.questions.map((q, qi) => fullLengthQuestionId(p, q, qi)))
      expect(new Set(ids).size).toBe(ids.length)
      const discretes = form.passages.filter((p) => p.id.includes('-discretes'))
      expect(discretes.length).toBeGreaterThan(0)
      expect(discretes.every((p) => p.questions.every((q) => typeof q.id === 'string' && q.id))).toBe(true)
    }
  })

  it('per-question rows match the batch rows section by section', () => {
    const { positional, byId } = sitting()
    // The runner's own (client) tally → the batch rows the route used to write.
    const raw: Record<MCATSection, { correct: number; total: number }> = {
      'chem-phys': { correct: 0, total: 0 }, cars: { correct: 0, total: 0 }, 'bio-biochem': { correct: 0, total: 0 }, 'psych-soc': { correct: 0, total: 0 },
    }
    fl.passages.forEach((p, pi) => p.questions.forEach((q, qi) => {
      raw[p.section].total++
      if (positional[`${pi}:${qi}`] === q.correctAnswer) raw[p.section].correct++
    }))
    const clientReport = scoreMCAT(raw)
    const batch = mcatFullLengthRows({ form: fl.form, sections: clientReport.sections })

    const items = buildFullLengthItems(fl, sanitizeFullLengthAnswers(fl, { answers: byId }))
    expect(scoreMCAT(fullLengthRawBySection(items))).toEqual(clientReport)
    const rows = mcatFullLengthQuestionRows(items, { attemptId: 'fl1' })
    expect(rows).toHaveLength(fl.questionCount)
    expect(totalsBy(rows)).toEqual(totalsBy(batch))
    expect(rows.every((r) => r.attemptKind === 'mcat-fl' && r.attemptId === 'fl1' && isQuestionKey(r.questionKey))).toBe(true)
    expect(rows.map((r) => r.itemIndex)).toEqual(rows.map((_, i) => i))
  })

  it('sanitizes hostile input: unknown ids, out-of-range picks and silly timings are dropped', () => {
    const p = fl.passages[0]
    const id = fullLengthQuestionId(p, p.questions[0], 0)
    const clean = sanitizeFullLengthAnswers(fl, {
      answers: { [id]: 1, 'nope:0': 2, [fullLengthQuestionId(p, p.questions[1], 1)]: 9 },
      flags: [id, id, 'nope'],
      passageFlags: [p.id, 'nope'],
      passageSeconds: { [p.id]: 1e9, nope: 10 },
    })
    expect(clean).toEqual({ answers: { [id]: 1 }, flags: [id], passageFlags: [p.id], passageSeconds: { [p.id]: 95 * 60 } })
  })

  it('rebuilds the review from stored results: options as shown, picks, flags, time', () => {
    const { byId } = sitting()
    const firstPassage = fl.passages[0]
    const flagged = fullLengthQuestionId(firstPassage, firstPassage.questions[1], 1)
    const results = {
      form: fl.form,
      total: 500,
      sections: [],
      answers: byId,
      flags: [flagged],
      passageSeconds: { [firstPassage.id]: firstPassage.questions.length * 60 },
    }
    const review = fullLengthReviewItems(JSON.stringify(results))!
    expect(review).toHaveLength(fl.questionCount)
    const first = review[0]
    expect(first.question).toBe(firstPassage.questions[0].question)
    expect(first.options).toEqual(firstPassage.questions[0].options)
    expect(first.correctIndex).toBe(firstPassage.questions[0].correctAnswer)
    expect(first.explanation).toBe(firstPassage.questions[0].explanation)
    expect(first.passage?.id).toBe(firstPassage.id)
    expect(first.durationMs).toBe(60_000)
    expect(review[1].flagged).toBe(true)
    expect(review[0].flagged).toBe(false)
    expect(review[0].chosenIndex).toBe(byId[fullLengthQuestionId(firstPassage, firstPassage.questions[0], 0)] ?? null)
    // A discrete stands alone: no passage in the review item.
    const discreteIdx = review.findIndex((_, i) => {
      let n = 0
      for (const p of fl.passages) for (const q of p.questions) if (n++ === i) return typeof q.id === 'string'
      return false
    })
    expect(review[discreteIdx].passage).toBeNull()
  })

  it('legacy attempts (section tallies only) have no per-question review', () => {
    expect(fullLengthReviewItems({ form: 1, sections: [{ section: 'cars', correct: 1, total: 2 }] })).toBeNull()
    expect(fullLengthReviewItems({ form: 99, answers: {} })).toBeNull()
  })
})

describe('exit quiz — resolver reproduces a seeded quiz', () => {
  it.each([
    ['mcat-general-chemistry', undefined],
    ['sat-linear-equations-inequalities', undefined], // generative pool: only the seed reproduces it
  ])('%s', async (slug) => {
    const seed = 12345
    const quiz = await generateExitQuiz(slug, 10, undefined, seed, { includeLowYield: false })
    const shown = quiz.map((q) => shuffleOptions(q.options, q.correctIndex, q.id + q.question))
    const answers = quiz.map((q, i) => ({
      questionId: q.id,
      selectedAnswer: i === 9 ? -1 : (pick(i, shown[i].correctIndex, q.options.length) ?? shown[i].correctIndex),
      correct: true,
    }))
    const gen = { seed, totalQuestions: 10, includeLowYield: false }
    const items = await resolveExitQuizItems(slug, answers, gen)
    quiz.forEach((q, i) => {
      expect(items[i]).not.toBeNull()
      expect(items[i]!.question).toBe(q.question)
      expect(items[i]!.options).toEqual(shown[i].options)
      expect(items[i]!.correctIndex).toBe(shown[i].correctIndex)
      expect(items[i]!.explanation).toBe(q.explanation)
      expect(items[i]!.questionKey).toBe(questionKey({ question: q.question, options: q.options, correctIndex: q.correctIndex }))
    })

    const review = await exitReviewItems({ topicSlug: slug, answers, totalQuestions: 10, seed, includeLowYield: false, timeSpent: 100 })
    expect(review.map((r) => r?.chosenIndex)).toEqual(answers.map((a) => (a.selectedAnswer >= 0 ? a.selectedAnswer : null)))
    // The quiz records only a total time, so no per-question time is claimed.
    expect(review.every((r) => r?.durationMs == null)).toBe(true)
  })
})
