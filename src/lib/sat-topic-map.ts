// Shared mapping between the SAT Prep curriculum (DB course `sat-prep`, whose
// Topic slugs are seeded per-lesson, e.g. `sat-quadratic-equations`) and the 4
// SAT competitive question banks, which are keyed by pseudo-slugs in
// competitive-utils' mcqBanks: 'sat-math', 'sat-reading',
// 'sat-punctuation-commas-semicolons', 'sat-punctuation'.
//
// Used by:
//   - /api/competitive/unlock-check  (course progress → bank category unlock)
//   - /api/exit-quiz/submit          (passed SAT quiz → unlocked category keys)
//   - assignment-autocomplete        (SAT competitive match → sat-prep
//                                     COMPETITIVE_PRACTICE assignment completion)

/** The 4 competitive-bank pseudo-slugs SAT matches are created under. */
export const SAT_BANK_SLUGS = [
  'sat-math',
  'sat-reading',
  'sat-punctuation-commas-semicolons',
  'sat-punctuation',
] as const

export type SatBankSlug = (typeof SAT_BANK_SLUGS)[number]

/** Student-facing labels for the 4 SAT banks (single source for UI pickers). */
export const SAT_BANK_LABELS: Record<SatBankSlug, string> = {
  'sat-math': 'Math',
  'sat-reading': 'Reading',
  'sat-punctuation-commas-semicolons': 'Punctuation: Commas & Semicolons',
  'sat-punctuation': 'Punctuation: All Marks',
}

// SAT Math section topics (Heart of Algebra, Advanced Math, Problem Solving &
// Data Analysis, Additional Topics) — sourced from the prisma seed scripts.
const SAT_MATH_TOPICS = new Set([
  'sat-heart-of-algebra',
  'sat-linear-equations-inequalities',
  'sat-linear-inequalities-graphs',
  'sat-systems-equations',
  'sat-systems-linear-equations',
  'sat-functions',
  'sat-nonlinear-equations-functions',
  'sat-passport-advanced-math',
  'sat-quadratic-equations',
  'sat-exponents-radicals',
  'sat-exponential-functions',
  'sat-polynomials-factoring',
  'sat-polynomial-rational-expressions',
  'sat-complex-numbers',
  'sat-problem-solving-data',
  'sat-ratios-proportions-percents',
  'sat-data-statistics',
  'sat-statistics-data-interpretation',
  'sat-scatterplots-line-fit',
  'sat-probability-two-way-tables',
  'sat-additional-topics',
  'sat-circles',
  'sat-geometry-basics',
  'sat-geometry-trigonometry',
])

// SAT Reading & Writing topics that are NOT conventions/punctuation drills
// (information & ideas, craft & structure, expression of ideas).
const SAT_READING_TOPICS = new Set([
  'sat-reading-writing',
  'sat-reading-comprehension',
  'sat-reading-info-ideas',
  'sat-central-ideas-details',
  'sat-command-evidence',
  'sat-finding-textual-evidence',
  'sat-craft-structure',
  'sat-vocabulary-context',
  'sat-expression-ideas',
  'sat-transitions-organization',
  'sat-conciseness-redundancy',
  'sat-effective-language-use',
])

// Standard English Conventions topics — grammar + punctuation. A match played
// on EITHER punctuation bank counts toward these.
const SAT_PUNCTUATION_TOPICS = new Set([
  'sat-punctuation',
  'sat-punctuation-commas-semicolons',
  'sat-english-conventions',
  'sat-grammar-conventions',
  'sat-grammar-usage',
  'sat-sentence-structure',
  'sat-subject-verb-agreement',
  'sat-pronoun-agreement',
])

/**
 * Map a sat-prep course topic slug to the competitive bank slug(s) that cover
 * it. Strategy-only topics (test strategies, time management, …) and non-SAT
 * slugs return null.
 */
export function satBankSlugsForCourseTopic(topicSlug: string): SatBankSlug[] | null {
  if (SAT_MATH_TOPICS.has(topicSlug)) return ['sat-math']
  if (SAT_READING_TOPICS.has(topicSlug)) return ['sat-reading']
  if (SAT_PUNCTUATION_TOPICS.has(topicSlug)) return ['sat-punctuation', 'sat-punctuation-commas-semicolons']
  return null
}

/**
 * Competitive matches can be played on granular SAT slugs — the 4 math areas
 * ('sat-math-algebra', …) and the 4 R&W domains ('sat-rw-conventions', …),
 * plus the mixed 'sat-rw'. Collapse any of these to the canonical bank slug used
 * for assignment auto-completion. Non-SAT / already-canonical slugs pass through.
 */
export function canonicalSatBankSlug(slug: string): string {
  if (slug === 'sat-math' || slug.startsWith('sat-math-')) return 'sat-math'
  if (slug === 'sat-rw-conventions') return 'sat-punctuation'
  if (slug === 'sat-rw' || slug.startsWith('sat-rw-')) return 'sat-reading'
  return slug
}
