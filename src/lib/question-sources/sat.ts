import {
  buildExamForm,
  routedModule2,
  SAT_DOMAIN_LABELS,
  type SatRoute,
  type SatTestFormat,
  type SATTestQuestion,
} from '@/data/sat-practice/test-generator'
import { questionKey } from '@/lib/question-key'
import { gradeGridIn } from '@/data/sat-grid-in'
import { SAT_PASSAGES, type ReadingPassage } from '@/data/sat-passages'
import { readOptionExplanations, remapOptionExplanations } from '@/lib/option-explanations'
import { satOptionExplanationsFor } from '@/data/sat-practice/option-explanations'
import type { ReviewItem } from '@/lib/question-sources/types'
import { attemptExam, formVersionForScoring, isPsatAttemptFormat, type SatAttemptExam } from '@/lib/sat-attempt-format'

/**
 * Rebuild the reviewable questions of an SAT attempt from what was stored.
 *
 * - Practice tests (SatTestAttempt): the form is rebuilt with buildSatForm
 *   from testNumber / format / the Module 2 routes, and each stored answer is
 *   matched to its question by module + question id. Attempts saved before
 *   routes were stored (scoringVersion 1, answers grouped by section) are
 *   matched against every Module 2 the student could have sat.
 *   Adaptive PSAT/NMSQT attempts (format 'psat-full') rebuild the same way
 *   from buildPsatForm. The form version comes from scoringVersion (4 = form
 *   v3, 3 = form v2, anything lower = v1; see formVersionForScoring).
 * - Diagnostics (DiagnosticTest.results.review): a stored copy of the
 *   questions as served, the chosen indices, and `typed` grid-in answers.
 *
 * No database access. A stored answer whose question can no longer be built
 * is left out (the caller shows it as "no longer available").
 */

type Rec = Record<string, unknown>

const asRecord = (v: unknown): Rec | null => (v && typeof v === 'object' && !Array.isArray(v) ? (v as Rec) : null)
const str = (v: unknown): string => (typeof v === 'string' ? v : '')
const intOrNull = (v: unknown): number | null => (typeof v === 'number' && Number.isInteger(v) ? v : null)
const route = (v: unknown): SatRoute | null => (v === 'harder' || v === 'easier' ? v : null)

function parse(v: unknown): unknown {
  if (typeof v !== 'string') return v
  try {
    return JSON.parse(v)
  } catch {
    return null
  }
}

export interface SatPracticeAttemptLike {
  testNumber: number
  format?: string | null
  rwTier?: string | null
  mathTier?: string | null
  rwTotal?: number | null
  /** 1 legacy, 2 routed (form v1), 3 routed on form v2, 4 routed on form v3. Absent = 1. */
  scoringVersion?: number | null
  answers: unknown
}

/** 'full' | 'mini' for an attempt, deriving it from the R&W total on old rows (a PSAT attempt is 'full'). */
export function satAttemptFormat(a: Pick<SatPracticeAttemptLike, 'format' | 'rwTotal'>): SatTestFormat {
  if (a.format === 'full' || a.format === 'mini') return a.format
  if (isPsatAttemptFormat(a.format)) return 'full'
  return (a.rwTotal ?? 0) > 27 ? 'full' : 'mini'
}

/** 'sat' | 'psat' for an attempt (PSAT = format 'psat-full'). */
export function satAttemptExam(a: Pick<SatPracticeAttemptLike, 'format'>): SatAttemptExam {
  return attemptExam(a.format)
}

let passageById: Map<string, ReadingPassage> | null = null
const passageBank = () => (passageById ??= new Map(SAT_PASSAGES.map((p) => [p.id, p])))
const normText = (t: string) => t.replace(/\s+/g, ' ').trim()

/**
 * Authored per-option explanations (`optionExplanations`, aligned to the
 * bank's ORIGINAL option order) for a built SAT/PSAT form question, remapped
 * to the order it was SHOWN.
 *
 * - Passage questions (`sat-passage-<passageId>-q<i>`): the form builder
 *   shuffles their options with a per-id seed, so the authored list is read
 *   from the passage bank and remapped onto the shown options by option text
 *   (the same permutation the seeded shuffle applied, recovered exactly).
 * - Pool questions are spread from the bank item and the form builder never
 *   reorders their options, so an `optionExplanations` they carry is already
 *   in shown order; it is still read through readOptionExplanations, which
 *   drops anything of the wrong length. The v3 conventions bank items
 *   (v3-bank/conventions.ts) take this path too: static, authored order.
 *
 * Optional throughout: most items carry no explanations yet (undefined).
 */
export function satOptionExplanations(q: SATTestQuestion): string[] | undefined {
  if (!q.options.length || q.gridIn) return undefined
  const m = /^sat-passage-(.+)-q(\d+)$/.exec(q.id ?? '')
  if (m && q.passage) {
    const src = passageBank().get(q.passage.id)?.questions[Number(m[2])]
    if (!src) return undefined
    return remapOptionExplanations(src.options, readOptionExplanations(src, src.options.length), q.options)
  }
  return readOptionExplanations(q, q.options.length)
}

/**
 * The same for a stored SAT diagnostic question. Pool items were stored
 * spread from the bank item (options as authored), so an `optionExplanations`
 * on the stored copy lines up. Passage items store only the passage id: the
 * authored question is found on the passage bank by its text and its
 * explanations remapped by option text.
 */
function diagnosticOptionExplanations(q: Rec, options: string[], passageId: string | null): string[] | undefined {
  if (!options.length || q.gridIn) return undefined
  const own = readOptionExplanations(q, options.length)
  if (own || !passageId) return own
  const text = normText(str(q.question))
  const src = passageBank().get(passageId)?.questions.find((x) => normText(x.question) === text)
  if (!src) return undefined
  return remapOptionExplanations(src.options, readOptionExplanations(src, src.options.length), options)
}

function practiceItem(
  index: number,
  q: SATTestQuestion,
  a: { selectedIndex: number | null; textValue: string | null; flagged: boolean; seconds: number | null },
): ReviewItem {
  const key = questionKey({ question: q.question, options: q.options, correctIndex: q.correctIndex, passageId: q.passage?.id ?? null })
  const optionExplanations = satOptionExplanations(q) ?? (q.gridIn ? undefined : satOptionExplanationsFor(key, q.options))
  return {
    index,
    questionKey: key,
    question: q.question,
    options: [...q.options],
    correctIndex: q.correctIndex,
    explanation: q.explanation,
    passage: q.passage ? { id: q.passage.id, title: q.passage.title, body: q.passage.text } : null,
    chosenIndex: q.gridIn ? null : a.selectedIndex,
    chosenText: q.gridIn ? a.textValue : null,
    ...(q.gridIn ? { gridIn: q.gridIn, correct: !!a.textValue && gradeGridIn(q.gridIn, a.textValue) } : {}),
    flagged: a.flagged,
    durationMs: a.seconds ? Math.round(a.seconds * 1000) : null,
    ...(q.sourceSlug.startsWith('sat-') ? { topicSlug: q.sourceSlug } : {}),
    discipline: q.domain ? SAT_DOMAIN_LABELS[q.domain] : q.section === 'math' ? 'Math' : 'Reading and Writing',
    ...(optionExplanations ? { optionExplanations } : {}),
  }
}

/** A diagnostic grid-in's stored key and the student's typed answer → key + verdict. */
function gridVerdict(raw: unknown, typed: string): Pick<ReviewItem, 'gridIn' | 'correct'> {
  const g = asRecord(raw)
  const correctAnswer = typeof g?.correctAnswer === 'number' ? g.correctAnswer : null
  if (correctAnswer === null) return {}
  const key = {
    correctAnswer,
    acceptableAnswers: Array.isArray(g?.acceptableAnswers) ? (g.acceptableAnswers as unknown[]).filter((n): n is number => typeof n === 'number') : [],
    tolerance: typeof g?.tolerance === 'number' ? g.tolerance : 0,
  }
  return { gridIn: key, correct: !!typed && gradeGridIn(key, typed) }
}

/** Review items for one SAT practice test attempt, in stored order. */
export async function satPracticeReviewItems(attempt: SatPracticeAttemptLike): Promise<ReviewItem[]> {
  const format = satAttemptFormat(attempt)
  const exam = satAttemptExam(attempt)
  const version = formVersionForScoring(attempt.scoringVersion)
  const answers = parse(attempt.answers)
  if (!Array.isArray(answers) || !answers.length) return []

  // Current shape: one record per question, { moduleIndex, questionId, ... }.
  if (answers.every((a) => typeof asRecord(a)?.questionId === 'string')) {
    const form = await buildExamForm(exam, attempt.testNumber, format, route(attempt.rwTier), route(attempt.mathTier), version)
    const out: ReviewItem[] = []
    answers.forEach((raw, i) => {
      const a = asRecord(raw)!
      const moduleIndex = intOrNull(a.moduleIndex)
      const q = moduleIndex === null ? undefined : form.sections[moduleIndex]?.questions.find((x) => x.id === a.questionId)
      if (!q) return
      out.push(
        practiceItem(intOrNull(a.itemIndex) ?? i, q, {
          selectedIndex: intOrNull(a.selectedIndex),
          textValue: str(a.textValue) || null,
          flagged: a.flagged === true,
          seconds: typeof a.seconds === 'number' ? a.seconds : null,
        }),
      )
    })
    return out
  }

  // Legacy shape (scoringVersion 1): [{ sectionId, answers: [{ questionId,
  // selectedIndex, textValue }] }]. The route was never stored, so a Module 2
  // answer is looked up in the pre-built module and both routed ones.
  const base = await buildExamForm(exam, attempt.testNumber, format, null, null, version)
  const out: ReviewItem[] = []
  let index = 0
  for (const rawSec of answers) {
    const sec = asRecord(rawSec)
    const moduleIndex = base.sections.findIndex((s) => s.id === str(sec?.sectionId))
    const list = Array.isArray(sec?.answers) ? sec.answers : []
    if (moduleIndex < 0) {
      index += list.length
      continue
    }
    const candidates = [base.sections[moduleIndex]]
    if (base.sections[moduleIndex].moduleNum === 2) {
      for (const r of ['harder', 'easier'] as const) candidates.push(await routedModule2(base, moduleIndex, r))
    }
    const byId = new Map<string, SATTestQuestion>()
    for (const c of candidates) for (const q of c.questions) if (!byId.has(q.id)) byId.set(q.id, q)
    for (const rawAns of list) {
      const a = asRecord(rawAns)
      const q = a ? byId.get(str(a.questionId)) : undefined
      if (q && a) {
        out.push(
          practiceItem(index, q, {
            selectedIndex: intOrNull(a.selectedIndex),
            textValue: str(a.textValue) || null,
            flagged: a.flagged === true,
            seconds: null,
          }),
        )
      }
      index++
    }
  }
  return out
}

/**
 * Review items for an SAT diagnostic from DiagnosticTest.results. Grid-in
 * answers come from `review.typed` (stored since the answer log rollout);
 * older results only have the -1 (right) / -2 (wrong) marker in `answers`.
 */
export function satDiagnosticReviewItems(results: unknown): ReviewItem[] {
  const r = asRecord(parse(results))
  const review = asRecord(r?.review)
  const questions = Array.isArray(review?.questions) ? review.questions : []
  const answers = Array.isArray(review?.answers) ? review.answers : []
  const typed = Array.isArray(review?.typed) ? review.typed : []
  const domainNames = asRecord(review?.domainNames) ?? {}
  const out: ReviewItem[] = []
  questions.forEach((raw, i) => {
    const q = asRecord(raw)
    if (!q || typeof q.question !== 'string') return
    const options = Array.isArray(q.options) ? q.options.map(str) : []
    const correctIndex = intOrNull(q.correctIndex) ?? intOrNull(q.correctAnswer) ?? -1
    const passageId = str(q.passageId) || null
    const isGrid = !!q.gridIn
    const chosen = intOrNull(answers[i])
    const domain = str(q.domain)
    const key = questionKey({ question: q.question, options, correctIndex, passageId })
    const optionExplanations = diagnosticOptionExplanations(q, options, passageId) ?? (isGrid ? undefined : satOptionExplanationsFor(key, options))
    out.push({
      index: i,
      questionKey: key,
      question: q.question,
      options,
      correctIndex,
      explanation: str(q.explanation),
      passage: str(q.passage) ? { id: passageId ?? '', title: '', body: str(q.passage) } : null,
      chosenIndex: isGrid ? null : chosen !== null && chosen >= 0 && chosen < options.length ? chosen : null,
      chosenText: isGrid ? str(typed[i]) || null : null,
      ...(isGrid ? gridVerdict(q.gridIn, str(typed[i])) : {}),
      flagged: false,
      durationMs: null,
      topicSlug: str(q.topicSlug) || str(q.sourceSlug) || undefined,
      discipline: domain ? str(domainNames[domain]) || domain : undefined,
      ...(optionExplanations ? { optionExplanations } : {}),
    })
  })
  return out
}
