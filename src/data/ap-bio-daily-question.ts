/**
 * AP Biology - Question of the Day
 *
 * Uses AP Biology exit quiz banks for broad, rotating coverage.
 */

import { generateExitQuiz } from '@/data/exit-quizzes'

const TOPIC_SLUGS = [
  'ap-bio-chemistry-of-life',
  'ap-bio-cell-structure-function',
  'ap-bio-membrane-transport',
  'ap-bio-cell-cycle-mitosis',
  'ap-bio-cell-communication',
  'ap-bio-cellular-energetics',
  'ap-bio-photosynthesis',
  'ap-bio-meiosis',
  'ap-bio-mendelian-genetics',
  'ap-bio-chromosomal-inheritance',
  'ap-bio-molecular-genetics',
  'ap-bio-dna-technology',
  'ap-bio-gene-regulation',
  'ap-bio-natural-selection',
  'ap-bio-evolution-evidence',
  'ap-bio-hardy-weinberg',
  'ap-bio-phylogenetics',
  'ap-bio-origins-of-life',
  'ap-bio-ecology-energy-flow',
  'ap-bio-population-ecology',
  'ap-bio-ecology-interactions',
  'ap-bio-biodiversity',
  'ap-bio-biogeochemical-cycles',
  'ap-bio-plant-structure',
  'ap-bio-nervous-system',
  'ap-bio-immune-system',
  'ap-bio-endocrine-system',
  'ap-bio-animal-behavior',
  'ap-bio-biotechnology',
  'ap-bio-viral-biology',
  'ap-bio-experimental-design',
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface BioDailyQuestion {
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

export async function getDailyQuestions(): Promise<BioDailyQuestion[]> {
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
