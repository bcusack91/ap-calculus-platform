/**
 * The permanent review route and the mistake-log routes, end to end over a
 * unit-test sitting (its questions are frozen in the row, so the resolver
 * needs no question banks).
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'
import { optionKey, questionKey } from '@/lib/question-key'

const mockAuth = vi.fn()
vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))
vi.mock('@/lib/study-context', () => ({ getActiveStudyContext: vi.fn(async () => 'personal'), isClassContext: () => false }))

const QS = [
  { id: 'a', question: 'Which enzyme unwinds DNA?', options: ['Ligase', 'Helicase', 'Primase', 'Gyrase'], correctIndex: 1, explanation: 'Helicase unwinds.', topicSlug: 'mcat-molecular-biology-dna-replication-mcat' },
  { id: 'b', question: 'Which enzyme seals nicks?', options: ['Ligase', 'Helicase', 'Primase', 'Gyrase'], correctIndex: 0, explanation: 'Ligase seals.', topicSlug: 'mcat-molecular-biology-dna-replication-mcat' },
]
const KEY_A = questionKey(QS[0])
const KEY_B = questionKey(QS[1])

type Row = Record<string, unknown>
let log: Row[] = []
const db = {
  mcatUnitTest: {
    findFirst: vi.fn(async ({ where }: { where: { id: string; userId: string } }) =>
      where.id === 'ut1' && where.userId === 'u1'
        ? { id: 'ut1', userId: 'u1', questions: QS, answers: [2, 0], correct: 1, total: 2, percentage: 50, passed: false, startedAt: new Date('2026-10-01'), completedAt: new Date('2026-10-01T01:00:00Z') }
        : null,
    ),
  },
  questionActivity: {
    findMany: vi.fn(async ({ where }: { where: Row }) =>
      log
        .filter((r) => r.userId === where.userId)
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
  topic: { findMany: vi.fn(async () => [{ slug: QS[0].topicSlug, title: 'DNA Replication' }]) },
}
vi.mock('@/lib/prisma', () => ({ prisma: db }))

const { GET: reviewGET } = await import('@/app/api/review/[kind]/[id]/route')
const { GET: mistakesGET } = await import('@/app/api/mistakes/route')
const { POST: sessionPOST } = await import('@/app/api/mistakes/session/route')
const { POST: answerPOST } = await import('@/app/api/mistakes/answer/route')

const unitRow = (i: number, chosen: number, correct: boolean, at: string): Row => ({
  userId: 'u1', source: 'UNIT_TEST', courseSlug: 'mcat-prep', topicSlug: QS[i].topicSlug, discipline: '',
  questionKey: i === 0 ? KEY_A : KEY_B, answered: 1, correct: correct ? 1 : 0, chosenIndex: chosen, flagged: false,
  attemptKind: 'unit-test', attemptId: 'ut1', itemIndex: i, answeredAt: new Date(at),
})
const post = (body: unknown) => new NextRequest('http://localhost/x', { method: 'POST', body: JSON.stringify(body) })

beforeEach(() => {
  vi.clearAllMocks()
  mockAuth.mockResolvedValue({ user: { id: 'u1' } })
  log = [unitRow(0, 2, false, '2026-10-01T01:00:00Z'), unitRow(1, 0, true, '2026-10-01T01:00:00Z')]
})

describe('GET /api/review/<kind>/<id>', () => {
  it('rebuilds the student\'s own attempt with their answers', async () => {
    const res = await reviewGET(new Request('http://localhost'), { params: Promise.resolve({ kind: 'unit-test', id: 'ut1' }) })
    const { attempt } = await res.json()
    expect(attempt).toMatchObject({ kind: 'unit-test', course: 'mcat', score: { correct: 1, total: 2 } })
    expect(attempt.items[0]).toMatchObject({ chosenIndex: 2, correctIndex: 1, explanation: 'Helicase unwinds.', questionKey: KEY_A })
    expect(attempt.items[0].revised).toBeUndefined()
  })

  it('refuses other students\' attempts, unknown kinds and signed-out users', async () => {
    mockAuth.mockResolvedValueOnce({ user: { id: 'u2' } })
    expect((await reviewGET(new Request('http://localhost'), { params: Promise.resolve({ kind: 'unit-test', id: 'ut1' }) })).status).toBe(404)
    expect((await reviewGET(new Request('http://localhost'), { params: Promise.resolve({ kind: 'nope', id: 'ut1' }) })).status).toBe(400)
    mockAuth.mockResolvedValueOnce(null)
    expect((await reviewGET(new Request('http://localhost'), { params: Promise.resolve({ kind: 'unit-test', id: 'ut1' }) })).status).toBe(401)
  })

  it('flags a question edited since the attempt', async () => {
    log[0].questionKey = 'q:0000000000000000'
    const { attempt } = await (await reviewGET(new Request('http://localhost'), { params: Promise.resolve({ kind: 'unit-test', id: 'ut1' }) })).json()
    expect(attempt.items[0].revised).toBe(true)
  })
})

describe('mistake log routes', () => {
  it('lists the missed question only, with a link to its attempt', async () => {
    const body = await (await mistakesGET(new NextRequest('http://localhost/api/mistakes?course=mcat'))).json()
    expect(body.total).toBe(1)
    expect(body.items[0]).toMatchObject({ questionKey: KEY_A, reason: 'wrong', topicTitle: 'DNA Replication', reviewHref: '/review/unit-test/ut1', correctSince: 0 })
  })

  it('a re-quiz serves it without the key, grades on the server, and retires it after two correct answers', async () => {
    const newSession = async () => (await (await sessionPOST(post({ course: 'mcat' }))).json())
    const sess = await newSession()
    expect(sess.items).toHaveLength(1)
    expect(sess.items[0]).not.toHaveProperty('correctIndex')
    expect(sess.items[0]).not.toHaveProperty('explanation')
    const answer = (s: { sessionId: string; items: { origin: unknown }[] }, chosenIndex: number) =>
      answerPOST(post({ course: 'mcat', sessionId: s.sessionId, position: 0, questionKey: KEY_A, origin: s.items[0].origin, chosenIndex }))
    const wrong = await (await answer(sess, 0)).json()
    expect(wrong).toMatchObject({ correct: false, correctIndex: 1, retired: false, correctSince: 0 })
    // the same question can't be answered twice in one re-quiz
    expect((await answer(sess, 1)).status).toBe(409)
    const first = await (await answer(await newSession(), 1)).json()
    expect(first).toMatchObject({ correct: true, correctSince: 1, retired: false })
    const second = await (await answer(await newSession(), 1)).json()
    expect(second).toMatchObject({ correct: true, correctSince: 2, retired: true })
    const after = await (await mistakesGET(new NextRequest('http://localhost/api/mistakes?course=mcat'))).json()
    expect(after.total).toBe(0)
    // every re-quiz answer was logged under the original key
    expect(log.filter((r) => r.source === 'MISTAKE_REVIEW' && r.questionKey === KEY_A)).toHaveLength(3)
    // …with the picked option's text key from the rebuilt item.
    expect(log.filter((r) => r.source === 'MISTAKE_REVIEW').map((r) => r.chosenKey)).toEqual([optionKey('Ligase'), optionKey('Helicase'), optionKey('Helicase')])
  })

  it('refuses to grade a question that is not in the student\'s log', async () => {
    const res = await answerPOST(post({ course: 'mcat', sessionId: '12345678-x', position: 0, questionKey: KEY_B, origin: { attemptKind: 'unit-test', attemptId: 'ut1', itemIndex: 1 }, chosenIndex: 0 }))
    expect(res.status).toBe(404)
  })
})
