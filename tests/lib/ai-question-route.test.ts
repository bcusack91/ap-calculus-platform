/**
 * "Ask about this question": GET /api/ai/status hides the tutor until a key
 * exists, and POST /api/ai/question resolves the question ON THE SERVER from
 * the student's own attempt (never from client text), only once answered,
 * with the premium daily quota consumed only on a delivered answer.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { questionKey } from '@/lib/question-key'

const mockAuth = vi.fn()
vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))

const mockCreate = vi.fn()
vi.mock('@anthropic-ai/sdk', () => ({
  default: class {
    messages = { create: (...args: unknown[]) => mockCreate(...args) }
  },
}))

const dailyCheck = vi.fn(async () => ({ success: true, resetTime: Date.now() + 1000 }))
const dailyPeek = vi.fn(async () => ({ success: true, resetTime: Date.now() + 1000 }))
vi.mock('@/lib/rate-limit', () => ({
  rateLimit: ({ prefix }: { prefix: string }) =>
    prefix === 'ai_explain_daily_free'
      ? { check: dailyCheck, peek: dailyPeek }
      : { check: async () => ({ success: true, resetTime: Date.now() + 1000 }), peek: async () => ({ success: true, resetTime: Date.now() + 1000 }) },
}))
const mockPremium = vi.fn(async () => false)
vi.mock('@/lib/effective-role', () => ({ effectiveIsPremium: () => mockPremium() }))

const QS = [
  { id: 'a', question: 'Which enzyme unwinds DNA?', options: ['Ligase', 'Helicase', 'Primase', 'Gyrase'], correctIndex: 1, explanation: 'Helicase breaks the hydrogen bonds between strands.', topicSlug: 'mcat-dna-replication' },
]
const KEY_A = questionKey(QS[0])

type Row = Record<string, unknown>
let log: Row[] = []
const db = {
  mcatUnitTest: {
    findFirst: vi.fn(async ({ where }: { where: { id: string; userId: string } }) =>
      where.id === 'ut1' && where.userId === 'u1'
        ? { id: 'ut1', userId: 'u1', questions: QS, answers: [0], correct: 0, total: 1, percentage: 0, passed: false, startedAt: new Date('2026-10-01'), completedAt: new Date('2026-10-01T01:00:00Z') }
        : null,
    ),
  },
  questionActivity: {
    findMany: vi.fn(async () => []),
    findFirst: vi.fn(async ({ where }: { where: Row }) =>
      log.filter((r) => Object.entries(where).every(([k, v]) => r[k] === v)).pop() ?? null,
    ),
  },
  topic: { findMany: vi.fn(async () => []) },
}
vi.mock('@/lib/prisma', () => ({ prisma: db }))

const { GET: statusGET } = await import('@/app/api/ai/status/route')
const { POST } = await import('@/app/api/ai/question/route')

const post = (body: unknown) => POST(new Request('http://x/api/ai/question', { method: 'POST', body: JSON.stringify(body) }))
const ORIGINAL_KEY = process.env.ANTHROPIC_API_KEY

beforeEach(() => {
  log = []
  mockAuth.mockResolvedValue({ user: { id: 'u1', role: 'FREE' } })
  mockCreate.mockReset()
  mockCreate.mockResolvedValue({ content: [{ type: 'text', text: 'Helicase is right because…' }] })
  dailyCheck.mockClear()
  dailyPeek.mockClear()
  mockPremium.mockResolvedValue(false)
  process.env.ANTHROPIC_API_KEY = 'sk-test'
})
afterEach(() => {
  if (ORIGINAL_KEY === undefined) delete process.env.ANTHROPIC_API_KEY
  else process.env.ANTHROPIC_API_KEY = ORIGINAL_KEY
})

describe('GET /api/ai/status', () => {
  it('is false without a key and true with one, exposing nothing else', async () => {
    delete process.env.ANTHROPIC_API_KEY
    expect(await (await statusGET()).json()).toEqual({ questionTutor: false })
    process.env.ANTHROPIC_API_KEY = 'sk-test'
    expect(await (await statusGET()).json()).toEqual({ questionTutor: true })
  })
})

describe('POST /api/ai/question', () => {
  it('404s while no key is configured, without calling the model', async () => {
    delete process.env.ANTHROPIC_API_KEY
    const r = await post({ kind: 'unit-test', attemptId: 'ut1', itemIndex: 0 })
    expect(r.status).toBe(404)
    expect(mockCreate).not.toHaveBeenCalled()
  })

  it('requires sign-in', async () => {
    mockAuth.mockResolvedValue(null)
    expect((await post({ kind: 'unit-test', attemptId: 'ut1', itemIndex: 0 })).status).toBe(401)
  })

  it('builds the prompt from the server-resolved item, ignoring client-supplied content', async () => {
    const r = await post({ kind: 'unit-test', attemptId: 'ut1', itemIndex: 0, question: 'INJECTED', explanation: 'INJECTED', followUp: 'Why not ligase?' })
    expect(r.status).toBe(200)
    expect(await r.json()).toEqual({ answer: 'Helicase is right because…' })
    const args = mockCreate.mock.calls[0][0] as { model: string; system: string; messages: { content: string }[] }
    expect(args.model).toBe('claude-haiku-4-5')
    const prompt = args.messages[0].content
    expect(prompt).toContain('Which enzyme unwinds DNA?')
    expect(prompt).toContain('Correct answer: B')
    expect(prompt).toContain("Student's answer: A (incorrect)")
    expect(prompt).toContain('Helicase breaks the hydrogen bonds')
    expect(prompt).toContain('<student_question>Why not ligase?</student_question>')
    expect(prompt).not.toContain('INJECTED')
    // A delivered answer consumes one free daily slot.
    expect(dailyCheck).toHaveBeenCalledTimes(1)
  })

  it("refuses another student's attempt", async () => {
    mockAuth.mockResolvedValue({ user: { id: 'u2', role: 'FREE' } })
    const r = await post({ kind: 'unit-test', attemptId: 'ut1', itemIndex: 0 })
    expect(r.status).toBe(404)
    expect(mockCreate).not.toHaveBeenCalled()
  })

  it('rejects unknown kinds and missing items', async () => {
    expect((await post({ kind: 'nope', attemptId: 'ut1', itemIndex: 0 })).status).toBe(400)
    expect((await post({ kind: 'unit-test', attemptId: 'ut1', itemIndex: 5 })).status).toBe(404)
    expect(mockCreate).not.toHaveBeenCalled()
  })

  it('re-quiz items: only after a re-quiz answer, explaining that answer', async () => {
    const body = { questionKey: KEY_A, origin: { attemptKind: 'unit-test', attemptId: 'ut1', itemIndex: 0 } }
    const before = await post(body)
    expect(before.status).toBe(403)
    expect(mockCreate).not.toHaveBeenCalled()

    log.push({ userId: 'u1', questionKey: KEY_A, attemptKind: 'mistake-review', chosenIndex: 2, chosenText: null })
    const after = await post(body)
    expect(after.status).toBe(200)
    const prompt = (mockCreate.mock.calls[0][0] as { messages: { content: string }[] }).messages[0].content
    expect(prompt).toContain("Student's answer: C (incorrect)")
  })

  it('re-quiz items: the key must belong to that origin', async () => {
    log.push({ userId: 'u1', questionKey: 'q:ffffffffffffffff', attemptKind: 'mistake-review', chosenIndex: 1 })
    const r = await post({ questionKey: 'q:ffffffffffffffff', origin: { attemptKind: 'unit-test', attemptId: 'ut1', itemIndex: 0 } })
    expect(r.status).toBe(404)
    expect(mockCreate).not.toHaveBeenCalled()
  })

  it('free quota: blocked when used up; Premium is unmetered; failures cost nothing', async () => {
    dailyPeek.mockResolvedValueOnce({ success: false, resetTime: Date.now() + 1000 })
    const blocked = await post({ kind: 'unit-test', attemptId: 'ut1', itemIndex: 0 })
    expect(blocked.status).toBe(429)
    expect((await blocked.json()).upgrade).toBe(true)
    expect(mockCreate).not.toHaveBeenCalled()

    mockCreate.mockRejectedValueOnce(new Error('boom'))
    const failed = await post({ kind: 'unit-test', attemptId: 'ut1', itemIndex: 0 })
    expect(failed.status).toBe(502)
    expect(dailyCheck).not.toHaveBeenCalled()

    mockPremium.mockResolvedValue(true)
    const premium = await post({ kind: 'unit-test', attemptId: 'ut1', itemIndex: 0 })
    expect(premium.status).toBe(200)
    expect(dailyCheck).not.toHaveBeenCalled()
  })
})
