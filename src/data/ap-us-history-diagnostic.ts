/**
 * AP US History Diagnostic Test Generator
 */

import { usHistQuestionPool, type USHistQuestion } from './exit-quizzes/ap-us-history'

export interface APUsHistoryDiagnosticQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface APUsHistoryDomain {
  id: string
  name: string
  topicSlugs: string[]
  questionTarget: number
}

export const TOTAL_FORMS = 10

export interface APUsHistoryDiagnosticTestData {
  form: number
  questions: APUsHistoryDiagnosticQuestion[]
  domains: APUsHistoryDomain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface APUsHistoryDomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface APUsHistoryRecommendedTopic {
  slug: string
  name: string
  domainId: string
  priority: 'high' | 'medium'
}

export interface APUsHistoryDiagnosticResults {
  form: number
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedAPScore: number
  domains: APUsHistoryDomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: APUsHistoryRecommendedTopic[]
}

const AP_USHISTORY_DOMAINS: APUsHistoryDomain[] = [
  {
    id: 'period-1-2',
    name: 'Periods 1–2 (1491–1754)',
    topicSlugs: ['apush-native-societies-exploration', 'apush-colonial-america', 'apush-colonial-society-conflicts'],
    questionTarget: 5,
  },
  {
    id: 'period-3',
    name: 'Period 3 (1754–1800)',
    topicSlugs: ['apush-revolution-independence', 'apush-constitution-early-republic'],
    questionTarget: 5,
  },
  {
    id: 'period-4',
    name: 'Period 4 (1800–1848)',
    topicSlugs: ['apush-democracy-expansion', 'apush-reform-movements'],
    questionTarget: 5,
  },
  {
    id: 'period-5',
    name: 'Period 5 (1844–1877)',
    topicSlugs: ['apush-civil-war', 'apush-reconstruction'],
    questionTarget: 5,
  },
  {
    id: 'period-6',
    name: 'Period 6 (1865–1898)',
    topicSlugs: ['apush-gilded-age'],
    questionTarget: 4,
  },
  {
    id: 'period-7',
    name: 'Period 7 (1890–1945)',
    topicSlugs: ['apush-progressivism-wwi', 'apush-depression-wwii'],
    questionTarget: 4,
  }
]

export { AP_USHISTORY_DOMAINS }

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

export function generateAPUsHistoryDiagnosticTest(form: number): APUsHistoryDiagnosticTestData {
  const rng = mulberry32(form * 7919)
  const questions: APUsHistoryDiagnosticQuestion[] = []

  for (const domain of AP_USHISTORY_DOMAINS) {
    const pool = usHistQuestionPool.filter(
      (q: USHistQuestion) => q.domain === domain.id,
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
    domains: AP_USHISTORY_DOMAINS,
    totalQuestions: questions.length,
    timeLimitMinutes: 55,
  }
}

export function scoreAPUsHistoryDiagnostic(
  form: number,
  questions: APUsHistoryDiagnosticQuestion[],
  answers: Record<number, number>,
): APUsHistoryDiagnosticResults {
  const domainResults: APUsHistoryDomainResult[] = AP_USHISTORY_DOMAINS.map(domain => {
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

  const recommendedTopics: APUsHistoryRecommendedTopic[] = []
  for (const wd of domainResults.filter(d => d.level === 'weak')) {
    const domainDef = AP_USHISTORY_DOMAINS.find(d => d.id === wd.domainId)
    if (!domainDef) continue
    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => { if (q.domain === wd.domainId && (answers[i] === undefined || answers[i] !== q.correctAnswer)) missedSlugs.add(q.topicSlug) })
    const slugs = missedSlugs.size > 0 ? [...missedSlugs].slice(0, 2) : domainDef.topicSlugs.slice(0, 2)
    for (const slug of slugs) { if (recommendedTopics.length < 5) recommendedTopics.push({ slug, name: slugToReadableName(slug), domainId: wd.domainId, priority: 'high' }) }
  }
  for (const md of domainResults.filter(d => d.level === 'moderate')) {
    if (recommendedTopics.length >= 5) break
    const domainDef = AP_USHISTORY_DOMAINS.find(d => d.id === md.domainId)
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
  'apush-native-societies-exploration': 'Native Societies Exploration',
  'apush-colonial-america': 'Colonial America',
  'apush-colonial-society-conflicts': 'Colonial Society Conflicts',
  'apush-revolution-independence': 'Revolution Independence',
  'apush-constitution-early-republic': 'Constitution Early Republic',
  'apush-democracy-expansion': 'Democracy Expansion',
  'apush-reform-movements': 'Reform Movements',
  'apush-civil-war': 'Civil War',
  'apush-reconstruction': 'Reconstruction',
  'apush-gilded-age': 'Gilded Age',
  'apush-progressivism-wwi': 'Progressivism Wwi',
  'apush-depression-wwii': 'Depression Wwii',
}

function slugToReadableName(slug: string): string {
  return SLUG_LABELS[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}
