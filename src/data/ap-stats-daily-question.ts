/**
 * AP Statistics — Question of the Day
 *
 * Uses the exit-quiz registry for rich, randomized question pools.
 * Deterministic per calendar day so every visitor sees the same question.
 */

import { generateExitQuiz } from '@/data/exit-quizzes'

const TOPIC_SLUGS = [
  'types-data-sampling',
  'displaying-distributions-graphs',
  'describing-distributions',
  'measures-of-center',
  'measures-of-spread',
  'normal-distributions',
  'scatterplots-correlation',
  'least-squares-regression',
  'residuals-residual-plots',
  'coefficient-determination',
  'transformations-linearity',
  'sampling-methods',
  'bias-sampling-surveys',
  'observational-vs-experiments',
  'experimental-design',
  'basic-probability-rules',
  'conditional-probability',
  'independence',
  'discrete-random-variables',
  'continuous-random-variables',
  'binomial-distribution',
  'geometric-distribution',
  'sampling-distributions',
  'central-limit-theorem',
  'ci-proportions',
  'ci-means',
  'interpreting-ci',
  'hypothesis-testing-framework',
  'tests-proportions',
  'tests-means',
  'type-errors',
  'paired-data',
  'chi-square-tests',
  'inference-regression',
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface StatsDailyQuestion {
  topicSlug: string
  question: {
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
    category: string
  }
  dayNumber: number
}

export async function getDailyQuestions(): Promise<StatsDailyQuestion[]> {
  const day = dayOfYear()
  const slug = TOPIC_SLUGS[day % TOPIC_SLUGS.length]
  const pool = await generateExitQuiz(slug, 5)
  const q = pool[day % pool.length]

  return [
    {
      topicSlug: slug,
      question: {
        question: q.question,
        options: q.options,
        correctAnswer: q.correctIndex ?? 0,
        explanation: q.explanation,
        category: q.category ?? slug,
      },
      dayNumber: day,
    },
  ]
}
