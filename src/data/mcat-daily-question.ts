/**
 * MCAT Question of the Day
 *
 * Deterministic daily question generator. Uses the day of year as seed
 * to pick one question from a rotating MCAT section, so every user sees
 * the same question on a given day.
 */

import { generateExitQuiz, type ExitQuizQuestion } from '@/data/exit-quizzes'

// MCAT quiz slugs grouped by section
const CHEM_PHYS_SLUGS = [
  'mcat-general-chemistry',
  'mcat-organic-chemistry',
  'mcat-physics-mechanics',
  'mcat-physics-electricity',
  'mcat-biochemistry',
]

const CARS_SLUGS = [
  'mcat-cars',
]

const BIO_BIOCHEM_SLUGS = [
  'mcat-biology',
  'mcat-organ-systems',
  'mcat-genetics-evolution',
]

const PSYCH_SOC_SLUGS = [
  'mcat-psychology-sociology',
]

const ALL_SECTIONS = [
  { name: 'Chem/Phys', section: 'chem-phys' as const, slugs: CHEM_PHYS_SLUGS },
  { name: 'CARS', section: 'cars' as const, slugs: CARS_SLUGS },
  { name: 'Bio/Biochem', section: 'bio-biochem' as const, slugs: BIO_BIOCHEM_SLUGS },
  { name: 'Psych/Soc', section: 'psych-soc' as const, slugs: PSYCH_SOC_SLUGS },
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export type MCATSection = 'chem-phys' | 'cars' | 'bio-biochem' | 'psych-soc'

export interface MCATDailyQuestion {
  section: MCATSection
  sectionName: string
  topicSlug: string
  question: ExitQuizQuestion
  dayNumber: number
}

/**
 * Returns today's MCAT question.
 * Rotates through sections daily.
 */
export async function getMCATDailyQuestions(): Promise<MCATDailyQuestion[]> {
  const day = dayOfYear()

  // Rotate through sections
  const sectionEntry = ALL_SECTIONS[day % ALL_SECTIONS.length]
  const slug = sectionEntry.slugs[day % sectionEntry.slugs.length]

  const pool = await generateExitQuiz(slug, 5)
  const q = pool[day % pool.length]

  return [
    {
      section: sectionEntry.section,
      sectionName: sectionEntry.name,
      topicSlug: slug,
      question: q,
      dayNumber: day,
    },
  ]
}
