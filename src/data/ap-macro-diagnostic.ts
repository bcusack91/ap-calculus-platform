/**
 * AP Macroeconomics Diagnostic Test Generator
 */

import { macroQuestionPool, type MacroQuestion } from './exit-quizzes/ap-macroeconomics'

export interface APMacroDiagnosticQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface APMacroDomain {
  id: string
  name: string
  topicSlugs: string[]
  questionTarget: number
}

export const TOTAL_FORMS = 10

export interface APMacroDiagnosticTestData {
  form: number
  questions: APMacroDiagnosticQuestion[]
  domains: APMacroDomain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface APMacroDomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface APMacroRecommendedTopic {
  slug: string
  name: string
  domainId: string
  priority: 'high' | 'medium'
}

export interface APMacroDiagnosticResults {
  form: number
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedAPScore: number
  domains: APMacroDomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: APMacroRecommendedTopic[]
}

const AP_MACRO_DOMAINS: APMacroDomain[] = [
  {
    id: 'basic-concepts',
    name: 'Basic Economic Concepts',
    topicSlugs: ['macro-scarcity-opportunity-cost', 'macro-comparative-advantage'],
    questionTarget: 5,
  },
  {
    id: 'measurement',
    name: 'Economic Indicators & GDP',
    topicSlugs: ['macro-gdp-growth', 'macro-unemployment-inflation'],
    questionTarget: 5,
  },
  {
    id: 'national-income',
    name: 'National Income & Price Determination',
    topicSlugs: ['macro-ad-as', 'macro-multiplier-effect', 'macro-phillips-curve'],
    questionTarget: 4,
  },
  {
    id: 'financial-sector',
    name: 'Financial Sector',
    topicSlugs: ['macro-money-banking', 'macro-monetary-policy'],
    questionTarget: 4,
  },
  {
    id: 'stabilization',
    name: 'Stabilization Policies',
    topicSlugs: ['macro-fiscal-policy', 'macro-fiscal-policy-tools'],
    questionTarget: 5,
  },
  {
    id: 'international',
    name: 'International Trade & Finance',
    topicSlugs: ['macro-open-economy', 'macro-international-trade-finance'],
    questionTarget: 4,
  }
]

export { AP_MACRO_DOMAINS }

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

export function generateAPMacroDiagnosticTest(form: number): APMacroDiagnosticTestData {
  const rng = mulberry32(form * 7919)
  const questions: APMacroDiagnosticQuestion[] = []

  for (const domain of AP_MACRO_DOMAINS) {
    const pool = macroQuestionPool.filter(
      (q: MacroQuestion) => q.domain === domain.id,
    )
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

  return {
    form,
    questions: seededShuffle(questions, rng),
    domains: AP_MACRO_DOMAINS,
    totalQuestions: questions.length,
    timeLimitMinutes: 55,
  }
}

export function scoreAPMacroDiagnostic(
  form: number,
  questions: APMacroDiagnosticQuestion[],
  answers: Record<number, number>,
): APMacroDiagnosticResults {
  const domainResults: APMacroDomainResult[] = AP_MACRO_DOMAINS.map(domain => {
    const domainQs = questions.map((q, i) => ({ q, i })).filter(({ q }) => q.domain === domain.id)
    const correct = domainQs.filter(({ i }) => { const a = answers[i]; return a !== undefined && a === questions[i].correctAnswer }).length
    const total = domainQs.length
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0
    const level: 'strong' | 'moderate' | 'weak' = percentage >= 75 ? 'strong' : percentage >= 50 ? 'moderate' : 'weak'
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

  const recommendedTopics: APMacroRecommendedTopic[] = []
  // Prioritize by exam weight (questionTarget) so highest-impact topics surface first.
  const examWeight = (id: string) => AP_MACRO_DOMAINS.find(d => d.id === id)?.questionTarget ?? 0
  const weakDomainResults = [...domainResults.filter(d => d.level === 'weak')].sort((a, b) => examWeight(b.domainId) - examWeight(a.domainId))
  const moderateDomainResults = [...domainResults.filter(d => d.level === 'moderate')].sort((a, b) => examWeight(b.domainId) - examWeight(a.domainId))
  for (const wd of weakDomainResults) {
    const domainDef = AP_MACRO_DOMAINS.find(d => d.id === wd.domainId)
    if (!domainDef) continue
    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => { if (q.domain === wd.domainId && (answers[i] === undefined || answers[i] !== q.correctAnswer)) missedSlugs.add(q.topicSlug) })
    const slugs = missedSlugs.size > 0 ? [...missedSlugs].slice(0, 2) : domainDef.topicSlugs.slice(0, 2)
    for (const slug of slugs) { if (recommendedTopics.length < 5) recommendedTopics.push({ slug, name: slugToReadableName(slug), domainId: wd.domainId, priority: 'high' }) }
  }
  for (const md of moderateDomainResults) {
    if (recommendedTopics.length >= 5) break
    const domainDef = AP_MACRO_DOMAINS.find(d => d.id === md.domainId)
    if (!domainDef) continue
    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => { if (q.domain === md.domainId && (answers[i] === undefined || answers[i] !== q.correctAnswer)) missedSlugs.add(q.topicSlug) })
    const slug = missedSlugs.size > 0 ? [...missedSlugs][0] : domainDef.topicSlugs[0]
    recommendedTopics.push({ slug, name: slugToReadableName(slug), domainId: md.domainId, priority: 'medium' })
  }

  return { form, totalCorrect, totalQuestions, percentage, estimatedAPScore, domains: domainResults, weakAreas, moderateAreas, strengths, recommendedTopics: recommendedTopics.slice(0, 5) }
}

export function pickNextForm(previousForms: number[]): number {
  if (previousForms.length === 0) return 1
  const last = previousForms[previousForms.length - 1]
  return last >= TOTAL_FORMS ? 1 : last + 1
}

const SLUG_LABELS: Record<string, string> = {
  'macro-scarcity-opportunity-cost': 'Scarcity Opportunity Cost',
  'macro-comparative-advantage': 'Comparative Advantage',
  'macro-gdp-growth': 'Gdp Growth',
  'macro-unemployment-inflation': 'Unemployment Inflation',
  'macro-ad-as': 'Ad As',
  'macro-multiplier-effect': 'Multiplier Effect',
  'macro-phillips-curve': 'Phillips Curve',
  'macro-money-banking': 'Money Banking',
  'macro-monetary-policy': 'Monetary Policy',
  'macro-fiscal-policy': 'Fiscal Policy',
  'macro-fiscal-policy-tools': 'Fiscal Policy Tools',
  'macro-open-economy': 'Open Economy',
  'macro-international-trade-finance': 'International Trade Finance',
}

function slugToReadableName(slug: string): string {
  return SLUG_LABELS[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}
