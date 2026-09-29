/**
 * Answered-question tracking (QuestionActivity) for the teacher's per-student
 * report: the client ingest route for browser-graded sources, and the submit
 * routes that record from the SERVER's grading.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'

const mockAuth = vi.fn()
const mockCreateMany = vi.fn()
const mockTopicFindMany = vi.fn()
const mockUserFindUnique = vi.fn()
const mockClassDiagnosticFind = vi.fn()
const mockMemberFind = vi.fn()
const mockDiagnosticCreate = vi.fn()
const mockExitFindFirst = vi.fn()
const mockExitCreate = vi.fn()

vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))
vi.mock('@/lib/prisma', () => {
  const prisma = {
    questionActivity: { createMany: (...a: unknown[]) => mockCreateMany(...a) },
    topic: {
      findMany: (...a: unknown[]) => mockTopicFindMany(...a),
      findUnique: vi.fn().mockResolvedValue(null),
      findFirst: vi.fn().mockResolvedValue(null),
    },
    user: { findUnique: (...a: unknown[]) => mockUserFindUnique(...a) },
    classDiagnostic: { findUnique: (...a: unknown[]) => mockClassDiagnosticFind(...a) },
    classroomMember: { findUnique: (...a: unknown[]) => mockMemberFind(...a) },
    diagnosticTest: { create: (...a: unknown[]) => mockDiagnosticCreate(...a) },
    exitQuizAttempt: {
      findFirst: (...a: unknown[]) => mockExitFindFirst(...a),
      create: (...a: unknown[]) => mockExitCreate(...a),
    },
    factoringPerformanceMetrics: { createMany: vi.fn().mockResolvedValue({ count: 0 }) },
    $transaction: async (fn: (tx: unknown) => unknown) => fn(prisma),
  }
  return { prisma }
})

// Exit-quiz collaborators: the server regrade is the thing under test's input.
const mockRegradeSeeded = vi.fn()
vi.mock('@/lib/exit-quiz-regrade', () => ({
  regradeExitQuizSeeded: (...a: unknown[]) => mockRegradeSeeded(...a),
  regradeExitQuiz: vi.fn(),
}))
vi.mock('@/lib/streak', () => ({ touchDailyStreak: vi.fn() }))
vi.mock('@/lib/assignment-autocomplete', () => ({ recordAssignmentCompletion: vi.fn() }))
vi.mock('@/lib/flashcard-unlock', () => ({ maybeUnlockFlashcards: vi.fn().mockResolvedValue({ unlocked: false }) }))

import { POST as ingest } from '@/app/api/activity/questions/route'
import { POST as exitSubmit } from '@/app/api/exit-quiz/submit/route'
import { POST as mcatDiagnosticSubmit } from '@/app/api/mcat-diagnostic/submit/route'
import { POST as apBioDiagnosticSubmit } from '@/app/api/ap-bio-diagnostic/submit/route'
import { diagnosticQuestionRows, mcatFullLengthRows, mcatPracticeBatchRow } from '@/lib/question-activity-rows'

const post = (body: unknown) =>
  new Request('http://localhost/api/x', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })

type Row = Record<string, unknown>
const writtenRows = (): Row[] => mockCreateMany.mock.calls.flatMap((c) => (c[0] as { data: Row[] }).data)

beforeEach(() => {
  vi.clearAllMocks()
  mockAuth.mockResolvedValue({ user: { id: 'u1' } })
  mockCreateMany.mockResolvedValue({ count: 1 })
  mockTopicFindMany.mockResolvedValue([])
  mockUserFindUnique.mockResolvedValue({ studyContext: 'personal' })
  mockDiagnosticCreate.mockResolvedValue({ id: 'd1' })
  mockExitFindFirst.mockResolvedValue(null)
  mockExitCreate.mockImplementation(async ({ data }: { data: Row }) => ({ id: 'att1', ...data }))
})

describe('POST /api/activity/questions (client-graded sources)', () => {
  const row = { source: 'ENTRANCE', topicSlug: 'limits-intro', questionKey: 'q1', answered: 1, correct: 1 }

  it('requires a signed-in student', async () => {
    mockAuth.mockResolvedValue(null)
    const res = await ingest(post({ rows: [row] }))
    expect(res.status).toBe(401)
    expect(mockCreateMany).not.toHaveBeenCalled()
  })

  it('records valid ENTRANCE and LESSON rows', async () => {
    const res = await ingest(post({ rows: [row, { source: 'LESSON', topicSlug: 'limits-intro', questionKey: 'limits-intro:p1:s3', answered: 4, correct: 3 }] }))
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({ ok: true })
    const rows = writtenRows()
    expect(rows).toHaveLength(2)
    expect(rows[1]).toMatchObject({ userId: 'u1', source: 'LESSON', answered: 4, correct: 3, classroomId: '' })
  })

  it.each(['EXIT', 'DIAGNOSTIC', 'PRACTICE', 'FULL_LENGTH', 'DAILY', 'COMPETITIVE'])(
    'rejects the server-graded source %s',
    async (source) => {
      const res = await ingest(post({ rows: [{ ...row, source }] }))
      expect(res.status).toBe(400)
      expect(mockCreateMany).not.toHaveBeenCalled()
    },
  )

  it('validates each row', async () => {
    for (const bad of [
      { ...row, correct: 2 }, // correct > answered
      { ...row, answered: 51 },
      { ...row, answered: 0 },
      { ...row, topicSlug: '' },
      { ...row, topicSlug: 'x'.repeat(201) },
      { ...row, questionKey: 'x'.repeat(201) },
      { ...row, answered: 1.5 },
    ]) {
      expect((await ingest(post({ rows: [bad] }))).status).toBe(400)
    }
    expect((await ingest(post({ rows: [] }))).status).toBe(400)
    expect(mockCreateMany).not.toHaveBeenCalled()
  })

  it('caps a request at 60 rows', async () => {
    expect((await ingest(post({ rows: Array(61).fill(row) }))).status).toBe(400)
    expect((await ingest(post({ rows: Array(60).fill(row) }))).status).toBe(200)
    expect(writtenRows()).toHaveLength(60)
  })
})

describe('POST /api/exit-quiz/submit — EXIT rows from the server grading', () => {
  const body = {
    topicSlug: 'limits-intro',
    score: 3, // the client claims a perfect run…
    totalQuestions: 3,
    seed: 42,
    timeSpent: 30,
    answers: [
      { questionId: 'q1', selectedAnswer: 0, correct: true },
      { questionId: 'q2', selectedAnswer: 1, correct: true },
      { questionId: 'q3', selectedAnswer: 2, correct: true },
    ],
  }

  beforeEach(() => {
    // …but the server's regrade says only q1 was right.
    mockRegradeSeeded.mockResolvedValue({ score: 1, resolvedCount: 3, unresolvedCount: 0, usedFallback: false, perAnswer: [true, false, false] })
  })

  it('stores the server-graded correctness on the attempt', async () => {
    const res = await exitSubmit(post(body))
    expect(res.status).toBe(200)
    const stored = mockExitCreate.mock.calls[0][0].data
    expect(stored.score).toBe(1)
    expect(stored.answers.map((a: { correct: boolean }) => a.correct)).toEqual([true, false, false])
  })

  it('writes one EXIT row per question with the server verdict', async () => {
    await exitSubmit(post(body))
    const rows = writtenRows()
    expect(rows).toHaveLength(3)
    expect(rows.map((r) => [r.source, r.questionKey, r.answered, r.correct])).toEqual([
      ['EXIT', 'q1', 1, 1],
      ['EXIT', 'q2', 1, 0],
      ['EXIT', 'q3', 1, 0],
    ])
    expect(rows[0]).toMatchObject({ userId: 'u1', topicSlug: 'limits-intro', durationMs: 10_000 })
  })

  it('a tracking failure does not change the response', async () => {
    const ok = await (await exitSubmit(post(body))).json()
    mockCreateMany.mockRejectedValue(new Error('db down'))
    const res = await exitSubmit(post(body))
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual(ok)
  })

  it('records nothing for a deduplicated re-POST', async () => {
    mockExitFindFirst.mockResolvedValue({ id: 'att0' })
    await exitSubmit(post(body))
    expect(mockCreateMany).not.toHaveBeenCalled()
  })
})

describe('diagnostic submit routes — DIAGNOSTIC rows', () => {
  const mcatResults = {
    review: {
      questions: [
        { id: 'm1', correctAnswer: 2, domain: 'gen-chem', sourceSlug: 'mcat-general-chemistry' },
        { id: 'm2', correctAnswer: 0, domain: 'cars-hum', sourceSlug: 'mcat-cars' },
        { id: 'm3', correctAnswer: 1, domain: 'cars-hum', sourceSlug: 'mcat-cars' },
      ],
      answers: [2, 3, null],
      domainNames: { 'gen-chem': 'General Chemistry', 'cars-hum': 'CARS Humanities' },
    },
    // A tampered client flag must not matter: correctness comes from the key.
    itemAnalytics: [{ questionId: 'm2', isCorrect: true }],
    domains: [
      { domainId: 'gen-chem', domainName: 'General Chemistry', correct: 1, total: 1 },
      { domainId: 'cars-hum', domainName: 'CARS Humanities', correct: 0, total: 2 },
    ],
    totalCorrect: 1,
    totalQuestions: 3,
  }

  it('MCAT: per-question rows with the domain as discipline, graded from the stored key', async () => {
    const res = await mcatDiagnosticSubmit(post({ category: 'mcat-full-diagnostic', results: JSON.stringify(mcatResults) }))
    expect(await res.json()).toEqual({ success: true, id: 'd1' })
    const rows = writtenRows()
    expect(rows.map((r) => [r.source, r.questionKey, r.discipline, r.topicSlug, r.correct])).toEqual([
      ['DIAGNOSTIC', 'm1', 'General Chemistry', 'mcat-general-chemistry', 1],
      ['DIAGNOSTIC', 'm2', 'CARS Humanities', 'mcat-cars', 0],
      ['DIAGNOSTIC', 'm3', 'CARS Humanities', 'mcat-cars', 0],
    ])
    expect(rows.every((r) => r.courseSlug === 'mcat-prep' && r.classroomId === '')).toBe(true)
  })

  it("MCAT: an assigned class diagnostic stamps that class's id", async () => {
    mockClassDiagnosticFind.mockResolvedValue({ classroomId: 'class-9' })
    mockMemberFind.mockResolvedValue({ isActive: true })
    await mcatDiagnosticSubmit(post({ category: 'mcat-full-diagnostic', classDiagnosticId: 'cd1', results: mcatResults }))
    expect(writtenRows().every((r) => r.classroomId === 'class-9')).toBe(true)
  })

  it('generic course diagnostic: per-question rows, course from the topic', async () => {
    mockTopicFindMany.mockResolvedValue([{ slug: 'water-properties', category: { course: { slug: 'ap-biology' } } }])
    await apBioDiagnosticSubmit(post({
      category: 'ap-bio-diagnostic-1',
      results: {
        review: {
          questions: [{ correctAnswer: 1, domain: 'chem', topicSlug: 'water-properties' }],
          answers: [1],
          domainNames: { chem: 'Chemistry of Life' },
        },
        domains: [{ domainId: 'chem', domainName: 'Chemistry of Life', correct: 1, total: 1 }],
      },
    }))
    expect(writtenRows()).toEqual([
      expect.objectContaining({ source: 'DIAGNOSTIC', discipline: 'Chemistry of Life', courseSlug: 'ap-biology', questionKey: 'ap-bio-diagnostic-1:0', correct: 1 }),
    ])
  })

  it('a tracking failure does not change the response', async () => {
    mockCreateMany.mockRejectedValue(new Error('db down'))
    const res = await mcatDiagnosticSubmit(post({ category: 'mcat-full-diagnostic', results: mcatResults }))
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({ success: true, id: 'd1' })
  })

  it('SAT grid-ins (no typed answer in review) fall back to the domain remainder', () => {
    const rows = diagnosticQuestionRows({
      review: {
        questions: [
          { id: 's1', correctIndex: 0, domain: 'alg' },
          { id: 's2', domain: 'alg', gridIn: { correctAnswer: 4 } },
          { id: 's3', domain: 'alg', gridIn: { correctAnswer: 5 } },
        ],
        answers: [0, null, null],
      },
      domains: [{ domainId: 'alg', domainName: 'Algebra', correct: 2, total: 3 }],
    }, { category: 'sat-full-diagnostic', courseSlug: 'sat-prep' })
    expect(rows.map((r) => [r.questionKey, r.discipline, r.answered, r.correct])).toEqual([
      ['s1', 'Algebra', 1, 1],
      ['sat-full-diagnostic:domain:alg', 'Algebra', 2, 1],
    ])
  })

  it('never throws on malformed results', () => {
    expect(diagnosticQuestionRows('not json')).toEqual([])
    expect(diagnosticQuestionRows({ review: { questions: [null, 5], answers: [1, 2] } })).toEqual([])
  })
})

describe('MCAT practice and full-length batch rows', () => {
  it('section practice: one PRACTICE row counted from the stored key, not the submitted tally', () => {
    const row = mcatPracticeBatchRow({
      sectionId: 'cars',
      sectionName: 'CARS',
      correct: 3, // claimed
      total: 3,
      timeSpent: 600,
      answers: [
        { questionIndex: 0, selected: 1, correct: 1 },
        { questionIndex: 1, selected: 0, correct: 2 },
        { questionIndex: 2, selected: null, correct: 0 },
      ],
    })
    expect(row).toMatchObject({ source: 'PRACTICE', discipline: 'CARS', answered: 3, correct: 1, durationMs: 600_000, courseSlug: 'mcat-prep' })
  })

  it('full-length: one FULL_LENGTH row per section with its own clock', () => {
    const rows = mcatFullLengthRows({
      form: 2,
      sections: [
        { section: 'Chemical and Physical Foundations', short: 'C/P', correct: 40, total: 59, elapsedSeconds: 5400 },
        { section: 'CARS', short: 'CARS', correct: 60, total: 53 }, // tampered: capped at total
        { section: 'Empty', short: 'E', correct: 0, total: 0 },
      ],
    })
    expect(rows.map((r) => [r.source, r.discipline, r.answered, r.correct, r.durationMs])).toEqual([
      ['FULL_LENGTH', 'Chemical and Physical Foundations', 59, 40, 5_400_000],
      ['FULL_LENGTH', 'CARS', 53, 53, null],
    ])
  })
})
