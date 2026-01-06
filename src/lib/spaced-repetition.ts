/**
 * Spaced Repetition System (SM-2 Algorithm)
 * Based on SuperMemo 2 algorithm for optimal flashcard scheduling
 */

export interface ReviewResult {
  quality: number // 0-5 rating (0=complete blackout, 5=perfect recall)
  easeFactor: number
  interval: number
  repetitions: number
  nextReview: Date
}

/**
 * Calculate next review date using SM-2 algorithm
 * @param quality - User's self-assessment (0-5)
 *   0 - Complete blackout, didn't recall at all
 *   1 - Incorrect response, but recognized correct answer
 *   2 - Incorrect response, but correct seemed familiar
 *   3 - Correct response, but required significant effort
 *   4 - Correct response, after some hesitation
 *   5 - Perfect response, immediate recall
 * @param previousEaseFactor - Previous ease factor (default 2.5)
 * @param previousInterval - Previous interval in days (default 0)
 * @param previousRepetitions - Previous number of repetitions (default 0)
 */
export function calculateNextReview(
  quality: number,
  previousEaseFactor: number = 2.5,
  previousInterval: number = 0,
  previousRepetitions: number = 0
): ReviewResult {
  // Validate quality rating
  if (quality < 0 || quality > 5) {
    throw new Error('Quality must be between 0 and 5')
  }

  let easeFactor = previousEaseFactor
  let interval = previousInterval
  let repetitions = previousRepetitions

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
    interval = 0
  } else {
    // Quality >= 3, schedule next review
    if (repetitions === 0) {
      interval = 1 // First review: 1 day
      repetitions = 1
    } else if (repetitions === 1) {
      interval = 6 // Second review: 6 days
      repetitions = 2
    } else {
      // Subsequent reviews: multiply previous interval by ease factor
      interval = Math.round(previousInterval * easeFactor)
      repetitions = repetitions + 1
    }
  }

  // Calculate next review date
  const nextReview = new Date()
  nextReview.setDate(nextReview.getDate() + interval)

  return {
    quality,
    easeFactor: Math.round(easeFactor * 100) / 100, // Round to 2 decimal places
    interval,
    repetitions,
    nextReview
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
