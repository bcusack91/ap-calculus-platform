/**
 * Server-side grading of an AP full-length practice exam (FullLengthPracticeExam).
 *
 * Multiple choice is graded from the option TEXT the student picked against the
 * exam's own key, so the browser can't claim a score. Free-response is
 * self-graded against the rubric on screen; the server counts the rubric boxes
 * ticked (capped at the item's points) and stores each response with its
 * rubric in `review.frq`. The composite percentage weights each section by
 * its official share of the AP score (FullExamSection.weight) when every
 * section has one; earned/possible stay raw points. Options are shuffled exactly as the page shuffles
 * them, so a stored review shows them in the order the student saw.
 */
import type { ExamItem, FullLengthExamConfig, RubricPoint } from '@/components/FullLengthPracticeExam'
import { shuffleOptions } from '@/lib/shuffle-options'
import { apCompositePercent, estimateApScore } from '@/lib/ap-scoring'
import { MAX_RESPONSE_CHARS, rubricKeys, saqPartLetter } from '@/lib/ap-practice-runner'

export interface ApMcqAnswer { s: number; i: number; chosen: string | null }
/**
 * One free-response item. `ticked` (the rubric keys checked, see
 * SAQAnswer.checked in ap-practice-runner) wins over `earned` when present;
 * older clients send only `earned`.
 */
export interface ApFrqAnswer {
  s: number
  i: number
  earned: number
  responses?: string[]
  ticked?: string[]
  submitted?: boolean
  chosenPromptIndex?: number
}

/** One rubric point of a stored FRQ, with whether the student ticked it. */
export interface ApFrqRubricLine { id: string; label: string; description: string; earned: boolean }

/**
 * A stored free-response item: what the student wrote and how they scored it
 * against the rubric. Kept in `results.review.frq` so the review page (and a
 * teacher) can read it without rebuilding the exam.
 */
export interface ApFrqReview {
  s: number
  i: number
  /** Section short name, e.g. "Free Response". */
  section: string
  /** Number within the section (i + 1). */
  number: number
  type: 'saq' | 'dbq' | 'leq'
  title: string
  /** Shared stimulus / prompt (LEQ: the prompt the student chose). */
  prompt: string
  parts: { label: string; question: string; response: string; rubric: ApFrqRubricLine[] }[]
  earned: number
  possible: number
  /** The student revealed the rubric and scored themselves. */
  selfScored: boolean
  sampleResponse?: string
}

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
    /** Free-response items with the student's responses and rubric ticks. */
    frq: ApFrqReview[]
  }
}

const clip = (v: unknown) => (typeof v === 'string' ? v.slice(0, MAX_RESPONSE_CHARS) : '')
const line = (rp: RubricPoint, earned: boolean): ApFrqRubricLine => ({ id: rp.id, label: rp.label, description: rp.description, earned })

/**
 * Build the stored copy of one FRQ item. Points come from the ticked rubric
 * keys when the client sent them (each valid key once), else from the bare
 * `earned` count, capped at the item's rubric points either way.
 */
export function frqReviewItem(item: ExamItem, s: number, i: number, sectionName: string, answer: ApFrqAnswer | undefined): ApFrqReview | null {
  if (item.type === 'mcq') return null
  const max = frqPossible(item)
  const valid = new Set(rubricKeys(item))
  const tickedList = Array.isArray(answer?.ticked) ? answer.ticked.filter((k): k is string => typeof k === 'string' && valid.has(k)) : null
  const ticked = new Set(tickedList ?? [])
  const fromCount = typeof answer?.earned === 'number' && Number.isFinite(answer.earned) ? Math.round(answer.earned) : 0
  const earned = Math.max(0, Math.min(max, tickedList ? ticked.size : fromCount))
  const responses = Array.isArray(answer?.responses) ? answer.responses : []
  const base = { s, i, section: sectionName, number: i + 1, earned, possible: max, selfScored: answer?.submitted === true }

  if (item.type === 'saq') {
    return {
      ...base,
      type: 'saq',
      title: `Free-response question ${i + 1}`,
      prompt: item.prompt ?? item.stimulus ?? '',
      parts: item.parts.map((p, pi) => {
        const letter = saqPartLetter(p, pi)
        return {
          label: letter,
          question: p.question ?? p.prompt ?? '',
          response: clip(responses[pi]),
          rubric: Array.isArray(p.rubric)
            ? p.rubric.map((rp) => line(rp, ticked.has(`${letter}-${rp.id}`)))
            : [{ id: 'self', label: 'Credit for this part', description: p.rubric, earned: ticked.has(`${letter}-self`) }],
        }
      }),
      ...(item.sampleResponse ? { sampleResponse: item.sampleResponse } : {}),
    }
  }
  if (item.type === 'dbq') {
    return {
      ...base,
      type: 'dbq',
      title: 'Document-Based Question',
      prompt: item.prompt,
      parts: [{ label: '', question: '', response: clip(responses[0]), rubric: item.rubric.map((rp) => line(rp, ticked.has(rp.id))) }],
      ...(item.sampleResponse ? { sampleResponse: item.sampleResponse } : {}),
    }
  }
  const chosenIdx = Number.isInteger(answer?.chosenPromptIndex) && (answer!.chosenPromptIndex as number) >= 0 && (answer!.chosenPromptIndex as number) < item.promptOptions.length ? (answer!.chosenPromptIndex as number) : 0
  const chosen = item.promptOptions[chosenIdx]
  const sample = item.sampleResponses?.find((x) => x.promptLabel === chosen?.label)?.response
  return {
    ...base,
    type: 'leq',
    title: item.title ?? 'Long Essay Question',
    prompt: item.promptOptions.length > 1 && chosen ? `Option ${chosen.label}: ${chosen.prompt}` : chosen?.prompt ?? '',
    parts: [{ label: '', question: '', response: clip(responses[0]), rubric: item.rubric.map((rp) => line(rp, ticked.has(rp.id))) }],
    ...(sample ? { sampleResponse: sample } : {}),
  }
}

export function gradeApExam(config: FullLengthExamConfig, mcqIn: unknown, frqIn: unknown): GradedApExam {
  const mcqAnswers = new Map<string, string | null>()
  for (const a of Array.isArray(mcqIn) ? mcqIn : []) {
    const r = a as Partial<ApMcqAnswer>
    if (Number.isInteger(r.s) && Number.isInteger(r.i)) mcqAnswers.set(`${r.s}:${r.i}`, typeof r.chosen === 'string' ? r.chosen : null)
  }
  const frqAnswers = new Map<string, ApFrqAnswer>()
  for (const a of Array.isArray(frqIn) ? frqIn : []) {
    const r = a as Partial<ApFrqAnswer>
    if (!Number.isInteger(r.s) || !Number.isInteger(r.i)) continue
    const hasCount = typeof r.earned === 'number' && Number.isFinite(r.earned)
    if (!hasCount && !Array.isArray(r.ticked) && !Array.isArray(r.responses)) continue
    frqAnswers.set(`${r.s}:${r.i}`, { ...r, s: r.s as number, i: r.i as number, earned: hasCount ? (r.earned as number) : 0 })
  }
  const frq: ApFrqReview[] = []

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
        const stored = frqReviewItem(item, s, i, sec.shortName, frqAnswers.get(`${s}:${i}`))
        if (stored) {
          possible += stored.possible
          earned += stored.earned
          frq.push(stored)
        }
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
    review: { questions, answers, frq },
  }
}
