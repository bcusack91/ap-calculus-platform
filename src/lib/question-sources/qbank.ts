import { gradeGridIn } from '@/data/sat-grid-in'
import { sectionLabelFor, type QbankCourse, type QbankItem } from '@/lib/qbank-types'
import type { ReviewItem } from './types'

/**
 * Review items for a question-bank set (QbankSession). Every question was
 * frozen with its shown-order options and key when the set was built, so
 * nothing needs rebuilding. Pure.
 *
 * A set still in progress only shows the questions already graded (tutor
 * mode answers one at a time); the rest come back null, so the review page
 * can't be used to read keys mid-set.
 */
export interface QbankSessionLike {
  course: string
  mode: string
  items: unknown
  answers: unknown
  flags: unknown
  timings: unknown
  completedAt: Date | string | null
}

type Rec = Record<string, unknown>
const asRec = (v: unknown): Rec | null => (v && typeof v === 'object' && !Array.isArray(v) ? (v as Rec) : null)

export function qbankReviewItems(s: QbankSessionLike): (ReviewItem | null)[] {
  const items = (Array.isArray(s.items) ? s.items : []) as QbankItem[]
  const answers = Array.isArray(s.answers) ? s.answers : []
  const flags = Array.isArray(s.flags) ? s.flags : []
  const timings = Array.isArray(s.timings) ? s.timings : []
  const done = s.completedAt !== null && s.completedAt !== undefined
  const course = (s.course === 'sat' ? 'sat' : s.course === 'act' ? 'act' : 'mcat') as QbankCourse
  return items.map((it, i) => {
    const a = asRec(answers[i])
    if (!done && !(s.mode === 'tutor' && a)) return null
    const chosenIndex = !it.gridIn && typeof a?.chosenIndex === 'number' && Number.isInteger(a.chosenIndex) ? a.chosenIndex : null
    const chosenText = it.gridIn && typeof a?.chosenText === 'string' && a.chosenText.trim() ? a.chosenText.trim() : null
    const seconds = typeof timings[i] === 'number' && Number.isFinite(timings[i]) ? (timings[i] as number) : 0
    return {
      index: typeof it.index === 'number' ? it.index : i,
      questionKey: it.questionKey,
      question: it.question,
      options: [...(it.options ?? [])],
      correctIndex: it.correctIndex,
      explanation: it.explanation ?? '',
      passage: it.passage ?? null,
      chosenIndex,
      chosenText,
      ...(it.gridIn ? { gridIn: it.gridIn, correct: !!chosenText && gradeGridIn(it.gridIn, chosenText) } : {}),
      flagged: flags[i] === true,
      durationMs: seconds > 0 ? Math.round(seconds * 1000) : null,
      topicSlug: it.topicSlug,
      // MCAT: the exam section, as on full-length reviews; SAT: the content domain.
      discipline: course === 'mcat' ? sectionLabelFor(course, it.section) : it.discipline,
    }
  })
}
