/**
 * Lessons that teach the same concept twice inside one course.
 *
 * The catalog grew a second, level-suffixed lesson for some concepts
 * ("multiplying-decimals" and "multiplying-decimals-grade5"). Both are real
 * lessons a student can work through, so neither is deleted or redirected —
 * but two pages competing for one query split whatever ranking either could
 * earn. The weaker page stays fully usable in the app and drops out of the
 * index, so search traffic lands on the fuller lesson.
 *
 * Each entry below was checked by hand: the kept page has several times the
 * written content and at least as many practice problems, and neither page
 * was earning impressions that noindexing would throw away. Pages that were
 * close in quality were deliberately left alone — see
 * scripts/audit-duplicate-topics.ts, which reports them for review.
 */
export const DUPLICATE_TOPICS: Record<string, string> = {
  // 162 words, no problems -> 1,013 words, 5 problems
  'multiplying-fractions-whole-numbers-grade4': 'multiplying-fractions-whole-numbers',
  // 196 words, no problems -> 779 words, 10 problems
  'multiplying-decimals-grade5': 'multiplying-decimals',
  // 211 words, no problems -> 798 words, 10 problems
  'dividing-decimals-grade5': 'dividing-decimals',
  // 190 words, no problems -> 894 words, 5 problems
  'multiply-divide-fractions-grade5': 'multiplying-dividing-fractions',
  // 239 words, no problems -> 1,645 words, 5 problems
  'angle-relationships-grade7': 'angle-relationships',
  // 200 words, no problems -> 1,571 words, 5 problems
  'percents-applications-prealg': 'percent-applications',
  // 175 words, no problems -> 1,556 words, 8 problems
  'simplifying-radicals-alg1': 'simplifying-radicals-algebra1',
}

/** True when this lesson has a fuller twin that should be the indexed one. */
export function isDuplicateTopic(slug: string): boolean {
  return slug in DUPLICATE_TOPICS
}
