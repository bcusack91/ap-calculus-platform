import { parseMasteredParts } from '@/lib/flashcard-unlock'

/**
 * Per-topic entrance- and exit-quiz summaries for the teacher's Performance
 * tab (/api/teacher/classrooms/[id]/performance). Pure — the route queries,
 * this shapes.
 */

export interface ExitQuizSummary {
  topicSlug: string
  topicTitle: string | null
  totalAttempts: number
  passed: boolean
  /** Best attempt by percentage, with its own question count. */
  bestScore: number
  bestTotal: number
  bestPercent: number
  lastScore: number | null
  lastTotal: number | null
  lastAttempt: Date | null
  mustRedoUnit: boolean
}

export interface ExitAttemptRow {
  topicSlug: string
  score: number
  totalQuestions: number
  passed: boolean
  mustRedoUnit: boolean
  completedAt: Date
}

const pct = (correct: number, total: number) => (total > 0 ? Math.round((correct / total) * 100) : 0)

/** Exit quizzes vary in length (8, 10, 20 … questions), so scores carry their own totals. */
export function summarizeExitQuizzes(
  attempts: ExitAttemptRow[],
  titleBySlug: Map<string, string>,
): ExitQuizSummary[] {
  const byTopic = new Map<string, ExitAttemptRow[]>()
  for (const a of attempts) byTopic.set(a.topicSlug, [...(byTopic.get(a.topicSlug) ?? []), a])
  return [...byTopic.entries()].map(([topicSlug, rows]) => {
    const latestFirst = [...rows].sort((a, b) => b.completedAt.getTime() - a.completedAt.getTime())
    const best = latestFirst.reduce((b, a) => (pct(a.score, a.totalQuestions) > pct(b.score, b.totalQuestions) ? a : b))
    const last = latestFirst[0]
    const passed = rows.some((a) => a.passed)
    return {
      topicSlug,
      topicTitle: titleBySlug.get(topicSlug) ?? null,
      totalAttempts: rows.length,
      passed,
      bestScore: best.score,
      bestTotal: best.totalQuestions,
      bestPercent: pct(best.score, best.totalQuestions),
      lastScore: last?.score ?? null,
      lastTotal: last?.totalQuestions ?? null,
      lastAttempt: last?.completedAt ?? null,
      mustRedoUnit: !passed && (last?.mustRedoUnit ?? false),
    }
  })
}

export interface EntranceQuizSummary {
  topicSlug: string
  topicTitle: string | null
  /** Sittings with recorded answers (recorded since 2026-09-29). */
  sittings: number
  lastCorrect: number | null
  lastTotal: number | null
  lastPercent: number | null
  bestCorrect: number | null
  bestTotal: number | null
  bestPercent: number | null
  lastTaken: Date | null
  /** Lesson parts the student tested out of (skipped). */
  partsTestedOut: number
  /** The lesson's part count, when the lesson is registered. */
  totalParts: number | null
}

export interface EntranceAnswerRow {
  topicSlug: string
  answered: number
  correct: number
  answeredAt: Date
}

export interface TestOutRow {
  topicSlug: string
  masteredParts: unknown
}

/**
 * An entrance quiz posts all of its answers in one request, one
 * QuestionActivity row per question with one shared answeredAt — so a sitting
 * is the rows of one topic at one timestamp. Tested-out parts come from the
 * lesson's saved progress (TopicProgress.masteredParts), which also covers
 * sittings from before answers were recorded.
 */
export function summarizeEntranceQuizzes(
  answers: EntranceAnswerRow[],
  testOuts: TestOutRow[],
  titleBySlug: Map<string, string>,
  totalPartsFor: (topicSlug: string) => number | null,
): EntranceQuizSummary[] {
  const sittingsByTopic = new Map<string, Map<number, { correct: number; total: number; at: Date }>>()
  for (const r of answers) {
    const sittings = sittingsByTopic.get(r.topicSlug) ?? new Map()
    const key = r.answeredAt.getTime()
    const s = sittings.get(key) ?? { correct: 0, total: 0, at: r.answeredAt }
    s.correct += r.correct
    s.total += r.answered
    sittings.set(key, s)
    sittingsByTopic.set(r.topicSlug, sittings)
  }
  const partsByTopic = new Map<string, number[]>()
  for (const t of testOuts) {
    const parts = parseMasteredParts(t.masteredParts)
    if (parts.length) partsByTopic.set(t.topicSlug, parts)
  }

  const slugs = new Set([...sittingsByTopic.keys(), ...partsByTopic.keys()])
  return [...slugs].map((topicSlug) => {
    const sittings = [...(sittingsByTopic.get(topicSlug)?.values() ?? [])].sort((a, b) => b.at.getTime() - a.at.getTime())
    const last = sittings[0]
    const best = sittings.length
      ? sittings.reduce((b, s) => (pct(s.correct, s.total) > pct(b.correct, b.total) ? s : b))
      : undefined
    const totalParts = totalPartsFor(topicSlug)
    // Saved masteredParts can list parts past the lesson's end (an older,
    // longer quiz), so count only the parts this lesson has.
    const parts = partsByTopic.get(topicSlug) ?? []
    const partsTestedOut = totalParts ? new Set(parts.filter((p) => p >= 1 && p <= totalParts)).size : new Set(parts).size
    return {
      topicSlug,
      topicTitle: titleBySlug.get(topicSlug) ?? null,
      sittings: sittings.length,
      lastCorrect: last?.correct ?? null,
      lastTotal: last?.total ?? null,
      lastPercent: last ? pct(last.correct, last.total) : null,
      bestCorrect: best?.correct ?? null,
      bestTotal: best?.total ?? null,
      bestPercent: best ? pct(best.correct, best.total) : null,
      lastTaken: last?.at ?? null,
      partsTestedOut,
      totalParts,
    }
  })
}
