/**
 * Anki-style flashcard daily limits — PURE math only (no prisma import, so it
 * is unit-testable and safe in client bundles). Server-side queue composition
 * that reads the DB lives in src/lib/flashcard-daily-queue.ts.
 *
 * Two student-configurable knobs (User.flashcardNewPerDay /
 * User.flashcardMaxReviewsPerDay, null = defaults):
 *   - NEW cards/day: how many never-reviewed cards may be INTRODUCED per day.
 *     Unlocks drip-schedule big decks at this rate, and the session builder
 *     pulls drip-backlog new cards forward up to today's remaining allowance
 *     (so cards staggered under an old, lower rate are not stranded).
 *   - Max reviews/day: caps how many DUE review cards (reviewCount > 0) are
 *     offered per day, due-soonest first; the overflow surfaces as
 *     "M more reviews waiting beyond today's limit".
 *
 * "Introduced today" / "reviews done today" come from FlashcardDailyActivity
 * (one row per user per UTC day): `newCards` counts ratings that were a card's
 * first-ever review in its context; `reviews` counts every rating. Both are
 * incremented in POST /api/flashcards/review.
 */

/** Owner decision (Sept 2026): baseline new cards/day is 100, not Anki's 20. */
export const DEFAULT_NEW_PER_DAY = 100
export const DEFAULT_MAX_REVIEWS_PER_DAY = 200

export const NEW_PER_DAY_MIN = 1
export const NEW_PER_DAY_MAX = 500
export const MAX_REVIEWS_PER_DAY_MIN = 10
export const MAX_REVIEWS_PER_DAY_MAX = 1000

export interface DailyLimits {
  newPerDay: number
  maxReviewsPerDay: number
}

export interface DailyLimitPrefs {
  flashcardNewPerDay?: number | null
  flashcardMaxReviewsPerDay?: number | null
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, Math.round(value)))
}

/**
 * Resolve a user's stored prefs (nulls = unset) into effective limits.
 * Stored values are re-clamped defensively so a bad write can never zero out
 * or explode someone's queue.
 */
export function effectiveDailyLimits(prefs: DailyLimitPrefs | null | undefined): DailyLimits {
  const rawNew = prefs?.flashcardNewPerDay
  const rawReviews = prefs?.flashcardMaxReviewsPerDay
  return {
    newPerDay:
      typeof rawNew === 'number' && Number.isFinite(rawNew)
        ? clamp(rawNew, NEW_PER_DAY_MIN, NEW_PER_DAY_MAX)
        : DEFAULT_NEW_PER_DAY,
    maxReviewsPerDay:
      typeof rawReviews === 'number' && Number.isFinite(rawReviews)
        ? clamp(rawReviews, MAX_REVIEWS_PER_DAY_MIN, MAX_REVIEWS_PER_DAY_MAX)
        : DEFAULT_MAX_REVIEWS_PER_DAY,
  }
}

export interface DailyQueueInput {
  /** Due review cards right now: reviewCount > 0 AND nextReview <= now. */
  dueReviewCount: number
  /**
   * ALL never-reviewed cards in the deck (reviewCount === 0), regardless of
   * nextReview — future-dated drip-backlog cards are pull-forward candidates.
   */
  newAvailableCount: number
  /** Cards introduced today (FlashcardDailyActivity.newCards for today). */
  newIntroducedToday: number
  /**
   * Review work done today: total ratings minus new-card introductions
   * (FlashcardDailyActivity.reviews - newCards). Learning-step repeats of a
   * card introduced today DO count here — the cap is a workload bound.
   */
  reviewsDoneToday: number
  limits: DailyLimits
}

export interface DailyQueueComposition {
  /** New cards the student may still start today. */
  newAllowance: number
  /** Due review cards the student may still do today. */
  reviewAllowance: number
  /** New cards actually offerable today: min(available, allowance). */
  newToday: number
  /** Review cards actually offerable today: min(due, allowance). */
  reviewsToday: number
  /** Today's remaining workload (what "due today" should display). */
  dueToday: number
  /** Due review cards held back by maxReviewsPerDay ("M more waiting"). */
  reviewsBeyondLimit: number
  /** Never-reviewed cards held back by newPerDay. */
  newBeyondLimit: number
}

/**
 * The single source of truth for session composition math. Sessions are built
 * as: due reviews first (due-soonest, capped at reviewAllowance), then new
 * cards (scheduled-soonest, capped at newAllowance — pulling future-dated
 * drip-backlog cards forward).
 */
export function composeDailyQueues(input: DailyQueueInput): DailyQueueComposition {
  const newAllowance = Math.max(0, input.limits.newPerDay - Math.max(0, input.newIntroducedToday))
  const reviewAllowance = Math.max(
    0,
    input.limits.maxReviewsPerDay - Math.max(0, input.reviewsDoneToday),
  )
  const newToday = Math.min(Math.max(0, input.newAvailableCount), newAllowance)
  const reviewsToday = Math.min(Math.max(0, input.dueReviewCount), reviewAllowance)
  return {
    newAllowance,
    reviewAllowance,
    newToday,
    reviewsToday,
    dueToday: newToday + reviewsToday,
    reviewsBeyondLimit: Math.max(0, input.dueReviewCount - reviewAllowance),
    newBeyondLimit: Math.max(0, input.newAvailableCount - newAllowance),
  }
}
