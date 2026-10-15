/**
 * Server-side grading of an AP full-length practice exam (FullLengthPracticeExam).
 *
 * Multiple choice is graded from the option TEXT the student picked against the
 * exam's own key, so the browser can't claim a score. Free-response is
 * self-graded against the rubric on screen; the server only caps each item at
 * its rubric's point count. The composite percentage weights each section by
 * its official share of the AP score (FullExamSection.weight) when every
 * section has one; earned/possible stay raw points. Options are shuffled exactly as the page shuffles
 * them, so a stored review shows them in the order the student saw.
 */
import type { ExamItem, FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { shuffleOptions } from '@/lib/shuffle-options'
import { apCompositePercent, estimateApScore } from '@/lib/ap-scoring'

export interface ApMcqAnswer { s: number; i: number; chosen: string | null }
export interface ApFrqAnswer { s: number; i: number; earned: number }

/** Rubric points an FRQ item is worth (same counting as the exam page). */
export function frqPossible(item: ExamItem): number {
  if (item.type === 'saq') return item.parts.reduce((n, p) => n + (Array.isArray(p.rubric) ? p.rubric.length : 1), 0)
  if (item.type === 'dbq' || item.type === 'leq') return item.rubric.length
  return 0
}

export interface GradedApExam {
  subject: string
  /** Raw points, unweighted. */
  earned: number
  possible: number
  /** Composite percentage: section-weighted like the real exam when every section has a weight (apCompositePercent). */
  percentage: number
  estimatedAPScore: number
  perSection: { name: string; earned: number; possible: number; pct: number; weight?: number }[]
  mcq: { correct: number; total: number }
  /** In the shape diagnosticReviewItems reads (src/lib/question-sources/diagnostic.ts). */
  review: {
    questions: { question: string; options: string[]; correctIndex: number; explanation: string; domain: string; passage?: string }[]
    answers: (number | null)[]
  }
}

export function gradeApExam(config: FullLengthExamConfig, mcqIn: unknown, frqIn: unknown): GradedApExam {
  const mcqAnswers = new Map<string, string | null>()
  for (const a of Array.isArray(mcqIn) ? mcqIn : []) {
    const r = a as Partial<ApMcqAnswer>
    if (Number.isInteger(r.s) && Number.isInteger(r.i)) mcqAnswers.set(`${r.s}:${r.i}`, typeof r.chosen === 'string' ? r.chosen : null)
  }
  const frqAnswers = new Map<string, number>()
  for (const a of Array.isArray(frqIn) ? frqIn : []) {
    const r = a as Partial<ApFrqAnswer>
    if (Number.isInteger(r.s) && Number.isInteger(r.i) && typeof r.earned === 'number' && Number.isFinite(r.earned)) frqAnswers.set(`${r.s}:${r.i}`, r.earned)
  }

  const questions: GradedApExam['review']['questions'] = []
  const answers: (number | null)[] = []
  let mcqCorrect = 0
  let mcqTotal = 0
  const perSection = config.sections.map((sec, s) => {
    let earned = 0
    let possible = 0
    sec.items.forEach((item, i) => {
      if (item.type === 'mcq') {
        const shown = shuffleOptions(item.options, item.correctAnswer, `${config.subject}|${item.question}`)
        const chosen = mcqAnswers.get(`${s}:${i}`) ?? null
        const pick = chosen === null ? -1 : shown.options.indexOf(chosen)
        possible += 1
        mcqTotal += 1
        if (pick === shown.correctIndex) {
          earned += 1
          mcqCorrect += 1
        }
        questions.push({
          question: item.question,
          options: shown.options,
          correctIndex: shown.correctIndex,
          explanation: item.explanation,
          domain: item.topic,
          ...(item.stimulus ? { passage: item.stimulus } : {}),
        })
        answers.push(pick >= 0 ? pick : null)
      } else {
        const max = frqPossible(item)
        possible += max
        earned += Math.max(0, Math.min(max, Math.round(frqAnswers.get(`${s}:${i}`) ?? 0)))
      }
    })
    return {
      name: sec.shortName,
      earned,
      possible,
      pct: possible ? Math.round((earned / possible) * 100) : 0,
      ...(typeof sec.weight === 'number' ? { weight: sec.weight } : {}),
    }
  })
  const earned = perSection.reduce((n, x) => n + x.earned, 0)
  const possible = perSection.reduce((n, x) => n + x.possible, 0)
  const percentage = apCompositePercent(perSection)
  return {
    subject: config.subject,
    earned,
    possible,
    percentage,
    estimatedAPScore: estimateApScore(percentage),
    perSection,
    mcq: { correct: mcqCorrect, total: mcqTotal },
    review: { questions, answers },
  }
}
