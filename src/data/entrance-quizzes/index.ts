/**
 * Entrance Quiz Registry
 *
 * Maps topic slugs to their entrance quiz loaders.
 * Uses dynamic imports for code splitting.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
export type { EntranceQuizQuestion }

type EntranceQuizLoader = () => Promise<{
  generateEntranceQuiz: () => EntranceQuizQuestion[]
  getEntranceQuizParts: () => { partNumber: number; partTitle: string }[]
}>

const entranceQuizLoaders: Record<string, EntranceQuizLoader> = {
  'moles-molar-mass': () => import('./moles-molar-mass'),
}

/**
 * Check if a topic has an entrance quiz available.
 */
export function hasEntranceQuiz(topicSlug: string): boolean {
  return topicSlug in entranceQuizLoaders
}

/**
 * Load and generate entrance quiz questions for a topic.
 * Returns null if no entrance quiz exists for the topic.
 */
export async function loadEntranceQuiz(topicSlug: string): Promise<{
  questions: EntranceQuizQuestion[]
  parts: { partNumber: number; partTitle: string }[]
} | null> {
  const loader = entranceQuizLoaders[topicSlug]
  if (!loader) return null
  const mod = await loader()
  return {
    questions: mod.generateEntranceQuiz(),
    parts: mod.getEntranceQuizParts(),
  }
}
