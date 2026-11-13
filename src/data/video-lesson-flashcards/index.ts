import type { ReviewCard, ReviewCardLookup } from '@/lib/video-lesson-core'
import { decks as mcatCirc1 } from './mcat-circ1'
import { decks as mcatCirc2 } from './mcat-circ2'

/**
 * Review flashcards for section-based video lessons, by lesson key (the
 * `lesson-<key>` clip tag) and source video number. The player offers a
 * video's deck before its "Remember" section (see ReviewCard in
 * src/lib/video-lesson-core.ts).
 *
 * STANDARD for every new lesson: add `<key>.ts` here with one deck per video
 * (about 5–11 cards: every equation the video introduces, then its key facts
 * or method steps) and register it below. The lesson sync refuses to publish
 * a video that has a recap section and no deck.
 */
export const REVIEW_DECKS: Record<string, Record<number, ReviewCard[]>> = {
  'mcat-circ1': mcatCirc1,
  'mcat-circ2': mcatCirc2,
}

export const reviewCardsFor: ReviewCardLookup = (lessonKey, video) => REVIEW_DECKS[lessonKey]?.[video]
