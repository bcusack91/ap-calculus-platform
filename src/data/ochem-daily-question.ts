/**
 * Organic Chemistry - Question of the Day
 *
 * Uses the larger Organic Chemistry diagnostic bank for deeper daily coverage.
 */

import { generateOChemDiagnosticTest } from '@/data/ochem-diagnostic'

const TOPIC_SLUGS = [
  'molecular-orbital-theory',
  'hybridization-geometry',
  'chirality-enantiomers',
  'diastereomers-meso',
  'sn1-sn2-reactions',
  'e1-e2-elimination',
  'iupac-nomenclature',
  'functional-group-chemistry',
  'aldehydes-ketones',
  'carboxylic-acid-derivatives',
  'nmr-spectroscopy',
  'ir-mass-spec',
  'electrophilic-aromatic-substitution',
  'aromaticity-huckel',
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

export interface OChemDailyQuestion {
  topicSlug: string
  question: Question
  dayNumber: number
}

export async function getDailyQuestions(): Promise<OChemDailyQuestion[]> {
  const day = dayOfYear()
  const topicSlug = TOPIC_SLUGS[day % TOPIC_SLUGS.length]
  const form = (day % 10) + 1
  const diagnostic = generateOChemDiagnosticTest(form)
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
