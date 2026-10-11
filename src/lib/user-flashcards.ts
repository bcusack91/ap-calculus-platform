import { z } from 'zod'
import type { UserFlashcard } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import {
  OWN_CARD_TOPIC_TITLE,
  USER_CARD_MAX_HINT,
  USER_CARD_MAX_TEXT,
  ownCardId,
} from '@/lib/user-flashcard-ids'

/**
 * Server helpers for student-made flashcards (UserFlashcard).
 *
 * Own cards keep their OWN spaced-repetition columns on UserFlashcard — they
 * never create FlashcardProgress rows, so the study-mode (context) decks,
 * the exam-yield filter and the Anki-style daily limits are untouched:
 * own cards are always "due when due", they never count against the
 * new-cards-per-day or max-reviews-per-day allowance, and they don't
 * increment FlashcardDailyActivity (which those limits read).
 */

const slugField = z
  .string()
  .trim()
  .max(120)
  .regex(/^[a-z0-9-]*$/, 'Invalid slug')

const textField = (label: string) =>
  z
    .string()
    .trim()
    .min(1, `${label} is required`)
    .max(USER_CARD_MAX_TEXT, `${label} must be ${USER_CARD_MAX_TEXT.toLocaleString()} characters or fewer`)

const hintField = z
  .string()
  .trim()
  .max(USER_CARD_MAX_HINT, `Hint must be ${USER_CARD_MAX_HINT.toLocaleString()} characters or fewer`)

export const userFlashcardCreateSchema = z.object({
  front: textField('Front'),
  back: textField('Back'),
  hint: hintField.optional().nullable(),
  courseSlug: slugField.optional(),
  topicSlug: slugField.optional(),
  origin: z.enum(['manual', 'mistake']).optional(),
})

export const userFlashcardUpdateSchema = z
  .object({
    front: textField('Front').optional(),
    back: textField('Back').optional(),
    hint: hintField.optional().nullable(),
    courseSlug: slugField.optional(),
    topicSlug: slugField.optional(),
  })
  .refine((v) => Object.values(v).some((x) => x !== undefined), { message: 'Nothing to update' })

/** The client-facing shape for the /flashcards/mine list. */
export function serializeUserFlashcard(card: UserFlashcard) {
  return {
    id: card.id,
    front: card.front,
    back: card.back,
    hint: card.hint,
    courseSlug: card.courseSlug,
    topicSlug: card.topicSlug,
    origin: card.origin,
    nextReview: card.nextReview,
    reviewCount: card.reviewCount,
    interval: card.interval,
    isMinuteInterval: card.isMinuteInterval,
    createdAt: card.createdAt,
    updatedAt: card.updatedAt,
  }
}

/**
 * An own card in the /api/flashcards/review card shape (FlashcardProgress +
 * included flashcard), id-namespaced so it can't collide with site cards.
 */
export function ownCardAsReviewRow(card: UserFlashcard) {
  const id = ownCardId(card.id)
  return {
    id,
    own: true as const,
    easeFactor: card.easeFactor,
    interval: card.interval,
    repetitions: card.repetitions,
    isMinuteInterval: card.isMinuteInterval,
    nextReview: card.nextReview,
    reviewCount: card.reviewCount,
    flashcard: {
      id,
      front: card.front,
      back: card.back,
      hint: card.hint ?? undefined,
      topic: { title: OWN_CARD_TOPIC_TITLE, slug: card.topicSlug },
    },
  }
}

/** An own card in the /api/flashcards/session card shape. */
export function ownCardAsSessionCard(card: UserFlashcard) {
  return {
    id: ownCardId(card.id),
    own: true as const,
    front: card.front,
    back: card.back,
    topicSlug: card.topicSlug || undefined,
    topicTitle: OWN_CARD_TOPIC_TITLE,
    progress:
      card.reviewCount === 0
        ? null
        : {
            nextReview: card.nextReview,
            repetitions: card.repetitions,
            easeFactor: card.easeFactor,
            interval: card.interval,
            isMinuteInterval: card.isMinuteInterval,
          },
  }
}

export interface OwnQueue {
  /** Own cards due now (soonest first), at most `take`. */
  cards: UserFlashcard[]
  total: number
  due: number
  dueLaterToday: number
  nextDueAt: Date | null
}

const EMPTY_OWN_QUEUE: OwnQueue = { cards: [], total: 0, due: 0, dueLaterToday: 0, nextDueAt: null }

/**
 * The student's own-card queue + counts for a review surface. `take = 0`
 * returns counts only. Best-effort: any failure (e.g. the table missing on a
 * database that hasn't been migrated yet) yields an empty queue so site-card
 * review never breaks because of own cards.
 */
export async function loadOwnQueue(
  userId: string,
  opts: { now: Date; endOfStudentDay: Date; take: number },
): Promise<OwnQueue> {
  try {
    const { now, endOfStudentDay, take } = opts
    const [cards, total, due, dueLaterToday, next] = await Promise.all([
      take > 0
        ? prisma.userFlashcard.findMany({
            where: { userId, nextReview: { lte: now } },
            orderBy: [{ nextReview: 'asc' }, { createdAt: 'asc' }],
            take,
          })
        : Promise.resolve([] as UserFlashcard[]),
      prisma.userFlashcard.count({ where: { userId } }),
      prisma.userFlashcard.count({ where: { userId, nextReview: { lte: now } } }),
      prisma.userFlashcard.count({ where: { userId, nextReview: { gt: now, lte: endOfStudentDay } } }),
      prisma.userFlashcard.findFirst({
        where: { userId, nextReview: { gt: now } },
        orderBy: { nextReview: 'asc' },
        select: { nextReview: true },
      }),
    ])
    return { cards, total, due, dueLaterToday, nextDueAt: next?.nextReview ?? null }
  } catch (error) {
    console.error('own flashcard queue failed (non-fatal):', error)
    return EMPTY_OWN_QUEUE
  }
}

/** The earlier of two optional due times. */
export function earlierDue(a: Date | string | null | undefined, b: Date | string | null | undefined): Date | null {
  const ta = a ? new Date(a).getTime() : NaN
  const tb = b ? new Date(b).getTime() : NaN
  if (Number.isNaN(ta) && Number.isNaN(tb)) return null
  if (Number.isNaN(ta)) return new Date(tb)
  if (Number.isNaN(tb)) return new Date(ta)
  return new Date(Math.min(ta, tb))
}
