/**
 * ASVAB — Question of the Day (asvab-pipeline PLAN.md, B1).
 *
 * Rotates through the course's topics and serves one item from that topic's
 * exit-quiz pool (src/data/exit-quizzes/asvab, exact topicSlug match only, like
 * the AP Precalculus daily question). AFQT topics get every other day, because
 * the AFQT subtests decide enlistment eligibility; the technical topics share
 * the other days. The two AFQT-and-Test-Day topics are about the test rather
 * than on it, so they are not in the rotation, and items that need a figure
 * (inline SVG or an image) are skipped because this card shows text only.
 * Deterministic per calendar day so every visitor sees the same question;
 * served by /api/asvab-daily-question to src/app/asvab-daily-question/page.tsx.
 */
import { asvabTopicPool } from '@/data/exit-quizzes/asvab'
import { ASVAB_CATEGORIES } from '@/lib/course-includes'
import { ASVAB_SUBTESTS } from '@/lib/asvab-scoring'

export interface AsvabDailyQuestion {
  topicSlug: string
  /** Subtest label shown on the card, e.g. 'Arithmetic Reasoning'. */
  section: string
  question: { question: string; options: string[]; correctAnswer: number; explanation: string }
  dayNumber: number
}

const SECTION_BY_TOPIC = new Map<string, string>()
for (const s of ASVAB_SUBTESTS) {
  for (const t of ASVAB_CATEGORIES.find((c) => c.slug === s.categorySlug)?.topics ?? []) SECTION_BY_TOPIC.set(t, s.name)
}

/** AFQT topics (WK, PC, AR, MK) in course order. */
export const AFQT_TOPICS: string[] = ASVAB_SUBTESTS.filter((s) => s.afqt).flatMap(
  (s) => ASVAB_CATEGORIES.find((c) => c.slug === s.categorySlug)?.topics ?? [],
)
/** Technical topics (GS, EI, AI, SI, MC, AO) in course order. */
export const TECHNICAL_TOPICS: string[] = ASVAB_SUBTESTS.filter((s) => !s.afqt).flatMap(
  (s) => ASVAB_CATEGORIES.find((c) => c.slug === s.categorySlug)?.topics ?? [],
)

const needsFigure = (text: string) => /<svg|!\[[^\]]*\]\(/i.test(text)

function usablePool(slug: string) {
  return asvabTopicPool(slug).filter((q) => !needsFigure(q.question) && q.options.length >= 2 && !q.options.some(needsFigure))
}

function dayOfYear(now = new Date()): number {
  const start = new Date(now.getFullYear(), 0, 0)
  return Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
}

/** The topic for a given day: even days AFQT, odd days technical, each list cycling. */
export function topicForDay(day: number): string {
  const half = Math.floor(day / 2)
  return day % 2 === 0 ? AFQT_TOPICS[half % AFQT_TOPICS.length] : TECHNICAL_TOPICS[half % TECHNICAL_TOPICS.length]
}

/**
 * Today's question. If the day's topic has no usable items yet, the rotation
 * moves forward to the next topic that does; returns [] only when no ASVAB
 * pool has items.
 */
export function getDailyQuestions(now = new Date()): AsvabDailyQuestion[] {
  const day = dayOfYear(now)
  const span = 2 * Math.max(AFQT_TOPICS.length, TECHNICAL_TOPICS.length)
  for (let step = 0; step < span; step++) {
    const slug = topicForDay(day + step)
    const pool = usablePool(slug)
    if (pool.length === 0) continue
    const q = pool[Math.floor(day / span) % pool.length]
    return [
      {
        topicSlug: slug,
        section: SECTION_BY_TOPIC.get(slug) ?? 'ASVAB',
        question: { question: q.question, options: q.options, correctAnswer: q.correctAnswer, explanation: q.explanation },
        dayNumber: day,
      },
    ]
  }
  return []
}
