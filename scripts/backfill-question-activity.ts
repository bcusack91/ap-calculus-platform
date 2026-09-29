/**
 * One-time backfill of QuestionActivity (the teacher report's answered
 * questions) from history recorded before live tracking shipped.
 *
 *   npx tsx scripts/backfill-question-activity.ts            # dry run: counts only
 *   APPLY=1 npx tsx scripts/backfill-question-activity.ts    # write
 *   (prod: prefix NODE_ENV=production, see src/lib/load-env.ts)
 *
 * Sources:
 *   EXIT        ExitQuizAttempt.answers — one row per question from the stored
 *               `correct` flags. Before this change those flags were the
 *               client's, while the attempt's `score` was server-graded, so
 *               when the flags disagree with the score (or are missing) the
 *               attempt becomes one batch row carrying the score instead.
 *               answeredAt = completedAt.
 *   DIAGNOSTIC  DiagnosticTest.results — the same builder the submit routes
 *               use (graded from the stored review key; domain = discipline).
 *               answeredAt = createdAt; classroomId from the ClassDiagnostic
 *               the attempt answered, else personal ('').
 *   FULL_LENGTH DiagnosticTest category 'mcat-full-length' — one row per section.
 *   PRACTICE    McatTestAttempt — one batch row per section attempt.
 *
 * Other history has no class information, so its rows are personal ('').
 *
 * Idempotent: every backfilled row's questionKey is `bf:<attemptId>:<key>`,
 * and an attempt with any bf: row is skipped. Attempts from the live-tracking
 * era (at or after the first live row of that kind, minus a 5-minute margin,
 * or LIVE_SINCE=<ISO date> when given) are skipped too; the submit routes
 * already recorded them.
 */
import '../src/lib/load-env'
import { PrismaClient, type Prisma } from '@prisma/client'
import {
  diagnosticQuestionRows,
  mcatFullLengthRows,
  mcatPracticeBatchRow,
} from '../src/lib/question-activity-rows'
import type { QuestionRow } from '../src/lib/study-tracking'

const prisma = new PrismaClient()
const APPLY = process.env.APPLY === '1'
const PAGE = 500
const LIVE_MARGIN_MS = 5 * 60 * 1000

type Kind = 'EXIT' | 'DIAGNOSTIC' | 'FULL_LENGTH' | 'PRACTICE'
type Stat = { attempts: number; alreadyBackfilled: number; liveEra: number; empty: number; rows: number; answered: number; correct: number }
const stats: Record<Kind, Stat> = {
  EXIT: blank(),
  DIAGNOSTIC: blank(),
  FULL_LENGTH: blank(),
  PRACTICE: blank(),
}
function blank(): Stat {
  return { attempts: 0, alreadyBackfilled: 0, liveEra: 0, empty: 0, rows: 0, answered: 0, correct: 0 }
}

// Topic → course slug, loaded once.
const courseByTopic = new Map<string, string>()
async function loadCourses() {
  const topics = await prisma.topic.findMany({
    select: { slug: true, category: { select: { course: { select: { slug: true } } } } },
  })
  for (const t of topics) courseByTopic.set(t.slug, t.category?.course?.slug ?? '')
}

/** Attempt ids that already have backfilled rows. */
async function loadBackfilled(): Promise<Set<string>> {
  const rows = await prisma.questionActivity.findMany({
    where: { questionKey: { startsWith: 'bf:' } },
    select: { questionKey: true },
    distinct: ['questionKey'],
  })
  return new Set(rows.map((r) => r.questionKey.split(':')[1]).filter(Boolean))
}

/** Attempts at/after this were recorded by the live submit routes. */
async function liveSince(where: Prisma.QuestionActivityWhereInput): Promise<Date | null> {
  if (process.env.LIVE_SINCE) {
    const d = new Date(process.env.LIVE_SINCE)
    if (Number.isNaN(d.getTime())) throw new Error(`LIVE_SINCE is not a date: ${process.env.LIVE_SINCE}`)
    return d
  }
  const first = await prisma.questionActivity.findFirst({
    where: { ...where, NOT: { questionKey: { startsWith: 'bf:' } } },
    orderBy: { answeredAt: 'asc' },
    select: { answeredAt: true },
  })
  return first ? new Date(first.answeredAt.getTime() - LIVE_MARGIN_MS) : null
}

function toData(userId: string, classroomId: string, attemptId: string, rows: QuestionRow[]): Prisma.QuestionActivityCreateManyInput[] {
  return rows.map((r) => ({
    userId,
    source: r.source,
    topicSlug: r.topicSlug ?? '',
    courseSlug: r.courseSlug || (r.topicSlug ? courseByTopic.get(r.topicSlug) ?? '' : ''),
    discipline: (r.discipline ?? '').slice(0, 200),
    classroomId,
    questionKey: `bf:${attemptId}:${r.questionKey ?? ''}`.slice(0, 200),
    answered: Math.max(0, Math.round(r.answered ?? 1)),
    correct: Math.max(0, Math.round(r.correct ?? 0)),
    durationMs: r.durationMs == null ? null : Math.max(0, Math.min(Math.round(r.durationMs), 60 * 60 * 1000)),
    ...(r.answeredAt ? { answeredAt: r.answeredAt } : {}),
  }))
}

async function flush(kind: Kind, data: Prisma.QuestionActivityCreateManyInput[]) {
  const s = stats[kind]
  s.rows += data.length
  for (const d of data) {
    s.answered += d.answered ?? 0
    s.correct += d.correct ?? 0
  }
  if (APPLY && data.length) await prisma.questionActivity.createMany({ data })
}

function exitRows(a: {
  topicSlug: string
  score: number
  totalQuestions: number
  answers: Prisma.JsonValue
  timeSpent: number
  completedAt: Date
}): QuestionRow[] {
  const list = Array.isArray(a.answers) ? a.answers : []
  const flagged = list.filter(
    (x): x is { questionId?: string | number; correct: boolean } =>
      !!x && typeof x === 'object' && !Array.isArray(x) && typeof (x as { correct?: unknown }).correct === 'boolean',
  )
  const flaggedCorrect = flagged.filter((x) => x.correct).length
  if (flagged.length > 0 && flagged.length === list.length && flaggedCorrect === a.score) {
    const perQuestionMs = a.timeSpent > 0 ? Math.round((a.timeSpent * 1000) / flagged.length) : null
    return flagged.map((x) => ({
      source: 'EXIT',
      topicSlug: a.topicSlug,
      questionKey: x.questionId == null ? '' : String(x.questionId),
      answered: 1,
      correct: x.correct ? 1 : 0,
      durationMs: perQuestionMs,
      answeredAt: a.completedAt,
    }))
  }
  if (a.totalQuestions <= 0) return []
  return [{
    source: 'EXIT',
    topicSlug: a.topicSlug,
    answered: a.totalQuestions,
    correct: Math.min(a.score, a.totalQuestions),
    durationMs: a.timeSpent > 0 ? a.timeSpent * 1000 : null,
    answeredAt: a.completedAt,
  }]
}

function courseForCategory(category: string): string | undefined {
  if (category.startsWith('mcat')) return 'mcat-prep'
  if (category.startsWith('sat')) return 'sat-prep'
  return undefined // per-question topic slugs resolve the course
}

async function backfillExit(done: Set<string>) {
  const cutoff = await liveSince({ source: 'EXIT' })
  let cursor: string | undefined
  for (;;) {
    const page = await prisma.exitQuizAttempt.findMany({
      take: PAGE,
      ...(cursor ? { skip: 1, cursor: { id: cursor } } : {}),
      orderBy: { id: 'asc' },
      select: { id: true, userId: true, topicSlug: true, score: true, totalQuestions: true, answers: true, timeSpent: true, completedAt: true },
    })
    if (!page.length) break
    cursor = page[page.length - 1].id
    const data: Prisma.QuestionActivityCreateManyInput[] = []
    for (const a of page) {
      stats.EXIT.attempts++
      if (done.has(a.id)) { stats.EXIT.alreadyBackfilled++; continue }
      if (cutoff && a.completedAt >= cutoff) { stats.EXIT.liveEra++; continue }
      const rows = exitRows(a)
      if (!rows.length) { stats.EXIT.empty++; continue }
      data.push(...toData(a.userId, '', a.id, rows))
    }
    await flush('EXIT', data)
  }
}

async function backfillDiagnostics(done: Set<string>) {
  const diagCutoff = await liveSince({ source: 'DIAGNOSTIC' })
  const flCutoff = await liveSince({ source: 'FULL_LENGTH' })
  let cursor: string | undefined
  for (;;) {
    const page = await prisma.diagnosticTest.findMany({
      take: PAGE,
      ...(cursor ? { skip: 1, cursor: { id: cursor } } : {}),
      orderBy: { id: 'asc' },
      select: {
        id: true, userId: true, category: true, results: true, createdAt: true,
        classDiagnostic: { select: { classroomId: true } },
      },
    })
    if (!page.length) break
    cursor = page[page.length - 1].id
    const diag: Prisma.QuestionActivityCreateManyInput[] = []
    const full: Prisma.QuestionActivityCreateManyInput[] = []
    for (const t of page) {
      const kind: Kind = t.category === 'mcat-full-length' ? 'FULL_LENGTH' : 'DIAGNOSTIC'
      const s = stats[kind]
      const cutoff = kind === 'FULL_LENGTH' ? flCutoff : diagCutoff
      s.attempts++
      if (done.has(t.id)) { s.alreadyBackfilled++; continue }
      if (cutoff && t.createdAt >= cutoff) { s.liveEra++; continue }
      const rows = kind === 'FULL_LENGTH'
        ? mcatFullLengthRows(t.results, { answeredAt: t.createdAt })
        : diagnosticQuestionRows(t.results, { category: t.category, courseSlug: courseForCategory(t.category), answeredAt: t.createdAt })
      if (!rows.length) { s.empty++; continue }
      const data = toData(t.userId, t.classDiagnostic?.classroomId ?? '', t.id, rows)
      ;(kind === 'FULL_LENGTH' ? full : diag).push(...data)
    }
    await flush('DIAGNOSTIC', diag)
    await flush('FULL_LENGTH', full)
  }
}

async function backfillMcatPractice(done: Set<string>) {
  const cutoff = await liveSince({ source: 'PRACTICE', questionKey: { startsWith: 'mcat-practice:' } })
  let cursor: string | undefined
  for (;;) {
    const page = await prisma.mcatTestAttempt.findMany({
      take: PAGE,
      ...(cursor ? { skip: 1, cursor: { id: cursor } } : {}),
      orderBy: { id: 'asc' },
      select: { id: true, userId: true, sectionId: true, sectionName: true, correct: true, total: true, timeSpent: true, answers: true, completedAt: true },
    })
    if (!page.length) break
    cursor = page[page.length - 1].id
    const data: Prisma.QuestionActivityCreateManyInput[] = []
    for (const a of page) {
      stats.PRACTICE.attempts++
      if (done.has(a.id)) { stats.PRACTICE.alreadyBackfilled++; continue }
      if (cutoff && a.completedAt >= cutoff) { stats.PRACTICE.liveEra++; continue }
      const row = mcatPracticeBatchRow(a)
      if (!row.answered) { stats.PRACTICE.empty++; continue }
      data.push(...toData(a.userId, '', a.id, [{ ...row, answeredAt: a.completedAt }]))
    }
    await flush('PRACTICE', data)
  }
}

async function main() {
  console.log(APPLY ? 'APPLY=1 — writing rows.' : 'Dry run — nothing is written (APPLY=1 to write).')
  await loadCourses()
  const done = await loadBackfilled()
  console.log(`Attempts already backfilled: ${done.size}`)

  await backfillExit(done)
  await backfillDiagnostics(done)
  await backfillMcatPractice(done)

  console.log('\nsource        attempts  already  live-era  empty     rows  answered  correct')
  for (const [kind, s] of Object.entries(stats)) {
    console.log(
      `${kind.padEnd(12)} ${String(s.attempts).padStart(9)} ${String(s.alreadyBackfilled).padStart(8)} ${String(s.liveEra).padStart(9)} ${String(s.empty).padStart(6)} ${String(s.rows).padStart(8)} ${String(s.answered).padStart(9)} ${String(s.correct).padStart(8)}`,
    )
  }
  console.log(APPLY ? '\nDone.' : '\nDry run complete. Re-run with APPLY=1 to write these rows.')
}

main()
  .catch((err) => {
    console.error(err)
    process.exitCode = 1
  })
  .finally(() => prisma.$disconnect())
