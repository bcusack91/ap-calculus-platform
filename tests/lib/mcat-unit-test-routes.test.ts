/**
 * MCAT unit test API: opens only after every plan topic is cleared, never
 * re-rolls an unfinished sitting, never sends keys before submit, grades on
 * the server against the frozen questions, and can't be graded twice.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'

const mockAuth = vi.fn()
vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))

const mockPlan = vi.fn()
vi.mock('@/lib/mcat-plan', () => ({ buildMcatPlanStatus: (id: string) => mockPlan(id) }))

const db = {
  mcatUnitTest: { findMany: vi.fn(), findUnique: vi.fn(), create: vi.fn(), updateMany: vi.fn() },
  exitQuizAttempt: { findMany: vi.fn() },
  user: { findUnique: vi.fn() },
  unitTestAttempt: { create: vi.fn() },
}
vi.mock('@/lib/prisma', () => ({ prisma: db }))

const mockComplete = vi.fn()
vi.mock('@/lib/assignment-autocomplete', () => ({ recordCourseWorkCompletion: (a: unknown) => mockComplete(a) }))

const PLAN_TOPICS = [
  'mcat-biochemistry-enzymes-kinetics-mcat',
  'mcat-general-chemistry-kinetics-mcat',
  'mcat-psychology-behavior-disorders-mcat',
  'mcat-sociology-mcat',
  'mcat-organ-systems-renal-mcat',
]

function plan(over: { pending?: number; passed?: boolean; inProgressId?: string | null } = {}) {
  const pending = over.pending ?? 0
  const topics = PLAN_TOPICS.map((slug, i) => ({ slug, name: slug, priority: 'high', isSatisfied: i >= pending }))
  return {
    hasDiagnostic: true,
    diagnosticId: 'diag-1',
    canRetakeDiagnostic: pending === 0 && !!over.passed,
    requiredScorePercent: 80,
    recommendedTopics: topics,
    pendingTopics: topics.filter((t) => !t.isSatisfied),
    unitTest: {
      available: pending === 0,
      passed: !!over.passed,
      attempts: 0,
      bestPercent: null,
      lastPercent: null,
      inProgressId: over.inProgressId ?? null,
      passPercent: 75,
      questionCount: 25,
      path: '/mcat-unit-test',
    },
  }
}

beforeEach(() => {
  vi.clearAllMocks()
  mockAuth.mockResolvedValue({ user: { id: 'u1' } })
  db.mcatUnitTest.findMany.mockResolvedValue([])
  db.exitQuizAttempt.findMany.mockResolvedValue([])
  db.user.findUnique.mockResolvedValue({ lessonIncludeLowYield: false })
  db.mcatUnitTest.create.mockImplementation(async ({ data }: { data: { questions: unknown; total: number; topicSlugs: unknown } }) => ({
    id: 'sit-1', questions: data.questions, topicSlugs: data.topicSlugs, total: data.total, startedAt: new Date(),
  }))
})

describe('POST /api/mcat-unit-test/start', () => {
  it('is closed while a plan topic is still pending', async () => {
    mockPlan.mockResolvedValue(plan({ pending: 2 }))
    const { POST } = await import('@/app/api/mcat-unit-test/start/route')
    const res = await POST()
    expect(res.status).toBe(409)
    expect(db.mcatUnitTest.create).not.toHaveBeenCalled()
  })

  it('is closed after a pass', async () => {
    mockPlan.mockResolvedValue(plan({ passed: true }))
    const { POST } = await import('@/app/api/mcat-unit-test/start/route')
    expect((await POST()).status).toBe(409)
  })

  it('builds 25 questions, 5 per plan topic, and sends no keys or explanations', async () => {
    mockPlan.mockResolvedValue(plan())
    const { POST } = await import('@/app/api/mcat-unit-test/start/route')
    const res = await POST()
    expect(res.status).toBe(200)
    const body = await res.json()
    expect(body.questions).toHaveLength(25)
    for (const slug of PLAN_TOPICS) expect(body.questions.filter((q: { topicSlug: string }) => q.topicSlug === slug)).toHaveLength(5)
    for (const q of body.questions) {
      expect(q).not.toHaveProperty('correctIndex')
      expect(q).not.toHaveProperty('explanation')
    }
    // The stored copy keeps the keys, each pointing at the right (shuffled) option.
    const stored = db.mcatUnitTest.create.mock.calls[0][0].data.questions as { correctIndex: number; options: string[] }[]
    expect(stored.every((q) => q.correctIndex >= 0 && q.correctIndex < q.options.length)).toBe(true)
  })

  it('a retake avoids every question from earlier sittings', async () => {
    mockPlan.mockResolvedValue(plan())
    const { POST } = await import('@/app/api/mcat-unit-test/start/route')
    const first = db.mcatUnitTest.create
    await POST()
    const firstQs = first.mock.calls[0][0].data.questions as { id: string }[]
    db.mcatUnitTest.findMany.mockResolvedValue([{ questions: firstQs }])
    await POST()
    const secondQs = first.mock.calls[1][0].data.questions as { id: string }[]
    const before = new Set(firstQs.map((q) => q.id))
    expect(secondQs).toHaveLength(25)
    expect(secondQs.some((q) => before.has(q.id))).toBe(false)
  })

  it('resumes an unfinished sitting instead of re-rolling it', async () => {
    mockPlan.mockResolvedValue(plan({ inProgressId: 'sit-open' }))
    db.mcatUnitTest.findUnique.mockResolvedValue({
      id: 'sit-open', total: 1,
      questions: [{ id: 'q', topicSlug: PLAN_TOPICS[0], question: 'Q?', options: ['a', 'b'], correctIndex: 1, explanation: 'e' }],
    })
    const { POST } = await import('@/app/api/mcat-unit-test/start/route')
    const body = await (await POST()).json()
    expect(body).toMatchObject({ id: 'sit-open', resumed: true })
    expect(body.questions[0]).not.toHaveProperty('correctIndex')
    expect(db.mcatUnitTest.create).not.toHaveBeenCalled()
  })
})

describe('POST /api/mcat-unit-test/submit', () => {
  const questions = Array.from({ length: 25 }, (_, i) => ({
    id: `q${i}`, topicSlug: PLAN_TOPICS[Math.floor(i / 5)], question: `Q${i}`, options: ['a', 'b', 'c', 'd'], correctIndex: 2, explanation: 'why',
  }))
  const req = (answers: unknown[]) =>
    new Request('http://x/api/mcat-unit-test/submit', { method: 'POST', body: JSON.stringify({ id: 'sit-1', answers }) })

  beforeEach(() => {
    db.mcatUnitTest.findUnique.mockResolvedValue({ userId: 'u1', questions, completedAt: null, startedAt: new Date(), diagnosticId: 'diag-1' })
    db.mcatUnitTest.updateMany.mockResolvedValue({ count: 1 })
  })

  it('grades server-side: 19/25 passes and logs a teacher-visible attempt', async () => {
    const { POST } = await import('@/app/api/mcat-unit-test/submit/route')
    const body = await (await POST(req(questions.map((_, i) => (i < 19 ? 2 : 0))))).json()
    expect(body).toMatchObject({ correct: 19, total: 25, percentage: 76, passed: true, passPercent: 75 })
    expect(body.review[0]).toMatchObject({ correctIndex: 2, selected: 2, explanation: 'why' })
    expect(db.mcatUnitTest.updateMany.mock.calls[0][0]).toMatchObject({ where: { id: 'sit-1', completedAt: null }, data: { passed: true, correct: 19 } })
    expect(db.unitTestAttempt.create.mock.calls[0][0].data).toMatchObject({ courseSlug: 'mcat-prep', correct: 19, total: 25 })
    expect(mockComplete).toHaveBeenCalledWith(expect.objectContaining({ type: 'UNIT_TEST', courseSlug: 'mcat-prep' }))
  })

  it('18/25 fails; junk answers count as blank', async () => {
    const { POST } = await import('@/app/api/mcat-unit-test/submit/route')
    const answers: unknown[] = questions.map((_, i) => (i < 18 ? 2 : 0))
    answers[24] = 'C'
    answers[23] = 9
    const body = await (await POST(req(answers))).json()
    expect(body).toMatchObject({ correct: 18, passed: false })
    expect(body.review[24].selected).toBeNull()
    expect(body.review[23].selected).toBeNull()
  })

  it("rejects another student's sitting and a second submit", async () => {
    const { POST } = await import('@/app/api/mcat-unit-test/submit/route')
    db.mcatUnitTest.findUnique.mockResolvedValueOnce({ userId: 'someone-else', questions, completedAt: null, startedAt: new Date(), diagnosticId: 'd' })
    expect((await POST(req([]))).status).toBe(404)
    db.mcatUnitTest.updateMany.mockResolvedValueOnce({ count: 0 }) // raced another submit
    expect((await POST(req([]))).status).toBe(409)
    expect(db.unitTestAttempt.create).not.toHaveBeenCalled()
  })
})

describe('SAT and ACT unit test routes', () => {
  it('SAT: builds a test from the SAT plan once its topics are cleared', async () => {
    vi.resetModules()
    vi.doMock('@/lib/sat-plan', () => ({
      buildSatPlan: async () => ({
        hasDiagnostic: true,
        diagnosticId: 'sat-diag',
        recommendedTopics: ['sat-linear-equations-inequalities', 'sat-subject-verb-agreement', 'sat-vocabulary-context'].map((slug) => ({ slug, name: slug, isSatisfied: true })),
        pendingTopics: [],
      }),
    }))
    const { POST } = await import('@/app/api/sat-unit-test/start/route')
    const res = await POST()
    expect(res.status).toBe(200)
    const body = await res.json()
    expect(body.questions).toHaveLength(25)
    expect(body.questions.map((q: { topicSlug: string }) => q.topicSlug).filter((s: string) => s === 'sat-linear-equations-inequalities')).toHaveLength(9)
    expect(db.mcatUnitTest.create.mock.calls.at(-1)![0].data.diagnosticId).toBe('sat-diag')
    vi.doUnmock('@/lib/sat-plan')
  })

  it('ACT: builds a test from the ACT plan once its topics are cleared', async () => {
    vi.resetModules()
    vi.doMock('@/lib/act-plan', () => ({
      buildActPlanStatus: async () => ({
        hasDiagnostic: true,
        diagnosticId: 'act-diag',
        recommendedTopics: ['act-english-grammar-act', 'act-algebra-equations-act', 'act-science-data-act', 'act-reading-strategy-act', 'act-trigonometry-act'].map((slug) => ({ slug, name: slug, isSatisfied: true })),
        pendingTopics: [],
        unitTest: { available: true, passed: false, attempts: 0, inProgressId: null, locksDiagnostic: false },
      }),
    }))
    const { POST } = await import('@/app/api/act-unit-test/start/route')
    const res = await POST()
    expect(res.status).toBe(200)
    const body = await res.json()
    expect(body.questions).toHaveLength(25)
    expect(db.mcatUnitTest.create.mock.calls.at(-1)![0].data.diagnosticId).toBe('act-diag')
    vi.doUnmock('@/lib/act-plan')
  })
})
