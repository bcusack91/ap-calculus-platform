/**
 * POST /api/flashcards/sync replays ratings made offline through the same
 * scheduling + review-log path as live ratings: in time order, each
 * scheduled from its own rating time, idempotent per client rating id, and
 * never letting a failed rating be overtaken by a later one for the same card.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'
import { Prisma } from '@prisma/client'
import { calculateNextReview, buttonToQuality } from '@/lib/spaced-repetition'

type Row = Record<string, unknown>
const progress = new Map<string, Row>()
const logs = new Map<string, Row>()
const ownCards = new Map<string, Row>()
const siteCards = new Set<string>(['card-a', 'card-b'])
const upsertCalls: Row[] = []
let failUpsertFor: string | null = null
const mockAssignment = vi.fn()
const mockExecuteRaw = vi.fn()

const key = (w: { userId: string; flashcardId: string; context: string }) => `${w.userId}|${w.flashcardId}|${w.context}`

const db = {
  flashcard: {
    findUnique: vi.fn(async ({ where }: { where: { id: string } }) =>
      siteCards.has(where.id) ? { id: where.id, topic: { slug: 'amino-acids', category: { course: { slug: 'mcat-prep' } } } } : null,
    ),
  },
  flashcardProgress: {
    findUnique: vi.fn(async ({ where }: { where: { userId_flashcardId_context: { userId: string; flashcardId: string; context: string } } }) =>
      progress.get(key(where.userId_flashcardId_context)) ?? null,
    ),
    upsert: vi.fn(async (args: { where: { userId_flashcardId_context: { userId: string; flashcardId: string; context: string } }; create: Row; update: Row }) => {
      const k = key(args.where.userId_flashcardId_context)
      if (failUpsertFor && k.includes(failUpsertFor)) throw new Error('db hiccup')
      upsertCalls.push({ k, ...(progress.has(k) ? args.update : args.create) })
      const row = progress.has(k) ? { ...progress.get(k)!, ...args.update } : { ...args.create }
      progress.set(k, row)
      return row
    }),
  },
  flashcardReviewLog: {
    findUnique: vi.fn(async ({ where }: { where: { id: string } }) => logs.get(where.id) ?? null),
    create: vi.fn(async ({ data }: { data: Row }) => {
      const id = (data.id as string) ?? `log-${logs.size + 1}`
      if (logs.has(id)) {
        throw new Prisma.PrismaClientKnownRequestError('Unique constraint failed', { code: 'P2002', clientVersion: 'test' })
      }
      logs.set(id, { ...data, id })
      return { ...data, id }
    }),
  },
  userFlashcard: {
    findFirst: vi.fn(async ({ where }: { where: { id: string; userId: string } }) => {
      const c = ownCards.get(where.id)
      return c && c.userId === where.userId ? c : null
    }),
    update: vi.fn(async ({ where, data }: { where: { id: string }; data: Row }) => {
      const row = { ...ownCards.get(where.id)!, ...data }
      ownCards.set(where.id, row)
      return row
    }),
  },
  $executeRaw: (...a: unknown[]) => mockExecuteRaw(...a),
  $transaction: vi.fn(async (fn: (tx: unknown) => Promise<unknown>) => fn(db)),
}

vi.mock('@/lib/auth', () => ({ auth: async () => ({ user: { id: 'student-1' } }) }))
vi.mock('@/lib/study-context', async (orig) => ({
  ...(await orig<typeof import('@/lib/study-context')>()),
  getActiveStudyContext: async () => 'personal',
}))
vi.mock('@/lib/assignment-autocomplete', () => ({ recordAssignmentCompletion: (...a: unknown[]) => mockAssignment(...a) }))
// Lazy: vi.mock is hoisted above `db`, so resolve it at call time.
vi.mock('@/lib/prisma', () => ({
  prisma: new Proxy({}, { get: (_t, k) => (db as Record<string | symbol, unknown>)[k] }),
}))

import { POST } from '@/app/api/flashcards/sync/route'

function sync(body: Record<string, unknown>) {
  return POST(
    new NextRequest('http://localhost/api/flashcards/sync', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    }),
  )
}

const HOUR = 3_600_000

beforeEach(() => {
  vi.clearAllMocks()
  progress.clear()
  logs.clear()
  ownCards.clear()
  upsertCalls.length = 0
  failUpsertFor = null
  mockExecuteRaw.mockResolvedValue(1)
  mockAssignment.mockResolvedValue(undefined)
})

describe('POST /api/flashcards/sync', () => {
  it('applies ratings in time order regardless of array order', async () => {
    const now = Date.now()
    const res = await sync({
      sentAt: now,
      ratings: [
        { id: 'rating-0002', cardId: 'card-a', rating: 'good', at: now - 1 * HOUR },
        { id: 'rating-0001', cardId: 'card-a', rating: 'again', at: now - 2 * HOUR },
      ],
    })
    expect(res.status).toBe(200)
    const body = await res.json()
    expect(body.applied).toBe(2)
    // 'again' first (fresh card → 1-minute step, repetitions reset), then
    // 'good' on that relearning card → the 5-minute step. Applied the other
    // way round it would be 5m then 1m.
    expect(upsertCalls.map((c) => c.interval)).toEqual([1, 5])
    expect(upsertCalls.map((c) => c.isMinuteInterval)).toEqual([true, true])
    const row = progress.get('student-1|card-a|personal')!
    expect(row.reviewCount).toBe(2)
  })

  it('schedules each rating from its own time, not the sync time', async () => {
    const now = Date.now()
    const at = now - 3 * HOUR
    await sync({ sentAt: now, ratings: [{ id: 'rating-time-1', cardId: 'card-b', rating: 'again', at }] })
    const row = progress.get('student-1|card-b|personal')!
    const expected = calculateNextReview(buttonToQuality('again'), 2.5, 0, 0, false, undefined, new Date(at))
    expect(Math.abs((row.nextReview as Date).getTime() - expected.nextReview.getTime())).toBeLessThan(1000)
    expect(Math.abs((row.lastReviewed as Date).getTime() - at)).toBeLessThan(1000)
  })

  it('corrects for client clock skew using sentAt', async () => {
    const now = Date.now()
    // Client clock is 2 hours fast: it says the rating was "now" by its clock.
    const clientNow = now + 2 * HOUR
    await sync({ sentAt: clientNow, ratings: [{ id: 'rating-skew-1', cardId: 'card-a', rating: 'good', at: clientNow - 10 * 60_000 }] })
    const row = progress.get('student-1|card-a|personal')!
    expect(Math.abs((row.lastReviewed as Date).getTime() - (now - 10 * 60_000))).toBeLessThan(2000)
  })

  it('is idempotent: replaying the same batch applies nothing twice', async () => {
    const now = Date.now()
    const batch = {
      sentAt: now,
      ratings: [
        { id: 'rating-idem-1', cardId: 'card-a', rating: 'good', at: now - 60_000 },
        { id: 'rating-idem-2', cardId: 'card-b', rating: 'hard', at: now - 30_000 },
      ],
    }
    const first = await (await sync(batch)).json()
    expect(first.applied).toBe(2)
    const second = await (await sync(batch)).json()
    expect(second.applied).toBe(0)
    expect(second.results.map((r: { status: string }) => r.status)).toEqual(['duplicate', 'duplicate'])
    expect(upsertCalls).toHaveLength(2)
    expect(logs.size).toBe(2)
  })

  it('treats a concurrent duplicate (unique violation in the transaction) as duplicate', async () => {
    const now = Date.now()
    // Pre-check misses (as if a parallel request inserted between check and write).
    db.flashcardReviewLog.findUnique.mockResolvedValueOnce(null)
    const { syncLedgerId } = await import('@/lib/flashcard-rating')
    logs.set(syncLedgerId('student-1', 'rating-race-1'), { id: 'x' })
    const body = await (await sync({ sentAt: now, ratings: [{ id: 'rating-race-1', cardId: 'card-a', rating: 'good', at: now }] })).json()
    expect(body.results[0].status).toBe('duplicate')
    expect(upsertCalls).toHaveLength(0)
  })

  it('dedupes a repeated id inside one batch', async () => {
    const now = Date.now()
    const r = { id: 'rating-dupe-1', cardId: 'card-a', rating: 'good', at: now }
    const body = await (await sync({ sentAt: now, ratings: [r, r] })).json()
    expect(body.results.map((x: { status: string }) => x.status)).toEqual(['applied', 'duplicate'])
  })

  it('reports unknown site cards as not_found without creating progress', async () => {
    const now = Date.now()
    const body = await (await sync({ sentAt: now, ratings: [{ id: 'rating-ghost', cardId: 'no-such-card', rating: 'good', at: now }] })).json()
    expect(body.results[0].status).toBe('not_found')
    expect(upsertCalls).toHaveLength(0)
  })

  it('logs but does not reschedule a rating older than the card’s last review', async () => {
    const now = Date.now()
    progress.set('student-1|card-a|personal', {
      easeFactor: 2.5, interval: 5, repetitions: 3, isMinuteInterval: false, reviewCount: 3, lastReviewed: new Date(now - 60_000), nextReview: new Date(now + 5 * 24 * HOUR),
    })
    const body = await (await sync({ sentAt: now, ratings: [{ id: 'rating-stale-1', cardId: 'card-a', rating: 'again', at: now - 2 * HOUR }] })).json()
    expect(body.results[0].status).toBe('stale')
    expect(upsertCalls).toHaveLength(0)
    expect(logs.size).toBe(1)
  })

  it('defers later ratings of a card whose earlier rating failed', async () => {
    const now = Date.now()
    failUpsertFor = 'card-a'
    const body = await (await sync({
      sentAt: now,
      ratings: [
        { id: 'rating-fail-1', cardId: 'card-a', rating: 'again', at: now - 3000 },
        { id: 'rating-fail-2', cardId: 'card-b', rating: 'good', at: now - 2000 },
        { id: 'rating-fail-3', cardId: 'card-a', rating: 'good', at: now - 1000 },
      ],
    })).json()
    const byId = Object.fromEntries(body.results.map((r: { id: string; status: string }) => [r.id, r.status]))
    expect(byId).toEqual({ 'rating-fail-1': 'error', 'rating-fail-2': 'applied', 'rating-fail-3': 'error' })
  })

  it('syncs own cards onto UserFlashcard, never FlashcardProgress', async () => {
    const now = Date.now()
    ownCards.set('own1', {
      id: 'own1', userId: 'student-1', courseSlug: 'sat', easeFactor: 2.5, interval: 0, repetitions: 0, isMinuteInterval: false, reviewCount: 0, lastReviewed: null,
    })
    const body = await (await sync({ sentAt: now, ratings: [{ id: 'rating-own-1', cardId: 'u:own1', rating: 'good', at: now }] })).json()
    expect(body.results[0].status).toBe('applied')
    expect(upsertCalls).toHaveLength(0)
    expect(ownCards.get('own1')!.reviewCount).toBe(1)
    expect(ownCards.get('own1')!.interval).toBe(5)
    // No daily-limit rollup for own cards.
    expect(mockExecuteRaw).not.toHaveBeenCalled()
    const log = [...logs.values()][0]
    expect(log).toMatchObject({ flashcardId: 'u:own1', courseSlug: 'sat', rating: 'GOOD', wasNew: true })
  })

  it('refuses another student’s own card', async () => {
    const now = Date.now()
    ownCards.set('theirs', { id: 'theirs', userId: 'student-2', easeFactor: 2.5, interval: 0, repetitions: 0, isMinuteInterval: false, reviewCount: 0 })
    const body = await (await sync({ sentAt: now, ratings: [{ id: 'rating-theirs', cardId: 'u:theirs', rating: 'good', at: now }] })).json()
    expect(body.results[0].status).toBe('not_found')
    expect(ownCards.get('theirs')!.reviewCount).toBe(0)
  })

  it('records assignment completion once per topic', async () => {
    const now = Date.now()
    await sync({
      sentAt: now,
      ratings: [
        { id: 'rating-asg-1', cardId: 'card-a', rating: 'good', at: now - 2000 },
        { id: 'rating-asg-2', cardId: 'card-b', rating: 'good', at: now - 1000 },
      ],
    })
    expect(mockAssignment).toHaveBeenCalledTimes(1)
    expect(mockAssignment.mock.calls[0][0]).toMatchObject({ topicSlug: 'amino-acids', types: ['FLASHCARD_REVIEW'] })
  })

  it('rejects malformed batches', async () => {
    expect((await sync({ ratings: [] })).status).toBe(400)
    expect((await sync({ ratings: [{ id: 'bad id!', cardId: 'card-a', rating: 'good', at: 1 }] })).status).toBe(400)
    const tooMany = Array.from({ length: 201 }, (_, i) => ({ id: `rating-${String(i).padStart(4, '0')}`, cardId: 'card-a', rating: 'good', at: i }))
    expect((await sync({ ratings: tooMany })).status).toBe(400)
  })
})
