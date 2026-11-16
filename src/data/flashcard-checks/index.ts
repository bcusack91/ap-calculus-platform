import { checkKey, type CardCheck } from '@/lib/flashcard-check-core'
import { checks as mcatCirc1 } from './mcat-circ1'
import { checks as mcatCirc2 } from './mcat-circ2'
import { checks as mcatCirc3 } from './mcat-circ3'

/**
 * Card-check questions by TOPIC, then by the card's front text. A card has a
 * check when its topic is listed here and its front has an entry; cards
 * without one are simply left out of the daily check. To cover a new deck:
 * write its file (gate: scripts/flashcard-checks/validate.ts) and add its
 * topic here.
 */
const BY_TOPIC: Record<string, Record<string, CardCheck>[]> = {
  'mcat-physics-electricity-dc-circuits-mcat': [mcatCirc1],
  'mcat-physics-electricity-kirchhoff-power-mcat': [mcatCirc2],
  'mcat-physics-electricity-emf-capacitors-mcat': [mcatCirc3],
}

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
