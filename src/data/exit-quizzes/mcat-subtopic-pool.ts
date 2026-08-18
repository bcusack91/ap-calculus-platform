import { matchSubtopic } from '@/data/mcat-practice/subtopic-map'
import { relevantPool, textMatchesSlug } from './relevance-fallback'

/**
 * Subtopic-aware pool selection for MCAT AREA banks whose questions carry no
 * per-question subtopic tags (biology, organ systems, genetics, psych/soc,
 * CARS). Classifies each question with the SAME keyword tables the diagnostic
 * uses to attribute misses to subtopics (mcat-practice/subtopic-map), so the
 * exit quiz for e.g. mcat-cell-biology-membrane-transport-mcat asks membrane-
 * transport questions — aligned with the diagnostic's recommendation that sent
 * the student there. Falls back to slug-term relevance, then the whole area
 * pool (area-level topic slugs legitimately use the full pool).
 */

interface AreaQuestion {
  question: string
  options: string[]
  explanation: string
  /** Authored questions carry an exact curriculum subtopic tag. */
  subtopicSlug?: string
}

const MIN_MATCHED = 3

export function mcatSubtopicPool<T extends AreaQuestion>(
  pool: T[],
  domainId: string,
  topicSlug: string,
): T[] {
  // Tiered: STRONG = keyword-table classification or a question/explanation
  // mention; WEAK = only the options mention it (distractors name wrong-topic
  // concepts by design, so these are top-up only).
  // Tier 0: exact subtopic tags (the authored bank) — trust these outright.
  const exact = pool.filter((q) => q.subtopicSlug === topicSlug)
  if (exact.length >= MIN_MATCHED) return exact

  const strong: T[] = [...exact]
  const weak: T[] = []
  for (const q of pool) {
    if (q.subtopicSlug === topicSlug) continue // already in strong
    if (
      matchSubtopic(domainId, q.question, q.options, q.explanation)?.slug === topicSlug ||
      textMatchesSlug(`${q.question} ${q.explanation}`, topicSlug)
    ) strong.push(q)
    else if (textMatchesSlug(q.options.join(' '), topicSlug)) weak.push(q)
  }
  if (strong.length >= MIN_MATCHED) return strong
  if (strong.length + weak.length >= MIN_MATCHED) return [...strong, ...weak]
  return relevantPool(pool, topicSlug)
}
