/**
 * AP Environmental Science Diagnostic Test Generator
 */

import { enviroQuestionPool, type EnviroQuestion } from './exit-quizzes/ap-environmental-science'

export interface APEnviroDiagnosticQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface APEnviroDomain {
  id: string
  name: string
  topicSlugs: string[]
  questionTarget: number
}

export const TOTAL_FORMS = 10

export interface APEnviroDiagnosticTestData {
  form: number
  questions: APEnviroDiagnosticQuestion[]
  domains: APEnviroDomain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface APEnviroDomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface APEnviroRecommendedTopic {
  slug: string
  name: string
  domainId: string
  priority: 'high' | 'medium'
}

export interface APEnviroDiagnosticResults {
  form: number
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedAPScore: number
  domains: APEnviroDomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: APEnviroRecommendedTopic[]
}

const AP_ENVIRO_DOMAINS: APEnviroDomain[] = [
  {
    id: 'earth-systems',
    name: 'The Living World: Ecosystems',
    topicSlugs: ['apes-ecosystem-structure', 'apes-biogeochemical-cycles', 'apes-earth-systems'],
    questionTarget: 3,
  },
  {
    id: 'biodiversity',
    name: 'The Living World: Biodiversity',
    topicSlugs: ['apes-biodiversity', 'apes-biodiversity-conservation', 'apes-biomes-succession'],
    questionTarget: 3,
  },
  {
    id: 'populations',
    name: 'Populations',
    topicSlugs: ['apes-population-ecology', 'apes-human-population'],
    questionTarget: 3,
  },
  {
    id: 'land-water',
    name: 'Land & Water Use',
    topicSlugs: ['apes-agriculture-land', 'apes-water-resources'],
    questionTarget: 3,
  },
  {
    id: 'energy',
    name: 'Energy Resources & Consumption',
    topicSlugs: ['apes-fossil-fuels-nuclear', 'apes-renewable-energy', 'apes-energy'],
    questionTarget: 3,
  },
  {
    id: 'pollution',
    name: 'Atmospheric Pollution & Climate Change',
    topicSlugs: ['apes-atmospheric-pollution', 'apes-atmosphere-climate'],
    questionTarget: 3,
  }
]

export { AP_ENVIRO_DOMAINS }

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

export function generateAPEnviroDiagnosticTest(form: number): APEnviroDiagnosticTestData {
  const rng = mulberry32(form * 7919)
  const questions: APEnviroDiagnosticQuestion[] = []

  for (const domain of AP_ENVIRO_DOMAINS) {
    const pool = enviroQuestionPool.filter(
      (q: EnviroQuestion) => q.domain === domain.id,
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
    domains: AP_ENVIRO_DOMAINS,
    totalQuestions: questions.length,
    timeLimitMinutes: 35,
  }
}

export function scoreAPEnviroDiagnostic(
  form: number,
  questions: APEnviroDiagnosticQuestion[],
  answers: Record<number, number>,
): APEnviroDiagnosticResults {
  const domainResults: APEnviroDomainResult[] = AP_ENVIRO_DOMAINS.map(domain => {
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

  const recommendedTopics: APEnviroRecommendedTopic[] = []
  for (const wd of domainResults.filter(d => d.level === 'weak')) {
    const domainDef = AP_ENVIRO_DOMAINS.find(d => d.id === wd.domainId)
    if (!domainDef) continue
    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => { if (q.domain === wd.domainId && (answers[i] === undefined || answers[i] !== q.correctAnswer)) missedSlugs.add(q.topicSlug) })
    const slugs = missedSlugs.size > 0 ? [...missedSlugs].slice(0, 2) : domainDef.topicSlugs.slice(0, 2)
    for (const slug of slugs) { if (recommendedTopics.length < 5) recommendedTopics.push({ slug, name: slugToReadableName(slug), domainId: wd.domainId, priority: 'high' }) }
  }
  for (const md of domainResults.filter(d => d.level === 'moderate')) {
    if (recommendedTopics.length >= 5) break
    const domainDef = AP_ENVIRO_DOMAINS.find(d => d.id === md.domainId)
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
  'apes-ecosystem-structure': 'Ecosystem Structure',
  'apes-biogeochemical-cycles': 'Biogeochemical Cycles',
  'apes-earth-systems': 'Earth Systems',
  'apes-biodiversity': 'Biodiversity',
  'apes-biodiversity-conservation': 'Biodiversity Conservation',
  'apes-biomes-succession': 'Biomes Succession',
  'apes-population-ecology': 'Population Ecology',
  'apes-human-population': 'Human Population',
  'apes-agriculture-land': 'Agriculture Land',
  'apes-water-resources': 'Water Resources',
  'apes-fossil-fuels-nuclear': 'Fossil Fuels Nuclear',
  'apes-renewable-energy': 'Renewable Energy',
  'apes-energy': 'Energy',
  'apes-atmospheric-pollution': 'Atmospheric Pollution',
  'apes-atmosphere-climate': 'Atmosphere Climate',
}

function slugToReadableName(slug: string): string {
  return SLUG_LABELS[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}
