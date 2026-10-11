/**
 * Offline flashcard review — the pure parts (no IndexedDB, no React, no
 * Prisma), shared by the review page, the IndexedDB store and the batch
 * sync endpoint, and unit-tested directly.
 *
 * Flow: while online, /flashcards/review/start caches the next ~200 due
 * cards (site + own) as an "offline pack". Offline, the page serves the
 * pack, schedules each rating locally with the SAME calculateNextReview the
 * server uses (so the next card's button previews and in-session returns are
 * right), and queues the rating with a client-generated id + timestamp. On
 * reconnect the queue is POSTed to /api/flashcards/sync, which replays the
 * ratings in time order through the live rating path, idempotently.
 */

import { buttonToQuality, calculateNextReview } from '@/lib/spaced-repetition'
import { isOwnCardId } from '@/lib/user-flashcard-ids'

export type OfflineRating = 'again' | 'hard' | 'good' | 'easy'

/** A cached card, in the /api/flashcards/review card shape. */
export interface OfflineCard {
  id: string
  own?: boolean
  easeFactor: number
  interval: number
  repetitions: number
  isMinuteInterval?: boolean
  nextReview: string | Date
  reviewCount: number
  flashcard: {
    id: string
    front: string
    back: string
    hint?: string
    topic: { title: string; slug: string }
  }
}

export interface OfflinePack {
  /** The signed-in user the pack was cached for. */
  userId: string
  savedAt: number
  cards: OfflineCard[]
}

export interface QueuedRating {
  /** Client-generated id — the sync endpoint's idempotency key. */
  id: string
  userId: string
  cardId: string
  rating: OfflineRating
  /** Client epoch ms when the rating was made. */
  at: number
  durationMs?: number
  tzOffset?: number
}

/** How many cards the review page caches for offline use. */
export const OFFLINE_PACK_SIZE = 200
/** Ratings per sync request (the endpoint accepts up to SYNC_MAX_BATCH). */
export const SYNC_CHUNK = 100
export const SYNC_MAX_BATCH = 200
/** A pack older than this is refreshed on the next online load. */
export const PACK_MAX_AGE_MS = 5 * 60_000

/** The card's id in the review queue (site cards: flashcard.id; own: 'u:<id>'). */
export const offlineCardId = (c: OfflineCard) => c.flashcard.id

/**
 * Which cached cards are reviewable right now, in cached (server) order:
 * never-reviewed cards (the server only packed as many as today's new-card
 * allowance) and cards whose — possibly locally updated — schedule is due.
 */
export function offlineDueCards(cards: OfflineCard[], now: number): OfflineCard[] {
  return cards.filter((c) => c.reviewCount === 0 || new Date(c.nextReview).getTime() <= now)
}

/** Narrow the pack to what this session shows (topic drill, own-only, own toggle). */
export function filterOfflineCards(
  cards: OfflineCard[],
  opts: { topicSlug?: string | null; ownOnly?: boolean; includeOwn?: boolean },
): OfflineCard[] {
  return cards.filter((c) => {
    const own = c.own === true || isOwnCardId(c.flashcard.id)
    if (opts.ownOnly) return own
    if (own && opts.includeOwn === false) return false
    if (opts.topicSlug) return !own && c.flashcard.topic?.slug === opts.topicSlug
    return true
  })
}

/** Earliest future due time among cards already in review (for "next card in …"). */
export function nextOfflineDueAt(cards: OfflineCard[], now: number): number | null {
  let best: number | null = null
  for (const c of cards) {
    if (c.reviewCount === 0) continue
    const t = new Date(c.nextReview).getTime()
    if (t > now && (best === null || t < best)) best = t
  }
  return best
}

/**
 * Schedule a rating locally — exactly what the server will compute when the
 * rating syncs (same function, same inputs, same rating time).
 */
export function applyLocalRating(
  card: OfflineCard,
  rating: OfflineRating,
  now: number,
  tzOffset?: number,
): { card: OfflineCard; interval: number; isMinuteInterval: boolean } {
  const r = calculateNextReview(
    buttonToQuality(rating),
    card.easeFactor,
    card.interval,
    card.repetitions,
    card.isMinuteInterval ?? false,
    tzOffset,
    new Date(now),
  )
  return {
    card: {
      ...card,
      easeFactor: r.easeFactor,
      interval: r.interval,
      repetitions: r.repetitions,
      isMinuteInterval: r.isMinuteInterval,
      nextReview: r.nextReview.toISOString(),
      reviewCount: card.reviewCount + 1,
    },
    interval: r.interval,
    isMinuteInterval: r.isMinuteInterval,
  }
}

/** Fold the server's response to a live rating into the cached copy of the card. */
export function mergeServerProgress(
  card: OfflineCard,
  p: { easeFactor?: number; interval?: number; repetitions?: number; isMinuteInterval?: boolean; nextReview?: string | Date; reviewCount?: number } | null | undefined,
): OfflineCard {
  if (!p) return card
  return {
    ...card,
    easeFactor: p.easeFactor ?? card.easeFactor,
    interval: p.interval ?? card.interval,
    repetitions: p.repetitions ?? card.repetitions,
    isMinuteInterval: p.isMinuteInterval ?? card.isMinuteInterval,
    nextReview: p.nextReview ? new Date(p.nextReview).toISOString() : card.nextReview,
    reviewCount: p.reviewCount ?? card.reviewCount,
  }
}

/** Ratings in the order they must be applied: by time, ties in queue order. */
export function orderForSync<T extends { at: number }>(ratings: T[]): T[] {
  return ratings
    .map((r, i) => ({ r, i }))
    .sort((a, b) => a.r.at - b.r.at || a.i - b.i)
    .map((x) => x.r)
}

export function chunk<T>(items: T[], size: number): T[][] {
  const out: T[][] = []
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size))
  return out
}

export type SyncStatus = 'applied' | 'duplicate' | 'stale' | 'not_found' | 'invalid' | 'error'

/**
 * Which queued rating ids can leave the queue after a sync response: every
 * outcome except a transient 'error' is final (a duplicate was applied
 * before; a stale or not-found rating will never apply).
 */
export function settledRatingIds(results: { id: string; status: SyncStatus }[]): string[] {
  return results.filter((r) => r.status !== 'error').map((r) => r.id)
}

/** Longest a queued rating may sit offline and still be applied with its own time. */
export const SYNC_MAX_AGE_MS = 60 * 24 * 60 * 60_000

/**
 * Server-side: map a client timestamp onto the server clock. `skewMs` is
 * serverNow − client sentAt, so a phone with a wrong clock still lands its
 * ratings at the right moment; the result is clamped to
 * [serverNow − SYNC_MAX_AGE_MS, serverNow].
 */
export function serverRatingTime(at: number, skewMs: number, serverNow: number): Date {
  const t = at + skewMs
  return new Date(Math.min(serverNow, Math.max(serverNow - SYNC_MAX_AGE_MS, t)))
}

/** A client rating id: crypto.randomUUID where available. */
export function newRatingId(): string {
  try {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') return crypto.randomUUID()
  } catch {
    /* fall through */
  }
  return `r${Date.now().toString(36)}${Math.random().toString(36).slice(2, 12)}`
}

export interface SyncDeps {
  list: () => Promise<QueuedRating[]>
  remove: (ids: string[]) => Promise<boolean>
  /** POST one batch; resolve the parsed results, or null on any failure. */
  post: (body: { sentAt: number; ratings: Omit<QueuedRating, 'userId'>[] }) => Promise<{ id: string; status: SyncStatus }[] | null>
  now?: () => number
}

/**
 * Send this user's queued ratings, oldest first, in SYNC_CHUNK batches.
 * Settled ratings leave the queue after each batch; a failed request stops
 * the run (everything left stays queued for the next attempt). Ratings
 * queued under a different account are left alone until that user is back.
 */
export async function syncQueuedRatings(
  userId: string,
  deps: SyncDeps,
): Promise<{ sent: number; applied: number; remaining: number; failed: boolean }> {
  const now = deps.now ?? Date.now
  const mine = orderForSync((await deps.list()).filter((r) => r.userId === userId))
  let sent = 0
  let applied = 0
  let settledCount = 0
  for (const batch of chunk(mine, SYNC_CHUNK)) {
    const results = await deps.post({
      sentAt: now(),
      ratings: batch.map(({ userId: _u, ...r }) => r),
    })
    if (!results) return { sent, applied, remaining: mine.length - settledCount, failed: true }
    sent += batch.length
    applied += results.filter((r) => r.status === 'applied').length
    const settled = settledRatingIds(results)
    await deps.remove(settled)
    settledCount += settled.length
  }
  return { sent, applied, remaining: mine.length - settledCount, failed: false }
}
