/**
 * AP Psychology Diagnostic Test Generator
 *
 * Produces two alternate forms (A and B) each with ~33 questions spanning
 * all 11 AP Psychology domains.  After each test, weak domains are mapped to
 * 3-5 specific topic slugs the student should review.
 */

import { apPsychQuestionPool, type APPsychQuestion } from './exit-quizzes/ap-psychology'

/* ------------------------------------------------------------------ */
/*  Public types                                                       */
/* ------------------------------------------------------------------ */

export interface APPsychDiagnosticQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface APPsychDomain {
  id: string
  name: string
  /** Topic slugs that map to this domain (used for remediation links) */
  topicSlugs: string[]
  questionTarget: number
}

export interface APPsychDiagnosticTestData {
  form: 'A' | 'B'
  questions: APPsychDiagnosticQuestion[]
  domains: APPsychDomain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface APPsychDomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface APPsychRecommendedTopic {
  slug: string
  name: string
  domainId: string
  priority: 'high' | 'medium'
}

export interface APPsychDiagnosticResults {
  form: 'A' | 'B'
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedAPScore: number // 1-5
  domains: APPsychDomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: APPsychRecommendedTopic[]
}

/* ------------------------------------------------------------------ */
/*  Domain definitions                                                 */
/* ------------------------------------------------------------------ */

const AP_PSYCH_DOMAINS: APPsychDomain[] = [
  {
    id: 'history-approaches',
    name: 'History & Approaches',
    topicSlugs: ['history-approaches-psychology'],
    questionTarget: 3,
  },
  {
    id: 'biological-bases',
    name: 'Biological Bases of Behavior',
    topicSlugs: ['biological-bases-brain', 'genetics-behavior'],
    questionTarget: 3,
  },
  {
    id: 'sensation-perception',
    name: 'Sensation & Perception',
    topicSlugs: ['sensation-sensory-processing', 'perception-attention'],
    questionTarget: 3,
  },
  {
    id: 'learning',
    name: 'Learning',
    topicSlugs: ['classical-conditioning', 'operant-conditioning', 'observational-learning-cognition'],
    questionTarget: 3,
  },
  {
    id: 'memory',
    name: 'Memory',
    topicSlugs: ['memory-encoding-storage', 'retrieval-forgetting'],
    questionTarget: 3,
  },
  {
    id: 'thinking-language',
    name: 'Thinking & Language',
    topicSlugs: ['thinking-problem-solving', 'language-intelligence'],
    questionTarget: 3,
  },
  {
    id: 'developmental',
    name: 'Developmental Psychology',
    topicSlugs: ['prenatal-childhood-development', 'adolescence-adulthood'],
    questionTarget: 3,
  },
  {
    id: 'motivation-emotion',
    name: 'Motivation, Emotion & Stress',
    topicSlugs: ['motivation-theories', 'emotion-stress'],
    questionTarget: 3,
  },
  {
    id: 'personality',
    name: 'Personality',
    topicSlugs: ['personality-theories'],
    questionTarget: 3,
  },
  {
    id: 'disorders-treatment',
    name: 'Psychological Disorders & Treatment',
    topicSlugs: ['psychological-disorders-overview', 'mood-psychotic-disorders', 'treatment-therapy'],
    questionTarget: 3,
  },
  {
    id: 'social',
    name: 'Social Psychology',
    topicSlugs: ['social-influence-conformity', 'attitudes-persuasion', 'group-behavior-prejudice'],
    questionTarget: 3,
  },
]

export { AP_PSYCH_DOMAINS }

/* ------------------------------------------------------------------ */
/*  Generator                                                          */
/* ------------------------------------------------------------------ */

/**
 * Build a diagnostic test for either form A or form B.
 * Questions are drawn from the question pool tagged with that form (or 'both').
 */
export function generateAPPsychDiagnosticTest(form: 'A' | 'B'): APPsychDiagnosticTestData {
  const questions: APPsychDiagnosticQuestion[] = []

  for (const domain of AP_PSYCH_DOMAINS) {
    const pool = apPsychQuestionPool.filter(
      (q: APPsychQuestion) => q.domain === domain.id && (q.formSet === form || q.formSet === 'both'),
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

  // Shuffle the final question order
  const shuffledQuestions = questions.sort(() => Math.random() - 0.5)

  return {
    form,
    questions: shuffledQuestions,
    domains: AP_PSYCH_DOMAINS,
    totalQuestions: shuffledQuestions.length,
    timeLimitMinutes: 40,
  }
}

/* ------------------------------------------------------------------ */
/*  Scoring                                                            */
/* ------------------------------------------------------------------ */

export function scoreAPPsychDiagnostic(
  form: 'A' | 'B',
  questions: APPsychDiagnosticQuestion[],
  answers: Record<number, number>,
): APPsychDiagnosticResults {
  const domainResults: APPsychDomainResult[] = AP_PSYCH_DOMAINS.map(domain => {
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

    return {
      domainId: domain.id,
      domainName: domain.name,
      correct,
      total,
      percentage,
      level,
    }
  })

  const totalCorrect = domainResults.reduce((s, d) => s + d.correct, 0)
  const totalQuestions = domainResults.reduce((s, d) => s + d.total, 0)
  const percentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0

  // Estimated AP score (1-5 scale)
  let estimatedAPScore: number
  if (percentage >= 80) estimatedAPScore = 5
  else if (percentage >= 65) estimatedAPScore = 4
  else if (percentage >= 50) estimatedAPScore = 3
  else if (percentage >= 35) estimatedAPScore = 2
  else estimatedAPScore = 1

  const weakAreas = domainResults.filter(d => d.level === 'weak').map(d => d.domainName)
  const moderateAreas = domainResults.filter(d => d.level === 'moderate').map(d => d.domainName)
  const strengths = domainResults.filter(d => d.level === 'strong').map(d => d.domainName)

  // Build recommended topics — pick 1-2 slugs per weak domain, 1 per moderate domain
  // prioritize weak first, cap at 5 total
  const recommendedTopics: APPsychRecommendedTopic[] = []

  const weakDomains = domainResults.filter(d => d.level === 'weak')
  const moderateDomains = domainResults.filter(d => d.level === 'moderate')

  for (const wd of weakDomains) {
    const domainDef = AP_PSYCH_DOMAINS.find(d => d.id === wd.domainId)
    if (!domainDef) continue

    // Find specific topic slugs the student missed
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

  for (const md of moderateDomains) {
    if (recommendedTopics.length >= 5) break
    const domainDef = AP_PSYCH_DOMAINS.find(d => d.id === md.domainId)
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

/**
 * Pick the next form the student should take.
 * - If they've never taken a test → A
 * - If their last form was A → B
 * - If their last form was B → A
 */
export function pickNextForm(previousForms: ('A' | 'B')[]): 'A' | 'B' {
  if (previousForms.length === 0) return 'A'
  return previousForms[previousForms.length - 1] === 'A' ? 'B' : 'A'
}

const SLUG_LABELS: Record<string, string> = {
  'history-approaches-psychology': 'History & Approaches',
  'biological-bases-brain': 'Biological Bases & the Brain',
  'genetics-behavior': 'Genetics & Behavior',
  'sensation-sensory-processing': 'Sensation & Sensory Processing',
  'perception-attention': 'Perception & Attention',
  'classical-conditioning': 'Classical Conditioning',
  'operant-conditioning': 'Operant Conditioning',
  'observational-learning-cognition': 'Observational Learning & Cognition',
  'memory-encoding-storage': 'Memory Encoding & Storage',
  'retrieval-forgetting': 'Retrieval & Forgetting',
  'thinking-problem-solving': 'Thinking & Problem Solving',
  'language-intelligence': 'Language & Intelligence',
  'prenatal-childhood-development': 'Prenatal & Childhood Development',
  'adolescence-adulthood': 'Adolescence & Adulthood',
  'motivation-theories': 'Motivation Theories',
  'emotion-stress': 'Emotion & Stress',
  'personality-theories': 'Personality Theories',
  'psychological-disorders-overview': 'Psychological Disorders Overview',
  'mood-psychotic-disorders': 'Mood & Psychotic Disorders',
  'treatment-therapy': 'Treatment & Therapy',
  'social-influence-conformity': 'Social Influence & Conformity',
  'attitudes-persuasion': 'Attitudes & Persuasion',
  'group-behavior-prejudice': 'Group Behavior & Prejudice',
}

function slugToReadableName(slug: string): string {
  return SLUG_LABELS[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}
