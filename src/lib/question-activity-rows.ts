import type { QuestionRow } from '@/lib/study-tracking'

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

export function diagnosticQuestionRows(
  results: unknown,
  opts: { category?: string; courseSlug?: string; answeredAt?: Date; keyPrefix?: string } = {},
): QuestionRow[] {
  try {
    return buildDiagnosticRows(results, opts)
  } catch {
    return [] // tracking must never fail the submit
  }
}

function buildDiagnosticRows(
  results: unknown,
  opts: { category?: string; courseSlug?: string; answeredAt?: Date; keyPrefix?: string },
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
      rows.push({
        ...base,
        topicSlug: str(q.topicSlug) || str(q.sourceSlug),
        discipline: domain ? domainName(domain) : '',
        questionKey: `${prefix}${str(q.id) || `${opts.category ?? 'diagnostic'}:${i}`}`,
        answered: 1,
        correct: ok ? 1 : 0,
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
 * One MCAT section-practice attempt as a PRACTICE batch row. The test is
 * generated in the browser, so there is no server-side bank to re-grade
 * against; the count comes from the stored per-question key when it is
 * well-formed, else the (clamped) submitted tally.
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
