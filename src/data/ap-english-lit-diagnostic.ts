/**
 * AP English Literature Diagnostic Test Generator
 */

import { engLitQuestionPool, type EngLitQuestion } from './exit-quizzes/ap-english-literature'

export interface APEnglishLitDiagnosticQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface APEnglishLitDomain {
  id: string
  name: string
  topicSlugs: string[]
  questionTarget: number
}

export const TOTAL_FORMS = 10

export interface APEnglishLitDiagnosticTestData {
  form: number
  questions: APEnglishLitDiagnosticQuestion[]
  domains: APEnglishLitDomain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface APEnglishLitDomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface APEnglishLitRecommendedTopic {
  slug: string
  name: string
  domainId: string
  priority: 'high' | 'medium'
}

export interface APEnglishLitDiagnosticResults {
  form: number
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedAPScore: number
  domains: APEnglishLitDomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: APEnglishLitRecommendedTopic[]
}

const AP_ENGLISHLIT_DOMAINS: APEnglishLitDomain[] = [
  {
    id: 'short-fiction',
    name: 'Short Fiction',
    topicSlugs: ['englit-short-fiction-1', 'englit-short-fiction-2', 'englit-short-fiction-3'],
    questionTarget: 3,
  },
  {
    id: 'poetry',
    name: 'Poetry',
    topicSlugs: ['englit-poetry-1', 'englit-poetry-2', 'englit-poetic-structure-form', 'englit-sound-devices'],
    questionTarget: 3,
  },
  {
    id: 'longer-fiction',
    name: 'Longer Fiction & Drama',
    topicSlugs: ['englit-longer-fiction', 'englit-longer-fiction-2', 'englit-dramatic-structure'],
    questionTarget: 3,
  },
  {
    id: 'character-narrative',
    name: 'Character & Narrative',
    topicSlugs: ['englit-character-setting', 'englit-narration-pov', 'englit-narrative-complexity', 'englit-narrative-perspective'],
    questionTarget: 3,
  },
  {
    id: 'figurative-language',
    name: 'Figurative Language & Style',
    topicSlugs: ['englit-figurative-language', 'englit-tone-speaker', 'englit-symbol-motif-fiction'],
    questionTarget: 3,
  },
  {
    id: 'analysis-argument',
    name: 'Analysis & Argumentation',
    topicSlugs: ['englit-plot-conflict-theme', 'englit-social-commentary-drama'],
    questionTarget: 3,
  }
]

export { AP_ENGLISHLIT_DOMAINS }

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

export function generateAPEnglishLitDiagnosticTest(form: number): APEnglishLitDiagnosticTestData {
  const rng = mulberry32(form * 7919)
  const questions: APEnglishLitDiagnosticQuestion[] = []

  for (const domain of AP_ENGLISHLIT_DOMAINS) {
    const pool = engLitQuestionPool.filter(
      (q: EngLitQuestion) => q.domain === domain.id,
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
    domains: AP_ENGLISHLIT_DOMAINS,
    totalQuestions: questions.length,
    timeLimitMinutes: 35,
  }
}

export function scoreAPEnglishLitDiagnostic(
  form: number,
  questions: APEnglishLitDiagnosticQuestion[],
  answers: Record<number, number>,
): APEnglishLitDiagnosticResults {
  const domainResults: APEnglishLitDomainResult[] = AP_ENGLISHLIT_DOMAINS.map(domain => {
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

  const recommendedTopics: APEnglishLitRecommendedTopic[] = []
  // Prioritize by exam weight (questionTarget) so highest-impact topics surface first.
  const examWeight = (id: string) => AP_ENGLISHLIT_DOMAINS.find(d => d.id === id)?.questionTarget ?? 0
  const weakDomainResults = [...domainResults.filter(d => d.level === 'weak')].sort((a, b) => examWeight(b.domainId) - examWeight(a.domainId))
  const moderateDomainResults = [...domainResults.filter(d => d.level === 'moderate')].sort((a, b) => examWeight(b.domainId) - examWeight(a.domainId))
  for (const wd of weakDomainResults) {
    const domainDef = AP_ENGLISHLIT_DOMAINS.find(d => d.id === wd.domainId)
    if (!domainDef) continue
    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => { if (q.domain === wd.domainId && (answers[i] === undefined || answers[i] !== q.correctAnswer)) missedSlugs.add(q.topicSlug) })
    const slugs = missedSlugs.size > 0 ? [...missedSlugs].slice(0, 2) : domainDef.topicSlugs.slice(0, 2)
    for (const slug of slugs) { if (recommendedTopics.length < 5) recommendedTopics.push({ slug, name: slugToReadableName(slug), domainId: wd.domainId, priority: 'high' }) }
  }
  for (const md of moderateDomainResults) {
    if (recommendedTopics.length >= 5) break
    const domainDef = AP_ENGLISHLIT_DOMAINS.find(d => d.id === md.domainId)
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
  'englit-short-fiction-1': 'Short Fiction 1',
  'englit-short-fiction-2': 'Short Fiction 2',
  'englit-short-fiction-3': 'Short Fiction 3',
  'englit-poetry-1': 'Poetry 1',
  'englit-poetry-2': 'Poetry 2',
  'englit-poetic-structure-form': 'Poetic Structure Form',
  'englit-sound-devices': 'Sound Devices',
  'englit-longer-fiction': 'Longer Fiction',
  'englit-longer-fiction-2': 'Longer Fiction 2',
  'englit-dramatic-structure': 'Dramatic Structure',
  'englit-character-setting': 'Character Setting',
  'englit-narration-pov': 'Narration Pov',
  'englit-narrative-complexity': 'Narrative Complexity',
  'englit-narrative-perspective': 'Narrative Perspective',
  'englit-figurative-language': 'Figurative Language',
  'englit-tone-speaker': 'Tone Speaker',
  'englit-symbol-motif-fiction': 'Symbol Motif Fiction',
  'englit-plot-conflict-theme': 'Plot Conflict Theme',
  'englit-social-commentary-drama': 'Social Commentary Drama',
}

function slugToReadableName(slug: string): string {
  return SLUG_LABELS[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}
