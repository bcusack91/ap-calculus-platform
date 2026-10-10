/**
 * Answer log — the submit routes: MCAT full-length (server grading from
 * per-question answers), MCAT section practice (refs re-resolved) and the
 * cycle unit test (which used to log nothing) write one QuestionActivity row
 * per question, tagged with the stored attempt's id.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'

const mockAuth = vi.fn()
const mockCreateMany = vi.fn()
const mockDiagnosticCreate = vi.fn()
const mockPracticeFindFirst = vi.fn()
const mockPracticeCreate = vi.fn()
const mockUnitFindUnique = vi.fn()
const mockUnitUpdateMany = vi.fn()

vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))
vi.mock('@/lib/prisma', () => {
  const prisma = {
    questionActivity: { createMany: (...a: unknown[]) => mockCreateMany(...a) },
    topic: { findMany: vi.fn().mockResolvedValue([]), findUnique: vi.fn().mockResolvedValue(null) },
    user: { findUnique: vi.fn().mockResolvedValue({ studyContext: 'personal' }) },
    diagnosticTest: { create: (...a: unknown[]) => mockDiagnosticCreate(...a) },
    mcatTestAttempt: {
      findFirst: (...a: unknown[]) => mockPracticeFindFirst(...a),
      create: (...a: unknown[]) => mockPracticeCreate(...a),
    },
    mcatUnitTest: {
      findUnique: (...a: unknown[]) => mockUnitFindUnique(...a),
      updateMany: (...a: unknown[]) => mockUnitUpdateMany(...a),
    },
    unitTestAttempt: { create: vi.fn().mockResolvedValue({ id: 'uta1' }) },
  }
  return { prisma }
})
vi.mock('@/lib/assignment-autocomplete', () => ({ recordCourseWorkCompletion: vi.fn() }))
vi.mock('@/lib/mcat-plan', () => ({ buildMcatPlanStatus: vi.fn() }))
vi.mock('@/lib/sat-plan', () => ({ buildSatPlan: vi.fn() }))
vi.mock('@/lib/act-plan', () => ({ buildActPlanStatus: vi.fn() }))
vi.mock('@/lib/mcat-unit-test-server', () => ({ createUnitTest: vi.fn(), publicQuestions: vi.fn(), unitTestStatusFor: vi.fn() }))

import { POST as fullLengthSubmit } from '@/app/api/mcat-full-length/submit/route'
import { POST as practiceSubmit } from '@/app/api/mcat-practice/submit/route'
import { POST as mcatUnitTestSubmit } from '@/app/api/mcat-unit-test/submit/route'
import { FULL_LENGTH_FORMS } from '@/data/mcat/full-length'
import { fullLengthQuestionId } from '@/data/mcat/types'
import { generateSectionTest } from '@/data/mcat-practice/test-generator'
import { mcatPracticeBatchRow } from '@/lib/question-activity-rows'
import { isQuestionKey } from '@/lib/question-key'

const post = (body: unknown) =>
  new Request('http://localhost/api/x', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })

type Row = Record<string, unknown>
const writtenRows = (): Row[] => mockCreateMany.mock.calls.flatMap((c) => (c[0] as { data: Row[] }).data)

beforeEach(() => {
  vi.clearAllMocks()
  mockAuth.mockResolvedValue({ user: { id: 'u1' } })
  mockCreateMany.mockResolvedValue({ count: 1 })
  mockDiagnosticCreate.mockImplementation(async ({ data }: { data: Row }) => ({ id: 'fl-att', ...data }))
  mockPracticeFindFirst.mockResolvedValue(null)
  mockPracticeCreate.mockImplementation(async ({ data }: { data: Row }) => ({ id: 'pr-att', ...data }))
})

describe('POST /api/mcat-full-length/submit — per-question answers', () => {
  const fl = FULL_LENGTH_FORMS[1]
  const answers: Record<string, number> = {}
  let expectCorrect = 0
  fl.passages.forEach((p, pi) => p.questions.forEach((q, qi) => {
    // Right on even passages, wrong on odd ones.
    answers[fullLengthQuestionId(p, q, qi)] = pi % 2 === 0 ? q.correctAnswer : (q.correctAnswer + 1) % 4
    if (pi % 2 === 0) expectCorrect++
  }))
  const flagged = fullLengthQuestionId(fl.passages[0], fl.passages[0].questions[0], 0)

  const body = {
    form: fl.form,
    // Tampered client tallies: must be ignored when answers are present.
    total: 528,
    percentileLabel: '100th',
    sections: [{ section: 'chem-phys', short: 'C/P', correct: 59, total: 59, scaled: 132, elapsedSeconds: 3000 }],
    recommendedTopics: [],
    answers,
    flags: [flagged],
    passageFlags: [fl.passages[2].id],
    passageSeconds: { [fl.passages[0].id]: 300 },
  }

  it('grades on the server, stores the answers and returns the attempt id', async () => {
    const res = await fullLengthSubmit(post(body))
    const json = await res.json()
    expect(json).toMatchObject({ success: true, id: 'fl-att', attemptId: 'fl-att' })
    const results = mockDiagnosticCreate.mock.calls[0][0].data.results
    const correct = results.sections.reduce((n: number, s: { correct: number }) => n + s.correct, 0)
    expect(correct).toBe(expectCorrect)
    expect(results.total).toBeLessThan(528)
    expect(results.sections.find((s: { section: string }) => s.section === 'chem-phys').elapsedSeconds).toBe(3000)
    expect(results.answers).toEqual(answers)
    expect(results.flags).toEqual([flagged])
    expect(results.passageFlags).toEqual([fl.passages[2].id])
    expect(results.passageSeconds).toEqual({ [fl.passages[0].id]: 300 })
  })

  it('writes one FULL_LENGTH row per question whose section totals match the stored tallies', async () => {
    await fullLengthSubmit(post(body))
    const results = mockDiagnosticCreate.mock.calls[0][0].data.results
    const rows = writtenRows()
    expect(rows).toHaveLength(fl.questionCount)
    for (const s of results.sections as { section: string; correct: number; total: number }[]) {
      const sec = rows.filter((r) => r.discipline === s.section)
      expect(sec.length).toBe(s.total)
      expect(sec.reduce((n, r) => n + (r.correct as number), 0)).toBe(s.correct)
    }
    expect(rows.every((r) => r.source === 'FULL_LENGTH' && r.attemptKind === 'mcat-fl' && r.attemptId === 'fl-att' && isQuestionKey(r.questionKey as string))).toBe(true)
    expect(rows[0]).toMatchObject({ itemIndex: 0, flagged: true, chosenIndex: answers[flagged] })
    expect(rows[1].flagged).toBeUndefined() // false = the column default, not written
  })

  it('an older client (section tallies only) keeps the batch rows', async () => {
    await fullLengthSubmit(post({ form: 1, total: 500, sections: [{ section: 'cars', short: 'CARS', correct: 30, total: 53, scaled: 125 }] }))
    expect(writtenRows()).toEqual([expect.objectContaining({ source: 'FULL_LENGTH', discipline: 'cars', answered: 53, correct: 30 })])
    expect(writtenRows()[0].attemptKind).toBeUndefined()
  })
})

describe('POST /api/mcat-practice/submit — refs', () => {
  it('stores refs and writes per-question rows totalling the old batch row', async () => {
    const test = await generateSectionTest('chem-phys')
    const answers = test.questions.map((q, i) => ({
      questionIndex: i,
      selected: i % 3 === 0 ? q.correctAnswer : i % 3 === 1 ? (q.correctAnswer + 1) % q.options.length : null,
      correct: q.correctAnswer,
      ref: q.ref,
    }))
    const payload = { sectionId: 'chem-phys', sectionName: test.section.name, score: 125, maxScore: 132, percentage: 33, correct: 10, total: answers.length, timeSpent: 900, answers }
    const res = await practiceSubmit(post(payload))
    expect(await res.json()).toEqual({ success: true, attemptId: 'pr-att' })
    expect(mockPracticeCreate.mock.calls[0][0].data.answers.map((a: { ref?: string }) => a.ref)).toEqual(test.questions.map((q) => q.ref))

    const rows = writtenRows()
    const batch = mcatPracticeBatchRow(payload)
    expect(rows).toHaveLength(answers.length)
    expect(rows.reduce((n, r) => n + (r.answered as number), 0)).toBe(batch.answered)
    expect(rows.reduce((n, r) => n + (r.correct as number), 0)).toBe(batch.correct)
    expect(rows.every((r) => r.attemptKind === 'mcat-practice' && r.attemptId === 'pr-att')).toBe(true)
    expect(rows.map((r) => r.chosenIndex ?? null)).toEqual(answers.map((a) => a.selected))
  })
})

describe('POST /api/mcat-unit-test/submit — UNIT_TEST rows', () => {
  const questions = [
    { id: 'a', question: 'Q1', options: ['w', 'x', 'y', 'z'], correctIndex: 1, explanation: '', topicSlug: 't1' },
    { id: 'b', question: 'Q2', options: ['w', 'x', 'y', 'z'], correctIndex: 3, explanation: '', topicSlug: 't2' },
  ]

  beforeEach(() => {
    mockUnitFindUnique.mockResolvedValue({ userId: 'u1', questions, completedAt: null, startedAt: new Date(), diagnosticId: 'diag1' })
    mockUnitUpdateMany.mockResolvedValue({ count: 1 })
  })

  it('logs one row per question graded from the frozen key', async () => {
    const res = await mcatUnitTestSubmit(post({ id: 'ut1', answers: [1, 0], timeSpent: 60 }))
    expect((await res.json()).correct).toBe(1)
    expect(writtenRows().map((r) => [r.source, r.courseSlug, r.topicSlug, r.correct, r.chosenIndex, r.itemIndex, r.attemptKind, r.attemptId])).toEqual([
      ['UNIT_TEST', 'mcat-prep', 't1', 1, 1, 0, 'unit-test', 'ut1'],
      ['UNIT_TEST', 'mcat-prep', 't2', 0, 0, 1, 'unit-test', 'ut1'],
    ])
  })

  it('logs nothing for a double submit', async () => {
    mockUnitUpdateMany.mockResolvedValue({ count: 0 })
    const res = await mcatUnitTestSubmit(post({ id: 'ut1', answers: [1, 0] }))
    expect(res.status).toBe(409)
    expect(mockCreateMany).not.toHaveBeenCalled()
  })
})
