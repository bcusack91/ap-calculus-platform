/**
 * AP Calculus BC Diagnostic Test Generator
 *
 * The BC exam covers ALL AB content plus BC-exclusive topics.
 * This diagnostic pulls questions from BOTH the AB pool (foundational) and the
 * BC pool (BC-exclusive) to give a comprehensive assessment.
 *
 * Produces two alternate forms (A and B) each with ~35 questions spanning
 * both AB-foundational and BC-exclusive domains.
 */

import { calcABQuestionPool, type CalcABQuestion } from './exit-quizzes/ap-calculus-ab'
import { calcBCQuestionPool, type CalcBCQuestion } from './exit-quizzes/ap-calculus-bc'

/* ------------------------------------------------------------------ */
/*  Public types                                                       */
/* ------------------------------------------------------------------ */

export interface CalcBCDiagnosticQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface CalcBCDomain {
  id: string
  name: string
  topicSlugs: string[]
  questionTarget: number
  /** Whether this domain uses AB-pool questions */
  source: 'ab' | 'bc'
}

export interface CalcBCDiagnosticTestData {
  form: 'A' | 'B'
  questions: CalcBCDiagnosticQuestion[]
  domains: CalcBCDomain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface CalcBCDomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface CalcBCRecommendedTopic {
  slug: string
  name: string
  domainId: string
  priority: 'high' | 'medium'
}

export interface CalcBCDiagnosticResults {
  form: 'A' | 'B'
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedAPScore: number
  abSubscore: number
  domains: CalcBCDomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: CalcBCRecommendedTopic[]
}

/* ------------------------------------------------------------------ */
/*  Domain definitions                                                 */
/* ------------------------------------------------------------------ */

const CALC_BC_DOMAINS: CalcBCDomain[] = [
  // AB-foundational (smaller question targets since BC also has exclusive content)
  {
    id: 'limits',
    name: 'Limits & Continuity',
    topicSlugs: ['limits-continuity-calcab'],
    questionTarget: 3,
    source: 'ab',
  },
  {
    id: 'differentiation',
    name: 'Differentiation Fundamentals',
    topicSlugs: [
      'definition-of-derivative-calcab',
      'basic-differentiation-rules-calcab',
      'chain-rule-calcab',
      'inverse-functions-derivatives-calcab',
    ],
    questionTarget: 3,
    source: 'ab',
  },
  {
    id: 'applications-derivatives',
    name: 'Applications of Derivatives',
    topicSlugs: [
      'applications-of-derivatives-calcab',
      'optimization-calcab',
      'linearization-differentials-calcab',
      'theorem-applications-calcab',
      'particle-motion-calcab',
    ],
    questionTarget: 3,
    source: 'ab',
  },
  {
    id: 'integration',
    name: 'Integration (AB)',
    topicSlugs: [
      'definite-integrals-calcab',
      'antiderivatives-indefinite-integrals-calcab',
      'u-substitution-calcab',
      'accumulation-functions-calcab',
    ],
    questionTarget: 3,
    source: 'ab',
  },
  {
    id: 'applications-integration',
    name: 'Applications of Integration',
    topicSlugs: [
      'area-between-curves-calcab',
      'volumes-of-revolution-calcab',
      'integration-applications-calcab',
    ],
    questionTarget: 2,
    source: 'ab',
  },
  // BC-exclusive domains
  {
    id: 'advanced-integration',
    name: 'Advanced Integration Techniques',
    topicSlugs: [
      'integration-by-parts-calcbc',
      'partial-fractions-calcbc',
      'improper-integrals-calcbc',
      'advanced-integration-calcbc',
    ],
    questionTarget: 5,
    source: 'bc',
  },
  {
    id: 'parametric-polar-vector',
    name: 'Parametric, Polar & Vector Calculus',
    topicSlugs: [
      'parametric-curves-calculus-calcbc',
      'polar-calculus-calcbc',
      'vector-valued-functions-calcbc',
      'arc-length-surface-area-calcbc',
    ],
    questionTarget: 5,
    source: 'bc',
  },
  {
    id: 'sequences-series',
    name: 'Sequences & Series',
    topicSlugs: [
      'infinite-sequences-calcbc',
      'infinite-series-calcbc',
      'convergence-tests-summary-calcbc',
      'alternating-series-calcbc',
    ],
    questionTarget: 5,
    source: 'bc',
  },
  {
    id: 'taylor-series',
    name: 'Power Series & Taylor/Maclaurin',
    topicSlugs: [
      'power-series-calcbc',
      'taylor-maclaurin-series-calcbc',
      'lagrange-error-bound-calcbc',
      'series-applications-calcbc',
    ],
    questionTarget: 5,
    source: 'bc',
  },
  {
    id: 'advanced-diffeq',
    name: 'Advanced Differential Equations',
    topicSlugs: [
      'euler-method-advanced-calcbc',
      'logistic-models-calcbc',
    ],
    questionTarget: 3,
    source: 'bc',
  },
]

export { CALC_BC_DOMAINS }

/* ------------------------------------------------------------------ */
/*  Generator                                                          */
/* ------------------------------------------------------------------ */

export function generateCalcBCDiagnosticTest(form: 'A' | 'B'): CalcBCDiagnosticTestData {
  const questions: CalcBCDiagnosticQuestion[] = []

  for (const domain of CALC_BC_DOMAINS) {
    const pool: (CalcABQuestion | CalcBCQuestion)[] =
      domain.source === 'ab'
        ? calcABQuestionPool.filter(q => q.domain === domain.id && (q.formSet === form || q.formSet === 'both'))
        : calcBCQuestionPool.filter(q => q.domain === domain.id && (q.formSet === form || q.formSet === 'both'))

    const shuffled = [...pool].sort(() => Math.random() - 0.5)
    const selected = shuffled.slice(0, domain.questionTarget)

    for (const q of selected) {
      questions.push({
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        domain: domain.id,
        topicSlug: q.topicSlug,
      })
    }
  }

  return {
    form,
    questions: questions.sort(() => Math.random() - 0.5),
    domains: CALC_BC_DOMAINS,
    totalQuestions: questions.length,
    timeLimitMinutes: 50,
  }
}

/* ------------------------------------------------------------------ */
/*  Scoring                                                            */
/* ------------------------------------------------------------------ */

export function scoreCalcBCDiagnostic(
  form: 'A' | 'B',
  questions: CalcBCDiagnosticQuestion[],
  answers: Record<number, number>,
): CalcBCDiagnosticResults {
  const domainResults: CalcBCDomainResult[] = CALC_BC_DOMAINS.map(domain => {
    const domainQs = questions
      .map((q, i) => ({ q, i }))
      .filter(({ q }) => q.domain === domain.id)

    const correct = domainQs.filter(({ i }) => {
      const answer = answers[i]
      return answer !== undefined && answer === questions[i].correctAnswer
    }).length

    const total = domainQs.length
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0
    const level: 'strong' | 'moderate' | 'weak' =
      percentage >= 75 ? 'strong' : percentage >= 50 ? 'moderate' : 'weak'

    return { domainId: domain.id, domainName: domain.name, correct, total, percentage, level }
  })

  const totalCorrect = domainResults.reduce((s, d) => s + d.correct, 0)
  const totalQuestions = domainResults.reduce((s, d) => s + d.total, 0)
  const percentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0

  // AB subscore: only from AB-source domains
  const abDomains = CALC_BC_DOMAINS.filter(d => d.source === 'ab').map(d => d.id)
  const abResults = domainResults.filter(d => abDomains.includes(d.domainId))
  const abCorrect = abResults.reduce((s, d) => s + d.correct, 0)
  const abTotal = abResults.reduce((s, d) => s + d.total, 0)
  const abPct = abTotal > 0 ? Math.round((abCorrect / abTotal) * 100) : 0
  let abSubscore: number
  if (abPct >= 80) abSubscore = 5
  else if (abPct >= 65) abSubscore = 4
  else if (abPct >= 50) abSubscore = 3
  else if (abPct >= 35) abSubscore = 2
  else abSubscore = 1

  let estimatedAPScore: number
  if (percentage >= 80) estimatedAPScore = 5
  else if (percentage >= 65) estimatedAPScore = 4
  else if (percentage >= 50) estimatedAPScore = 3
  else if (percentage >= 35) estimatedAPScore = 2
  else estimatedAPScore = 1

  const weakAreas = domainResults.filter(d => d.level === 'weak').map(d => d.domainName)
  const moderateAreas = domainResults.filter(d => d.level === 'moderate').map(d => d.domainName)
  const strengths = domainResults.filter(d => d.level === 'strong').map(d => d.domainName)

  const recommendedTopics: CalcBCRecommendedTopic[] = []

  for (const wd of domainResults.filter(d => d.level === 'weak')) {
    const domainDef = CALC_BC_DOMAINS.find(d => d.id === wd.domainId)
    if (!domainDef) continue

    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => {
      if (q.domain === wd.domainId) {
        const answer = answers[i]
        if (answer === undefined || answer !== q.correctAnswer) {
          missedSlugs.add(q.topicSlug)
        }
      }
    })

    const slugsToRecommend = missedSlugs.size > 0
      ? [...missedSlugs].slice(0, 2)
      : domainDef.topicSlugs.slice(0, 2)

    for (const slug of slugsToRecommend) {
      if (recommendedTopics.length >= 5) break
      recommendedTopics.push({
        slug,
        name: slugToReadableName(slug),
        domainId: wd.domainId,
        priority: 'high',
      })
    }
  }

  for (const md of domainResults.filter(d => d.level === 'moderate')) {
    if (recommendedTopics.length >= 5) break
    const domainDef = CALC_BC_DOMAINS.find(d => d.id === md.domainId)
    if (!domainDef) continue

    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => {
      if (q.domain === md.domainId) {
        const answer = answers[i]
        if (answer === undefined || answer !== q.correctAnswer) {
          missedSlugs.add(q.topicSlug)
        }
      }
    })

    const slug = missedSlugs.size > 0
      ? [...missedSlugs][0]
      : domainDef.topicSlugs[0]

    recommendedTopics.push({
      slug,
      name: slugToReadableName(slug),
      domainId: md.domainId,
      priority: 'medium',
    })
  }

  return {
    form,
    totalCorrect,
    totalQuestions,
    percentage,
    estimatedAPScore,
    abSubscore,
    domains: domainResults,
    weakAreas,
    moderateAreas,
    strengths,
    recommendedTopics: recommendedTopics.slice(0, 5),
  }
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

export function pickNextForm(previousForms: ('A' | 'B')[]): 'A' | 'B' {
  if (previousForms.length === 0) return 'A'
  return previousForms[previousForms.length - 1] === 'A' ? 'B' : 'A'
}

const SLUG_LABELS: Record<string, string> = {
  // AB topics
  'limits-continuity-calcab': 'Limits & Continuity',
  'definition-of-derivative-calcab': 'Definition of the Derivative',
  'basic-differentiation-rules-calcab': 'Basic Differentiation Rules',
  'chain-rule-calcab': 'Chain Rule',
  'inverse-functions-derivatives-calcab': 'Inverse Functions & Derivatives',
  'applications-of-derivatives-calcab': 'Applications of Derivatives',
  'optimization-calcab': 'Optimization',
  'linearization-differentials-calcab': 'Linearization & Differentials',
  'theorem-applications-calcab': 'Theorem Applications (MVT, IVT)',
  'particle-motion-calcab': 'Particle Motion',
  'definite-integrals-calcab': 'Definite Integrals',
  'antiderivatives-indefinite-integrals-calcab': 'Antiderivatives & Indefinite Integrals',
  'u-substitution-calcab': 'u-Substitution',
  'accumulation-functions-calcab': 'Accumulation Functions (FTC)',
  'area-between-curves-calcab': 'Area Between Curves',
  'volumes-of-revolution-calcab': 'Volumes of Revolution',
  'integration-applications-calcab': 'Integration Applications',
  // BC topics
  'integration-by-parts-calcbc': 'Integration by Parts',
  'partial-fractions-calcbc': 'Partial Fractions',
  'improper-integrals-calcbc': 'Improper Integrals',
  'advanced-integration-calcbc': 'Advanced Integration',
  'parametric-curves-calculus-calcbc': 'Parametric Curves & Calculus',
  'polar-calculus-calcbc': 'Polar Calculus',
  'vector-valued-functions-calcbc': 'Vector-Valued Functions',
  'arc-length-surface-area-calcbc': 'Arc Length & Surface Area',
  'infinite-sequences-calcbc': 'Infinite Sequences',
  'infinite-series-calcbc': 'Infinite Series',
  'convergence-tests-summary-calcbc': 'Convergence Tests',
  'alternating-series-calcbc': 'Alternating Series',
  'power-series-calcbc': 'Power Series',
  'taylor-maclaurin-series-calcbc': 'Taylor & Maclaurin Series',
  'lagrange-error-bound-calcbc': 'Lagrange Error Bound',
  'series-applications-calcbc': 'Series Applications',
  'euler-method-advanced-calcbc': 'Euler\'s Method',
  'logistic-models-calcbc': 'Logistic Models',
  'bc-exam-strategies-calcbc': 'BC Exam Strategies',
  'review-connections-calcbc': 'Review & Connections',
}

function slugToReadableName(slug: string): string {
  if (SLUG_LABELS[slug]) return SLUG_LABELS[slug]
  return slug
    .replace(/-calc[ab]c?$/, '')
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}
