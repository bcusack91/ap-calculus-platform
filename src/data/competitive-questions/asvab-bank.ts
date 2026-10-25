/**
 * ASVAB competitive bank aggregator (platform-owned; asvab-pipeline PLAN.md).
 *
 * One bank file per subtest under ./asvab/<unit>.ts, each exporting
 * `questions: AsvabCompetitiveQuestion[]`. A match slug resolves as:
 *   - 'asvab'                      -> the whole bank
 *   - a Category slug ('asvab-arithmetic-reasoning') -> that subtest's topics
 *   - a topic slug ('asvab-ar-ratios-rates')         -> that topic only
 * Every topic slug draws its own items; nothing falls back to another subtest.
 * Routed from src/lib/competitive-utils.ts (generateMatchQuestions), the
 * daily challenge, the teacher lobby and the bot-pacing tables.
 */
import { shuffleArray } from '@/lib/shuffle-options'
import { ASVAB_CATEGORIES } from '@/lib/course-includes'
import type { AsvabCompetitiveQuestion } from './asvab/types'
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

export type { AsvabCompetitiveQuestion }

/** The course slug: a match on it draws the whole bank. */
export const ASVAB_ALL_SLUG = 'asvab'

/** Raw, UNSHUFFLED pool in unit order (seeded consumers and guard tests rely on it). */
export const asvabQuestionBank: AsvabCompetitiveQuestion[] = [
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

/** The topic slugs a match slug covers (empty when the slug is not an ASVAB slug). */
export function asvabTopicsForSlug(slug: string): string[] {
  if (slug === ASVAB_ALL_SLUG) return ASVAB_CATEGORIES.flatMap((c) => c.topics)
  const cat = ASVAB_CATEGORIES.find((c) => c.slug === slug)
  if (cat) return [...cat.topics]
  return ASVAB_CATEGORIES.some((c) => c.topics.includes(slug)) ? [slug] : []
}

/** True for the course slug, a subtest Category slug or a topic slug. */
export function isAsvabSlug(slug: string): boolean {
  return asvabTopicsForSlug(slug).length > 0
}

/**
 * ASVAB draw. With no slug, the whole bank; with an ASVAB slug, only the items
 * of the topics it covers (possibly none while a unit file is still a stub).
 */
export function getAsvabQuestions(count: number = 10, topicSlug?: string): AsvabCompetitiveQuestion[] {
  let pool = asvabQuestionBank
  if (topicSlug && topicSlug !== ASVAB_ALL_SLUG) {
    const wanted = new Set(asvabTopicsForSlug(topicSlug))
    pool = pool.filter((q) => wanted.has(q.topicSlug))
  }
  const shuffled = shuffleArray(pool)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

/** Items per topic slug (the competitive topic pickers and the teacher lobby show counts). */
export function asvabQuestionCount(slug: string): number {
  const wanted = new Set(asvabTopicsForSlug(slug))
  return asvabQuestionBank.filter((q) => wanted.has(q.topicSlug)).length
}
