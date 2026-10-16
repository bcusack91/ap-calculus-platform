/**
 * AP per-unit tests end to end, over an in-memory Prisma: the attempt route
 * logs one UNIT_TEST row per question (attemptKind 'unit-test', attemptId =
 * the UnitTestAttempt id, chosen index in the shown order, chosen option key),
 * graded on the server; the resolver rebuilds the attempt for
 * /review/unit-test/<id>; the misses land in the AP mistake log filed by CED
 * unit and retire after two correct re-quiz answers; and an AP question-bank
 * set serves exit-pool questions without their keys.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'
import slugsByCourse from '../fixtures/ap-lesson-topic-slugs.json'
import { optionKey, questionKey } from '@/lib/question-key'
import { diagnosticItemKey } from '@/lib/ap-topic-canonical'
import { AP_CHEMISTRY_UNIT_TESTS_CONFIG } from '@/data/unit-tests/ap-chemistry'
import { apChemQuestionPool } from '@/data/exit-quizzes/ap-chemistry'
import { generateShownUnitTest } from '@/lib/unit-tests/engine'

type Row = Record<string, unknown>
const db = { attempts: [] as Row[], activity: [] as Row[], sessions: [] as Row[], seq: 0 }

function matches(row: Row, where: Row): boolean {
  return Object.entries(where).every(([k, cond]) => {
    const v = row[k]
    if (cond && typeof cond === 'object' && !Array.isArray(cond) && !(cond instanceof Date)) {
      const c = cond as Row
      if ('in' in c) return (c.in as unknown[]).includes(v)
      if ('startsWith' in c) return typeof v === 'string' && v.startsWith(c.startsWith as string)
      if ('not' in c) return c.not === null ? v !== null && v !== undefined : v !== c.not
    }
    return v === cond
  })
}
const clone = <T,>(v: T): T => JSON.parse(JSON.stringify(v), (k, val) => (['startedAt', 'completedAt', 'answeredAt'].includes(k) && typeof val === 'string' ? new Date(val) : val))

const mockAuth = vi.fn()
vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))
vi.mock('@/lib/study-context', () => ({ getActiveStudyContext: vi.fn(async () => 'personal'), isClassContext: () => false }))
vi.mock('@/lib/assignment-autocomplete', () => ({ recordCourseWorkCompletion: vi.fn(async () => undefined) }))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    unitTestAttempt: {
      create: async ({ data }: { data: Row }) => {
        const row = { id: `uta${++db.seq}`, completedAt: new Date('2026-10-16T12:00:00Z'), ...data }
        db.attempts.push(row)
        return { id: row.id }
      },
      findFirst: async ({ where }: { where: Row }) => {
        const r = db.attempts.find((a) => matches(a, where))
        return r ? clone(r) : null
      },
    },
    mcatUnitTest: { findFirst: async () => null },
    questionActivity: {
      findMany: async ({ where }: { where: Row }) =>
        db.activity.filter((r) => matches(r, where)).sort((a, b) => (a.answeredAt as Date).getTime() - (b.answeredAt as Date).getTime()).map((r) => ({ ...r })),
      findFirst: async ({ where }: { where: Row }) => db.activity.find((r) => matches(r, where)) ?? null,
      createMany: async ({ data }: { data: Row[] }) => {
        for (const d of data) db.activity.push({ answeredAt: new Date(Date.now() + db.activity.length), flagged: false, chosenText: null, ...d })
        return { count: data.length }
      },
    },
    qbankSession: {
      create: async ({ data }: { data: Row }) => {
        const row = { id: `qs${++db.seq}`, startedAt: new Date(), completedAt: null, correct: null, ...data }
        db.sessions.push(row)
        return clone(row)
      },
      findFirst: async ({ where }: { where: Row }) => {
        const r = db.sessions.find((s) => matches(s, where))
        return r ? clone(r) : null
      },
      findMany: async ({ where }: { where: Row }) => db.sessions.filter((s) => matches(s, where)).map(clone),
    },
    user: { findUnique: vi.fn(async () => ({ lessonIncludeLowYield: false, studyContext: 'personal' })) },
    topic: { findMany: vi.fn(async () => []), findUnique: vi.fn(async () => null) },
  },
}))

const { POST: attemptPOST } = await import('@/app/api/unit-tests/attempt/route')
const { GET: reviewGET } = await import('@/app/api/review/[kind]/[id]/route')
const { GET: mistakesGET } = await import('@/app/api/mistakes/route')
const { POST: sessionPOST } = await import('@/app/api/mistakes/session/route')
const { POST: answerPOST } = await import('@/app/api/mistakes/answer/route')
const { POST: qbankPOST } = await import('@/app/api/qbank/route')

const post = (body: unknown) => new NextRequest('http://localhost/x', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
const CHEM_TOPICS = new Set((slugsByCourse as Record<string, string[]>)['ap-chemistry'])

// AP Chemistry, Unit 5 (Kinetics), version 2, exactly as the page shows it.
const UNIT = AP_CHEMISTRY_UNIT_TESTS_CONFIG.units.find((u) => u.id === 'kinetics')!
const SHOWN = generateShownUnitTest(AP_CHEMISTRY_UNIT_TESTS_CONFIG, UNIT.id, 2)
// Right on even positions, wrong on odd ones, the last one skipped.
const ANSWERS: (number | null)[] = SHOWN.questions.map((q, i) =>
  i === SHOWN.questions.length - 1 ? null : i % 2 === 0 ? q.correctAnswer : (q.correctAnswer + 1) % q.options.length,
)
const RIGHT = ANSWERS.filter((a, i) => a === SHOWN.questions[i].correctAnswer).length

async function takeTest(over: Row = {}) {
  const res = await attemptPOST(post({
    courseSlug: 'ap-chemistry', unitId: UNIT.id, unitTitle: UNIT.name, variant: 2,
    // A tampered client count: the server grades it itself.
    correct: SHOWN.questions.length, total: SHOWN.questions.length, timeSpent: 240,
    answers: ANSWERS, stems: SHOWN.questions.map((q) => diagnosticItemKey(q.question)),
    ...over,
  }))
  expect(res.status).toBe(200)
  return (await res.json()).id as string
}

beforeEach(() => {
  db.attempts = []
  db.activity = []
  db.sessions = []
  db.seq = 0
  mockAuth.mockResolvedValue({ user: { id: 'u1' } })
})

describe('POST /api/unit-tests/attempt (AP)', () => {
  it('logs one UNIT_TEST row per question, tagged for review and the mistake log, and stores the server grade', async () => {
    const id = await takeTest()
    expect(db.attempts[0]).toMatchObject({ courseSlug: 'ap-chemistry', unitId: 'kinetics', variant: 2, correct: RIGHT, total: SHOWN.questions.length })
    const rows = db.activity.filter((r) => r.attemptId === id)
    expect(rows).toHaveLength(SHOWN.questions.length)
    rows.forEach((r, i) => {
      const q = SHOWN.questions[i]
      expect(r).toMatchObject({
        source: 'UNIT_TEST', courseSlug: 'ap-chemistry', attemptKind: 'unit-test', itemIndex: i,
        questionKey: questionKey({ question: q.question, options: q.options, correctIndex: q.correctAnswer }),
        correct: ANSWERS[i] === q.correctAnswer ? 1 : 0,
        discipline: 'Unit 5: Kinetics',
        durationMs: Math.round(240_000 / SHOWN.questions.length),
      })
      expect(CHEM_TOPICS.has(r.topicSlug as string), String(r.topicSlug)).toBe(true)
      if (ANSWERS[i] === null) {
        expect(r.chosenIndex).toBeUndefined()
        expect(r.chosenKey).toBeUndefined()
      } else {
        expect(r.chosenIndex).toBe(ANSWERS[i])
        expect(r.chosenKey).toBe(optionKey(q.options[ANSWERS[i]!]))
      }
    })
  })

  it('logs nothing per question for a non-AP course or an old client, and keeps the client count then', async () => {
    await takeTest({ courseSlug: 'sat-prep', unitId: 'sat-math-algebra', correct: 3, total: 10 })
    await takeTest({ answers: undefined, stems: undefined, correct: 4, total: SHOWN.questions.length })
    expect(db.activity).toHaveLength(0)
    expect(db.attempts.map((a) => a.correct)).toEqual([3, 4])
  })
})

describe('review and mistake log over an AP per-unit test', () => {
  it('rebuilds the attempt for /review/unit-test/<id>, owner only', async () => {
    const id = await takeTest()
    const res = await reviewGET(new Request('http://localhost'), { params: Promise.resolve({ kind: 'unit-test', id }) })
    expect(res.status).toBe(200)
    const { attempt } = await res.json()
    expect(attempt).toMatchObject({ kind: 'unit-test', course: 'ap-chemistry', backHref: '/ap-chem-unit-tests', score: { correct: RIGHT, total: SHOWN.questions.length } })
    expect(attempt.title).toContain('Unit 5: Kinetics')
    expect(attempt.items.map((i: Row) => i.question)).toEqual(SHOWN.questions.map((q) => q.question))
    expect(attempt.items.map((i: Row) => i.options)).toEqual(SHOWN.questions.map((q) => q.options))
    expect(attempt.items.map((i: Row) => i.correctIndex)).toEqual(SHOWN.questions.map((q) => q.correctAnswer))
    expect(attempt.items.map((i: Row) => i.chosenIndex)).toEqual(ANSWERS)
    expect(attempt.items.some((i: Row) => i.revised)).toBe(false)
    mockAuth.mockResolvedValue({ user: { id: 'u2' } })
    expect((await reviewGET(new Request('http://localhost'), { params: Promise.resolve({ kind: 'unit-test', id }) })).status).toBe(404)
  })

  it('lists the misses filed by CED unit; a re-quiz without keys retires one after two correct answers', async () => {
    const id = await takeTest()
    const missed = ANSWERS.map((a, i) => (a === SHOWN.questions[i].correctAnswer ? -1 : i)).filter((i) => i >= 0)
    const list = await (await mistakesGET(new NextRequest('http://localhost/api/mistakes?course=ap-chemistry'))).json()
    expect(list.total).toBe(missed.length)
    expect(list.filters.sections).toEqual(['Unit 5: Kinetics'])
    expect(list.filters.sources).toEqual(['UNIT_TEST'])
    expect(list.items.every((m: Row) => m.reviewHref === `/review/unit-test/${id}`)).toBe(true)
    // The unit filter narrows; another unit is empty.
    expect((await (await mistakesGET(new NextRequest('http://localhost/api/mistakes?course=ap-chemistry&section=Unit%201%3A%20Atomic%20Structure%20and%20Properties'))).json()).items).toHaveLength(0)

    const newSession = async () => (await (await sessionPOST(post({ course: 'ap-chemistry', section: 'Unit 5: Kinetics' }))).json())
    const sess = await newSession()
    expect(sess.items).toHaveLength(missed.length)
    for (const it of sess.items) {
      expect(it).not.toHaveProperty('correctIndex')
      expect(it).not.toHaveProperty('explanation')
    }
    const target = sess.items[0]
    const q = SHOWN.questions[target.origin.itemIndex]
    const answer = (s: { sessionId: string }, chosenIndex: number) =>
      answerPOST(post({ course: 'ap-chemistry', sessionId: s.sessionId, position: 0, questionKey: target.questionKey, origin: target.origin, chosenIndex }))
    const first = await (await answer(sess, q.correctAnswer)).json()
    expect(first).toMatchObject({ correct: true, correctSince: 1, retired: false })
    const second = await (await answer(await newSession(), q.correctAnswer)).json()
    expect(second).toMatchObject({ correct: true, correctSince: 2, retired: true })
    const after = await (await mistakesGET(new NextRequest('http://localhost/api/mistakes?course=ap-chemistry'))).json()
    expect(after.total).toBe(missed.length - 1)
    expect(db.activity.filter((r) => r.source === 'MISTAKE_REVIEW').every((r) => r.courseSlug === 'ap-chemistry')).toBe(true)
  })
})

describe('AP question bank session', () => {
  it('serves exit-pool AP Chemistry questions with production topics, at exam pace, without keys', async () => {
    const res = await qbankPOST(post({ course: 'ap-chemistry', count: 20, mode: 'timed', pool: 'all', sections: ['kinetics', 'equilibrium'] }))
    expect(res.status).toBe(201)
    const { session } = await res.json()
    expect(session.course).toBe('ap-chemistry')
    expect(session.items).toHaveLength(20)
    expect(session.timeLimitSec).toBe(20 * 90)
    expect(JSON.stringify(session)).not.toMatch(/correctIndex|correctAnswer|explanation/)
    const exitStems = new Set(apChemQuestionPool.map((q) => q.question))
    for (const it of session.items) {
      expect(exitStems.has(it.question)).toBe(true)
      expect(['kinetics', 'equilibrium']).toContain(it.section)
      expect(CHEM_TOPICS.has(it.topicSlug), it.topicSlug).toBe(true)
    }
    expect((await qbankPOST(post({ course: 'ap-chem', count: 20, mode: 'timed' }))).status).toBe(400)
  })
})
