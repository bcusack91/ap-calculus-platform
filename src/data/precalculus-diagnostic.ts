/**
 * Pre-Calculus Diagnostic Test Generator
 *
 * 10 alternate forms (1–10), ~30 questions spanning 6 core domains.
 * Weak areas map to topic slugs for review.
 */

import { mulberry32 } from './_shared/prng'

export const TOTAL_FORMS = 10

export interface PreCalcDiagnosticQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface PreCalcDomain {
  id: string
  name: string
  topicSlugs: string[]
  questionTarget: number
}

export interface PreCalcDiagnosticTestData {
  form: number
  questions: PreCalcDiagnosticQuestion[]
  domains: PreCalcDomain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface PreCalcDomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface PreCalcRecommendedTopic {
  slug: string
  name: string
  domainId: string
  priority: 'high' | 'medium'
}

export interface PreCalcDiagnosticResults {
  form: number
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedLevel: string
  domains: PreCalcDomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: PreCalcRecommendedTopic[]
}

const PRECALC_DOMAINS: PreCalcDomain[] = [
  { id: 'functions', name: 'Functions & Their Graphs', topicSlugs: ['composite-inverse-functions', 'composite-inverse-functions', 'function-transformations'], questionTarget: 5 },
  { id: 'polynomial-rational', name: 'Polynomial & Rational Functions', topicSlugs: ['polynomial-functions-end-behavior', 'rational-functions-asymptotes', 'polynomial-division-remainder-theorem'], questionTarget: 5 },
  { id: 'exponential-logarithmic', name: 'Exponential & Logarithmic Functions', topicSlugs: ['exponential-functions-growth-decay', 'logarithmic-functions', 'solving-exponential-logarithmic-equations'], questionTarget: 5 },
  { id: 'trigonometry', name: 'Trigonometric Functions', topicSlugs: ['the-unit-circle', 'trigonometric-identities', 'solving-trig-equations'], questionTarget: 5 },
  { id: 'analytic-trig', name: 'Analytic Trigonometry', topicSlugs: ['law-of-sines-cosines', 'law-of-sines-cosines', 'inverse-trig-functions'], questionTarget: 5 },
  { id: 'sequences-series', name: 'Sequences, Series & Polar', topicSlugs: ['sequences-arithmetic-geometric', 'sequences-arithmetic-geometric', 'polar-coordinates'], questionTarget: 5 },
]

export { PRECALC_DOMAINS }

interface PoolQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
  formSet: 'A' | 'B' | 'both'
}

const questionPool: PoolQuestion[] = [
  // ---- Functions & Their Graphs ----
  { question: 'If f(x) = 2x² − 3x + 1, what is f(−1)?', options: ['6', '4', '2', '0'], correctAnswer: 0, explanation: 'f(−1) = 2(1) − 3(−1) + 1 = 2 + 3 + 1 = 6.', domain: 'functions', topicSlug: 'composite-inverse-functions', formSet: 'A' },
  { question: 'The domain of f(x) = √(x − 3) is:', options: ['x ≥ 3', 'x > 3', 'x ≤ 3', 'All real numbers'], correctAnswer: 0, explanation: 'The expression under the square root must be ≥ 0, so x − 3 ≥ 0, meaning x ≥ 3.', domain: 'functions', topicSlug: 'composite-inverse-functions', formSet: 'A' },
  { question: 'If f(x) = x² and g(x) = x + 3, what is (f ∘ g)(x)?', options: ['x² + 3', '(x + 3)²', 'x² + 6x + 9', 'Both B and C'], correctAnswer: 3, explanation: '(f ∘ g)(x) = f(g(x)) = f(x + 3) = (x + 3)² = x² + 6x + 9. B and C are equivalent.', domain: 'functions', topicSlug: 'composite-inverse-functions', formSet: 'A' },
  { question: 'The graph of y = f(x − 2) + 3 is the graph of f shifted:', options: ['Left 2, up 3', 'Right 2, up 3', 'Right 2, down 3', 'Left 2, down 3'], correctAnswer: 1, explanation: 'f(x − h) shifts right h units; + k shifts up k units. So right 2, up 3.', domain: 'functions', topicSlug: 'function-transformations', formSet: 'B' },
  { question: 'Which function is odd? f(x) = x³, g(x) = x², h(x) = |x|', options: ['f(x) only', 'g(x) only', 'h(x) only', 'All three'], correctAnswer: 0, explanation: 'A function is odd if f(−x) = −f(x). Only x³ satisfies this: (−x)³ = −x³.', domain: 'functions', topicSlug: 'composite-inverse-functions', formSet: 'B' },
  { question: 'What is the range of f(x) = −|x| + 4?', options: ['y ≤ 4', 'y ≥ 4', 'y ≥ −4', 'All real numbers'], correctAnswer: 0, explanation: '|x| ≥ 0, so −|x| ≤ 0, therefore −|x| + 4 ≤ 4. The range is (−∞, 4].', domain: 'functions', topicSlug: 'composite-inverse-functions', formSet: 'B' },
  { question: 'If f(x) = 3x − 1, then f⁻¹(x) =', options: ['(x + 1)/3', '(x − 1)/3', '3x + 1', '1/(3x − 1)'], correctAnswer: 0, explanation: 'Set y = 3x − 1, solve for x: x = (y + 1)/3. So f⁻¹(x) = (x + 1)/3.', domain: 'functions', topicSlug: 'composite-inverse-functions', formSet: 'both' },
  { question: 'The graph of y = −f(x) is a reflection of f(x) over:', options: ['The x-axis', 'The y-axis', 'The line y = x', 'The origin'], correctAnswer: 0, explanation: 'Negating the output reflects the graph over the x-axis.', domain: 'functions', topicSlug: 'function-transformations', formSet: 'both' },

  // ---- Polynomial & Rational Functions ----
  { question: 'A polynomial of degree 4 can have at most how many real zeros?', options: ['2', '3', '4', '5'], correctAnswer: 2, explanation: 'By the Fundamental Theorem of Algebra, a degree-n polynomial has at most n real zeros.', domain: 'polynomial-rational', topicSlug: 'polynomial-division-remainder-theorem', formSet: 'A' },
  { question: 'What are the zeros of f(x) = x³ − 4x?', options: ['0, 2, −2', '0, 4', '2, −2', '0, 2'], correctAnswer: 0, explanation: 'Factor: x(x² − 4) = x(x − 2)(x + 2). Zeros: x = 0, 2, −2.', domain: 'polynomial-rational', topicSlug: 'polynomial-division-remainder-theorem', formSet: 'A' },
  { question: 'The vertical asymptote of f(x) = 1/(x − 5) is:', options: ['x = 0', 'x = 5', 'x = −5', 'y = 0'], correctAnswer: 1, explanation: 'Vertical asymptotes occur where the denominator is zero: x − 5 = 0 → x = 5.', domain: 'polynomial-rational', topicSlug: 'rational-functions-asymptotes', formSet: 'A' },
  { question: 'The end behavior of f(x) = −2x⁵ + 3x² is:', options: ['Up left, down right', 'Down left, up right', 'Up both', 'Down both'], correctAnswer: 0, explanation: 'Odd degree with negative leading coefficient: as x→−∞, f→+∞; as x→+∞, f→−∞.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior', formSet: 'B' },
  { question: 'The horizontal asymptote of f(x) = (3x² + 1)/(x² − 4) is:', options: ['y = 0', 'y = 3', 'y = −1/4', 'No horizontal asymptote'], correctAnswer: 1, explanation: 'When degrees are equal, HA = ratio of leading coefficients = 3/1 = 3.', domain: 'polynomial-rational', topicSlug: 'rational-functions-asymptotes', formSet: 'B' },
  { question: 'If 2 + 3i is a zero of a polynomial with real coefficients, another zero must be:', options: ['2 − 3i', '−2 + 3i', '−2 − 3i', '3 + 2i'], correctAnswer: 0, explanation: 'Complex zeros of polynomials with real coefficients come in conjugate pairs: 2 + 3i and 2 − 3i.', domain: 'polynomial-rational', topicSlug: 'polynomial-division-remainder-theorem', formSet: 'B' },
  { question: 'Using the Remainder Theorem, the remainder when f(x) = x³ − 2x + 1 is divided by (x − 1) is:', options: ['0', '1', '−1', '2'], correctAnswer: 0, explanation: 'f(1) = 1 − 2 + 1 = 0. The remainder equals f(c) when dividing by (x − c).', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior', formSet: 'both' },
  { question: 'A rational function has a hole at x = 2. This means:', options: ['The denominator is zero at x = 2 only', 'Both numerator and denominator are zero at x = 2', 'The function is undefined everywhere', 'There is a vertical asymptote at x = 2'], correctAnswer: 1, explanation: 'A hole occurs when a factor cancels from both numerator and denominator.', domain: 'polynomial-rational', topicSlug: 'rational-functions-asymptotes', formSet: 'both' },

  // ---- Exponential & Logarithmic Functions ----
  { question: 'Solve: 2ˣ = 16', options: ['x = 2', 'x = 3', 'x = 4', 'x = 8'], correctAnswer: 2, explanation: '2⁴ = 16, so x = 4.', domain: 'exponential-logarithmic', topicSlug: 'solving-exponential-logarithmic-equations', formSet: 'A' },
  { question: 'log₂(32) =', options: ['4', '5', '6', '3'], correctAnswer: 1, explanation: '2⁵ = 32, so log₂(32) = 5.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions', formSet: 'A' },
  { question: 'The graph of f(x) = eˣ always passes through:', options: ['(0, 0)', '(0, 1)', '(1, 0)', '(1, e)'], correctAnswer: 1, explanation: 'For any exponential bˣ, when x = 0, f(0) = b⁰ = 1. So it passes through (0, 1).', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-growth-decay', formSet: 'A' },
  { question: 'ln(e⁵) =', options: ['e⁵', '5', '5e', '1/5'], correctAnswer: 1, explanation: 'ln and e are inverse functions: ln(eˣ) = x. So ln(e⁵) = 5.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions', formSet: 'B' },
  { question: 'The half-life formula A = A₀(½)^(t/h) models:', options: ['Linear decay', 'Exponential decay', 'Exponential growth', 'Quadratic decay'], correctAnswer: 1, explanation: 'The half-life formula is an exponential decay model where the quantity halves every h time units.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-growth-decay', formSet: 'B' },
  { question: 'Solve: log(x) + log(x − 3) = 1', options: ['x = 5', 'x = −2', 'x = 5 or x = −2', 'x = 10'], correctAnswer: 0, explanation: 'log(x(x−3)) = 1 → x² − 3x = 10 → x² − 3x − 10 = 0 → (x−5)(x+2) = 0. Since x must be > 3, x = 5.', domain: 'exponential-logarithmic', topicSlug: 'solving-exponential-logarithmic-equations', formSet: 'B' },
  { question: 'The property log(a) + log(b) =', options: ['log(a + b)', 'log(ab)', 'log(a) · log(b)', 'log(a/b)'], correctAnswer: 1, explanation: 'Product rule of logarithms: log(a) + log(b) = log(ab).', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions', formSet: 'both' },
  { question: 'The domain of f(x) = ln(x − 2) is:', options: ['x > 0', 'x > 2', 'x ≥ 2', 'All real numbers'], correctAnswer: 1, explanation: 'The argument of ln must be positive: x − 2 > 0 → x > 2.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions', formSet: 'both' },

  // ---- Trigonometric Functions ----
  { question: 'sin(π/6) =', options: ['1/2', '√2/2', '√3/2', '1'], correctAnswer: 0, explanation: 'On the unit circle, sin(30°) = sin(π/6) = 1/2.', domain: 'trigonometry', topicSlug: 'the-unit-circle', formSet: 'A' },
  { question: 'The period of f(x) = sin(2x) is:', options: ['π', '2π', 'π/2', '4π'], correctAnswer: 0, explanation: 'Period = 2π/|B| = 2π/2 = π.', domain: 'trigonometry', topicSlug: 'the-unit-circle', formSet: 'A' },
  { question: 'tan(π/4) =', options: ['0', '1', '√3', 'undefined'], correctAnswer: 1, explanation: 'tan(45°) = sin(45°)/cos(45°) = (√2/2)/(√2/2) = 1.', domain: 'trigonometry', topicSlug: 'the-unit-circle', formSet: 'A' },
  { question: 'Which identity is correct?', options: ['sin²θ + cos²θ = 1', 'sin²θ − cos²θ = 1', 'sinθ + cosθ = 1', 'tan²θ + 1 = sec²θ'], correctAnswer: 0, explanation: 'The Pythagorean identity sin²θ + cos²θ = 1 is fundamental. (Note: tan²θ + 1 = sec²θ is also correct, but sin²θ + cos²θ = 1 is the foundational identity.)', domain: 'trigonometry', topicSlug: 'trigonometric-identities', formSet: 'B' },
  { question: 'cos(2π/3) =', options: ['1/2', '−1/2', '√3/2', '−√3/2'], correctAnswer: 1, explanation: '2π/3 is in quadrant II where cosine is negative. cos(2π/3) = −cos(π/3) = −1/2.', domain: 'trigonometry', topicSlug: 'the-unit-circle', formSet: 'B' },
  { question: 'The amplitude of f(x) = 3sin(x) − 1 is:', options: ['1', '3', '−1', '4'], correctAnswer: 1, explanation: 'Amplitude = |A| where f(x) = A·sin(Bx) + C. Here A = 3.', domain: 'trigonometry', topicSlug: 'the-unit-circle', formSet: 'B' },
  { question: 'sin(−θ) =', options: ['sin θ', '−sin θ', 'cos θ', '−cos θ'], correctAnswer: 1, explanation: 'Sine is an odd function: sin(−θ) = −sin(θ).', domain: 'trigonometry', topicSlug: 'trigonometric-identities', formSet: 'both' },
  { question: 'The reference angle for 5π/4 is:', options: ['π/4', 'π/3', '3π/4', '5π/4'], correctAnswer: 0, explanation: '5π/4 is in quadrant III. Reference angle = 5π/4 − π = π/4.', domain: 'trigonometry', topicSlug: 'the-unit-circle', formSet: 'both' },

  // ---- Analytic Trigonometry ----
  { question: 'The Law of Sines states:', options: ['a/sin A = b/sin B = c/sin C', 'a² = b² + c² − 2bc·cos A', 'sin(A+B) = sinA·cosB + cosA·sinB', 'tan A = sin A / cos A'], correctAnswer: 0, explanation: 'The Law of Sines relates sides to the sines of their opposite angles.', domain: 'analytic-trig', topicSlug: 'law-of-sines-cosines', formSet: 'A' },
  { question: 'arcsin(1/2) =', options: ['π/6', 'π/4', 'π/3', '5π/6'], correctAnswer: 0, explanation: 'arcsin(1/2) = π/6 because sin(π/6) = 1/2, and π/6 is in [−π/2, π/2].', domain: 'analytic-trig', topicSlug: 'inverse-trig-functions', formSet: 'A' },
  { question: 'In triangle ABC, if a = 8, b = 5, and C = 60°, find c using the Law of Cosines:', options: ['√89 ≈ 9.43', '√129 ≈ 11.36', '√19.7 ≈ 4.44', 'c² = 64 + 25 − 2(8)(5)cos60° = 49, so c = 7'], correctAnswer: 3, explanation: 'c² = a² + b² − 2ab·cosC = 64 + 25 − 80(0.5) = 89 − 40 = 49. c = 7.', domain: 'analytic-trig', topicSlug: 'law-of-sines-cosines', formSet: 'A' },
  { question: 'The range of arctan(x) is:', options: ['[0, π]', '(−π/2, π/2)', '[−1, 1]', '(−∞, ∞)'], correctAnswer: 1, explanation: 'The arctangent function has range (−π/2, π/2).', domain: 'analytic-trig', topicSlug: 'inverse-trig-functions', formSet: 'B' },
  { question: 'Using the double angle formula, sin(2θ) =', options: ['2sinθ', '2sinθcosθ', 'sin²θ − cos²θ', '2cos²θ − 1'], correctAnswer: 1, explanation: 'The double angle formula: sin(2θ) = 2sinθcosθ.', domain: 'analytic-trig', topicSlug: 'inverse-trig-functions', formSet: 'B' },
  { question: 'The Law of Cosines reduces to the Pythagorean theorem when:', options: ['A = 90°', 'a = b', 'C = 0°', 'All sides are equal'], correctAnswer: 0, explanation: 'When A = 90°, cos(90°) = 0, so c² = a² + b² − 0 = a² + b².', domain: 'analytic-trig', topicSlug: 'law-of-sines-cosines', formSet: 'B' },
  { question: 'The ambiguous case of the Law of Sines occurs with which given information?', options: ['SSS', 'SAS', 'SSA', 'ASA'], correctAnswer: 2, explanation: 'SSA (two sides and a non-included angle) can produce 0, 1, or 2 triangles.', domain: 'analytic-trig', topicSlug: 'law-of-sines-cosines', formSet: 'both' },
  { question: 'cos(arccos(0.5)) =', options: ['0.5', 'π/3', '1', '0'], correctAnswer: 0, explanation: 'cos and arccos are inverse functions, so cos(arccos(x)) = x for x in [−1, 1].', domain: 'analytic-trig', topicSlug: 'inverse-trig-functions', formSet: 'both' },

  // ---- Sequences, Series & Polar ----
  { question: 'The 10th term of the arithmetic sequence 3, 7, 11, 15, … is:', options: ['39', '43', '37', '41'], correctAnswer: 0, explanation: 'a₁₀ = a₁ + (n−1)d = 3 + 9(4) = 3 + 36 = 39.', domain: 'sequences-series', topicSlug: 'sequences-arithmetic-geometric', formSet: 'A' },
  { question: 'The sum of the first 5 terms of the geometric series 2, 6, 18, 54, … is:', options: ['242', '162', '486', '122'], correctAnswer: 0, explanation: 'S₅ = a₁(r⁵ − 1)/(r − 1) = 2(243 − 1)/2 = 242.', domain: 'sequences-series', topicSlug: 'sequences-arithmetic-geometric', formSet: 'A' },
  { question: 'Convert the polar point (4, π/3) to rectangular coordinates:', options: ['(2, 2√3)', '(2√3, 2)', '(4, 4)', '(−2, 2√3)'], correctAnswer: 0, explanation: 'x = r·cosθ = 4·cos(π/3) = 4(1/2) = 2. y = r·sinθ = 4·sin(π/3) = 4(√3/2) = 2√3.', domain: 'sequences-series', topicSlug: 'polar-coordinates', formSet: 'A' },
  { question: 'An infinite geometric series converges when:', options: ['|r| > 1', '|r| < 1', 'r = 1', 'r > 0'], correctAnswer: 1, explanation: 'An infinite geometric series converges only when the common ratio |r| < 1.', domain: 'sequences-series', topicSlug: 'sequences-arithmetic-geometric', formSet: 'B' },
  { question: 'The recursive formula aₙ = aₙ₋₁ + 5 with a₁ = 2 defines:', options: ['Geometric sequence', 'Arithmetic sequence with d = 5', 'Fibonacci sequence', 'Harmonic sequence'], correctAnswer: 1, explanation: 'Adding a constant difference (5) each time creates an arithmetic sequence.', domain: 'sequences-series', topicSlug: 'sequences-arithmetic-geometric', formSet: 'B' },
  { question: 'The polar equation r = 4sinθ represents:', options: ['A line', 'A circle', 'A cardioid', 'A spiral'], correctAnswer: 1, explanation: 'r = a·sinθ is the polar form of a circle with diameter a centered at (0, a/2).', domain: 'sequences-series', topicSlug: 'polar-coordinates', formSet: 'B' },
  { question: 'What is the common ratio of the geometric sequence 5, 15, 45, 135, …?', options: ['10', '3', '5', '30'], correctAnswer: 1, explanation: 'Common ratio r = 15/5 = 3.', domain: 'sequences-series', topicSlug: 'sequences-arithmetic-geometric', formSet: 'both' },
  { question: 'The sum formula for an arithmetic series is:', options: ['S = n/2 · (a₁ + aₙ)', 'S = a₁(1 − rⁿ)/(1 − r)', 'S = n · a₁', 'S = a₁ · rⁿ'], correctAnswer: 0, explanation: 'For an arithmetic series, S = n/2 · (first + last) = n/2 · (a₁ + aₙ).', domain: 'sequences-series', topicSlug: 'sequences-arithmetic-geometric', formSet: 'both' },
]

function seededShuffle<T>(arr: T[], rng: () => number): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function generatePreCalcDiagnosticTest(form: number): PreCalcDiagnosticTestData {
  const rng = mulberry32(form * 7919)
  const selected: PoolQuestion[] = []
  for (const domain of PRECALC_DOMAINS) {
    const domainQs = seededShuffle(questionPool.filter(q => q.domain === domain.id), rng)
    selected.push(...domainQs.slice(0, domain.questionTarget))
  }
  const questions: PreCalcDiagnosticQuestion[] = seededShuffle(selected, rng).map(q => ({
    question: q.question, options: q.options, correctAnswer: q.correctAnswer, explanation: q.explanation, domain: q.domain, topicSlug: q.topicSlug,
  }))
  return { form, questions, domains: PRECALC_DOMAINS, totalQuestions: questions.length, timeLimitMinutes: 40 }
}

export function scorePreCalcDiagnostic(
  form: number,
  questions: PreCalcDiagnosticQuestion[],
  answers: Record<number, number>,
): PreCalcDiagnosticResults {
  const domainMap = new Map<string, { correct: number; total: number }>()
  PRECALC_DOMAINS.forEach(d => domainMap.set(d.id, { correct: 0, total: 0 }))
  questions.forEach((q, i) => {
    const entry = domainMap.get(q.domain)!
    entry.total++
    if (answers[i] === q.correctAnswer) entry.correct++
  })
  let totalCorrect = 0, totalQuestions = 0
  const domainResults: PreCalcDomainResult[] = PRECALC_DOMAINS.map(d => {
    const entry = domainMap.get(d.id)!
    totalCorrect += entry.correct; totalQuestions += entry.total
    const pct = entry.total > 0 ? Math.round((entry.correct / entry.total) * 100) : 0
    return { domainId: d.id, domainName: d.name, correct: entry.correct, total: entry.total, percentage: pct, level: pct >= 75 ? 'strong' : pct >= 50 ? 'moderate' : 'weak' }
  })
  const pct = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0
  const estimatedLevel = pct >= 90 ? 'Advanced' : pct >= 75 ? 'Proficient' : pct >= 60 ? 'Developing' : 'Beginning'
  const weakAreas = domainResults.filter(d => d.level === 'weak').map(d => d.domainName)
  const moderateAreas = domainResults.filter(d => d.level === 'moderate').map(d => d.domainName)
  const strengths = domainResults.filter(d => d.level === 'strong').map(d => d.domainName)
  // Cap at 5 recommendations and prioritize: weak before moderate, then by exam weight desc.
  const recommendedTopics: PreCalcRecommendedTopic[] = []
  const MAX_RECOMMENDED = 5
  const domainWeight = (id: string) => PRECALC_DOMAINS.find(dom => dom.id === id)?.questionTarget ?? 0
  const sortedNeed = domainResults
    .filter(d => d.level === 'weak' || d.level === 'moderate')
    .sort((a, b) => {
      if (a.level !== b.level) return a.level === 'weak' ? -1 : 1
      return domainWeight(b.domainId) - domainWeight(a.domainId)
    })
  for (const d of sortedNeed) {
    if (recommendedTopics.length >= MAX_RECOMMENDED) break
    const domain = PRECALC_DOMAINS.find(dom => dom.id === d.domainId)!
    for (const slug of domain.topicSlugs) {
      if (recommendedTopics.length >= MAX_RECOMMENDED) break
      if (recommendedTopics.some(r => r.slug === slug)) continue
      recommendedTopics.push({ slug, name: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '), domainId: d.domainId, priority: d.level === 'weak' ? 'high' : 'medium' })
    }
  }
  return { form, totalCorrect, totalQuestions, percentage: pct, estimatedLevel, domains: domainResults, weakAreas, moderateAreas, strengths, recommendedTopics }
}

export function pickNextForm(previousForms: number[]): number {
  if (previousForms.length === 0) return 1
  const last = previousForms[previousForms.length - 1]
  return last >= TOTAL_FORMS ? 1 : last + 1
}
