/**
 * Registry of seed flashcards for topics that shipped with none.
 * Consumed by scripts/seed-flashcards.ts and scripts/verify-seed-flashcards.ts.
 */
import type { FlashcardsByTopic } from './types'
import { mcatChemPhysFlashcards } from './mcat-chemphys'
import { mcatBioBiochemFlashcards } from './mcat-biobiochem'
import { mcatPsychSocCarsFlashcards } from './mcat-psychsoc-cars'
import { mcatStrategyFlashcards } from './mcat-strategy'

export const SEED_FLASHCARDS: FlashcardsByTopic = {
  ...mcatChemPhysFlashcards,
  ...mcatBioBiochemFlashcards,
  ...mcatPsychSocCarsFlashcards,
  ...mcatStrategyFlashcards,
}

export type { SeedFlashcard, FlashcardsByTopic } from './types'
