/**
 * Algebra 1 Diagnostic Test Generator
 *
 * Two alternate forms (A / B), ~30 questions spanning 6 core domains.
 * Weak areas map to topic slugs for review.
 */

export interface Algebra1DiagnosticQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface Algebra1Domain {
  id: string
  name: string
  topicSlugs: string[]
  questionTarget: number
}

export interface Algebra1DiagnosticTestData {
  form: 'A' | 'B'
  questions: Algebra1DiagnosticQuestion[]
  domains: Algebra1Domain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface Algebra1DomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface Algebra1RecommendedTopic {
  slug: string
  name: string
  domainId: string
  priority: 'high' | 'medium'
}

export interface Algebra1DiagnosticResults {
  form: 'A' | 'B'
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedLevel: string
  domains: Algebra1DomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: Algebra1RecommendedTopic[]
}

const ALGEBRA1_DOMAINS: Algebra1Domain[] = [
  { id: 'expressions-equations', name: 'Expressions & Equations', topicSlugs: ['algebraic-expressions', 'one-step-equations', 'multi-step-equations'], questionTarget: 5 },
  { id: 'linear-functions', name: 'Linear Functions & Graphing', topicSlugs: ['slope-intercept-form', 'point-slope-form', 'graphing-linear-equations'], questionTarget: 5 },
  { id: 'systems', name: 'Systems of Equations', topicSlugs: ['substitution-method', 'elimination-method', 'systems-word-problems'], questionTarget: 5 },
  { id: 'inequalities', name: 'Inequalities', topicSlugs: ['linear-inequalities', 'compound-inequalities', 'absolute-value-inequalities'], questionTarget: 5 },
  { id: 'polynomials-factoring', name: 'Polynomials & Factoring', topicSlugs: ['polynomial-operations', 'factoring-trinomials', 'factoring-special-products'], questionTarget: 5 },
  { id: 'exponents-radicals', name: 'Exponents & Radicals', topicSlugs: ['exponent-rules', 'scientific-notation', 'simplifying-radicals'], questionTarget: 5 },
]

export { ALGEBRA1_DOMAINS }

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
  // ---- Expressions & Equations ----
  { question: 'Simplify: 3(2x − 4) + 5x', options: ['11x − 12', '11x − 4', '6x − 12', '11x + 12'], correctAnswer: 0, explanation: '3(2x − 4) + 5x = 6x − 12 + 5x = 11x − 12.', domain: 'expressions-equations', topicSlug: 'algebraic-expressions', formSet: 'A' },
  { question: 'Solve: 2x + 7 = 15', options: ['x = 4', 'x = 11', 'x = 8', 'x = 3'], correctAnswer: 0, explanation: '2x = 15 − 7 = 8, so x = 4.', domain: 'expressions-equations', topicSlug: 'one-step-equations', formSet: 'A' },
  { question: 'Solve: 3(x + 2) = 2x + 10', options: ['x = 4', 'x = 6', 'x = 2', 'x = 8'], correctAnswer: 0, explanation: '3x + 6 = 2x + 10 → x = 4.', domain: 'expressions-equations', topicSlug: 'multi-step-equations', formSet: 'A' },
  { question: 'Evaluate 2a² − 3b when a = 3 and b = 2:', options: ['12', '15', '6', '24'], correctAnswer: 0, explanation: '2(9) − 3(2) = 18 − 6 = 12.', domain: 'expressions-equations', topicSlug: 'algebraic-expressions', formSet: 'B' },
  { question: 'Solve: x/4 = 7', options: ['x = 28', 'x = 11', 'x = 3', 'x = 1.75'], correctAnswer: 0, explanation: 'Multiply both sides by 4: x = 28.', domain: 'expressions-equations', topicSlug: 'one-step-equations', formSet: 'B' },
  { question: 'Solve: 5x − 3 = 2(x + 6)', options: ['x = 5', 'x = 3', 'x = 9', 'x = 1'], correctAnswer: 0, explanation: '5x − 3 = 2x + 12 → 3x = 15 → x = 5.', domain: 'expressions-equations', topicSlug: 'multi-step-equations', formSet: 'B' },
  { question: 'Combine like terms: 4x² + 3x − 2x² + 5x − 1', options: ['2x² + 8x − 1', '6x² + 8x − 1', '2x² + 2x − 1', '4x² + 8x − 1'], correctAnswer: 0, explanation: '(4x² − 2x²) + (3x + 5x) − 1 = 2x² + 8x − 1.', domain: 'expressions-equations', topicSlug: 'algebraic-expressions', formSet: 'both' },
  { question: 'If 2(x − 3) + 4 = 0, then x =', options: ['1', '2', '3', '−1'], correctAnswer: 0, explanation: '2x − 6 + 4 = 0 → 2x − 2 = 0 → x = 1.', domain: 'expressions-equations', topicSlug: 'multi-step-equations', formSet: 'both' },

  // ---- Linear Functions & Graphing ----
  { question: 'What is the slope of y = 3x − 7?', options: ['3', '−7', '7', '−3'], correctAnswer: 0, explanation: 'In y = mx + b form, the slope m = 3.', domain: 'linear-functions', topicSlug: 'slope-intercept-form', formSet: 'A' },
  { question: 'Find the slope between (2, 5) and (6, 13):', options: ['2', '4', '8', '1/2'], correctAnswer: 0, explanation: 'Slope = (13 − 5)/(6 − 2) = 8/4 = 2.', domain: 'linear-functions', topicSlug: 'graphing-linear-equations', formSet: 'A' },
  { question: 'Write the equation in slope-intercept form: 2x + y = 8', options: ['y = −2x + 8', 'y = 2x + 8', 'y = 2x − 8', 'y = −2x − 8'], correctAnswer: 0, explanation: 'y = −2x + 8.', domain: 'linear-functions', topicSlug: 'slope-intercept-form', formSet: 'A' },
  { question: 'A line passes through (3, 1) with slope 2. Its equation is:', options: ['y = 2x − 5', 'y = 2x + 5', 'y = 2x − 1', 'y = 2x + 1'], correctAnswer: 0, explanation: 'y − 1 = 2(x − 3) → y = 2x − 6 + 1 = 2x − 5.', domain: 'linear-functions', topicSlug: 'point-slope-form', formSet: 'B' },
  { question: 'What is the y-intercept of 3x − 2y = 12?', options: ['(0, −6)', '(0, 6)', '(4, 0)', '(0, 12)'], correctAnswer: 0, explanation: 'Set x = 0: −2y = 12 → y = −6. Y-intercept is (0, −6).', domain: 'linear-functions', topicSlug: 'graphing-linear-equations', formSet: 'B' },
  { question: 'Two parallel lines have:', options: ['The same slope', 'Opposite slopes', 'Perpendicular slopes', 'No relationship'], correctAnswer: 0, explanation: 'Parallel lines have equal slopes.', domain: 'linear-functions', topicSlug: 'slope-intercept-form', formSet: 'B' },
  { question: 'The slope of a horizontal line is:', options: ['0', 'Undefined', '1', '−1'], correctAnswer: 0, explanation: 'Horizontal lines have zero slope (no rise).', domain: 'linear-functions', topicSlug: 'graphing-linear-equations', formSet: 'both' },
  { question: 'If y = −½x + 3, what is the slope of a perpendicular line?', options: ['2', '−2', '½', '−½'], correctAnswer: 0, explanation: 'Perpendicular slopes are negative reciprocals: −1/(−½) = 2.', domain: 'linear-functions', topicSlug: 'slope-intercept-form', formSet: 'both' },

  // ---- Systems of Equations ----
  { question: 'Solve by substitution: y = 2x, x + y = 9', options: ['(3, 6)', '(6, 3)', '(4.5, 9)', '(2, 4)'], correctAnswer: 0, explanation: 'x + 2x = 9 → 3x = 9 → x = 3, y = 6.', domain: 'systems', topicSlug: 'substitution-method', formSet: 'A' },
  { question: 'Solve: x + y = 10, x − y = 4', options: ['(7, 3)', '(3, 7)', '(5, 5)', '(8, 2)'], correctAnswer: 0, explanation: 'Add equations: 2x = 14 → x = 7, y = 3.', domain: 'systems', topicSlug: 'elimination-method', formSet: 'A' },
  { question: 'A system with no solution has lines that are:', options: ['Parallel', 'Intersecting', 'Perpendicular', 'Identical'], correctAnswer: 0, explanation: 'No solution means the lines never intersect — they are parallel.', domain: 'systems', topicSlug: 'systems-word-problems', formSet: 'A' },
  { question: 'Solve by elimination: 2x + 3y = 12, 2x − y = 4', options: ['(3, 2)', '(2, 3)', '(4, 1)', '(1, 4)'], correctAnswer: 0, explanation: 'Subtract: 4y = 8 → y = 2, then 2x + 6 = 12 → x = 3.', domain: 'systems', topicSlug: 'elimination-method', formSet: 'B' },
  { question: 'Two movie tickets and one popcorn cost $25. One ticket and one popcorn cost $15. What does one ticket cost?', options: ['$10', '$5', '$15', '$12.50'], correctAnswer: 0, explanation: '2t + p = 25 and t + p = 15. Subtract: t = 10.', domain: 'systems', topicSlug: 'systems-word-problems', formSet: 'B' },
  { question: 'A system with infinitely many solutions has lines that are:', options: ['Coincident (same line)', 'Parallel', 'Perpendicular', 'Intersecting at one point'], correctAnswer: 0, explanation: 'Infinitely many solutions means the equations represent the same line.', domain: 'systems', topicSlug: 'systems-word-problems', formSet: 'B' },
  { question: 'How many solutions does the system y = 2x + 1, y = 2x + 5 have?', options: ['0 (no solution)', '1', '2', 'Infinitely many'], correctAnswer: 0, explanation: 'Same slope (2) but different y-intercepts → parallel lines → no solution.', domain: 'systems', topicSlug: 'substitution-method', formSet: 'both' },
  { question: 'Solve: 3x − y = 7, y = x + 1', options: ['(4, 5)', '(3, 4)', '(2, 3)', '(5, 6)'], correctAnswer: 0, explanation: '3x − (x + 1) = 7 → 2x = 8 → x = 4, y = 5.', domain: 'systems', topicSlug: 'substitution-method', formSet: 'both' },

  // ---- Inequalities ----
  { question: 'Solve: 3x − 5 > 7', options: ['x > 4', 'x > 2', 'x < 4', 'x > −4'], correctAnswer: 0, explanation: '3x > 12 → x > 4.', domain: 'inequalities', topicSlug: 'linear-inequalities', formSet: 'A' },
  { question: 'When you multiply both sides of an inequality by a negative number, you must:', options: ['Flip the inequality sign', 'Keep the sign the same', 'Change to equal sign', 'Drop the inequality'], correctAnswer: 0, explanation: 'Multiplying or dividing by a negative reverses the inequality direction.', domain: 'inequalities', topicSlug: 'linear-inequalities', formSet: 'A' },
  { question: 'Solve: −2x ≤ 8', options: ['x ≥ −4', 'x ≤ −4', 'x ≥ 4', 'x ≤ 4'], correctAnswer: 0, explanation: 'Divide by −2 and flip: x ≥ −4.', domain: 'inequalities', topicSlug: 'linear-inequalities', formSet: 'A' },
  { question: 'Solve: |x − 3| < 5', options: ['−2 < x < 8', 'x < 8', 'x > −2', 'x < −2 or x > 8'], correctAnswer: 0, explanation: '−5 < x − 3 < 5 → −2 < x < 8.', domain: 'inequalities', topicSlug: 'absolute-value-inequalities', formSet: 'B' },
  { question: 'Solve: 2 < x + 1 ≤ 6', options: ['1 < x ≤ 5', '1 ≤ x < 5', '3 < x ≤ 7', '1 < x < 5'], correctAnswer: 0, explanation: 'Subtract 1 from all parts: 1 < x ≤ 5.', domain: 'inequalities', topicSlug: 'compound-inequalities', formSet: 'B' },
  { question: 'The graph of x ≤ 3 on a number line uses:', options: ['A closed dot at 3, shading left', 'An open dot at 3, shading left', 'A closed dot at 3, shading right', 'An open dot at 3, shading right'], correctAnswer: 0, explanation: '≤ means x can equal 3 (closed dot), and values go left (less than).', domain: 'inequalities', topicSlug: 'linear-inequalities', formSet: 'B' },
  { question: '|x| > 4 means:', options: ['x > 4 or x < −4', '−4 < x < 4', 'x > 4', 'x < −4'], correctAnswer: 0, explanation: 'Absolute value greater than: x > 4 or x < −4.', domain: 'inequalities', topicSlug: 'absolute-value-inequalities', formSet: 'both' },
  { question: 'Which value satisfies 2x − 1 ≥ 9?', options: ['x = 5', 'x = 4', 'x = 3', 'x = 2'], correctAnswer: 0, explanation: '2(5) − 1 = 9 ≥ 9 ✓. (And 2x ≥ 10 → x ≥ 5).', domain: 'inequalities', topicSlug: 'linear-inequalities', formSet: 'both' },

  // ---- Polynomials & Factoring ----
  { question: 'Expand: (x + 3)(x + 5)', options: ['x² + 8x + 15', 'x² + 15x + 8', 'x² + 8x + 8', 'x² + 2x + 15'], correctAnswer: 0, explanation: 'FOIL: x² + 5x + 3x + 15 = x² + 8x + 15.', domain: 'polynomials-factoring', topicSlug: 'polynomial-operations', formSet: 'A' },
  { question: 'Factor: x² + 7x + 12', options: ['(x + 3)(x + 4)', '(x + 2)(x + 6)', '(x + 1)(x + 12)', '(x − 3)(x − 4)'], correctAnswer: 0, explanation: 'Find two numbers that multiply to 12 and add to 7: 3 and 4.', domain: 'polynomials-factoring', topicSlug: 'factoring-trinomials', formSet: 'A' },
  { question: 'Factor: x² − 9', options: ['(x + 3)(x − 3)', '(x − 3)²', '(x + 9)(x − 1)', 'Cannot be factored'], correctAnswer: 0, explanation: 'Difference of squares: a² − b² = (a + b)(a − b). Here x² − 9 = (x + 3)(x − 3).', domain: 'polynomials-factoring', topicSlug: 'factoring-special-products', formSet: 'A' },
  { question: 'Factor: 2x² + 5x − 3', options: ['(2x − 1)(x + 3)', '(2x + 1)(x − 3)', '(2x + 3)(x − 1)', '(2x − 3)(x + 1)'], correctAnswer: 0, explanation: '2x² + 5x − 3 = (2x − 1)(x + 3). Check: 2x² + 6x − x − 3 = 2x² + 5x − 3 ✓.', domain: 'polynomials-factoring', topicSlug: 'factoring-trinomials', formSet: 'B' },
  { question: 'Expand: (x − 4)²', options: ['x² − 8x + 16', 'x² − 4x + 16', 'x² − 8x − 16', 'x² + 8x + 16'], correctAnswer: 0, explanation: '(x − 4)² = x² − 2(4)x + 16 = x² − 8x + 16.', domain: 'polynomials-factoring', topicSlug: 'factoring-special-products', formSet: 'B' },
  { question: 'Factor completely: 3x² − 12', options: ['3(x + 2)(x − 2)', '3(x² − 4)', '(3x + 6)(x − 2)', '3(x − 2)²'], correctAnswer: 0, explanation: '3x² − 12 = 3(x² − 4) = 3(x + 2)(x − 2).', domain: 'polynomials-factoring', topicSlug: 'factoring-special-products', formSet: 'B' },
  { question: 'Solve: x² − 5x + 6 = 0', options: ['x = 2 or x = 3', 'x = 1 or x = 6', 'x = −2 or x = −3', 'x = 5 or x = 1'], correctAnswer: 0, explanation: 'Factor: (x − 2)(x − 3) = 0 → x = 2 or x = 3.', domain: 'polynomials-factoring', topicSlug: 'factoring-trinomials', formSet: 'both' },
  { question: 'The degree of 4x³ − 2x² + x − 7 is:', options: ['3', '4', '2', '7'], correctAnswer: 0, explanation: 'The degree is the highest power of x, which is 3.', domain: 'polynomials-factoring', topicSlug: 'polynomial-operations', formSet: 'both' },

  // ---- Exponents & Radicals ----
  { question: 'Simplify: x³ · x⁵', options: ['x⁸', 'x¹⁵', 'x²', '2x⁸'], correctAnswer: 0, explanation: 'When multiplying same base, add exponents: x³⁺⁵ = x⁸.', domain: 'exponents-radicals', topicSlug: 'exponent-rules', formSet: 'A' },
  { question: 'Write 0.00045 in scientific notation:', options: ['4.5 × 10⁻⁴', '45 × 10⁻⁵', '4.5 × 10⁴', '0.45 × 10⁻³'], correctAnswer: 0, explanation: 'Move decimal 4 places right: 4.5 × 10⁻⁴.', domain: 'exponents-radicals', topicSlug: 'scientific-notation', formSet: 'A' },
  { question: 'Simplify: √(50)', options: ['5√2', '25√2', '10√5', '2√25'], correctAnswer: 0, explanation: '√50 = √(25 · 2) = 5√2.', domain: 'exponents-radicals', topicSlug: 'simplifying-radicals', formSet: 'A' },
  { question: 'Simplify: (x²)⁴', options: ['x⁸', 'x⁶', '4x²', 'x¹⁶'], correctAnswer: 0, explanation: 'Power of a power: multiply exponents. (x²)⁴ = x²ˣ⁴ = x⁸.', domain: 'exponents-radicals', topicSlug: 'exponent-rules', formSet: 'B' },
  { question: 'What is 2⁻³?', options: ['1/8', '−8', '−6', '8'], correctAnswer: 0, explanation: '2⁻³ = 1/2³ = 1/8.', domain: 'exponents-radicals', topicSlug: 'exponent-rules', formSet: 'B' },
  { question: 'Simplify: √(72)', options: ['6√2', '8√9', '3√8', '12√2'], correctAnswer: 0, explanation: '√72 = √(36 · 2) = 6√2.', domain: 'exponents-radicals', topicSlug: 'simplifying-radicals', formSet: 'B' },
  { question: 'x⁰ = (for x ≠ 0)', options: ['1', '0', 'x', 'Undefined'], correctAnswer: 0, explanation: 'Any non-zero number raised to the 0 power equals 1.', domain: 'exponents-radicals', topicSlug: 'exponent-rules', formSet: 'both' },
  { question: 'Simplify: x⁶/x²', options: ['x⁴', 'x³', 'x⁸', 'x¹²'], correctAnswer: 0, explanation: 'When dividing same base, subtract exponents: x⁶⁻² = x⁴.', domain: 'exponents-radicals', topicSlug: 'exponent-rules', formSet: 'both' },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function generateAlgebra1DiagnosticTest(form: 'A' | 'B'): Algebra1DiagnosticTestData {
  const eligible = questionPool.filter(q => q.formSet === form || q.formSet === 'both')
  const selected: PoolQuestion[] = []
  for (const domain of ALGEBRA1_DOMAINS) {
    const domainQs = shuffle(eligible.filter(q => q.domain === domain.id))
    selected.push(...domainQs.slice(0, domain.questionTarget))
  }
  const questions: Algebra1DiagnosticQuestion[] = shuffle(selected).map(q => ({
    question: q.question, options: q.options, correctAnswer: q.correctAnswer, explanation: q.explanation, domain: q.domain, topicSlug: q.topicSlug,
  }))
  return { form, questions, domains: ALGEBRA1_DOMAINS, totalQuestions: questions.length, timeLimitMinutes: 35 }
}

export function scoreAlgebra1Diagnostic(
  form: 'A' | 'B',
  questions: Algebra1DiagnosticQuestion[],
  answers: Record<number, number>,
): Algebra1DiagnosticResults {
  const domainMap = new Map<string, { correct: number; total: number }>()
  ALGEBRA1_DOMAINS.forEach(d => domainMap.set(d.id, { correct: 0, total: 0 }))
  questions.forEach((q, i) => {
    const entry = domainMap.get(q.domain)!
    entry.total++
    if (answers[i] === q.correctAnswer) entry.correct++
  })
  let totalCorrect = 0, totalQuestions = 0
  const domainResults: Algebra1DomainResult[] = ALGEBRA1_DOMAINS.map(d => {
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
  const recommendedTopics: Algebra1RecommendedTopic[] = []
  domainResults.filter(d => d.level === 'weak' || d.level === 'moderate').forEach(d => {
    const domain = ALGEBRA1_DOMAINS.find(dom => dom.id === d.domainId)!
    domain.topicSlugs.forEach(slug => {
      recommendedTopics.push({ slug, name: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '), domainId: d.domainId, priority: d.level === 'weak' ? 'high' : 'medium' })
    })
  })
  return { form, totalCorrect, totalQuestions, percentage: pct, estimatedLevel, domains: domainResults, weakAreas, moderateAreas, strengths, recommendedTopics }
}

export function pickNextForm(previousForms: ('A' | 'B')[]): 'A' | 'B' {
  if (previousForms.length === 0) return 'A'
  return previousForms[0] === 'A' ? 'B' : 'A'
}
