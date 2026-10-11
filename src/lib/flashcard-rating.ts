import { randomUUID, createHash } from 'node:crypto'
import { Prisma, type FlashcardRating } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { calculateNextReview, buttonToQuality } from '@/lib/spaced-repetition'
import { classroomIdFromContext } from '@/lib/study-tracking'
import { rawOwnCardId, isOwnCardId } from '@/lib/user-flashcard-ids'

/**
 * The ONE place a flashcard rating is applied — shared by the live rating
 * endpoint (POST /api/flashcards/review) and the offline batch sync
 * (POST /api/flashcards/sync), so both schedule with calculateNextReview and
 * write the same progress, daily-rollup and review-log rows.
 *
 * Site cards write FlashcardProgress in the active study context. Own cards
 * ('u:<id>') write UserFlashcard's own SRS columns instead and never touch
 * FlashcardDailyActivity, so they don't count against the daily limits.
 *
 * Sync idempotency: a synced rating carries `ledgerId`, a deterministic id
 * derived from (user, client rating id). Its FlashcardReviewLog row is
 * created with that id INSIDE the same transaction as the schedule write, so
 * a replayed rating hits the primary key, rolls back, and reports
 * 'duplicate' instead of being applied twice.
 */

export type Rating = 'again' | 'hard' | 'good' | 'easy'

/** Longest time on one card the review log keeps; beyond this the student walked away. */
export const MAX_CARD_MS = 60_000

export const RATING_ENUM = { again: 'AGAIN', hard: 'HARD', good: 'GOOD', easy: 'EASY' } as const satisfies Record<Rating, FlashcardRating>

export interface ApplyRatingInput {
  userId: string
  context: string
  /** Site Flashcard id, or 'u:<UserFlashcard id>'. */
  cardId: string
  rating: Rating
  tzOffset?: number
  durationMs?: number | null
  /** When the rating happened (offline sync). Defaults to now. */
  reviewedAt?: Date
  /** Sync only: idempotency key, used as the FlashcardReviewLog id. */
  ledgerId?: string
}

export interface AppliedProgress {
  easeFactor: number
  interval: number
  repetitions: number
  isMinuteInterval: boolean
  nextReview: Date
  reviewCount: number
  lastReviewed: Date | null
}

export type ApplyRatingOutcome =
  | {
      status: 'applied'
      own: boolean
      /** The written row (FlashcardProgress or UserFlashcard). */
      progress: AppliedProgress & Record<string, unknown>
      interval: number
      nextReview: Date
      /** Site cards: the card's topic slug, for assignment auto-completion. */
      topicSlug: string | null
    }
  /** Card doesn't exist / isn't this student's (sync only for site cards). */
  | { status: 'not_found' }
  /** Sync: this rating id was already applied. */
  | { status: 'duplicate' }
  /** Sync: the card was reviewed more recently elsewhere; logged, not rescheduled. */
  | { status: 'stale' }

/** Deterministic FlashcardReviewLog id for a synced rating. */
export function syncLedgerId(userId: string, clientRatingId: string): string {
  return `sync_${createHash('sha256').update(`${userId}:${clientRatingId}`).digest('hex').slice(0, 32)}`
}

function isUniqueViolation(error: unknown): boolean {
  return error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002'
}

function clampDuration(durationMs: number | null | undefined): number | null {
  return durationMs == null ? null : Math.max(0, Math.min(Math.round(durationMs), MAX_CARD_MS))
}

type Db = Prisma.TransactionClient | typeof prisma

/** Synced ratings older than the card's last review by more than this are stale. */
const STALE_TOLERANCE_MS = 1000

function isStale(reviewedAt: Date, lastReviewed: Date | null | undefined): boolean {
  return !!lastReviewed && reviewedAt.getTime() < new Date(lastReviewed).getTime() - STALE_TOLERANCE_MS
}

export async function applyFlashcardRating(input: ApplyRatingInput): Promise<ApplyRatingOutcome> {
  if (input.ledgerId) {
    // Cheap pre-check so ordinary retries don't throw and roll back.
    const seen = await prisma.flashcardReviewLog.findUnique({ where: { id: input.ledgerId }, select: { id: true } })
    if (seen) return { status: 'duplicate' }
  }
  return isOwnCardId(input.cardId) ? applyOwnCardRating(input) : applySiteCardRating(input)
}

// ── Site cards ────────────────────────────────────────────────────────────

async function applySiteCardRating(input: ApplyRatingInput): Promise<ApplyRatingOutcome> {
  const { userId, context, cardId: flashcardId, rating, tzOffset, durationMs, ledgerId } = input
  const synced = !!ledgerId
  const reviewedAt = input.reviewedAt ?? new Date()

  // Sync must not invent progress rows for ids that aren't real cards.
  if (synced) {
    const exists = await prisma.flashcard.findUnique({ where: { id: flashcardId }, select: { id: true } })
    if (!exists) return { status: 'not_found' }
  }

  const write = async (db: Db) => {
    // Current progress (may not exist yet for a brand-new card).
    const progress = await db.flashcardProgress.findUnique({
      where: { userId_flashcardId_context: { userId, flashcardId, context } },
    })

    // For a first review there is no progress row yet — treat it as a fresh
    // card with SM-2 defaults and upsert below, rather than 404ing.
    const easeFactor = progress?.easeFactor ?? 2.5
    const interval = progress?.interval ?? 0
    const repetitions = progress?.repetitions ?? 0
    const isMinuteInterval = progress?.isMinuteInterval ?? false
    const reviewCount = progress?.reviewCount ?? 0
    const stale = synced && isStale(reviewedAt, progress?.lastReviewed)

    let courseSlug = ''
    let topicSlug: string | null = null
    const logData = () => ({
      userId,
      flashcardId,
      context,
      classroomId: classroomIdFromContext(context),
      courseSlug,
      rating: RATING_ENUM[rating],
      wasNew: reviewCount === 0,
      intervalBefore: progress && !isMinuteInterval ? Math.max(0, Math.round(interval)) : 0,
      durationMs: clampDuration(durationMs),
    })

    if (synced) {
      const card = await db.flashcard.findUnique({
        where: { id: flashcardId },
        select: { topic: { select: { slug: true, category: { select: { course: { select: { slug: true } } } } } } },
      })
      courseSlug = card?.topic?.category?.course?.slug ?? ''
      topicSlug = card?.topic?.slug ?? null
      // The ledger row: a replay collides on this primary key and rolls back.
      await db.flashcardReviewLog.create({ data: { ...logData(), id: ledgerId!, reviewedAt } })
      if (stale) return { stale: true as const }
    }

    // Day-scale intervals anchor to the student's 4am local day rollover
    // when tzOffset is provided; synced ratings schedule from their own time.
    const result = calculateNextReview(
      buttonToQuality(rating),
      easeFactor,
      interval,
      repetitions,
      isMinuteInterval,
      tzOffset,
      reviewedAt,
    )

    const schedule = {
      easeFactor: result.easeFactor,
      interval: result.interval,
      isMinuteInterval: result.isMinuteInterval,
      repetitions: result.repetitions,
      nextReview: result.nextReview,
      lastReviewed: reviewedAt,
    }
    const updated = await db.flashcardProgress.upsert({
      where: { userId_flashcardId_context: { userId, flashcardId, context } },
      create: { userId, flashcardId, context, ...schedule, reviewCount: 1 },
      update: { ...schedule, reviewCount: reviewCount + 1 },
    })
    return { stale: false as const, updated, result, reviewCount, logData, courseSlug, topicSlug }
  }

  let written: Awaited<ReturnType<typeof write>>
  if (synced) {
    try {
      written = await prisma.$transaction((tx) => write(tx))
    } catch (error) {
      if (isUniqueViolation(error)) return { status: 'duplicate' }
      throw error
    }
  } else {
    written = await write(prisma)
  }
  if (written.stale) return { status: 'stale' }

  const { updated, result, reviewCount } = written

  // Best-effort daily-habit rollup: one row per user per UTC day, powering
  // the teacher's "did they do their flashcards this week" view AND the
  // Anki-style daily limits (src/lib/flashcard-daily-queue.ts). `newCards`
  // counts INTRODUCTIONS — this rating was the card's first-ever review in
  // this context (no progress row yet / reviewCount 0). Synced ratings land
  // on the day they were made.
  try {
    const introduced = reviewCount === 0 ? 1 : 0
    if (synced) {
      const day = reviewedAt.toISOString().slice(0, 10)
      await prisma.$executeRaw`
        INSERT INTO "FlashcardDailyActivity" ("id", "userId", "day", "reviews", "newCards")
        VALUES (${randomUUID()}, ${userId}, ${day}::date, 1, ${introduced})
        ON CONFLICT ("userId", "day") DO UPDATE SET
          "reviews" = "FlashcardDailyActivity"."reviews" + 1,
          "newCards" = "FlashcardDailyActivity"."newCards" + ${introduced}`
    } else {
      await prisma.$executeRaw`
        INSERT INTO "FlashcardDailyActivity" ("id", "userId", "day", "reviews", "newCards")
        VALUES (${randomUUID()}, ${userId}, CURRENT_DATE, 1, ${introduced})
        ON CONFLICT ("userId", "day") DO UPDATE SET
          "reviews" = "FlashcardDailyActivity"."reviews" + 1,
          "newCards" = "FlashcardDailyActivity"."newCards" + ${introduced}`
    }
  } catch (rollupError) {
    console.error('flashcard daily rollup failed (non-fatal):', rollupError)
  }

  let topicSlug = written.topicSlug
  if (!synced) {
    const reviewedCard = await prisma.flashcard.findUnique({
      where: { id: flashcardId },
      select: { topic: { select: { slug: true, category: { select: { course: { select: { slug: true } } } } } } },
    })
    topicSlug = reviewedCard?.topic?.slug ?? null
    // Best-effort review log for the teacher's per-student report: one row
    // per rating, with the time on card (client-measured, capped at 60 s).
    try {
      await prisma.flashcardReviewLog.create({
        data: { ...written.logData(), courseSlug: reviewedCard?.topic?.category?.course?.slug ?? '' },
      })
    } catch (logError) {
      console.error('flashcard review log failed (non-fatal):', logError)
    }
  }

  return {
    status: 'applied',
    own: false,
    progress: updated,
    interval: result.interval,
    nextReview: result.nextReview,
    topicSlug,
  }
}

// ── Own cards ─────────────────────────────────────────────────────────────

async function applyOwnCardRating(input: ApplyRatingInput): Promise<ApplyRatingOutcome> {
  const { userId, context, cardId, rating, tzOffset, durationMs, ledgerId } = input
  const synced = !!ledgerId
  const reviewedAt = input.reviewedAt ?? new Date()
  const id = rawOwnCardId(cardId)
  if (!id) return { status: 'not_found' }

  const write = async (db: Db) => {
    // Owner-scoped: someone else's card id is simply "not found".
    const card = await db.userFlashcard.findFirst({ where: { id, userId } })
    if (!card) return { missing: true as const }
    const stale = synced && isStale(reviewedAt, card.lastReviewed)

    const logData = {
      userId,
      flashcardId: cardId,
      context,
      classroomId: classroomIdFromContext(context),
      courseSlug: card.courseSlug,
      rating: RATING_ENUM[rating],
      wasNew: card.reviewCount === 0,
      intervalBefore: card.reviewCount > 0 && !card.isMinuteInterval ? Math.max(0, Math.round(card.interval)) : 0,
      durationMs: clampDuration(durationMs),
    }
    if (synced) {
      await db.flashcardReviewLog.create({ data: { ...logData, id: ledgerId!, reviewedAt } })
      if (stale) return { missing: false as const, stale: true as const }
    }

    const result = calculateNextReview(
      buttonToQuality(rating),
      card.easeFactor,
      card.interval,
      card.repetitions,
      card.isMinuteInterval,
      tzOffset,
      reviewedAt,
    )
    const updated = await db.userFlashcard.update({
      where: { id: card.id },
      data: {
        easeFactor: result.easeFactor,
        interval: result.interval,
        isMinuteInterval: result.isMinuteInterval,
        repetitions: result.repetitions,
        nextReview: result.nextReview,
        lastReviewed: reviewedAt,
        reviewCount: card.reviewCount + 1,
      },
    })
    return { missing: false as const, stale: false as const, updated, result, logData }
  }

  let written: Awaited<ReturnType<typeof write>>
  if (synced) {
    try {
      written = await prisma.$transaction((tx) => write(tx))
    } catch (error) {
      if (isUniqueViolation(error)) return { status: 'duplicate' }
      throw error
    }
  } else {
    written = await write(prisma)
  }
  if (written.missing) return { status: 'not_found' }
  if (written.stale) return { status: 'stale' }

  if (!synced) {
    try {
      await prisma.flashcardReviewLog.create({ data: written.logData })
    } catch (logError) {
      console.error('flashcard review log failed (non-fatal):', logError)
    }
  }

  return {
    status: 'applied',
    own: true,
    progress: written.updated,
    interval: written.result.interval,
    nextReview: written.result.nextReview,
    topicSlug: null,
  }
}
