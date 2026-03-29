/**
 * Pre-Algebra - Question of the Day
 *
 * Uses the larger Pre-Algebra diagnostic bank for deeper daily coverage.
 */

import { generatePreAlgebraDiagnosticTest } from '@/data/prealgebra-diagnostic'

const TOPIC_SLUGS = [
  'adding-subtracting-integers',
  'multiplying-dividing-integers',
  'order-of-operations-prealg',
  'fraction-operations',
  'decimal-operations',
  'converting-fractions-decimals-percents',
  'ratios-rates',
  'solving-proportions',
  'percent-applications',
  'evaluating-expressions',
  'one-step-equations',
  'two-step-equations',
  'area-perimeter',
  'volume-surface-area-prealg',
  'angles-triangles-prealg',
  'mean-median-mode',
  'reading-graphs',
  'basic-probability',
]

interface Question {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  category: string
}

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface PreAlgebraDailyQuestion {
  topicSlug: string
  question: Question
  dayNumber: number
}

export async function getDailyQuestions(): Promise<PreAlgebraDailyQuestion[]> {
  const day = dayOfYear()
  const topicSlug = TOPIC_SLUGS[day % TOPIC_SLUGS.length]
  const form = day % 2 === 0 ? 'A' : 'B'
  const diagnostic = generatePreAlgebraDiagnosticTest(form)
  const filtered = diagnostic.questions.filter((q) => q.topicSlug === topicSlug)
  const source = filtered.length > 0 ? filtered : diagnostic.questions
  const q = source[day % source.length]

  return [
    {
      topicSlug,
      question: {
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        category: q.domain,
      },
      dayNumber: day,
    },
  ]
}
