import type { ReviewCard, ReviewCardLookup } from '@/lib/video-lesson-core'
import { decks as mcatCirc1 } from './mcat-circ1'
import { decks as mcatCirc2 } from './mcat-circ2'
import { decks as mcatCirc3 } from './mcat-circ3'
import { decks as mcatCirc4 } from './mcat-circ4'
import { decks as mcatFl1 } from './mcat-fl1'
import { decks as mcatFl2 } from './mcat-fl2'
import { decks as mcatFl3 } from './mcat-fl3'
import { decks as mcatFl4 } from './mcat-fl4'
import { ap2Circ1, ap2Circ2, ap2Circ3 } from './ap2-circ'

/**
 * Review flashcards for section-based video lessons, by lesson key (the
 * `lesson-<key>` clip tag) and source video number. The player offers a
 * video's deck before its "Remember" section (see ReviewCard in
 * src/lib/video-lesson-core.ts).
 *
 * STANDARD for every new lesson: add `<key>.ts` here with one deck per video
 * (about 5–15 cards: every equation the video introduces, then its key facts
 * or method steps) and register it below. Any answer that shows an equation must
 * also say what each symbol in it stands for. Open each concept video's deck with
 * "what symbol stands for X, and what is its SI unit?" cards for every quantity
 * the video introduces. The lesson sync refuses to publish
 * a video that has a recap section and no deck.
 */
export const REVIEW_DECKS: Record<string, Record<number, ReviewCard[]>> = {
  'mcat-circ1': mcatCirc1,
  'mcat-circ2': mcatCirc2,
  'mcat-circ3': mcatCirc3,
  'mcat-circ4': mcatCirc4,
  'mcat-fl1': mcatFl1,
  'mcat-fl2': mcatFl2,
  'mcat-fl3': mcatFl3,
  'mcat-fl4': mcatFl4,
  'ap2-circ1': ap2Circ1,
  'ap2-circ2': ap2Circ2,
  'ap2-circ3': ap2Circ3,
}

export const reviewCardsFor: ReviewCardLookup = (lessonKey, video) => REVIEW_DECKS[lessonKey]?.[video]
