/**
 * Spaced Repetition System (SM-2 Algorithm with Short Initial Intervals)
 * Based on SuperMemo 2 algorithm for optimal flashcard scheduling
 * 
 * Initial intervals for new cards:
 * - Again (quality 1): 1 minute
 * - Hard (quality 3): 3 minutes  
 * - Good (quality 4): 5 minutes
 * - Easy (quality 5): 1 day
 * 
 * After first successful review, switches to day-based intervals
 */

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
    } else if (repetitions === 1 && wasMinuteInterval) {
      // Second review after a minute interval - graduate to days
      if (quality === 3) {
        interval = 1 // Hard: 1 day
      } else if (quality === 4) {
        interval = 6 // Good: 6 days
      } else if (quality === 5) {
        interval = 10 // Easy: 10 days
      }
      isMinuteInterval = false
      repetitions = 2
    } else {
      // Already graduated to days - use standard SM-2
      if (quality === 3) {
        // Hard: slightly less than normal interval
        interval = Math.max(1, Math.round(previousInterval * easeFactor * 0.8))
      } else if (quality === 4) {
        // Good: normal interval
        interval = Math.round(previousInterval * easeFactor)
      } else if (quality === 5) {
        // Easy: longer interval
        interval = Math.round(previousInterval * easeFactor * 1.3)
      }
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
