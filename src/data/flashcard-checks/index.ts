import { checkKey, type CardCheck } from '@/lib/flashcard-check-core'
import { checks as mcatCirc1 } from './mcat-circ1'
import { checks as mcatCirc2 } from './mcat-circ2'
import { checks as mcatCirc3 } from './mcat-circ3'
import { checks as mcatCirc4 } from './mcat-circ4'
import { TOPIC_CHECKS } from './topics'

/**
 * Card-check questions by TOPIC, then by the card's front text. A card has a
 * check when its topic is listed here and its front has an entry; cards
 * without one are simply left out of the daily check. To cover a new set:
 * see scripts/flashcard-checks/AUTHOR-BRIEF.md (write, validate, blind-solve,
 * then register.ts for a topic's cards, or add a video deck below).
 */
const VIDEO_DECKS: Record<string, Record<string, CardCheck>[]> = {
  'mcat-physics-electricity-dc-circuits-mcat': [mcatCirc1],
  'mcat-physics-electricity-kirchhoff-power-mcat': [mcatCirc2],
  'mcat-physics-electricity-emf-capacitors-mcat': [mcatCirc3],
  'mcat-physics-electricity-rc-circuits-mcat': [mcatCirc4],
  // AP Physics 2 reuses the MCAT circuits videos and their review cards (video-lesson-flashcards/ap2-circ.ts).
  'current-resistance-ohms-law': [mcatCirc1, mcatCirc2, mcatCirc3],
  'series-parallel-circuits': [mcatCirc1, mcatCirc2, mcatCirc3, mcatCirc4],
  'kirchhoffs-laws': [mcatCirc2, mcatCirc3, mcatCirc4],
}

// A topic's own cards (topics/, registered by scripts/flashcard-checks/register.ts)
// sit beside its video decks; a front in both keeps the video deck's question.
const BY_TOPIC: Record<string, Record<string, CardCheck>[]> = {}
for (const [topic, checks] of Object.entries(TOPIC_CHECKS)) BY_TOPIC[topic] = [checks]
for (const [topic, files] of Object.entries(VIDEO_DECKS)) BY_TOPIC[topic] = [...(BY_TOPIC[topic] ?? []), ...files]

const INDEX = new Map<string, Map<string, CardCheck>>(
  Object.entries(BY_TOPIC).map(([topic, files]) => [
    topic,
    new Map(files.flatMap((f) => Object.entries(f).map(([front, c]) => [checkKey(front), c] as const))),
  ]),
)

/** Topics with at least one card-check question. */
export const CARD_CHECK_TOPICS: string[] = Object.keys(BY_TOPIC)

/** The check question for a card, or null when none has been written. */
export function cardCheckFor(topicSlug: string, front: string): CardCheck | null {
  return INDEX.get(topicSlug)?.get(checkKey(front)) ?? null
}
