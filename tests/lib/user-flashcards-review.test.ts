/**
 * Student-made cards in the normal review session: interleaved with site
 * cards when "Include my own cards" is on, namespaced 'u:<id>', graded by
 * the same POST /api/flashcards/review, and scheduled on UserFlashcard's own
 * columns — never FlashcardProgress, never the daily-limit rollup.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'
import { interleaveCards, isOwnCardId, ownCardId, rawOwnCardId, escapeTagOpeners } from '@/lib/user-flashcard-ids'

const now = Date.now()
const siteRow = (id: string, reviewCount = 1) => ({
  id: `p-${id}`,
  flashcardId: id,
  easeFactor: 2.5,
  interval: 2,
  repetitions: 2,
  isMinuteInterval: false,
  reviewCount,
  nextReview: new Date(now - 60_000),
  flashcard: { id, front: `front ${id}`, back: `back ${id}`, topic: { title: 'Topic', slug: 'topic' } },
})
const ownRow = (id: string, extra: Record<string, unknown> = {}) => ({
  id,
  userId: 'student-1',
  courseSlug: 'sat',
  topicSlug: '',
  front: `own front ${id}`,
  back: `own back ${id}`,
  hint: null,
  origin: 'manual',
  easeFactor: 2.5,
  interval: 0,
  isMinuteInterval: false,
  repetitions: 0,
  nextReview: new Date(now - 1000),
  lastReviewed: null,
  reviewCount: 0,
  createdAt: new Date(),
  updatedAt: new Date(),
  ...extra,
})

let siteReviewRows: ReturnType<typeof siteRow>[] = []
let ownRows: ReturnType<typeof ownRow>[] = []
const own = new Map<string, Record<string, unknown>>()

const db = {
  user: {
    findUnique: vi.fn(async () => ({
      flashcardIncludeMediumYield: true,
      flashcardIncludeLowYield: false,
      flashcardNewPerDay: null,
      flashcardMaxReviewsPerDay: null,
    })),
  },
  flashcardDailyActivity: { findUnique: vi.fn(async () => null) },
  flashcardProgress: {
    findMany: vi.fn(async (args: { where: { reviewCount?: unknown } }) =>
      (args.where.reviewCount as { gt?: number } | undefined)?.gt === 0 ? siteReviewRows : [],
    ),
    findFirst: vi.fn(async () => null),
    count: vi.fn(async () => 10),
    findUnique: vi.fn(async () => null),
    upsert: vi.fn(async () => ({})),
  },
  flashcard: { findMany: vi.fn(async () => []), findUnique: vi.fn(async () => null) },
  userFlashcard: {
    findMany: vi.fn(async (_args: { where: Record<string, unknown>; take?: number }) => ownRows),
    count: vi.fn(async () => ownRows.length),
    findFirst: vi.fn(async (args: { where: { id?: string; userId?: string } }) => {
      if (args.where.id) {
        const c = own.get(args.where.id)
        return c && c.userId === args.where.userId ? c : null
      }
      return null
    }),
    update: vi.fn(async ({ where, data }: { where: { id: string }; data: Record<string, unknown> }) => {
      const row = { ...own.get(where.id)!, ...data }
      own.set(where.id, row)
      return row
    }),
  },
  flashcardReviewLog: { create: vi.fn(async (_args: { data: Record<string, unknown> }) => ({})), findUnique: vi.fn(async () => null) },
  $executeRaw: vi.fn(async () => 1),
}

vi.mock('@/lib/auth', () => ({ auth: async () => ({ user: { id: 'student-1' } }) }))
vi.mock('@/lib/study-context', async (orig) => ({
  ...(await orig<typeof import('@/lib/study-context')>()),
  getActiveStudyContext: async () => 'personal',
}))
vi.mock('@/lib/assignment-autocomplete', () => ({ recordAssignmentCompletion: vi.fn(async () => undefined) }))
vi.mock('@/lib/prisma', () => ({
  prisma: new Proxy({}, { get: (_t, k) => (db as Record<string | symbol, unknown>)[k] }),
}))

import { GET as reviewGET, POST as reviewPOST } from '@/app/api/flashcards/review/route'
import { GET as sessionGET } from '@/app/api/flashcards/session/route'

const get = (fn: (req: NextRequest) => Promise<Response>, url: string) => fn(new NextRequest(`http://localhost${url}`))

beforeEach(() => {
  vi.clearAllMocks()
  siteReviewRows = [siteRow('s1'), siteRow('s2'), siteRow('s3'), siteRow('s4')]
  ownRows = [ownRow('o1'), ownRow('o2')]
  own.clear()
})

describe('own-card ids and interleaving (pure)', () => {
  it('namespaces ids so they can never collide with site cuids', () => {
    expect(ownCardId('abc')).toBe('u:abc')
    expect(isOwnCardId('u:abc')).toBe(true)
    expect(isOwnCardId('u:')).toBe(false)
    expect(isOwnCardId('clx9site')).toBe(false)
    expect(rawOwnCardId('u:abc')).toBe('abc')
    expect(rawOwnCardId('abc')).toBeNull()
  })

  it('spreads own cards evenly and keeps both orders', () => {
    expect(interleaveCards(['a', 'b', 'c', 'd'], ['X', 'Y'])).toEqual(['a', 'X', 'b', 'c', 'Y', 'd'])
    expect(interleaveCards(['a', 'b'], [])).toEqual(['a', 'b'])
    expect(interleaveCards([], ['X'])).toEqual(['X'])
    const mixed = interleaveCards(['a'], ['X', 'Y', 'Z'])
    expect(mixed.filter((c) => c !== 'a')).toEqual(['X', 'Y', 'Z'])
    expect(mixed).toHaveLength(4)
  })

  it('neutralizes tag openers but leaves math comparisons alone', () => {
    expect(escapeTagOpeners('<img src=x onerror=alert(1)>')).toBe('&lt;img src=x onerror=alert(1)>')
    expect(escapeTagOpeners('$a < b$ and x<3')).toBe('$a < b$ and x<3')
  })
})

describe('GET /api/flashcards/review with own cards', () => {
  it('leaves the legacy response untouched when `own` is absent', async () => {
    const body = await (await get(reviewGET, '/api/flashcards/review')).json()
    expect(body.cards).toHaveLength(4)
    expect(body.stats.ownTotal).toBeUndefined()
    expect(db.userFlashcard.findMany).not.toHaveBeenCalled()
    expect(db.userFlashcard.count).not.toHaveBeenCalled()
  })

  it('own=1 interleaves due own cards with u: ids and reports own counts', async () => {
    const body = await (await get(reviewGET, '/api/flashcards/review?own=1')).json()
    const ids = body.cards.map((c: { flashcard: { id: string } }) => c.flashcard.id)
    expect(ids).toEqual(['s1', 'u:o1', 's2', 's3', 'u:o2', 's4'])
    const ownCard = body.cards[1]
    expect(ownCard).toMatchObject({ id: 'u:o1', own: true, reviewCount: 0, flashcard: { front: 'own front o1', topic: { title: 'My card' } } })
    expect(body.stats).toMatchObject({ ownTotal: 2, ownIncluded: true })
    // Site daily-limit numbers are untouched by own cards.
    const legacy = await (await get(reviewGET, '/api/flashcards/review')).json()
    expect(body.stats.due).toBe(legacy.stats.due)
    expect(body.stats.review).toBe(legacy.stats.review)
    expect(body.stats.new).toBe(legacy.stats.new)
    expect(db.userFlashcard.findMany.mock.calls[0][0].where).toMatchObject({ userId: 'student-1' })
  })

  it('own=0 reports counts only (for the toggle) and serves site cards', async () => {
    const body = await (await get(reviewGET, '/api/flashcards/review?own=0')).json()
    expect(body.cards.every((c: { own?: boolean }) => !c.own)).toBe(true)
    expect(body.stats).toMatchObject({ ownTotal: 2, ownIncluded: false })
    expect(db.userFlashcard.findMany).not.toHaveBeenCalled()
  })

  it('ownOnly=1 serves just the student’s own cards', async () => {
    const body = await (await get(reviewGET, '/api/flashcards/review?ownOnly=1')).json()
    expect(body.cards.map((c: { id: string }) => c.id)).toEqual(['u:o1', 'u:o2'])
    expect(db.flashcardProgress.findMany).not.toHaveBeenCalled()
  })

  it('a broken own-card query never breaks site review', async () => {
    db.userFlashcard.findMany.mockRejectedValueOnce(new Error('relation "UserFlashcard" does not exist'))
    const err = vi.spyOn(console, 'error').mockImplementation(() => {})
    const res = await get(reviewGET, '/api/flashcards/review?own=1')
    expect(res.status).toBe(200)
    expect((await res.json()).cards).toHaveLength(4)
    err.mockRestore()
  })

  it('caps the batch via limit (≤ 200) for the offline pack', async () => {
    await get(reviewGET, '/api/flashcards/review?own=1&limit=500')
    expect(db.userFlashcard.findMany.mock.calls[0][0].take).toBe(100)
  })
})

describe('GET /api/flashcards/session with own cards', () => {
  it('interleaves own cards in the session shape (null progress = New)', async () => {
    const body = await (await get(sessionGET, '/api/flashcards/session?own=1')).json()
    const ids = body.cards.map((c: { id: string }) => c.id)
    expect(ids.filter((id: string) => id.startsWith('u:'))).toEqual(['u:o1', 'u:o2'])
    expect(ids).toHaveLength(6)
    const ownCard = body.cards.find((c: { id: string }) => c.id === 'u:o1')
    expect(ownCard).toMatchObject({ own: true, topicTitle: 'My card', progress: null })
    expect(body.stats).toMatchObject({ ownTotal: 2, sessionSize: 6 })
  })
})

describe('POST /api/flashcards/review grading an own card', () => {
  it('schedules on UserFlashcard with calculateNextReview, not FlashcardProgress', async () => {
    own.set('o1', ownRow('o1'))
    const res = await reviewPOST(
      new NextRequest('http://localhost/api/flashcards/review', {
        method: 'POST',
        body: JSON.stringify({ flashcardId: 'u:o1', rating: 'good', durationMs: 3000 }),
        headers: { 'Content-Type': 'application/json' },
      }),
    )
    expect(res.status).toBe(200)
    const body = await res.json()
    // Fresh card + Good = the 5-minute learning step, same as a site card.
    expect(body.interval).toBe(5)
    expect(body.progress).toMatchObject({ isMinuteInterval: true, reviewCount: 1, repetitions: 1 })
    expect(own.get('o1')).toMatchObject({ interval: 5, reviewCount: 1 })
    expect(db.flashcardProgress.upsert).not.toHaveBeenCalled()
    expect(db.flashcardProgress.findUnique).not.toHaveBeenCalled()
    // Own cards don't count against the daily limits (no rollup)…
    expect(db.$executeRaw).not.toHaveBeenCalled()
    // …but are still in the teacher's review log, under the namespaced id.
    expect(db.flashcardReviewLog.create.mock.calls[0][0].data).toMatchObject({ flashcardId: 'u:o1', courseSlug: 'sat', rating: 'GOOD', wasNew: true, durationMs: 3000 })
  })

  it('404s another student’s own card', async () => {
    own.set('o9', ownRow('o9', { userId: 'student-2' }))
    const res = await reviewPOST(
      new NextRequest('http://localhost/api/flashcards/review', {
        method: 'POST',
        body: JSON.stringify({ flashcardId: 'u:o9', rating: 'good' }),
        headers: { 'Content-Type': 'application/json' },
      }),
    )
    expect(res.status).toBe(404)
    expect(own.get('o9')!.reviewCount).toBe(0)
  })
})
