/**
 * Which SAT topics are MATH topics.
 *
 * Used to decide where the Desmos calculator link appears: the real Digital
 * SAT gives every student a built-in Desmos graphing calculator on the Math
 * section and nothing on Reading & Writing, so practice should match.
 *
 * The list mirrors MATH_DOMAIN_SLUGS in src/data/sat-practice/test-generator.ts
 * and the math domains in diagnostic-generator.ts. It is duplicated here
 * deliberately: this module is imported by client components, and importing the
 * generator would pull the whole exit-quiz and passage bank into their bundles.
 * tests/lib/sat-math-topics.test.ts fails if the two ever drift apart.
 */

/** Base SAT math topic slugs, by the blueprint domain they belong to. */
export const SAT_MATH_TOPIC_SLUGS: readonly string[] = [
  // Algebra
  'sat-linear-equations-inequalities',
  'sat-systems-linear-equations',
  'sat-linear-inequalities-graphs',
  // Advanced Math
  'sat-quadratic-equations',
  'sat-polynomials-factoring',
  'sat-polynomial-rational-expressions',
  'sat-nonlinear-equations-functions',
  'sat-functions',
  'sat-exponential-functions',
  'sat-exponents-radicals',
  // Problem-Solving & Data Analysis
  'sat-ratios-proportions-percents',
  'sat-statistics-data-interpretation',
  'sat-data-statistics',
  'sat-probability-two-way-tables',
  'sat-scatterplots-line-fit',
  // Geometry & Trigonometry
  'sat-geometry-basics',
  'sat-geometry-trigonometry',
  'sat-circles',
]

const BASE = new Set(SAT_MATH_TOPIC_SLUGS)

/**
 * Track suffixes the SAT course appends to a base topic slug: `-core-skills`
 * for the easier track and `-advanced` for the 700-800 track (see
 * src/data/sat-practice/core-skills-modules.ts and the advanced track). Both
 * are the same math content at a different difficulty, so both get the
 * calculator.
 */
const TRACK_SUFFIXES = ['-core-skills', '-advanced'] as const

/** True for an SAT math topic on any track. Safe with undefined/null slugs. */
export function isSatMathTopic(slug: string | null | undefined): boolean {
  if (!slug) return false
  const s = slug.toLowerCase()
  if (BASE.has(s)) return true
  for (const suffix of TRACK_SUFFIXES) {
    if (s.endsWith(suffix) && BASE.has(s.slice(0, -suffix.length))) return true
  }
  return false
}

/**
 * True for an SAT unit-test / display DOMAIN slug on the Math side
 * (`sat-math-algebra`, `sat-math-problem-solving`, …). The Reading & Writing
 * domains are `sat-reading-*` / `sat-writing-*` and get no calculator, exactly
 * as on the real exam. See SAT_SECTIONS in
 * src/data/competitive-questions/sat-bank.ts.
 */
export function isSatMathDomain(slug: string | null | undefined): boolean {
  return !!slug && slug.toLowerCase().startsWith('sat-math-')
}
