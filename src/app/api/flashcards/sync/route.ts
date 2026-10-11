import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { auth } from '@/lib/auth'
import { parseBody } from '@/lib/validations'
import { getActiveStudyContext } from '@/lib/study-context'
import { recordAssignmentCompletion } from '@/lib/assignment-autocomplete'
import { applyFlashcardRating, syncLedgerId } from '@/lib/flashcard-rating'
import { SYNC_MAX_BATCH, orderForSync, serverRatingTime, type SyncStatus } from '@/lib/flashcard-offline-queue'

/**
 * POST /api/flashcards/sync — replay ratings made offline.
 *
 * Body: { sentAt?: epoch ms (client clock at send), ratings: [{ id, cardId,
 * rating, at, durationMs?, tzOffset? }] }. Ratings are applied in time order
 * (ties keep array order) through the SAME path as a live rating
 * (applyFlashcardRating → calculateNextReview, progress/UserFlashcard write,
 * daily rollup, review log), each scheduled from its own rating time.
 *
 * Idempotent: each rating's client id maps to a deterministic review-log id
 * written in the same transaction as the schedule, so a retried batch
 * reports 'duplicate' instead of double-applying. A rating older than the
 * card's last review (reviewed since on another device) is logged but not
 * rescheduled ('stale'). If one rating fails transiently ('error'), later
 * ratings of the same card are deferred too, so order is never broken.
 *
 * Response: { results: [{ id, status }], applied }.
 */

const ratingSchema = z.object({
  id: z.string().regex(/^[A-Za-z0-9_-]{8,64}$/),
  cardId: z.string().min(1).max(100),
  rating: z.enum(['again', 'hard', 'good', 'easy']),
  at: z.number().nonnegative(),
  durationMs: z.number().min(0).max(3_600_000).optional(),
  tzOffset: z.number().int().min(-900).max(900).optional(),
})

const syncSchema = z.object({
  sentAt: z.number().nonnegative().optional(),
  ratings: z.array(ratingSchema).min(1).max(SYNC_MAX_BATCH),
})

export async function POST(req: NextRequest) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }
  const parsed = parseBody(syncSchema, body)
  if (!parsed.success) return NextResponse.json({ error: parsed.error }, { status: 400 })

  try {
    const serverNow = Date.now()
    const skew = parsed.data.sentAt != null ? serverNow - parsed.data.sentAt : 0
    // Ratings accrue to the student's active study mode, like live ratings.
    const context = await getActiveStudyContext(userId)

    const results: { id: string; status: SyncStatus }[] = []
    const seenIds = new Set<string>()
    const blockedCards = new Set<string>()
    const topics = new Set<string>()
    let applied = 0

    for (const r of orderForSync(parsed.data.ratings)) {
      if (seenIds.has(r.id)) {
        results.push({ id: r.id, status: 'duplicate' })
        continue
      }
      seenIds.add(r.id)
      if (blockedCards.has(r.cardId)) {
        results.push({ id: r.id, status: 'error' })
        continue
      }
      try {
        const outcome = await applyFlashcardRating({
          userId,
          context,
          cardId: r.cardId,
          rating: r.rating,
          tzOffset: r.tzOffset,
          durationMs: r.durationMs,
          reviewedAt: serverRatingTime(r.at, skew, serverNow),
          ledgerId: syncLedgerId(userId, r.id),
        })
        results.push({ id: r.id, status: outcome.status })
        if (outcome.status === 'applied') {
          applied++
          if (outcome.topicSlug) topics.add(outcome.topicSlug)
        }
      } catch (error) {
        console.error('[flashcards/sync] rating failed', error)
        blockedCards.add(r.cardId)
        results.push({ id: r.id, status: 'error' })
      }
    }

    // Topic-based FLASHCARD_REVIEW assignments, once per topic (best-effort).
    for (const topicSlug of topics) {
      await recordAssignmentCompletion({ userId, topicSlug, types: ['FLASHCARD_REVIEW'], score: 1 })
    }

    return NextResponse.json({ results, applied })
  } catch (error) {
    console.error('[POST /api/flashcards/sync]', error)
    return NextResponse.json({ error: 'Sync failed' }, { status: 500 })
  }
}
