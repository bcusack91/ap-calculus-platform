import { checkKey, type CardCheck } from '@/lib/flashcard-check-core'
import { checks as mcatCirc1 } from './mcat-circ1'
import { checks as mcatCirc2 } from './mcat-circ2'
import { checks as mcatCirc3 } from './mcat-circ3'
import { checks as mcatCirc4 } from './mcat-circ4'
import { checks as mcatFl1 } from './mcat-fl1'
import { checks as mcatFl2 } from './mcat-fl2'
import { checks as mcatFl3 } from './mcat-fl3'
import { checks as mcatFl4 } from './mcat-fl4'
import { TOPIC_CHECKS } from './topics'
import { VARIANTS } from './variants'

/**
 * Card-check questions by TOPIC, then by the card's front text. A card has a
 * check when its topic is listed here and its front has an entry; cards
 * without one are simply left out of the daily check. To cover a new set:
 * see scripts/flashcard-checks/AUTHOR-BRIEF.md (write, validate, blind-solve,
 * then register.ts for a topic's cards, or add a video deck below).
 */
const VIDEO_FILES: Record<string, Record<string, CardCheck>> = {
  'mcat-circ1': mcatCirc1,
  'mcat-circ2': mcatCirc2,
  'mcat-circ3': mcatCirc3,
  'mcat-circ4': mcatCirc4,
  'mcat-fl1': mcatFl1,
  'mcat-fl2': mcatFl2,
  'mcat-fl3': mcatFl3,
  'mcat-fl4': mcatFl4,
}
/** Topic → the video decks (set names) whose review cards it holds. */
const VIDEO_DECKS: Record<string, string[]> = {
  'mcat-physics-electricity-dc-circuits-mcat': ['mcat-circ1'],
  'mcat-physics-electricity-kirchhoff-power-mcat': ['mcat-circ2'],
  'mcat-physics-electricity-emf-capacitors-mcat': ['mcat-circ3'],
  'mcat-physics-electricity-rc-circuits-mcat': ['mcat-circ4'],
  'mcat-physics-mechanics-fluids-mcat': ['mcat-fl1'],
  'mcat-physics-mechanics-buoyancy-mcat': ['mcat-fl2'],
  'mcat-physics-mechanics-fluid-dynamics-mcat': ['mcat-fl3'],
  'mcat-physics-mechanics-viscosity-mcat': ['mcat-fl4'],
  // AP Physics 2 reuses the MCAT circuits videos and their review cards (video-lesson-flashcards/ap2-circ.ts).
  'current-resistance-ohms-law': ['mcat-circ1', 'mcat-circ2', 'mcat-circ3'],
  'series-parallel-circuits': ['mcat-circ1', 'mcat-circ2', 'mcat-circ3', 'mcat-circ4'],
  'kirchhoffs-laws': ['mcat-circ2', 'mcat-circ3', 'mcat-circ4'],
}

/**
 * One set (a topic's own cards, named by its slug, or a video deck) as
 * front → the card's questions: its first, then any further ones written for
 * it (variants/, same set name).
 */
function questionsOf(set: string, checks: Record<string, CardCheck>): [string, CardCheck[]][] {
  const more = new Map(Object.entries(VARIANTS[set] ?? {}).map(([front, v]) => [checkKey(front), v.more]))
  return Object.entries(checks).map(([front, c]) => [checkKey(front), [c, ...(more.get(checkKey(front)) ?? [])]])
}

// A topic's own cards (topics/, registered by scripts/flashcard-checks/register.ts)
// sit beside its video decks; a front in both keeps the video deck's questions.
const BY_TOPIC: Record<string, [string, CardCheck[]][]> = {}
for (const [topic, checks] of Object.entries(TOPIC_CHECKS)) BY_TOPIC[topic] = questionsOf(topic, checks)
for (const [topic, sets] of Object.entries(VIDEO_DECKS)) {
  BY_TOPIC[topic] = [...(BY_TOPIC[topic] ?? []), ...sets.flatMap((s) => questionsOf(s, VIDEO_FILES[s]))]
}

const INDEX = new Map<string, Map<string, CardCheck[]>>(Object.entries(BY_TOPIC).map(([topic, list]) => [topic, new Map(list)]))

/** Topics with at least one card-check question. */
export const CARD_CHECK_TOPICS: string[] = Object.keys(BY_TOPIC)

/** Every check question written for a card (the first, then its further ones); empty when none has been written. */
export function cardChecksFor(topicSlug: string, front: string): CardCheck[] {
  return INDEX.get(topicSlug)?.get(checkKey(front)) ?? []
}

/** One of a card's check questions (the first unless `variant` says otherwise), or null when it doesn't exist. */
export function cardCheckFor(topicSlug: string, front: string, variant: number = 0): CardCheck | null {
  return cardChecksFor(topicSlug, front)[variant] ?? null
}
