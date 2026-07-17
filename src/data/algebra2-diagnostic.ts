/**
 * Algebra 2 Diagnostic Test Generator
 *
 * 10 alternate forms (1–10), ~30 questions spanning 6 core domains.
 */

import { mulberry32 } from './_shared/prng'

export const TOTAL_FORMS = 10

export interface Algebra2DiagnosticQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface Algebra2Domain {
  id: string
  name: string
  topicSlugs: string[]
  questionTarget: number
}

export interface Algebra2DiagnosticTestData {
  form: number
  questions: Algebra2DiagnosticQuestion[]
  domains: Algebra2Domain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface Algebra2DomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface Algebra2RecommendedTopic {
  slug: string
  name: string
  domainId: string
  priority: 'high' | 'medium'
}

export interface Algebra2DiagnosticResults {
  form: number
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedLevel: string
  domains: Algebra2DomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: Algebra2RecommendedTopic[]
}

const ALGEBRA2_DOMAINS: Algebra2Domain[] = [
  { id: 'quadratics', name: 'Quadratic Functions & Equations', topicSlugs: ['completing-the-square', 'solving-quadratics-algebra1', 'graphing-quadratics-algebra1'], questionTarget: 5 },
  { id: 'polynomials', name: 'Polynomials & Polynomial Functions', topicSlugs: ['polynomial-long-division', 'synthetic-division', 'polynomial-theorems-algebra2'], questionTarget: 5 },
  { id: 'rational-expressions', name: 'Rational Expressions & Equations', topicSlugs: ['simplifying-rationals-algebra2', 'rational-equations-algebra2', 'rational-operations-algebra2'], questionTarget: 5 },
  { id: 'exponential-log', name: 'Exponential & Logarithmic Functions', topicSlugs: ['exponential-functions-algebra2', 'logarithms-properties-alg2', 'logarithmic-equations-algebra2'], questionTarget: 5 },
  { id: 'radical-functions', name: 'Radical Functions & Complex Numbers', topicSlugs: ['radical-equations-algebra2', 'complex-numbers-intro-algebra2', 'rational-exponents-algebra2'], questionTarget: 5 },
  { id: 'sequences-probability', name: 'Sequences, Series & Probability', topicSlugs: ['geometric-sequences-algebra2', 'series-summation-algebra2', 'series-probability-alg2'], questionTarget: 5 },
]

export { ALGEBRA2_DOMAINS }

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
  // ---- Quadratic Functions & Equations ----
  { question: 'What is the vertex of y = $(x - 3)^{2}$ + 5?', options: ['(3, 5)', '(−3, 5)', '(3, −5)', '(−3, −5)'], correctAnswer: 0, explanation: 'In vertex form y = $a(x - h)^{2}$ + k, the vertex is (h, k) = (3, 5).', domain: 'quadratics', topicSlug: 'graphing-quadratics-algebra1', formSet: 'A' },
  { question: 'Solve: $x^{2}$ − 6x + 8 = 0', options: ['x = 2, 4', 'x = −2, −4', 'x = 3, 8', 'x = 1, 8'], correctAnswer: 0, explanation: 'Factor: (x − 2)(x − 4) = 0 → x = 2 or x = 4.', domain: 'quadratics', topicSlug: 'solving-quadratics-algebra1', formSet: 'A' },
  { question: 'Complete the square: $x^{2}$ + 10x + ___ = (x + ___)²', options: ['25, 5', '10, 5', '5, 25', '100, 10'], correctAnswer: 0, explanation: 'Half of 10 is 5, and $5^{2}$ = 25. So $x^{2}$ + 10x + 25 = $(x + 5)^{2}$.', domain: 'quadratics', topicSlug: 'completing-the-square', formSet: 'A' },
  { question: 'The discriminant of $2x^{2}$ + 3x + 5 = 0 is:', options: ['−31', '31', '49', '−49'], correctAnswer: 0, explanation: 'D = $b^{2}$ − 4ac = 9 − 40 = −31. Negative means no real solutions.', domain: 'quadratics', topicSlug: 'solving-quadratics-algebra1', formSet: 'B' },
  { question: 'A parabola opens downward when:', options: ['a < 0', 'a > 0', 'b < 0', 'c < 0'], correctAnswer: 0, explanation: 'In y = $ax^{2}$ + bx + c, if a < 0 the parabola opens downward.', domain: 'quadratics', topicSlug: 'graphing-quadratics-algebra1', formSet: 'B' },
  { question: 'Solve using the quadratic formula: $x^{2}$ + 2x − 15 = 0', options: ['x = 3, −5', 'x = −3, 5', 'x = 5, −3', 'x = 15, −1'], correctAnswer: 0, explanation: 'x = (−2 ± $\\sqrt{4 + 60}$)/2 = (−2 ± 8)/2. So x = 3 or x = −5.', domain: 'quadratics', topicSlug: 'solving-quadratics-algebra1', formSet: 'B' },
  { question: 'The axis of symmetry of y = $x^{2}$ − 8x + 12 is:', options: ['x = 4', 'x = −4', 'x = 8', 'x = 6'], correctAnswer: 0, explanation: 'Axis of symmetry x = −b/(2a) = 8/2 = 4.', domain: 'quadratics', topicSlug: 'graphing-quadratics-algebra1', formSet: 'both' },
  { question: 'If the discriminant equals zero, the quadratic has:', options: ['One repeated real root', 'Two distinct real roots', 'No real roots', 'Two complex roots'], correctAnswer: 0, explanation: 'D = 0 means the quadratic touches the x-axis at exactly one point (repeated root).', domain: 'quadratics', topicSlug: 'solving-quadratics-algebra1', formSet: 'both' },

  // ---- Polynomials & Polynomial Functions ----
  { question: 'Divide: $(x^{3} - 8)$ by (x − 2)', options: ['$x^{2}$ + 2x + 4', '$x^{2}$ − 2x + 4', '$x^{2}$ + 4', '$x^{2}$ − 4x + 4'], correctAnswer: 0, explanation: '$x^{3}$ − 8 = $(x - 2)(x^{2} + 2x + 4)$. This is a sum/difference of cubes pattern.', domain: 'polynomials', topicSlug: 'polynomial-long-division', formSet: 'A' },
  { question: 'Use synthetic division to find the remainder when $x^{3}$ + $2x^{2}$ − 5x + 1 is divided by (x − 1):', options: ['−1', '1', '−3', '3'], correctAnswer: 0, explanation: 'By the Remainder Theorem, f(1) = 1 + 2 − 5 + 1 = −1.', domain: 'polynomials', topicSlug: 'synthetic-division', formSet: 'A' },
  { question: 'A polynomial of degree 5 has at most how many turning points?', options: ['4', '5', '3', '6'], correctAnswer: 0, explanation: 'A degree-n polynomial has at most n − 1 turning points.', domain: 'polynomials', topicSlug: 'polynomial-theorems-algebra2', formSet: 'A' },
  { question: 'If f(x) = $x^{4}$ − $5x^{2}$ + 4, find all zeros:', options: ['±1, ±2', '1, 2, 3, 4', '0, ±1, ±2', '±1, ±4'], correctAnswer: 0, explanation: 'Let u = $x^{2}$: $u^{2}$ − 5u + 4 = (u − 1)(u − 4) = 0. u = 1 → x = ±1; u = 4 → x = ±2.', domain: 'polynomials', topicSlug: 'polynomial-theorems-algebra2', formSet: 'B' },
  { question: 'The Rational Root Theorem says possible rational roots of $2x^{3}$ + 3x − 6 are ± factors of ___ over ± factors of ___:', options: ['6, 2', '2, 6', '3, 2', '6, 3'], correctAnswer: 0, explanation: 'Possible roots = ±(factors of constant)/(factors of leading coefficient) = ±(factors of 6)/(factors of 2).', domain: 'polynomials', topicSlug: 'polynomial-theorems-algebra2', formSet: 'B' },
  { question: 'Factor: $x^{3}$ + 27', options: ['$(x + 3)(x^{2} - 3x + 9)$', '$(x + 3)(x^{2} + 3x + 9)$', '$(x - 3)(x^{2} + 9)$', '$(x + 3)^{3}$'], correctAnswer: 0, explanation: 'Sum of cubes: $a^{3}$ + $b^{3}$ = $(a + b)(a^{2} - ab + b^{2})$. Here a = x, b = 3.', domain: 'polynomials', topicSlug: 'polynomial-long-division', formSet: 'B' },
  { question: 'The end behavior of f(x) = $2x^{4}$ − $x^{3}$ + 1 is:', options: ['Both ends up', 'Both ends down', 'Left down, right up', 'Left up, right down'], correctAnswer: 0, explanation: 'Even degree with positive leading coefficient → both ends point up.', domain: 'polynomials', topicSlug: 'polynomial-theorems-algebra2', formSet: 'both' },
  { question: 'If (x − 3) is a factor of f(x), then f(3) = ?', options: ['0', '3', '−3', 'Undefined'], correctAnswer: 0, explanation: 'By the Factor Theorem, if (x − c) is a factor, then f(c) = 0.', domain: 'polynomials', topicSlug: 'synthetic-division', formSet: 'both' },

  // ---- Rational Expressions & Equations ----
  { question: 'Simplify: $(x^{2} - 9)/(x + 3)$', options: ['x − 3', 'x + 3', '$x^{2}$ − 3', '(x − 3)/(x + 3)'], correctAnswer: 0, explanation: '$(x^{2} - 9)/(x + 3)$ = (x + 3)(x − 3)/(x + 3) = x − 3, where x ≠ −3.', domain: 'rational-expressions', topicSlug: 'simplifying-rationals-algebra2', formSet: 'A' },
  { question: 'Solve: 2/x + 3/x = 10', options: ['x = 1/2', 'x = 2', 'x = 5', 'x = 10'], correctAnswer: 0, explanation: '5/x = 10 → x = 5/10 = 1/2.', domain: 'rational-expressions', topicSlug: 'rational-equations-algebra2', formSet: 'A' },
  { question: 'The domain of f(x) = $1/(x^{2} - 4)$ excludes:', options: ['x = ±2', 'x = 4', 'x = 0', 'x = ±4'], correctAnswer: 0, explanation: '$x^{2}$ − 4 = 0 → x = ±2. Undefined at x = 2 and x = −2.', domain: 'rational-expressions', topicSlug: 'simplifying-rationals-algebra2', formSet: 'A' },
  { question: 'Simplify: (1/a + 1/b)/(1/ab)', options: ['a + b', 'ab', '1/(a+b)', 'a − b'], correctAnswer: 0, explanation: '(1/a + 1/b) = (a + b)/(ab). Divided by 1/(ab) = (a + b)/(ab) × ab = a + b.', domain: 'rational-expressions', topicSlug: 'rational-operations-algebra2', formSet: 'B' },
  { question: 'Solve: x/(x−2) = 4/(x−2) + 1', options: ['x = 6', 'x = 2', 'x = 4', 'No solution'], correctAnswer: 3, explanation: 'Multiply both sides by (x−2): x = 4 + (x−2) = x + 2, giving 0 = 2, which is a contradiction. No solution.', domain: 'rational-expressions', topicSlug: 'rational-equations-algebra2', formSet: 'B' },
  { question: 'Add: 2/(x+1) + 3/(x−1)', options: ['(5x − 1)/((x+1)(x−1))', '5/(2x)', '(5x+1)/((x+1)(x−1))', '$5/(x^{2}-1)$'], correctAnswer: 2, explanation: 'LCD = (x+1)(x−1). 2(x−1) + 3(x+1) = 2x − 2 + 3x + 3 = 5x + 1. So the answer is (5x+1)/((x+1)(x−1)).', domain: 'rational-expressions', topicSlug: 'simplifying-rationals-algebra2', formSet: 'B' },
  { question: 'A vertical asymptote of f(x) = $(x+1)/(x^{2}-1)$ is at:', options: ['x = 1 only (hole at x = −1)', 'x = ±1', 'x = −1 only', 'No vertical asymptote'], correctAnswer: 0, explanation: '$x^{2}-1$ = (x+1)(x−1). Since (x+1) cancels, there\'s a hole at x = −1 and VA at x = 1.', domain: 'rational-expressions', topicSlug: 'simplifying-rationals-algebra2', formSet: 'both' },
  { question: 'What is the horizontal asymptote of f(x) = (2x + 1)/(x − 3)?', options: ['y = 2', 'y = 0', 'y = −1/3', 'No horizontal asymptote'], correctAnswer: 0, explanation: 'Same degree numerator and denominator: HA = leading coefficients ratio = 2/1 = 2.', domain: 'rational-expressions', topicSlug: 'rational-equations-algebra2', formSet: 'both' },

  // ---- Exponential & Logarithmic Functions ----
  { question: 'Solve: $3^{x}$ = 81', options: ['x = 4', 'x = 3', 'x = 27', 'x = 5'], correctAnswer: 0, explanation: '$3^{4}$ = 81, so x = 4.', domain: 'exponential-log', topicSlug: 'exponential-functions-algebra2', formSet: 'A' },
  { question: '$\\log_{3}(27)$ =', options: ['3', '9', '27', '1/3'], correctAnswer: 0, explanation: '$3^{3}$ = 27, so $\\log_{3}(27)$ = 3.', domain: 'exponential-log', topicSlug: 'logarithms-properties-alg2', formSet: 'A' },
  { question: 'Solve: log(x) = 3', options: ['x = 1000', 'x = 3', 'x = 30', 'x = $10^{3}$'], correctAnswer: 0, explanation: 'log base 10: $10^{3}$ = 1000. (Both A and D are correct; A is the simplified form.)', domain: 'exponential-log', topicSlug: 'logarithmic-equations-algebra2', formSet: 'A' },
  { question: 'A population doubles every 5 years. If it starts at 100, the model is:', options: ['P = 100 · $2^{t/5}$', 'P = 100 · $2^{5t}$', 'P = 200t', 'P = $100e^{5t}$'], correctAnswer: 0, explanation: 'Doubling period of 5: P = 100 · $2^{t/5}$.', domain: 'exponential-log', topicSlug: 'exponential-functions-algebra2', formSet: 'B' },
  { question: 'Expand: $\\log (x^{2}y/z)$', options: ['2log(x) + log(y) − log(z)', 'log(2x) + log(y) − log(z)', '2log(xy) − log(z)', '$\\log (x^{2})$ + log(y/z)'], correctAnswer: 0, explanation: '$\\log (x^{2}y/z)$ = $\\log (x^{2})$ + log(y) − log(z) = 2log(x) + log(y) − log(z).', domain: 'exponential-log', topicSlug: 'logarithms-properties-alg2', formSet: 'B' },
  { question: 'Solve: $2^{x+1}$ = 32', options: ['x = 4', 'x = 5', 'x = 3', 'x = 16'], correctAnswer: 0, explanation: '32 = $2^{5}$, so x + 1 = 5 → x = 4.', domain: 'exponential-log', topicSlug: 'logarithmic-equations-algebra2', formSet: 'B' },
  { question: 'The function f(x) = eˣ has an inverse of:', options: ['f⁻¹(x) = ln(x)', 'f⁻¹(x) = 1/eˣ', 'f⁻¹(x) = log(x)', 'f⁻¹(x) = e⁻ˣ'], correctAnswer: 0, explanation: 'The natural exponential and natural log are inverses: e and ln.', domain: 'exponential-log', topicSlug: 'logarithms-properties-alg2', formSet: 'both' },
  { question: 'log(1) =', options: ['0', '1', '10', 'Undefined'], correctAnswer: 0, explanation: 'Any log base b of 1 equals 0, because $b^{0}$ = 1.', domain: 'exponential-log', topicSlug: 'logarithms-properties-alg2', formSet: 'both' },

  // ---- Radical Functions & Complex Numbers ----
  { question: 'Simplify: $\\sqrt{x^{2}}$ for all real x', options: ['|x|', 'x', '−x', '$x^{2}$'], correctAnswer: 0, explanation: '$\\sqrt{x^{2}}$ = |x| because the square root returns the non-negative value.', domain: 'radical-functions', topicSlug: 'radical-equations-algebra2', formSet: 'A' },
  { question: 'Simplify: $i^{2}$ =', options: ['−1', '1', 'i', '−i'], correctAnswer: 0, explanation: 'By definition, i = $\\sqrt{-1}$, so $i^{2}$ = −1.', domain: 'radical-functions', topicSlug: 'complex-numbers-intro-algebra2', formSet: 'A' },
  { question: 'Rewrite $x^{2/3}$ in radical form:', options: ['∛$(x^{2})$', '$\\sqrt{x^{3}}$', '(∛x)$ {}^{3}$', '$x^{2}/3$'], correctAnswer: 0, explanation: '$x^{a/b}$ = $ {}^{b}\\sqrt{x^{a}}$. So $x^{2/3}$ = ∛$(x^{2})$.', domain: 'radical-functions', topicSlug: 'rational-exponents-algebra2', formSet: 'A' },
  { question: '(3 + 2i)(3 − 2i) =', options: ['13', '9 − 4i', '5', '9 + $4i^{2}$'], correctAnswer: 0, explanation: 'Conjugate product: (a + bi)(a − bi) = $a^{2}$ + $b^{2}$ = 9 + 4 = 13.', domain: 'radical-functions', topicSlug: 'complex-numbers-intro-algebra2', formSet: 'B' },
  { question: 'Solve: $\\sqrt{2x + 3}$ = 5', options: ['x = 11', 'x = 1', 'x = 14', 'x = 4'], correctAnswer: 0, explanation: 'Square both sides: 2x + 3 = 25 → 2x = 22 → x = 11. Check: $\\sqrt{25}$ = 5 ✓.', domain: 'radical-functions', topicSlug: 'radical-equations-algebra2', formSet: 'B' },
  { question: 'Simplify: $8^{-2/3}$', options: ['1/4', '−4', '4', '1/8'], correctAnswer: 0, explanation: '$8^{1/3}$ = 2. $8^{2/3}$ = 4. $8^{-2/3}$ = 1/4.', domain: 'radical-functions', topicSlug: 'rational-exponents-algebra2', formSet: 'B' },
  { question: 'The sum (4 + 3i) + (2 − 5i) =', options: ['6 − 2i', '6 + 8i', '2 + 8i', '6 − 8i'], correctAnswer: 0, explanation: 'Add real parts: 4 + 2 = 6. Add imaginary: 3i + (−5i) = −2i. Answer: 6 − 2i.', domain: 'radical-functions', topicSlug: 'complex-numbers-intro-algebra2', formSet: 'both' },
  { question: 'Which is equivalent to $x^{1/2}$ · $x^{1/3}$?', options: ['$x^{5/6}$', '$x^{1/6}$', '$x^{1/5}$', '$x^{2/5}$'], correctAnswer: 0, explanation: 'Add exponents: 1/2 + 1/3 = 3/6 + 2/6 = 5/6.', domain: 'radical-functions', topicSlug: 'rational-exponents-algebra2', formSet: 'both' },

  // ---- Sequences, Series & Probability ----
  { question: 'Find the 8th term of the arithmetic sequence: 5, 9, 13, 17, …', options: ['33', '37', '29', '41'], correctAnswer: 0, explanation: '$a_{8}$ = $a_{1}$ + (n−1)d = 5 + 7(4) = 5 + 28 = 33.', domain: 'sequences-probability', topicSlug: 'geometric-sequences-algebra2', formSet: 'A' },
  { question: 'The coefficient of $x^{2}$ in $(x + 2)^{4}$ is:', options: ['24', '6', '12', '8'], correctAnswer: 0, explanation: 'C(4,2)·$x^{2}\\cdot 2^{2}$ = 6·4 = 24.', domain: 'sequences-probability', topicSlug: 'series-summation-algebra2', formSet: 'A' },
  { question: 'How many ways can 5 books be arranged on a shelf?', options: ['120', '25', '5', '60'], correctAnswer: 0, explanation: '5! = 5 × 4 × 3 × 2 × 1 = 120.', domain: 'sequences-probability', topicSlug: 'series-probability-alg2', formSet: 'A' },
  { question: 'Find the sum: Σ(k=1 to 4) of $3\\cdot 2^{k-1}$', options: ['45', '24', '48', '30'], correctAnswer: 0, explanation: '3(1) + 3(2) + 3(4) + 3(8) = 3 + 6 + 12 + 24 = 45.', domain: 'sequences-probability', topicSlug: 'geometric-sequences-algebra2', formSet: 'B' },
  { question: 'In the expansion of $(a + b)^{6}$, how many terms are there?', options: ['7', '6', '12', '5'], correctAnswer: 0, explanation: '$(a + b)^{n}$ has n + 1 terms. So $(a + b)^{6}$ has 7 terms.', domain: 'sequences-probability', topicSlug: 'series-summation-algebra2', formSet: 'B' },
  { question: 'A committee of 3 is chosen from 8 people. How many ways?', options: ['56', '336', '24', '8'], correctAnswer: 0, explanation: 'C(8,3) = 8!/(3!·5!) = 56.', domain: 'sequences-probability', topicSlug: 'series-probability-alg2', formSet: 'B' },
  { question: 'The common ratio of 2, 6, 18, 54, … is:', options: ['3', '4', '2', '6'], correctAnswer: 0, explanation: 'r = 6/2 = 3.', domain: 'sequences-probability', topicSlug: 'geometric-sequences-algebra2', formSet: 'both' },
  { question: 'C(n, 0) for any n ≥ 0 equals:', options: ['1', '0', 'n', 'n!'], correctAnswer: 0, explanation: 'C(n, 0) = 1 for any n. There is exactly 1 way to choose nothing.', domain: 'sequences-probability', topicSlug: 'series-probability-alg2', formSet: 'both' },
]

function seededShuffle<T>(arr: T[], rng: () => number): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function generateAlgebra2DiagnosticTest(form: number): Algebra2DiagnosticTestData {
  const rng = mulberry32(form * 7919)
  const selected: PoolQuestion[] = []
  for (const domain of ALGEBRA2_DOMAINS) {
    const domainQs = seededShuffle(questionPool.filter(q => q.domain === domain.id), rng)
    selected.push(...domainQs.slice(0, domain.questionTarget))
  }
  const questions: Algebra2DiagnosticQuestion[] = seededShuffle(selected, rng).map(q => ({
    question: q.question, options: q.options, correctAnswer: q.correctAnswer, explanation: q.explanation, domain: q.domain, topicSlug: q.topicSlug,
  }))
  return { form, questions, domains: ALGEBRA2_DOMAINS, totalQuestions: questions.length, timeLimitMinutes: 40 }
}

export function scoreAlgebra2Diagnostic(
  form: number,
  questions: Algebra2DiagnosticQuestion[],
  answers: Record<number, number>,
): Algebra2DiagnosticResults {
  const domainMap = new Map<string, { correct: number; total: number }>()
  ALGEBRA2_DOMAINS.forEach(d => domainMap.set(d.id, { correct: 0, total: 0 }))
  questions.forEach((q, i) => {
    const entry = domainMap.get(q.domain)!
    entry.total++
    if (answers[i] === q.correctAnswer) entry.correct++
  })
  let totalCorrect = 0, totalQuestions = 0
  const domainResults: Algebra2DomainResult[] = ALGEBRA2_DOMAINS.map(d => {
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
  const recommendedTopics: Algebra2RecommendedTopic[] = []
  const MAX_RECOMMENDED = 5
  const domainWeight = (id: string) => ALGEBRA2_DOMAINS.find(dom => dom.id === id)?.questionTarget ?? 0
  const sortedNeed = domainResults
    .filter(d => d.level === 'weak' || d.level === 'moderate')
    .sort((a, b) => {
      if (a.level !== b.level) return a.level === 'weak' ? -1 : 1
      return domainWeight(b.domainId) - domainWeight(a.domainId)
    })
  for (const d of sortedNeed) {
    if (recommendedTopics.length >= MAX_RECOMMENDED) break
    const domain = ALGEBRA2_DOMAINS.find(dom => dom.id === d.domainId)!
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
