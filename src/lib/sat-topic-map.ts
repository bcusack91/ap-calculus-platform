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
  // Skill-tier slugs ('sat-skill-<key>') are the newest and finest level; map
  // each to the canonical bank of its section so existing sat-prep assignments
  // keyed to the 4 legacy banks still auto-complete.
  if (slug.startsWith('sat-skill-')) {
    return CONVENTIONS_SKILLS.has(slug) ? 'sat-punctuation'
      : MATH_SKILLS.has(slug) ? 'sat-math'
      : 'sat-reading'
  }
  if (slug === 'sat-math' || slug.startsWith('sat-math-')) return 'sat-math'
  if (slug === 'sat-rw-conventions') return 'sat-punctuation'
  if (slug === 'sat-rw' || slug.startsWith('sat-rw-')) return 'sat-reading'
  return slug
}

// ---------------------------------------------------------------------------
// Curriculum topic ↔ competitive SKILL alignment
// ---------------------------------------------------------------------------
//
// Same problem the MCAT has (see mcat-topic-map.ts): the DB has 35 sat-prep
// curriculum topics organized for STUDYING, while the competitive bank has 37
// playable skills (29 official + 8 practice subdivisions) sized so each holds a
// full match. Renaming
// either side would break saved matches, progress, and assignments, so this map
// translates instead. A teacher who assigns the curriculum topic "Quadratic
// Equations" has that assignment satisfied by a match on the skills whose
// question pools cover it.

/** Every math skill slug (used by canonicalSatBankSlug). */
const MATH_SKILLS = new Set([
  'sat-skill-linear-equations-one-var', 'sat-skill-linear-equations-two-var',
  'sat-skill-linear-functions', 'sat-skill-systems-linear-equations',
  'sat-skill-linear-inequalities', 'sat-skill-equivalent-expressions',
  'sat-skill-nonlinear-equations', 'sat-skill-nonlinear-functions',
  'sat-skill-ratios-rates-units', 'sat-skill-percentages',
  'sat-skill-one-variable-data', 'sat-skill-two-variable-data',
  'sat-skill-probability', 'sat-skill-sample-inference',
  'sat-skill-statistical-claims', 'sat-skill-area-volume',
  'sat-skill-lines-angles-triangles', 'sat-skill-right-triangles-trig',
  'sat-skill-circles',
  // Practice subdivisions (see SatSkill.officialSkill in sat-bank.ts).
  'sat-skill-systems-inequalities', 'sat-skill-graphing-linear',
  'sat-skill-quadratic-equations', 'sat-skill-quadratic-graphs',
  'sat-skill-exponential-functions', 'sat-skill-polynomial-rational',
  'sat-skill-radicals-absolute-complex', 'sat-skill-function-notation-transformations',
])

/** The 2 Standard English Conventions skills. */
const CONVENTIONS_SKILLS = new Set(['sat-skill-boundaries', 'sat-skill-form-structure-sense'])

/** Curriculum topic slug → competitive skill slug(s) covering it. */
const CURRICULUM_TO_SKILLS: Record<string, string[]> = {
  // --- Math: Heart of Algebra / linear ---
  'sat-heart-of-algebra': ['sat-skill-linear-equations-one-var', 'sat-skill-linear-equations-two-var'],
  'sat-linear-equations-inequalities': ['sat-skill-linear-equations-one-var', 'sat-skill-linear-equations-two-var', 'sat-skill-linear-inequalities'],
  'sat-linear-inequalities-graphs': ['sat-skill-linear-inequalities', 'sat-skill-systems-inequalities', 'sat-skill-graphing-linear'],
  'sat-systems-equations': ['sat-skill-systems-linear-equations'],
  'sat-systems-linear-equations': ['sat-skill-systems-linear-equations'],
  'sat-functions': ['sat-skill-linear-functions', 'sat-skill-nonlinear-functions', 'sat-skill-function-notation-transformations'],

  // --- Math: Advanced Math ---
  'sat-nonlinear-equations-functions': ['sat-skill-nonlinear-equations', 'sat-skill-nonlinear-functions'],
  'sat-passport-advanced-math': ['sat-skill-equivalent-expressions', 'sat-skill-nonlinear-equations'],
  'sat-quadratic-equations': ['sat-skill-nonlinear-equations', 'sat-skill-quadratic-equations', 'sat-skill-quadratic-graphs'],
  'sat-exponents-radicals': ['sat-skill-equivalent-expressions', 'sat-skill-radicals-absolute-complex'],
  'sat-exponential-functions': ['sat-skill-nonlinear-functions', 'sat-skill-exponential-functions'],
  'sat-polynomials-factoring': ['sat-skill-equivalent-expressions', 'sat-skill-polynomial-rational'],
  'sat-polynomial-rational-expressions': ['sat-skill-equivalent-expressions', 'sat-skill-polynomial-rational'],
  'sat-complex-numbers': ['sat-skill-nonlinear-equations', 'sat-skill-radicals-absolute-complex'],

  // --- Math: Problem-Solving & Data Analysis ---
  'sat-problem-solving-data': ['sat-skill-ratios-rates-units', 'sat-skill-percentages'],
  'sat-ratios-proportions-percents': ['sat-skill-ratios-rates-units', 'sat-skill-percentages'],
  'sat-data-statistics': ['sat-skill-one-variable-data', 'sat-skill-statistical-claims'],
  'sat-statistics-data-interpretation': ['sat-skill-one-variable-data', 'sat-skill-sample-inference'],
  'sat-scatterplots-line-fit': ['sat-skill-two-variable-data'],
  'sat-probability-two-way-tables': ['sat-skill-probability'],

  // --- Math: Geometry & Trigonometry ---
  'sat-additional-topics': ['sat-skill-area-volume', 'sat-skill-circles'],
  'sat-circles': ['sat-skill-circles'],
  'sat-geometry-basics': ['sat-skill-lines-angles-triangles', 'sat-skill-area-volume'],
  'sat-geometry-trigonometry': ['sat-skill-right-triangles-trig', 'sat-skill-lines-angles-triangles'],

  // --- Reading & Writing: Information and Ideas ---
  'sat-reading-writing': ['sat-skill-central-ideas-details', 'sat-skill-words-in-context'],
  // The DB has no dedicated Craft & Structure topic, so the general reading
  // topic carries text-structure and cross-text work as well.
  'sat-reading-comprehension': ['sat-skill-central-ideas-details', 'sat-skill-inferences', 'sat-skill-text-structure-purpose', 'sat-skill-cross-text-connections'],
  'sat-reading-info-ideas': ['sat-skill-central-ideas-details', 'sat-skill-inferences', 'sat-skill-command-of-evidence'],
  'sat-central-ideas-details': ['sat-skill-central-ideas-details'],
  'sat-command-evidence': ['sat-skill-command-of-evidence'],
  'sat-finding-textual-evidence': ['sat-skill-command-of-evidence'],

  // --- Reading & Writing: Craft and Structure ---
  'sat-craft-structure': ['sat-skill-words-in-context', 'sat-skill-text-structure-purpose', 'sat-skill-cross-text-connections'],
  'sat-vocabulary-context': ['sat-skill-words-in-context'],

  // --- Reading & Writing: Expression of Ideas ---
  'sat-expression-ideas': ['sat-skill-rhetorical-synthesis', 'sat-skill-transitions'],
  'sat-transitions-organization': ['sat-skill-transitions'],
  'sat-conciseness-redundancy': ['sat-skill-rhetorical-synthesis'],
  'sat-effective-language-use': ['sat-skill-rhetorical-synthesis', 'sat-skill-words-in-context'],

  // --- Reading & Writing: Standard English Conventions ---
  'sat-punctuation': ['sat-skill-boundaries'],
  'sat-punctuation-commas-semicolons': ['sat-skill-boundaries'],
  'sat-english-conventions': ['sat-skill-boundaries', 'sat-skill-form-structure-sense'],
  'sat-grammar-conventions': ['sat-skill-form-structure-sense'],
  'sat-grammar-usage': ['sat-skill-form-structure-sense'],
  'sat-sentence-structure': ['sat-skill-form-structure-sense', 'sat-skill-boundaries'],
  'sat-subject-verb-agreement': ['sat-skill-form-structure-sense'],
  'sat-pronoun-agreement': ['sat-skill-form-structure-sense'],

  // NOT mapped by design: 'sat-time-management' and other strategy-only topics
  // have no question pool, so no amount of play should complete them.
}

/** Competitive skill slugs that cover a curriculum topic ([] if none). */
export function skillSlugsForCourseTopic(topicSlug: string): string[] {
  return CURRICULUM_TO_SKILLS[topicSlug] ?? []
}

/**
 * Does playing `playedSkillSlugs` cover the curriculum topic `assignedSlug`?
 * True when ANY skill pool covering that topic was played.
 */
export function skillPlayCoversCourseTopic(assignedSlug: string, playedSkillSlugs: Iterable<string>): boolean {
  const covering = skillSlugsForCourseTopic(assignedSlug)
  if (covering.length === 0) return false
  const played = playedSkillSlugs instanceof Set ? playedSkillSlugs : new Set(playedSkillSlugs)
  return covering.some(s => played.has(s))
}
