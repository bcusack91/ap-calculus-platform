/**
 * AP US Government Diagnostic Test Generator
 */

import { usGovQuestionPool, type USGovQuestion } from './exit-quizzes/ap-us-government'

export interface APUsGovDiagnosticQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface APUsGovDomain {
  id: string
  name: string
  topicSlugs: string[]
  questionTarget: number
}

export const TOTAL_FORMS = 10

export interface APUsGovDiagnosticTestData {
  form: number
  questions: APUsGovDiagnosticQuestion[]
  domains: APUsGovDomain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface APUsGovDomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface APUsGovRecommendedTopic {
  slug: string
  name: string
  domainId: string
  priority: 'high' | 'medium'
}

export interface APUsGovDiagnosticResults {
  form: number
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedAPScore: number
  domains: APUsGovDomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: APUsGovRecommendedTopic[]
}

const AP_USGOV_DOMAINS: APUsGovDomain[] = [
  {
    id: 'foundations',
    name: 'Foundations of American Democracy',
    topicSlugs: ['gov-constitutional-foundations', 'gov-federalism', 'gov-separation-of-powers'],
    questionTarget: 5,
  },
  {
    id: 'branches',
    name: 'Interactions Among Branches',
    topicSlugs: ['gov-congress', 'gov-presidency', 'gov-judiciary', 'gov-bureaucracy'],
    questionTarget: 5,
  },
  {
    id: 'civil-liberties-rights',
    name: 'Civil Liberties & Civil Rights',
    topicSlugs: ['gov-civil-liberties', 'gov-civil-rights'],
    questionTarget: 5,
  },
  {
    id: 'political-ideology',
    name: 'Political Ideologies & Beliefs',
    topicSlugs: ['gov-ideologies', 'gov-public-opinion'],
    questionTarget: 5,
  },
  {
    id: 'political-participation',
    name: 'Political Participation',
    topicSlugs: ['gov-voting-elections', 'gov-parties-interest-groups', 'gov-media-technology'],
    questionTarget: 5,
  }
]

export { AP_USGOV_DOMAINS }

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

export function generateAPUsGovDiagnosticTest(form: number): APUsGovDiagnosticTestData {
  const rng = mulberry32(form * 7919)
  const questions: APUsGovDiagnosticQuestion[] = []

  for (const domain of AP_USGOV_DOMAINS) {
    const pool = usGovQuestionPool.filter(
      (q: USGovQuestion) => q.domain === domain.id,
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
    domains: AP_USGOV_DOMAINS,
    totalQuestions: questions.length,
    timeLimitMinutes: 50,
  }
}

export function scoreAPUsGovDiagnostic(
  form: number,
  questions: APUsGovDiagnosticQuestion[],
  answers: Record<number, number>,
): APUsGovDiagnosticResults {
  const domainResults: APUsGovDomainResult[] = AP_USGOV_DOMAINS.map(domain => {
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

  const recommendedTopics: APUsGovRecommendedTopic[] = []
  // Prioritize by exam weight (questionTarget) so highest-impact topics surface first.
  const examWeight = (id: string) => AP_USGOV_DOMAINS.find(d => d.id === id)?.questionTarget ?? 0
  const weakDomainResults = [...domainResults.filter(d => d.level === 'weak')].sort((a, b) => examWeight(b.domainId) - examWeight(a.domainId))
  const moderateDomainResults = [...domainResults.filter(d => d.level === 'moderate')].sort((a, b) => examWeight(b.domainId) - examWeight(a.domainId))
  for (const wd of weakDomainResults) {
    const domainDef = AP_USGOV_DOMAINS.find(d => d.id === wd.domainId)
    if (!domainDef) continue
    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => { if (q.domain === wd.domainId && (answers[i] === undefined || answers[i] !== q.correctAnswer)) missedSlugs.add(q.topicSlug) })
    const slugs = missedSlugs.size > 0 ? [...missedSlugs].slice(0, 2) : domainDef.topicSlugs.slice(0, 2)
    for (const slug of slugs) { if (recommendedTopics.length < 5) recommendedTopics.push({ slug, name: slugToReadableName(slug), domainId: wd.domainId, priority: 'high' }) }
  }
  for (const md of moderateDomainResults) {
    if (recommendedTopics.length >= 5) break
    const domainDef = AP_USGOV_DOMAINS.find(d => d.id === md.domainId)
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
  'gov-constitutional-foundations': 'Constitutional Foundations',
  'gov-federalism': 'Federalism',
  'gov-separation-of-powers': 'Separation Of Powers',
  'gov-congress': 'Congress',
  'gov-presidency': 'Presidency',
  'gov-judiciary': 'Judiciary',
  'gov-bureaucracy': 'Bureaucracy',
  'gov-civil-liberties': 'Civil Liberties',
  'gov-civil-rights': 'Civil Rights',
  'gov-ideologies': 'Ideologies',
  'gov-public-opinion': 'Public Opinion',
  'gov-voting-elections': 'Voting Elections',
  'gov-parties-interest-groups': 'Parties Interest Groups',
  'gov-media-technology': 'Media Technology',
}

function slugToReadableName(slug: string): string {
  return SLUG_LABELS[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}
