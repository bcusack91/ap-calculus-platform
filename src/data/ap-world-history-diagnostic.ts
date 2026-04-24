/**
 * AP World History Diagnostic Test Generator
 */

import { worldHistQuestionPool, type WorldHistQuestion } from './exit-quizzes/ap-world-history'

export interface APWorldHistoryDiagnosticQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface APWorldHistoryDomain {
  id: string
  name: string
  topicSlugs: string[]
  questionTarget: number
}

export const TOTAL_FORMS = 10

export interface APWorldHistoryDiagnosticTestData {
  form: number
  questions: APWorldHistoryDiagnosticQuestion[]
  domains: APWorldHistoryDomain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface APWorldHistoryDomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface APWorldHistoryRecommendedTopic {
  slug: string
  name: string
  domainId: string
  priority: 'high' | 'medium'
}

export interface APWorldHistoryDiagnosticResults {
  form: number
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedAPScore: number
  domains: APWorldHistoryDomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: APWorldHistoryRecommendedTopic[]
}

const AP_WORLDHISTORY_DOMAINS: APWorldHistoryDomain[] = [
  {
    id: 'global-tapestry',
    name: 'The Global Tapestry (1200–1450)',
    topicSlugs: ['wh-global-tapestry', 'wh-dar-al-islam'],
    questionTarget: 5,
  },
  {
    id: 'networks-exchange',
    name: 'Networks of Exchange (1200–1450)',
    topicSlugs: ['wh-silk-roads-mongols', 'wh-indian-ocean-trade', 'wh-americas-africa-1200'],
    questionTarget: 5,
  },
  {
    id: 'land-based-empires',
    name: 'Land-Based Empires (1450–1750)',
    topicSlugs: ['wh-land-based-empires', 'wh-islamic-empires', 'wh-east-asian-empires'],
    questionTarget: 4,
  },
  {
    id: 'transoceanic',
    name: 'Transoceanic Interconnections (1450–1750)',
    topicSlugs: ['wh-exploration-columbian-exchange', 'wh-maritime-empires-labor', 'wh-transoceanic'],
    questionTarget: 4,
  },
  {
    id: 'revolutions',
    name: 'Revolutions (1750–1900)',
    topicSlugs: ['wh-enlightenment-political-revolutions', 'wh-industrial-revolution', 'wh-revolutions'],
    questionTarget: 5,
  },
  {
    id: 'consequences',
    name: 'Consequences of Industrialization (1750–1900)',
    topicSlugs: ['wh-consequences-industrialization', 'wh-imperialism', 'wh-reform-migration'],
    questionTarget: 4,
  }
]

export { AP_WORLDHISTORY_DOMAINS }

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

export function generateAPWorldHistoryDiagnosticTest(form: number): APWorldHistoryDiagnosticTestData {
  const rng = mulberry32(form * 7919)
  const questions: APWorldHistoryDiagnosticQuestion[] = []

  for (const domain of AP_WORLDHISTORY_DOMAINS) {
    const pool = worldHistQuestionPool.filter(
      (q: WorldHistQuestion) => q.domain === domain.id,
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
    domains: AP_WORLDHISTORY_DOMAINS,
    totalQuestions: questions.length,
    timeLimitMinutes: 55,
  }
}

export function scoreAPWorldHistoryDiagnostic(
  form: number,
  questions: APWorldHistoryDiagnosticQuestion[],
  answers: Record<number, number>,
): APWorldHistoryDiagnosticResults {
  const domainResults: APWorldHistoryDomainResult[] = AP_WORLDHISTORY_DOMAINS.map(domain => {
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

  const recommendedTopics: APWorldHistoryRecommendedTopic[] = []
  for (const wd of domainResults.filter(d => d.level === 'weak')) {
    const domainDef = AP_WORLDHISTORY_DOMAINS.find(d => d.id === wd.domainId)
    if (!domainDef) continue
    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => { if (q.domain === wd.domainId && (answers[i] === undefined || answers[i] !== q.correctAnswer)) missedSlugs.add(q.topicSlug) })
    const slugs = missedSlugs.size > 0 ? [...missedSlugs].slice(0, 2) : domainDef.topicSlugs.slice(0, 2)
    for (const slug of slugs) { if (recommendedTopics.length < 5) recommendedTopics.push({ slug, name: slugToReadableName(slug), domainId: wd.domainId, priority: 'high' }) }
  }
  for (const md of domainResults.filter(d => d.level === 'moderate')) {
    if (recommendedTopics.length >= 5) break
    const domainDef = AP_WORLDHISTORY_DOMAINS.find(d => d.id === md.domainId)
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
  'wh-global-tapestry': 'Global Tapestry',
  'wh-dar-al-islam': 'Dar Al Islam',
  'wh-silk-roads-mongols': 'Silk Roads Mongols',
  'wh-indian-ocean-trade': 'Indian Ocean Trade',
  'wh-americas-africa-1200': 'Americas Africa 1200',
  'wh-land-based-empires': 'Land Based Empires',
  'wh-islamic-empires': 'Islamic Empires',
  'wh-east-asian-empires': 'East Asian Empires',
  'wh-exploration-columbian-exchange': 'Exploration Columbian Exchange',
  'wh-maritime-empires-labor': 'Maritime Empires Labor',
  'wh-transoceanic': 'Transoceanic',
  'wh-enlightenment-political-revolutions': 'Enlightenment Political Revolutions',
  'wh-industrial-revolution': 'Industrial Revolution',
  'wh-revolutions': 'Revolutions',
  'wh-consequences-industrialization': 'Consequences Industrialization',
  'wh-imperialism': 'Imperialism',
  'wh-reform-migration': 'Reform Migration',
}

function slugToReadableName(slug: string): string {
  return SLUG_LABELS[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}
