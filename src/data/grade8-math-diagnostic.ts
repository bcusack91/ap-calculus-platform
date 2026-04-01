/**
 * Grade 8 Math Diagnostic Test Generator
 *
 * Two alternate forms (A / B), ~30 questions spanning 6 core domains.
 */

export interface Grade8MathQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface Grade8MathDomain {
  id: string
  name: string
  topicSlugs: string[]
  questionTarget: number
}

export interface Grade8MathTestData {
  form: 'A' | 'B'
  questions: Grade8MathQuestion[]
  domains: Grade8MathDomain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface Grade8MathDomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface Grade8MathRecommendedTopic { slug: string; name: string; domainId: string; priority: 'high' | 'medium' }

export interface Grade8MathResults {
  form: 'A' | 'B'
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedLevel: string
  domains: Grade8MathDomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: Grade8MathRecommendedTopic[]
}

const GRADE8_MATH_DOMAINS: Grade8MathDomain[] = [
  { id: 'number-system', name: 'The Number System', topicSlugs: ['rational-irrational-numbers', 'approximating-irrationals', 'comparing-real-numbers'], questionTarget: 5 },
  { id: 'expressions-equations', name: 'Expressions & Equations', topicSlugs: ['integer-exponents', 'scientific-notation', 'solving-linear-equations'], questionTarget: 5 },
  { id: 'functions', name: 'Functions', topicSlugs: ['defining-functions', 'linear-functions-grade8', 'comparing-functions'], questionTarget: 5 },
  { id: 'geometry', name: 'Geometry', topicSlugs: ['pythagorean-theorem-grade8', 'volume-cylinders-cones-spheres', 'transformations-grade8'], questionTarget: 5 },
  { id: 'statistics', name: 'Statistics & Probability', topicSlugs: ['scatter-plots', 'two-way-tables', 'line-of-best-fit'], questionTarget: 5 },
  { id: 'ratios-proportions', name: 'Ratios & Proportional Relationships', topicSlugs: ['unit-rates', 'proportional-relationships-grade8', 'slope-as-rate-of-change'], questionTarget: 5 },
]

export { GRADE8_MATH_DOMAINS }

interface PoolQuestion { question: string; options: string[]; correctAnswer: number; explanation: string; domain: string; topicSlug: string; formSet: 'A' | 'B' | 'both' }

const questionPool: PoolQuestion[] = [
  // ---- The Number System ----
  { question: 'Which of the following is an irrational number?', options: ['√2', '3/4', '0.5', '−7'], correctAnswer: 0, explanation: '√2 cannot be expressed as a fraction — it is irrational.', domain: 'number-system', topicSlug: 'rational-irrational-numbers', formSet: 'A' },
  { question: 'Between which two integers does √50 lie?', options: ['7 and 8', '6 and 7', '8 and 9', '5 and 6'], correctAnswer: 0, explanation: '7² = 49 and 8² = 64. Since 49 < 50 < 64, √50 is between 7 and 8.', domain: 'number-system', topicSlug: 'approximating-irrationals', formSet: 'A' },
  { question: 'Which is greater: 3/7 or 0.4?', options: ['0.4', '3/7', 'They are equal', 'Cannot determine'], correctAnswer: 1, explanation: '3/7 ≈ 0.4286, which is greater than 0.4.', domain: 'number-system', topicSlug: 'comparing-real-numbers', formSet: 'A' },
  { question: 'Which number is rational?', options: ['0.333... (repeating)', '√3', 'π', '√7'], correctAnswer: 0, explanation: '0.333... = 1/3, which is a ratio of integers — rational.', domain: 'number-system', topicSlug: 'rational-irrational-numbers', formSet: 'B' },
  { question: 'Approximate √20 to the nearest tenth.', options: ['4.5', '4.0', '5.0', '4.2'], correctAnswer: 0, explanation: '4.4² = 19.36, 4.5² = 20.25. √20 ≈ 4.47, rounds to 4.5.', domain: 'number-system', topicSlug: 'approximating-irrationals', formSet: 'B' },
  { question: 'Order from least to greatest: √10, 3.2, π', options: ['π, √10, 3.2', '3.2, π, √10', '√10, π, 3.2', '3.2, √10, π'], correctAnswer: 0, explanation: 'π ≈ 3.14, √10 ≈ 3.16, 3.2. Ordered least to greatest: π < √10 < 3.2.', domain: 'number-system', topicSlug: 'comparing-real-numbers', formSet: 'B' },
  { question: 'The decimal 0.125 as a fraction is:', options: ['1/8', '1/5', '1/4', '1/10'], correctAnswer: 0, explanation: '0.125 = 125/1000 = 1/8.', domain: 'number-system', topicSlug: 'rational-irrational-numbers', formSet: 'both' },
  { question: 'Which is NOT a real number?', options: ['√(−4)', '−√4', '0', 'π'], correctAnswer: 0, explanation: '√(−4) is not a real number (it is imaginary: 2i).', domain: 'number-system', topicSlug: 'rational-irrational-numbers', formSet: 'both' },

  // ---- Expressions & Equations ----
  { question: '3⁻² equals:', options: ['1/9', '−9', '9', '−6'], correctAnswer: 0, explanation: '3⁻² = 1/3² = 1/9.', domain: 'expressions-equations', topicSlug: 'integer-exponents', formSet: 'A' },
  { question: 'Write 0.00045 in scientific notation.', options: ['4.5 × 10⁻⁴', '45 × 10⁻⁵', '4.5 × 10⁴', '0.45 × 10⁻³'], correctAnswer: 0, explanation: '0.00045 = 4.5 × 10⁻⁴.', domain: 'expressions-equations', topicSlug: 'scientific-notation', formSet: 'A' },
  { question: 'Solve: 2x + 5 = 17', options: ['x = 6', 'x = 11', 'x = 7', 'x = 22'], correctAnswer: 0, explanation: '2x = 12 → x = 6.', domain: 'expressions-equations', topicSlug: 'solving-linear-equations', formSet: 'A' },
  { question: '(2³)² simplifies to:', options: ['2⁶', '2⁵', '2⁹', '4⁶'], correctAnswer: 0, explanation: 'Power rule: (2³)² = 2^(3×2) = 2⁶ = 64.', domain: 'expressions-equations', topicSlug: 'integer-exponents', formSet: 'B' },
  { question: '3.2 × 10⁵ in standard form is:', options: ['320,000', '32,000', '3,200,000', '3,200'], correctAnswer: 0, explanation: '3.2 × 10⁵ = 320,000.', domain: 'expressions-equations', topicSlug: 'scientific-notation', formSet: 'B' },
  { question: 'Solve: 3(x − 4) = 15', options: ['x = 9', 'x = 3', 'x = 19/3', 'x = 7'], correctAnswer: 0, explanation: '3x − 12 = 15 → 3x = 27 → x = 9.', domain: 'expressions-equations', topicSlug: 'solving-linear-equations', formSet: 'B' },
  { question: 'x⁰ equals (for x ≠ 0):', options: ['1', '0', 'x', 'undefined'], correctAnswer: 0, explanation: 'Any nonzero number to the power 0 is 1.', domain: 'expressions-equations', topicSlug: 'integer-exponents', formSet: 'both' },
  { question: 'Solve: 4x − 3 = 2x + 7', options: ['x = 5', 'x = 2', 'x = 10', 'x = −5'], correctAnswer: 0, explanation: '2x = 10 → x = 5.', domain: 'expressions-equations', topicSlug: 'solving-linear-equations', formSet: 'both' },

  // ---- Functions ----
  { question: 'Which relation is NOT a function?', options: ['{(1,2), (1,3), (2,4)}', '{(1,2), (2,3), (3,4)}', '{(−1,0), (0,1), (1,2)}', '{(2,4), (3,6), (4,8)}'], correctAnswer: 0, explanation: 'Input 1 maps to both 2 and 3 — not a function (fails vertical line test).', domain: 'functions', topicSlug: 'defining-functions', formSet: 'A' },
  { question: 'The equation y = 3x + 2 represents a linear function with slope:', options: ['3', '2', '5', '3/2'], correctAnswer: 0, explanation: 'In y = mx + b, m = 3 is the slope.', domain: 'functions', topicSlug: 'linear-functions-grade8', formSet: 'A' },
  { question: 'Which function has a greater rate of change: y = 2x + 1 or a table showing x: 0,1,2 → y: 0,4,8?', options: ['The table (rate = 4)', 'y = 2x + 1 (rate = 2)', 'They are equal', 'Cannot determine'], correctAnswer: 0, explanation: 'Table rate = (8−0)/(2−0) = 4; equation rate = 2. The table function grows faster.', domain: 'functions', topicSlug: 'comparing-functions', formSet: 'A' },
  { question: 'f(x) = −2x + 5. What is f(3)?', options: ['−1', '11', '1', '−11'], correctAnswer: 0, explanation: 'f(3) = −2(3) + 5 = −6 + 5 = −1.', domain: 'functions', topicSlug: 'linear-functions-grade8', formSet: 'B' },
  { question: 'A function\'s y-intercept is the value of y when:', options: ['x = 0', 'y = 0', 'x = 1', 'slope = 0'], correctAnswer: 0, explanation: 'The y-intercept occurs where the graph crosses the y-axis (x = 0).', domain: 'functions', topicSlug: 'defining-functions', formSet: 'B' },
  { question: 'A linear function passes through (0, 3) and (2, 7). Its equation is:', options: ['y = 2x + 3', 'y = 3x + 2', 'y = 7x', 'y = 4x + 3'], correctAnswer: 0, explanation: 'slope = (7−3)/(2−0) = 2. y-intercept = 3. y = 2x + 3.', domain: 'functions', topicSlug: 'linear-functions-grade8', formSet: 'B' },
  { question: 'A function assigns each input to exactly:', options: ['One output', 'Two outputs', 'Zero outputs', 'Multiple outputs'], correctAnswer: 0, explanation: 'By definition, a function maps each input to exactly one output.', domain: 'functions', topicSlug: 'defining-functions', formSet: 'both' },
  { question: 'The graph of y = x is a line through the origin with slope:', options: ['1', '0', '−1', 'undefined'], correctAnswer: 0, explanation: 'y = x → y = 1·x + 0. Slope = 1.', domain: 'functions', topicSlug: 'linear-functions-grade8', formSet: 'both' },

  // ---- Geometry ----
  { question: 'A right triangle has legs 6 and 8. The hypotenuse is:', options: ['10', '14', '48', '7'], correctAnswer: 0, explanation: 'c = √(36 + 64) = √100 = 10.', domain: 'geometry', topicSlug: 'pythagorean-theorem-grade8', formSet: 'A' },
  { question: 'The volume of a cylinder with radius 3 and height 7 is:', options: ['63π', '21π', '42π', '126π'], correctAnswer: 0, explanation: 'V = πr²h = π(9)(7) = 63π.', domain: 'geometry', topicSlug: 'volume-cylinders-cones-spheres', formSet: 'A' },
  { question: 'A 180° rotation maps (2, 3) to:', options: ['(−2, −3)', '(−2, 3)', '(2, −3)', '(3, 2)'], correctAnswer: 0, explanation: '180° rotation: (x, y) → (−x, −y) = (−2, −3).', domain: 'geometry', topicSlug: 'transformations-grade8', formSet: 'A' },
  { question: 'Can a triangle have sides 3, 4, and 8?', options: ['No, 3 + 4 < 8', 'Yes', 'Only if it is right', 'Not enough info'], correctAnswer: 0, explanation: 'Triangle inequality: 3 + 4 = 7 < 8. Not valid.', domain: 'geometry', topicSlug: 'pythagorean-theorem-grade8', formSet: 'B' },
  { question: 'The volume of a cone with radius 4 and height 9 is:', options: ['48π', '144π', '36π', '16π'], correctAnswer: 0, explanation: 'V = (1/3)πr²h = (1/3)π(16)(9) = 48π.', domain: 'geometry', topicSlug: 'volume-cylinders-cones-spheres', formSet: 'B' },
  { question: 'A reflection over the x-axis maps (5, −2) to:', options: ['(5, 2)', '(−5, −2)', '(−5, 2)', '(2, −5)'], correctAnswer: 0, explanation: 'Reflect over x-axis: (x, y) → (x, −y) = (5, 2).', domain: 'geometry', topicSlug: 'transformations-grade8', formSet: 'B' },
  { question: 'The Pythagorean theorem: a² + b² = c² applies when c is:', options: ['The hypotenuse', 'Any side', 'The shortest side', 'A leg'], correctAnswer: 0, explanation: 'c is always the hypotenuse — the side opposite the right angle.', domain: 'geometry', topicSlug: 'pythagorean-theorem-grade8', formSet: 'both' },
  { question: 'The volume of a sphere with radius 3 is:', options: ['36π', '27π', '12π', '108π'], correctAnswer: 0, explanation: 'V = (4/3)πr³ = (4/3)π(27) = 36π.', domain: 'geometry', topicSlug: 'volume-cylinders-cones-spheres', formSet: 'both' },

  // ---- Statistics & Probability ----
  { question: 'A scatter plot shows data points trending upward from left to right. The association is:', options: ['Positive', 'Negative', 'No association', 'Non-linear'], correctAnswer: 0, explanation: 'Upward trend = positive association (as x increases, y increases).', domain: 'statistics', topicSlug: 'scatter-plots', formSet: 'A' },
  { question: 'A line of best fit has equation y = 1.5x + 3. The predicted value at x = 4 is:', options: ['9', '7.5', '6', '10'], correctAnswer: 0, explanation: 'y = 1.5(4) + 3 = 6 + 3 = 9.', domain: 'statistics', topicSlug: 'line-of-best-fit', formSet: 'A' },
  { question: 'In a two-way table, the marginal frequency is:', options: ['The total of a row or column', 'The center cell', 'The smallest value', 'The average'], correctAnswer: 0, explanation: 'Marginal frequencies are the row/column totals in a two-way table.', domain: 'statistics', topicSlug: 'two-way-tables', formSet: 'A' },
  { question: 'If a scatter plot shows points scattered randomly with no pattern, the correlation is:', options: ['No correlation', 'Positive', 'Negative', 'Perfect'], correctAnswer: 0, explanation: 'Random scatter = no correlation between the variables.', domain: 'statistics', topicSlug: 'scatter-plots', formSet: 'B' },
  { question: 'A line of best fit can be used to:', options: ['Make predictions about future data', 'Find the exact value', 'Replace all data points', 'Prove causation'], correctAnswer: 0, explanation: 'Lines of best fit model trends to make reasonable predictions (not exact).', domain: 'statistics', topicSlug: 'line-of-best-fit', formSet: 'B' },
  { question: 'A two-way table shows: Soccer Yes/No vs Grade 7/8. What type of data does this display?', options: ['Categorical data for two variables', 'Continuous data', 'Time series data', 'Single variable data'], correctAnswer: 0, explanation: 'Two-way tables display relationships between two categorical variables.', domain: 'statistics', topicSlug: 'two-way-tables', formSet: 'B' },
  { question: 'An outlier in a scatter plot is:', options: ['A point far from the overall pattern', 'The highest point', 'The origin', 'A negative value'], correctAnswer: 0, explanation: 'An outlier deviates significantly from the general trend of the data.', domain: 'statistics', topicSlug: 'scatter-plots', formSet: 'both' },
  { question: 'Correlation does NOT imply:', options: ['Causation', 'Association', 'A relationship', 'A pattern'], correctAnswer: 0, explanation: 'Classic statistical principle: correlation ≠ causation.', domain: 'statistics', topicSlug: 'scatter-plots', formSet: 'both' },

  // ---- Ratios & Proportional Relationships ----
  { question: 'A car travels 180 miles in 3 hours. The unit rate is:', options: ['60 mph', '540 mph', '3 mph', '0.017 mph'], correctAnswer: 0, explanation: '180 ÷ 3 = 60 miles per hour.', domain: 'ratios-proportions', topicSlug: 'unit-rates', formSet: 'A' },
  { question: 'The graph of a proportional relationship passes through:', options: ['The origin (0, 0)', '(1, 1)', '(0, 1)', 'Any point'], correctAnswer: 0, explanation: 'Proportional relationships: y = kx, always through (0, 0).', domain: 'ratios-proportions', topicSlug: 'proportional-relationships-grade8', formSet: 'A' },
  { question: 'The slope of a line through (0, 0) and (4, 12) is:', options: ['3', '4', '12', '1/3'], correctAnswer: 0, explanation: 'slope = (12−0)/(4−0) = 12/4 = 3.', domain: 'ratios-proportions', topicSlug: 'slope-as-rate-of-change', formSet: 'A' },
  { question: 'If y is proportional to x and y = 20 when x = 4, what is y when x = 7?', options: ['35', '28', '23', '140'], correctAnswer: 0, explanation: 'k = 20/4 = 5. y = 5(7) = 35.', domain: 'ratios-proportions', topicSlug: 'proportional-relationships-grade8', formSet: 'B' },
  { question: 'A line has slope −2 and passes through (1, 5). Its equation is:', options: ['y = −2x + 7', 'y = −2x + 5', 'y = 2x + 3', 'y = −2x + 3'], correctAnswer: 0, explanation: 'y − 5 = −2(x − 1) → y = −2x + 2 + 5 = −2x + 7.', domain: 'ratios-proportions', topicSlug: 'slope-as-rate-of-change', formSet: 'B' },
  { question: 'A recipe uses 2 cups of flour for 3 dozen cookies. For 9 dozen, you need:', options: ['6 cups', '4 cups', '3 cups', '9 cups'], correctAnswer: 0, explanation: '2/3 = x/9 → x = 6 cups.', domain: 'ratios-proportions', topicSlug: 'unit-rates', formSet: 'B' },
  { question: 'Slope represents:', options: ['Rate of change (rise over run)', 'The y-intercept', 'The x-intercept', 'Total change'], correctAnswer: 0, explanation: 'Slope = rise/run = Δy/Δx = rate of change.', domain: 'ratios-proportions', topicSlug: 'slope-as-rate-of-change', formSet: 'both' },
  { question: 'A negative slope means the line goes:', options: ['Down from left to right', 'Up from left to right', 'Horizontal', 'Vertical'], correctAnswer: 0, explanation: 'Negative slope → as x increases, y decreases → line goes down.', domain: 'ratios-proportions', topicSlug: 'slope-as-rate-of-change', formSet: 'both' },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }
  return a
}

export function generateGrade8MathDiagnosticTest(form: 'A' | 'B'): Grade8MathTestData {
  const eligible = questionPool.filter(q => q.formSet === form || q.formSet === 'both')
  const selected: PoolQuestion[] = []
  for (const domain of GRADE8_MATH_DOMAINS) {
    const domainQs = shuffle(eligible.filter(q => q.domain === domain.id))
    selected.push(...domainQs.slice(0, domain.questionTarget))
  }
  const questions: Grade8MathQuestion[] = shuffle(selected).map(q => ({
    question: q.question, options: q.options, correctAnswer: q.correctAnswer, explanation: q.explanation, domain: q.domain, topicSlug: q.topicSlug,
  }))
  return { form, questions, domains: GRADE8_MATH_DOMAINS, totalQuestions: questions.length, timeLimitMinutes: 30 }
}

export function scoreGrade8MathDiagnostic(form: 'A' | 'B', questions: Grade8MathQuestion[], answers: Record<number, number>): Grade8MathResults {
  const domainMap = new Map<string, { correct: number; total: number }>()
  GRADE8_MATH_DOMAINS.forEach(d => domainMap.set(d.id, { correct: 0, total: 0 }))
  questions.forEach((q, i) => { const entry = domainMap.get(q.domain)!; entry.total++; if (answers[i] === q.correctAnswer) entry.correct++ })
  let totalCorrect = 0, totalQuestions = 0
  const domainResults: Grade8MathDomainResult[] = GRADE8_MATH_DOMAINS.map(d => {
    const entry = domainMap.get(d.id)!; totalCorrect += entry.correct; totalQuestions += entry.total
    const pct = entry.total > 0 ? Math.round((entry.correct / entry.total) * 100) : 0
    return { domainId: d.id, domainName: d.name, correct: entry.correct, total: entry.total, percentage: pct, level: pct >= 75 ? 'strong' : pct >= 50 ? 'moderate' : 'weak' }
  })
  const pct = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0
  const estimatedLevel = pct >= 90 ? 'Advanced' : pct >= 75 ? 'Proficient' : pct >= 60 ? 'Developing' : 'Beginning'
  const weakAreas = domainResults.filter(d => d.level === 'weak').map(d => d.domainName)
  const moderateAreas = domainResults.filter(d => d.level === 'moderate').map(d => d.domainName)
  const strengths = domainResults.filter(d => d.level === 'strong').map(d => d.domainName)
  const recommendedTopics: Grade8MathRecommendedTopic[] = []
  domainResults.filter(d => d.level === 'weak' || d.level === 'moderate').forEach(d => {
    const domain = GRADE8_MATH_DOMAINS.find(dom => dom.id === d.domainId)!
    domain.topicSlugs.forEach(slug => { recommendedTopics.push({ slug, name: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '), domainId: d.domainId, priority: d.level === 'weak' ? 'high' : 'medium' }) })
  })
  return { form, totalCorrect, totalQuestions, percentage: pct, estimatedLevel, domains: domainResults, weakAreas, moderateAreas, strengths, recommendedTopics }
}

export function pickNextForm(previousForms: ('A' | 'B')[]): 'A' | 'B' {
  if (previousForms.length === 0) return 'A'
  return previousForms[0] === 'A' ? 'B' : 'A'
}
