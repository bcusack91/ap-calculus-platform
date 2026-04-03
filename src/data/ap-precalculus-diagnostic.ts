/**
 * AP Precalculus Diagnostic Test Generator
 *
 * Two alternate forms (A / B), ~30 questions spanning 4 AP Precalculus units.
 * Uses AP-style scoring (1-5).
 */

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
  form: 'A' | 'B'
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
  form: 'A' | 'B'
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
  { id: 'functions-modeling', name: 'Functions, Limits & Modeling', topicSlugs: ['function-composition-inverses-precalc', 'composite-inverse-functions', 'parametric-equations-precalc', 'sequences-series-precalc'], questionTarget: 6 },
]

export { AP_PRECALCULUS_DOMAINS }

interface PoolQuestion { question: string; options: string[]; correctAnswer: number; explanation: string; domain: string; topicSlug: string; formSet: 'A' | 'B' | 'both' }

const questionPool: PoolQuestion[] = [
  // ---- Polynomial & Rational Functions ----
  { question: 'What is the end behavior of f(x) = −2x³ + 5x?', options: ['As x → ∞, f(x) → −∞; as x → −∞, f(x) → ∞', 'As x → ∞, f(x) → ∞; as x → −∞, f(x) → −∞', 'Both ends go to ∞', 'Both ends go to −∞'], correctAnswer: 0, explanation: 'Odd degree with negative leading coefficient: rises left, falls right.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior-precalc', formSet: 'A' },
  { question: 'The vertical asymptote of f(x) = 3/(x − 2) is at:', options: ['x = 2', 'x = 3', 'x = −2', 'x = 0'], correctAnswer: 0, explanation: 'Set denominator = 0: x − 2 = 0 → x = 2.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc', formSet: 'A' },
  { question: 'A polynomial of degree 4 can have at most how many real zeros?', options: ['4', '3', '5', '8'], correctAnswer: 0, explanation: 'By the Fundamental Theorem of Algebra, degree n → at most n real zeros.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior', formSet: 'A' },
  { question: 'Solve: x² − 4 > 0', options: ['x < −2 or x > 2', '−2 < x < 2', 'x > 2', 'x < −2'], correctAnswer: 0, explanation: '(x−2)(x+2) > 0 when both factors same sign: x < −2 or x > 2.', domain: 'polynomial-rational', topicSlug: 'solving-polynomial-inequalities', formSet: 'A' },
  { question: 'The horizontal asymptote of f(x) = (2x² + 1)/(x² − 3) is:', options: ['y = 2', 'y = 0', 'y = −3', 'No horizontal asymptote'], correctAnswer: 0, explanation: 'Same degree: HA = ratio of leading coefficients = 2/1 = 2.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc', formSet: 'B' },
  { question: 'If f(x) = x³ − 6x² + 11x − 6, which is a zero?', options: ['x = 1', 'x = −1', 'x = 6', 'x = −6'], correctAnswer: 0, explanation: 'f(1) = 1 − 6 + 11 − 6 = 0. So x = 1 is a zero.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior', formSet: 'B' },
  { question: 'The graph of f(x) = x⁴ − 1 crosses the x-axis at:', options: ['x = 1 and x = −1', 'x = 1 only', 'x = 0', 'x = ±1, ±i'], correctAnswer: 0, explanation: 'x⁴ − 1 = (x² − 1)(x² + 1) = (x−1)(x+1)(x²+1). Real zeros: ±1.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior', formSet: 'B' },
  { question: 'For f(x) = 1/(x² + 1), the domain is:', options: ['All real numbers', 'x ≠ 0', 'x > 0', 'x ≠ ±1'], correctAnswer: 0, explanation: 'x² + 1 > 0 for all real x — no restrictions.', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc', formSet: 'B' },
  { question: 'A polynomial of degree 3 has at most how many turning points?', options: ['2', '3', '1', '4'], correctAnswer: 0, explanation: 'A degree n polynomial has at most n − 1 turning points.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior-precalc', formSet: 'both' },
  { question: 'The remainder when f(x) = x³ + 2x − 5 is divided by (x − 1) is:', options: ['−2', '0', '5', '−5'], correctAnswer: 0, explanation: 'By the Remainder Theorem: f(1) = 1 + 2 − 5 = −2.', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-end-behavior', formSet: 'both' },

  // ---- Exponential & Logarithmic Functions ----
  { question: 'Solve: 2ˣ = 16', options: ['x = 4', 'x = 8', 'x = 3', 'x = 2'], correctAnswer: 0, explanation: '2⁴ = 16, so x = 4.', domain: 'exponential-logarithmic', topicSlug: 'solving-exponential-logarithmic-equations', formSet: 'A' },
  { question: 'log₂(32) = ?', options: ['5', '4', '6', '16'], correctAnswer: 0, explanation: '2⁵ = 32, so log₂(32) = 5.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc', formSet: 'A' },
  { question: 'A population doubles every 3 years. Starting at 100, what is it after 9 years?', options: ['800', '600', '400', '300'], correctAnswer: 0, explanation: '9/3 = 3 doublings. 100 × 2³ = 800.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-growth-decay', formSet: 'A' },
  { question: 'Which best describes f(x) = 3 · (0.5)ˣ?', options: ['Exponential decay', 'Exponential growth', 'Linear decrease', 'Logarithmic growth'], correctAnswer: 0, explanation: 'Base 0.5 < 1 → exponential decay.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-exponential-models', formSet: 'A' },
  { question: 'Simplify: log(ab) = ?', options: ['log a + log b', 'log a · log b', 'log(a/b)', '(log a)ᵇ'], correctAnswer: 0, explanation: 'Product rule of logarithms: log(ab) = log a + log b.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc', formSet: 'B' },
  { question: 'Solve: ln(x) = 3', options: ['x = e³', 'x = 3e', 'x = ln 3', 'x = 3'], correctAnswer: 0, explanation: 'Exponentiate: x = e³ ≈ 20.09.', domain: 'exponential-logarithmic', topicSlug: 'solving-exponential-logarithmic-equations', formSet: 'B' },
  { question: 'A substance has a half-life of 5 hours. After 15 hours, what fraction remains?', options: ['1/8', '1/4', '1/3', '1/16'], correctAnswer: 0, explanation: '15/5 = 3 half-lives. (1/2)³ = 1/8.', domain: 'exponential-logarithmic', topicSlug: 'exponential-functions-growth-decay', formSet: 'B' },
  { question: 'The graph of y = eˣ passes through:', options: ['(0, 1)', '(1, 0)', '(0, 0)', '(0, e)'], correctAnswer: 0, explanation: 'e⁰ = 1, so the graph passes through (0, 1).', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-exponential-models', formSet: 'B' },
  { question: 'log₃(1) = ?', options: ['0', '1', '3', 'undefined'], correctAnswer: 0, explanation: 'Any log base of 1 equals 0: 3⁰ = 1.', domain: 'exponential-logarithmic', topicSlug: 'logarithmic-functions-precalc', formSet: 'both' },
  { question: 'The inverse of f(x) = 2ˣ is:', options: ['f⁻¹(x) = log₂(x)', 'f⁻¹(x) = x²', 'f⁻¹(x) = √x', 'f⁻¹(x) = 1/2ˣ'], correctAnswer: 0, explanation: 'The inverse of an exponential is a logarithm with the same base.', domain: 'exponential-logarithmic', topicSlug: 'solving-exponential-logarithmic-equations', formSet: 'both' },

  // ---- Trigonometric & Polar Functions ----
  { question: 'sin(π/6) = ?', options: ['1/2', '√3/2', '√2/2', '1'], correctAnswer: 0, explanation: 'sin(30°) = sin(π/6) = 1/2.', domain: 'trigonometric', topicSlug: 'the-unit-circle', formSet: 'A' },
  { question: 'The period of f(x) = sin(2x) is:', options: ['π', '2π', 'π/2', '4π'], correctAnswer: 0, explanation: 'Period = 2π/|B| = 2π/2 = π.', domain: 'trigonometric', topicSlug: 'graphing-trig-functions', formSet: 'A' },
  { question: 'sin²θ + cos²θ = ?', options: ['1', '0', 'sin(2θ)', 'tan²θ'], correctAnswer: 0, explanation: 'The Pythagorean identity: sin²θ + cos²θ = 1.', domain: 'trigonometric', topicSlug: 'trigonometric-identities-precalc', formSet: 'A' },
  { question: 'Convert (3, π/4) from polar to rectangular. The x-coordinate is:', options: ['3√2/2', '3/2', '3', '√2'], correctAnswer: 0, explanation: 'x = r·cos θ = 3·cos(π/4) = 3·(√2/2) = 3√2/2.', domain: 'trigonometric', topicSlug: 'polar-coordinates-precalc', formSet: 'A' },
  { question: 'cos(π) = ?', options: ['−1', '0', '1', '−1/2'], correctAnswer: 0, explanation: 'cos(180°) = −1.', domain: 'trigonometric', topicSlug: 'the-unit-circle', formSet: 'B' },
  { question: 'The amplitude of f(x) = 3sin(x) + 2 is:', options: ['3', '5', '2', '1'], correctAnswer: 0, explanation: 'Amplitude = |A| = |3| = 3. The +2 is a vertical shift.', domain: 'trigonometric', topicSlug: 'graphing-trig-functions', formSet: 'B' },
  { question: 'tan θ = sin θ / ?', options: ['cos θ', 'tan θ', 'sin θ', '1'], correctAnswer: 0, explanation: 'tan θ = sin θ / cos θ by definition.', domain: 'trigonometric', topicSlug: 'trigonometric-identities-precalc', formSet: 'B' },
  { question: 'The polar equation r = 4 represents:', options: ['A circle of radius 4', 'A line', 'A spiral', 'A parabola'], correctAnswer: 0, explanation: 'r = constant → circle centered at origin.', domain: 'trigonometric', topicSlug: 'polar-coordinates-precalc', formSet: 'B' },
  { question: 'tan(π/4) = ?', options: ['1', '0', '√3', 'undefined'], correctAnswer: 0, explanation: 'sin(π/4)/cos(π/4) = (√2/2)/(√2/2) = 1.', domain: 'trigonometric', topicSlug: 'the-unit-circle', formSet: 'both' },
  { question: 'The range of the basic sine function is:', options: ['[−1, 1]', '[0, 1]', '(−∞, ∞)', '[0, 2π]'], correctAnswer: 0, explanation: 'sin(x) oscillates between −1 and 1 inclusive.', domain: 'trigonometric', topicSlug: 'graphing-trig-functions', formSet: 'both' },

  // ---- Functions, Limits & Modeling ----
  { question: 'If f(x) = 2x + 1 and g(x) = x², then (f ∘ g)(3) = ?', options: ['19', '49', '13', '37'], correctAnswer: 0, explanation: 'g(3) = 9, then f(9) = 2(9) + 1 = 19.', domain: 'functions-modeling', topicSlug: 'function-composition-inverses-precalc', formSet: 'A' },
  { question: 'The inverse of f(x) = 3x − 6 is:', options: ['f⁻¹(x) = (x + 6)/3', 'f⁻¹(x) = (x − 6)/3', 'f⁻¹(x) = 3x + 6', 'f⁻¹(x) = −3x + 6'], correctAnswer: 0, explanation: 'y = 3x − 6 → x = (y + 6)/3. So f⁻¹(x) = (x + 6)/3.', domain: 'functions-modeling', topicSlug: 'composite-inverse-functions', formSet: 'A' },
  { question: 'For parametric equations x = 2t, y = t² − 1, when t = 3: (x, y) = ?', options: ['(6, 8)', '(6, 10)', '(3, 8)', '(9, 2)'], correctAnswer: 0, explanation: 'x = 2(3) = 6, y = 9 − 1 = 8. Point: (6, 8).', domain: 'functions-modeling', topicSlug: 'parametric-equations-precalc', formSet: 'A' },
  { question: 'The sum of the geometric series 1 + 1/2 + 1/4 + 1/8 + ... is:', options: ['2', '1', '∞', '1.5'], correctAnswer: 0, explanation: 'S = a/(1−r) = 1/(1−0.5) = 2.', domain: 'functions-modeling', topicSlug: 'sequences-series-precalc', formSet: 'A' },
  { question: 'If f(x) = √x and g(x) = x + 4, then (g ∘ f)(9) = ?', options: ['7', '√13', '13', '5'], correctAnswer: 0, explanation: 'f(9) = 3, then g(3) = 3 + 4 = 7.', domain: 'functions-modeling', topicSlug: 'function-composition-inverses-precalc', formSet: 'B' },
  { question: 'If f(x) = (x − 1)/(x + 2), then f⁻¹(0) = ?', options: ['1', '−1/2', '0', '2'], correctAnswer: 0, explanation: 'Set f(x) = 0: (x−1)/(x+2) = 0 → x = 1. So f⁻¹(0) = 1.', domain: 'functions-modeling', topicSlug: 'composite-inverse-functions', formSet: 'B' },
  { question: 'For the arithmetic sequence 3, 7, 11, 15, ..., the 10th term is:', options: ['39', '43', '35', '40'], correctAnswer: 0, explanation: 'a₁₀ = 3 + (10−1)·4 = 3 + 36 = 39.', domain: 'functions-modeling', topicSlug: 'sequences-series-precalc', formSet: 'B' },
  { question: 'Parametric curve x = cos t, y = sin t traces a:', options: ['Unit circle', 'Parabola', 'Line', 'Hyperbola'], correctAnswer: 0, explanation: 'x² + y² = cos²t + sin²t = 1 → unit circle.', domain: 'functions-modeling', topicSlug: 'parametric-equations-precalc', formSet: 'B' },
  { question: 'A function f is one-to-one if:', options: ['It passes the horizontal line test', 'It passes the vertical line test', 'f(0) = 0', 'It is continuous'], correctAnswer: 0, explanation: 'One-to-one means each y-value has exactly one x-value → horizontal line test.', domain: 'functions-modeling', topicSlug: 'composite-inverse-functions', formSet: 'both' },
  { question: 'The common ratio of 5, 15, 45, 135, ... is:', options: ['3', '10', '5', '30'], correctAnswer: 0, explanation: '15/5 = 3. Each term is multiplied by 3.', domain: 'functions-modeling', topicSlug: 'sequences-series-precalc', formSet: 'both' },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }
  return a
}

export function generateAPPrecalculusDiagnosticTest(form: 'A' | 'B'): APPrecalculusTestData {
  const eligible = questionPool.filter(q => q.formSet === form || q.formSet === 'both')
  const selected: PoolQuestion[] = []
  for (const domain of AP_PRECALCULUS_DOMAINS) {
    const domainQs = shuffle(eligible.filter(q => q.domain === domain.id))
    selected.push(...domainQs.slice(0, domain.questionTarget))
  }
  const questions: APPrecalculusQuestion[] = shuffle(selected).map(q => ({
    question: q.question, options: q.options, correctAnswer: q.correctAnswer, explanation: q.explanation, domain: q.domain, topicSlug: q.topicSlug,
  }))
  return { form, questions, domains: AP_PRECALCULUS_DOMAINS, totalQuestions: questions.length, timeLimitMinutes: 40 }
}

export function scoreAPPrecalculusDiagnostic(form: 'A' | 'B', questions: APPrecalculusQuestion[], answers: Record<number, number>): APPrecalculusResults {
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
  const recommendedTopics: APPrecalculusRecommendedTopic[] = []
  domainResults.filter(d => d.level === 'weak' || d.level === 'moderate').forEach(d => {
    const domain = AP_PRECALCULUS_DOMAINS.find(dom => dom.id === d.domainId)!
    domain.topicSlugs.forEach(slug => { recommendedTopics.push({ slug, name: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '), domainId: d.domainId, priority: d.level === 'weak' ? 'high' : 'medium' }) })
  })
  return { form, totalCorrect, totalQuestions, percentage: pct, estimatedAPScore, domains: domainResults, weakAreas, moderateAreas, strengths, recommendedTopics }
}

export function pickNextForm(previousForms: ('A' | 'B')[]): 'A' | 'B' {
  if (previousForms.length === 0) return 'A'
  return previousForms[0] === 'A' ? 'B' : 'A'
}
