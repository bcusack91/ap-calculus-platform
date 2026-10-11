/**
 * The pure half of offline flashcard review: which cached cards are due,
 * local scheduling that matches the server exactly, sync ordering, and the
 * queue runner that only drops ratings the server has settled.
 */
import { describe, it, expect, vi } from 'vitest'
import {
  applyLocalRating,
  chunk,
  filterOfflineCards,
  mergeServerProgress,
  newRatingId,
  nextOfflineDueAt,
  offlineDueCards,
  orderForSync,
  serverRatingTime,
  settledRatingIds,
  syncQueuedRatings,
  SYNC_CHUNK,
  SYNC_MAX_AGE_MS,
  type OfflineCard,
  type QueuedRating,
} from '@/lib/flashcard-offline-queue'
import { calculateNextReview, buttonToQuality } from '@/lib/spaced-repetition'

const NOW = Date.UTC(2026, 9, 10, 15, 0, 0)

function card(id: string, over: Partial<OfflineCard> = {}): OfflineCard {
  return {
    id: `p-${id}`,
    easeFactor: 2.5,
    interval: 3,
    repetitions: 3,
    isMinuteInterval: false,
    nextReview: new Date(NOW - 1000).toISOString(),
    reviewCount: 3,
    flashcard: { id, front: 'f', back: 'b', topic: { title: 'T', slug: 'topic-a' } },
    ...over,
  }
}

describe('offlineDueCards / nextOfflineDueAt', () => {
  it('serves new cards and due cards in cached order, hides future ones', () => {
    const cards = [
      card('a'),
      card('b', { nextReview: new Date(NOW + 5 * 60_000).toISOString() }),
      card('c', { reviewCount: 0, nextReview: new Date(NOW + 86_400_000).toISOString() }),
    ]
    expect(offlineDueCards(cards, NOW).map((c) => c.flashcard.id)).toEqual(['a', 'c'])
    expect(nextOfflineDueAt(cards, NOW)).toBe(NOW + 5 * 60_000)
    expect(nextOfflineDueAt([card('a')], NOW)).toBeNull()
  })
})

describe('filterOfflineCards', () => {
  const cards = [card('a'), card('b', { flashcard: { id: 'b', front: '', back: '', topic: { title: 'T', slug: 'topic-b' } } }), card('u:own', { own: true })]
  it('drops own cards when the toggle is off, keeps them otherwise', () => {
    expect(filterOfflineCards(cards, { includeOwn: false }).map((c) => c.flashcard.id)).toEqual(['a', 'b'])
    expect(filterOfflineCards(cards, { includeOwn: true })).toHaveLength(3)
  })
  it('narrows to a topic (site cards) or to own cards only', () => {
    expect(filterOfflineCards(cards, { topicSlug: 'topic-b', includeOwn: true }).map((c) => c.flashcard.id)).toEqual(['b'])
    expect(filterOfflineCards(cards, { ownOnly: true }).map((c) => c.flashcard.id)).toEqual(['u:own'])
  })
})

describe('applyLocalRating', () => {
  it('produces exactly the schedule the server will compute for the same rating time', () => {
    const c = card('a', { interval: 5, repetitions: 4 })
    const local = applyLocalRating(c, 'good', NOW, 240)
    const server = calculateNextReview(buttonToQuality('good'), 2.5, 5, 4, false, 240, new Date(NOW))
    expect(local.interval).toBe(server.interval)
    expect(local.card.nextReview).toBe(server.nextReview.toISOString())
    expect(local.card.reviewCount).toBe(4)
    expect(local.card.easeFactor).toBe(server.easeFactor)
  })

  it('sends Again to a 1-minute step that returns this session', () => {
    const local = applyLocalRating(card('a'), 'again', NOW)
    expect(local).toMatchObject({ interval: 1, isMinuteInterval: true })
    expect(local.card.nextReview).toBe(new Date(NOW + 60_000).toISOString())
  })
})

describe('mergeServerProgress', () => {
  it('folds a live rating result into the cached card', () => {
    const merged = mergeServerProgress(card('a'), { interval: 8, reviewCount: 4, nextReview: new Date(NOW + 8 * 86_400_000) })
    expect(merged).toMatchObject({ interval: 8, reviewCount: 4, easeFactor: 2.5 })
    expect(mergeServerProgress(card('a'), null)).toEqual(card('a'))
  })
})

describe('ordering and batching', () => {
  it('orders by time, ties keep queue order', () => {
    const rs = [{ id: 'b', at: 2 }, { id: 'a', at: 1 }, { id: 'c', at: 2 }]
    expect(orderForSync(rs).map((r) => r.id)).toEqual(['a', 'b', 'c'])
  })
  it('chunks', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
  })
  it('keeps only transient errors queued', () => {
    expect(
      settledRatingIds([
        { id: '1', status: 'applied' },
        { id: '2', status: 'duplicate' },
        { id: '3', status: 'error' },
        { id: '4', status: 'stale' },
        { id: '5', status: 'not_found' },
      ]),
    ).toEqual(['1', '2', '4', '5'])
  })
  it('maps client time onto the server clock, clamped', () => {
    expect(serverRatingTime(1000, 500, 10_000).getTime()).toBe(1500)
    expect(serverRatingTime(20_000, 0, 10_000).getTime()).toBe(10_000) // never in the future
    const serverNow = SYNC_MAX_AGE_MS * 3
    expect(serverRatingTime(0, 0, serverNow).getTime()).toBe(serverNow - SYNC_MAX_AGE_MS)
  })
  it('generates distinct rating ids the sync schema accepts', () => {
    const a = newRatingId()
    const b = newRatingId()
    expect(a).not.toBe(b)
    expect(a).toMatch(/^[A-Za-z0-9_-]{8,64}$/)
  })
})

describe('syncQueuedRatings', () => {
  const q = (id: string, at: number, userId = 'u1'): QueuedRating => ({ id, userId, cardId: 'c', rating: 'good', at })

  it('sends this user’s ratings oldest-first, strips userId, removes settled ones', async () => {
    const queue = [q('r2', 2), q('r1', 1), q('other', 0, 'u2')]
    const remove = vi.fn(async () => true)
    const post = vi.fn(async (body: { sentAt: number; ratings: { id: string }[] }) => body.ratings.map((r) => ({ id: r.id, status: 'applied' as const })))
    const res = await syncQueuedRatings('u1', { list: async () => queue, remove, post, now: () => 42 })
    expect(post).toHaveBeenCalledTimes(1)
    const sent = post.mock.calls[0][0]
    expect(sent.sentAt).toBe(42)
    expect(sent.ratings.map((r: { id: string }) => r.id)).toEqual(['r1', 'r2'])
    expect(sent.ratings[0]).not.toHaveProperty('userId')
    expect(remove).toHaveBeenCalledWith(['r1', 'r2'])
    expect(res).toEqual({ sent: 2, applied: 2, remaining: 0, failed: false })
  })

  it('keeps errored ratings queued', async () => {
    const remove = vi.fn(async () => true)
    const res = await syncQueuedRatings('u1', {
      list: async () => [q('r1', 1), q('r2', 2)],
      remove,
      post: async () => [{ id: 'r1', status: 'applied' }, { id: 'r2', status: 'error' }],
    })
    expect(remove).toHaveBeenCalledWith(['r1'])
    expect(res.remaining).toBe(1)
  })

  it('stops on a failed request and leaves everything after it queued', async () => {
    const many = Array.from({ length: SYNC_CHUNK + 5 }, (_, i) => q(`r${i}`, i))
    const remove = vi.fn(async () => true)
    const post = vi.fn()
      .mockImplementationOnce(async (body: { ratings: { id: string }[] }) => body.ratings.map((r) => ({ id: r.id, status: 'applied' as const })))
      .mockImplementationOnce(async () => null)
    const res = await syncQueuedRatings('u1', { list: async () => many, remove, post })
    expect(post).toHaveBeenCalledTimes(2)
    expect(res).toMatchObject({ sent: SYNC_CHUNK, failed: true, remaining: 5 })
  })
})
