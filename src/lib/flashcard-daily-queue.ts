import { prisma } from '@/lib/prisma'
import {
  composeDailyQueues,
  effectiveDailyLimits,
  type DailyLimits,
  type DailyQueueComposition,
} from '@/lib/flashcard-daily-limits'

/**
 * Server-side daily-limit state shared by every surface that shows or serves
 * the review queue (GET /api/flashcards/review, GET /api/flashcards/session
 * unscoped, and the dashboard's due count) — so all "due today" numbers agree.
 *
 * "Introduced today" is FlashcardDailyActivity.newCards for today's UTC-day
 * row: POST /api/flashcards/review increments it whenever a rating is a
 * card's FIRST-EVER review in its study context (no progress row yet, or
 * reviewCount === 0). It is per-user-per-day across all contexts — daily
 * limits bound the student's total daily workload, not each deck separately.
 * The rollup insert is best-effort (a failed increment loses that count), so
 * limits are enforced generously, never the other way.
 */

export interface DailyQueueState extends DailyQueueComposition {
  limits: DailyLimits
  newIntroducedToday: number
  reviewsDoneToday: number
  dueReviewCount: number
  newAvailableCount: number
}

/** Today's UTC-day Date, matching the raw CURRENT_DATE used by the rollup. */
function todayUtc(now: Date): Date {
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()))
}

export async function getDailyQueueState(
  userId: string,
  context: string,
  now: Date = new Date(),
): Promise<DailyQueueState> {
  const [user, activity, dueReviewCount, newAvailableCount] = await Promise.all([
    prisma.user.findUnique({
      where: { id: userId },
      select: { flashcardNewPerDay: true, flashcardMaxReviewsPerDay: true },
    }),
    prisma.flashcardDailyActivity.findUnique({
      where: { userId_day: { userId, day: todayUtc(now) } },
      select: { reviews: true, newCards: true },
    }),
    // Genuinely-due review cards (seen at least once).
    prisma.flashcardProgress.count({
      where: { userId, context, reviewCount: { gt: 0 }, nextReview: { lte: now } },
    }),
    // ALL never-reviewed cards — future-dated drip-backlog rows included,
    // since the session builder pulls them forward up to today's allowance.
    prisma.flashcardProgress.count({
      where: { userId, context, reviewCount: 0 },
    }),
  ])

  const limits = effectiveDailyLimits(user)
  const newIntroducedToday = activity?.newCards ?? 0
  // Total ratings today minus introductions = reviews of already-known cards
  // (learning-step repeats of today's new cards count too — workload bound).
  const reviewsDoneToday = Math.max(0, (activity?.reviews ?? 0) - newIntroducedToday)

  const composition = composeDailyQueues({
    dueReviewCount,
    newAvailableCount,
    newIntroducedToday,
    reviewsDoneToday,
    limits,
  })

  return {
    ...composition,
    limits,
    newIntroducedToday,
    reviewsDoneToday,
    dueReviewCount,
    newAvailableCount,
  }
}
