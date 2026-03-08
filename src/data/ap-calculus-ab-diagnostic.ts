/**
 * AP Calculus AB Diagnostic Test Generator
 *
 * Produces two alternate forms (A and B) each with ~30 questions spanning
 * all 6 AP Calculus AB domains.  After each test, weak domains are mapped to
 * 3-5 specific topic slugs the student should review.
 */

import { calcABQuestionPool, type CalcABQuestion } from './exit-quizzes/ap-calculus-ab'

/* ------------------------------------------------------------------ */
/*  Public types                                                       */
/* ------------------------------------------------------------------ */

export interface CalcABDiagnosticQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface CalcABDomain {
  id: string
  name: string
  topicSlugs: string[]
  questionTarget: number
}

export interface CalcABDiagnosticTestData {
  form: 'A' | 'B'
  questions: CalcABDiagnosticQuestion[]
  domains: CalcABDomain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface CalcABDomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface CalcABRecommendedTopic {
  slug: string
  name: string
  domainId: string
  priority: 'high' | 'medium'
}

export interface CalcABDiagnosticResults {
  form: 'A' | 'B'
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedAPScore: number
  domains: CalcABDomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: CalcABRecommendedTopic[]
}

/* ------------------------------------------------------------------ */
/*  Domain definitions                                                 */
/* ------------------------------------------------------------------ */

const CALC_AB_DOMAINS: CalcABDomain[] = [
  {
    id: 'limits',
    name: 'Limits & Continuity',
    topicSlugs: ['limits-continuity-calcab'],
    questionTarget: 5,
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
    questionTarget: 6,
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
    questionTarget: 6,
  },
  {
    id: 'integration',
    name: 'Integration',
    topicSlugs: [
      'definite-integrals-calcab',
      'antiderivatives-indefinite-integrals-calcab',
      'u-substitution-calcab',
      'accumulation-functions-calcab',
    ],
    questionTarget: 6,
  },
  {
    id: 'applications-integration',
    name: 'Applications of Integration',
    topicSlugs: [
      'area-between-curves-calcab',
      'volumes-of-revolution-calcab',
      'integration-applications-calcab',
    ],
    questionTarget: 5,
  },
  {
    id: 'diffeq',
    name: 'Differential Equations & Modeling',
    topicSlugs: [
      'differential-equations-calcab',
      'exponential-models-calcab',
    ],
    questionTarget: 4,
  },
  {
    id: 'exam-prep',
    name: 'AP Exam Strategies',
    topicSlugs: [
      'tables-data-calcab',
      'free-response-strategies-calcab',
      'ap-exam-review-calcab',
    ],
    questionTarget: 3,
  },
]

export { CALC_AB_DOMAINS }

/* ------------------------------------------------------------------ */
/*  Generator                                                          */
/* ------------------------------------------------------------------ */

export function generateCalcABDiagnosticTest(form: 'A' | 'B'): CalcABDiagnosticTestData {
  const questions: CalcABDiagnosticQuestion[] = []

  for (const domain of CALC_AB_DOMAINS) {
    const pool = calcABQuestionPool.filter(
      (q: CalcABQuestion) => q.domain === domain.id && (q.formSet === form || q.formSet === 'both'),
    )

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
    domains: CALC_AB_DOMAINS,
    totalQuestions: questions.length,
    timeLimitMinutes: 45,
  }
}

/* ------------------------------------------------------------------ */
/*  Scoring                                                            */
/* ------------------------------------------------------------------ */

export function scoreCalcABDiagnostic(
  form: 'A' | 'B',
  questions: CalcABDiagnosticQuestion[],
  answers: Record<number, number>,
): CalcABDiagnosticResults {
  const domainResults: CalcABDomainResult[] = CALC_AB_DOMAINS.map(domain => {
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

  let estimatedAPScore: number
  if (percentage >= 80) estimatedAPScore = 5
  else if (percentage >= 65) estimatedAPScore = 4
  else if (percentage >= 50) estimatedAPScore = 3
  else if (percentage >= 35) estimatedAPScore = 2
  else estimatedAPScore = 1

  const weakAreas = domainResults.filter(d => d.level === 'weak').map(d => d.domainName)
  const moderateAreas = domainResults.filter(d => d.level === 'moderate').map(d => d.domainName)
  const strengths = domainResults.filter(d => d.level === 'strong').map(d => d.domainName)

  const recommendedTopics: CalcABRecommendedTopic[] = []

  for (const wd of domainResults.filter(d => d.level === 'weak')) {
    const domainDef = CALC_AB_DOMAINS.find(d => d.id === wd.domainId)
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
    const domainDef = CALC_AB_DOMAINS.find(d => d.id === md.domainId)
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
  'differential-equations-calcab': 'Differential Equations',
  'exponential-models-calcab': 'Exponential Models',
  'tables-data-calcab': 'Tables & Data Analysis',
  'free-response-strategies-calcab': 'Free Response Strategies',
  'ap-exam-review-calcab': 'AP Exam Review',
}

function slugToReadableName(slug: string): string {
  if (SLUG_LABELS[slug]) return SLUG_LABELS[slug]
  return slug
    .replace(/-calcab$/, '')
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}
