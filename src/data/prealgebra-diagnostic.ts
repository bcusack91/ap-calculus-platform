/**
 * Pre-Algebra Diagnostic Test Generator
 *
 * Two alternate forms (A / B), ~30 questions spanning 6 core domains.
 */

export interface PreAlgebraQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface PreAlgebraDomain {
  id: string
  name: string
  topicSlugs: string[]
  questionTarget: number
}

export interface PreAlgebraTestData {
  form: 'A' | 'B'
  questions: PreAlgebraQuestion[]
  domains: PreAlgebraDomain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface PreAlgebraDomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface PreAlgebraRecommendedTopic { slug: string; name: string; domainId: string; priority: 'high' | 'medium' }

export interface PreAlgebraResults {
  form: 'A' | 'B'
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedLevel: string
  domains: PreAlgebraDomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: PreAlgebraRecommendedTopic[]
}

const PREALGEBRA_DOMAINS: PreAlgebraDomain[] = [
  { id: 'integers-operations', name: 'Integers & Operations', topicSlugs: ['operations-with-integers', 'operations-with-integers', 'order-of-operations-pemdas'], questionTarget: 5 },
  { id: 'fractions-decimals', name: 'Fractions & Decimals', topicSlugs: ['operations-with-fractions', 'decimals-and-percents', 'fraction-decimal-conversions'], questionTarget: 5 },
  { id: 'ratios-proportions-percents', name: 'Ratios, Proportions & Percents', topicSlugs: ['ratios-and-rates-prealgebra', 'proportions-prealgebra', 'percent-applications'], questionTarget: 5 },
  { id: 'expressions-equations', name: 'Expressions & Equations', topicSlugs: ['variables-and-expressions', 'one-step-equations-prealgebra', 'solving-two-step-equations'], questionTarget: 5 },
  { id: 'geometry-measurement', name: 'Geometry & Measurement', topicSlugs: ['perimeter-and-area', 'volume-rectangular-prisms', 'angle-measurements'], questionTarget: 5 },
  { id: 'data-probability', name: 'Data & Probability', topicSlugs: ['mean-median-mode', 'reading-graphs-charts', 'intro-statistics-prealg'], questionTarget: 5 },
]

export { PREALGEBRA_DOMAINS }

interface PoolQuestion { question: string; options: string[]; correctAnswer: number; explanation: string; domain: string; topicSlug: string; formSet: 'A' | 'B' | 'both' }

const questionPool: PoolQuestion[] = [
  // ---- Integers & Operations ----
  { question: '−5 + 8 = ?', options: ['3', '−3', '13', '−13'], correctAnswer: 0, explanation: 'Start at −5, move 8 units right: −5 + 8 = 3.', domain: 'integers-operations', topicSlug: 'operations-with-integers', formSet: 'A' },
  { question: '(−3) × (−4) = ?', options: ['12', '−12', '7', '−7'], correctAnswer: 0, explanation: 'Negative × negative = positive. 3 × 4 = 12.', domain: 'integers-operations', topicSlug: 'operations-with-integers', formSet: 'A' },
  { question: 'Evaluate: 3 + 4 × 2', options: ['11', '14', '10', '24'], correctAnswer: 0, explanation: 'Order of operations: multiply first. 4 × 2 = 8, then 3 + 8 = 11.', domain: 'integers-operations', topicSlug: 'order-of-operations-pemdas', formSet: 'A' },
  { question: '−12 − (−7) = ?', options: ['−5', '−19', '5', '19'], correctAnswer: 0, explanation: 'Subtracting a negative: −12 + 7 = −5.', domain: 'integers-operations', topicSlug: 'operations-with-integers', formSet: 'B' },
  { question: '(−24) ÷ 6 = ?', options: ['−4', '4', '−18', '18'], correctAnswer: 0, explanation: 'Negative ÷ positive = negative. 24 ÷ 6 = 4, so answer is −4.', domain: 'integers-operations', topicSlug: 'operations-with-integers', formSet: 'B' },
  { question: 'Evaluate: 2 × (3 + 5) − 4', options: ['12', '16', '10', '14'], correctAnswer: 0, explanation: 'Parentheses first: 3 + 5 = 8. Then 2 × 8 = 16. Then 16 − 4 = 12.', domain: 'integers-operations', topicSlug: 'order-of-operations-pemdas', formSet: 'B' },
  { question: '|−9| = ?', options: ['9', '−9', '0', '1'], correctAnswer: 0, explanation: 'Absolute value is the distance from zero: |−9| = 9.', domain: 'integers-operations', topicSlug: 'operations-with-integers', formSet: 'both' },
  { question: '(−2)³ = ?', options: ['−8', '8', '−6', '6'], correctAnswer: 0, explanation: '(−2)³ = (−2)(−2)(−2) = 4 × (−2) = −8.', domain: 'integers-operations', topicSlug: 'operations-with-integers', formSet: 'both' },

  // ---- Fractions & Decimals ----
  { question: '1/3 + 1/4 = ?', options: ['7/12', '2/7', '1/7', '5/12'], correctAnswer: 0, explanation: 'LCD = 12. 4/12 + 3/12 = 7/12.', domain: 'fractions-decimals', topicSlug: 'operations-with-fractions', formSet: 'A' },
  { question: '0.75 × 0.4 = ?', options: ['0.3', '0.34', '3.0', '0.03'], correctAnswer: 0, explanation: '75 × 4 = 300, move decimal 3 places: 0.300 = 0.3.', domain: 'fractions-decimals', topicSlug: 'decimals-and-percents', formSet: 'A' },
  { question: 'Convert 3/5 to a percent.', options: ['60%', '35%', '53%', '75%'], correctAnswer: 0, explanation: '3 ÷ 5 = 0.6 = 60%.', domain: 'fractions-decimals', topicSlug: 'fraction-decimal-conversions', formSet: 'A' },
  { question: '2/3 × 3/4 = ?', options: ['1/2', '6/7', '5/12', '2/4'], correctAnswer: 0, explanation: '(2 × 3)/(3 × 4) = 6/12 = 1/2.', domain: 'fractions-decimals', topicSlug: 'operations-with-fractions', formSet: 'B' },
  { question: '5.6 − 2.38 = ?', options: ['3.22', '3.18', '3.32', '2.22'], correctAnswer: 0, explanation: 'Line up decimals: 5.60 − 2.38 = 3.22.', domain: 'fractions-decimals', topicSlug: 'decimals-and-percents', formSet: 'B' },
  { question: 'Convert 0.125 to a fraction.', options: ['1/8', '1/4', '1/5', '1/12'], correctAnswer: 0, explanation: '0.125 = 125/1000 = 1/8.', domain: 'fractions-decimals', topicSlug: 'fraction-decimal-conversions', formSet: 'B' },
  { question: '3/8 as a decimal is:', options: ['0.375', '0.38', '0.333', '0.35'], correctAnswer: 0, explanation: '3 ÷ 8 = 0.375.', domain: 'fractions-decimals', topicSlug: 'fraction-decimal-conversions', formSet: 'both' },
  { question: '5/6 − 1/3 = ?', options: ['1/2', '4/3', '2/3', '1/6'], correctAnswer: 0, explanation: 'LCD = 6. 5/6 − 2/6 = 3/6 = 1/2.', domain: 'fractions-decimals', topicSlug: 'operations-with-fractions', formSet: 'both' },

  // ---- Ratios, Proportions & Percents ----
  { question: 'A recipe needs 2 cups of flour for 3 batches. How many cups for 9 batches?', options: ['6', '4.5', '12', '3'], correctAnswer: 0, explanation: '2/3 = x/9 → x = 6 cups.', domain: 'ratios-proportions-percents', topicSlug: 'proportions-prealgebra', formSet: 'A' },
  { question: 'What is 15% of 80?', options: ['12', '15', '8', '65'], correctAnswer: 0, explanation: '0.15 × 80 = 12.', domain: 'ratios-proportions-percents', topicSlug: 'percent-applications', formSet: 'A' },
  { question: 'Write the ratio 12:8 in simplest form.', options: ['3:2', '6:4', '4:3', '12:8'], correctAnswer: 0, explanation: 'GCF of 12 and 8 is 4. 12/4 : 8/4 = 3:2.', domain: 'ratios-proportions-percents', topicSlug: 'ratios-and-rates-prealgebra', formSet: 'A' },
  { question: 'A shirt was $40 and is now 25% off. What is the sale price?', options: ['$30', '$35', '$15', '$10'], correctAnswer: 0, explanation: '25% of 40 = 10. Sale price = 40 − 10 = $30.', domain: 'ratios-proportions-percents', topicSlug: 'percent-applications', formSet: 'B' },
  { question: 'If 4/x = 12/15, what is x?', options: ['5', '3', '45', '20'], correctAnswer: 0, explanation: 'Cross multiply: 4 × 15 = 12x → 60 = 12x → x = 5.', domain: 'ratios-proportions-percents', topicSlug: 'proportions-prealgebra', formSet: 'B' },
  { question: 'A car travels 150 miles in 3 hours. The unit rate is:', options: ['50 mph', '450 mph', '3 mph', '153 mph'], correctAnswer: 0, explanation: '150 ÷ 3 = 50 miles per hour.', domain: 'ratios-proportions-percents', topicSlug: 'ratios-and-rates-prealgebra', formSet: 'B' },
  { question: '20 is what percent of 50?', options: ['40%', '25%', '20%', '30%'], correctAnswer: 0, explanation: '20/50 = 0.4 = 40%.', domain: 'ratios-proportions-percents', topicSlug: 'percent-applications', formSet: 'both' },
  { question: 'If 3/5 = x/25, then x = ?', options: ['15', '12', '10', '20'], correctAnswer: 0, explanation: 'Cross multiply: 3 × 25 = 5x → 75 = 5x → x = 15.', domain: 'ratios-proportions-percents', topicSlug: 'proportions-prealgebra', formSet: 'both' },

  // ---- Expressions & Equations ----
  { question: 'Evaluate 3x + 2 when x = 4.', options: ['14', '12', '9', '34'], correctAnswer: 0, explanation: '3(4) + 2 = 12 + 2 = 14.', domain: 'expressions-equations', topicSlug: 'variables-and-expressions', formSet: 'A' },
  { question: 'Solve: x + 7 = 12', options: ['x = 5', 'x = 19', 'x = 7', 'x = −5'], correctAnswer: 0, explanation: 'x = 12 − 7 = 5.', domain: 'expressions-equations', topicSlug: 'one-step-equations-prealgebra', formSet: 'A' },
  { question: 'Solve: 2x + 3 = 11', options: ['x = 4', 'x = 7', 'x = 5.5', 'x = 14'], correctAnswer: 0, explanation: '2x = 8 → x = 4.', domain: 'expressions-equations', topicSlug: 'solving-two-step-equations', formSet: 'A' },
  { question: 'Evaluate 2a − b when a = 5 and b = 3.', options: ['7', '13', '4', '10'], correctAnswer: 0, explanation: '2(5) − 3 = 10 − 3 = 7.', domain: 'expressions-equations', topicSlug: 'variables-and-expressions', formSet: 'B' },
  { question: 'Solve: x/3 = 9', options: ['x = 27', 'x = 3', 'x = 12', 'x = 6'], correctAnswer: 0, explanation: 'Multiply both sides by 3: x = 27.', domain: 'expressions-equations', topicSlug: 'one-step-equations-prealgebra', formSet: 'B' },
  { question: 'Solve: 3x − 5 = 16', options: ['x = 7', 'x = 11/3', 'x = 21', 'x = 3'], correctAnswer: 0, explanation: '3x = 21 → x = 7.', domain: 'expressions-equations', topicSlug: 'solving-two-step-equations', formSet: 'B' },
  { question: 'Which expression means "5 less than twice a number n"?', options: ['2n − 5', '5 − 2n', '2(n − 5)', '5n − 2'], correctAnswer: 0, explanation: 'Twice a number = 2n. Five less than that = 2n − 5.', domain: 'expressions-equations', topicSlug: 'variables-and-expressions', formSet: 'both' },
  { question: 'Solve: 4x = −20', options: ['x = −5', 'x = 5', 'x = −80', 'x = 80'], correctAnswer: 0, explanation: 'Divide both sides by 4: x = −20/4 = −5.', domain: 'expressions-equations', topicSlug: 'one-step-equations-prealgebra', formSet: 'both' },

  // ---- Geometry & Measurement ----
  { question: 'The area of a rectangle with length 8 and width 5 is:', options: ['40', '26', '13', '80'], correctAnswer: 0, explanation: 'Area = l × w = 8 × 5 = 40.', domain: 'geometry-measurement', topicSlug: 'perimeter-and-area', formSet: 'A' },
  { question: 'The volume of a rectangular prism 3 × 4 × 5 is:', options: ['60', '12', '47', '24'], correctAnswer: 0, explanation: 'V = l × w × h = 3 × 4 × 5 = 60.', domain: 'geometry-measurement', topicSlug: 'volume-rectangular-prisms', formSet: 'A' },
  { question: 'Two angles of a triangle are 50° and 70°. The third angle is:', options: ['60°', '120°', '80°', '40°'], correctAnswer: 0, explanation: '180 − 50 − 70 = 60°.', domain: 'geometry-measurement', topicSlug: 'angle-measurements', formSet: 'A' },
  { question: 'The perimeter of a square with side 9 is:', options: ['36', '81', '18', '27'], correctAnswer: 0, explanation: 'P = 4s = 4 × 9 = 36.', domain: 'geometry-measurement', topicSlug: 'perimeter-and-area', formSet: 'B' },
  { question: 'The surface area of a cube with side 3 is:', options: ['54', '27', '18', '36'], correctAnswer: 0, explanation: 'SA = 6s² = 6 × 9 = 54.', domain: 'geometry-measurement', topicSlug: 'volume-rectangular-prisms', formSet: 'B' },
  { question: 'An angle measuring 90° is called:', options: ['Right', 'Acute', 'Obtuse', 'Straight'], correctAnswer: 0, explanation: 'A 90° angle is a right angle.', domain: 'geometry-measurement', topicSlug: 'angle-measurements', formSet: 'B' },
  { question: 'The area of a triangle with base 10 and height 6 is:', options: ['30', '60', '16', '8'], correctAnswer: 0, explanation: 'A = (1/2)bh = (1/2)(10)(6) = 30.', domain: 'geometry-measurement', topicSlug: 'perimeter-and-area', formSet: 'both' },
  { question: 'Complementary angles add up to:', options: ['90°', '180°', '360°', '45°'], correctAnswer: 0, explanation: 'Complementary angles sum to 90°.', domain: 'geometry-measurement', topicSlug: 'angle-measurements', formSet: 'both' },

  // ---- Data & Probability ----
  { question: 'Find the mean of: 4, 8, 6, 10, 7', options: ['7', '6', '8', '35'], correctAnswer: 0, explanation: '(4 + 8 + 6 + 10 + 7) / 5 = 35/5 = 7.', domain: 'data-probability', topicSlug: 'mean-median-mode', formSet: 'A' },
  { question: 'A bar graph shows: Mon=5, Tue=8, Wed=3. Which day had the most?', options: ['Tuesday', 'Monday', 'Wednesday', 'Cannot tell'], correctAnswer: 0, explanation: 'Tuesday has the tallest bar (8).', domain: 'data-probability', topicSlug: 'reading-graphs-charts', formSet: 'A' },
  { question: 'A bag has 3 red and 5 blue marbles. P(red) = ?', options: ['3/8', '5/8', '3/5', '1/3'], correctAnswer: 0, explanation: 'P(red) = 3/(3+5) = 3/8.', domain: 'data-probability', topicSlug: 'intro-statistics-prealg', formSet: 'A' },
  { question: 'Find the median of: 2, 5, 7, 9, 11', options: ['7', '5', '9', '6.8'], correctAnswer: 0, explanation: 'The middle value in the ordered set is 7.', domain: 'data-probability', topicSlug: 'mean-median-mode', formSet: 'B' },
  { question: 'A circle graph shows 25% sports, 40% music, 35% art. The largest category is:', options: ['Music', 'Art', 'Sports', 'Equal'], correctAnswer: 0, explanation: 'Music at 40% is the largest slice.', domain: 'data-probability', topicSlug: 'reading-graphs-charts', formSet: 'B' },
  { question: 'A coin is flipped twice. P(two heads) = ?', options: ['1/4', '1/2', '1/3', '1/8'], correctAnswer: 0, explanation: 'P(H) × P(H) = 1/2 × 1/2 = 1/4.', domain: 'data-probability', topicSlug: 'intro-statistics-prealg', formSet: 'B' },
  { question: 'The mode of: 3, 5, 5, 7, 9 is:', options: ['5', '3', '7', '5.8'], correctAnswer: 0, explanation: '5 appears most often (twice).', domain: 'data-probability', topicSlug: 'mean-median-mode', formSet: 'both' },
  { question: 'The probability of an impossible event is:', options: ['0', '1', '0.5', '−1'], correctAnswer: 0, explanation: 'An impossible event has probability 0.', domain: 'data-probability', topicSlug: 'intro-statistics-prealg', formSet: 'both' },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }
  return a
}

export function generatePreAlgebraDiagnosticTest(form: 'A' | 'B'): PreAlgebraTestData {
  const eligible = questionPool.filter(q => q.formSet === form || q.formSet === 'both')
  const selected: PoolQuestion[] = []
  for (const domain of PREALGEBRA_DOMAINS) {
    const domainQs = shuffle(eligible.filter(q => q.domain === domain.id))
    selected.push(...domainQs.slice(0, domain.questionTarget))
  }
  const questions: PreAlgebraQuestion[] = shuffle(selected).map(q => ({
    question: q.question, options: q.options, correctAnswer: q.correctAnswer, explanation: q.explanation, domain: q.domain, topicSlug: q.topicSlug,
  }))
  return { form, questions, domains: PREALGEBRA_DOMAINS, totalQuestions: questions.length, timeLimitMinutes: 30 }
}

export function scorePreAlgebraDiagnostic(form: 'A' | 'B', questions: PreAlgebraQuestion[], answers: Record<number, number>): PreAlgebraResults {
  const domainMap = new Map<string, { correct: number; total: number }>()
  PREALGEBRA_DOMAINS.forEach(d => domainMap.set(d.id, { correct: 0, total: 0 }))
  questions.forEach((q, i) => { const entry = domainMap.get(q.domain)!; entry.total++; if (answers[i] === q.correctAnswer) entry.correct++ })
  let totalCorrect = 0, totalQuestions = 0
  const domainResults: PreAlgebraDomainResult[] = PREALGEBRA_DOMAINS.map(d => {
    const entry = domainMap.get(d.id)!; totalCorrect += entry.correct; totalQuestions += entry.total
    const pct = entry.total > 0 ? Math.round((entry.correct / entry.total) * 100) : 0
    return { domainId: d.id, domainName: d.name, correct: entry.correct, total: entry.total, percentage: pct, level: pct >= 75 ? 'strong' : pct >= 50 ? 'moderate' : 'weak' }
  })
  const pct = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0
  const estimatedLevel = pct >= 90 ? 'Advanced' : pct >= 75 ? 'Proficient' : pct >= 60 ? 'Developing' : 'Beginning'
  const weakAreas = domainResults.filter(d => d.level === 'weak').map(d => d.domainName)
  const moderateAreas = domainResults.filter(d => d.level === 'moderate').map(d => d.domainName)
  const strengths = domainResults.filter(d => d.level === 'strong').map(d => d.domainName)
  const recommendedTopics: PreAlgebraRecommendedTopic[] = []
  domainResults.filter(d => d.level === 'weak' || d.level === 'moderate').forEach(d => {
    const domain = PREALGEBRA_DOMAINS.find(dom => dom.id === d.domainId)!
    domain.topicSlugs.forEach(slug => { recommendedTopics.push({ slug, name: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '), domainId: d.domainId, priority: d.level === 'weak' ? 'high' : 'medium' }) })
  })
  return { form, totalCorrect, totalQuestions, percentage: pct, estimatedLevel, domains: domainResults, weakAreas, moderateAreas, strengths, recommendedTopics }
}

export function pickNextForm(previousForms: ('A' | 'B')[]): 'A' | 'B' {
  if (previousForms.length === 0) return 'A'
  return previousForms[0] === 'A' ? 'B' : 'A'
}
