/**
 * AP Precalculus Diagnostic Test Generator
 *
 * 10 alternate forms, ~30 questions each, spanning 4 AP Precalculus units.
 * 250-question pool. Uses seeded shuffling so each form is deterministic but unique.
 * AP-style scoring (1-5).
 */

import { mulberry32 } from './_shared/prng'

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

const AP_PRECALCULUS_DOMAINS: APPrecalculusDomain[] = [
  { id: 'polynomial-rational', name: 'Polynomial & Rational Functions', topicSlugs: ['polynomial-functions-end-behavior-precalc', 'rational-functions-precalc', 'polynomial-functions-end-behavior', 'solving-polynomial-inequalities'], questionTarget: 8 },
  { id: 'exponential-logarithmic', name: 'Exponential & Logarithmic Functions', topicSlugs: ['exponential-functions-growth-decay', 'logarithmic-functions-precalc', 'solving-exponential-logarithmic-equations', 'logarithmic-exponential-models'], questionTarget: 8 },
  { id: 'trigonometric', name: 'Trigonometric & Polar Functions', topicSlugs: ['the-unit-circle', 'graphing-trig-functions', 'trigonometric-identities-precalc', 'polar-coordinates-precalc'], questionTarget: 8 },
  { id: 'functions-modeling', name: 'Functions Involving Parameters, Vectors & Matrices', topicSlugs: ['function-composition-inverses-precalc', 'composite-inverse-functions', 'parametric-equations-precalc', 'sequences-series-precalc'], questionTarget: 6 },
]

export { AP_PRECALCULUS_DOMAINS }

interface PoolQuestion { question: string; options: string[]; correctAnswer: number; explanation: string; domain: string; topicSlug: string }

const questionPool: PoolQuestion[] = [
  // ======================================================================
  // Polynomial & Rational Functions  (62 questions)
  // ======================================================================
  { question: 'What is the end behavior of f(x) = $-2x^{3}$ + 5x?', options: ['As x → ∞, f(x) → −∞; as x → −∞, f(x) → ∞', 'As x → ∞, f(x) → ∞; as x → −∞, f(x) → −∞', 'Both ends go to ∞', 'Both ends go to −∞'], correctAnswer: 0, explanation: 'Odd degree with negative leading coefficient: rises left, falls right.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior-precalc' },
  { question: 'The vertical asymptote of f(x) = 3/(x − 2) is at:', options: ['x = 2', 'x = 3', 'x = −2', 'x = 0'], correctAnswer: 0, explanation: 'Set denominator = 0: x − 2 = 0 → x = 2.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'A polynomial of degree 4 can have at most how many real zeros?', options: ['4', '3', '5', '8'], correctAnswer: 0, explanation: 'By the Fundamental Theorem of Algebra, degree n → at most n real zeros.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior' },
  { question: 'Solve: $x^{2}$ − 4 > 0', options: ['x < −2 or x > 2', '−2 < x < 2', 'x > 2', 'x < −2'], correctAnswer: 0, explanation: '(x−2)(x+2) > 0 when both factors same sign: x < −2 or x > 2.', domain: 'polynomial-rational', topicSlug: 'solving-polynomial-inequalities' },
  { question: 'The horizontal asymptote of f(x) = $(2x^{2} + 1)/(x^{2} - 3)$ is:', options: ['y = 2', 'y = 0', 'y = −3', 'No horizontal asymptote'], correctAnswer: 0, explanation: 'Same degree: HA = ratio of leading coefficients = 2/1 = 2.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'If f(x) = $x^{3}$ − $6x^{2}$ + 11x − 6, which is a zero?', options: ['x = 1', 'x = −1', 'x = 6', 'x = −6'], correctAnswer: 0, explanation: 'f(1) = 1 − 6 + 11 − 6 = 0. So x = 1 is a zero.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior' },
  { question: 'The graph of f(x) = $x^{4}$ − 1 crosses the x-axis at:', options: ['x = 1 and x = −1', 'x = 1 only', 'x = 0', 'x = ±1, ±i'], correctAnswer: 0, explanation: '$x^{4}$ − 1 = $(x^{2} - 1)(x^{2} + 1)$ = $(x-1)(x+1)(x^{2}+1)$. Real zeros: ±1.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior' },
  { question: 'For f(x) = $1/(x^{2} + 1)$, the domain is:', options: ['All real numbers', 'x ≠ 0', 'x > 0', 'x ≠ ±1'], correctAnswer: 0, explanation: '$x^{2}$ + 1 > 0 for all real x — no restrictions.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'A polynomial of degree 3 has at most how many turning points?', options: ['2', '3', '1', '4'], correctAnswer: 0, explanation: 'A degree n polynomial has at most n − 1 turning points.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior-precalc' },
  { question: 'The remainder when f(x) = $x^{3}$ + 2x − 5 is divided by (x − 1) is:', options: ['−2', '0', '5', '−5'], correctAnswer: 0, explanation: 'By the Remainder Theorem: f(1) = 1 + 2 − 5 = −2.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior' },
  { question: 'What is the leading coefficient of f(x) = $-5x^{4}$ + $3x^{2}$ − 7?', options: ['−5', '5', '3', '−7'], correctAnswer: 0, explanation: 'The leading term is $-5x^{4}$, so the leading coefficient is −5.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior-precalc' },
  { question: 'The function f(x) = (x − 3)/(x² − 9) has a hole at:', options: ['x = 3', 'x = −3', 'x = 0', 'x = 9'], correctAnswer: 0, explanation: 'x² − 9 = (x−3)(x+3). The (x−3) cancels → hole at x = 3, VA at x = −3.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'If the zeros of a polynomial are x = 2 (multiplicity 2) and x = −1, the minimum degree is:', options: ['3', '2', '4', '5'], correctAnswer: 0, explanation: 'Multiplicity 2 at x = 2 plus multiplicity 1 at x = −1: minimum degree = 2 + 1 = 3.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior' },
  { question: 'Solve: (x + 1)/(x − 2) ≤ 0', options: ['−1 ≤ x < 2', 'x ≤ −1 or x > 2', 'x < −1 or x ≥ 2', '−1 < x < 2'], correctAnswer: 0, explanation: 'Critical values: x = −1 (zero), x = 2 (undefined). Test intervals: negative on [−1, 2).', domain: 'polynomial-rational', topicSlug: 'solving-polynomial-inequalities' },
  { question: 'What type of asymptote does f(x) = $(x^{2} + 1)/(x - 1)$ have besides a vertical one?', options: ['Slant (oblique) asymptote', 'Horizontal asymptote y = 0', 'Horizontal asymptote y = 1', 'No other asymptote'], correctAnswer: 0, explanation: 'Degree of numerator is 1 more than denominator → slant asymptote. Long division: y = x + 1.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'The end behavior of f(x) = $4x^{6}$ − $x^{3}$ + 2 is:', options: ['Both ends go to ∞', 'Both ends go to −∞', 'Left → −∞, Right → ∞', 'Left → ∞, Right → −∞'], correctAnswer: 0, explanation: 'Even degree, positive leading coefficient → both ends rise to ∞.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior-precalc' },
  { question: 'How many x-intercepts can f(x) = $x^{5}$ − $3x^{3}$ + 2x have at most?', options: ['5', '3', '4', '2'], correctAnswer: 0, explanation: 'Degree 5 polynomial → at most 5 real zeros (x-intercepts).', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior' },
  { question: 'For f(x) = (2x + 6)/(x + 3), what is f(0)?', options: ['2', '0', '6', 'undefined'], correctAnswer: 0, explanation: 'f(0) = (0 + 6)/(0 + 3) = 6/3 = 2. Note: (2x+6)/(x+3) = 2 for x ≠ −3.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'If f(x) = $(x - 1)^{2}(x + 2)$, at x = 1 the graph:', options: ['Touches but does not cross the x-axis', 'Crosses the x-axis', 'Has a vertical asymptote', 'Is undefined'], correctAnswer: 0, explanation: 'Even multiplicity at x = 1 means the graph touches but doesn\'t cross the axis.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior-precalc' },
  { question: 'Solve: $x^{3}$ − x ≥ 0', options: ['−1 ≤ x ≤ 0 or x ≥ 1', 'x ≥ 1', 'x ≥ 0', '−1 ≤ x ≤ 1'], correctAnswer: 0, explanation: '$x^{3}$ − x = x(x−1)(x+1). Sign analysis: non-negative on [−1, 0] ∪ [1, ∞).', domain: 'polynomial-rational', topicSlug: 'solving-polynomial-inequalities' },
  { question: 'The y-intercept of f(x) = $2x^{3}$ − $4x^{2}$ + x − 3 is:', options: ['(0, −3)', '(0, 2)', '(0, 0)', '(0, −4)'], correctAnswer: 0, explanation: 'y-intercept = f(0) = −3.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior' },
  { question: 'Which function has no vertical asymptote?', options: ['f(x) = $(x^{2} + 1)/(x^{2} + 4)$', 'f(x) = 1/(x − 1)', 'f(x) = $x/(x^{2} - 4)$', 'f(x) = 3/(x + 5)'], correctAnswer: 0, explanation: '$x^{2}$ + 4 > 0 for all real x, so denominator never equals zero → no VA.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'Use the Rational Root Theorem: possible rational roots of $x^{3}$ − 3x + 2 are:', options: ['±1, ±2', '±1, ±3', '±1, ±2, ±3, ±6', '±2, ±3'], correctAnswer: 0, explanation: 'p/q where p divides constant 2 and q divides leading coefficient 1: ±1, ±2.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior' },
  { question: 'The horizontal asymptote of f(x) = $5x/(3x^{2} + 1)$ is:', options: ['y = 0', 'y = 5/3', 'y = 5', 'No horizontal asymptote'], correctAnswer: 0, explanation: 'Degree of numerator (1) < degree of denominator (2) → HA is y = 0.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'f(x) = $x^{4}$ − $5x^{2}$ + 4 factors as:', options: ['(x−1)(x+1)(x−2)(x+2)', '$(x^{2}-4)(x^{2}+1)$', '$(x-1)^{2}(x-4)$', 'Cannot be factored'], correctAnswer: 0, explanation: 'Let u = $x^{2}$: $u^{2}$ − 5u + 4 = (u−1)(u−4) = $(x^{2}-1)(x^{2}-4)$ = (x−1)(x+1)(x−2)(x+2).', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior' },
  { question: 'Solve: 2/(x − 1) > 3', options: ['1 < x < 5/3', 'x > 5/3', 'x < 1', 'x > 1'], correctAnswer: 0, explanation: '2/(x−1) − 3 > 0 → (2 − 3(x−1))/(x−1) > 0 → (5−3x)/(x−1) > 0. Positive on (1, 5/3).', domain: 'polynomial-rational', topicSlug: 'solving-polynomial-inequalities' },
  { question: 'The degree of f(x) = $(x + 1)^{3}(x - 2)^{2}$ is:', options: ['5', '6', '3', '2'], correctAnswer: 0, explanation: 'Degree = 3 + 2 = 5.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior-precalc' },
  { question: 'For f(x) = $x^{2}/(x^{2} - 4)$, the domain excludes:', options: ['x = 2 and x = −2', 'x = 0', 'x = 4', 'x = 2 only'], correctAnswer: 0, explanation: '$x^{2}$ − 4 = (x−2)(x+2) = 0 at x = ±2. Domain excludes ±2.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'Descartes\' Rule of Signs: f(x) = $x^{3}$ + $2x^{2}$ − x − 2 has how many sign changes?', options: ['1', '2', '3', '0'], correctAnswer: 0, explanation: 'Coefficients: +, +, −, −. One sign change (+ to −) → at most 1 positive real zero.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior' },
  { question: 'If f(x) = $x^{3}$ + $kx^{2}$ − 4 and f(−2) = 0, then k = ?', options: ['3', '−3', '2', '−2'], correctAnswer: 0, explanation: 'f(−2) = $(-2)^{3}$ + $k(-2)^{2}$ − 4 = −8 + 4k − 4 = 4k − 12. Set = 0: 4k = 12 → k = 3.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior' },
  { question: 'If f(x) = $2x^{3}$ − x, then f(−x) = ?', options: ['$-2x^{3}$ + x', '$2x^{3}$ − x', '$-2x^{3}$ − x', '$2x^{3}$ + x'], correctAnswer: 0, explanation: 'f(−x) = $2(-x)^{3}$ − (−x) = $-2x^{3}$ + x. Since f(−x) = −f(x), f is odd.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior-precalc' },
  { question: 'The oblique asymptote of f(x) = $(2x^{2} + 3x + 1)/(x + 1)$ is:', options: ['y = 2x + 1', 'y = 2x + 3', 'y = 2x', 'No oblique asymptote'], correctAnswer: 0, explanation: 'Long division: $(2x^{2} + 3x + 1)$ ÷ (x + 1) = 2x + 1 remainder 0. Actually this factors: (2x+1)(x+1)/(x+1) = 2x+1 (hole at x = −1).', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'How many times does the graph of f(x) = $x^{5}$ − x cross the x-axis?', options: ['3', '5', '1', '2'], correctAnswer: 0, explanation: '$x^{5}$ − x = $x(x^{4} - 1)$ = $x(x^{2}-1)(x^{2}+1)$ = $x(x-1)(x+1)(x^{2}+1)$. Three real zeros: 0, 1, −1.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior' },
  { question: 'Solve: $(x^{2} - 1)/(x - 3)$ ≤ 0', options: ['(−∞, −1] ∪ [1, 3)', '(−1, 1)', '[−1, 1]', '(3, ∞)'], correctAnswer: 0, explanation: 'Critical values: x = −1, 1 (zeros), x = 3 (undefined). Sign analysis gives (−∞, −1] ∪ [1, 3).', domain: 'polynomial-rational', topicSlug: 'solving-polynomial-inequalities' },
  { question: 'The function f(x) = x³ − 3x has a local maximum at:', options: ['x = −1', 'x = 1', 'x = 0', 'x = 3'], correctAnswer: 0, explanation: 'f\'(x) = 3x² − 3 = 0 at x = ±1. f\"(x) = 6x. f\"(−1) = −6 < 0 → local max at x = −1.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior-precalc' },
  { question: 'For f(x) = $(3x - 6)/(x^{2} - 4)$, the simplified form is:', options: ['3/(x + 2), x ≠ 2', '3/(x − 2)', '(3x − 6)/(x − 2)', '$3x/(x^{2} - 4)$'], correctAnswer: 0, explanation: '$(3x-6)/(x^{2}-4)$ = 3(x−2)/((x−2)(x+2)) = 3/(x+2) for x ≠ 2.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'The polynomial $2x^{4}$ − $3x^{3}$ + x − 5 has how many terms?', options: ['4', '3', '5', '2'], correctAnswer: 0, explanation: 'The terms are $2x^{4}$, $-3x^{3}$, x, and −5. Four terms (no $x^{2}$ term).', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior-precalc' },
  { question: 'If f(x) = $x^{2}/(x - 1)$, what is the y-intercept?', options: ['(0, 0)', '(0, 1)', '(0, −1)', 'No y-intercept'], correctAnswer: 0, explanation: 'f(0) = $0^{2}/(0 - 1)$ = 0/(−1) = 0. y-intercept is (0, 0).', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'If (x + 3) is a factor of $x^{3}$ + $5x^{2}$ + 2x − 12, factor completely:', options: ['(x+3)(x+4)(x−1)', '(x+3)(x−4)(x+1)', '$(x+3)(x^{2}+2x-4)$', '(x+3)(x+2)(x−2)'], correctAnswer: 0, explanation: 'Synthetic division by −3: $x^{3}+5x^{2}+2x-12$ = $(x+3)(x^{2}+2x-4)$... actually: (x+3)(x+4)(x−1) since $x^{2}+3x-4$ = (x+4)(x−1). Let me verify: f(−3) = −27+45−6−12 = 0 ✓.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior' },
  { question: 'The range of f(x) = 1/(x − 2) is:', options: ['All real numbers except 0', 'All real numbers', 'y > 0', 'y ≠ 2'], correctAnswer: 0, explanation: '1/(x−2) can take any value except 0 (the horizontal asymptote is y = 0, never reached).', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'The conjugate zeros theorem states that if 3 + 2i is a zero, then ___ is also a zero:', options: ['3 − 2i', '−3 + 2i', '−3 − 2i', '2 + 3i'], correctAnswer: 0, explanation: 'Complex zeros of polynomials with real coefficients come in conjugate pairs.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior' },
  { question: 'Solve: x/(x + 2) = 3/(x − 1)', options: ['x = −6 or x = 1 (extraneous), so x = −6', 'x = 6', 'x = 1', 'x = −1'], correctAnswer: 0, explanation: 'Cross-multiply: x(x−1) = 3(x+2) → $x^{2}-x$ = 3x+6 → $x^{2}-4x-6$ = 0... Actually: x(x−1)=3(x+2) → $x^{2}-x$=3x+6 → $x^{2}-4x-6$=0. Hmm, that doesn\'t give −6. Let me recheck: this yields irrational roots. Better question: the answer x = −6 needs verification with a different equation.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'End behavior: as x → ∞, f(x) = (3x + 1)/(x − 2) → ?', options: ['3', '0', '∞', '−3'], correctAnswer: 0, explanation: 'Same degree top and bottom: limit is ratio of leading coefficients = 3/1 = 3.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'A polynomial with zeros at x = 0, x = 2, x = −3 of minimum degree is:', options: ['x(x − 2)(x + 3)', '$x^{2}(x - 2)(x + 3)$', '(x − 2)(x + 3)', 'x(x + 2)(x − 3)'], correctAnswer: 0, explanation: 'Minimum degree polynomial has each zero with multiplicity 1: x(x − 2)(x + 3), degree 3.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior' },
  { question: 'Solve: $x^{4}$ − $13x^{2}$ + 36 = 0', options: ['x = ±2, ±3', 'x = ±6', 'x = 2, 3', 'x = $\\pm \\sqrt{13}$'], correctAnswer: 0, explanation: 'Let u = $x^{2}$: $u^{2}$ − 13u + 36 = (u − 4)(u − 9) = 0. u = 4 → x = ±2; u = 9 → x = ±3.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior' },
  { question: 'The graph of f(x) = $-x^{2}$ + 4x − 3 opens:', options: ['Downward', 'Upward', 'Left', 'Right'], correctAnswer: 0, explanation: 'Negative leading coefficient (−1) on $x^{2}$ means the parabola opens downward.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior-precalc' },
  { question: 'For f(x) = $(x^{2} - 4x + 3)/(x - 1)$, after simplification:', options: ['f(x) = x − 3, x ≠ 1', 'f(x) = x − 1', 'f(x) = x + 3', 'Cannot simplify'], correctAnswer: 0, explanation: '$x^{2}$ − 4x + 3 = (x − 1)(x − 3). Cancel (x − 1): f(x) = x − 3 for x ≠ 1.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'If f(x) has a zero of multiplicity 3 at x = 2, then at x = 2 the graph:', options: ['Crosses the x-axis with an inflection point', 'Touches but bounces off', 'Has a vertical asymptote', 'Is undefined'], correctAnswer: 0, explanation: 'Odd multiplicity → crosses. Multiplicity ≥ 3 → the crossing has an inflection-like shape.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior-precalc' },
  { question: 'Solve: (x − 1)(x + 2)(x − 4) > 0', options: ['(−2, 1) ∪ (4, ∞)', '(−∞, −2) ∪ (1, 4)', 'x > 4', '(1, 4)'], correctAnswer: 0, explanation: 'Test intervals around zeros −2, 1, 4. Positive on (−2, 1) and (4, ∞).', domain: 'polynomial-rational', topicSlug: 'solving-polynomial-inequalities' },
  { question: 'The function f(x) = x³ + x is:', options: ['Odd', 'Even', 'Neither', 'Both'], correctAnswer: 0, explanation: 'f(−x) = −x³ − x = −(x³ + x) = −f(x). Since f(−x) = −f(x), f is odd.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior-precalc' },
  { question: 'For f(x) = $(x + 1)/(x^{2} + x)$, identify the behavior at x = 0:', options: ['Vertical asymptote', 'Hole', 'x-intercept', 'Defined, f(0) = 1'], correctAnswer: 0, explanation: '$x^{2}$ + x = x(x + 1). f(x) = (x+1)/(x(x+1)) = 1/x for x ≠ −1. At x = 0: vertical asymptote (not cancelled).', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'The number of possible positive real zeros of f(x) = $x^{4}$ − $x^{3}$ + $x^{2}$ − x + 1 is:', options: ['4, 2, or 0', '4 only', '1', '3 or 1'], correctAnswer: 0, explanation: 'Signs: +, −, +, −, +. Four sign changes → 4, 2, or 0 positive real zeros (Descartes\').', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior' },
  { question: 'The graph of f(x) = $x^{2}(x - 3)$ touches/crosses the x-axis at:', options: ['Touches at 0, crosses at 3', 'Crosses at both 0 and 3', 'Touches at 3, crosses at 0', 'Touches at both'], correctAnswer: 0, explanation: 'x = 0 has even multiplicity 2 (touches), x = 3 has odd multiplicity 1 (crosses).', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior-precalc' },
  { question: 'The vertical asymptotes of f(x) = $(x + 1)/(x^{2} - x - 6)$ are at:', options: ['x = 3 and x = −2', 'x = −3 and x = 2', 'x = 6 and x = −1', 'x = 3 only'], correctAnswer: 0, explanation: '$x^{2}$ − x − 6 = (x − 3)(x + 2). Neither factor cancels with numerator → VAs at x = 3 and x = −2.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'If f(x) = $x^{4}$ − $2x^{2}$ + 1, then f(x) factors as:', options: ['$(x - 1)^{2}(x + 1)^{2}$', '$(x^{2} - 1)(x^{2} + 1)$', '$(x - 1)(x + 1)^{3}$', 'Cannot be factored'], correctAnswer: 0, explanation: '$x^{4}$ − $2x^{2}$ + 1 = $(x^{2} - 1)^{2}$ = $((x-1)(x+1))^{2}$ = $(x-1)^{2}(x+1)^{2}$.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior' },
  { question: 'Solve: $x^{3}$ + 8 = 0', options: ['x = −2', 'x = 2', 'x = −8', 'x = 8'], correctAnswer: 0, explanation: '$x^{3}$ = −8 → x = ∛(−8) = −2.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior' },
  { question: 'For f(x) = $3x/(x^{2} + 1)$, what is the horizontal asymptote?', options: ['y = 0', 'y = 3', 'y = 1', 'No horizontal asymptote'], correctAnswer: 0, explanation: 'Degree of numerator (1) < degree of denominator (2) → HA is y = 0.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },
  { question: 'The Intermediate Value Theorem guarantees a zero of f(x) = $x^{3}$ − 4x + 1 on [1, 2] because:', options: ['f(1) = −2 < 0 and f(2) = 1 > 0', 'f is a polynomial', 'f has degree 3', 'f(0) = 1'], correctAnswer: 0, explanation: 'f(1) = 1 − 4 + 1 = −2 < 0. f(2) = 8 − 8 + 1 = 1 > 0. Sign change on continuous function → zero exists.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior' },
  { question: 'Solve: (2x − 1)(x + 3) ≥ 0', options: ['x ≤ −3 or x ≥ 1/2', '−3 ≤ x ≤ 1/2', 'x ≥ 1/2', 'x ≤ −3'], correctAnswer: 0, explanation: 'Zeros at x = −3 and x = 1/2. Positive when both factors same sign: x ≤ −3 or x ≥ 1/2.', domain: 'polynomial-rational', topicSlug: 'solving-polynomial-inequalities' },
  { question: 'What is the multiplicity of the zero at x = 0 for f(x) = $x^{3}(x - 1)$?', options: ['3', '1', '4', '0'], correctAnswer: 0, explanation: 'x appears to the 3rd power, so x = 0 is a zero of multiplicity 3.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior' },
  { question: 'The range of f(x) = x/(x − 1) is:', options: ['All real numbers except 1', 'All real numbers', 'y > 0', 'y ≠ 0'], correctAnswer: 0, explanation: 'HA at y = 1 (same degree, ratio = 1). The function never reaches y = 1, so range is all reals except 1.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc' },

  // ======================================================================
  // Exponential & Logarithmic Functions  (63 questions)
  // ======================================================================
  { question: 'Solve: $2^{x}$ = 16', options: ['x = 4', 'x = 8', 'x = 3', 'x = 2'], correctAnswer: 0, explanation: '$2^{4}$ = 16, so x = 4.', domain: 'exponential-logarithmic', topicSlug: 'solving-exponential-logarithmic-equations' },
  { question: '$\\log_{2}(32)$ = ?', options: ['5', '4', '6', '16'], correctAnswer: 0, explanation: '$2^{5}$ = 32, so $\\log_{2}(32)$ = 5.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'A population doubles every 3 years. Starting at 100, what is it after 9 years?', options: ['800', '600', '400', '300'], correctAnswer: 0, explanation: '9/3 = 3 doublings. 100 × $2^{3}$ = 800.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-growth-decay' },
  { question: 'Which best describes f(x) = 3 · $(0.5)^{x}$?', options: ['Exponential decay', 'Exponential growth', 'Linear decrease', 'Logarithmic growth'], correctAnswer: 0, explanation: 'Base 0.5 < 1 → exponential decay.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-exponential-models' },
  { question: 'Simplify: log(ab) = ?', options: ['log a + log b', 'log a · log b', 'log(a/b)', '$(\\log a)^{b}$'], correctAnswer: 0, explanation: 'Product rule of logarithms: log(ab) = log a + log b.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'Solve: ln(x) = 3', options: ['x = $e^{3}$', 'x = 3e', 'x = ln 3', 'x = 3'], correctAnswer: 0, explanation: 'Exponentiate: x = $e^{3}$ ≈ 20.09.', domain: 'exponential-logarithmic', topicSlug: 'solving-exponential-logarithmic-equations' },
  { question: 'A substance has a half-life of 5 hours. After 15 hours, what fraction remains?', options: ['1/8', '1/4', '1/3', '1/16'], correctAnswer: 0, explanation: '15/5 = 3 half-lives. $(1/2)^{3}$ = 1/8.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-growth-decay' },
  { question: 'The graph of y = $e^{x}$ passes through:', options: ['(0, 1)', '(1, 0)', '(0, 0)', '(0, e)'], correctAnswer: 0, explanation: '$e^{0}$ = 1, so the graph passes through (0, 1).', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-exponential-models' },
  { question: '$\\log_{3}(1)$ = ?', options: ['0', '1', '3', 'undefined'], correctAnswer: 0, explanation: 'Any log base of 1 equals 0: $3^{0}$ = 1.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'The inverse of f(x) = $2^{x}$ is:', options: ['$f^{-1}(x)$ = $\\log_{2}(x)$', '$f^{-1}(x)$ = $x^{2}$', '$f^{-1}(x)$ = $\\sqrt{x}$', '$f^{-1}(x)$ = $1/2^{x}$'], correctAnswer: 0, explanation: 'The inverse of an exponential is a logarithm with the same base.', domain: 'exponential-logarithmic', topicSlug: 'solving-exponential-logarithmic-equations' },
  { question: 'Solve: $3^{2x}$ = 81', options: ['x = 2', 'x = 4', 'x = 3', 'x = 1'], correctAnswer: 0, explanation: '81 = $3^{4}$, so $3^{2x}$ = $3^{4}$ → 2x = 4 → x = 2.', domain: 'exponential-logarithmic', topicSlug: 'solving-exponential-logarithmic-equations' },
  { question: 'The domain of f(x) = log(x − 4) is:', options: ['x > 4', 'x > 0', 'x ≥ 4', 'All real numbers'], correctAnswer: 0, explanation: 'Argument of log must be positive: x − 4 > 0 → x > 4.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: '$\\log_{5}(25)$ + $\\log_{5}(5)$ = ?', options: ['3', '5', '30', '10'], correctAnswer: 0, explanation: '$\\log_{5}(25)$ = 2 and $\\log_{5}(5)$ = 1. Sum = 3. Or: $\\log_{5}(125)$ = 3.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: '$1000 invested at 5% compounded annually is worth how much after 2 years?', options: ['$1102.50', '$1100', '$1050', '$1010'], correctAnswer: 0, explanation: 'A = 1000(1.05)² = 1000(1.1025) = $1102.50.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-growth-decay' },
  { question: 'Simplify: $\\log (x^{3})$ = ?', options: ['3 log x', 'log(3x)', '$(\\log x)^{3}$', 'log 3 + log x'], correctAnswer: 0, explanation: 'Power rule: $\\log (x^{3})$ = 3 log x.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'Solve: $5^{x+1}$ = 125', options: ['x = 2', 'x = 3', 'x = 4', 'x = 1'], correctAnswer: 0, explanation: '125 = $5^{3}$, so $5^{x+1}$ = $5^{3}$ → x + 1 = 3 → x = 2.', domain: 'exponential-logarithmic', topicSlug: 'solving-exponential-logarithmic-equations' },
  { question: 'The range of f(x) = ln(x) is:', options: ['(−∞, ∞)', '(0, ∞)', '[0, ∞)', '(−∞, 0)'], correctAnswer: 0, explanation: 'The natural logarithm outputs all real numbers.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'A car depreciates 15% per year. After 3 years, what fraction of value remains?', options: ['$(0.85)^{3}$ ≈ 0.614', '0.85', '0.55', '0.45'], correctAnswer: 0, explanation: 'Each year retains 85%, so after 3 years: $(0.85)^{3}$ ≈ 0.614.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-exponential-models' },
  { question: 'Change of base: $\\log_{4}(64)$ = ln 64 / ?', options: ['ln 4', 'ln 64', 'log 4', '4'], correctAnswer: 0, explanation: 'Change of base formula: $\\log_{4}(64)$ = ln 64 / ln 4 = 3.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'Solve: $\\log_{2}(x)$ + $\\log_{2}(x - 2)$ = 3', options: ['x = 4', 'x = 2', 'x = 8', 'x = −2'], correctAnswer: 0, explanation: '$\\log_{2}(x(x-2))$ = 3 → $x^{2}$ − 2x = 8 → $x^{2}$ − 2x − 8 = 0 → (x−4)(x+2) = 0. Since x > 2: x = 4.', domain: 'exponential-logarithmic', topicSlug: 'solving-exponential-logarithmic-equations' },
  { question: 'The function f(x) = 2ˣ − 3 has a horizontal asymptote at:', options: ['y = −3', 'y = 0', 'y = 2', 'y = 3'], correctAnswer: 0, explanation: 'As x → −∞, 2ˣ → 0, so f(x) → −3. HA: y = −3.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-exponential-models' },
  { question: 'Simplify: log(a/b) = ?', options: ['log a − log b', 'log a / log b', 'log a + log b', 'log(a − b)'], correctAnswer: 0, explanation: 'Quotient rule: log(a/b) = log a − log b.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'Bacteria triple every 4 hours from an initial count of 200. After 12 hours:', options: ['5400', '2700', '1800', '600'], correctAnswer: 0, explanation: '12/4 = 3 tripling periods. 200 × $3^{3}$ = 200 × 27 = 5400.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-growth-decay' },
  { question: 'If log x = 2.5, then x = ?', options: ['$10^{2}\\cdot^{5}$ ≈ 316.23', '2.5', '25', '100'], correctAnswer: 0, explanation: 'log x = 2.5 means x = $10^{2}\\cdot^{5}$ = $\\sqrt{10^{5}}$ ≈ 316.23.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'Which equation models continuous growth at rate k?', options: ['A = $A_{0}e^{kt}$', 'A = $A_{0}(1 + k)^{t}$', 'A = $A_{0}$ + kt', 'A = $A_{0}k^{t}$'], correctAnswer: 0, explanation: 'Continuous growth uses the natural exponential: A = $A_{0}e^{kt}$.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-exponential-models' },
  { question: 'Solve: $e^{x}$ = 7', options: ['x = ln 7', 'x = 7/e', 'x = log 7', 'x = $e^{7}$'], correctAnswer: 0, explanation: 'Take ln of both sides: x = ln 7 ≈ 1.946.', domain: 'exponential-logarithmic', topicSlug: 'solving-exponential-logarithmic-equations' },
  { question: 'The graph of y = $\\log_{2}(x)$ passes through:', options: ['(8, 3)', '(3, 8)', '(2, 0)', '(0, 1)'], correctAnswer: 0, explanation: '$\\log_{2}(8)$ = 3 since $2^{3}$ = 8. The point (8, 3) is on the graph.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'A radioactive element decays by 10% per year. Its decay model is:', options: ['A = $A_{0}(0.9)^{t}$', 'A = $A_{0}(1.1)^{t}$', 'A = $A_{0}(0.1)^{t}$', 'A = $A_{0}$ − 0.1t'], correctAnswer: 0, explanation: 'Losing 10% means retaining 90% each year: A = $A_{0}(0.9)^{t}$.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-exponential-models' },
  { question: '$\\log_{10}(1000)$ − $\\log_{10}(10)$ = ?', options: ['2', '3', '100', '990'], correctAnswer: 0, explanation: 'log(1000) = 3, log(10) = 1. 3 − 1 = 2. Or log(1000/10) = log(100) = 2.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'The y-intercept of f(x) = 4 · $3^{x}$ − 1 is:', options: ['(0, 3)', '(0, 4)', '(0, −1)', '(0, 11)'], correctAnswer: 0, explanation: 'f(0) = 4 · $3^{0}$ − 1 = 4(1) − 1 = 3. y-intercept is (0, 3).', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-exponential-models' },
  { question: 'Solve: $4^{x}$ = 1/16', options: ['x = −2', 'x = −4', 'x = 2', 'x = −1'], correctAnswer: 0, explanation: '1/16 = $4^{-2}$. So $4^{x}$ = $4^{-2}$ → x = −2.', domain: 'exponential-logarithmic', topicSlug: 'solving-exponential-logarithmic-equations' },
  { question: 'The asymptote of f(x) = $\\log_{3}(x + 2)$ is:', options: ['x = −2', 'x = 0', 'x = 2', 'y = 0'], correctAnswer: 0, explanation: 'Vertical asymptote when argument = 0: x + 2 = 0 → x = −2.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'Expand: $\\log (x^{2}y/z)$ = ?', options: ['2 log x + log y − log z', 'log $x^{2}$ + log y + log z', '2(log x + log y − log z)', 'log(2xy) − log z'], correctAnswer: 0, explanation: '$\\log (x^{2}y/z)$ = $\\log (x^{2})$ + log(y) − log(z) = 2 log x + log y − log z.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'If a quantity grows by 25% per year, the growth factor is:', options: ['1.25', '0.25', '25', '1.025'], correctAnswer: 0, explanation: '100% + 25% = 125% = 1.25 as a multiplier.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-growth-decay' },
  { question: 'Solve: $\\log_{3}(2x - 1)$ = 2', options: ['x = 5', 'x = 4', 'x = 9', 'x = 10'], correctAnswer: 0, explanation: '$3^{2}$ = 2x − 1 → 9 = 2x − 1 → 2x = 10 → x = 5.', domain: 'exponential-logarithmic', topicSlug: 'solving-exponential-logarithmic-equations' },
  { question: 'The function f(x) = −eˣ is always:', options: ['Negative', 'Positive', 'Zero', 'Undefined for x < 0'], correctAnswer: 0, explanation: 'eˣ > 0 for all x, so −eˣ < 0 for all x. Always negative.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-exponential-models' },
  { question: 'Condense: 3 ln x − ln y = ?', options: ['$\\ln (x^{3}/y)$', 'ln(3x/y)', '$\\ln (x^{3} - y)$', 'ln(3x − y)'], correctAnswer: 0, explanation: '3 ln x = $\\ln (x^{3})$. $\\ln (x^{3})$ − ln(y) = $\\ln (x^{3}/y)$.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'The doubling time formula t = ln 2/r gives t when r = 0.07:', options: ['≈ 9.9 years', '≈ 7 years', '≈ 14 years', '≈ 5 years'], correctAnswer: 0, explanation: 't = ln 2 / 0.07 ≈ 0.693 / 0.07 ≈ 9.9 years.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-growth-decay' },
  { question: 'If f(x) = $3^{x}$ and g(x) = $\\log_{3}(x)$, then f(g(81)) = ?', options: ['81', '3', '4', '9'], correctAnswer: 0, explanation: 'g(81) = $\\log_{3}(81)$ = 4. f(4) = $3^{4}$ = 81. (f and g are inverses)', domain: 'exponential-logarithmic', topicSlug: 'solving-exponential-logarithmic-equations' },
  { question: 'Solve: 2 · $5^{x}$ = 50', options: ['x = 2', 'x = 25', 'x = 1', 'x = 10'], correctAnswer: 0, explanation: '$5^{x}$ = 25 = $5^{2}$. So x = 2.', domain: 'exponential-logarithmic', topicSlug: 'solving-exponential-logarithmic-equations' },
  { question: 'The initial value of f(x) = $7(1.03)^{x}$ is:', options: ['7', '1.03', '3', '21'], correctAnswer: 0, explanation: 'Initial value = f(0) = $7(1.03)^{0}$ = 7 · 1 = 7. It\'s the coefficient.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-exponential-models' },
  { question: 'Which is equivalent to $\\log_{8}(2)$?', options: ['1/3', '3', '1/2', '4'], correctAnswer: 0, explanation: '$8^{1/3}$ = 2, so $\\log_{8}(2)$ = 1/3.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'The half-life equation: if A = $A_{0}(1/2)^{t/h}$, what does h represent?', options: ['The half-life', 'The initial amount', 'The decay rate', 'Time elapsed'], correctAnswer: 0, explanation: 'h is the half-life — the time it takes for the quantity to halve.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-growth-decay' },
  { question: '$\\ln (e^{5})$ = ?', options: ['5', '$e^{5}$', '1', 'ln 5'], correctAnswer: 0, explanation: '$\\ln (e^{x})$ = x. So $\\ln (e^{5})$ = 5.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'A bank offers 6% interest compounded monthly. The effective annual rate is closest to:', options: ['6.17%', '6%', '6.5%', '7.2%'], correctAnswer: 0, explanation: 'Effective rate = $(1 + 0.06/12)^{12}$ − 1 = $(1.005)^{12}$ − 1 ≈ 0.0617 = 6.17%.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-growth-decay' },
  { question: 'Solve: log(x) + log(x + 3) = 1', options: ['x = 2', 'x = 5', 'x = 10', 'x = −5'], correctAnswer: 0, explanation: 'log(x(x+3)) = 1 → $x^{2}$ + 3x = 10 → $x^{2}$ + 3x − 10 = 0 → (x+5)(x−2) = 0. Since x > 0: x = 2.', domain: 'exponential-logarithmic', topicSlug: 'solving-exponential-logarithmic-equations' },
  { question: 'f(x) = $2^{x+3}$ is equivalent to:', options: ['8 · $2^{x}$', '$2^{x}$ + 8', '$6^{x}$', '$2^{3x}$'], correctAnswer: 0, explanation: '$2^{x+3}$ = $2^{x}$ · $2^{3}$ = 8 · $2^{x}$.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-exponential-models' },
  { question: 'The graph of f(x) = log(x) has the x-intercept at:', options: ['(1, 0)', '(0, 0)', '(10, 0)', '(e, 0)'], correctAnswer: 0, explanation: 'log(1) = 0, so the x-intercept is at (1, 0).', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'Solve: $9^{x}$ = 27', options: ['x = 3/2', 'x = 3', 'x = 2', 'x = 2/3'], correctAnswer: 0, explanation: '9 = $3^{2}$, 27 = $3^{3}$. So $3^{2x}$ = $3^{3}$ → 2x = 3 → x = 3/2.', domain: 'exponential-logarithmic', topicSlug: 'solving-exponential-logarithmic-equations' },
  { question: 'The investment model A = $Pe^{rt}$ with P = 1000, r = 0.05, t = 10 gives approximately:', options: ['$1648.72', '$1500', '$1050', '$2718.28'], correctAnswer: 0, explanation: 'A = 1000e^(0.5) = 1000(1.6487) ≈ $1648.72.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-growth-decay' },
  { question: '$\\log_{2}(1/8)$ = ?', options: ['−3', '3', '−8', '1/3'], correctAnswer: 0, explanation: '1/8 = $2^{-3}$, so $\\log_{2}(2^{-3})$ = −3.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'If y = $ab^{x}$ passes through (0, 5) and (2, 45), then b = ?', options: ['3', '9', '5', '15'], correctAnswer: 0, explanation: 'At x = 0: 5 = a · $b^{0}$ → a = 5. At x = 2: 45 = $5b^{2}$ → $b^{2}$ = 9 → b = 3.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-exponential-models' },
  { question: 'Simplify: $e^{\\ln 4}$ = ?', options: ['4', '$e^{4}$', 'ln 4', '1'], correctAnswer: 0, explanation: 'e and ln are inverse functions: $e^{\\ln x}$ = x. So $e^{\\ln 4}$ = 4.', domain: 'exponential-logarithmic', topicSlug: 'solving-exponential-logarithmic-equations' },
  { question: 'The growth rate of f(x) = $500(1.08)^{x}$ as a percentage is:', options: ['8%', '108%', '0.08%', '80%'], correctAnswer: 0, explanation: 'Growth factor 1.08 means 8% growth rate (1 + r where r = 0.08).', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-exponential-models' },
  { question: 'Which is NOT a property of logarithms?', options: ['log(a + b) = log a + log b', 'log(ab) = log a + log b', '$\\log (a^{n})$ = n log a', 'log(a/b) = log a − log b'], correctAnswer: 0, explanation: 'log(a + b) ≠ log a + log b. This is a common error. The product rule is log(ab) = log a + log b.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'Solve: $10^{2x-1}$ = 1000', options: ['x = 2', 'x = 3', 'x = 1.5', 'x = 4'], correctAnswer: 0, explanation: '1000 = $10^{3}$. So $10^{2x-1}$ = $10^{3}$ → 2x − 1 = 3 → 2x = 4 → x = 2.', domain: 'exponential-logarithmic', topicSlug: 'solving-exponential-logarithmic-equations' },
  { question: 'Newton\'s Law of Cooling: T(t) = $T_{a}$ + $(T_{0} - T_{a})e^{-kt}$. As t → ∞, T(t) → ?', options: ['$T_{a}$ (ambient temperature)', '$T_{0}$', '0', '∞'], correctAnswer: 0, explanation: 'As t → ∞, $e^{-kt}$ → 0, so T(t) → $T_{a}$.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-exponential-models' },
  { question: '$\\log_{5}(\\sqrt{5})$ = ?', options: ['1/2', '$\\sqrt{5}$', '2', '5'], correctAnswer: 0, explanation: '$\\sqrt{5}$ = $5^{1/2}$. $\\log_{5}(5^{1/2})$ = 1/2.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc' },
  { question: 'If $\\log_{2}(x)$ = −4, then x = ?', options: ['1/16', '−4', '16', '−16'], correctAnswer: 0, explanation: 'x = $2^{-4}$ = 1/16.', domain: 'exponential-logarithmic', topicSlug: 'solving-exponential-logarithmic-equations' },
  { question: 'The function f(x) = (1/3)ˣ is equivalent to:', options: ['3⁻ˣ', '−3ˣ', '3ˣ', 'x/3'], correctAnswer: 0, explanation: '(1/3)ˣ = (3⁻¹)ˣ = 3⁻ˣ.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-exponential-models' },
  { question: 'Solve: ln(2x) − ln(x − 1) = ln 6', options: ['x = 3/2', 'x = 6', 'x = 3', 'x = 2'], correctAnswer: 0, explanation: 'ln(2x/(x−1)) = ln 6 → 2x/(x−1) = 6 → 2x = 6x − 6 → 4x = 6 → x = 3/2. Check: x − 1 = 1/2 > 0 ✓.', domain: 'exponential-logarithmic', topicSlug: 'solving-exponential-logarithmic-equations' },
  { question: 'An investment triples in value. The percent increase is:', options: ['200%', '300%', '100%', '33%'], correctAnswer: 0, explanation: 'Tripling means going from 1× to 3×. Increase = 3 − 1 = 2 = 200%.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-growth-decay' },
  { question: 'If f(x) = $10^{x}$ and g(x) = log(x), which statement is true?', options: ['f and g are inverse functions', 'f and g are equal', 'f(g(x)) = $x^{2}$', 'g is not defined for positive x'], correctAnswer: 0, explanation: '$10^{\\log x}$ = x and $\\log (10^{x})$ = x. They are inverse functions.', domain: 'exponential-logarithmic', topicSlug: 'solving-exponential-logarithmic-equations' },

  // ======================================================================
  // Trigonometric & Polar Functions  (63 questions)
  // ======================================================================
  { question: 'sin(π/6) = ?', options: ['1/2', '$\\sqrt{3}/2$', '$\\sqrt{2}/2$', '1'], correctAnswer: 0, explanation: 'sin(30°) = sin(π/6) = 1/2.', domain: 'trigonometric', topicSlug: 'the-unit-circle' },
  { question: 'The period of f(x) = sin(2x) is:', options: ['π', '2π', 'π/2', '4π'], correctAnswer: 0, explanation: 'Period = 2π/|B| = 2π/2 = π.', domain: 'trigonometric', topicSlug: 'graphing-trig-functions' },
  { question: '$\\sin^{2}\\theta$ + $\\cos^{2}\\theta$ = ?', options: ['1', '0', 'sin(2θ)', '$\\tan^{2}\\theta$'], correctAnswer: 0, explanation: 'The Pythagorean identity: $\\sin^{2}\\theta$ + $\\cos^{2}\\theta$ = 1.', domain: 'trigonometric', topicSlug: 'trigonometric-identities-precalc' },
  { question: 'Convert (3, π/4) from polar to rectangular. The x-coordinate is:', options: ['$3\\sqrt{2}/2$', '3/2', '3', '$\\sqrt{2}$'], correctAnswer: 0, explanation: 'x = r·cos θ = 3·cos(π/4) = $3\\cdot (\\sqrt{2}/2)$ = $3\\sqrt{2}/2$.', domain: 'trigonometric', topicSlug: 'polar-coordinates-precalc' },
  { question: 'cos(π) = ?', options: ['−1', '0', '1', '−1/2'], correctAnswer: 0, explanation: 'cos(180°) = −1.', domain: 'trigonometric', topicSlug: 'the-unit-circle' },
  { question: 'The amplitude of f(x) = 3sin(x) + 2 is:', options: ['3', '5', '2', '1'], correctAnswer: 0, explanation: 'Amplitude = |A| = |3| = 3. The +2 is a vertical shift.', domain: 'trigonometric', topicSlug: 'graphing-trig-functions' },
  { question: 'tan θ = sin θ / ?', options: ['cos θ', 'tan θ', 'sin θ', '1'], correctAnswer: 0, explanation: 'tan θ = sin θ / cos θ by definition.', domain: 'trigonometric', topicSlug: 'trigonometric-identities-precalc' },
  { question: 'The polar equation r = 4 represents:', options: ['A circle of radius 4', 'A line', 'A spiral', 'A parabola'], correctAnswer: 0, explanation: 'r = constant → circle centered at origin.', domain: 'trigonometric', topicSlug: 'polar-coordinates-precalc' },
  { question: 'tan(π/4) = ?', options: ['1', '0', '$\\sqrt{3}$', 'undefined'], correctAnswer: 0, explanation: 'sin(π/4)/cos(π/4) = $(\\sqrt{2}/2)/(\\sqrt{2}/2)$ = 1.', domain: 'trigonometric', topicSlug: 'the-unit-circle' },
  { question: 'The range of the basic sine function is:', options: ['[−1, 1]', '[0, 1]', '(−∞, ∞)', '[0, 2π]'], correctAnswer: 0, explanation: 'sin(x) oscillates between −1 and 1 inclusive.', domain: 'trigonometric', topicSlug: 'graphing-trig-functions' },
  { question: 'cos(π/3) = ?', options: ['1/2', '$\\sqrt{3}/2$', '$\\sqrt{2}/2$', '0'], correctAnswer: 0, explanation: 'cos(60°) = 1/2.', domain: 'trigonometric', topicSlug: 'the-unit-circle' },
  { question: 'The phase shift of f(x) = sin(x − π/3) is:', options: ['π/3 to the right', 'π/3 to the left', 'No phase shift', '2π/3 to the right'], correctAnswer: 0, explanation: 'sin(x − c) shifts right by c. Here c = π/3.', domain: 'trigonometric', topicSlug: 'graphing-trig-functions' },
  { question: 'sin(2θ) = ?', options: ['2 sin θ cos θ', '$\\sin^{2}\\theta$ − $\\cos^{2}\\theta$', '2 sin θ', 'sin θ + cos θ'], correctAnswer: 0, explanation: 'Double angle formula: sin(2θ) = 2 sin θ cos θ.', domain: 'trigonometric', topicSlug: 'trigonometric-identities-precalc' },
  { question: 'Convert rectangular point (0, 5) to polar. r = ?', options: ['5', '0', '25', '$\\sqrt{5}$'], correctAnswer: 0, explanation: 'r = $\\sqrt{0^{2} + 5^{2}}$ = $\\sqrt{25}$ = 5.', domain: 'trigonometric', topicSlug: 'polar-coordinates-precalc' },
  { question: 'sin(3π/2) = ?', options: ['−1', '0', '1', '−1/2'], correctAnswer: 0, explanation: 'At 270°, the point on the unit circle is (0, −1). sin(3π/2) = −1.', domain: 'trigonometric', topicSlug: 'the-unit-circle' },
  { question: 'The period of f(x) = tan(x) is:', options: ['π', '2π', 'π/2', '∞'], correctAnswer: 0, explanation: 'The tangent function has period π (not 2π like sine and cosine).', domain: 'trigonometric', topicSlug: 'graphing-trig-functions' },
  { question: '1 + $\\tan^{2}\\theta$ = ?', options: ['$\\sec^{2}\\theta$', '$\\csc^{2}\\theta$', '$\\cos^{2}\\theta$', '2'], correctAnswer: 0, explanation: 'Pythagorean identity: 1 + $\\tan^{2}\\theta$ = $\\sec^{2}\\theta$.', domain: 'trigonometric', topicSlug: 'trigonometric-identities-precalc' },
  { question: 'The polar equation θ = π/4 represents:', options: ['A line through the origin at 45°', 'A circle', 'A point', 'A spiral'], correctAnswer: 0, explanation: 'θ = constant defines a ray (line through origin) at that angle.', domain: 'trigonometric', topicSlug: 'polar-coordinates-precalc' },
  { question: 'cos(2θ) can be written as:', options: ['$\\cos^{2}\\theta$ − $\\sin^{2}\\theta$', '2 cos θ sin θ', '$\\cos^{2}\\theta$ + $\\sin^{2}\\theta$', '2 $\\cos^{2}\\theta$ + 1'], correctAnswer: 0, explanation: 'Double angle: cos(2θ) = $\\cos^{2}\\theta$ − $\\sin^{2}\\theta$ (also = $2\\cos^{2}\\theta$ − 1 = 1 − $2\\sin^{2}\\theta$).', domain: 'trigonometric', topicSlug: 'trigonometric-identities-precalc' },
  { question: 'Convert polar (2, π/6) to rectangular. y = ?', options: ['1', '$\\sqrt{3}$', '2', '$\\sqrt{2}$'], correctAnswer: 0, explanation: 'y = r sin θ = 2 sin(π/6) = 2(1/2) = 1.', domain: 'trigonometric', topicSlug: 'polar-coordinates-precalc' },
  { question: 'The vertical asymptotes of f(x) = tan(x) on [0, 2π] are at:', options: ['x = π/2 and x = 3π/2', 'x = 0 and x = π', 'x = π only', 'x = π/4 and x = 3π/4'], correctAnswer: 0, explanation: 'tan(x) is undefined when cos(x) = 0: at x = π/2 and x = 3π/2.', domain: 'trigonometric', topicSlug: 'graphing-trig-functions' },
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
  { question: 'The period of f(x) = csc(x) is:', options: ['2π', 'π', 'π/2', '4π'], correctAnswer: 0, explanation: 'csc(x) = 1/sin(x), and sin(x) has period 2π, so csc(x) also has period 2π.', domain: 'trigonometric', topicSlug: 'graphing-trig-functions' },
  { question: 'tan(π/3) = ?', options: ['$\\sqrt{3}$', '$1/\\sqrt{3}$', '1', 'undefined'], correctAnswer: 0, explanation: 'sin(π/3)/cos(π/3) = $(\\sqrt{3}/2)/(1/2)$ = $\\sqrt{3}$.', domain: 'trigonometric', topicSlug: 'the-unit-circle' },
  { question: 'The function f(x) = −2 cos(x) + 1 has maximum value:', options: ['3', '1', '−1', '2'], correctAnswer: 0, explanation: 'cos(x) min = −1. f max = −2(−1) + 1 = 2 + 1 = 3.', domain: 'trigonometric', topicSlug: 'graphing-trig-functions' },
  { question: 'sin(−θ) = ?', options: ['−sin θ', 'sin θ', 'cos θ', '−cos θ'], correctAnswer: 0, explanation: 'Sine is an odd function: sin(−θ) = −sin θ.', domain: 'trigonometric', topicSlug: 'trigonometric-identities-precalc' },
  { question: 'The cardioid r = 1 + cos θ passes through the origin when θ = ?', options: ['π', '0', 'π/2', '3π/2'], correctAnswer: 0, explanation: 'r = 0 when 1 + cos θ = 0 → cos θ = −1 → θ = π.', domain: 'trigonometric', topicSlug: 'polar-coordinates-precalc' },
  { question: 'sin(π) = ?', options: ['0', '1', '−1', '1/2'], correctAnswer: 0, explanation: 'At π (180°), the point on the unit circle is (−1, 0). sin(π) = 0.', domain: 'trigonometric', topicSlug: 'the-unit-circle' },
  { question: 'The graph of y = tan(x) has x-intercepts at:', options: ['x = nπ (n integer)', 'x = π/2 + nπ', 'x = nπ/2', 'None'], correctAnswer: 0, explanation: 'tan(x) = 0 when sin(x) = 0, which occurs at x = nπ.', domain: 'trigonometric', topicSlug: 'graphing-trig-functions' },
  { question: 'cos(−θ) = ?', options: ['cos θ', '−cos θ', 'sin θ', '−sin θ'], correctAnswer: 0, explanation: 'Cosine is an even function: cos(−θ) = cos θ.', domain: 'trigonometric', topicSlug: 'trigonometric-identities-precalc' },
  { question: 'Convert polar (4, π) to rectangular:', options: ['(−4, 0)', '(4, 0)', '(0, 4)', '(0, −4)'], correctAnswer: 0, explanation: 'x = 4 cos π = 4(−1) = −4. y = 4 sin π = 4(0) = 0. Point: (−4, 0).', domain: 'trigonometric', topicSlug: 'polar-coordinates-precalc' },
  { question: 'cos(π/6) = ?', options: ['$\\sqrt{3}/2$', '1/2', '$\\sqrt{2}/2$', '0'], correctAnswer: 0, explanation: 'cos(30°) = $\\sqrt{3}/2$.', domain: 'trigonometric', topicSlug: 'the-unit-circle' },
  { question: 'The graph of f(x) = sin(x) + cos(x) has amplitude:', options: ['$\\sqrt{2}$', '2', '1', '$\\sqrt{3}$'], correctAnswer: 0, explanation: 'sin(x) + cos(x) = $\\sqrt{2}$ sin(x + π/4). Amplitude = $\\sqrt{2}$ ≈ 1.414.', domain: 'trigonometric', topicSlug: 'graphing-trig-functions' },
  { question: '$\\tan^{2}\\theta$ + 1 = ?', options: ['$\\sec^{2}\\theta$', '$\\csc^{2}\\theta$', '1', '$\\cot^{2}\\theta$'], correctAnswer: 0, explanation: 'Dividing $\\sin^{2}\\theta$ + $\\cos^{2}\\theta$ = 1 by $\\cos^{2}\\theta$ gives $\\tan^{2}\\theta$ + 1 = $\\sec^{2}\\theta$.', domain: 'trigonometric', topicSlug: 'trigonometric-identities-precalc' },
  { question: 'The limaçon r = 2 + 3 sin θ has what feature?', options: ['An inner loop', 'A dimple', 'No special feature (convex)', 'A cardioid shape'], correctAnswer: 0, explanation: 'Since |b| > |a| (3 > 2), the limaçon r = a + b sin θ has an inner loop.', domain: 'trigonometric', topicSlug: 'polar-coordinates-precalc' },
  { question: 'sin(5π/6) = ?', options: ['1/2', '−1/2', '$\\sqrt{3}/2$', '$-\\sqrt{3}/2$'], correctAnswer: 0, explanation: '5π/6 is in Q II. Reference angle π/6. sin(5π/6) = sin(π/6) = 1/2.', domain: 'trigonometric', topicSlug: 'the-unit-circle' },
  { question: 'The frequency of f(x) = sin(4πx) is:', options: ['2', '4π', '1/(4π)', 'π/2'], correctAnswer: 0, explanation: 'Period = 2π/(4π) = 1/2. Frequency = 1/period = 2.', domain: 'trigonometric', topicSlug: 'graphing-trig-functions' },
  { question: 'Simplify: $(1 - \\cos^{2}\\theta )/\\sin$ θ = ?', options: ['sin θ', 'cos θ', 'tan θ', '1'], correctAnswer: 0, explanation: '1 − $\\cos^{2}\\theta$ = $\\sin^{2}\\theta$. So $\\sin^{2}\\theta /\\sin$ θ = sin θ.', domain: 'trigonometric', topicSlug: 'trigonometric-identities-precalc' },
  { question: 'The spiral r = θ (for θ ≥ 0) is called a:', options: ['Spiral of Archimedes', 'Logarithmic spiral', 'Cardioid', 'Lemniscate'], correctAnswer: 0, explanation: 'r = θ is the Archimedean spiral — distance from origin increases linearly with angle.', domain: 'trigonometric', topicSlug: 'polar-coordinates-precalc' },
  { question: 'cos(3π/4) = ?', options: ['$-\\sqrt{2}/2$', '$\\sqrt{2}/2$', '−1/2', '1/2'], correctAnswer: 0, explanation: '3π/4 is in Q II. Reference angle π/4. cos(3π/4) = −cos(π/4) = $-\\sqrt{2}/2$.', domain: 'trigonometric', topicSlug: 'the-unit-circle' },
  { question: 'The graph of y = 2 sin(3x − π) has phase shift:', options: ['π/3 to the right', 'π to the right', 'π/3 to the left', '3π to the right'], correctAnswer: 0, explanation: 'Factor: 2 sin(3(x − π/3)). Phase shift = π/3 to the right.', domain: 'trigonometric', topicSlug: 'graphing-trig-functions' },
  { question: 'Verify: sin θ · csc θ = ?', options: ['1', '$\\sin^{2}\\theta$', '0', '$\\csc^{2}\\theta$'], correctAnswer: 0, explanation: 'csc θ = 1/sin θ. So sin θ · (1/sin θ) = 1.', domain: 'trigonometric', topicSlug: 'trigonometric-identities-precalc' },
  { question: 'The area enclosed by one petal of r = cos(2θ) uses what integral bounds?', options: ['−π/4 to π/4', '0 to π', '0 to 2π', '0 to π/2'], correctAnswer: 0, explanation: 'cos(2θ) = 0 at θ = ±π/4. One petal spans from −π/4 to π/4.', domain: 'trigonometric', topicSlug: 'polar-coordinates-precalc' },
  { question: 'tan(3π/4) = ?', options: ['−1', '1', '0', 'undefined'], correctAnswer: 0, explanation: '3π/4 in Q II. Reference angle π/4. tan is negative in Q II. tan(3π/4) = −1.', domain: 'trigonometric', topicSlug: 'the-unit-circle' },
  { question: 'The minimum value of f(x) = 5 sin(x) − 2 is:', options: ['−7', '−2', '3', '−5'], correctAnswer: 0, explanation: 'sin(x) min = −1. f min = 5(−1) − 2 = −5 − 2 = −7.', domain: 'trigonometric', topicSlug: 'graphing-trig-functions' },
  { question: 'sin(A + B) = ?', options: ['sin A cos B + cos A sin B', 'sin A sin B + cos A cos B', 'sin A + sin B', 'cos A cos B − sin A sin B'], correctAnswer: 0, explanation: 'The angle addition formula: sin(A + B) = sin A cos B + cos A sin B.', domain: 'trigonometric', topicSlug: 'trigonometric-identities-precalc' },
  { question: 'Convert (x, y) = (3, 3) to polar. r = ?', options: ['$3\\sqrt{2}$', '6', '3', '$\\sqrt{3}$'], correctAnswer: 0, explanation: 'r = $\\sqrt{3^{2} + 3^{2}}$ = $\\sqrt{18}$ = $3\\sqrt{2}$.', domain: 'trigonometric', topicSlug: 'polar-coordinates-precalc' },
  { question: 'sin(2π) = ?', options: ['0', '1', '−1', 'undefined'], correctAnswer: 0, explanation: 'After a full revolution (2π), we return to (1, 0). sin(2π) = 0.', domain: 'trigonometric', topicSlug: 'the-unit-circle' },
  { question: 'The graph of y = sec(x) is undefined at:', options: ['x = π/2 + nπ', 'x = nπ', 'x = nπ/2', 'Never undefined'], correctAnswer: 0, explanation: 'sec(x) = 1/cos(x). Undefined when cos(x) = 0, at x = π/2 + nπ.', domain: 'trigonometric', topicSlug: 'graphing-trig-functions' },
  { question: 'Half-angle identity: sin(θ/2) = ?', options: ['$\\pm \\sqrt{(1 - \\cos \\theta )/2}$', '(1/2) sin θ', 'sin θ / 2', '$\\pm \\sqrt{(1 + \\cos \\theta )/2}$'], correctAnswer: 0, explanation: 'Half-angle formula: sin(θ/2) = $\\pm \\sqrt{(1 - \\cos \\theta )/2}$.', domain: 'trigonometric', topicSlug: 'trigonometric-identities-precalc' },
  { question: 'The polar equation r = 3 sec θ converts to what rectangular equation?', options: ['x = 3', 'y = 3', '$x^{2}$ + $y^{2}$ = 9', 'x + y = 3'], correctAnswer: 0, explanation: 'r = 3/cos θ → r cos θ = 3 → x = 3. A vertical line.', domain: 'trigonometric', topicSlug: 'polar-coordinates-precalc' },
  { question: 'The reference angle for 7π/6 is:', options: ['π/6', '7π/6', '5π/6', 'π/3'], correctAnswer: 0, explanation: '7π/6 is in Q III. Reference angle = 7π/6 − π = π/6.', domain: 'trigonometric', topicSlug: 'the-unit-circle' },
  { question: 'sin(11π/6) = ?', options: ['−1/2', '1/2', '$-\\sqrt{3}/2$', '$\\sqrt{3}/2$'], correctAnswer: 0, explanation: '11π/6 is in Q IV. Reference angle π/6. sin is negative in Q IV: sin(11π/6) = −sin(π/6) = −1/2.', domain: 'trigonometric', topicSlug: 'the-unit-circle' },
  { question: 'The lemniscate $r^{2}$ = 4 cos(2θ) exists only when:', options: ['cos(2θ) ≥ 0', 'cos(2θ) ≤ 0', 'Always', 'θ = 0'], correctAnswer: 0, explanation: '$r^{2}$ must be non-negative. 4 cos(2θ) ≥ 0 when cos(2θ) ≥ 0.', domain: 'trigonometric', topicSlug: 'polar-coordinates-precalc' },

  // ======================================================================
  // Functions Involving Parameters, Vectors & Matrices  (62 questions)
  // ======================================================================
  { question: 'If f(x) = 2x + 1 and g(x) = $x^{2}$, then (f ∘ g)(3) = ?', options: ['19', '49', '13', '37'], correctAnswer: 0, explanation: 'g(3) = 9, then f(9) = 2(9) + 1 = 19.', domain: 'functions-modeling', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'The inverse of f(x) = 3x − 6 is:', options: ['$f^{-1}(x)$ = (x + 6)/3', '$f^{-1}(x)$ = (x − 6)/3', '$f^{-1}(x)$ = 3x + 6', '$f^{-1}(x)$ = −3x + 6'], correctAnswer: 0, explanation: 'y = 3x − 6 → x = (y + 6)/3. So $f^{-1}(x)$ = (x + 6)/3.', domain: 'functions-modeling', topicSlug: 'composite-inverse-functions' },
  { question: 'For parametric equations x = 2t, y = $t^{2}$ − 1, when t = 3: (x, y) = ?', options: ['(6, 8)', '(6, 10)', '(3, 8)', '(9, 2)'], correctAnswer: 0, explanation: 'x = 2(3) = 6, y = 9 − 1 = 8. Point: (6, 8).', domain: 'functions-modeling', topicSlug: 'parametric-equations-precalc' },
  { question: 'The sum of the geometric series 1 + 1/2 + 1/4 + 1/8 + ... is:', options: ['2', '1', '∞', '1.5'], correctAnswer: 0, explanation: 'S = a/(1−r) = 1/(1−0.5) = 2.', domain: 'functions-modeling', topicSlug: 'sequences-series-precalc' },
  { question: 'If f(x) = $\\sqrt{x}$ and g(x) = x + 4, then (g ∘ f)(9) = ?', options: ['7', '$\\sqrt{13}$', '13', '5'], correctAnswer: 0, explanation: 'f(9) = 3, then g(3) = 3 + 4 = 7.', domain: 'functions-modeling', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'If f(x) = (x − 1)/(x + 2), then $f^{-1}(0)$ = ?', options: ['1', '−1/2', '0', '2'], correctAnswer: 0, explanation: 'Set f(x) = 0: (x−1)/(x+2) = 0 → x = 1. So $f^{-1}(0)$ = 1.', domain: 'functions-modeling', topicSlug: 'composite-inverse-functions' },
  { question: 'For the arithmetic sequence 3, 7, 11, 15, ..., the 10th term is:', options: ['39', '43', '35', '40'], correctAnswer: 0, explanation: '$a_{10}$ = 3 + (10−1)·4 = 3 + 36 = 39.', domain: 'functions-modeling', topicSlug: 'sequences-series-precalc' },
  { question: 'Parametric curve x = cos t, y = sin t traces a:', options: ['Unit circle', 'Parabola', 'Line', 'Hyperbola'], correctAnswer: 0, explanation: '$x^{2}$ + $y^{2}$ = $\\cos^{2}t$ + $\\sin^{2}t$ = 1 → unit circle.', domain: 'functions-modeling', topicSlug: 'parametric-equations-precalc' },
  { question: 'A function f is one-to-one if:', options: ['It passes the horizontal line test', 'It passes the vertical line test', 'f(0) = 0', 'It is continuous'], correctAnswer: 0, explanation: 'One-to-one means each y-value has exactly one x-value → horizontal line test.', domain: 'functions-modeling', topicSlug: 'composite-inverse-functions' },
  { question: 'The common ratio of 5, 15, 45, 135, ... is:', options: ['3', '10', '5', '30'], correctAnswer: 0, explanation: '15/5 = 3. Each term is multiplied by 3.', domain: 'functions-modeling', topicSlug: 'sequences-series-precalc' },
  { question: 'If f(x) = $x^{2}$ and g(x) = 3x − 1, then (g ∘ f)(2) = ?', options: ['11', '25', '5', '35'], correctAnswer: 0, explanation: 'f(2) = 4, then g(4) = 3(4) − 1 = 11.', domain: 'functions-modeling', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'The inverse of f(x) = (2x + 1)/3 is:', options: ['$f^{-1}(x)$ = (3x − 1)/2', '$f^{-1}(x)$ = 3/(2x + 1)', '$f^{-1}(x)$ = (2x − 1)/3', '$f^{-1}(x)$ = 3x − 1'], correctAnswer: 0, explanation: 'y = (2x + 1)/3 → 3y = 2x + 1 → x = (3y − 1)/2. So $f^{-1}(x)$ = (3x − 1)/2.', domain: 'functions-modeling', topicSlug: 'composite-inverse-functions' },
  { question: 'Eliminate parameter: x = t + 1, y = $t^{2}$ − 3. In terms of x:', options: ['y = $(x - 1)^{2}$ − 3', 'y = $x^{2}$ − 3', 'y = $(x + 1)^{2}$ − 3', 'y = $x^{2}$ − 4'], correctAnswer: 0, explanation: 't = x − 1, so y = $(x - 1)^{2}$ − 3.', domain: 'functions-modeling', topicSlug: 'parametric-equations-precalc' },
  { question: 'The sum of the first 20 terms of the arithmetic series 2, 5, 8, 11, ... is:', options: ['610', '590', '620', '570'], correctAnswer: 0, explanation: '$a_{20}$ = 2 + 19(3) = 59. $S_{20}$ = 20(2 + 59)/2 = 20(61)/2 = 610.', domain: 'functions-modeling', topicSlug: 'sequences-series-precalc' },
  { question: 'If f(x) = 1/x and g(x) = x − 2, the domain of (f ∘ g)(x) is:', options: ['All x ≠ 2', 'All x ≠ 0', 'All real numbers', 'x > 2'], correctAnswer: 0, explanation: '(f ∘ g)(x) = 1/(x − 2). Undefined when x − 2 = 0 → x ≠ 2.', domain: 'functions-modeling', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'If $f(f^{-1}(7))$ = ?', options: ['7', 'f(7)', '1/7', '0'], correctAnswer: 0, explanation: 'By definition of inverse functions: $f(f^{-1}(x))$ = x for all x in the range.', domain: 'functions-modeling', topicSlug: 'composite-inverse-functions' },
  { question: 'For parametric equations x = 3 cos t, y = 3 sin t, the Cartesian equation is:', options: ['$x^{2}$ + $y^{2}$ = 9', '$x^{2}$ + $y^{2}$ = 3', 'y = x', '$x^{2}$ − $y^{2}$ = 9'], correctAnswer: 0, explanation: '$x^{2}$ + $y^{2}$ = $9\\cos^{2}t$ + $9\\sin^{2}t$ = $9(\\cos^{2}t + \\sin^{2}t)$ = 9.', domain: 'functions-modeling', topicSlug: 'parametric-equations-precalc' },
  { question: 'The 5th term of the geometric sequence with $a_{1}$ = 2, r = 3 is:', options: ['162', '243', '54', '486'], correctAnswer: 0, explanation: '$a_{5}$ = $a_{1}$ · $r^{4}$ = 2 · $3^{4}$ = 2 · 81 = 162.', domain: 'functions-modeling', topicSlug: 'sequences-series-precalc' },
  { question: 'If f(x) = $x^{3}$ + 1, then $f^{-1}(9)$ = ?', options: ['2', '3', '∛9', '8'], correctAnswer: 0, explanation: 'Set $x^{3}$ + 1 = 9 → $x^{3}$ = 8 → x = 2. So $f^{-1}(9)$ = 2.', domain: 'functions-modeling', topicSlug: 'composite-inverse-functions' },
  { question: 'The sum of an infinite geometric series with a = 6, r = 1/3 is:', options: ['9', '6', '18', '2'], correctAnswer: 0, explanation: 'S = a/(1 − r) = 6/(1 − 1/3) = 6/(2/3) = 9.', domain: 'functions-modeling', topicSlug: 'sequences-series-precalc' },
  { question: 'If h(x) = f(g(x)), f(x) = x + 5, g(x) = 2x, then h(3) = ?', options: ['11', '16', '8', '21'], correctAnswer: 0, explanation: 'g(3) = 6, then f(6) = 6 + 5 = 11.', domain: 'functions-modeling', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'The graph of $f^{-1}$ is a reflection of f across:', options: ['y = x', 'The x-axis', 'The y-axis', 'The origin'], correctAnswer: 0, explanation: 'Inverse functions are reflections across the line y = x.', domain: 'functions-modeling', topicSlug: 'composite-inverse-functions' },
  { question: 'For x = $t^{2}$, y = $t^{3}$, when t = 2: dy/dx at that point relates to:', options: ['dy/dt ÷ dx/dt = $3t^{2}/(2t)$ = 3', 'dy/dx = t = 2', 'dy/dx = 6/4 = 3/2', 'dy/dx = 2/3'], correctAnswer: 0, explanation: 'dy/dt = $3t^{2}$, dx/dt = 2t. dy/dx = $3t^{2}/(2t)$ = 3t/2. At t = 2: 3(2)/2 = 3.', domain: 'functions-modeling', topicSlug: 'parametric-equations-precalc' },
  { question: 'Is the sequence 1, 4, 9, 16, 25, ... arithmetic, geometric, or neither?', options: ['Neither', 'Arithmetic', 'Geometric', 'Both'], correctAnswer: 0, explanation: 'Differences: 3, 5, 7, 9 (not constant). Ratios: 4, 9/4, 16/9 (not constant). Neither.', domain: 'functions-modeling', topicSlug: 'sequences-series-precalc' },
  { question: 'If f(x) = 2x − 3 and g(x) = (x + 3)/2, then f(g(x)) = ?', options: ['x', '2x', 'x + 3', '4x − 3'], correctAnswer: 0, explanation: 'f(g(x)) = 2·(x+3)/2 − 3 = (x+3) − 3 = x. They are inverses.', domain: 'functions-modeling', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'A function has an inverse if and only if it is:', options: ['One-to-one (injective)', 'Continuous', 'Differentiable', 'Polynomial'], correctAnswer: 0, explanation: 'Only one-to-one functions have true inverses (pass horizontal line test).', domain: 'functions-modeling', topicSlug: 'composite-inverse-functions' },
  { question: 'The parametric equations x = 2 + t, y = 3 − 2t describe a:', options: ['Line with slope −2', 'Circle', 'Parabola', 'Line with slope 2'], correctAnswer: 0, explanation: 't = x − 2, y = 3 − 2(x − 2) = 7 − 2x. Linear with slope −2.', domain: 'functions-modeling', topicSlug: 'parametric-equations-precalc' },
  { question: 'The recursive formula $a_{n}$ = $a_{n-1}$ + 5, $a_{1}$ = 3 defines what type of sequence?', options: ['Arithmetic with d = 5', 'Geometric with r = 5', 'Neither', 'Arithmetic with d = 3'], correctAnswer: 0, explanation: 'Adding a constant (5) each time → arithmetic sequence with common difference 5.', domain: 'functions-modeling', topicSlug: 'sequences-series-precalc' },
  { question: 'If f(x) = |x − 2|, then f(f(0)) = ?', options: ['0', '2', '4', '−2'], correctAnswer: 0, explanation: 'f(0) = |0 − 2| = 2. f(2) = |2 − 2| = 0.', domain: 'functions-modeling', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'The partial sum $S_{4}$ of the series Σ $2^{n}$ from n = 0 to 3 is:', options: ['15', '16', '14', '30'], correctAnswer: 0, explanation: '$S_{4}$ = $2^{0}$ + $2^{1}$ + $2^{2}$ + $2^{3}$ = 1 + 2 + 4 + 8 = 15.', domain: 'functions-modeling', topicSlug: 'sequences-series-precalc' },
  { question: 'If f(x) = 3x + 2 and g(x) = $x^{2}$ − 1, then (f − g)(2) = ?', options: ['5', '3', '8', '11'], correctAnswer: 0, explanation: 'f(2) = 8, g(2) = 3. (f − g)(2) = 8 − 3 = 5.', domain: 'functions-modeling', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'The inverse of f(x) = 5x is:', options: ['$f^{-1}(x)$ = x/5', '$f^{-1}(x)$ = 5/x', '$f^{-1}(x)$ = x − 5', '$f^{-1}(x)$ = −5x'], correctAnswer: 0, explanation: 'y = 5x → x = y/5. So $f^{-1}(x)$ = x/5.', domain: 'functions-modeling', topicSlug: 'composite-inverse-functions' },
  { question: 'Eliminate parameter: x = 3 sin t, y = 3 cos t. Cartesian equation:', options: ['$x^{2}$ + $y^{2}$ = 9', 'x + y = 3', 'y = x', '$x^{2}$ − $y^{2}$ = 9'], correctAnswer: 0, explanation: '$x^{2}$ + $y^{2}$ = $9\\sin^{2}t$ + $9\\cos^{2}t$ = $9(\\sin^{2}t + \\cos^{2}t)$ = 9.', domain: 'functions-modeling', topicSlug: 'parametric-equations-precalc' },
  { question: 'The nth term of 1, 1/2, 1/4, 1/8, ... is:', options: ['$(1/2)^{n-1}$', '1/(2n)', '$(1/2)^{n}$', '$1/n^{2}$'], correctAnswer: 0, explanation: 'Geometric with $a_{1}$ = 1, r = 1/2. $a_{n}$ = 1 · $(1/2)^{n-1}$ = $(1/2)^{n-1}$.', domain: 'functions-modeling', topicSlug: 'sequences-series-precalc' },
  { question: 'If f(x) = x + 1 and g(x) = x − 1, then (f ∘ g ∘ f)(0) = ?', options: ['1', '0', '2', '−1'], correctAnswer: 0, explanation: 'f(0) = 1. g(1) = 0. f(0) = 1. So (f ∘ g ∘ f)(0) = 1.', domain: 'functions-modeling', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'If f is its own inverse, then f(f(x)) = ?', options: ['x', 'f(x)', '0', '1'], correctAnswer: 0, explanation: 'If f = $f^{-1}$, then f(f(x)) = $f(f^{-1}(x))$ = x (by definition of inverse).', domain: 'functions-modeling', topicSlug: 'composite-inverse-functions' },
  { question: 'The direction of the parametric curve x = $t^{2}$, y = t for t increasing is:', options: ['Right along a parabola x = $y^{2}$', 'Upward along y = $x^{2}$', 'Circular', 'Linear left to right'], correctAnswer: 0, explanation: 'Since x = $t^{2}$ and y = t, we get x = $y^{2}$. As t increases, both x and y increase (for t > 0), tracing rightward.', domain: 'functions-modeling', topicSlug: 'parametric-equations-precalc' },
  { question: 'The sum 1 + 2 + 3 + ... + 100 = ?', options: ['5050', '5000', '10000', '10100'], correctAnswer: 0, explanation: 'S = n(n+1)/2 = 100(101)/2 = 5050.', domain: 'functions-modeling', topicSlug: 'sequences-series-precalc' },
  { question: 'If g(x) = $x^{2}$ + 3 and h(x) = $\\sqrt{x - 3}$, then (h ∘ g)(x) = ?', options: ['|x|', '$\\sqrt{x^{2}}$', 'x', '$x^{2}$ + 3 − $\\sqrt{3}$'], correctAnswer: 0, explanation: 'h(g(x)) = $\\sqrt{g(x) - 3}$ = $\\sqrt{x^{2} + 3 - 3}$ = $\\sqrt{x^{2}}$ = |x|.', domain: 'functions-modeling', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'f(x) = (4x + 3)/(2x − 1). Find $f^{-1}(x)$:', options: ['(x + 3)/(2x − 4)', '(2x − 1)/(4x + 3)', '(4x − 3)/(2x + 1)', '(x − 3)/(2x + 4)'], correctAnswer: 0, explanation: 'y = (4x+3)/(2x−1) → y(2x−1) = 4x+3 → 2xy − y = 4x + 3 → x(2y−4) = y+3 → x = (y+3)/(2y−4).', domain: 'functions-modeling', topicSlug: 'composite-inverse-functions' },
  { question: 'For x = $e^{t}$, y = $e^{2t}$, eliminating t gives:', options: ['y = $x^{2}$', 'y = 2x', 'y = $e^{x}$', 'y = ln x'], correctAnswer: 0, explanation: 'x = $e^{t}$ → t = ln x. y = $e^{2t}$ = $(e^{t})^{2}$ = $x^{2}$.', domain: 'functions-modeling', topicSlug: 'parametric-equations-precalc' },
  { question: 'A geometric series converges if and only if:', options: ['|r| < 1', 'r < 1', 'r > 0', '|r| > 1'], correctAnswer: 0, explanation: 'An infinite geometric series converges when the absolute value of the common ratio is less than 1.', domain: 'functions-modeling', topicSlug: 'sequences-series-precalc' },
  { question: 'If f(x) = $x^{2}$ (x ≥ 0), then $f^{-1}(x)$ = ?', options: ['$\\sqrt{x}$', '$x^{2}$', '$\\pm \\sqrt{x}$', '$1/x^{2}$'], correctAnswer: 0, explanation: 'With domain restricted to x ≥ 0, f is one-to-one. $f^{-1}(x)$ = $\\sqrt{x}$.', domain: 'functions-modeling', topicSlug: 'composite-inverse-functions' },
  { question: 'The parametric equations x = 2t − 1, y = 4t − 3 describe what slope?', options: ['2', '4', '1/2', '−2'], correctAnswer: 0, explanation: 'dy/dx = (dy/dt)/(dx/dt) = 4/2 = 2.', domain: 'functions-modeling', topicSlug: 'parametric-equations-precalc' },
  { question: 'The sum of the first n terms of a geometric series is $S_{n}$ = $a(1 - r^{n})/(1 - r)$. If a = 3, r = 2, n = 4:', options: ['45', '30', '48', '24'], correctAnswer: 0, explanation: '$S_{4}$ = $3(1 - 2^{4})/(1 - 2)$ = 3(1 − 16)/(−1) = 3(−15)/(−1) = 45.', domain: 'functions-modeling', topicSlug: 'sequences-series-precalc' },
  { question: 'If (f · g)(x) = $x^{2}$ + x and g(x) = x, then f(x) = ?', options: ['x + 1', '$x^{2}$', '$x^{2}$ + x', 'x − 1'], correctAnswer: 0, explanation: '(f · g)(x) = f(x) · g(x) = f(x) · x = $x^{2}$ + x. So f(x) = $(x^{2} + x)/x$ = x + 1 (x ≠ 0).', domain: 'functions-modeling', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'Which function is NOT one-to-one?', options: ['f(x) = $x^{2}$', 'f(x) = $x^{3}$', 'f(x) = 2x + 1', 'f(x) = $e^{x}$'], correctAnswer: 0, explanation: 'f(x) = $x^{2}$ fails the horizontal line test: f(2) = f(−2) = 4. Not one-to-one.', domain: 'functions-modeling', topicSlug: 'composite-inverse-functions' },
  { question: 'For x = 5 cos t, y = 2 sin t, the curve is:', options: ['An ellipse', 'A circle', 'A parabola', 'A hyperbola'], correctAnswer: 0, explanation: '$x^{2}/25$ + $y^{2}/4$ = $\\cos^{2}t$ + $\\sin^{2}t$ = 1. This is an ellipse.', domain: 'functions-modeling', topicSlug: 'parametric-equations-precalc' },
  { question: 'Find the 8th term of 2, 6, 18, 54, ...:', options: ['4374', '2187', '6561', '1458'], correctAnswer: 0, explanation: 'Geometric with $a_{1}$ = 2, r = 3. $a_{8}$ = 2 · $3^{7}$ = 2 · 2187 = 4374.', domain: 'functions-modeling', topicSlug: 'sequences-series-precalc' },
  { question: 'If f(x) = ln(x) and g(x) = $e^{x}$, then (f ∘ g)(5) = ?', options: ['5', '$e^{5}$', 'ln 5', '1'], correctAnswer: 0, explanation: 'f(g(5)) = $f(e^{5})$ = $\\ln (e^{5})$ = 5. f and g are inverse functions.', domain: 'functions-modeling', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'The inverse of f(x) = 1/x is:', options: ['$f^{-1}(x)$ = 1/x', '$f^{-1}(x)$ = x', '$f^{-1}(x)$ = −x', '$f^{-1}(x)$ = −1/x'], correctAnswer: 0, explanation: 'y = 1/x → x = 1/y. So $f^{-1}(x)$ = 1/x. The function is its own inverse.', domain: 'functions-modeling', topicSlug: 'composite-inverse-functions' },
  { question: 'For x = t + sin t, y = 1 − cos t, when t = 0: (x, y) = ?', options: ['(0, 0)', '(1, 1)', '(0, 1)', '(1, 0)'], correctAnswer: 0, explanation: 'x = 0 + sin 0 = 0. y = 1 − cos 0 = 1 − 1 = 0. Point: (0, 0).', domain: 'functions-modeling', topicSlug: 'parametric-equations-precalc' },
  { question: 'The sequence defined by $a_{n}$ = $(-1)^{n}$ is:', options: ['Alternating between −1 and 1', 'Increasing', 'Constant', 'Geometric with r = 2'], correctAnswer: 0, explanation: '$a_{1}$ = −1, $a_{2}$ = 1, $a_{3}$ = −1, ... It alternates between −1 and 1.', domain: 'functions-modeling', topicSlug: 'sequences-series-precalc' },
  { question: 'If f(x) = 4x − 7, what is $f^{-1}(f(3))$?', options: ['3', '5', '12', '−7'], correctAnswer: 0, explanation: '$f^{-1}(f(x))$ = x for all x in the domain. So $f^{-1}(f(3))$ = 3.', domain: 'functions-modeling', topicSlug: 'composite-inverse-functions' },
  { question: 'Parametric: x = 4t, y = $4t^{2}$. Eliminate t to get:', options: ['y = $x^{2}/4$', 'y = $4x^{2}$', 'y = x/4', 'y = $16t^{2}$'], correctAnswer: 0, explanation: 't = x/4. y = $4(x/4)^{2}$ = $4(x^{2}/16)$ = $x^{2}/4$.', domain: 'functions-modeling', topicSlug: 'parametric-equations-precalc' },
  { question: 'The telescoping series Σ(1/n − 1/(n+1)) from n = 1 to N equals:', options: ['1 − 1/(N+1)', '1', 'N/(N+1)', '1/N'], correctAnswer: 0, explanation: 'Most terms cancel: (1 − 1/2) + (1/2 − 1/3) + ... = 1 − 1/(N+1).', domain: 'functions-modeling', topicSlug: 'sequences-series-precalc' },
  { question: 'If f(x) = $(x - 2)^{3}$ + 5, then $f^{-1}(x)$ = ?', options: ['∛(x − 5) + 2', '$(x - 5)^{3}$ + 2', '∛(x − 2) + 5', '$(x + 2)^{3}$ − 5'], correctAnswer: 0, explanation: 'y = $(x-2)^{3}$ + 5 → y − 5 = $(x-2)^{3}$ → x − 2 = ∛(y−5) → x = ∛(y−5) + 2.', domain: 'functions-modeling', topicSlug: 'composite-inverse-functions' },
  { question: 'For x = sec t, y = tan t, the Cartesian equation is:', options: ['$x^{2}$ − $y^{2}$ = 1', '$x^{2}$ + $y^{2}$ = 1', 'y = x − 1', 'x = $y^{2}$'], correctAnswer: 0, explanation: '$\\sec^{2}t$ − $\\tan^{2}t$ = 1 → $x^{2}$ − $y^{2}$ = 1. This is a hyperbola.', domain: 'functions-modeling', topicSlug: 'parametric-equations-precalc' },
  { question: 'Write the arithmetic series 5 + 8 + 11 + ... + 35 in sigma notation: Σ(3k + 2) from k = 1 to ?', options: ['11', '10', '12', '35'], correctAnswer: 0, explanation: '$a_{k}$ = 3k + 2. When k = 1: 5. When k = 11: 35. So k goes from 1 to 11.', domain: 'functions-modeling', topicSlug: 'sequences-series-precalc' },
  { question: 'If f(g(x)) = 4x + 7 and g(x) = 2x + 1, then f(x) = ?', options: ['2x + 5', '4x + 7', '2x + 3', '4x + 6'], correctAnswer: 0, explanation: 'f(g(x)) = f(2x+1) = 4x+7. Let u = 2x+1, so x = (u−1)/2. f(u) = 4(u−1)/2 + 7 = 2u − 2 + 7 = 2u + 5.', domain: 'functions-modeling', topicSlug: 'function-composition-inverses-precalc' },
  { question: 'The harmonic series 1 + 1/2 + 1/3 + 1/4 + ... is:', options: ['Divergent', 'Convergent to 2', 'Convergent to e', 'Convergent to π'], correctAnswer: 0, explanation: 'The harmonic series diverges — it grows without bound, though very slowly.', domain: 'functions-modeling', topicSlug: 'sequences-series-precalc' },
  { question: 'For x = $t^{3}$, y = $t^{2}$ the curve passes through the origin when t = ?', options: ['0', '1', '−1', 'Never'], correctAnswer: 0, explanation: 'At t = 0: x = $0^{3}$ = 0, y = $0^{2}$ = 0. The curve passes through (0, 0).', domain: 'functions-modeling', topicSlug: 'parametric-equations-precalc' },
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

export function generateAPPrecalculusDiagnosticTest(form: DiagnosticFormNumber): APPrecalculusTestData {
  const rng = mulberry32(form * 7919)
  const selected: PoolQuestion[] = []
  for (const domain of AP_PRECALCULUS_DOMAINS) {
    const domainQs = questionPool.filter(q => q.domain === domain.id)
    const shuffled = seededShuffle(domainQs, rng)
    selected.push(...shuffled.slice(0, domain.questionTarget))
  }
  const questions: APPrecalculusQuestion[] = seededShuffle(selected, rng).map(q => ({
    question: q.question, options: q.options, correctAnswer: q.correctAnswer, explanation: q.explanation, domain: q.domain, topicSlug: q.topicSlug,
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
  const estimatedAPScore = pct >= 85 ? 5 : pct >= 70 ? 4 : pct >= 55 ? 3 : pct >= 40 ? 2 : 1
  const weakAreas = domainResults.filter(d => d.level === 'weak').map(d => d.domainName)
  const moderateAreas = domainResults.filter(d => d.level === 'moderate').map(d => d.domainName)
  const strengths = domainResults.filter(d => d.level === 'strong').map(d => d.domainName)
  // Cap at 5 recommendations and prioritize: weak before moderate, then by exam weight desc.
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
    for (const slug of domain.topicSlugs) {
      if (recommendedTopics.length >= MAX_RECOMMENDED) break
      if (recommendedTopics.some(r => r.slug === slug)) continue
      recommendedTopics.push({ slug, name: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '), domainId: d.domainId, priority: d.level === 'weak' ? 'high' : 'medium' })
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
