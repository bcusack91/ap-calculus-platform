/**
 * Where "study these cards" links go, and the one sentence that explains how
 * cards get into a student's deck.
 *
 * Every topic/plan/assignment/catalog "study" link must open the RATED review
 * session filtered to that topic (/flashcards/review/start?topic=…). That page
 * serves only cards unlocked into the student's active study mode and records
 * every rating. The flip-through viewer at /flashcards/[slug] cannot rate
 * cards, so it is for browsing only — linking "study" there made the
 * "N cards left in this topic today — rate them now" gate loop forever.
 *
 * Pure strings, no session reads: safe to import from ISR/static pages.
 */

/** The unlock rule, stated plainly (src/lib/flashcard-unlock.ts enforces it). */
export const FLASHCARD_UNLOCK_RULE =
  "Cards join your deck when you finish a topic's lesson and take its exit quiz."

/** Rated spaced-repetition session limited to one topic's unlocked cards. */
export function topicFlashcardReviewHref(topicSlug: string): string {
  return `/flashcards/review/start?topic=${encodeURIComponent(topicSlug)}`
}

/** Read-only flip-through of every card in a topic (no ratings, no unlock gate). */
export function topicFlashcardBrowseHref(topicSlug: string): string {
  return `/flashcards/${encodeURIComponent(topicSlug)}`
}
