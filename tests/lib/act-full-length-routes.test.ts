/**
 * Full-length ACT, end to end over the routes with an in-memory database:
 * the submit route grades on the server from the registry (client scores are
 * ignored) and writes act-fl answer-log rows; /api/review/act-fl/<id>
 * rebuilds the sitting; the ACT mistake log picks up its misses and re-quizzes
 * them; the outside-score route accepts ACT composites with the prediction;
 * the ACT goal reads the newest score.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'
import { fixtureForm } from '../fixtures/act-fl-fixture'

const FORM = fixtureForm(1)
const mockAuth = vi.fn()
vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))
vi.mock('@/lib/study-context', () => ({ getActiveStudyContext: vi.fn(async () => 'personal'), isClassContext: () => false }))
vi.mock('@/data/act-practice/full-length', async (orig) => ({
  ...(await orig<typeof import('@/data/act-practice/full-length')>()),
  getActForm: async (n: unknown) => (n === 1 ? FORM : null),
}))

type Row = Record<string, unknown>
let tests: Row[] = []
let log: Row[] = []
let external: Row[] = []
let seq = 0

const matchResultsPath = (r: Row, where: Row) => {
  const res = where.results as { path?: string[]; equals?: unknown } | undefined
  if (!res?.path) return true
  return (r.results as Row)?.[res.path[0]] === res.equals
}
const db = {
  diagnosticTest: {
    create: vi.fn(async ({ data }: { data: Row }) => {
      const row = { id: `d${++seq}`, createdAt: new Date(Date.now() + seq), ...data }
      tests.push(row)
      return row
    }),
    findFirst: vi.fn(async ({ where }: { where: Row }) =>
      tests.find((t) => t.userId === where.userId && (!where.id || t.id === where.id) && (!where.category || t.category === where.category) && matchResultsPath(t, where)) ?? null,
    ),
    findMany: vi.fn(async ({ where }: { where: Row }) =>
      tests
        .filter((t) => t.userId === where.userId && (typeof where.category === 'string' ? t.category === where.category : String(t.category).startsWith((where.category as { startsWith: string }).startsWith)))
        .sort((a, b) => (b.createdAt as Date).getTime() - (a.createdAt as Date).getTime()),
    ),
  },
  questionActivity: {
    findMany: vi.fn(async ({ where }: { where: Row }) =>
      log
        .filter((r) => r.userId === where.userId)
        .filter((r) => (where.courseSlug ? r.courseSlug === where.courseSlug : true))
        .filter((r) => (where.attemptId ? r.attemptId === where.attemptId : true))
        .filter((r) => {
          const qk = where.questionKey as { in?: string[]; startsWith?: string } | undefined
          if (!qk) return true
          if (qk.in) return qk.in.includes(r.questionKey as string)
          return String(r.questionKey).startsWith(qk.startsWith ?? '')
        })
        .sort((a, b) => (a.answeredAt as Date).getTime() - (b.answeredAt as Date).getTime()),
    ),
    findFirst: vi.fn(async ({ where }: { where: Row }) =>
      log.find((r) => r.userId === where.userId && r.attemptKind === where.attemptKind && r.attemptId === where.attemptId && r.itemIndex === where.itemIndex) ?? null,
    ),
    createMany: vi.fn(async ({ data }: { data: Row[] }) => {
      for (const d of data) log.push({ answeredAt: new Date(), flagged: false, chosenText: null, ...d })
      return { count: data.length }
    }),
  },
  topic: {
    findMany: vi.fn(async () => [{ slug: 'act-reading-main-ideas-act', title: 'Main Ideas & Inferences' }]),
    findUnique: vi.fn(async () => null),
  },
  externalExamScore: {
    create: vi.fn(async ({ data }: { data: Row }) => {
      const row = { id: `x${++seq}`, ...data }
      external.push(row)
      return row
    }),
    findFirst: vi.fn(async ({ where }: { where: Row }) =>
      external.filter((e) => e.userId === where.userId && e.course === where.course).sort((a, b) => (b.takenAt as Date).getTime() - (a.takenAt as Date).getTime())[0] ?? null,
    ),
    findMany: vi.fn(async () => external),
  },
}
vi.mock('@/lib/prisma', () => ({ prisma: db }))

const { POST: submitPOST } = await import('@/app/api/act-full-length/submit/route')
const { GET: historyGET } = await import('@/app/api/act-full-length/history/route')
const { GET: attemptGET } = await import('@/app/api/act-full-length/attempts/[id]/route')
const { GET: formGET } = await import('@/app/api/act-full-length/form/[form]/route')
const { GET: reviewGET } = await import('@/app/api/review/[kind]/[id]/route')
const { GET: mistakesGET } = await import('@/app/api/mistakes/route')
const { POST: sessionPOST } = await import('@/app/api/mistakes/session/route')
const { POST: answerPOST } = await import('@/app/api/mistakes/answer/route')
const { POST: scorePOST } = await import('@/app/api/exam-scores/route')
const { currentScoreFor } = await import('@/lib/exam-goal-server')
const { actFlSlots } = await import('@/lib/question-sources/act')

const post = (url: string, body: unknown) =>
  new NextRequest(`http://localhost${url}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })

/** Every question right, except the first `wrong` Reading questions (picked +1) and all of Math question 1 (skipped). */
function sitting(includeScience: boolean, wrong = 3) {
  const answers: Record<string, number> = {}
  const reading = FORM.reading[0].questions.slice(0, wrong).map((q) => q.id)
  for (const s of actFlSlots(FORM, includeScience)) {
    if (s.question.id === FORM.math[0].id) continue
    answers[s.question.id] = reading.includes(s.question.id) ? (s.question.correctIndex + 1) % 4 : s.question.correctIndex
  }
  return { answers, reading }
}

beforeEach(() => {
  tests = []
  log = []
  external = []
  seq = 0
  vi.clearAllMocks()
  mockAuth.mockResolvedValue({ user: { id: 'u1' } })
})

describe('POST /api/act-full-length/submit', () => {
  it('grades on the server by question id, ignoring client scores, and stores the sitting', async () => {
    const { answers, reading } = sitting(true)
    const flagged = FORM.english[1].questions[2].id
    const res = await submitPOST(post('/api/act-full-length/submit', {
      form: 1,
      includeScience: true,
      answers,
      flags: [flagged],
      questionSeconds: { [flagged]: 40 },
      sectionSeconds: { english: 2000, math: 9999, reading: 2300, science: 2100 },
      composite: 36, // tampered: ignored
      clientAttemptId: 'attempt-0001',
    }))
    const body = await res.json()
    expect(res.status).toBe(200)
    expect(body.id).toBe('d1')
    const stored = tests[0]
    expect(stored.category).toBe('act-full-length')
    const r = stored.results as Row
    expect(r.correct).toBe(171 - reading.length - 1)
    expect(r.total).toBe(171)
    const sections = r.sections as { section: string; correct: number; total: number; elapsedSeconds?: number }[]
    expect(sections.map((s) => [s.section, s.correct, s.total])).toEqual([['english', 50, 50], ['math', 44, 45], ['reading', 33, 36], ['science', 40, 40]])
    expect(sections[1].elapsedSeconds).toBe(50 * 60 + 60) // clamped to the clock (+ slack)
    expect(typeof r.composite).toBe('number')
    expect((r.stem as Row).score).toBeGreaterThan(30)
    expect(r.flags).toEqual([flagged])
    // One act-fl row per question.
    expect(log).toHaveLength(171)
    expect(log.every((l) => l.attemptKind === 'act-fl' && l.attemptId === 'd1' && l.courseSlug === 'act-prep' && l.source === 'FULL_LENGTH')).toBe(true)
    expect(log.filter((l) => l.correct === 0)).toHaveLength(4)
    expect(log.find((l) => l.flagged)?.durationMs).toBe(40_000)
  })

  it('returns the stored sitting on a retried submit (same clientAttemptId)', async () => {
    const { answers } = sitting(false)
    const body = { form: 1, includeScience: false, answers, clientAttemptId: 'attempt-retry-1' }
    const a = await (await submitPOST(post('/api/act-full-length/submit', body))).json()
    const b = await (await submitPOST(post('/api/act-full-length/submit', body))).json()
    expect(b).toMatchObject({ id: a.id, duplicate: true })
    expect(tests).toHaveLength(1)
    expect(log).toHaveLength(131)
  })

  it('rejects unknown forms, empty sittings and signed-out students', async () => {
    expect((await submitPOST(post('/x', { form: 3, includeScience: true, answers: { a: 1 } }))).status).toBe(400)
    expect((await submitPOST(post('/x', { form: 1, includeScience: true, answers: { bogus: 1 } }))).status).toBe(400)
    mockAuth.mockResolvedValue(null)
    expect((await submitPOST(post('/x', { form: 1, includeScience: true, answers: {} }))).status).toBe(401)
    expect(tests).toHaveLength(0)
  })
})

describe('results, history and the runner form', () => {
  it('serves results and history only to the owner, and the form without keys', async () => {
    const { answers } = sitting(true)
    const { id } = await (await submitPOST(post('/x', { form: 1, includeScience: true, answers }))).json()
    const mine = await (await attemptGET(new Request('http://localhost'), { params: Promise.resolve({ id }) })).json()
    expect(mine.attempt).toMatchObject({ id, form: 1, includeScience: true, reviewable: true })
    expect(mine.attempt.compositeRange.high - mine.attempt.compositeRange.low).toBe(2)
    const hist = await (await historyGET()).json()
    expect(hist.attempts).toHaveLength(1)
    expect(hist.attempts[0].sections.map((s: Row) => s.section)).toEqual(['english', 'math', 'reading', 'science'])
    mockAuth.mockResolvedValue({ user: { id: 'u2' } })
    expect((await attemptGET(new Request('http://localhost'), { params: Promise.resolve({ id }) })).status).toBe(404)
    const formRes = await (await formGET(new Request('http://localhost'), { params: Promise.resolve({ form: '1' }) })).json()
    expect(JSON.stringify(formRes.form)).not.toMatch(/correctIndex|explanation/)
    expect((await formGET(new Request('http://localhost'), { params: Promise.resolve({ form: '2' }) })).status).toBe(404)
  })
})

describe('review + ACT mistake log', () => {
  it('rebuilds the sitting at /api/review/act-fl/<id> and feeds the ACT mistake log', async () => {
    const { answers, reading } = sitting(false)
    const flagged = FORM.english[0].questions[4].id
    const { id } = await (await submitPOST(post('/x', { form: 1, includeScience: false, answers, flags: [flagged] }))).json()

    const review = await (await reviewGET(new Request('http://localhost'), { params: Promise.resolve({ kind: 'act-fl', id }) })).json()
    expect(review.attempt).toMatchObject({ kind: 'act-fl', course: 'act', backHref: '/act-practice/full-length' })
    expect(review.attempt.items).toHaveLength(131)
    expect(review.attempt.items.every((i: Row | null) => i && !i.revised)).toBe(true)
    const missed = review.attempt.items.find((i: Row) => i.chosenIndex !== null && i.chosenIndex !== i.correctIndex)
    expect(missed).toMatchObject({ discipline: 'Reading', skill: 'Key Ideas & Details', topicTitle: 'Main Ideas & Inferences' })
    // The same id under the diagnostic kind is not served.
    expect((await reviewGET(new Request('http://localhost'), { params: Promise.resolve({ kind: 'diagnostic', id }) })).status).toBe(404)

    const ml = await (await mistakesGET(new NextRequest('http://localhost/api/mistakes?course=act'))).json()
    // 3 wrong Reading + 1 skipped Math + 1 flagged English.
    expect(ml.total).toBe(reading.length + 2)
    expect(ml.items.every((m: Row) => m.reviewHref === `/review/act-fl/${id}` && m.source === 'FULL_LENGTH')).toBe(true)
    expect(ml.filters.sections).toEqual(['English', 'Math', 'Reading'])
    const sat = await (await mistakesGET(new NextRequest('http://localhost/api/mistakes?course=sat'))).json()
    expect(sat.total).toBe(0)

    const quiz = await (await sessionPOST(post('/api/mistakes/session', { course: 'act', section: 'Reading' }))).json()
    expect(quiz.items).toHaveLength(reading.length)
    const first = quiz.items[0]
    expect(first.passage?.id).toBe(FORM.reading[0].id)
    const key = FORM.reading[0].questions[0].correctIndex
    const ans = await (await answerPOST(post('/api/mistakes/answer', {
      course: 'act', sessionId: quiz.sessionId, position: 0, questionKey: first.questionKey, origin: first.origin, chosenIndex: key,
    }))).json()
    expect(ans).toMatchObject({ correct: true, correctSince: 1, retired: false })
    expect(log.at(-1)).toMatchObject({ source: 'MISTAKE_REVIEW', courseSlug: 'act-prep', attemptKind: 'mistake-review' })
  })

  it('files ACT exit-quiz misses (no discipline) under their topic section', async () => {
    log.push({ userId: 'u1', courseSlug: 'act-prep', answered: 1, correct: 0, questionKey: 'q:0123456789abcdef', topicSlug: 'act-plane-geometry-act', discipline: '', source: 'EXIT', attemptKind: 'exit', attemptId: 'e1', itemIndex: 0, chosenIndex: 1, flagged: false, chosenText: null, answeredAt: new Date() })
    const ml = await (await mistakesGET(new NextRequest('http://localhost/api/mistakes?course=act'))).json()
    expect(ml.items[0]).toMatchObject({ discipline: 'Math', source: 'EXIT', reviewHref: '/review/exit/e1' })
  })
})

describe('outside ACT scores and the ACT goal', () => {
  it('accepts an ACT composite with section scores, stores the prediction, and labels the official test month', async () => {
    const { answers } = sitting(true)
    await submitPOST(post('/x', { form: 1, includeScience: true, answers }))
    const predicted = (tests[0].results as Row).composite
    const res = await scorePOST(post('/api/exam-scores', {
      course: 'act', source: 'Official ACT', totalScore: 29, takenAt: '2099-01-01',
      sectionScores: { english: 30, math: 28, reading: 29, science: 27, predicted: 1 },
    }))
    expect(res.status).toBe(400) // future date
    const ok = await scorePOST(post('/api/exam-scores', {
      course: 'act', source: 'Official ACT', totalScore: 29, takenAt: new Date(Date.now() + 60_000).toISOString(),
      sectionScores: { english: 30, math: 28, reading: 29, science: 27, predicted: 1 },
    }))
    expect(ok.status).toBe(200)
    const row = external[0]
    expect(row.course).toBe('act')
    expect(String(row.source)).toMatch(/^Official ACT \([A-Z][a-z]{2} \d{4}\)$/)
    // The client's "predicted" is ignored; the server's comes from the full-length.
    expect(row.sectionScores).toEqual({ english: 30, math: 28, reading: 29, science: 27, predicted, predictedFromFullLength: 1 })
  })

  it('rejects out-of-range ACT scores', async () => {
    expect((await scorePOST(post('/x', { course: 'act', source: 'ACT practice test 1', totalScore: 37, takenAt: '2026-04-01' }))).status).toBe(400)
    expect((await scorePOST(post('/x', { course: 'act', source: 'ACT practice test 1', totalScore: 30, takenAt: '2026-04-01', sectionScores: { math: 0 } }))).status).toBe(400)
    expect((await scorePOST(post('/x', { course: 'psat', source: 'x', totalScore: 30, takenAt: '2026-04-01' }))).status).toBe(400)
    expect(external).toHaveLength(0)
  })

  it('measures the ACT goal against the newest full-length or logged score', async () => {
    expect((await currentScoreFor('u1', 'act')).score).toBeNull()
    const { answers } = sitting(true)
    await submitPOST(post('/x', { form: 1, includeScience: true, answers }))
    const fl = await currentScoreFor('u1', 'act')
    expect(fl).toMatchObject({ score: (tests[0].results as Row).composite, source: 'StudyMondo full-length' })
    await scorePOST(post('/x', { course: 'act', source: 'ACT practice test 2', totalScore: 22, takenAt: new Date(Date.now() + 120_000).toISOString() }))
    expect(await currentScoreFor('u1', 'act')).toMatchObject({ score: 22, source: 'ACT practice test 2' })
  })
})
