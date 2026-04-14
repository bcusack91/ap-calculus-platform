/**
 * AP Statistics Diagnostic Test Generator
 *
 * Produces 10 alternate forms (1–10) each with ~33 questions spanning
 * all 6 AP Statistics domains.  Each form uses a seeded PRNG to
 * deterministically select a different subset of questions from the pool.
 */

import { apStatsQuestionPool } from './exit-quizzes/ap-statistics'

/* ------------------------------------------------------------------ */
/*  Public types                                                       */
/* ------------------------------------------------------------------ */

export interface APStatsDiagnosticQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface APStatsDomain {
  id: string
  name: string
  /** Topic slugs that map to this domain (used for remediation links) */
  topicSlugs: string[]
  questionTarget: number
}

export const TOTAL_FORMS = 10

export interface APStatsDiagnosticTestData {
  form: number
  questions: APStatsDiagnosticQuestion[]
  domains: APStatsDomain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface APStatsDomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface APStatsRecommendedTopic {
  slug: string
  name: string
  domainId: string
  priority: 'high' | 'medium'
}

export interface APStatsDiagnosticResults {
  form: number
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedAPScore: number // 1-5
  domains: APStatsDomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: APStatsRecommendedTopic[]
}

/* ------------------------------------------------------------------ */
/*  Domain definitions                                                 */
/* ------------------------------------------------------------------ */

const AP_STATS_DOMAINS: APStatsDomain[] = [
  { id: 'exploring-data', name: 'Exploring Data', topicSlugs: ['types-data-sampling', 'displaying-distributions-graphs', 'describing-distributions', 'measures-of-spread', 'measures-of-center', 'normal-distributions'], questionTarget: 5 },
  { id: 'sampling-experimentation', name: 'Sampling & Experimentation', topicSlugs: ['sampling-methods', 'bias-sampling-surveys', 'observational-vs-experiments', 'experimental-design'], questionTarget: 5 },
  { id: 'probability', name: 'Probability', topicSlugs: ['basic-probability-rules', 'conditional-probability', 'independence', 'discrete-random-variables', 'continuous-random-variables', 'binomial-distribution', 'geometric-distribution'], questionTarget: 6 },
  { id: 'regression', name: 'Regression & Correlation', topicSlugs: ['scatterplots-correlation', 'least-squares-regression', 'residuals-residual-plots', 'coefficient-determination', 'transformations-linearity'], questionTarget: 5 },
  { id: 'confidence-intervals', name: 'Confidence Intervals', topicSlugs: ['sampling-distributions', 'central-limit-theorem', 'ci-proportions', 'ci-means', 'interpreting-ci', 'paired-data'], questionTarget: 6 },
  { id: 'hypothesis-testing', name: 'Hypothesis Testing', topicSlugs: ['hypothesis-testing-framework', 'tests-proportions', 'tests-means', 'type-errors', 'chi-square-tests', 'inference-regression'], questionTarget: 6 },
]

export { AP_STATS_DOMAINS }

/* ------------------------------------------------------------------ */
/*  Seeded PRNG (mulberry32) for deterministic per-form selection      */
/* ------------------------------------------------------------------ */

function mulberry32(seed: number) {
  return function () {
    // eslint-disable-next-line no-param-reassign
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function seededShuffle<T>(arr: T[], rng: () => number): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/* ------------------------------------------------------------------ */
/*  Generator                                                          */
/* ------------------------------------------------------------------ */

export function generateAPStatsDiagnosticTest(form: number): APStatsDiagnosticTestData {
  const rng = mulberry32(form * 7919)
  const questions: APStatsDiagnosticQuestion[] = []

  for (const domain of AP_STATS_DOMAINS) {
    const pool = apStatsQuestionPool.filter(q => q.domain === domain.id)
    const shuffled = seededShuffle(pool, rng)
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

  const shuffledQuestions = seededShuffle(questions, rng)

  return {
    form,
    questions: shuffledQuestions,
    domains: AP_STATS_DOMAINS,
    totalQuestions: shuffledQuestions.length,
    timeLimitMinutes: 45,
  }
}

/* ------------------------------------------------------------------ */
/*  Scoring                                                            */
/* ------------------------------------------------------------------ */

export function scoreAPStatsDiagnostic(
  form: number,
  questions: APStatsDiagnosticQuestion[],
  answers: Record<number, number>,
): APStatsDiagnosticResults {
  const domainResults: APStatsDomainResult[] = AP_STATS_DOMAINS.map(domain => {
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

  const recommendedTopics: APStatsRecommendedTopic[] = []

  for (const wd of domainResults.filter(d => d.level === 'weak')) {
    const domainDef = AP_STATS_DOMAINS.find(d => d.id === wd.domainId)
    if (!domainDef) continue
    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => {
      if (q.domain === wd.domainId) {
        const answer = answers[i]
        if (answer === undefined || answer !== q.correctAnswer) missedSlugs.add(q.topicSlug)
      }
    })
    const slugsToRecommend = missedSlugs.size > 0 ? [...missedSlugs].slice(0, 2) : domainDef.topicSlugs.slice(0, 2)
    for (const slug of slugsToRecommend) {
      if (recommendedTopics.length >= 5) break
      recommendedTopics.push({ slug, name: slugToReadableName(slug), domainId: wd.domainId, priority: 'high' })
    }
  }

  for (const md of domainResults.filter(d => d.level === 'moderate')) {
    if (recommendedTopics.length >= 5) break
    const domainDef = AP_STATS_DOMAINS.find(d => d.id === md.domainId)
    if (!domainDef) continue
    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => {
      if (q.domain === md.domainId) {
        const answer = answers[i]
        if (answer === undefined || answer !== q.correctAnswer) missedSlugs.add(q.topicSlug)
      }
    })
    const slug = missedSlugs.size > 0 ? [...missedSlugs][0] : domainDef.topicSlugs[0]
    recommendedTopics.push({ slug, name: slugToReadableName(slug), domainId: md.domainId, priority: 'medium' })
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

export function pickNextForm(previousForms: number[]): number {
  if (previousForms.length === 0) return 1
  const last = previousForms[previousForms.length - 1]
  return last >= TOTAL_FORMS ? 1 : last + 1
}

const SLUG_LABELS: Record<string, string> = {
  'types-data-sampling': 'Types of Data & Sampling',
  'displaying-distributions-graphs': 'Displaying Distributions',
  'describing-distributions': 'Describing Distributions',
  'measures-of-spread': 'Measures of Spread',
  'measures-of-center': 'Measures of Center',
  'normal-distributions': 'Normal Distributions',
  'sampling-methods': 'Sampling Methods',
  'bias-sampling-surveys': 'Bias in Sampling & Surveys',
  'observational-vs-experiments': 'Observational Studies vs. Experiments',
  'experimental-design': 'Experimental Design',
  'basic-probability-rules': 'Probability Rules',
  'conditional-probability': 'Conditional Probability',
  'independence': 'Independence',
  'discrete-random-variables': 'Discrete Random Variables',
  'continuous-random-variables': 'Continuous Random Variables',
  'binomial-distribution': 'Binomial Distribution',
  'geometric-distribution': 'Geometric Distribution',
  'scatterplots-correlation': 'Scatterplots & Correlation',
  'least-squares-regression': 'Least-Squares Regression',
  'residuals-residual-plots': 'Residuals & Residual Plots',
  'coefficient-determination': 'Coefficient of Determination',
  'transformations-linearity': 'Transformations for Linearity',
  'sampling-distributions': 'Sampling Distributions',
  'central-limit-theorem': 'Central Limit Theorem',
  'ci-proportions': 'Confidence Intervals for Proportions',
  'ci-means': 'Confidence Intervals for Means',
  'interpreting-ci': 'Interpreting Confidence Intervals',
  'paired-data': 'Paired Data',
  'hypothesis-testing-framework': 'Hypothesis Testing Framework',
  'tests-proportions': 'Tests for Proportions',
  'tests-means': 'Tests for Means',
  'type-errors': 'Type I & Type II Errors',
  'chi-square-tests': 'Chi-Square Tests',
  'inference-regression': 'Inference for Regression',
}

function slugToReadableName(slug: string): string {
  return SLUG_LABELS[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}
