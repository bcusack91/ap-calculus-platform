/**
 * ASVAB — exit-quiz pool aggregator (platform-owned; asvab-pipeline PLAN.md).
 *
 * One pool file per subtest under ./asvab/<unit>.ts, each exporting
 * `questions: AsvabExitQuestion[]`. Every ASVAB topic slug is registered in
 * ./index.ts against this module; a quiz draws ONLY items tagged with its exact
 * topic slug (no whole-course fallback: an ASVAB quiz must never serve another
 * subtest's items).
 */
import { shuffleArray } from '@/lib/shuffle-options'
import type { AsvabExitQuestion } from './asvab/types'
import { questions as wordKnowledge } from './asvab/word-knowledge'
import { questions as paragraphComprehension } from './asvab/paragraph-comprehension'
import { questions as arithmeticReasoning } from './asvab/arithmetic-reasoning'
import { questions as mathematicsKnowledge } from './asvab/mathematics-knowledge'
import { questions as generalScience } from './asvab/general-science'
import { questions as electronicsInformation } from './asvab/electronics-information'
import { questions as autoInformation } from './asvab/auto-information'
import { questions as shopInformation } from './asvab/shop-information'
import { questions as mechanicalComprehension } from './asvab/mechanical-comprehension'
import { questions as assemblingObjects } from './asvab/assembling-objects'
import { questions as testPrep } from './asvab/test-prep'

export type { AsvabExitQuestion }

/** Every ASVAB exit-quiz item, in unit order. Seeded consumers rely on this order. */
export const asvabQuestionPool: AsvabExitQuestion[] = [
  ...wordKnowledge,
  ...paragraphComprehension,
  ...arithmeticReasoning,
  ...mathematicsKnowledge,
  ...generalScience,
  ...electronicsInformation,
  ...autoInformation,
  ...shopInformation,
  ...mechanicalComprehension,
  ...assemblingObjects,
  ...testPrep,
]

/** The items of one topic (exact topicSlug match). */
export function asvabTopicPool(topicSlug: string): AsvabExitQuestion[] {
  return asvabQuestionPool.filter((q) => q.topicSlug === topicSlug)
}

export function generateExitQuiz(count = 10, topicSlug?: string, difficulty?: string) {
  let pool = topicSlug ? asvabTopicPool(topicSlug) : asvabQuestionPool
  if (difficulty === 'easy' || difficulty === 'medium' || difficulty === 'hard') {
    const tier = pool.filter((q) => q.difficulty === difficulty)
    if (tier.length > 0) pool = tier
  }
  return shuffleArray(pool)
    .slice(0, count)
    .map((q, i) => ({
      id: `${q.topicSlug}-q${i}`,
      question: q.question,
      options: q.options,
      correctIndex: q.correctAnswer,
      explanation: q.explanation,
      category: q.domain,
      topicSlug: q.topicSlug,
      partNumber: q.part,
      difficulty: q.difficulty,
      ...(q.figure ? { figure: q.figure, figureAlt: q.figureAlt ?? '' } : {}),
    }))
}
