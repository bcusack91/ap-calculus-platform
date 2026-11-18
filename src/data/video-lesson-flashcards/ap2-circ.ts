import type { ReviewCard } from '@/lib/video-lesson-core'
import { decks as c1 } from './mcat-circ1'
import { decks as c2 } from './mcat-circ2'
import { decks as c3 } from './mcat-circ3'
import { decks as c4 } from './mcat-circ4'

/**
 * Review flashcards for the AP Physics 2 circuits video lessons (`ap2-circ1`,
 * `ap2-circ2`, `ap2-circ3`). Those lessons reuse the MCAT circuits videos
 * (scripts/video-lessons/ap-physics2-circuits.ts), so each AP video takes the
 * deck of the MCAT video it reuses, minus the cards on AP Chemistry content
 * (galvanic cells, ΔG = −nFE). PICKS is the single list of which MCAT video
 * each AP video reuses; the lesson builder reads it too.
 */
const SOURCE = { 'mcat-circ1': c1, 'mcat-circ2': c2, 'mcat-circ3': c3, 'mcat-circ4': c4 } as const
type Pick = [keyof typeof SOURCE, number]

const NOT_AP = /Faraday|moles of electrons|EMF come from|galvanic/i

const build = (picks: Pick[]): Record<number, ReviewCard[]> =>
  Object.fromEntries(picks.map(([key, video], i) => [i + 1, (SOURCE[key][video] ?? []).filter((c) => !NOT_AP.test(c.front))]))

export const PICKS: Record<string, Pick[]> = {
  'ap2-circ1': [['mcat-circ1', 1], ['mcat-circ1', 2], ['mcat-circ1', 3], ['mcat-circ1', 4], ['mcat-circ1', 5], ['mcat-circ1', 6], ['mcat-circ2', 5], ['mcat-circ2', 6], ['mcat-circ3', 1], ['mcat-circ3', 2]],
  'ap2-circ2': [['mcat-circ1', 7], ['mcat-circ1', 8], ['mcat-circ2', 3], ['mcat-circ2', 4], ['mcat-circ2', 7], ['mcat-circ2', 8], ['mcat-circ3', 5], ['mcat-circ3', 6], ['mcat-circ3', 7], ['mcat-circ3', 8], ['mcat-circ4', 1], ['mcat-circ4', 2]],
  'ap2-circ3': [['mcat-circ2', 1], ['mcat-circ2', 2], ['mcat-circ3', 3], ['mcat-circ3', 4], ['mcat-circ4', 3], ['mcat-circ4', 4], ['mcat-circ4', 7], ['mcat-circ4', 8]],
}

export const ap2Circ1 = build(PICKS['ap2-circ1'])
export const ap2Circ2 = build(PICKS['ap2-circ2'])
export const ap2Circ3 = build(PICKS['ap2-circ3'])
