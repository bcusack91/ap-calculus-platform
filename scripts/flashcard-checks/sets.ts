/**
 * A "set" is one file of card-check questions:
 *  - a video deck, named by its lesson key (`mcat-circ1`): cards come from
 *    src/data/video-lesson-flashcards, file src/data/flashcard-checks/<key>.ts
 *  - a topic's own cards, named by the topic slug: cards come from
 *    <outDir>/<slug>-cards.json (written by dump-context.ts from the database),
 *    file src/data/flashcard-checks/topics/<slug>.ts
 */
import { readFileSync } from 'fs'
import { REVIEW_DECKS } from '../../src/data/video-lesson-flashcards'
import type { CardCheck } from '../../src/lib/flashcard-check-core'

export const isVideoSet = (key: string) => key in REVIEW_DECKS

export const checksPath = (key: string) => (isVideoSet(key) ? `../../src/data/flashcard-checks/${key}` : `../../src/data/flashcard-checks/topics/${key}`)

export async function loadChecks(key: string): Promise<Record<string, CardCheck>> {
  return ((await import(checksPath(key))) as { checks: Record<string, CardCheck> }).checks
}

export function loadFronts(key: string, out: string): string[] {
  if (isVideoSet(key)) return Object.values(REVIEW_DECKS[key]).flat().map((c) => c.front)
  return (JSON.parse(readFileSync(`${out}/${key}-cards.json`, 'utf8')) as { front: string }[]).map((c) => c.front)
}
