/**
 * The daily card check (owner, Nov 2026): a short multiple-choice quiz on the
 * cards a student reviewed that day. Each card has ONE check question, written
 * for that card (src/data/flashcard-checks), that asks the student to USE the
 * card's idea in a new situation, so pressing "Good" on recognition alone
 * shows up as a miss. Pure types and rules; safe on the client.
 */
export type CardCheck = {
  question: string
  options: [string, string, string, string]
  correctAnswer: 0 | 1 | 2 | 3
  explanation: string
}

/** Most questions in one check. */
export const CARD_CHECK_MAX = 15

/** A student with a backlog may take the check after this many reviews in a day (repeats count). A teacher can set their class's number. */
export const CARD_CHECK_DEFAULT_AFTER_REVIEWS = 150
export const CARD_CHECK_AFTER_REVIEWS_MIN = 10
export const CARD_CHECK_AFTER_REVIEWS_MAX = 1000

/** Card identity inside a topic: its front text with whitespace collapsed. */
export function checkKey(front: string): string {
  return front.replace(/\s+/g, ' ').trim()
}

/** What a student rated a card when it was last shown, before the check. */
export type CheckRating = 'AGAIN' | 'HARD' | 'GOOD' | 'EASY'

/** A card reviewed in the check's window that has a check question. */
export type CheckCandidate = { flashcardId: string; context: string; front: string; topicSlug: string; rating: CheckRating; wasNew: boolean }

/** One question of a stored check attempt. `order[i]` is the authored option index shown in position i. */
export type CheckItem = {
  flashcardId: string
  context: string
  front: string
  topicSlug: string
  rating: CheckRating
  order: number[]
  chosen: number | null
  correct: boolean | null
}

/** True when the student told the scheduler they knew the card. */
export function ratedConfident(rating: CheckRating): boolean {
  return rating === 'GOOD' || rating === 'EASY'
}

/**
 * Which cards the check asks about, at most `max`: cards the student rated
 * Good or Easy come first (new ones before old), because that is where a
 * too-confident rating hides; Hard and Again fill what is left. `rand` orders
 * cards inside a tier, and the final list is shuffled so the tiers don't show.
 */
export function pickCheckCards(cands: readonly CheckCandidate[], rand: () => number, max: number = CARD_CHECK_MAX): CheckCandidate[] {
  const tier = (c: CheckCandidate) => (ratedConfident(c.rating) ? (c.wasNew ? 0 : 1) : c.rating === 'HARD' ? 2 : 3)
  const keyed = cands.map((c) => ({ c, t: tier(c), r: rand() }))
  keyed.sort((a, b) => a.t - b.t || a.r - b.r)
  const picked = keyed.slice(0, max).map((k) => ({ c: k.c, r: rand() }))
  picked.sort((a, b) => a.r - b.r)
  return picked.map((p) => p.c)
}

/** A random shown order of the four authored option indexes. */
export function shuffledOrder(rand: () => number): number[] {
  const o = [0, 1, 2, 3]
  for (let i = o.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[o[i], o[j]] = [o[j], o[i]]
  }
  return o
}

/** Whether the option shown in position `chosen` is the keyed one. */
export function gradeChoice(order: readonly number[], correctAnswer: number, chosen: number | null): boolean {
  return chosen != null && order[chosen] === correctAnswer
}

/** Start of the student's next local study day (the scheduler's 4 am rollover), from JS getTimezoneOffset minutes. */
export function nextStudyDayStart(now: Date, tzOffsetMinutes?: number | null): Date {
  if (typeof tzOffsetMinutes !== 'number' || !Number.isFinite(tzOffsetMinutes) || Math.abs(tzOffsetMinutes) > 14 * 60) {
    return new Date(now.getTime() + 18 * 60 * 60 * 1000)
  }
  const ROLLOVER_H = 4
  const local = new Date(now.getTime() - tzOffsetMinutes * 60 * 1000)
  const day = Date.UTC(local.getUTCFullYear(), local.getUTCMonth(), local.getUTCDate(), ROLLOVER_H)
  // Before 4 am local the "next day" is today's rollover; otherwise tomorrow's.
  const target = local.getTime() < day ? day : day + 24 * 60 * 60 * 1000
  return new Date(target + tzOffsetMinutes * 60 * 1000)
}

/** The classroom threshold, clamped; null/invalid = the site default. */
export function effectiveAfterReviews(values: readonly (number | null | undefined)[]): number {
  const set = values.filter((v): v is number => typeof v === 'number' && Number.isFinite(v))
  if (set.length === 0) return CARD_CHECK_DEFAULT_AFTER_REVIEWS
  return Math.max(CARD_CHECK_AFTER_REVIEWS_MIN, Math.min(CARD_CHECK_AFTER_REVIEWS_MAX, Math.round(Math.min(...set))))
}
