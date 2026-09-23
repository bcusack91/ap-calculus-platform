/**
 * Every query that feeds a student's flashcard queue must carry the exam-yield
 * predicate, and the daily-allowance counts must carry it too — otherwise the
 * dashboard promises cards the session never serves. These routes had no
 * query-shape tests before; a new query added without the predicate fails
 * here rather than leaking low-yield cards.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

type Call = { model: string; op: string; args: Record<string, unknown> }
const calls: Call[] = []
let includeLowPref = false

const record = (model: string, op: string, result: unknown) =>
  vi.fn(async (args: Record<string, unknown>) => {
    calls.push({ model, op, args })
    return result
  })

vi.mock('@/lib/auth', () => ({ auth: async () => ({ user: { id: 'student-1' } }) }))
vi.mock('@/lib/study-context', () => ({ getActiveStudyContext: async () => 'personal' }))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    user: {
      findUnique: vi.fn(async (args: Record<string, unknown>) => {
        calls.push({ model: 'user', op: 'findUnique', args })
        return { flashcardIncludeLowYield: includeLowPref, flashcardNewPerDay: null, flashcardMaxReviewsPerDay: null }
      }),
    },
    flashcardDailyActivity: { findUnique: record('flashcardDailyActivity', 'findUnique', null) },
    flashcardProgress: {
      findMany: record('flashcardProgress', 'findMany', []),
      findFirst: record('flashcardProgress', 'findFirst', null),
      // Non-zero so the daily allowance is open and the routes actually fetch.
      count: record('flashcardProgress', 'count', 10),
    },
    flashcard: { findMany: record('flashcard', 'findMany', []) },
    topic: { findUnique: record('topic', 'findUnique', { flashcards: [] }) },
  },
}))

const SERVED = { OR: [{ examYield: null }, { examYield: { in: ['HIGH', 'MEDIUM'] } }] }

/** The predicate, wherever it belongs for that model. */
function carriesPredicate(call: Call): boolean {
  const where = call.args.where as Record<string, unknown> | undefined
  if (!where) return false
  const card = call.model === 'flashcard' ? where : (where.flashcard as Record<string, unknown> | undefined)
  return JSON.stringify(card?.OR) === JSON.stringify(SERVED.OR)
}

function queueCalls() {
  return calls.filter((c) => (c.model === 'flashcardProgress' || c.model === 'flashcard') && c.args.where)
}

beforeEach(() => {
  calls.length = 0
  includeLowPref = false
  delete process.env.FLASHCARD_HIDE_LOW_YIELD
})

describe('GET /api/flashcards/review', () => {
  it('filters every queue query in the main session', async () => {
    const { GET } = await import('@/app/api/flashcards/review/route')
    await GET(new NextRequest('http://localhost/api/flashcards/review'))
    const qs = queueCalls()
    // due reviews, total, later-today, next-upcoming, new cards, plus the two
    // daily-allowance counts behind getDailyQueueState
    expect(qs.length).toBeGreaterThanOrEqual(7)
    for (const c of qs) expect(carriesPredicate(c), `${c.model}.${c.op} leaks low-yield cards`).toBe(true)
  })

  it('filters the topic-scoped branch too, including the total that ignores the topic filter', async () => {
    const { GET } = await import('@/app/api/flashcards/review/route')
    await GET(new NextRequest('http://localhost/api/flashcards/review?topicId=t1'))
    const qs = queueCalls()
    expect(qs.length).toBeGreaterThanOrEqual(6)
    for (const c of qs) expect(carriesPredicate(c), `${c.model}.${c.op} leaks low-yield cards`).toBe(true)
  })

  it('applies no yield filter when the student opted in', async () => {
    includeLowPref = true
    const { GET } = await import('@/app/api/flashcards/review/route')
    await GET(new NextRequest('http://localhost/api/flashcards/review'))
    for (const c of queueCalls()) expect(JSON.stringify(c.args.where)).not.toContain('examYield')
  })
})

describe('GET /api/flashcards/session', () => {
  it('filters the unscoped dashboard session', async () => {
    const { GET } = await import('@/app/api/flashcards/session/route')
    await GET(new NextRequest('http://localhost/api/flashcards/session'))
    const qs = queueCalls()
    expect(qs.length).toBeGreaterThanOrEqual(6)
    for (const c of qs) expect(carriesPredicate(c), `${c.model}.${c.op} leaks low-yield cards`).toBe(true)
  })

  it('filters a topic drill, and lets ?includeLowYield=1 opt that drill in', async () => {
    const { GET } = await import('@/app/api/flashcards/session/route')
    await GET(new NextRequest('http://localhost/api/flashcards/session?topicSlug=x'))
    const drills = queueCalls().filter((c) => c.model === 'flashcard')
    expect(drills.length).toBe(2)
    for (const c of drills) expect(carriesPredicate(c)).toBe(true)

    calls.length = 0
    await GET(new NextRequest('http://localhost/api/flashcards/session?topicSlug=x&includeLowYield=1'))
    for (const c of queueCalls()) expect(JSON.stringify(c.args.where)).not.toContain('examYield')
  })
})

describe('the kill switch', () => {
  it('serves everything again without touching any data', async () => {
    process.env.FLASHCARD_HIDE_LOW_YIELD = '0'
    const { GET } = await import('@/app/api/flashcards/review/route')
    await GET(new NextRequest('http://localhost/api/flashcards/review'))
    for (const c of queueCalls()) expect(JSON.stringify(c.args.where)).not.toContain('examYield')
  })
})
