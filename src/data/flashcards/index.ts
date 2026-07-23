/**
 * Registry of seed flashcards for topics that shipped with none.
 * Consumed by scripts/seed-flashcards.ts and scripts/verify-seed-flashcards.ts.
 */
import type { FlashcardsByTopic } from './types'
import { mcatChemPhysFlashcards } from './mcat-chemphys'
import { mcatBioBiochemFlashcards } from './mcat-biobiochem'
import { mcatPsychSocCarsFlashcards } from './mcat-psychsoc-cars'
import { mcatStrategyFlashcards } from './mcat-strategy'
import { apesFlashcards } from './apes'
import { mathHsFlashcards } from './math-hs'
import { mathElementaryFlashcards } from './math-elementary'
import { chemCsFlashcards } from './chem-cs'
import { humanitiesFlashcards } from './humanities'

export const SEED_FLASHCARDS: FlashcardsByTopic = {
  ...mcatChemPhysFlashcards,
  ...mcatBioBiochemFlashcards,
  ...mcatPsychSocCarsFlashcards,
  ...mcatStrategyFlashcards,
  ...apesFlashcards,
  ...mathHsFlashcards,
  ...mathElementaryFlashcards,
  ...chemCsFlashcards,
  ...humanitiesFlashcards,
}

export type { SeedFlashcard, FlashcardsByTopic } from './types'
