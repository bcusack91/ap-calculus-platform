/**
 * MCAT Question of the Day.
 *
 * Deterministic (day-of-year seeded) so every user sees the same question on a
 * given day. Sourced from the curated, verified MCAT passage banks rather than
 * the older exit-quiz pools: the three science sections rotate through their
 * standalone "discrete" questions, and the CARS slot serves a real passage with
 * its text so it can be answered as a true CARS item.
 */

import { CARS_PASSAGES, SECTION_DISCRETES } from '@/data/mcat/passages'
import { MCAT_SECTION_META, type MCATSection } from '@/data/mcat/types'

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export type { MCATSection }

export interface MCATDailyQuestion {
  section: MCATSection
  sectionName: string
  topicSlug: string
  question: {
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
  }
  /** Present for CARS (and any passage-bound item) so it can be answered fairly. */
  passageTitle?: string
  passageText?: string
  dayNumber: number
}

const SECTION_ORDER: MCATSection[] = ['chem-phys', 'cars', 'bio-biochem', 'psych-soc']

/** Returns today's MCAT question, rotating through the four sections by day. */
export async function getMCATDailyQuestions(): Promise<MCATDailyQuestion[]> {
  const day = dayOfYear()
  const section = SECTION_ORDER[day % SECTION_ORDER.length]
  const sectionName = MCAT_SECTION_META[section].name

  if (section === 'cars') {
    // Serve a real CARS passage + one of its questions, with the passage text.
    const passage = CARS_PASSAGES[day % CARS_PASSAGES.length]
    const q = passage.questions[day % passage.questions.length]
    return [{
      section,
      sectionName,
      topicSlug: passage.id,
      question: { question: q.question, options: [...q.options], correctAnswer: q.correctAnswer, explanation: q.explanation },
      passageTitle: passage.title,
      passageText: passage.passageText,
      dayNumber: day,
    }]
  }

  // Science sections: use a verified standalone discrete question (no passage).
  const discretes = SECTION_DISCRETES[section]
  const d = discretes[day % discretes.length]
  return [{
    section,
    sectionName,
    topicSlug: d.id,
    question: { question: d.question, options: [...d.options], correctAnswer: d.correctAnswer, explanation: d.explanation },
    dayNumber: day,
  }]
}
