/**
 * Spaced Repetition System — Fibonacci ladder with short learning steps
 * (owner decision Aug 2026: the old SM-2 ease multiplication jumped
 * 5 minutes → 6 days on the second Good, far too aggressive).
 *
 * Learning phase (first sighting of a card):
 * - Again: 1 minute · Hard: 3 minutes · Good: 5 minutes · Easy: 1 day
 * - On the next review after a minute step: Good graduates to 1 DAY
 *   (Hard repeats a 10-minute step, Easy jumps to 3 days).
 *
 * Day phase — intervals walk a Fibonacci ladder (1, 2, 3, 5, 8, 13, 21,
 * 34, 55, 89, 144, 233, 365 days, capped at a year):
 * - Good: climb one rung (~1.6x growth — gentler than SM-2's ~2.5x)
 * - Easy: skip a rung
 * - Hard: hold the current rung
 * - Again: lapse — back to a 1-minute learning step
 *
 * easeFactor is still tracked per card for retention analytics, but no
 * longer drives the interval (the ladder does).
 */

/** Day-phase interval ladder. Good = next rung, Easy = skip a rung. */
const FIB_DAYS = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 365]
const MAX_INTERVAL_DAYS = 365

function nextRung(aboveDays: number): number {
  return FIB_DAYS.find((f) => f > aboveDays) ?? MAX_INTERVAL_DAYS
}

export interface ReviewResult {
  quality: number // 0-5 rating (0=complete blackout, 5=perfect recall)
  easeFactor: number
  interval: number // In minutes for new cards, days for reviewed cards
  repetitions: number
  nextReview: Date
  isMinuteInterval: boolean // True if interval is in minutes, false if in days
}

/**
 * Calculate next review date using SM-2 algorithm with minute-based initial intervals
 * @param quality - User's self-assessment (0-5)
 *   0 - Complete blackout, didn't recall at all
 *   1 - Incorrect response, but recognized correct answer (Again - 1 min)
 *   2 - Incorrect response, but correct seemed familiar
 *   3 - Correct response, but required significant effort (Hard - 3 min)
 *   4 - Correct response, after some hesitation (Good - 5 min)
 *   5 - Perfect response, immediate recall (Easy - 1 day)
 * @param previousEaseFactor - Previous ease factor (default 2.5)
 * @param previousInterval - Previous interval in minutes or days (default 0)
 * @param previousRepetitions - Previous number of repetitions (default 0)
 * @param wasMinuteInterval - Whether previous interval was in minutes (default false)
 */
export function calculateNextReview(
  quality: number,
  previousEaseFactor: number = 2.5,
  previousInterval: number = 0,
  previousRepetitions: number = 0,
  wasMinuteInterval: boolean = false
): ReviewResult {
  // Validate quality rating
  if (quality < 0 || quality > 5) {
    throw new Error('Quality must be between 0 and 5')
  }

  let easeFactor = previousEaseFactor
  let interval = previousInterval
  let repetitions = previousRepetitions
  let isMinuteInterval = false

  // Calculate new ease factor
  // EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  
  // Ensure ease factor is at least 1.3
  if (easeFactor < 1.3) {
    easeFactor = 1.3
  }

  // If quality < 3, reset the card (start over)
  if (quality < 3) {
    repetitions = 0
    interval = 1 // 1 minute
    isMinuteInterval = true
  } else {
    // Quality >= 3, schedule next review
    if (repetitions === 0) {
      // First time seeing this card - use minute intervals
      if (quality === 3) {
        interval = 3 // Hard: 3 minutes
        isMinuteInterval = true
      } else if (quality === 4) {
        interval = 5 // Good: 5 minutes
        isMinuteInterval = true
      } else if (quality === 5) {
        interval = 1 // Easy: 1 day (graduate immediately)
        isMinuteInterval = false
      }
      repetitions = 1
    } else if (wasMinuteInterval) {
      // Review after a minute step — graduate conservatively
      if (quality === 3) {
        interval = 10 // Hard: one more learning step (10 minutes)
        isMinuteInterval = true
      } else if (quality === 4) {
        interval = 1 // Good: graduate to 1 day
        isMinuteInterval = false
      } else if (quality === 5) {
        interval = 3 // Easy: 3 days
        isMinuteInterval = false
      }
      repetitions = repetitions + 1
    } else {
      // Day phase — walk the Fibonacci ladder
      if (quality === 3) {
        // Hard: hold the current rung
        interval = Math.max(1, previousInterval)
      } else if (quality === 4) {
        // Good: climb one rung (1 → 2 → 3 → 5 → 8 → 13 → …)
        interval = nextRung(previousInterval)
      } else if (quality === 5) {
        // Easy: skip a rung
        interval = nextRung(nextRung(previousInterval))
      }
      interval = Math.min(interval, MAX_INTERVAL_DAYS)
      isMinuteInterval = false
      repetitions = repetitions + 1
    }
  }

  // Calculate next review date
  const nextReview = new Date()
  if (isMinuteInterval) {
    nextReview.setMinutes(nextReview.getMinutes() + interval)
  } else {
    nextReview.setDate(nextReview.getDate() + interval)
  }

  return {
    quality,
    easeFactor: Math.round(easeFactor * 100) / 100, // Round to 2 decimal places
    interval,
    repetitions,
    nextReview,
    isMinuteInterval
  }
}

/** Compact interval label for rating buttons: "1m", "6d", "2mo", "1.5y". */
export function formatIntervalShort(interval: number, isMinuteInterval: boolean): string {
  if (isMinuteInterval) return interval < 60 ? `${interval}m` : `${Math.round(interval / 60)}h`
  if (interval < 30) return `${interval}d`
  if (interval < 365) return `${Math.round(interval / 30)}mo`
  const years = interval / 365
  return `${years >= 3 ? Math.round(years) : Math.round(years * 10) / 10}y`
}

export interface ButtonIntervalPreview {
  again: string
  hard: string
  good: string
  easy: string
}

/**
 * Anki-style button previews: what each rating would schedule for THIS card in
 * its current state. Runs the real SM-2 calculation per button, so the times
 * grow as the card matures (Good: 5m on a new card → 6d → ~2wk → …) and shrink
 * on lapses — exactly what the student will actually get when they press it.
 */
export function previewIntervals(
  easeFactor: number = 2.5,
  interval: number = 0,
  repetitions: number = 0,
  isMinuteInterval: boolean = false,
): ButtonIntervalPreview {
  const forQuality = (quality: number): string => {
    const r = calculateNextReview(quality, easeFactor, interval, repetitions, isMinuteInterval)
    return formatIntervalShort(r.interval, r.isMinuteInterval)
  }
  return {
    again: forQuality(buttonToQuality('again')),
    hard: forQuality(buttonToQuality('hard')),
    good: forQuality(buttonToQuality('good')),
    easy: forQuality(buttonToQuality('easy')),
  }
}

/**
 * Determine if a flashcard is due for review
 */
export function isDueForReview(nextReviewDate: Date): boolean {
  return new Date() >= nextReviewDate
}

/**
 * Convert button press to quality rating
 * For simplified 4-button interface: Again, Hard, Good, Easy
 */
export function buttonToQuality(button: 'again' | 'hard' | 'good' | 'easy'): number {
  switch (button) {
    case 'again':
      return 1 // Will reset the card
    case 'hard':
      return 3 // Correct but difficult
    case 'good':
      return 4 // Correct with some thought
    case 'easy':
      return 5 // Perfect recall
    default:
      return 3
  }
}

/**
 * Get interval text for display
 */
export function getIntervalText(days: number): string {
  if (days === 0) return 'New'
  if (days === 1) return '1 day'
  if (days < 30) return `${days} days`
  if (days < 365) {
    const months = Math.round(days / 30)
    return `${months} ${months === 1 ? 'month' : 'months'}`
  }
  const years = Math.round(days / 365)
  return `${years} ${years === 1 ? 'year' : 'years'}`
}

/**
 * Calculate retention rate based on reviews
 */
export function calculateRetention(correctReviews: number, totalReviews: number): number {
  if (totalReviews === 0) return 0
  return Math.round((correctReviews / totalReviews) * 100)
}
