import type { AttemptKind, QuestionRow } from '@/lib/study-tracking'
import { optionKey, questionKey } from '@/lib/question-key'

/**
 * QuestionActivity rows built from stored results — shared by the submit
 * routes and scripts/backfill-question-activity.ts so live and backfilled
 * rows have the same shape.
 *
 * Diagnostics (DiagnosticTest.results): every diagnostic page stores the same shape: `review` = the questions as
 * served (with their answer key) plus the student's chosen indices, and
 * `domains` = the per-domain correct/total tally. Correctness is decided
 * HERE from the stored key and answers — never from a client `isCorrect`
 * flag. Questions this can't grade (SAT grid-ins store no typed answer in
 * `review`; a question without a key) are covered by a per-domain batch row
 * for the remainder of that domain's tally, so the totals always match the
 * stored score.
 *
 * Per-question rows also carry the answer-log detail: itemIndex (position in
 * the attempt), chosenIndex (the option picked, in the order shown; null =
 * skipped) and, when the question's text and options are stored, a
 * questionKey() hash. Only rows with a hashed key get `attemptKind` — the
 * mistake log reads nothing else — so a row that falls back to an old-style key
 * still counts for the teacher but stays out of the log.
 *
 * Pure (no database access), so the backfill script can import it.
 */

/** A diagnostic never has more questions than this; bounds a hostile payload. */
const MAX_ROWS = 300

type Rec = Record<string, unknown>

function asRecord(v: unknown): Rec | null {
  return v && typeof v === 'object' && !Array.isArray(v) ? (v as Rec) : null
}

function parseResults(results: unknown): Rec | null {
  if (typeof results === 'string') {
    try {
      return asRecord(JSON.parse(results))
    } catch {
      return null
    }
  }
  return asRecord(results)
}

function str(v: unknown): string {
  return typeof v === 'string' ? v : ''
}

function count(v: unknown): number {
  return typeof v === 'number' && Number.isFinite(v) ? Math.max(0, Math.round(v)) : 0
}

/** A chosen option index (in shown order), or null for skipped / not an index. */
function chosen(v: unknown): number | null {
  return typeof v === 'number' && Number.isInteger(v) && v >= 0 ? v : null
}

/**
 * optionKey() of the option picked (by its index in the shown `options`), for
 * "how others answered". Null when skipped, out of range, or the option isn't
 * text — typed (grid-in) answers never get one: the stats are for multiple
 * choice.
 */
export function chosenOptionKey(options: readonly unknown[] | null | undefined, pick: number | null | undefined): string | null {
  if (!Array.isArray(options) || typeof pick !== 'number' || !Number.isInteger(pick) || pick < 0 || pick >= options.length) return null
  const text = options[pick]
  return typeof text === 'string' && text.trim() ? optionKey(text) : null
}

type DiagnosticRowOpts = {
  category?: string
  courseSlug?: string
  answeredAt?: Date
  keyPrefix?: string
  /** Answer-log tagging; attemptId = the stored DiagnosticTest id. */
  attemptKind?: AttemptKind
  attemptId?: string
}

/**
 * questionKey() of a stored diagnostic question when its text and options
 * are there (every current diagnostic stores them), else null.
 */
function storedQuestionKey(q: Rec, key: number): string | null {
  const options = Array.isArray(q.options) ? q.options : null
  if (typeof q.question !== 'string' || !q.question || !options?.length || !options.every((o) => typeof o === 'string')) return null
  if (key < 0 || key >= options.length) return null
  const passageId = str(asRecord(q.passage)?.id) || str(q.passageId) || null
  return questionKey({ question: q.question, options: options as string[], correctIndex: key, passageId })
}

export function diagnosticQuestionRows(
  results: unknown,
  opts: DiagnosticRowOpts = {},
): QuestionRow[] {
  try {
    return buildDiagnosticRows(results, opts)
  } catch {
    return [] // tracking must never fail the submit
  }
}

function buildDiagnosticRows(
  results: unknown,
  opts: DiagnosticRowOpts,
): QuestionRow[] {
  const r = parseResults(results)
  if (!r) return []
  const base = {
    source: 'DIAGNOSTIC' as const,
    ...(opts.courseSlug ? { courseSlug: opts.courseSlug } : {}),
    ...(opts.answeredAt ? { answeredAt: opts.answeredAt } : {}),
  }
  const prefix = opts.keyPrefix ?? ''

  const review = asRecord(r.review)
  const domainNames = asRecord(review?.domainNames) ?? {}
  const domains = Array.isArray(r.domains) ? r.domains.map(asRecord).filter((d): d is Rec => !!d) : []
  const domainName = (id: string) =>
    str(domainNames[id]) || str(domains.find((d) => str(d.domainId) === id)?.domainName) || id

  const rows: QuestionRow[] = []
  // Per-domain count of questions graded individually, so the remainder of
  // each domain's tally can be recorded as one batch row.
  const gradedByDomain = new Map<string, { answered: number; correct: number }>()

  const questions = Array.isArray(review?.questions) ? review.questions : []
  const answers = Array.isArray(review?.answers) ? review.answers : []
  if (questions.length && answers.length === questions.length) {
    questions.forEach((raw, i) => {
      const q = asRecord(raw)
      if (!q) return
      const key = typeof q.correctAnswer === 'number' ? q.correctAnswer : typeof q.correctIndex === 'number' ? q.correctIndex : null
      if (q.gridIn || key === null) return
      const domain = str(q.domain)
      const ok = answers[i] === key
      const tally = gradedByDomain.get(domain) ?? { answered: 0, correct: 0 }
      tally.answered++
      if (ok) tally.correct++
      gradedByDomain.set(domain, tally)
      const hashed = storedQuestionKey(q, key)
      rows.push({
        ...base,
        topicSlug: str(q.topicSlug) || str(q.sourceSlug),
        discipline: domain ? domainName(domain) : '',
        questionKey: `${prefix}${hashed ?? (str(q.id) || `${opts.category ?? 'diagnostic'}:${i}`)}`,
        answered: 1,
        correct: ok ? 1 : 0,
        itemIndex: i,
        chosenIndex: chosen(answers[i]),
        chosenKey: chosenOptionKey(Array.isArray(q.options) ? q.options : null, chosen(answers[i])),
        ...(opts.attemptId ? { attemptId: opts.attemptId } : {}),
        ...(hashed && opts.attemptKind ? { attemptKind: opts.attemptKind } : {}),
      })
    })
  }

  // Every question graded individually → the domain tally adds nothing.
  const allGraded = questions.length > 0 && rows.length === questions.length
  for (const d of allGraded ? [] : domains) {
    const id = str(d.domainId)
    const graded = gradedByDomain.get(id) ?? { answered: 0, correct: 0 }
    const answered = count(d.total) - graded.answered
    if (answered <= 0) continue
    rows.push({
      ...base,
      discipline: str(d.domainName) || domainName(id),
      questionKey: `${prefix}${opts.category ?? 'diagnostic'}:domain:${id}`,
      answered,
      correct: Math.min(answered, Math.max(0, count(d.correct) - graded.correct)),
    })
  }

  // Legacy results with neither a review nor a domain tally: one batch row.
  if (!rows.length && count(r.totalQuestions) > 0) {
    const answered = count(r.totalQuestions)
    rows.push({
      ...base,
      questionKey: `${prefix}${opts.category ?? 'diagnostic'}`,
      answered,
      correct: Math.min(answered, count(r.totalCorrect)),
    })
  }

  return rows.slice(0, MAX_ROWS)
}

type PracticeAnswer = { selected?: unknown; correct?: unknown }

/**
 * One MCAT section-practice attempt as a PRACTICE batch row — the legacy
 * shape, still used for attempts without a per-question key (old clients,
 * the backfill). The count comes from the stored per-question key when it is
 * well-formed, else the (clamped) submitted tally. New attempts use
 * mcatPracticeRows.
 */
export function mcatPracticeBatchRow(a: {
  sectionId: unknown
  sectionName?: unknown
  correct?: unknown
  total?: unknown
  timeSpent?: unknown
  answers?: unknown
}): QuestionRow {
  const list = Array.isArray(a.answers) ? (a.answers as PracticeAnswer[]) : []
  const keyed = list.length > 0 && list.every((x) => x && typeof x.correct === 'number')
  const total = keyed ? list.length : Math.max(0, Math.round(Number(a.total) || 0))
  const correct = keyed
    ? list.filter((x) => typeof x.selected === 'number' && x.selected === x.correct).length
    : Math.min(total, Math.max(0, Math.round(Number(a.correct) || 0)))
  const seconds = Number(a.timeSpent)
  return {
    source: 'PRACTICE' as const,
    courseSlug: 'mcat-prep',
    discipline: String(a.sectionName || a.sectionId || '').slice(0, 200),
    questionKey: `mcat-practice:${String(a.sectionId).slice(0, 100)}`,
    answered: total,
    correct,
    durationMs: Number.isFinite(seconds) && seconds > 0 ? seconds * 1000 : null,
  }
}

/**
 * One MCAT full-length exam as FULL_LENGTH batch rows, one per section, from
 * the stored section tallies (the exam is graded in the browser; no
 * per-question data reaches the server).
 */
export function mcatFullLengthRows(
  results: unknown,
  opts: { answeredAt?: Date; keyPrefix?: string } = {},
): QuestionRow[] {
  const r = parseResults(results)
  const sections = Array.isArray(r?.sections) ? r.sections.map(asRecord).filter((x): x is Rec => !!x) : []
  const form = typeof r?.form === 'number' ? r.form : ''
  return sections
    .map((sec) => ({ sec, total: Math.min(count(sec.total), 300) }))
    .filter(({ sec, total }) => total > 0 && str(sec.section))
    .map(({ sec, total }) => ({
      source: 'FULL_LENGTH' as const,
      courseSlug: 'mcat-prep',
      discipline: str(sec.section),
      questionKey: `${opts.keyPrefix ?? ''}mcat-full-length:${form}:${str(sec.short) || str(sec.section)}`,
      answered: total,
      correct: Math.min(count(sec.correct), total),
      durationMs: typeof sec.elapsedSeconds === 'number' && Number.isFinite(sec.elapsedSeconds) ? count(sec.elapsedSeconds) * 1000 : null,
      ...(opts.answeredAt ? { answeredAt: opts.answeredAt } : {}),
    }))
}

/** A section-practice question re-resolved on the server from its ref. */
export interface ResolvedPracticeQuestion {
  /** Correct option index in the order shown. */
  correctIndex: number
  questionKey: string
  topicSlug?: string
  /** Options in the order shown (for chosenKey). */
  options?: readonly string[]
}

/**
 * One MCAT section-practice attempt as one PRACTICE row per question.
 *
 * A question whose ref re-resolves (`resolved[i]`) is graded from the bank and
 * tagged attemptKind 'mcat-practice'; one that doesn't is graded from the
 * stored per-question key, exactly as the batch row counted it, and left out
 * of the answer log. So for an honest client the totals equal
 * mcatPracticeBatchRow's. Without a well-formed per-question key (an old
 * client) it falls back to that batch row.
 */
export function mcatPracticeRows(
  a: { sectionId: unknown; sectionName?: unknown; correct?: unknown; total?: unknown; timeSpent?: unknown; answers?: unknown },
  resolved: (ResolvedPracticeQuestion | null | undefined)[],
  opts: { attemptId?: string; answeredAt?: Date } = {},
): QuestionRow[] {
  const list = Array.isArray(a.answers) ? (a.answers as PracticeAnswer[]) : []
  const keyed = list.length > 0 && list.length <= MAX_ROWS && list.every((x) => x && typeof x.correct === 'number')
  if (!keyed) {
    const row = mcatPracticeBatchRow(a)
    return row.answered ? [{ ...row, ...(opts.answeredAt ? { answeredAt: opts.answeredAt } : {}) }] : []
  }
  const sectionId = String(a.sectionId).slice(0, 100)
  const discipline = String(a.sectionName || a.sectionId || '').slice(0, 200)
  const seconds = Number(a.timeSpent)
  const perQuestionMs = Number.isFinite(seconds) && seconds > 0 ? Math.round((seconds * 1000) / list.length) : null
  return list.map((x, i) => {
    const item = resolved[i] ?? null
    const pick = chosen(x.selected)
    const ok = item ? pick === item.correctIndex : typeof x.selected === 'number' && x.selected === x.correct
    return {
      source: 'PRACTICE' as const,
      courseSlug: 'mcat-prep',
      discipline,
      ...(item?.topicSlug ? { topicSlug: item.topicSlug } : {}),
      questionKey: item ? item.questionKey : `mcat-practice:${sectionId}:${i}`,
      answered: 1,
      correct: ok ? 1 : 0,
      durationMs: perQuestionMs,
      itemIndex: i,
      chosenIndex: pick,
      chosenKey: item ? chosenOptionKey(item.options, pick) : null,
      ...(opts.attemptId ? { attemptId: opts.attemptId } : {}),
      ...(item ? { attemptKind: 'mcat-practice' as const } : {}),
      ...(opts.answeredAt ? { answeredAt: opts.answeredAt } : {}),
    }
  })
}

/** One graded full-length question (see buildFullLengthItems in question-sources/mcat). */
export interface FullLengthRowItem {
  index: number
  questionKey: string
  /** MCAT section id ('chem-phys' | 'cars' | ...): the row's discipline, as on the batch rows. */
  section: string
  topicSlug?: string
  chosenIndex: number | null
  isCorrect: boolean
  flagged?: boolean
  durationMs?: number | null
  /** Options in the order shown (for chosenKey). */
  options?: readonly string[]
}

/**
 * One MCAT full-length exam as one FULL_LENGTH row per question (unanswered
 * questions included, as the score counts them wrong), so each section's
 * totals equal the batch row mcatFullLengthRows wrote for it.
 */
export function mcatFullLengthQuestionRows(
  items: FullLengthRowItem[],
  opts: { attemptId?: string; answeredAt?: Date } = {},
): QuestionRow[] {
  return items.slice(0, MAX_ROWS).map((it) => ({
    source: 'FULL_LENGTH' as const,
    courseSlug: 'mcat-prep',
    discipline: it.section,
    ...(it.topicSlug ? { topicSlug: it.topicSlug } : {}),
    questionKey: it.questionKey,
    answered: 1,
    correct: it.isCorrect ? 1 : 0,
    durationMs: it.durationMs ?? null,
    itemIndex: it.index,
    chosenIndex: it.chosenIndex,
    chosenKey: chosenOptionKey(it.options, it.chosenIndex),
    flagged: !!it.flagged,
    ...(opts.attemptId ? { attemptId: opts.attemptId, attemptKind: 'mcat-fl' as const } : {}),
    ...(opts.answeredAt ? { answeredAt: opts.answeredAt } : {}),
  }))
}

/** A frozen unit-test question (McatUnitTest.questions): options already shuffled, key stored. */
export interface UnitTestRowQuestion {
  question: string
  options: string[]
  correctIndex: number
  topicSlug: string
}

/**
 * One cycle unit-test sitting as one UNIT_TEST row per question, graded from
 * the frozen key (same verdicts as gradeUnitTest). attemptId = the
 * McatUnitTest id.
 */
export function unitTestQuestionRows(
  questions: UnitTestRowQuestion[],
  answers: (number | null)[],
  opts: { courseSlug: string; attemptId: string; timeSpentSeconds?: number; answeredAt?: Date },
): QuestionRow[] {
  const list = questions.slice(0, MAX_ROWS)
  const perQuestionMs = opts.timeSpentSeconds && opts.timeSpentSeconds > 0 && list.length
    ? Math.round((opts.timeSpentSeconds * 1000) / list.length)
    : null
  return list.map((q, i) => {
    const pick = chosen(answers[i])
    const hashed = q && typeof q.question === 'string' && Array.isArray(q.options) && q.options.length
      ? questionKey({ question: q.question, options: q.options, correctIndex: q.correctIndex })
      : null
    return {
      source: 'UNIT_TEST' as const,
      courseSlug: opts.courseSlug,
      topicSlug: str(q?.topicSlug),
      questionKey: hashed ?? `unit-test:${opts.attemptId}:${i}`,
      answered: 1,
      correct: pick !== null && pick === q?.correctIndex ? 1 : 0,
      durationMs: perQuestionMs,
      itemIndex: i,
      chosenIndex: pick,
      chosenKey: chosenOptionKey(q?.options, pick),
      attemptId: opts.attemptId,
      ...(hashed ? { attemptKind: 'unit-test' as const } : {}),
      ...(opts.answeredAt ? { answeredAt: opts.answeredAt } : {}),
    }
  })
}
