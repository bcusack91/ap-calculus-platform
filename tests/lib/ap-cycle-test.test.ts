/**
 * AP cycle test (Phase 2 gap 2, Oct 2026): every AP course in
 * CLASS_PLAN_COURSES ends its diagnostic cycle with the same 25-question /
 * 75% test as MCAT/SAT/ACT. It is RECOMMENDED, never a lock (SAT/ACT
 * precedent), is called the "cycle test" because AP also has per-unit unit
 * tests, and is served by one dynamic page + API at /cycle-test/<key>.
 *
 * Covers: the course config, the generic plan builder (ACT unchanged), the
 * plan-status entry, the routes (start/submit, answer log, teacher side
 * effects), the review resolver, the Engagement tab, and the pools (every
 * topic an AP diagnostic can recommend is a canonical production topic with
 * a deep enough exit pool).
 */
import { describe, it, expect, vi, beforeAll, beforeEach } from 'vitest'
import slugsByCourse from '../fixtures/ap-lesson-topic-slugs.json'
import { AP_DIAGNOSTICS } from './ap-diagnostic-registry'

const db = {
  diagnosticTest: { findFirst: vi.fn(), findMany: vi.fn(), findUnique: vi.fn() },
  // AP track overrides (src/lib/ap-track-server.ts): none in these tests.
  apTrackOverride: { findUnique: vi.fn().mockResolvedValue(null), findMany: vi.fn().mockResolvedValue([]) },
  user: { findUnique: vi.fn() },
  topic: { findMany: vi.fn(), findUnique: vi.fn() },
  topicProgress: { findMany: vi.fn() },
  exitQuizAttempt: { findMany: vi.fn() },
  mcatUnitTest: { findMany: vi.fn(), findUnique: vi.fn(), findFirst: vi.fn(), create: vi.fn(), updateMany: vi.fn() },
  unitTestAttempt: { create: vi.fn() },
  questionActivity: { createMany: vi.fn(), findMany: vi.fn() },
}
vi.mock('@/lib/prisma', () => ({ prisma: db }))

const mockAuth = vi.fn()
vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))

const mockComplete = vi.fn()
vi.mock('@/lib/assignment-autocomplete', () => ({ recordCourseWorkCompletion: (a: unknown) => mockComplete(a) }))

const FIXTURE = slugsByCourse as Record<string, string[]>
const ALSO_RENDERS: Record<string, string[]> = { 'ap-calculus-bc': ['ap-calculus-ab'] }
const allowed = (course: string) => new Set([course, ...(ALSO_RENDERS[course] ?? [])].flatMap((c) => FIXTURE[c] ?? []))

const DIAG_AT = new Date('2026-10-10T12:00:00Z')

// AP Bio results stored before the canonicalization fix: legacy slugs.
const BIO_RESULTS = {
  estimatedAPScore: 2,
  recommendedTopics: [
    { slug: 'ap-bio-meiosis', name: 'Meiosis (legacy)', priority: 'medium' },
    { slug: 'ap-bio-immune-system', name: 'Immune System', priority: 'medium' },
    { slug: 'ap-bio-cell-communication', name: 'Cell Communication', priority: 'high' },
    { slug: 'photosynthesis', name: 'Photosynthesis', priority: 'high' },
    { slug: 'ap-bio-hardy-weinberg', name: 'Hardy-Weinberg', priority: 'medium' },
  ],
}
const BIO_CANONICAL = ['cell-signaling', 'photosynthesis', 'meiosis', 'natural-selection']

const CHEM_TOPICS = ['equilibrium-constants-expressions', 'gibbs-free-energy', 'periodic-trends', 'ideal-gas-law', 'solubility-ksp']
const CHEM_RESULTS = { estimatedAPScore: 3, recommendedTopics: CHEM_TOPICS.map((slug) => ({ slug, name: slug, priority: 'high' })) }

/** Exit attempts: every listed slug cleared (9/10) unless it is in `pending`. */
function exitAttempts(pending: string[] = []) {
  return async ({ where }: { where: { topicSlug?: { in?: string[] } } }) =>
    (where.topicSlug?.in ?? [])
      .filter((s) => !pending.includes(s))
      .map((topicSlug) => ({ topicSlug, score: 9, totalQuestions: 10, completedAt: DIAG_AT, answers: [] }))
}

beforeEach(() => {
  vi.clearAllMocks()
  mockAuth.mockResolvedValue({ user: { id: 'u1' } })
  db.user.findUnique.mockResolvedValue({ lessonIncludeLowYield: false, studyContext: 'personal' })
  db.topic.findMany.mockImplementation(async ({ where }: { where: { slug: { in: string[] } } }) =>
    where.slug.in.map((slug) => ({ id: `t-${slug}`, slug, title: `Title ${slug}` })),
  )
  db.topicProgress.findMany.mockResolvedValue([])
  db.exitQuizAttempt.findMany.mockImplementation(exitAttempts())
  db.mcatUnitTest.findMany.mockResolvedValue([])
  db.mcatUnitTest.create.mockImplementation(async ({ data }: { data: { questions: unknown; total: number; topicSlugs: unknown } }) => ({
    id: 'sit-ap', questions: data.questions, topicSlugs: data.topicSlugs, total: data.total, startedAt: new Date(),
  }))
  db.questionActivity.createMany.mockResolvedValue({ count: 1 })
  db.questionActivity.findMany.mockResolvedValue([])
  db.unitTestAttempt.create.mockResolvedValue({ id: 'uta' })
})

describe('course config', () => {
  it('covers every AP course in CLASS_PLAN_COURSES, keyed by the class-plan key; recommended, never a lock', async () => {
    const { CLASS_PLAN_COURSES, diagnosticRouteForKey } = await import('@/lib/class-plan-config')
    const { AP_UNIT_TEST_COURSES, UNIT_TEST_COURSES, AP_CYCLE_TEST_NAME } = await import('@/lib/unit-test-courses')
    const apKeys = CLASS_PLAN_COURSES.filter((c) => c.courseSlug?.startsWith('ap-')).map((c) => c.key)
    expect([...AP_UNIT_TEST_COURSES].sort()).toEqual(apKeys.sort())
    expect(apKeys).toHaveLength(23)
    for (const key of AP_UNIT_TEST_COURSES) {
      const c = CLASS_PLAN_COURSES.find((x) => x.key === key)!
      expect(UNIT_TEST_COURSES[key]).toEqual({
        key,
        label: c.label,
        courseSlug: c.courseSlug,
        path: `/cycle-test/${key}`,
        apiPath: `/api/cycle-test/${key}`,
        testName: AP_CYCLE_TEST_NAME,
        diagnosticPath: diagnosticRouteForKey(key),
        locksDiagnostic: false,
        enabled: true,
      })
    }
    // The name and URL stay clear of the per-unit tests (/ap-chem-unit-tests).
    expect(AP_CYCLE_TEST_NAME).toBe('cycle test')
    expect(UNIT_TEST_COURSES['ap-chem'].path).not.toMatch(/unit-tests?/)
  })

  it('leaves MCAT, SAT and ACT as they were', async () => {
    const { UNIT_TEST_COURSES } = await import('@/lib/unit-test-courses')
    expect(UNIT_TEST_COURSES.mcat).toMatchObject({ path: '/mcat-unit-test', apiPath: '/api/mcat-unit-test', testName: 'unit test', locksDiagnostic: true })
    expect(UNIT_TEST_COURSES.sat).toMatchObject({ path: '/sat-unit-test', apiPath: '/api/sat-unit-test', testName: 'unit test', locksDiagnostic: false })
    expect(UNIT_TEST_COURSES.act).toMatchObject({ path: '/act-unit-test', apiPath: '/api/act-unit-test', testName: 'unit test', locksDiagnostic: false })
  })

  it('no retake gate: the recommended test is the next step even with the diagnostic open', async () => {
    const { unitTestIsNextStep, UNIT_TEST_COURSES } = await import('@/lib/unit-test-courses')
    const ap = { available: true, passed: false, locksDiagnostic: UNIT_TEST_COURSES['ap-chem'].locksDiagnostic }
    expect(unitTestIsNextStep(ap, true)).toBe(true)
    expect(unitTestIsNextStep({ ...ap, passed: true }, true)).toBe(false)
  })
})

describe('buildGenericPlanStatus', () => {
  let mod: typeof import('@/lib/act-plan')
  beforeAll(async () => {
    mod = await import('@/lib/act-plan')
  }, 60_000)

  it('AP: canonical production topics, cycle test once cleared, retake never gated', async () => {
    db.diagnosticTest.findFirst.mockResolvedValue({ id: 'bio-diag', createdAt: DIAG_AT, results: BIO_RESULTS })
    const p = await mod.buildGenericPlanStatus('u1', 'ap-bio')

    expect(db.diagnosticTest.findFirst.mock.calls[0][0].where.category).toEqual({ startsWith: 'ap-bio-diagnostic' })
    // High priority first; two legacy slugs on one topic keep the higher priority.
    expect(p.recommendedTopics.map((t) => t.slug)).toEqual(BIO_CANONICAL)
    expect(p.recommendedTopics.find((t) => t.slug === 'cell-signaling')!.priority).toBe('high')
    expect(p.recommendedTopics.find((t) => t.slug === 'cell-signaling')!.name).toBe('Cell Signaling and Signal Transduction')
    for (const t of p.recommendedTopics) expect(allowed('ap-biology').has(t.slug), t.slug).toBe(true)
    expect(p.pendingTopics).toEqual([])
    expect(p.unitTest).toMatchObject({
      course: 'ap-bio', available: true, passed: false, locksDiagnostic: false,
      path: '/cycle-test/ap-bio', testName: 'cycle test', questionCount: 25, passPercent: 75,
    })
    expect(db.mcatUnitTest.findMany.mock.calls[0][0].where).toEqual({ userId: 'u1', diagnosticId: 'bio-diag' })
  })

  it('AP: test listed but not available while a topic is pending', async () => {
    db.diagnosticTest.findFirst.mockResolvedValue({ id: 'chem-diag', createdAt: DIAG_AT, results: CHEM_RESULTS })
    db.exitQuizAttempt.findMany.mockImplementation(exitAttempts(['periodic-trends']))
    const p = await mod.buildGenericPlanStatus('u1', 'ap-chem')
    expect(p.pendingTopics.map((t) => t.slug)).toEqual(['periodic-trends'])
    expect(p.unitTest).toMatchObject({ available: false, course: 'ap-chem' })
  })

  it('a course without a cycle test gets none; an unknown key has no plan', async () => {
    db.diagnosticTest.findFirst.mockResolvedValue({ id: 'alg', createdAt: DIAG_AT, results: { recommendedTopics: [{ slug: 'linear-equations', name: 'x' }] } })
    expect((await mod.buildGenericPlanStatus('u1', 'algebra1')).unitTest).toBeNull()
    db.diagnosticTest.findFirst.mockClear()
    expect((await mod.buildGenericPlanStatus('u1', 'nope')).hasDiagnostic).toBe(false)
    expect(db.diagnosticTest.findFirst).not.toHaveBeenCalled()
  })

  it('ACT unchanged: act-diagnostic prefix, no slug remapping, ACT unit test, retake = plan cleared', async () => {
    const results = { recommendedTopics: [
      { slug: 'act-trigonometry-act', name: 'Trig', priority: 'medium' },
      { slug: 'atomic-structure', name: 'Not remapped', priority: 'high' },
      { slug: 'act-trigonometry-act', name: 'Trig again', priority: 'high' },
    ] }
    db.diagnosticTest.findFirst.mockResolvedValue({ id: 'act-diag', createdAt: DIAG_AT, results })
    db.exitQuizAttempt.findMany.mockImplementation(exitAttempts(['atomic-structure']))
    const p = await mod.buildActPlanStatus('u1')
    expect(db.diagnosticTest.findFirst.mock.calls[0][0].where.category).toEqual({ startsWith: 'act-diagnostic' })
    expect(p.recommendedTopics.map((t) => [t.slug, t.name, t.priority])).toEqual([
      ['act-trigonometry-act', 'Trig again', 'high'],
      ['atomic-structure', 'Not remapped', 'high'],
    ])
    expect(p.canRetakeDiagnostic).toBe(false)
    expect(p.unitTest).toMatchObject({ course: 'act', path: '/act-unit-test', testName: 'unit test', available: false, locksDiagnostic: false })
    expect(p.summary).toEqual({ totalRecommended: 2, completed: 1, pending: 1 })
  })
})

describe('GET /api/study-plan/plan-status', () => {
  let GET: typeof import('@/app/api/study-plan/plan-status/route').GET
  beforeAll(async () => {
    ;({ GET } = await import('@/app/api/study-plan/plan-status/route'))
  }, 60_000)

  const attempts = [
    { id: 'chem-diag', category: 'ap-chem-diagnostic-2', results: CHEM_RESULTS, createdAt: DIAG_AT },
    { id: 'alg-diag', category: 'algebra1-diagnostic', results: { recommendedTopics: [{ slug: 'linear-equations', name: 'Linear', priority: 'high' }] }, createdAt: DIAG_AT },
  ]

  it('an AP plan exposes its cycle test after a diagnostic, with the retake open', async () => {
    db.diagnosticTest.findMany.mockResolvedValue(attempts)
    db.topicProgress.findMany.mockResolvedValue([])
    db.exitQuizAttempt.findMany.mockImplementation(exitAttempts(['linear-equations']))
    const body = await (await GET()).json()
    const chem = body.plans.find((p: { courseKey: string }) => p.courseKey === 'ap-chem')
    expect(chem.summary.pending).toBe(0)
    expect(chem.canRetakeDiagnostic).toBe(true)
    expect(chem.unitTest).toMatchObject({ course: 'ap-chem', available: true, passed: false, locksDiagnostic: false, path: '/cycle-test/ap-chem', testName: 'cycle test' })
    expect(db.mcatUnitTest.findMany).toHaveBeenCalledWith(expect.objectContaining({ where: { userId: 'u1', diagnosticId: 'chem-diag' } }))
    // Non-AP generic courses get no test.
    expect(body.plans.find((p: { courseKey: string }) => p.courseKey === 'algebra1').unitTest).toBeNull()
  })

  it('no retake gate while topics are pending: the diagnostic stays open, the test is not yet available', async () => {
    db.diagnosticTest.findMany.mockResolvedValue(attempts.slice(0, 1))
    db.exitQuizAttempt.findMany.mockImplementation(exitAttempts(['gibbs-free-energy', 'ideal-gas-law']))
    const chem = (await (await GET()).json()).plans[0]
    expect(chem.summary.pending).toBe(2)
    expect(chem.canRetakeDiagnostic).toBe(true)
    expect(chem.unitTest).toMatchObject({ available: false })
  })

  it('canonicalizes stored legacy AP slugs before attaching the test', async () => {
    db.diagnosticTest.findMany.mockResolvedValue([{ id: 'bio-diag', category: 'ap-bio-diagnostic-1', results: BIO_RESULTS, createdAt: DIAG_AT }])
    const bio = (await (await GET()).json()).plans[0]
    expect(bio.topics.map((t: { slug: string }) => t.slug).sort()).toEqual([...BIO_CANONICAL].sort())
    expect(bio.unitTest).toMatchObject({ course: 'ap-bio', available: true })
  })
})

describe('/api/cycle-test/[course]', () => {
  let routes: {
    status: typeof import('@/app/api/cycle-test/[course]/route').GET
    start: typeof import('@/app/api/cycle-test/[course]/start/route').POST
    submit: typeof import('@/app/api/cycle-test/[course]/submit/route').POST
  }
  beforeAll(async () => {
    routes = {
      status: (await import('@/app/api/cycle-test/[course]/route')).GET,
      start: (await import('@/app/api/cycle-test/[course]/start/route')).POST,
      submit: (await import('@/app/api/cycle-test/[course]/submit/route')).POST,
    }
  }, 60_000)
  const ctx = (course: string) => ({ params: Promise.resolve({ course }) })
  const req = (body?: unknown) => new Request('http://x/api/cycle-test/x', { method: 'POST', body: body === undefined ? undefined : JSON.stringify(body) })

  it('404s for MCAT/SAT/ACT (own routes) and unknown keys', async () => {
    for (const k of ['mcat', 'sat', 'act', 'algebra1', 'bogus']) {
      expect((await routes.status(req(), ctx(k))).status).toBe(404)
      expect((await routes.start(req(), ctx(k))).status).toBe(404)
    }
  })

  it('status: the cycle test for the latest AP diagnostic', async () => {
    db.diagnosticTest.findFirst.mockResolvedValue({ id: 'chem-diag', createdAt: DIAG_AT, results: CHEM_RESULTS })
    const body = await (await routes.status(req(), ctx('ap-chem'))).json()
    expect(body).toMatchObject({ hasPlan: true, diagnosticId: 'chem-diag', canRetakeDiagnostic: true, unitTest: { available: true, testName: 'cycle test' } })
    expect(body.topics.map((t: { slug: string }) => t.slug)).toEqual(CHEM_TOPICS)
  })

  it('start: closed while a topic is pending', async () => {
    db.diagnosticTest.findFirst.mockResolvedValue({ id: 'chem-diag', createdAt: DIAG_AT, results: CHEM_RESULTS })
    db.exitQuizAttempt.findMany.mockImplementation(exitAttempts(['periodic-trends']))
    const res = await routes.start(req(), ctx('ap-chem'))
    expect(res.status).toBe(409)
    expect((await res.json()).pending).toEqual(['periodic-trends'])
  })

  it('start: 25 questions drawn only from the canonical production topics (legacy stored slugs included)', async () => {
    db.diagnosticTest.findFirst.mockResolvedValue({ id: 'bio-diag', createdAt: DIAG_AT, results: BIO_RESULTS })
    const res = await routes.start(req(), ctx('ap-bio'))
    expect(res.status).toBe(200)
    const body = await res.json()
    expect(body.questions).toHaveLength(25)
    // No keys before submit.
    expect(body.questions.every((q: Record<string, unknown>) => !('correctIndex' in q) && !('explanation' in q))).toBe(true)
    const created = db.mcatUnitTest.create.mock.calls[0][0].data
    expect(created.diagnosticId).toBe('bio-diag')
    expect(created.topicSlugs).toEqual(BIO_CANONICAL)
    const ok = allowed('ap-biology')
    for (const q of created.questions as { topicSlug: string }[]) expect(ok.has(q.topicSlug), q.topicSlug).toBe(true)
    expect(new Set((created.questions as { topicSlug: string }[]).map((q) => q.topicSlug))).toEqual(new Set(BIO_CANONICAL))
  })

  it('submit: grades, logs a UnitTestAttempt + UNIT_TEST assignment completion and per-question answer-log rows for the AP course', async () => {
    const questions = [
      { id: 'a', question: 'Q1', options: ['w', 'x', 'y', 'z'], correctIndex: 1, explanation: 'e', topicSlug: 'gibbs-free-energy' },
      { id: 'b', question: 'Q2', options: ['w', 'x', 'y', 'z'], correctIndex: 3, explanation: 'e', topicSlug: 'periodic-trends' },
    ]
    db.mcatUnitTest.findUnique.mockResolvedValue({ userId: 'u1', questions, completedAt: null, startedAt: new Date(), diagnosticId: 'chem-diag' })
    db.mcatUnitTest.updateMany.mockResolvedValue({ count: 1 })
    const res = await routes.submit(req({ id: 'sit-ap', answers: [1, 0], timeSpent: 90 }), ctx('ap-chem'))
    expect(res.status).toBe(200)
    expect(await res.json()).toMatchObject({ correct: 1, total: 2, percentage: 50, passed: false, passPercent: 75 })

    expect(db.unitTestAttempt.create.mock.calls[0][0].data).toMatchObject({
      userId: 'u1', courseSlug: 'ap-chemistry', unitId: 'ap-chem-cycle-chem-diag', unitTitle: 'AP Chemistry cycle test (recommended topics)', correct: 1, total: 2,
    })
    expect(mockComplete).toHaveBeenCalledWith({ userId: 'u1', type: 'UNIT_TEST', courseSlug: 'ap-chemistry', unitId: 'ap-chem-cycle-chem-diag', score: 0.5 })
    const rows = db.questionActivity.createMany.mock.calls.flatMap((c) => (c[0] as { data: Record<string, unknown>[] }).data)
    expect(rows.map((r) => [r.source, r.courseSlug, r.topicSlug, r.correct, r.attemptKind, r.attemptId])).toEqual([
      ['UNIT_TEST', 'ap-chemistry', 'gibbs-free-energy', 1, 'unit-test', 'sit-ap'],
      ['UNIT_TEST', 'ap-chemistry', 'periodic-trends', 0, 'unit-test', 'sit-ap'],
    ])
  })
})

describe('review and teacher views', () => {
  it('the review page names the AP cycle test and links back to it', async () => {
    const { resolveAttempt } = await import('@/lib/question-resolver')
    db.mcatUnitTest.findFirst.mockResolvedValue({
      id: 'sit-ap', userId: 'u1', diagnosticId: 'chem-diag', questions: [{ id: 'a', question: 'Q', options: ['a', 'b'], correctIndex: 0, explanation: '', topicSlug: 'gibbs-free-energy' }],
      answers: [0], correct: 1, total: 1, percentage: 100, passed: true, startedAt: DIAG_AT, completedAt: DIAG_AT,
    })
    db.diagnosticTest.findUnique.mockResolvedValue({ category: 'ap-chem-diagnostic-2' })
    const r = await resolveAttempt('unit-test', 'sit-ap', 'u1')
    expect(r).toMatchObject({ course: 'ap-chemistry', title: 'AP Chemistry cycle test', backHref: '/cycle-test/ap-chem' })
    // MCAT sittings keep their old labels.
    db.diagnosticTest.findUnique.mockResolvedValue({ category: 'mcat-full-diagnostic' })
    db.mcatUnitTest.findFirst.mockResolvedValueOnce({
      id: 'm', userId: 'u1', diagnosticId: 'm-diag', questions: [{ id: 'a', question: 'Q', options: ['a', 'b'], correctIndex: 0, explanation: '', topicSlug: 'mcat-x' }],
      answers: [0], correct: 1, total: 1, percentage: 100, passed: true, startedAt: DIAG_AT, completedAt: DIAG_AT,
    })
    expect(await resolveAttempt('unit-test', 'm', 'u1')).toMatchObject({ course: 'mcat', title: 'MCAT unit test', backHref: '/mcat-unit-test' })
  }, 60_000)

  it('the Engagement tab numbers AP cycles per course', async () => {
    const { loadClassUnitTests } = await import('@/lib/class-unit-tests')
    db.mcatUnitTest.findMany.mockResolvedValue([
      { id: 'u1', userId: 'a', diagnosticId: 'c2', topicSlugs: CHEM_TOPICS, correct: 20, total: 25, percentage: 80, passed: true, completedAt: DIAG_AT },
    ])
    db.diagnosticTest.findMany.mockResolvedValue([
      { id: 'c1', userId: 'a', category: 'ap-chem-diagnostic-1' },
      { id: 'b1', userId: 'a', category: 'ap-bio-diagnostic-1' },
      { id: 'c2', userId: 'a', category: 'ap-chem-diagnostic-2' },
    ])
    const out = await loadClassUnitTests(['a'])
    expect(out.get('a')).toEqual([expect.objectContaining({ course: 'AP Chemistry', cycle: 2, lessons: 5 })])
    const cats = db.diagnosticTest.findMany.mock.calls[0][0].where.OR.map((o: { category: { startsWith: string } }) => o.category.startsWith)
    expect(cats).toEqual(expect.arrayContaining(['ap-chem-diagnostic', 'ap-bio-diagnostic', 'calcab-diagnostic', 'ap-aas-diagnostic', 'mcat-full-diagnostic']))
  })
})

describe('pools: every topic an AP diagnostic can recommend', () => {
  it('is a canonical production topic with at least 15 exit-pool items (5 per sitting, 3 clean sittings)', async () => {
    const { canonicalApTopicSlug } = await import('@/lib/ap-topic-canonical')
    const { courseForCategory } = await import('@/lib/class-plan-config')
    const { AP_UNIT_TEST_COURSES } = await import('@/lib/unit-test-courses')
    const { generateExitQuiz, hasExitQuiz } = await import('@/data/exit-quizzes')
    const covered = new Set<string>()
    const thin: string[] = []
    for (const d of AP_DIAGNOSTICS) {
      const key = courseForCategory(`${d.categoryPrefix}-1`)!.key
      covered.add(key)
      const ok = allowed(d.course)
      const slugs = new Set<string>()
      for (const dom of d.domains) for (const s of dom.topicSlugs) slugs.add(canonicalApTopicSlug(d.course, s))
      for (let f = 1; f <= d.forms; f++) for (const q of d.generate(f).questions) slugs.add(canonicalApTopicSlug(d.course, q.topicSlug))
      for (const s of slugs) {
        expect(ok.has(s), `${d.course}: ${s} is not a production topic`).toBe(true)
        const n = hasExitQuiz(s) ? (await generateExitQuiz(s, 150, undefined, undefined, { includeLowYield: false })).length : 0
        if (n < 15) thin.push(`${d.course}: ${s} (${n})`)
      }
    }
    expect(thin).toEqual([])
    expect([...covered].sort()).toEqual([...AP_UNIT_TEST_COURSES].sort())
  }, 120_000)
})
