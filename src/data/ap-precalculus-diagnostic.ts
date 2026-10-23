/**
 * AP Precalculus Diagnostic Test Generator (v1)
 *
 * 10 alternate forms, 30 questions each, blueprinted to the three CED units the
 * May 2027 exam assesses (Unit 1 30–40%, Unit 2 27–40%, Unit 3 30–35% → 10/10/10).
 * Unit 4 (parameters, vectors, matrices) is not on the exam and has no items.
 * Sequences (2.1–2.2), composition (2.7) and inverses (2.8) are Unit 2 content,
 * so they sit in the exponential-logarithmic domain; attempts stored before
 * Oct 2026 carry the retired `functions-modeling` domain id and keep their
 * stored domain names (results.review.domainNames) when read back.
 *
 * Every item is tagged with a PLAN.md canonical topic slug so a miss sends the
 * student to the live lesson. Uses seeded shuffling so each form is
 * deterministic but unique. AP-style scoring (1-5).
 */

import { mulberry32 } from './_shared/prng'
import { estimateApScore } from '@/lib/ap-scoring'
import { canonicalApTopicSlug } from '@/lib/ap-topic-canonical'
import { PRECALC_CATEGORIES, PRECALC_TOPIC_TITLES } from '@/lib/course-includes'

export const TOTAL_FORMS = 10

export type DiagnosticFormNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export interface APPrecalculusQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface APPrecalculusDomain {
  id: string
  name: string
  topicSlugs: string[]
  questionTarget: number
}

export interface APPrecalculusTestData {
  form: DiagnosticFormNumber
  questions: APPrecalculusQuestion[]
  domains: APPrecalculusDomain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface APPrecalculusDomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface APPrecalculusRecommendedTopic { slug: string; name: string; domainId: string; priority: 'high' | 'medium' }

export interface APPrecalculusResults {
  form: DiagnosticFormNumber
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedAPScore: number
  domains: APPrecalculusDomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: APPrecalculusRecommendedTopic[]
}

/**
 * Topics whose production rows are created by prisma/restructure-precalc.ts
 * (Wave 2). Until that runs, a miss on one of their items recommends the live
 * lesson that teaches the nearest content. Delete this map once the rows exist
 * and tests/fixtures/ap-lesson-topic-slugs.json lists both slugs.
 */
export const AP_PRECALCULUS_PENDING_TOPIC_FALLBACK: Record<string, string> = {
  'function-modeling-precalc': 'rates-of-change-precalc',
  'exponential-logarithmic-modeling-precalc': 'exponential-functions-precalc',
}

/** The production slug an item recommends: canonical map first, then the pending-row fallback. */
export function apPrecalcRecommendationSlug(slug: string): string {
  const canonical = canonicalApTopicSlug('ap-precalculus', slug)
  return AP_PRECALCULUS_PENDING_TOPIC_FALLBACK[canonical] ?? canonical
}

/** A unit's canonical lesson slugs (course-includes layout), as recommendable production slugs, in course order. */
function unitTopicSlugs(categorySlug: string): string[] {
  const topics = PRECALC_CATEGORIES.find((c) => c.slug === categorySlug)?.topics ?? []
  return [...new Set(topics.map(apPrecalcRecommendationSlug))]
}

/**
 * The three assessed CED units. `topicSlugs` are the unit's canonical lesson
 * topics from the course layout (src/lib/course-includes.ts PRECALC_CATEGORIES);
 * the scorer recommends the topics the student actually missed and falls back
 * to these when a weak unit had no tagged miss. Domain ids are stored in every
 * saved attempt, so they stay.
 */
const AP_PRECALCULUS_DOMAINS: APPrecalculusDomain[] = [
  { id: 'polynomial-rational', name: 'Unit 1: Polynomial and Rational Functions', topicSlugs: unitTopicSlugs('precalc-polynomial-rational'), questionTarget: 10 },
  { id: 'exponential-logarithmic', name: 'Unit 2: Exponential and Logarithmic Functions', topicSlugs: unitTopicSlugs('precalc-exponential-logarithmic'), questionTarget: 10 },
  { id: 'trigonometric', name: 'Unit 3: Trigonometric and Polar Functions', topicSlugs: unitTopicSlugs('precalc-trig-functions'), questionTarget: 10 },
]

export { AP_PRECALCULUS_DOMAINS }

/**
 * Domain ids that attempts saved before Oct 2026 can carry. `functions-modeling`
 * (sequences, composition, inverses; earlier Unit 4) was folded into Unit 2.
 * Readers that meet an unknown id fall back to this name.
 */
export const AP_PRECALCULUS_LEGACY_DOMAIN_NAMES: Record<string, string> = {
  'functions-modeling': 'Sequences, Composition & Inverses',
}

/**
 * Content the owner rule "not on the exam = not in the program" removes from
 * AP Precalculus: series sums, calculus, Descartes'/Rational Root, half-angle
 * identities, lemniscates/spirals, and all of CED Unit 4. The generator never
 * serves a matching stem (same role as isCalcAbExamTrivia for Calc AB); the
 * guard test asserts the pool has none, so this is belt and braces.
 */
export const AP_PRECALC_OFF_EXAM_PATTERNS: RegExp[] = [
  /\bseries\b/i, /sigma notation|\bΣ\b|\\sum/i, /partial sum|telescop|harmonic|converge/i,
  /derivative|integral|local (max|min)imum|f'\(|f\\prime/i,
  /descartes|rational root theorem/i, /half[- ]angle/i, /lemniscate|archimed|spiral/i,
  /\bvector/i, /\bmatri(x|ces)\b/i, /parametric/i, /law of (sines|cosines)/i, /\bconic|ellipse|hyperbola/i,
  /remainder theorem/i, /effective annual rate|\bAPY\b|rule of 72/i,
]

export function isApPrecalcOffExam(question: string): boolean {
  return AP_PRECALC_OFF_EXAM_PATTERNS.some((re) => re.test(question))
}

/** Lesson title for a recommended topic (PRECALC_TOPIC_TITLES, else Title Case of the slug). */
function topicDisplayName(slug: string): string {
  return PRECALC_TOPIC_TITLES[slug] ?? slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

interface PoolQuestion { question: string; options: string[]; correctAnswer: number; explanation: string; domain: string; topicSlug: string }

const questionPool: PoolQuestion[] = [
  // ======================================================================
  // Polynomial & Rational Functions  (62 questions)
  // ======================================================================
  { question: 'What is the end behavior of f(x) = $-2x^{3}$ + 5x?', options: ['As x → ∞, f(x) → −∞; as x → −∞, f(x) → ∞', 'As x → ∞, f(x) → ∞; as x → −∞, f(x) → −∞', 'Both ends go to ∞', 'Both ends go to −∞'], correctAnswer: 0, explanation: 'Odd degree with negative leading coefficient: rises left, falls right.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-precalc' },
  { question: 'The vertical asymptote of f(x) = 3/(x − 2) is at:', options: ['x = 2', 'x = 3', 'x = −2', 'x = 0'], correctAnswer: 0, explanation: 'Set denominator = 0: x − 2 = 0 → x = 2.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'A polynomial of degree 4 can have at most how many real zeros?', options: ['4', '3', '5', '8'], correctAnswer: 0, explanation: 'By the Fundamental Theorem of Algebra, degree n → at most n real zeros.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-precalc' },
  { question: 'Solve: $x^{2}$ − 4 > 0', options: ['x < −2 or x > 2', '−2 < x < 2', 'x > 2', 'x < −2'], correctAnswer: 0, explanation: '(x−2)(x+2) > 0 when both factors same sign: x < −2 or x > 2.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'The horizontal asymptote of f(x) = $(2x^{2} + 1)/(x^{2} - 3)$ is:', options: ['y = 2', 'y = 0', 'y = −3', 'No horizontal asymptote'], correctAnswer: 0, explanation: 'Same degree: HA = ratio of leading coefficients = 2/1 = 2.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'If f(x) = $x^{3}$ − $6x^{2}$ + 11x − 6, which is a zero?', options: ['x = 1', 'x = −1', 'x = 6', 'x = −6'], correctAnswer: 0, explanation: 'f(1) = 1 − 6 + 11 − 6 = 0. So x = 1 is a zero.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-precalc' },
  { question: 'The graph of f(x) = $x^{4}$ − 1 crosses the x-axis at:', options: ['x = 1 and x = −1', 'x = 1 only', 'x = 0', 'x = ±1, ±i'], correctAnswer: 0, explanation: '$x^{4}$ − 1 = $(x^{2} - 1)(x^{2} + 1)$ = $(x-1)(x+1)(x^{2}+1)$. Real zeros: ±1.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-precalc' },
  { question: 'For f(x) = $1/(x^{2} + 1)$, the domain is:', options: ['All real numbers', 'x ≠ 0', 'x > 0', 'x ≠ ±1'], correctAnswer: 0, explanation: '$x^{2}$ + 1 > 0 for all real x — no restrictions.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'A polynomial of degree 3 has at most how many turning points?', options: ['2', '3', '1', '4'], correctAnswer: 0, explanation: 'A degree n polynomial has at most n − 1 turning points.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-precalc' },
  { question: 'What is the leading coefficient of f(x) = $-5x^{4}$ + $3x^{2}$ − 7?', options: ['−5', '5', '3', '−7'], correctAnswer: 0, explanation: 'The leading term is $-5x^{4}$, so the leading coefficient is −5.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-precalc' },
  { question: 'The function f(x) = (x − 3)/(x² − 9) has a hole at:', options: ['x = 3', 'x = −3', 'x = 0', 'x = 9'], correctAnswer: 0, explanation: 'x² − 9 = (x−3)(x+3). The (x−3) cancels → hole at x = 3, VA at x = −3.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'If the zeros of a polynomial are x = 2 (multiplicity 2) and x = −1, the minimum degree is:', options: ['3', '2', '4', '5'], correctAnswer: 0, explanation: 'Multiplicity 2 at x = 2 plus multiplicity 1 at x = −1: minimum degree = 2 + 1 = 3.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-precalc' },
  { question: 'Solve: (x + 1)/(x − 2) ≤ 0', options: ['−1 ≤ x < 2', 'x ≤ −1 or x > 2', 'x < −1 or x ≥ 2', '−1 < x < 2'], correctAnswer: 0, explanation: 'Critical values: x = −1 (zero), x = 2 (undefined). Test intervals: negative on [−1, 2).', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'What type of asymptote does f(x) = $(x^{2} + 1)/(x - 1)$ have besides a vertical one?', options: ['Slant (oblique) asymptote', 'Horizontal asymptote y = 0', 'Horizontal asymptote y = 1', 'No other asymptote'], correctAnswer: 0, explanation: 'Degree of numerator is 1 more than denominator → slant asymptote. Long division: y = x + 1.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'The end behavior of f(x) = $4x^{6}$ − $x^{3}$ + 2 is:', options: ['Both ends go to ∞', 'Both ends go to −∞', 'Left → −∞, Right → ∞', 'Left → ∞, Right → −∞'], correctAnswer: 0, explanation: 'Even degree, positive leading coefficient → both ends rise to ∞.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-precalc' },
  { question: 'How many x-intercepts can f(x) = $x^{5}$ − $3x^{3}$ + 2x have at most?', options: ['5', '3', '4', '2'], correctAnswer: 0, explanation: 'Degree 5 polynomial → at most 5 real zeros (x-intercepts).', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-precalc' },
  { question: 'For f(x) = (2x + 6)/(x + 3), what is f(0)?', options: ['2', '0', '6', 'undefined'], correctAnswer: 0, explanation: 'f(0) = (0 + 6)/(0 + 3) = 6/3 = 2. Note: (2x+6)/(x+3) = 2 for x ≠ −3.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'If f(x) = $(x - 1)^{2}(x + 2)$, at x = 1 the graph:', options: ['Touches but does not cross the x-axis', 'Crosses the x-axis', 'Has a vertical asymptote', 'Is undefined'], correctAnswer: 0, explanation: 'Even multiplicity at x = 1 means the graph touches but doesn\'t cross the axis.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-precalc' },
  { question: 'Solve: $x^{3}$ − x ≥ 0', options: ['−1 ≤ x ≤ 0 or x ≥ 1', 'x ≥ 1', 'x ≥ 0', '−1 ≤ x ≤ 1'], correctAnswer: 0, explanation: '$x^{3}$ − x = x(x−1)(x+1). Sign analysis: non-negative on [−1, 0] ∪ [1, ∞).', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'The y-intercept of f(x) = $2x^{3}$ − $4x^{2}$ + x − 3 is:', options: ['(0, −3)', '(0, 2)', '(0, 0)', '(0, −4)'], correctAnswer: 0, explanation: 'y-intercept = f(0) = −3.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-precalc' },
  { question: 'Which function has no vertical asymptote?', options: ['f(x) = $(x^{2} + 1)/(x^{2} + 4)$', 'f(x) = 1/(x − 1)', 'f(x) = $x/(x^{2} - 4)$', 'f(x) = 3/(x + 5)'], correctAnswer: 0, explanation: '$x^{2}$ + 4 > 0 for all real x, so denominator never equals zero → no VA.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'The horizontal asymptote of f(x) = $5x/(3x^{2} + 1)$ is:', options: ['y = 0', 'y = 5/3', 'y = 5', 'No horizontal asymptote'], correctAnswer: 0, explanation: 'Degree of numerator (1) < degree of denominator (2) → HA is y = 0.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'f(x) = $x^{4}$ − $5x^{2}$ + 4 factors as:', options: ['(x−1)(x+1)(x−2)(x+2)', '$(x^{2}-4)(x^{2}+1)$', '$(x-1)^{2}(x-4)$', 'Cannot be factored'], correctAnswer: 0, explanation: 'Let u = $x^{2}$: $u^{2}$ − 5u + 4 = (u−1)(u−4) = $(x^{2}-1)(x^{2}-4)$ = (x−1)(x+1)(x−2)(x+2).', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-precalc' },
  { question: 'Solve: 2/(x − 1) > 3', options: ['1 < x < 5/3', 'x > 5/3', 'x < 1', 'x > 1'], correctAnswer: 0, explanation: '2/(x−1) − 3 > 0 → (2 − 3(x−1))/(x−1) > 0 → (5−3x)/(x−1) > 0. Positive on (1, 5/3).', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'The degree of f(x) = $(x + 1)^{3}(x - 2)^{2}$ is:', options: ['5', '6', '3', '2'], correctAnswer: 0, explanation: 'The degree of a product is the sum of the degrees of the factors: 3 + 2 = 5. The polynomial has zeros at −1 (multiplicity 3) and 2 (multiplicity 2).', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-precalc' },
  { question: 'For f(x) = $x^{2}/(x^{2} - 4)$, the domain excludes:', options: ['x = 2 and x = −2', 'x = 0', 'x = 4', 'x = 2 only'], correctAnswer: 0, explanation: '$x^{2}$ − 4 = (x−2)(x+2) = 0 at x = ±2. Domain excludes ±2.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'If f(x) = $x^{3}$ + $kx^{2}$ − 4 and f(−2) = 0, then k = ?', options: ['3', '−3', '2', '−2'], correctAnswer: 0, explanation: 'f(−2) = $(-2)^{3}$ + $k(-2)^{2}$ − 4 = −8 + 4k − 4 = 4k − 12. Set = 0: 4k = 12 → k = 3.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-precalc' },
  { question: 'If f(x) = $2x^{3}$ − x, then f(−x) = ?', options: ['$-2x^{3}$ + x', '$2x^{3}$ − x', '$-2x^{3}$ − x', '$2x^{3}$ + x'], correctAnswer: 0, explanation: 'f(−x) = $2(-x)^{3}$ − (−x) = $-2x^{3}$ + x. Since f(−x) = −f(x), f is odd.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-precalc' },
  { question: 'Which statement describes the graph of f(x) = $(2x^{2} + 3x + 1)/(x + 1)$?', options: ['It has a slant asymptote y = 2x + 1', 'It has a vertical asymptote at x = −1', 'It is the line y = 2x + 1 with a hole at x = −1', 'It has a horizontal asymptote y = 2'], correctAnswer: 2, explanation: '$2x^{2} + 3x + 1$ = (2x + 1)(x + 1), so f(x) = 2x + 1 for every x ≠ −1. The common factor makes x = −1 a hole, not a vertical asymptote, and a graph that is a line (minus one point) has no asymptote at all.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'How many times does the graph of f(x) = $x^{5}$ − x cross the x-axis?', options: ['3', '5', '1', '2'], correctAnswer: 0, explanation: '$x^{5}$ − x = $x(x^{4} - 1)$ = $x(x^{2}-1)(x^{2}+1)$ = $x(x-1)(x+1)(x^{2}+1)$. Three real zeros: 0, 1, −1.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-precalc' },
  { question: 'Solve: $(x^{2} - 1)/(x - 3)$ ≤ 0', options: ['(−∞, −1] ∪ [1, 3)', '(−1, 1)', '[−1, 1]', '(3, ∞)'], correctAnswer: 0, explanation: 'Critical values: x = −1, 1 (zeros), x = 3 (undefined). Sign analysis gives (−∞, −1] ∪ [1, 3).', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'For f(x) = $(3x - 6)/(x^{2} - 4)$, the simplified form is:', options: ['3/(x + 2), x ≠ 2', '3/(x − 2)', '(3x − 6)/(x − 2)', '$3x/(x^{2} - 4)$'], correctAnswer: 0, explanation: '$(3x-6)/(x^{2}-4)$ = 3(x−2)/((x−2)(x+2)) = 3/(x+2) for x ≠ 2.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'If f(x) = $x^{2}/(x - 1)$, what is the y-intercept?', options: ['(0, 0)', '(0, 1)', '(0, −1)', 'No y-intercept'], correctAnswer: 0, explanation: 'f(0) = $0^{2}/(0 - 1)$ = 0/(−1) = 0. y-intercept is (0, 0).', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'Given that (x + 3) is a factor of $x^{3}$ + $5x^{2}$ + 2x − 12, which is an equivalent factored form?', options: ['(x + 3)(x + 4)(x − 1)', '(x + 3)(x − 4)(x + 1)', '$(x + 3)(x^{2} + 2x - 4)$', '(x + 3)(x + 2)(x − 2)'], correctAnswer: 2, explanation: 'Dividing by (x + 3) gives the quotient $x^{2} + 2x - 4$ with remainder 0, and (x + 3)($x^{2}$ + 2x − 4) = $x^{3}$ + 5x² + 2x − 12. The quadratic has zeros −1 ± $\\sqrt{5}$, so it does not factor over the integers; (x + 4)(x − 1) = $x^{2}$ + 3x − 4 is not the quotient.', domain: 'polynomial-rational', topicSlug: 'polynomial-division-remainder-theorem' },
  { question: 'The range of f(x) = 1/(x − 2) is:', options: ['All real numbers except 0', 'All real numbers', 'y > 0', 'y ≠ 2'], correctAnswer: 0, explanation: '1/(x−2) can take any value except 0 (the horizontal asymptote is y = 0, never reached).', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'The conjugate zeros theorem states that if 3 + 2i is a zero, then ___ is also a zero:', options: ['3 − 2i', '−3 + 2i', '−3 − 2i', '2 + 3i'], correctAnswer: 0, explanation: 'Complex zeros of polynomials with real coefficients come in conjugate pairs.', domain: 'polynomial-rational', topicSlug: 'fundamental-theorem-algebra' },
  { question: 'Solve: x/(x − 3) = 2 + 3/(x − 3)', options: ['No real solution', 'x = 3', 'x = −3', 'x = 6'], correctAnswer: 0, explanation: 'Multiplying by (x − 3) gives x = 2(x − 3) + 3 = 2x − 3, so x = 3. But x = 3 makes both original denominators zero, so it is extraneous and the equation has no solution.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'End behavior: as x → ∞, f(x) = (3x + 1)/(x − 2) → ?', options: ['3', '0', '∞', '−3'], correctAnswer: 0, explanation: 'Same degree top and bottom: limit is ratio of leading coefficients = 3/1 = 3.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'A polynomial with zeros at x = 0, x = 2, x = −3 of minimum degree is:', options: ['x(x − 2)(x + 3)', '$x^{2}(x - 2)(x + 3)$', '(x − 2)(x + 3)', 'x(x + 2)(x − 3)'], correctAnswer: 0, explanation: 'Minimum degree polynomial has each zero with multiplicity 1: x(x − 2)(x + 3), degree 3.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-precalc' },
  { question: 'Solve: $x^{4}$ − $13x^{2}$ + 36 = 0', options: ['x = ±2, ±3', 'x = ±6', 'x = 2, 3', 'x = $\\pm \\sqrt{13}$'], correctAnswer: 0, explanation: 'Let u = $x^{2}$: $u^{2}$ − 13u + 36 = (u − 4)(u − 9) = 0. u = 4 → x = ±2; u = 9 → x = ±3.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-precalc' },
  { question: 'The graph of f(x) = $-x^{2}$ + 4x − 3 opens:', options: ['Downward', 'Upward', 'Left', 'Right'], correctAnswer: 0, explanation: 'Negative leading coefficient (−1) on $x^{2}$ means the parabola opens downward.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-precalc' },
  { question: 'For f(x) = $(x^{2} - 4x + 3)/(x - 1)$, after simplification:', options: ['f(x) = x − 3, x ≠ 1', 'f(x) = x − 1', 'f(x) = x + 3', 'Cannot simplify'], correctAnswer: 0, explanation: '$x^{2}$ − 4x + 3 = (x − 1)(x − 3). Cancel (x − 1): f(x) = x − 3 for x ≠ 1.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'If f(x) has a zero of multiplicity 3 at x = 2, then at x = 2 the graph:', options: ['Crosses the x-axis with an inflection point', 'Touches but bounces off', 'Has a vertical asymptote', 'Is undefined'], correctAnswer: 0, explanation: 'Odd multiplicity → crosses. Multiplicity ≥ 3 → the crossing has an inflection-like shape.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-precalc' },
  { question: 'Solve: (x − 1)(x + 2)(x − 4) > 0', options: ['(−2, 1) ∪ (4, ∞)', '(−∞, −2) ∪ (1, 4)', 'x > 4', '(1, 4)'], correctAnswer: 0, explanation: 'Test intervals around zeros −2, 1, 4. Positive on (−2, 1) and (4, ∞).', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'The function f(x) = x³ + x is:', options: ['Odd', 'Even', 'Neither', 'Both'], correctAnswer: 0, explanation: 'f(−x) = −x³ − x = −(x³ + x) = −f(x). Since f(−x) = −f(x), f is odd.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-precalc' },
  { question: 'For f(x) = $(x + 1)/(x^{2} + x)$, identify the behavior at x = 0:', options: ['Vertical asymptote', 'Hole', 'x-intercept', 'Defined, f(0) = 1'], correctAnswer: 0, explanation: '$x^{2}$ + x = x(x + 1). f(x) = (x+1)/(x(x+1)) = 1/x for x ≠ −1. At x = 0: vertical asymptote (not cancelled).', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'The graph of f(x) = $x^{2}(x - 3)$ touches/crosses the x-axis at:', options: ['Touches at 0, crosses at 3', 'Crosses at both 0 and 3', 'Touches at 3, crosses at 0', 'Touches at both'], correctAnswer: 0, explanation: 'x = 0 has even multiplicity 2 (touches), x = 3 has odd multiplicity 1 (crosses).', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-precalc' },
  { question: 'The vertical asymptotes of f(x) = $(x + 1)/(x^{2} - x - 6)$ are at:', options: ['x = 3 and x = −2', 'x = −3 and x = 2', 'x = 6 and x = −1', 'x = 3 only'], correctAnswer: 0, explanation: '$x^{2}$ − x − 6 = (x − 3)(x + 2). Neither factor cancels with numerator → VAs at x = 3 and x = −2.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'If f(x) = $x^{4}$ − $2x^{2}$ + 1, then f(x) factors as:', options: ['$(x - 1)^{2}(x + 1)^{2}$', '$(x^{2} - 1)(x^{2} + 1)$', '$(x - 1)(x + 1)^{3}$', 'Cannot be factored'], correctAnswer: 0, explanation: '$x^{4}$ − $2x^{2}$ + 1 = $(x^{2} - 1)^{2}$ = $((x-1)(x+1))^{2}$ = $(x-1)^{2}(x+1)^{2}$.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-precalc' },
  { question: 'Solve: $x^{3}$ + 8 = 0', options: ['x = −2', 'x = 2', 'x = −8', 'x = 8'], correctAnswer: 0, explanation: '$x^{3}$ = −8 → x = ∛(−8) = −2.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-precalc' },
  { question: 'For f(x) = $3x/(x^{2} + 1)$, what is the horizontal asymptote?', options: ['y = 0', 'y = 3', 'y = 1', 'No horizontal asymptote'], correctAnswer: 0, explanation: 'Degree of numerator (1) < degree of denominator (2) → HA is y = 0.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'For g(x) = $2x^{2}$ − 5x, the average rate of change over [−1, 2] is:', options: ['−9', '3', '−3', '−1'], correctAnswer: 2, explanation: 'g(2) = 8 − 10 = −2 and g(−1) = 2 + 5 = 7. Average rate of change = (−2 − 7)/(2 − (−1)) = −9/3 = −3. (−9 is the change in output without dividing by the 3-unit interval.)', domain: 'polynomial-rational', topicSlug: 'rates-of-change-precalc' },
  { question: 'Solve: (2x − 1)(x + 3) ≥ 0', options: ['x ≤ −3 or x ≥ 1/2', '−3 ≤ x ≤ 1/2', 'x ≥ 1/2', 'x ≤ −3'], correctAnswer: 0, explanation: 'Zeros at x = −3 and x = 1/2. Positive when both factors same sign: x ≤ −3 or x ≥ 1/2.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'What is the multiplicity of the zero at x = 0 for f(x) = $x^{3}(x - 1)$?', options: ['3', '1', '4', '0'], correctAnswer: 0, explanation: 'x appears to the 3rd power, so x = 0 is a zero of multiplicity 3.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-precalc' },
  { question: 'The range of f(x) = x/(x − 1) is:', options: ['All real numbers except 1', 'All real numbers', 'y > 0', 'y ≠ 0'], correctAnswer: 0, explanation: 'HA at y = 1 (same degree, ratio = 1). The function never reaches y = 1, so range is all reals except 1.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },

  // --- Added Oct 2026 (precalc-final F4): skills the audit found absent ---
  { question: 'The graph of g is the graph of f(x) = $x^{2}$ shifted 3 units left and then reflected across the x-axis. Which is g(x)?', options: ['$-(x + 3)^{2}$', '$-(x - 3)^{2}$', '$(x + 3)^{2}$ − 3', '$-x^{2}$ + 3'], correctAnswer: 0, explanation: 'A shift left 3 replaces x with x + 3, and a reflection across the x-axis negates the output: g(x) = $-(x + 3)^{2}$. $-(x - 3)^{2}$ shifts right, and $-x^{2}$ + 3 shifts up instead of left.', domain: 'polynomial-rational', topicSlug: 'transformations-precalc' },
  { question: 'If g(x) = f(2x), how is the graph of g related to the graph of f?', options: ['A vertical dilation by a factor of 2', 'A horizontal dilation by a factor of 1/2, compressed toward the y-axis', 'A horizontal dilation by a factor of 2, stretched away from the y-axis', 'A shift 2 units to the left'], correctAnswer: 1, explanation: 'Multiplying the input by 2 means g reaches each output of f at half the input, a horizontal compression by a factor of 1/2. A factor of 2 outside the function would be the vertical dilation; adding inside would shift.', domain: 'polynomial-rational', topicSlug: 'transformations-precalc' },
  { question: 'The point (4, −2) is on the graph of f. Which point must be on the graph of g(x) = 3f(x − 1) + 5?', options: ['(3, −1)', '(5, −1)', '(5, 11)', '(3, 11)'], correctAnswer: 1, explanation: 'g(5) = 3f(4) + 5 = 3(−2) + 5 = −1. The input shifts right 1 (x − 1 = 4 gives x = 5), and the output is stretched by 3 and then shifted up 5.', domain: 'polynomial-rational', topicSlug: 'transformations-precalc' },
  { question: 'The graph of y = f(x) has a vertical asymptote at x = 2. The graph of y = f(x + 5) has a vertical asymptote at:', options: ['x = 7', 'x = −3', 'x = 2', 'x = −5'], correctAnswer: 1, explanation: 'f(x + 5) is undefined where x + 5 = 2, so the asymptote moves 5 units left, to x = −3.', domain: 'polynomial-rational', topicSlug: 'transformations-precalc' },
  { question: 'A function f has f(0) = 1, f(2) = 5, f(4) = 13, and f(6) = 25. Which statement describes the average rates of change of f over consecutive intervals of length 2?', options: ['They are constant, which is the signature of a linear function', 'They increase by a constant amount, which is the signature of a quadratic function', 'They are multiplied by a constant factor, which is the signature of an exponential function', 'They decrease, so the graph of f is concave down'], correctAnswer: 1, explanation: 'The average rates of change are (5 − 1)/2 = 2, (13 − 5)/2 = 4, and (25 − 13)/2 = 6. They are not constant (not linear) and not multiplied by a fixed factor (not exponential); they grow by a constant 2 each time, so f could be quadratic.', domain: 'polynomial-rational', topicSlug: 'rates-of-change-precalc' },
  { question: 'The average rate of change of f(x) = $x^{2}$ − 3x over the interval [2, 2 + h], where h ≠ 0, is:', options: ['2h + 1', 'h + 1', 'h − 1', '1'], correctAnswer: 1, explanation: 'f(2 + h) = $(2 + h)^{2}$ − 3(2 + h) = $h^{2}$ + h − 2 and f(2) = −2, so f(2 + h) − f(2) = $h^{2}$ + h. Dividing by the interval length h gives h + 1.', domain: 'polynomial-rational', topicSlug: 'rates-of-change-precalc' },
  { question: 'On the interval 1 < x < 4, the graph of a function g is increasing and concave down. Which statement about the rate of change of g on this interval is correct?', options: ['The rate of change is positive and decreasing', 'The rate of change is positive and increasing', 'The rate of change is negative and decreasing', 'The rate of change is negative and increasing'], correctAnswer: 0, explanation: 'Increasing means the rate of change is positive; concave down means that rate of change is itself decreasing (the graph rises more and more slowly).', domain: 'polynomial-rational', topicSlug: 'rates-of-change-precalc' },
  { question: 'A data set has inputs 1, 2, 3, 4 and outputs 6, 12, 24, 48. Which type of function best models the data, and why?', options: ['Exponential, because the outputs are multiplied by 2 for each unit increase in the input', 'Linear, because the outputs increase for each unit increase in the input', 'Quadratic, because the second differences of the outputs are constant', 'Logarithmic, because the outputs grow more slowly than the inputs'], correctAnswer: 0, explanation: 'Each output is double the previous one over equal input steps: 6, 12, 24, 48. Outputs that change by a constant factor over equal input intervals are the signature of an exponential model. The differences 6, 12, 24 are not constant and their differences (6, 12) are not constant either.', domain: 'polynomial-rational', topicSlug: 'function-modeling-precalc' },
  { question: 'A taxi charges a $\\$3$ flat fee plus $\\$2$ per mile for the first 5 miles and $\\$1.50$ per mile after that. Which expression gives the fare, in dollars, for a trip of m miles when m > 5?', options: ['1.5m + 5.5', '3 + 1.5m', '13 + 1.5m', '3 + 2m'], correctAnswer: 0, explanation: 'The first 5 miles cost 3 + 2(5) = 13 dollars, and each mile beyond the fifth adds 1.50, so the fare is 13 + 1.5(m − 5) = 1.5m + 5.5. Adding 1.5m to 13 would charge the extra rate on all m miles.', domain: 'polynomial-rational', topicSlug: 'function-modeling-precalc' },
  { question: 'A polynomial p of degree 5 with real coefficients has 2i and 3 among its zeros. What is the greatest number of distinct real zeros p can have?', options: ['3', '2', '4', '5'], correctAnswer: 0, explanation: 'Real coefficients force the conjugate −2i to be a zero as well, so 2i, −2i and 3 account for 3 of the 5 zeros. The remaining 2 zeros may both be real and distinct, giving at most 1 + 2 = 3 distinct real zeros.', domain: 'polynomial-rational', topicSlug: 'fundamental-theorem-algebra' },
  { question: 'Which polynomial of least degree with real coefficients has zeros 1 and 1 + i?', options: ['$x^{3} - 3x^{2} + 4x - 2$', '$x^{2} - 2x + 2$', '$x^{3} - 2x^{2} + 2x - 1$', '$x^{2} - (2 + i)x + (1 + i)$'], correctAnswer: 0, explanation: 'Real coefficients require the conjugate 1 − i to be a zero too, so the least degree is 3: (x − 1)[(x − 1)² + 1] = (x − 1)($x^{2}$ − 2x + 2) = $x^{3}$ − 3x² + 4x − 2.', domain: 'polynomial-rational', topicSlug: 'fundamental-theorem-algebra' },
  { question: 'Which expression is equivalent to $(x^{2} + 5x + 7)/(x + 2)$?', options: ['x + 3 + 1/(x + 2)', 'x + 3', 'x + 7 + 1/(x + 2)', 'x + 3 − 1/(x + 2)'], correctAnswer: 0, explanation: '(x + 2)(x + 3) = $x^{2}$ + 5x + 6, which leaves a remainder of 1, so the expression equals x + 3 + 1/(x + 2). The quotient x + 3 is also the slant asymptote of the graph.', domain: 'polynomial-rational', topicSlug: 'polynomial-division-remainder-theorem' },
  { question: 'The graph of a polynomial function touches the x-axis at x = −2 without crossing, crosses at x = 1, and crosses at x = 4 with a flattened S-shaped bend. What is the least possible degree of the polynomial?', options: ['6', '4', '3', '5'], correctAnswer: 0, explanation: 'Touching without crossing needs an even multiplicity (at least 2), a plain crossing needs multiplicity 1, and an S-shaped crossing needs an odd multiplicity of at least 3. The least degree is 2 + 1 + 3 = 6.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-precalc' },
  { question: 'Which rational function has a horizontal asymptote at y = 0 and a vertical asymptote at x = 4 only?', options: ['f(x) = 2/(x − 4)', 'f(x) = 2x/(x − 4)', 'f(x) = $(x - 4)/(x^{2} - 16)$', 'f(x) = 2/(x + 4)'], correctAnswer: 0, explanation: '2/(x − 4) has numerator degree 0 < denominator degree 1 (HA y = 0) and is undefined only at x = 4. 2x/(x − 4) has HA y = 2; $(x - 4)/(x^{2} - 16)$ has a hole at x = 4 and its asymptote at x = −4; 2/(x + 4) has its asymptote at x = −4.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'For f(x) = $\\dfrac{(x - 2)^{2}(x + 1)}{(x - 2)(x + 1)^{2}}$, which statement is true?', options: ['A hole at x = 2 and a vertical asymptote at x = −1', 'A vertical asymptote at x = 2 and a hole at x = −1', 'Holes at both x = 2 and x = −1', 'Vertical asymptotes at both x = 2 and x = −1'], correctAnswer: 0, explanation: 'Compare multiplicities. At x = 2 the factor appears twice in the numerator and once in the denominator, so it cancels completely and leaves a hole. At x = −1 the denominator has the higher multiplicity (2 versus 1), so a factor of (x + 1) survives below and the graph has a vertical asymptote there.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },

  // ======================================================================
  // Exponential & Logarithmic Functions  (63 questions)
  // ======================================================================
  { question: 'Solve: $2^{x}$ = 16', options: ['x = 4', 'x = 8', 'x = 3', 'x = 2'], correctAnswer: 0, explanation: '$2^{4}$ = 16, so x = 4.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: '$\\log_{2}(32)$ = ?', options: ['5', '4', '6', '16'], correctAnswer: 0, explanation: '$2^{5}$ = 32, so $\\log_{2}(32)$ = 5.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'A population doubles every 3 years. Starting at 100, what is it after 9 years?', options: ['800', '600', '400', '300'], correctAnswer: 0, explanation: '9/3 = 3 doublings. 100 × $2^{3}$ = 800.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-precalc' },
  { question: 'Which best describes f(x) = 3 · $(0.5)^{x}$?', options: ['Exponential decay', 'Exponential growth', 'Linear decrease', 'Logarithmic growth'], correctAnswer: 0, explanation: 'Base 0.5 < 1 → exponential decay.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-precalc' },
  { question: 'Simplify: log(ab) = ?', options: ['log a + log b', 'log a · log b', 'log(a/b)', '$(\\log a)^{b}$'], correctAnswer: 0, explanation: 'Product rule of logarithms: log(ab) = log a + log b.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'Solve: ln(x) = 3', options: ['x = $e^{3}$', 'x = 3e', 'x = ln 3', 'x = 3'], correctAnswer: 0, explanation: 'Exponentiate: x = $e^{3}$ ≈ 20.09.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'A substance has a half-life of 5 hours. After 15 hours, what fraction remains?', options: ['1/8', '1/4', '1/3', '1/16'], correctAnswer: 0, explanation: '15/5 = 3 half-lives. $(1/2)^{3}$ = 1/8.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-precalc' },
  { question: 'The graph of y = $e^{x}$ passes through:', options: ['(0, 1)', '(1, 0)', '(0, 0)', '(0, e)'], correctAnswer: 0, explanation: '$e^{0}$ = 1, so the graph passes through (0, 1).', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-precalc' },
  { question: '$\\log_{3}(1)$ = ?', options: ['0', '1', '3', 'undefined'], correctAnswer: 0, explanation: 'Any log base of 1 equals 0: $3^{0}$ = 1.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'Which function is the inverse of g(x) = $\\log_{5}(x)$?', options: ['$g^{-1}(x)$ = $5^{x}$', '$g^{-1}(x)$ = $x^{5}$', '$g^{-1}(x)$ = $\\log_{x}(5)$', '$g^{-1}(x)$ = $1/\\log_{5}(x)$'], correctAnswer: 0, explanation: 'A logarithm and the exponential function with the same base undo each other: $5^{\\log_{5}(x)}$ = x and $\\log_{5}(5^{x})$ = x. The reciprocal $1/\\log_{5}(x)$ is not an inverse function.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'Solve: $3^{2x}$ = 81', options: ['x = 2', 'x = 4', 'x = 3', 'x = 1'], correctAnswer: 0, explanation: '81 = $3^{4}$, so $3^{2x}$ = $3^{4}$ → 2x = 4 → x = 2.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'The domain of f(x) = log(x − 4) is:', options: ['x > 4', 'x > 0', 'x ≥ 4', 'All real numbers'], correctAnswer: 0, explanation: 'Argument of log must be positive: x − 4 > 0 → x > 4.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: '$\\log_{5}(25)$ + $\\log_{5}(5)$ = ?', options: ['3', '5', '30', '10'], correctAnswer: 0, explanation: '$\\log_{5}(25)$ = 2 and $\\log_{5}(5)$ = 1. Sum = 3. Or: $\\log_{5}(125)$ = 3.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: '$\\$1000$ invested at 5% compounded annually is worth how much after 2 years?', options: ['$\\$1102.50$', '$\\$1100$', '$\\$1050$', '$\\$1010$'], correctAnswer: 0, explanation: 'A = 1000$(1.05)^{2}$ = 1000(1.1025) = $\\$1102.50$.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-precalc' },
  { question: 'Simplify: $\\log (x^{3})$ = ?', options: ['3 log x', 'log(3x)', '$(\\log x)^{3}$', '3 + log x'], correctAnswer: 0, explanation: 'Power rule: $\\log (x^{3})$ = 3 log x.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'Solve: $5^{x+1}$ = 125', options: ['x = 2', 'x = 3', 'x = 4', 'x = 1'], correctAnswer: 0, explanation: '125 = $5^{3}$, so $5^{x+1}$ = $5^{3}$ → x + 1 = 3 → x = 2.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'The range of f(x) = ln(x) is:', options: ['(−∞, ∞)', '(0, ∞)', '[0, ∞)', '(−∞, 0)'], correctAnswer: 0, explanation: 'The natural logarithm outputs all real numbers.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'A car depreciates 15% per year. After 3 years, what fraction of value remains?', options: ['$(0.85)^{3}$ ≈ 0.614', '0.85', '0.55', '0.45'], correctAnswer: 0, explanation: 'Each year retains 85%, so after 3 years: $(0.85)^{3}$ ≈ 0.614.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-precalc' },
  { question: 'Change of base: $\\log_{4}(64)$ = ln 64 / ?', options: ['ln 4', 'ln 64', 'log 4', '4'], correctAnswer: 0, explanation: 'Change of base formula: $\\log_{4}(64)$ = ln 64 / ln 4 = 3.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'Solve: $\\log_{2}(x)$ + $\\log_{2}(x - 2)$ = 3', options: ['x = 4', 'x = 2', 'x = 8', 'x = −2'], correctAnswer: 0, explanation: '$\\log_{2}(x(x-2))$ = 3 → $x^{2}$ − 2x = 8 → $x^{2}$ − 2x − 8 = 0 → (x−4)(x+2) = 0. Since x > 2: x = 4.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'The function f(x) = $2^{x}$ − 3 has a horizontal asymptote at:', options: ['y = −3', 'y = 0', 'y = 2', 'y = 3'], correctAnswer: 0, explanation: 'As x → −∞, $2^{x}$ → 0, so f(x) → −3. HA: y = −3.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-precalc' },
  { question: 'Simplify: log(a/b) = ?', options: ['log a − log b', 'log a / log b', 'log a + log b', 'log(a − b)'], correctAnswer: 0, explanation: 'Quotient rule: log(a/b) = log a − log b.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'Bacteria triple every 4 hours from an initial count of 200. After 12 hours:', options: ['5400', '2700', '1800', '600'], correctAnswer: 0, explanation: '12/4 = 3 tripling periods. 200 × $3^{3}$ = 200 × 27 = 5400.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-precalc' },
  { question: 'If log x = 2.5, then x = ?', options: ['$10^{2.5}$ ≈ 316.23', '2.5', '25', '100'], correctAnswer: 0, explanation: 'log x = 2.5 means x = $10^{2.5}$ = $\\sqrt{10^{5}}$ ≈ 316.23.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'Which equation models continuous growth at rate k?', options: ['A = $A_{0}e^{kt}$', 'A = $A_{0}(1 + k)^{t}$', 'A = $A_{0}$ + kt', 'A = $A_{0}k^{t}$'], correctAnswer: 0, explanation: 'Continuous growth uses the natural exponential: A = $A_{0}e^{kt}$.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-precalc' },
  { question: 'Solve: $e^{x}$ = 7', options: ['x = ln 7', 'x = 7/e', 'x = log 7', 'x = $e^{7}$'], correctAnswer: 0, explanation: 'Take ln of both sides: x = ln 7 ≈ 1.946.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'The graph of y = $\\log_{2}(x)$ passes through:', options: ['(8, 3)', '(3, 8)', '(2, 0)', '(0, 1)'], correctAnswer: 0, explanation: '$\\log_{2}(8)$ = 3 since $2^{3}$ = 8. The point (8, 3) is on the graph.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'A radioactive element decays by 10% per year. Its decay model is:', options: ['A = $A_{0}(0.9)^{t}$', 'A = $A_{0}(1.1)^{t}$', 'A = $A_{0}(0.1)^{t}$', 'A = $A_{0}$ − 0.1t'], correctAnswer: 0, explanation: 'Losing 10% means retaining 90% each year: A = $A_{0}(0.9)^{t}$.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-precalc' },
  { question: '$\\log_{10}(1000)$ − $\\log_{10}(10)$ = ?', options: ['2', '3', '100', '990'], correctAnswer: 0, explanation: 'log(1000) = 3, log(10) = 1. 3 − 1 = 2. Or log(1000/10) = log(100) = 2.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'The y-intercept of f(x) = 4 · $3^{x}$ − 1 is:', options: ['(0, 3)', '(0, 4)', '(0, −1)', '(0, 11)'], correctAnswer: 0, explanation: 'f(0) = 4 · $3^{0}$ − 1 = 4(1) − 1 = 3. y-intercept is (0, 3).', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-precalc' },
  { question: 'Solve: $4^{x}$ = 1/16', options: ['x = −2', 'x = −4', 'x = 2', 'x = −1'], correctAnswer: 0, explanation: '1/16 = $4^{-2}$. So $4^{x}$ = $4^{-2}$ → x = −2.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'The asymptote of f(x) = $\\log_{3}(x + 2)$ is:', options: ['x = −2', 'x = 0', 'x = 2', 'y = 0'], correctAnswer: 0, explanation: 'Vertical asymptote when argument = 0: x + 2 = 0 → x = −2.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'Expand: $\\log (x^{2}y/z)$ = ?', options: ['2 log x + log y − log z', 'log $x^{2}$ + log y + log z', '2(log x + log y − log z)', 'log(2xy) − log z'], correctAnswer: 0, explanation: '$\\log (x^{2}y/z)$ = $\\log (x^{2})$ + log(y) − log(z) = 2 log x + log y − log z.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'If a quantity grows by 25% per year, the growth factor is:', options: ['1.25', '0.25', '25', '1.025'], correctAnswer: 0, explanation: '100% + 25% = 125% = 1.25 as a multiplier.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-precalc' },
  { question: 'Solve: $\\log_{3}(2x - 1)$ = 2', options: ['x = 5', 'x = 4', 'x = 9', 'x = 10'], correctAnswer: 0, explanation: '$3^{2}$ = 2x − 1 → 9 = 2x − 1 → 2x = 10 → x = 5.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'The function f(x) = $-e^{x}$ is always:', options: ['Negative', 'Positive', 'Zero', 'Undefined for x < 0'], correctAnswer: 0, explanation: '$e^{x}$ > 0 for all x, so $-e^{x}$ < 0 for all x. Always negative.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-precalc' },
  { question: 'Condense: 3 ln x − ln y = ?', options: ['$\\ln (x^{3}/y)$', 'ln(3x/y)', '$\\ln (x^{3} - y)$', 'ln(3x − y)'], correctAnswer: 0, explanation: '3 ln x = $\\ln (x^{3})$. $\\ln (x^{3})$ − ln(y) = $\\ln (x^{3}/y)$.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'The doubling time formula t = ln 2/r gives t when r = 0.07:', options: ['≈ 9.9 years', '≈ 7 years', '≈ 14 years', '≈ 5 years'], correctAnswer: 0, explanation: 't = ln 2 / 0.07 ≈ 0.693 / 0.07 ≈ 9.9 years.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-precalc' },
  { question: 'If f(x) = $3^{x}$ and g(x) = $\\log_{3}(x)$, then f(g(81)) = ?', options: ['81', '3', '4', '9'], correctAnswer: 0, explanation: 'g(81) = $\\log_{3}(81)$ = 4. f(4) = $3^{4}$ = 81. (f and g are inverses)', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'Solve: 2 · $5^{x}$ = 50', options: ['x = 2', 'x = 25', 'x = 1', 'x = 10'], correctAnswer: 0, explanation: '$5^{x}$ = 25 = $5^{2}$. So x = 2.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'The initial value of f(x) = $7(1.03)^{x}$ is:', options: ['7', '1.03', '3', '21'], correctAnswer: 0, explanation: 'Initial value = f(0) = $7(1.03)^{0}$ = 7 · 1 = 7. It\'s the coefficient.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-precalc' },
  { question: 'Which is equivalent to $\\log_{8}(2)$?', options: ['1/3', '3', '1/2', '4'], correctAnswer: 0, explanation: '$8^{1/3}$ = 2, so $\\log_{8}(2)$ = 1/3.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'The half-life equation: if A = $A_{0}(1/2)^{t/h}$, what does h represent?', options: ['The half-life', 'The initial amount', 'The decay rate', 'Time elapsed'], correctAnswer: 0, explanation: 'h is the half-life — the time it takes for the quantity to halve.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-precalc' },
  { question: '$\\ln (e^{5})$ = ?', options: ['5', '$e^{5}$', '1', 'ln 5'], correctAnswer: 0, explanation: '$\\ln (e^{x})$ = x. So $\\ln (e^{5})$ = 5.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'Solve: log(x) + log(x + 3) = 1', options: ['x = 2', 'x = 5', 'x = 10', 'x = −5'], correctAnswer: 0, explanation: 'log(x(x+3)) = 1 → $x^{2}$ + 3x = 10 → $x^{2}$ + 3x − 10 = 0 → (x+5)(x−2) = 0. Since x > 0: x = 2.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'f(x) = $2^{x+3}$ is equivalent to:', options: ['8 · $2^{x}$', '$2^{x}$ + 8', '$6^{x}$', '$2^{3x}$'], correctAnswer: 0, explanation: '$2^{x+3}$ = $2^{x}$ · $2^{3}$ = 8 · $2^{x}$.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-precalc' },
  { question: 'The graph of f(x) = log(x) has the x-intercept at:', options: ['(1, 0)', '(0, 0)', '(10, 0)', '(e, 0)'], correctAnswer: 0, explanation: 'log(1) = 0, so the x-intercept is at (1, 0).', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'Solve: $9^{x}$ = 27', options: ['x = 3/2', 'x = 3', 'x = 2', 'x = 2/3'], correctAnswer: 0, explanation: '9 = $3^{2}$, 27 = $3^{3}$. So $3^{2x}$ = $3^{3}$ → 2x = 3 → x = 3/2.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'The investment model A = $Pe^{rt}$ with P = 1000, r = 0.05, t = 10 gives approximately:', options: ['$\\$1648.72$', '$\\$1500$', '$\\$1050$', '$\\$2718.28$'], correctAnswer: 0, explanation: 'A = 1000$e^{0.5}$ = 1000(1.6487) ≈ $\\$1648.72$.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-precalc' },
  { question: '$\\log_{2}(1/8)$ = ?', options: ['−3', '3', '−8', '1/3'], correctAnswer: 0, explanation: '1/8 = $2^{-3}$, so $\\log_{2}(2^{-3})$ = −3.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'If y = $ab^{x}$ passes through (0, 5) and (2, 45), then b = ?', options: ['3', '9', '5', '15'], correctAnswer: 0, explanation: 'At x = 0: 5 = a · $b^{0}$ → a = 5. At x = 2: 45 = $5b^{2}$ → $b^{2}$ = 9 → b = 3.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-precalc' },
  { question: 'Simplify: $e^{\\ln 4}$ = ?', options: ['4', '$e^{4}$', 'ln 4', '1'], correctAnswer: 0, explanation: 'e and ln are inverse functions: $e^{\\ln x}$ = x. So $e^{\\ln 4}$ = 4.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'The growth rate of f(x) = $500(1.08)^{x}$ as a percentage is:', options: ['8%', '108%', '0.08%', '80%'], correctAnswer: 0, explanation: 'Growth factor 1.08 means 8% growth rate (1 + r where r = 0.08).', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-precalc' },
  { question: 'Which is NOT a property of logarithms?', options: ['log(a + b) = log a + log b', 'log(ab) = log a + log b', '$\\log (a^{n})$ = n log a', 'log(a/b) = log a − log b'], correctAnswer: 0, explanation: 'log(a + b) ≠ log a + log b. This is a common error. The product rule is log(ab) = log a + log b.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'Solve: $10^{2x-1}$ = 1000', options: ['x = 2', 'x = 3', 'x = 1.5', 'x = 4'], correctAnswer: 0, explanation: '1000 = $10^{3}$. So $10^{2x-1}$ = $10^{3}$ → 2x − 1 = 3 → 2x = 4 → x = 2.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'Newton\'s Law of Cooling: T(t) = $T_{a}$ + $(T_{0} - T_{a})e^{-kt}$. As t → ∞, T(t) → ?', options: ['$T_{a}$ (ambient temperature)', '$T_{0}$', '0', '∞'], correctAnswer: 0, explanation: 'As t → ∞, $e^{-kt}$ → 0, so T(t) → $T_{a}$.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-precalc' },
  { question: '$\\log_{5}(\\sqrt{5})$ = ?', options: ['1/2', '$\\sqrt{5}$', '2', '5'], correctAnswer: 0, explanation: '$\\sqrt{5}$ = $5^{1/2}$. $\\log_{5}(5^{1/2})$ = 1/2.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'If $\\log_{2}(x)$ = −4, then x = ?', options: ['1/16', '−4', '16', '−16'], correctAnswer: 0, explanation: 'x = $2^{-4}$ = 1/16.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'The function f(x) = $(1/3)^{x}$ is equivalent to:', options: ['$3^{-x}$', '$-3^{x}$', '$3^{x}$', 'x/3'], correctAnswer: 0, explanation: '$(1/3)^{x}$ = $(3^{-1})^{x}$ = $3^{-x}$.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-precalc' },
  { question: 'Solve: ln(2x) − ln(x − 1) = ln 6', options: ['x = 3/2', 'x = 6', 'x = 3', 'x = 2'], correctAnswer: 0, explanation: 'ln(2x/(x−1)) = ln 6 → 2x/(x−1) = 6 → 2x = 6x − 6 → 4x = 6 → x = 3/2. Check: x − 1 = 1/2 > 0 ✓.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'An investment triples in value. The percent increase is:', options: ['200%', '300%', '100%', '33%'], correctAnswer: 0, explanation: 'Tripling means going from 1× to 3×. Increase = 3 − 1 = 2 = 200%.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-precalc' },
  { question: 'If f(x) = $10^{x}$ and g(x) = log(x), which statement is true?', options: ['f and g are inverse functions', 'f and g are equal', 'f(g(x)) = $x^{2}$', 'g is not defined for positive x'], correctAnswer: 0, explanation: '$10^{\\log x}$ = x and $\\log (10^{x})$ = x. They are inverse functions.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },

  // --- Added Oct 2026 (precalc-final F4): skills the audit found absent ---
  { question: 'A data set is plotted on a semi-log graph whose vertical axis is scaled logarithmically. The points appear to lie on a straight line. Which type of function best models the data?', options: ['Exponential', 'Linear', 'Logarithmic', 'Quadratic'], correctAnswer: 0, explanation: 'On a semi-log plot the vertical coordinate is log y. A line there means log y = mx + b, so y = $10^{mx + b}$ = $10^{b}$ · $(10^{m})^{x}$, an exponential function.', domain: 'exponential-logarithmic', topicSlug: 'exponential-logarithmic-modeling-precalc' },
  { question: 'A set of data (x, y) satisfies log y = 0.3x + 1, where log is the common logarithm. Which equation gives y as a function of x?', options: ['y = 10 · $(10^{0.3})^{x}$', 'y = 0.3x + 10', 'y = $10^{x}$ + 0.3', 'y = 10 · $0.3^{x}$'], correctAnswer: 0, explanation: 'Rewrite in exponential form: y = $10^{0.3x + 1}$ = $10^{1}$ · $10^{0.3x}$ = 10 · $(10^{0.3})^{x}$, an exponential model with initial value 10 and growth factor $10^{0.3}$ ≈ 1.995 per unit of x.', domain: 'exponential-logarithmic', topicSlug: 'exponential-logarithmic-modeling-precalc' },
  { question: 'On a semi-log plot whose vertical axis is logarithmic, moving up by one gridline (from 10 to 100, or from 100 to 1000) represents:', options: ['Multiplying y by a constant factor', 'Adding a constant amount to y', 'Adding a constant amount to x', 'Doubling y'], correctAnswer: 0, explanation: 'Equally spaced marks on a logarithmic axis are powers of the base, so each step multiplies y by the same factor (here 10). That is why exponential data, which grows by a constant factor, appears linear on a semi-log plot.', domain: 'exponential-logarithmic', topicSlug: 'exponential-logarithmic-modeling-precalc' },
  { question: 'An exponential function f(x) = a · $b^{x}$ has f(1) = 12 and f(3) = 108. What is f(0)?', options: ['4', '12', '36', '6'], correctAnswer: 0, explanation: 'Over the 2-unit step from x = 1 to x = 3 the output is multiplied by 108/12 = 9, so $b^{2}$ = 9 and b = 3. Then a · 3 = 12 gives a = 4, and f(0) = a = 4.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-precalc' },
  { question: 'A population is modeled by P(t) = 500 · $(1.21)^{t/2}$, where t is measured in years. By what percent does the population grow each year?', options: ['21%', '10%', '10.5%', '12%'], correctAnswer: 1, explanation: 'Rewrite the factor per year: $(1.21)^{t/2}$ = $(1.21^{1/2})^{t}$ = $(1.1)^{t}$, so the population is multiplied by 1.1 each year, a 10% increase. 21% is the growth over each 2-year period.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-precalc' },
  { question: 'Solve: $\\log_{2}(x + 6)$ − $\\log_{2}(x)$ = 2', options: ['x = 6', 'x = 2', 'x = 3', 'x = −2'], correctAnswer: 1, explanation: 'The quotient rule gives $\\log_{2}((x + 6)/x)$ = 2, so (x + 6)/x = 4, x + 6 = 4x, and x = 2. It satisfies the domain conditions x > 0 and x + 6 > 0.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'What is the inverse of f(x) = 3 · $2^{x}$ + 1?', options: ['$f^{-1}(x) = \\log_{2}\\left(\\dfrac{x - 1}{3}\\right)$', '$f^{-1}(x) = \\dfrac{\\log_{2}(x - 1)}{3}$', '$f^{-1}(x) = \\log_{2}(x) - 1$', '$f^{-1}(x) = 3\\log_{2}(x) + 1$'], correctAnswer: 0, explanation: 'Undo the operations in reverse order: y = 3 · $2^{x}$ + 1 gives $2^{x}$ = (y − 1)/3, so x = $\\log_{2}((y - 1)/3)$. Swapping the variables, $f^{-1}(x)$ = $\\log_{2}((x - 1)/3)$.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'Let f(x) = 2x − 1 and g(x) = $\\sqrt{x + 3}$. What is the domain of (g ∘ f)(x)?', options: ['x ≥ −3', 'x ≥ −1', 'x ≥ 1/2', 'All real numbers'], correctAnswer: 1, explanation: '(g ∘ f)(x) = g(2x − 1) = $\\sqrt{2x - 1 + 3}$ = $\\sqrt{2x + 2}$, which requires 2x + 2 ≥ 0, so x ≥ −1.', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'An arithmetic sequence has $a_{2}$ = 9 and $a_{5}$ = 21. Which function f satisfies f(n) = $a_{n}$ for every whole number n ≥ 0?', options: ['f(n) = 9 + 4n', 'f(n) = 1 + 4n', 'f(n) = 5 + 4n', 'f(n) = $4^{n}$'], correctAnswer: 1, explanation: 'From term 2 to term 5 is 3 steps, so d = (21 − 9)/3 = 4. Stepping back two terms from $a_{2}$ = 9 gives $a_{0}$ = 9 − 2(4) = 1, and an arithmetic sequence is linear in n: f(n) = 1 + 4n.', domain: 'exponential-logarithmic', topicSlug: 'sequences-series-precalc' },

  // ======================================================================
  // Trigonometric & Polar Functions  (63 questions)
  // ======================================================================
  { question: 'sin(π/6) = ?', options: ['1/2', '$\\sqrt{3}/2$', '$\\sqrt{2}/2$', '1'], correctAnswer: 0, explanation: 'sin(30°) = sin(π/6) = 1/2.', domain: 'trigonometric', topicSlug: 'the-unit-circle' },
  { question: 'The period of f(x) = sin(2x) is:', options: ['π', '2π', 'π/2', '4π'], correctAnswer: 0, explanation: 'Period = 2π/|B| = 2π/2 = π.', domain: 'trigonometric', topicSlug: 'graphing-trig-functions' },
  { question: '$\\sin^{2}\\theta$ + $\\cos^{2}\\theta$ = ?', options: ['1', '0', 'sin(2θ)', '$\\tan^{2}\\theta$'], correctAnswer: 0, explanation: 'The Pythagorean identity: $\\sin^{2}\\theta$ + $\\cos^{2}\\theta$ = 1.', domain: 'trigonometric', topicSlug: 'trigonometric-identities-precalc' },
  { question: 'Convert (3, π/4) from polar to rectangular. The x-coordinate is:', options: ['$3\\sqrt{2}/2$', '3/2', '3', '$\\sqrt{2}$'], correctAnswer: 0, explanation: 'x = r·cos θ = 3·cos(π/4) = $3\\cdot (\\sqrt{2}/2)$ = $3\\sqrt{2}/2$.', domain: 'trigonometric', topicSlug: 'polar-coordinates-precalc' },
  { question: 'cos(π) = ?', options: ['−1', '0', '1', '−1/2'], correctAnswer: 0, explanation: 'At θ = π (180°) the point on the unit circle is (−1, 0); cosine is the x-coordinate, so cos(π) = −1.', domain: 'trigonometric', topicSlug: 'the-unit-circle' },
  { question: 'The amplitude of f(x) = 3sin(x) + 2 is:', options: ['3', '5', '2', '1'], correctAnswer: 0, explanation: 'Amplitude = |A| = |3| = 3. The +2 is a vertical shift.', domain: 'trigonometric', topicSlug: 'graphing-trig-functions' },
  { question: 'tan θ = sin θ / ?', options: ['cos θ', 'tan θ', 'sin θ', '1'], correctAnswer: 0, explanation: 'tan θ = sin θ / cos θ by definition.', domain: 'trigonometric', topicSlug: 'trigonometric-identities-precalc' },
  { question: 'The polar equation r = 4 represents:', options: ['A circle of radius 4', 'A line', 'A spiral', 'A parabola'], correctAnswer: 0, explanation: 'r = constant → circle centered at origin.', domain: 'trigonometric', topicSlug: 'polar-coordinates-precalc' },
  { question: 'tan(π/4) = ?', options: ['1', '0', '$\\sqrt{3}$', 'undefined'], correctAnswer: 0, explanation: 'sin(π/4)/cos(π/4) = $(\\sqrt{2}/2)/(\\sqrt{2}/2)$ = 1.', domain: 'trigonometric', topicSlug: 'the-unit-circle' },
  { question: 'The range of the basic sine function is:', options: ['[−1, 1]', '[0, 1]', '(−∞, ∞)', '[0, 2π]'], correctAnswer: 0, explanation: 'sin(x) oscillates between −1 and 1 inclusive.', domain: 'trigonometric', topicSlug: 'graphing-trig-functions' },
  { question: 'cos(π/3) = ?', options: ['1/2', '$\\sqrt{3}/2$', '$\\sqrt{2}/2$', '0'], correctAnswer: 0, explanation: 'π/3 is 60°; the unit-circle point is (1/2, $\\sqrt{3}/2$), and cosine is the x-coordinate, so cos(π/3) = 1/2.', domain: 'trigonometric', topicSlug: 'the-unit-circle' },
  { question: 'The phase shift of f(x) = sin(x − π/3) is:', options: ['π/3 to the right', 'π/3 to the left', 'No phase shift', '2π/3 to the right'], correctAnswer: 0, explanation: 'sin(x − c) shifts right by c. Here c = π/3.', domain: 'trigonometric', topicSlug: 'graphing-trig-functions' },
  { question: 'sin(2θ) = ?', options: ['2 sin θ cos θ', '$\\sin^{2}\\theta$ − $\\cos^{2}\\theta$', '2 sin θ', 'sin θ + cos θ'], correctAnswer: 0, explanation: 'Double angle formula: sin(2θ) = 2 sin θ cos θ.', domain: 'trigonometric', topicSlug: 'trigonometric-identities-precalc' },
  { question: 'Convert rectangular point (0, 5) to polar. r = ?', options: ['5', '0', '25', '$\\sqrt{5}$'], correctAnswer: 0, explanation: 'r = $\\sqrt{0^{2} + 5^{2}}$ = $\\sqrt{25}$ = 5.', domain: 'trigonometric', topicSlug: 'polar-coordinates-precalc' },
  { question: 'sin(3π/2) = ?', options: ['−1', '0', '1', '−1/2'], correctAnswer: 0, explanation: 'At 270°, the point on the unit circle is (0, −1). sin(3π/2) = −1.', domain: 'trigonometric', topicSlug: 'the-unit-circle' },
  { question: 'The period of f(x) = tan(x) is:', options: ['π', '2π', 'π/2', '∞'], correctAnswer: 0, explanation: 'The tangent function has period π (not 2π like sine and cosine).', domain: 'trigonometric', topicSlug: 'trigonometric-functions-precalc' },
  { question: '1 + $\\tan^{2}\\theta$ = ?', options: ['$\\sec^{2}\\theta$', '$\\csc^{2}\\theta$', '$\\cos^{2}\\theta$', '2'], correctAnswer: 0, explanation: 'Pythagorean identity: 1 + $\\tan^{2}\\theta$ = $\\sec^{2}\\theta$.', domain: 'trigonometric', topicSlug: 'trigonometric-identities-precalc' },
  { question: 'The polar equation θ = π/4 represents:', options: ['A line through the origin at 45°', 'A circle', 'A point', 'A spiral'], correctAnswer: 0, explanation: 'θ = constant defines a ray (line through origin) at that angle.', domain: 'trigonometric', topicSlug: 'polar-coordinates-precalc' },
  { question: 'cos(2θ) can be written as:', options: ['$\\cos^{2}\\theta$ − $\\sin^{2}\\theta$', '2 cos θ sin θ', '$\\cos^{2}\\theta$ + $\\sin^{2}\\theta$', '2 $\\cos^{2}\\theta$ + 1'], correctAnswer: 0, explanation: 'Double angle: cos(2θ) = $\\cos^{2}\\theta$ − $\\sin^{2}\\theta$ (also = $2\\cos^{2}\\theta$ − 1 = 1 − $2\\sin^{2}\\theta$).', domain: 'trigonometric', topicSlug: 'trigonometric-identities-precalc' },
  { question: 'Convert polar (2, π/6) to rectangular. y = ?', options: ['1', '$\\sqrt{3}$', '2', '$\\sqrt{2}$'], correctAnswer: 0, explanation: 'y = r sin θ = 2 sin(π/6) = 2(1/2) = 1.', domain: 'trigonometric', topicSlug: 'polar-coordinates-precalc' },
  { question: 'The vertical asymptotes of f(x) = tan(x) on [0, 2π] are at:', options: ['x = π/2 and x = 3π/2', 'x = 0 and x = π', 'x = π only', 'x = π/4 and x = 3π/4'], correctAnswer: 0, explanation: 'tan(x) is undefined when cos(x) = 0: at x = π/2 and x = 3π/2.', domain: 'trigonometric', topicSlug: 'trigonometric-functions-precalc' },
  { question: 'sin(π/4) = ?', options: ['$\\sqrt{2}/2$', '1/2', '$\\sqrt{3}/2$', '1'], correctAnswer: 0, explanation: 'sin(45°) = sin(π/4) = $\\sqrt{2}/2$.', domain: 'trigonometric', topicSlug: 'the-unit-circle' },
  { question: 'The polar curve r = 2 cos θ is:', options: ['A circle of diameter 2 centered at (1, 0)', 'A circle centered at origin', 'A cardioid', 'A line'], correctAnswer: 0, explanation: 'r = 2 cos θ → $r^{2}$ = 2r cos θ → $x^{2}$ + $y^{2}$ = 2x → $(x-1)^{2}$ + $y^{2}$ = 1. Circle radius 1, center (1, 0).', domain: 'trigonometric', topicSlug: 'polar-coordinates-precalc' },
  { question: 'sec(0) = ?', options: ['1', '0', 'undefined', '−1'], correctAnswer: 0, explanation: 'sec(0) = 1/cos(0) = 1/1 = 1.', domain: 'trigonometric', topicSlug: 'trigonometric-identities-precalc' },
  { question: 'The midline of f(x) = 2 cos(x) + 5 is:', options: ['y = 5', 'y = 2', 'y = 7', 'y = 3'], correctAnswer: 0, explanation: 'Midline is the vertical shift: y = 5.', domain: 'trigonometric', topicSlug: 'graphing-trig-functions' },
  { question: 'In which quadrant is θ if sin θ > 0 and cos θ < 0?', options: ['Quadrant II', 'Quadrant I', 'Quadrant III', 'Quadrant IV'], correctAnswer: 0, explanation: 'sin > 0 (above x-axis) and cos < 0 (left of y-axis) → Quadrant II.', domain: 'trigonometric', topicSlug: 'the-unit-circle' },
  { question: 'The rose curve r = 3 sin(2θ) has how many petals?', options: ['4', '2', '3', '6'], correctAnswer: 0, explanation: 'r = a sin(nθ): if n is even, 2n petals. n = 2 → 4 petals.', domain: 'trigonometric', topicSlug: 'polar-coordinates-precalc' },
  { question: 'cot(π/2) = ?', options: ['0', '1', 'undefined', '−1'], correctAnswer: 0, explanation: 'cot(π/2) = cos(π/2)/sin(π/2) = 0/1 = 0.', domain: 'trigonometric', topicSlug: 'trigonometric-identities-precalc' },
  { question: 'The period of f(x) = cos(x/3) is:', options: ['6π', '2π/3', '2π', '3π'], correctAnswer: 0, explanation: 'Period = 2π/|B| = 2π/(1/3) = 6π.', domain: 'trigonometric', topicSlug: 'graphing-trig-functions' },
  { question: 'Convert rectangular (−1, $\\sqrt{3}$) to polar. θ = ?', options: ['2π/3', 'π/3', 'π/6', '5π/6'], correctAnswer: 0, explanation: 'tan θ = $\\sqrt{3}/(-1)$ = $-\\sqrt{3}$. In Q II (x < 0, y > 0): θ = π − π/3 = 2π/3.', domain: 'trigonometric', topicSlug: 'polar-coordinates-precalc' },
  { question: 'cos(0) = ?', options: ['1', '0', '−1', '1/2'], correctAnswer: 0, explanation: 'cos(0°) = cos(0) = 1.', domain: 'trigonometric', topicSlug: 'the-unit-circle' },
  { question: 'The period of f(x) = csc(x) is:', options: ['2π', 'π', 'π/2', '4π'], correctAnswer: 0, explanation: 'csc(x) = 1/sin(x), and sin(x) has period 2π, so csc(x) also has period 2π.', domain: 'trigonometric', topicSlug: 'trigonometric-functions-precalc' },
  { question: 'tan(π/3) = ?', options: ['$\\sqrt{3}$', '$1/\\sqrt{3}$', '1', 'undefined'], correctAnswer: 0, explanation: 'sin(π/3)/cos(π/3) = $(\\sqrt{3}/2)/(1/2)$ = $\\sqrt{3}$.', domain: 'trigonometric', topicSlug: 'the-unit-circle' },
  { question: 'The function f(x) = −2 cos(x) + 1 has maximum value:', options: ['3', '1', '−1', '2'], correctAnswer: 0, explanation: 'cos(x) min = −1. f max = −2(−1) + 1 = 2 + 1 = 3.', domain: 'trigonometric', topicSlug: 'graphing-trig-functions' },
  { question: 'sin(−θ) = ?', options: ['−sin θ', 'sin θ', 'cos θ', '−cos θ'], correctAnswer: 0, explanation: 'Sine is an odd function: sin(−θ) = −sin θ.', domain: 'trigonometric', topicSlug: 'trigonometric-identities-precalc' },
  { question: 'The cardioid r = 1 + cos θ passes through the origin when θ = ?', options: ['π', '0', 'π/2', '3π/2'], correctAnswer: 0, explanation: 'r = 0 when 1 + cos θ = 0 → cos θ = −1 → θ = π.', domain: 'trigonometric', topicSlug: 'polar-coordinates-precalc' },
  { question: 'sin(π) = ?', options: ['0', '1', '−1', '1/2'], correctAnswer: 0, explanation: 'At π (180°), the point on the unit circle is (−1, 0). sin(π) = 0.', domain: 'trigonometric', topicSlug: 'the-unit-circle' },
  { question: 'The graph of y = tan(x) has x-intercepts at:', options: ['x = nπ (n integer)', 'x = π/2 + nπ', 'x = nπ/2', 'None'], correctAnswer: 0, explanation: 'tan(x) = 0 when sin(x) = 0, which occurs at x = nπ.', domain: 'trigonometric', topicSlug: 'trigonometric-functions-precalc' },
  { question: 'cos(−θ) = ?', options: ['cos θ', '−cos θ', 'sin θ', '−sin θ'], correctAnswer: 0, explanation: 'Cosine is an even function: cos(−θ) = cos θ.', domain: 'trigonometric', topicSlug: 'trigonometric-identities-precalc' },
  { question: 'Convert polar (4, π) to rectangular:', options: ['(−4, 0)', '(4, 0)', '(0, 4)', '(0, −4)'], correctAnswer: 0, explanation: 'x = 4 cos π = 4(−1) = −4. y = 4 sin π = 4(0) = 0. Point: (−4, 0).', domain: 'trigonometric', topicSlug: 'polar-coordinates-precalc' },
  { question: 'cos(π/6) = ?', options: ['$\\sqrt{3}/2$', '1/2', '$\\sqrt{2}/2$', '0'], correctAnswer: 0, explanation: 'cos(30°) = $\\sqrt{3}/2$.', domain: 'trigonometric', topicSlug: 'the-unit-circle' },
  { question: 'The graph of f(x) = sin(x) + cos(x) has amplitude:', options: ['$\\sqrt{2}$', '2', '1', '$\\sqrt{3}$'], correctAnswer: 0, explanation: 'sin(x) + cos(x) = $\\sqrt{2}$ sin(x + π/4). Amplitude = $\\sqrt{2}$ ≈ 1.414.', domain: 'trigonometric', topicSlug: 'trigonometric-identities-precalc' },
  { question: '$\\tan^{2}\\theta$ + 1 = ?', options: ['$\\sec^{2}\\theta$', '$\\csc^{2}\\theta$', '1', '$\\cot^{2}\\theta$'], correctAnswer: 0, explanation: 'Dividing $\\sin^{2}\\theta$ + $\\cos^{2}\\theta$ = 1 by $\\cos^{2}\\theta$ gives $\\tan^{2}\\theta$ + 1 = $\\sec^{2}\\theta$.', domain: 'trigonometric', topicSlug: 'trigonometric-identities-precalc' },
  { question: 'The limaçon r = 2 + 3 sin θ has what feature?', options: ['An inner loop', 'A dimple', 'No special feature (convex)', 'A cardioid shape'], correctAnswer: 0, explanation: 'Since |b| > |a| (3 > 2), the limaçon r = a + b sin θ has an inner loop.', domain: 'trigonometric', topicSlug: 'polar-coordinates-precalc' },
  { question: 'sin(5π/6) = ?', options: ['1/2', '−1/2', '$\\sqrt{3}/2$', '$-\\sqrt{3}/2$'], correctAnswer: 0, explanation: '5π/6 is in Q II. Reference angle π/6. sin(5π/6) = sin(π/6) = 1/2.', domain: 'trigonometric', topicSlug: 'the-unit-circle' },
  { question: 'The frequency of f(x) = sin(4πx) is:', options: ['2', '4π', '1/(4π)', 'π/2'], correctAnswer: 0, explanation: 'Period = 2π/(4π) = 1/2. Frequency = 1/period = 2.', domain: 'trigonometric', topicSlug: 'graphing-trig-functions' },
  { question: 'Simplify: $(1 - \\cos^{2}\\theta )/\\sin$ θ = ?', options: ['sin θ', 'cos θ', 'tan θ', '1'], correctAnswer: 0, explanation: '1 − $\\cos^{2}\\theta$ = $\\sin^{2}\\theta$. So $\\sin^{2}\\theta /\\sin$ θ = sin θ.', domain: 'trigonometric', topicSlug: 'trigonometric-identities-precalc' },
  { question: 'cos(3π/4) = ?', options: ['$-\\sqrt{2}/2$', '$\\sqrt{2}/2$', '−1/2', '1/2'], correctAnswer: 0, explanation: '3π/4 is in Q II. Reference angle π/4. cos(3π/4) = −cos(π/4) = $-\\sqrt{2}/2$.', domain: 'trigonometric', topicSlug: 'the-unit-circle' },
  { question: 'The graph of y = 2 sin(3x − π) has phase shift:', options: ['π/3 to the right', 'π to the right', 'π/3 to the left', '3π to the right'], correctAnswer: 0, explanation: 'Factor: 2 sin(3(x − π/3)). Phase shift = π/3 to the right.', domain: 'trigonometric', topicSlug: 'graphing-trig-functions' },
  { question: 'Verify: sin θ · csc θ = ?', options: ['1', '$\\sin^{2}\\theta$', '0', '$\\csc^{2}\\theta$'], correctAnswer: 0, explanation: 'csc θ = 1/sin θ. So sin θ · (1/sin θ) = 1.', domain: 'trigonometric', topicSlug: 'trigonometric-identities-precalc' },
  { question: 'tan(3π/4) = ?', options: ['−1', '1', '0', 'undefined'], correctAnswer: 0, explanation: '3π/4 in Q II. Reference angle π/4. tan is negative in Q II. tan(3π/4) = −1.', domain: 'trigonometric', topicSlug: 'the-unit-circle' },
  { question: 'The minimum value of f(x) = 5 sin(x) − 2 is:', options: ['−7', '−2', '3', '−5'], correctAnswer: 0, explanation: 'sin(x) min = −1. f min = 5(−1) − 2 = −5 − 2 = −7.', domain: 'trigonometric', topicSlug: 'graphing-trig-functions' },
  { question: 'sin(A + B) = ?', options: ['sin A cos B + cos A sin B', 'sin A sin B + cos A cos B', 'sin A + sin B', 'cos A cos B − sin A sin B'], correctAnswer: 0, explanation: 'The angle addition formula: sin(A + B) = sin A cos B + cos A sin B.', domain: 'trigonometric', topicSlug: 'trigonometric-identities-precalc' },
  { question: 'Convert (x, y) = (3, 3) to polar. r = ?', options: ['$3\\sqrt{2}$', '6', '3', '$\\sqrt{3}$'], correctAnswer: 0, explanation: 'r = $\\sqrt{3^{2} + 3^{2}}$ = $\\sqrt{18}$ = $3\\sqrt{2}$.', domain: 'trigonometric', topicSlug: 'polar-coordinates-precalc' },
  { question: 'sin(2π) = ?', options: ['0', '1', '−1', 'undefined'], correctAnswer: 0, explanation: 'After a full revolution (2π), we return to (1, 0). sin(2π) = 0.', domain: 'trigonometric', topicSlug: 'the-unit-circle' },
  { question: 'The graph of y = sec(x) is undefined at:', options: ['x = π/2 + nπ', 'x = nπ', 'x = nπ/2', 'Never undefined'], correctAnswer: 0, explanation: 'sec(x) = 1/cos(x). Undefined when cos(x) = 0, at x = π/2 + nπ.', domain: 'trigonometric', topicSlug: 'trigonometric-functions-precalc' },
  { question: 'The polar equation r = 3 sec θ converts to what rectangular equation?', options: ['x = 3', 'y = 3', '$x^{2}$ + $y^{2}$ = 9', 'x + y = 3'], correctAnswer: 0, explanation: 'r = 3/cos θ → r cos θ = 3 → x = 3. A vertical line.', domain: 'trigonometric', topicSlug: 'polar-coordinates-precalc' },
  { question: 'The reference angle for 7π/6 is:', options: ['π/6', '7π/6', '5π/6', 'π/3'], correctAnswer: 0, explanation: '7π/6 is in Q III. Reference angle = 7π/6 − π = π/6.', domain: 'trigonometric', topicSlug: 'the-unit-circle' },
  { question: 'sin(11π/6) = ?', options: ['−1/2', '1/2', '$-\\sqrt{3}/2$', '$\\sqrt{3}/2$'], correctAnswer: 0, explanation: '11π/6 is in Q IV. Reference angle π/6. sin is negative in Q IV: sin(11π/6) = −sin(π/6) = −1/2.', domain: 'trigonometric', topicSlug: 'the-unit-circle' },

  // --- Added Oct 2026 (precalc-final F4): skills the audit found absent ---
  { question: 'What is the exact value of $\\arcsin\\left(-\\dfrac{\\sqrt{3}}{2}\\right)$?', options: ['5π/3', '−π/3', '4π/3', '−π/6'], correctAnswer: 1, explanation: 'The range of arcsin is [−π/2, π/2]. The angle in that range whose sine is $-\\sqrt{3}/2$ is −π/3. 5π/3 and 4π/3 have the right sine but lie outside the range.', domain: 'trigonometric', topicSlug: 'inverse-trig-functions-precalc' },
  { question: 'What is the value of $\\cos^{-1}\\left(\\cos\\dfrac{5\\pi}{4}\\right)$?', options: ['5π/4', '3π/4', 'π/4', '−π/4'], correctAnswer: 1, explanation: 'cos(5π/4) = $-\\sqrt{2}/2$, and arccos returns the angle in [0, π] with that cosine: 3π/4. The composition does not return 5π/4 because 5π/4 is outside the range of arccos.', domain: 'trigonometric', topicSlug: 'inverse-trig-functions-precalc' },
  { question: 'The range of y = arctan(x) is:', options: ['(−π/2, π/2)', '[−π/2, π/2]', '[0, π]', '(−∞, ∞)'], correctAnswer: 0, explanation: 'arctan is the inverse of tangent restricted to (−π/2, π/2). The endpoints are excluded because tangent has vertical asymptotes there, so arctan approaches ±π/2 but never reaches them.', domain: 'trigonometric', topicSlug: 'inverse-trig-functions-precalc' },
  { question: 'A 10-foot ladder leans against a wall with its base 4 feet from the wall. Which expression gives the angle θ, in radians, that the ladder makes with the ground?', options: ['arccos(0.4)', 'arcsin(0.4)', 'arctan(0.4)', 'arccos(2.5)'], correctAnswer: 0, explanation: 'The 4-foot distance is the side adjacent to θ and the 10-foot ladder is the hypotenuse, so cos θ = 4/10 = 0.4 and θ = arccos(0.4). arccos(2.5) is undefined because 2.5 is outside [−1, 1].', domain: 'trigonometric', topicSlug: 'inverse-trig-functions-precalc' },
  { question: 'Solve 2 sin x − 1 = 0 on the interval [0, 2π).', options: ['x = π/6 and x = 5π/6', 'x = π/6 only', 'x = π/3 and x = 2π/3', 'x = π/6 and x = 7π/6'], correctAnswer: 0, explanation: 'sin x = 1/2 at the reference angle π/6, and sine is positive in Quadrants I and II, so x = π/6 and x = π − π/6 = 5π/6.', domain: 'trigonometric', topicSlug: 'solving-trig-equations' },
  { question: 'How many solutions does cos(2x) = 0 have on the interval [0, 2π)?', options: ['2', '4', '1', '8'], correctAnswer: 1, explanation: 'As x runs through [0, 2π), 2x runs through [0, 4π), two full periods of cosine. cos(2x) = 0 when 2x = π/2, 3π/2, 5π/2, 7π/2, giving x = π/4, 3π/4, 5π/4, 7π/4: four solutions.', domain: 'trigonometric', topicSlug: 'solving-trig-equations' },
  { question: 'Solve $2\\cos^{2}x$ − cos x − 1 = 0 on the interval [0, 2π).', options: ['x = 0, 2π/3, 4π/3', 'x = 0, π/3, 5π/3', 'x = 2π/3 and 4π/3 only', 'x = π/3, π, 5π/3'], correctAnswer: 0, explanation: 'Factor as (2 cos x + 1)(cos x − 1) = 0. cos x = 1 gives x = 0, and cos x = −1/2 gives x = 2π/3 and x = 4π/3 (cosine is negative in Quadrants II and III).', domain: 'trigonometric', topicSlug: 'solving-trig-equations' },
  { question: 'For which values of x in [0, 2π) is sin x > cos x?', options: ['π/4 < x < 5π/4', '0 < x < π', '0 ≤ x < π/4 or 5π/4 < x < 2π', 'π/2 < x < 3π/2'], correctAnswer: 0, explanation: 'sin x = cos x at x = π/4 and x = 5π/4. Testing x = π/2 (sin = 1 > cos = 0) shows the inequality holds between them, so sin x > cos x on (π/4, 5π/4).', domain: 'trigonometric', topicSlug: 'solving-trig-equations' },
  { question: 'The water depth in a harbor varies sinusoidally with the tides: low tide of 2 m at 3 a.m. and the next high tide of 8 m at 9 a.m. Which function models the depth D, in meters, t hours after midnight?', options: ['D(t) = $-3\\cos\\left(\\frac{\\pi}{6}(t - 3)\\right) + 5$', 'D(t) = $3\\cos\\left(\\frac{\\pi}{6}(t - 3)\\right) + 5$', 'D(t) = $-3\\cos\\left(\\frac{\\pi}{12}(t - 3)\\right) + 5$', 'D(t) = $-6\\cos\\left(\\frac{\\pi}{6}(t - 3)\\right) + 5$'], correctAnswer: 0, explanation: 'Amplitude (8 − 2)/2 = 3, midline (8 + 2)/2 = 5. Low to the next high is half a period, so the period is 12 hours and b = 2π/12 = π/6. A negative cosine shifted right 3 starts at the minimum at t = 3. π/12 treats the 6 hours as a full period, and 6 is the full range rather than the amplitude.', domain: 'trigonometric', topicSlug: 'graphing-trig-functions' },
  { question: 'A sinusoidal function has a maximum value of 11 at x = 2 and its next minimum value of 3 at x = 6. What is its period?', options: ['4', '8', '16', '2'], correctAnswer: 1, explanation: 'From a maximum to the next minimum is half a period, so half the period is 6 − 2 = 4 and the period is 8. (The amplitude is (11 − 3)/2 = 4 and the midline is y = 7.)', domain: 'trigonometric', topicSlug: 'graphing-trig-functions' },
  { question: 'What is the phase shift of f(x) = 4 sin(2x − π/3) + 1?', options: ['π/6 to the right', 'π/3 to the right', 'π/3 to the left', 'π/6 to the left'], correctAnswer: 0, explanation: 'Factor the argument: 2x − π/3 = 2(x − π/6), so the graph of 4 sin(2x) + 1 is shifted π/6 to the right. Reading π/3 directly ignores the factor of 2.', domain: 'trigonometric', topicSlug: 'graphing-trig-functions' },
  { question: 'Which function has amplitude 5, midline y = −2, and period π?', options: ['y = 5 sin(2x) − 2', 'y = 5 sin(πx) − 2', 'y = −2 sin(2x) + 5', 'y = 5 sin(x/2) − 2'], correctAnswer: 0, explanation: 'Period π requires 2π/b = π, so b = 2; the amplitude 5 is the coefficient of sine and the midline −2 is the vertical shift: y = 5 sin(2x) − 2. sin(πx) has period 2, and sin(x/2) has period 4π.', domain: 'trigonometric', topicSlug: 'graphing-trig-functions' },
  { question: 'A polar function r = f(θ) has f(π/6) = 4 and f(π/2) = 1. What is the average rate of change of r with respect to θ on [π/6, π/2]?', options: ['−9/π', '−3/π', '−π/9', '−3'], correctAnswer: 0, explanation: 'Average rate of change = (1 − 4)/(π/2 − π/6) = −3/(π/3) = −9/π radius units per radian. −3 forgets to divide by the change in θ.', domain: 'trigonometric', topicSlug: 'polar-coordinates-precalc' },
  { question: 'For the polar function r = 2 + 2 sin θ, on which interval is the distance from the origin decreasing as θ increases?', options: ['π/2 < θ < 3π/2', '0 < θ < π/2', '0 < θ < π', '3π/2 < θ < 2π'], correctAnswer: 0, explanation: 'r = 2 + 2 sin θ is never negative, so the distance from the origin is r itself, and r decreases exactly where sin θ decreases: from its maximum at θ = π/2 to its minimum at θ = 3π/2.', domain: 'trigonometric', topicSlug: 'polar-coordinates-precalc' },
  { question: 'Which angle is coterminal with −5π/4?', options: ['5π/4', '3π/4', '7π/4', 'π/4'], correctAnswer: 1, explanation: 'Add one full rotation: −5π/4 + 2π = 3π/4. Coterminal angles differ by a multiple of 2π; 5π/4 differs from −5π/4 by 5π/2, which is not a multiple of 2π.', domain: 'trigonometric', topicSlug: 'trigonometric-functions-precalc' },
  { question: 'The terminal ray of an angle θ in standard position passes through the point (−3, 4). What is tan θ?', options: ['−4/3', '−3/4', '4/5', '−3/5'], correctAnswer: 0, explanation: 'tan θ = y/x = 4/(−3) = −4/3. The point is in Quadrant II, where tangent is negative; 4/5 and −3/5 are sin θ and cos θ (the distance from the origin is 5).', domain: 'trigonometric', topicSlug: 'trigonometric-functions-precalc' },
  { question: 'A central angle of 2.5 radians in a circle of radius 6 cm subtends an arc of length:', options: ['15 cm', '2.4 cm', '12 cm', '15π cm'], correctAnswer: 0, explanation: 'Arc length = (radius)(angle in radians) = 6 · 2.5 = 15 cm. No factor of π appears because the angle is already in radians.', domain: 'trigonometric', topicSlug: 'trigonometric-functions-precalc' },

  // ======================================================================
  // Sequences, Composition & Inverses  (62 questions)
  // ======================================================================
  { question: 'If f(x) = 2x + 1 and g(x) = $x^{2}$, then (f ∘ g)(3) = ?', options: ['19', '49', '13', '37'], correctAnswer: 0, explanation: 'g(3) = 9, then f(9) = 2(9) + 1 = 19.', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'The inverse of f(x) = 3x − 6 is:', options: ['$f^{-1}(x)$ = (x + 6)/3', '$f^{-1}(x)$ = (x − 6)/3', '$f^{-1}(x)$ = 3x + 6', '$f^{-1}(x)$ = −3x + 6'], correctAnswer: 0, explanation: 'y = 3x − 6 → x = (y + 6)/3. So $f^{-1}(x)$ = (x + 6)/3.', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'The table gives f(1) = 4, f(2) = 3, f(3) = 1, f(4) = 2 and g(1) = 3, g(2) = 1, g(3) = 4, g(4) = 2. What is f(g(3))?', options: ['2', '1', '4', '3'], correctAnswer: 0, explanation: 'Work from the inside out: g(3) = 4, then f(4) = 2. (3 is g(f(3)), which composes in the wrong order.)', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'If f(x) = $\\sqrt{x}$ and g(x) = x + 4, then (g ∘ f)(9) = ?', options: ['7', '$\\sqrt{13}$', '13', '5'], correctAnswer: 0, explanation: 'f(9) = 3, then g(3) = 3 + 4 = 7.', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'If f(x) = (x − 1)/(x + 2), then $f^{-1}(0)$ = ?', options: ['1', '−1/2', '0', '2'], correctAnswer: 0, explanation: 'Set f(x) = 0: (x−1)/(x+2) = 0 → x = 1. So $f^{-1}(0)$ = 1.', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'For the arithmetic sequence 3, 7, 11, 15, ..., the 10th term is:', options: ['39', '43', '35', '40'], correctAnswer: 0, explanation: '$a_{10}$ = 3 + (10−1)·4 = 3 + 36 = 39.', domain: 'exponential-logarithmic', topicSlug: 'sequences-series-precalc' },
  { question: 'A geometric sequence has $g_{0}$ = 5 and common ratio r = 2. Using $g_{n}$ = $g_{0}r^{n}$, what is $g_{4}$?', options: ['40', '80', '160', '13'], correctAnswer: 1, explanation: '$g_{4}$ = 5 · $2^{4}$ = 5 · 16 = 80. (40 uses $2^{3}$; 13 adds 2 four times as if the sequence were arithmetic.)', domain: 'exponential-logarithmic', topicSlug: 'sequences-series-precalc' },
  { question: 'A function f is one-to-one if:', options: ['It passes the horizontal line test', 'It passes the vertical line test', 'f(0) = 0', 'It is continuous'], correctAnswer: 0, explanation: 'One-to-one means each y-value has exactly one x-value → horizontal line test.', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'The common ratio of 5, 15, 45, 135, ... is:', options: ['3', '10', '5', '30'], correctAnswer: 0, explanation: '15/5 = 3. Each term is multiplied by 3.', domain: 'exponential-logarithmic', topicSlug: 'sequences-series-precalc' },
  { question: 'If f(x) = $x^{2}$ and g(x) = 3x − 1, then (g ∘ f)(2) = ?', options: ['11', '25', '5', '35'], correctAnswer: 0, explanation: 'f(2) = 4, then g(4) = 3(4) − 1 = 11.', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'The inverse of f(x) = (2x + 1)/3 is:', options: ['$f^{-1}(x)$ = (3x − 1)/2', '$f^{-1}(x)$ = 3/(2x + 1)', '$f^{-1}(x)$ = (2x − 1)/3', '$f^{-1}(x)$ = 3x − 1'], correctAnswer: 0, explanation: 'y = (2x + 1)/3 → 3y = 2x + 1 → x = (3y − 1)/2. So $f^{-1}(x)$ = (3x − 1)/2.', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'An arithmetic sequence has $a_{3}$ = 11 and $a_{7}$ = 27. What is the common difference d?', options: ['16', '8', '4', '16/5'], correctAnswer: 2, explanation: 'From term 3 to term 7 is 7 − 3 = 4 steps: d = (27 − 11)/4 = 16/4 = 4.', domain: 'exponential-logarithmic', topicSlug: 'sequences-series-precalc' },
  { question: 'If f(x) = 1/x and g(x) = x − 2, the domain of (f ∘ g)(x) is:', options: ['All x ≠ 2', 'All x ≠ 0', 'All real numbers', 'x > 2'], correctAnswer: 0, explanation: '(f ∘ g)(x) = 1/(x − 2). Undefined when x − 2 = 0 → x ≠ 2.', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'If f is a one-to-one function, then $f(f^{-1}(7))$ = ?', options: ['7', 'f(7)', '1/7', '0'], correctAnswer: 0, explanation: 'By definition of inverse functions: $f(f^{-1}(x))$ = x for all x in the range of f.', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'A one-to-one function f has the point (2, 7) on its graph. Which point must be on the graph of $f^{-1}$?', options: ['(7, 2)', '(−2, −7)', '(2, 1/7)', '(−7, −2)'], correctAnswer: 0, explanation: 'f(2) = 7 means $f^{-1}(7)$ = 2, so (7, 2) is on the graph of $f^{-1}$. Inverse graphs swap input and output (reflection across y = x).', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'The 5th term of the geometric sequence with $a_{1}$ = 2, r = 3 is:', options: ['162', '243', '54', '486'], correctAnswer: 0, explanation: '$a_{5}$ = $a_{1}$ · $r^{4}$ = 2 · $3^{4}$ = 2 · 81 = 162.', domain: 'exponential-logarithmic', topicSlug: 'sequences-series-precalc' },
  { question: 'If f(x) = $x^{3}$ + 1, then $f^{-1}(9)$ = ?', options: ['2', '3', '∛9', '8'], correctAnswer: 0, explanation: 'Set $x^{3}$ + 1 = 9 → $x^{3}$ = 8 → x = 2. So $f^{-1}(9)$ = 2.', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'If h(x) = f(g(x)), f(x) = x + 5, g(x) = 2x, then h(3) = ?', options: ['11', '16', '8', '21'], correctAnswer: 0, explanation: 'g(3) = 6, then f(6) = 6 + 5 = 11.', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'The graph of $f^{-1}$ is a reflection of f across:', options: ['y = x', 'The x-axis', 'The y-axis', 'The origin'], correctAnswer: 0, explanation: 'Inverse functions are reflections across the line y = x.', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'The terms of a geometric sequence are the values of which type of function evaluated at whole-number inputs?', options: ['Linear', 'Quadratic', 'Logarithmic', 'Exponential'], correctAnswer: 3, explanation: 'A geometric sequence $g_{n}$ = $g_{0}r^{n}$ multiplies by the same ratio r for each step of 1 in n, which is how an exponential function behaves. Arithmetic sequences correspond to linear functions.', domain: 'exponential-logarithmic', topicSlug: 'sequences-series-precalc' },
  { question: 'Is the sequence 1, 4, 9, 16, 25, ... arithmetic, geometric, or neither?', options: ['Neither', 'Arithmetic', 'Geometric', 'Both'], correctAnswer: 0, explanation: 'Differences: 3, 5, 7, 9 (not constant). Ratios: 4, 9/4, 16/9 (not constant). Neither.', domain: 'exponential-logarithmic', topicSlug: 'sequences-series-precalc' },
  { question: 'If f(x) = 2x − 3 and g(x) = (x + 3)/2, then f(g(x)) = ?', options: ['x', '2x', 'x + 3', '4x − 3'], correctAnswer: 0, explanation: 'f(g(x)) = 2·(x+3)/2 − 3 = (x+3) − 3 = x. They are inverses.', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'A function has an inverse if and only if it is:', options: ['One-to-one (injective)', 'Continuous', 'Differentiable', 'Polynomial'], correctAnswer: 0, explanation: 'Only one-to-one functions have true inverses (pass horizontal line test).', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'If f(x) = $x^{2}$ + 1 and g(x) = x − 3, which expression equals f(g(x))?', options: ['$x^{2}$ − 2', '$x^{2}$ + 10', '$x^{2}$ − 6x + 10', '$x^{2}$ − 6x + 8'], correctAnswer: 2, explanation: 'f(g(x)) = $(x - 3)^{2}$ + 1 = $x^{2}$ − 6x + 9 + 1 = $x^{2}$ − 6x + 10. ($x^{2}$ − 2 is g(f(x)).)', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'The recursive formula $a_{n}$ = $a_{n-1}$ + 5, $a_{1}$ = 3 defines what type of sequence?', options: ['Arithmetic with d = 5', 'Geometric with r = 5', 'Neither', 'Arithmetic with d = 3'], correctAnswer: 0, explanation: 'Adding a constant (5) each time → arithmetic sequence with common difference 5.', domain: 'exponential-logarithmic', topicSlug: 'sequences-series-precalc' },
  { question: 'If f(x) = |x − 2|, then f(f(0)) = ?', options: ['0', '2', '4', '−2'], correctAnswer: 0, explanation: 'f(0) = |0 − 2| = 2. f(2) = |2 − 2| = 0.', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'If f(x) = 3x + 2 and g(x) = $x^{2}$ − 1, then (f − g)(2) = ?', options: ['5', '3', '8', '11'], correctAnswer: 0, explanation: 'f(2) = 8, g(2) = 3. (f − g)(2) = 8 − 3 = 5.', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'The inverse of f(x) = 5x is:', options: ['$f^{-1}(x)$ = x/5', '$f^{-1}(x)$ = 5/x', '$f^{-1}(x)$ = x − 5', '$f^{-1}(x)$ = −5x'], correctAnswer: 0, explanation: 'y = 5x → x = y/5. So $f^{-1}(x)$ = x/5.', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'An arithmetic sequence is given by $a_{n}$ = 12 − 3n for n ≥ 0. What is $a_{5}$?', options: ['0', '27', '−15', '−3'], correctAnswer: 3, explanation: '$a_{5}$ = 12 − 3(5) = 12 − 15 = −3.', domain: 'exponential-logarithmic', topicSlug: 'sequences-series-precalc' },
  { question: 'The nth term of 1, 1/2, 1/4, 1/8, ... is:', options: ['$(1/2)^{n-1}$', '1/(2n)', '$(1/2)^{n}$', '$1/n^{2}$'], correctAnswer: 0, explanation: 'Geometric with $a_{1}$ = 1, r = 1/2. $a_{n}$ = 1 · $(1/2)^{n-1}$ = $(1/2)^{n-1}$.', domain: 'exponential-logarithmic', topicSlug: 'sequences-series-precalc' },
  { question: 'If f(x) = x + 1 and g(x) = x − 1, then (f ∘ g ∘ f)(0) = ?', options: ['1', '0', '2', '−1'], correctAnswer: 0, explanation: 'f(0) = 1. g(1) = 0. f(0) = 1. So (f ∘ g ∘ f)(0) = 1.', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'If f is its own inverse, then f(f(x)) = ?', options: ['x', 'f(x)', '0', '1'], correctAnswer: 0, explanation: 'If f = $f^{-1}$, then f(f(x)) = $f(f^{-1}(x))$ = x (by definition of inverse).', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'If f(x) = 2x + 6, what is $f^{-1}(10)$?', options: ['26', '2', '8', '1/26'], correctAnswer: 1, explanation: '$f^{-1}(10)$ is the input that gives f(x) = 10: 2x + 6 = 10, so x = 2. (26 is f(10), and 1/26 is 1/f(10), not the inverse.)', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'If g(x) = $x^{2}$ + 3 and h(x) = $\\sqrt{x - 3}$, then (h ∘ g)(x) = ?', options: ['|x|', '$\\sqrt{x^{2} + 3}$', 'x', '$x^{2}$ + 3 − $\\sqrt{3}$'], correctAnswer: 0, explanation: 'h(g(x)) = $\\sqrt{g(x) - 3}$ = $\\sqrt{x^{2} + 3 - 3}$ = $\\sqrt{x^{2}}$ = |x|.', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'f(x) = (4x + 3)/(2x − 1). Find $f^{-1}(x)$:', options: ['(x + 3)/(2x − 4)', '(2x − 1)/(4x + 3)', '(4x − 3)/(2x + 1)', '(x − 3)/(2x + 4)'], correctAnswer: 0, explanation: 'y = (4x+3)/(2x−1) → y(2x−1) = 4x+3 → 2xy − y = 4x + 3 → x(2y−4) = y+3 → x = (y+3)/(2y−4).', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'A sequence has $a_{1}$ = 6, $a_{2}$ = 18, $a_{3}$ = 54. Which formula gives $a_{n}$?', options: ['$a_{n}$ = 6 · $3^{n}$', '$a_{n}$ = 12n − 6', '$a_{n}$ = 2 · $3^{n}$', '$a_{n}$ = $6^{n}$'], correctAnswer: 2, explanation: 'The ratio is 18/6 = 3, so the sequence is geometric. $a_{n}$ = $a_{1}r^{n-1}$ = 6 · $3^{n-1}$ = 2 · $3^{n}$. Check: 2 · 3 = 6, 2 · 9 = 18, 2 · 27 = 54.', domain: 'exponential-logarithmic', topicSlug: 'sequences-series-precalc' },
  { question: 'If f(x) = $x^{2}$ (x ≥ 0), then $f^{-1}(x)$ = ?', options: ['$\\sqrt{x}$', '$x^{2}$', '$\\pm \\sqrt{x}$', '$1/x^{2}$'], correctAnswer: 0, explanation: 'With domain restricted to x ≥ 0, f is one-to-one. $f^{-1}(x)$ = $\\sqrt{x}$.', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'For f(x) = (x − 1)/2, which function g satisfies f(g(x)) = x and g(f(x)) = x?', options: ['g(x) = 2x − 1', 'g(x) = 2x + 1', 'g(x) = (x + 1)/2', 'g(x) = 2/(x − 1)'], correctAnswer: 1, explanation: 'Solve y = (x − 1)/2 for x: x = 2y + 1, so g(x) = 2x + 1. Check: f(2x + 1) = (2x + 1 − 1)/2 = x.', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'If (f · g)(x) = $x^{2}$ + x and g(x) = x, then f(x) = ?', options: ['x + 1', '$x^{2}$', '$x^{2}$ + x', 'x − 1'], correctAnswer: 0, explanation: '(f · g)(x) = f(x) · g(x) = f(x) · x = $x^{2}$ + x. So f(x) = $(x^{2} + x)/x$ = x + 1 (x ≠ 0).', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'Which function is NOT one-to-one?', options: ['f(x) = $x^{2}$', 'f(x) = $x^{3}$', 'f(x) = 2x + 1', 'f(x) = $e^{x}$'], correctAnswer: 0, explanation: 'f(x) = $x^{2}$ fails the horizontal line test: f(2) = f(−2) = 4. Not one-to-one.', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'An arithmetic sequence has $a_{0}$ = 7 and common difference d = −2. Which function f satisfies f(n) = $a_{n}$ for every whole number n ≥ 0?', options: ['f(n) = −2 + 7n', 'f(n) = 9 − 2n', 'f(n) = $7(-2)^{n}$', 'f(n) = 7 − 2n'], correctAnswer: 3, explanation: 'An arithmetic sequence is a linear function of n: $a_{n}$ = $a_{0}$ + dn = 7 − 2n. (9 − 2n would give $a_{0}$ = 9; $7(-2)^{n}$ is geometric.)', domain: 'exponential-logarithmic', topicSlug: 'sequences-series-precalc' },
  { question: 'Find the 8th term of 2, 6, 18, 54, ...:', options: ['4374', '2187', '6561', '1458'], correctAnswer: 0, explanation: 'Geometric with $a_{1}$ = 2, r = 3. $a_{8}$ = 2 · $3^{7}$ = 2 · 2187 = 4374.', domain: 'exponential-logarithmic', topicSlug: 'sequences-series-precalc' },
  { question: 'If f(x) = ln(x) and g(x) = $e^{x}$, then (f ∘ g)(5) = ?', options: ['5', '$e^{5}$', 'ln 5', '1'], correctAnswer: 0, explanation: 'f(g(5)) = $f(e^{5})$ = $\\ln (e^{5})$ = 5. f and g are inverse functions.', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'The inverse of f(x) = 1/x is:', options: ['$f^{-1}(x)$ = 1/x', '$f^{-1}(x)$ = x', '$f^{-1}(x)$ = −x', '$f^{-1}(x)$ = −1/x'], correctAnswer: 0, explanation: 'y = 1/x → x = 1/y. So $f^{-1}(x)$ = 1/x. The function is its own inverse.', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'A one-to-one function f has domain [0, 5] and range [−2, 8]. What is the domain of $f^{-1}$?', options: ['[−2, 8]', '[0, 5]', '[−8, 2]', '[−5, 0]'], correctAnswer: 0, explanation: 'An inverse swaps inputs and outputs, so the domain of $f^{-1}$ is the range of f: [−2, 8].', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'The sequence defined by $a_{n}$ = $(-1)^{n}$ is:', options: ['Alternating between −1 and 1', 'Increasing', 'Constant', 'Geometric with r = 2'], correctAnswer: 0, explanation: '$a_{1}$ = −1, $a_{2}$ = 1, $a_{3}$ = −1, ... It alternates between −1 and 1.', domain: 'exponential-logarithmic', topicSlug: 'sequences-series-precalc' },
  { question: 'If f(x) = 4x − 7, what is $f^{-1}(f(3))$?', options: ['3', '5', '12', '−7'], correctAnswer: 0, explanation: '$f^{-1}(f(x))$ = x for all x in the domain. So $f^{-1}(f(3))$ = 3.', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'Let h(x) = $\\sqrt{3x - 5}$. If h(x) = f(g(x)) and g(x) = 3x − 5, what is f(x)?', options: ['3x − 5', '$\\sqrt{3x}$ − 5', '$\\sqrt{x - 5}$', '$\\sqrt{x}$'], correctAnswer: 3, explanation: 'The inner function g produces 3x − 5, and the outer function takes its square root, so f(x) = $\\sqrt{x}$. Check: f(g(x)) = $\\sqrt{3x - 5}$.', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'If f(x) = $(x - 2)^{3}$ + 5, then $f^{-1}(x)$ = ?', options: ['∛(x − 5) + 2', '$(x - 5)^{3}$ + 2', '∛(x − 2) + 5', '$(x + 2)^{3}$ − 5'], correctAnswer: 0, explanation: 'y = $(x-2)^{3}$ + 5 → y − 5 = $(x-2)^{3}$ → x − 2 = ∛(y−5) → x = ∛(y−5) + 2.', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'A geometric sequence has $g_{2}$ = 12 and $g_{5}$ = 96. What is the common ratio?', options: ['8', '28', '4', '2'], correctAnswer: 3, explanation: '$g_{5}$ = $g_{2}r^{3}$, so $r^{3}$ = 96/12 = 8 and r = 2. (8 is $r^{3}$; 28 = (96 − 12)/3 treats the sequence as arithmetic.)', domain: 'exponential-logarithmic', topicSlug: 'sequences-series-precalc' },
  { question: 'If f(g(x)) = 4x + 7 and g(x) = 2x + 1, then f(x) = ?', options: ['2x + 5', '4x + 7', '2x + 3', '4x + 6'], correctAnswer: 0, explanation: 'f(g(x)) = f(2x+1) = 4x+7. Let u = 2x+1, so x = (u−1)/2. f(u) = 4(u−1)/2 + 7 = 2u − 2 + 7 = 2u + 5.', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'If f(x) = 2x − 1 and g(x) = $x^{2}$, for what value(s) of x is f(g(x)) = 17?', options: ['x = −3 or x = 3', 'x = 3 only', 'x = 9 only', 'x = −9 or x = 9'], correctAnswer: 0, explanation: 'f(g(x)) = $2x^{2}$ − 1 = 17, so $x^{2}$ = 9 and x = −3 or x = 3. Both work because squaring removes the sign.', domain: 'exponential-logarithmic', topicSlug: 'function-composition-inverses-precalc' },
]

/* ---------- helpers ---------- */

function seededShuffle<T>(arr: T[], rng: () => number): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/* ---------- generator ---------- */

/** The pool as served: off-exam stems dropped (none should exist; see the guard test). */
export const apPrecalcDiagnosticPool: readonly PoolQuestion[] = questionPool.filter(q => !isApPrecalcOffExam(q.question))
/** The raw authored pool (guard test: it must already contain nothing the filter would drop). */
export const apPrecalcDiagnosticQuestionPool: readonly PoolQuestion[] = questionPool

export function generateAPPrecalculusDiagnosticTest(form: DiagnosticFormNumber): APPrecalculusTestData {
  const rng = mulberry32(form * 7919)
  const selected: PoolQuestion[] = []
  for (const domain of AP_PRECALCULUS_DOMAINS) {
    // Same shape as the Calc AB/BC v1 generators: filter the domain, drop
    // anything the exam does not test, seeded shuffle, take the unit's quota.
    const domainQs = apPrecalcDiagnosticPool.filter(q => q.domain === domain.id)
    const shuffled = seededShuffle(domainQs, rng)
    selected.push(...shuffled.slice(0, domain.questionTarget))
  }
  const questions: APPrecalculusQuestion[] = seededShuffle(selected, rng).map(q => ({
    question: q.question, options: q.options, correctAnswer: q.correctAnswer, explanation: q.explanation, domain: q.domain,
    // Served items carry the slug a recommendation would use, so stored attempts never point at a missing row.
    topicSlug: apPrecalcRecommendationSlug(q.topicSlug),
  }))
  return { form, questions, domains: AP_PRECALCULUS_DOMAINS, totalQuestions: questions.length, timeLimitMinutes: 40 }
}

/* ---------- scorer ---------- */

export function scoreAPPrecalculusDiagnostic(form: DiagnosticFormNumber, questions: APPrecalculusQuestion[], answers: Record<number, number>): APPrecalculusResults {
  const domainMap = new Map<string, { correct: number; total: number }>()
  AP_PRECALCULUS_DOMAINS.forEach(d => domainMap.set(d.id, { correct: 0, total: 0 }))
  questions.forEach((q, i) => { const entry = domainMap.get(q.domain)!; entry.total++; if (answers[i] === q.correctAnswer) entry.correct++ })
  let totalCorrect = 0, totalQuestions = 0
  const domainResults: APPrecalculusDomainResult[] = AP_PRECALCULUS_DOMAINS.map(d => {
    const entry = domainMap.get(d.id)!; totalCorrect += entry.correct; totalQuestions += entry.total
    const pct = entry.total > 0 ? Math.round((entry.correct / entry.total) * 100) : 0
    return { domainId: d.id, domainName: d.name, correct: entry.correct, total: entry.total, percentage: pct, level: pct >= 75 ? 'strong' : pct >= 50 ? 'moderate' : 'weak' }
  })
  const pct = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0
  const estimatedAPScore = estimateApScore(pct)
  const weakAreas = domainResults.filter(d => d.level === 'weak').map(d => d.domainName)
  const moderateAreas = domainResults.filter(d => d.level === 'moderate').map(d => d.domainName)
  const strengths = domainResults.filter(d => d.level === 'strong').map(d => d.domainName)
  // Cap at 5 recommendations and prioritize: weak before moderate, then by exam
  // weight desc. Within a unit, recommend the topics the student actually
  // MISSED (most misses first, as the Calc AB/BC scorers do); only a weak unit
  // with no tagged miss falls back to the unit's first topics.
  const recommendedTopics: APPrecalculusRecommendedTopic[] = []
  const MAX_RECOMMENDED = 5
  const domainWeight = (id: string) => AP_PRECALCULUS_DOMAINS.find(dom => dom.id === id)?.questionTarget ?? 0
  const sortedNeed = domainResults
    .filter(d => d.level === 'weak' || d.level === 'moderate')
    .sort((a, b) => {
      if (a.level !== b.level) return a.level === 'weak' ? -1 : 1
      return domainWeight(b.domainId) - domainWeight(a.domainId)
    })
  for (const d of sortedNeed) {
    if (recommendedTopics.length >= MAX_RECOMMENDED) break
    const domain = AP_PRECALCULUS_DOMAINS.find(dom => dom.id === d.domainId)!
    const missed = new Map<string, number>()
    questions.forEach((q, i) => {
      if (q.domain !== d.domainId || answers[i] === q.correctAnswer) return
      const slug = apPrecalcRecommendationSlug(q.topicSlug)
      missed.set(slug, (missed.get(slug) ?? 0) + 1)
    })
    const perDomain = d.level === 'weak' ? 3 : 2
    const slugs = missed.size > 0
      ? [...missed.entries()].sort((a, b) => b[1] - a[1]).map(([slug]) => slug).slice(0, perDomain)
      : domain.topicSlugs.map(apPrecalcRecommendationSlug).slice(0, perDomain)
    for (const slug of slugs) {
      if (recommendedTopics.length >= MAX_RECOMMENDED) break
      if (recommendedTopics.some(r => r.slug === slug)) continue
      recommendedTopics.push({ slug, name: topicDisplayName(slug), domainId: d.domainId, priority: d.level === 'weak' ? 'high' : 'medium' })
    }
  }
  return { form, totalCorrect, totalQuestions, percentage: pct, estimatedAPScore, domains: domainResults, weakAreas, moderateAreas, strengths, recommendedTopics }
}

/* ---------- form picker ---------- */

export function pickNextForm(previousForms: (number | string)[]): DiagnosticFormNumber {
  // Normalize legacy 'A'/'B' string forms to numbers
  const normalized = previousForms.map(f => {
    if (f === 'A') return 1
    if (f === 'B') return 2
    return typeof f === 'number' ? f : parseInt(String(f), 10) || 1
  })
  if (normalized.length === 0) return 1
  const taken = new Set(normalized)
  // Pick the first untaken form
  for (let i = 1; i <= TOTAL_FORMS; i++) {
    if (!taken.has(i)) return i as DiagnosticFormNumber
  }
  // All 10 taken — cycle: next after most recent
  const last = normalized[0] ?? 0
  return ((last % TOTAL_FORMS) + 1) as DiagnosticFormNumber
}
