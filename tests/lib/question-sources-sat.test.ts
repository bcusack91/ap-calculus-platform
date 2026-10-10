/**
 * Rebuilding SAT attempts for review: practice tests from testNumber / format
 * / routes + stored answers, diagnostics from the stored review copy.
 */
import { describe, it, expect } from 'vitest'
import { buildSatForm, routedModule2 } from '@/data/sat-practice/test-generator'
import { gradeSatPractice, storedSatAnswers } from '@/lib/sat-practice-grading'
import { satPracticeRows } from '@/lib/sat-practice-rows'
import { satAttemptFormat, satDiagnosticReviewItems, satPracticeReviewItems } from '@/lib/question-sources/sat'
import { questionKey } from '@/lib/question-key'

describe('satPracticeReviewItems', { timeout: 180_000 }, () => {
  it('rebuilds every question of a routed attempt, with the answers, flags and times as stored', async () => {
    const base = await buildSatForm(1, 'full')
    const rw2 = await routedModule2(base, 1, 'harder')
    const responses = [base.sections[0], rw2, base.sections[2], base.sections[3]].flatMap((s, moduleIndex) =>
      s.questions.map((q, i) => ({
        moduleIndex,
        questionId: q.id,
        // Module 1 R&W all right (-> harder); elsewhere answer option 0.
        selectedIndex: q.gridIn ? null : moduleIndex === 0 ? q.correctIndex : 0,
        textValue: q.gridIn ? '7' : null,
        flagged: i === 0,
        seconds: 30,
      })),
    )
    const grade = await gradeSatPractice({ testNumber: 1, format: 'full', responses })
    expect(grade.rw.tier).toBe('harder')
    const stored = storedSatAnswers(grade.items)
    const items = await satPracticeReviewItems({
      testNumber: 1,
      format: 'full',
      rwTier: grade.rw.tier,
      mathTier: grade.math.tier,
      answers: JSON.parse(JSON.stringify(stored)),
    })
    expect(items).toHaveLength(98)
    expect(items.map((i) => i.index)).toEqual([...Array(98).keys()])
    expect(items[27].question).toBe(rw2.questions[0].question)
    expect(items[0]).toMatchObject({ flagged: true, durationMs: 30_000, chosenIndex: base.sections[0].questions[0].correctIndex })
    const grid = items.find((i) => i.correctIndex === -1)!
    expect(grid).toMatchObject({ chosenIndex: null, chosenText: '7', options: [] })
    const passage = items.find((i) => i.passage)!
    expect(passage.passage!.body.length).toBeGreaterThan(50)

    // The review's keys are the logged rows' keys (so "revised since" compares like with like).
    const rows = satPracticeRows(grade.items, { attemptId: 'a' })
    expect(items.map((i) => i.questionKey)).toEqual(rows.map((r) => r.questionKey))
  })

  it('resolves a legacy attempt (sections of answers, no routes stored) against every Module 2 it could have sat', async () => {
    const base = await buildSatForm(2, 'full')
    const rw2 = await routedModule2(base, 1, 'easier')
    const sections = [base.sections[0], rw2, base.sections[2], base.sections[3]]
    const legacy = sections.map((s) => ({
      sectionId: s.id,
      correct: 0,
      total: s.questions.length,
      answers: s.questions.map((q) => ({ questionId: q.id, selectedIndex: q.gridIn ? null : 1, textValue: null })),
    }))
    const items = await satPracticeReviewItems({ testNumber: 2, rwTotal: 54, answers: legacy })
    expect(items).toHaveLength(98)
    expect(items[27].question).toBe(rw2.questions[0].question)
    expect(items[0].chosenIndex).toBe(1)
  })

  it('derives the format from the totals on rows saved before it was stored', () => {
    expect(satAttemptFormat({ format: null, rwTotal: 54 })).toBe('full')
    expect(satAttemptFormat({ format: null, rwTotal: 27 })).toBe('mini')
    expect(satAttemptFormat({ format: 'mini', rwTotal: 54 })).toBe('mini')
  })

  it('leaves out answers whose question can no longer be built', async () => {
    const items = await satPracticeReviewItems({
      testNumber: 1,
      format: 'full',
      answers: [{ itemIndex: 0, moduleIndex: 0, questionId: 'gone', selectedIndex: 1, textValue: null, flagged: false, seconds: 5, correct: false }],
    })
    expect(items).toEqual([])
  })
})

describe('satDiagnosticReviewItems', () => {
  it('rebuilds from results.review, including typed grid-in answers', () => {
    const results = JSON.stringify({
      review: {
        questions: [
          { id: 'q1', question: 'What is 2+2?', options: ['3', '4', '5', '6'], correctIndex: 1, explanation: 'Add.', domain: 'alg', sourceSlug: 'sat-linear-equations-inequalities' },
          { id: 'q2', question: 'Main idea?', options: ['A', 'B', 'C', 'D'], correctIndex: 2, explanation: 'C.', domain: 'rc', passage: 'Once upon a time…', passageId: 'p9', sourceSlug: 'passage-fiction' },
          { id: 'q3', question: 'Solve x+1=3', options: [], correctIndex: -1, explanation: 'x=2', domain: 'alg', gridIn: { correctAnswer: 2, acceptableAnswers: [], tolerance: 0 } },
        ],
        answers: [1, null, -1],
        typed: [null, null, '2'],
        domainNames: { alg: 'Algebra', rc: 'Reading Comprehension' },
      },
    })
    const items = satDiagnosticReviewItems(results)
    expect(items).toHaveLength(3)
    expect(items[0]).toMatchObject({ index: 0, chosenIndex: 1, correctIndex: 1, discipline: 'Algebra', topicSlug: 'sat-linear-equations-inequalities' })
    expect(items[0].questionKey).toBe(questionKey({ question: 'What is 2+2?', options: ['3', '4', '5', '6'], correctIndex: 1 }))
    expect(items[1]).toMatchObject({ chosenIndex: null, passage: { id: 'p9', body: 'Once upon a time…' } })
    expect(items[1].questionKey).toBe(questionKey({ question: 'Main idea?', options: ['A', 'B', 'C', 'D'], correctIndex: 2, passageId: 'p9' }))
    expect(items[2]).toMatchObject({ chosenIndex: null, chosenText: '2', correctIndex: -1 })
  })

  it('returns nothing for results without a review copy', () => {
    expect(satDiagnosticReviewItems({ totalCorrect: 3 })).toEqual([])
    expect(satDiagnosticReviewItems('not json')).toEqual([])
  })
})
