/**
 * Database side of the custom question bank: building a session from the
 * student's filters, grading (tutor: one question at a time; timed: the whole
 * set on submit), logging each answer to the answer log exactly once
 * (QuestionActivity, attemptKind 'qbank', attemptId = session id), and the
 * browser's view of a session (keys only once they may be shown).
 *
 * Sessions are frozen (QbankSession.items holds each question with its
 * shown-order options and key), so grading and the review page never depend
 * on the banks staying the same.
 */
import { randomUUID } from 'crypto'
import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { recordQuestions, type QuestionRow } from '@/lib/study-tracking'
import { optionKey } from '@/lib/question-key'
import { gradeGridIn } from '@/data/sat-grid-in'
import { computeMistakes } from '@/lib/mistake-log'
import { answerLogFor, MISTAKE_COURSES } from '@/lib/mistakes-server'
import {
  eligibleUnits,
  freezeItems,
  getQbankPool,
  pickUnits,
  questionCount,
  type QbankPool,
  type QbankStudentState,
} from '@/lib/qbank-pools'
import {
  QBANK_DIFFICULTIES,
  QBANK_POOL_KINDS,
  QBANK_SECTIONS,
  secondsPerQuestion,
  type QbankAnswer,
  type QbankCounts,
  type QbankCourse,
  type QbankFeedback,
  type QbankFilters,
  type QbankItem,
  type QbankMode,
  type QbankPoolKind,
  type QbankSessionSummary,
  type QbankSessionView,
} from '@/lib/qbank-types'

/** Longest time recorded on one question (anything longer is a tab left open). */
export const MAX_ITEM_SECONDS = 60 * 60

/* ------------------------------------------------------------------ */
/*  Student state                                                      */
/* ------------------------------------------------------------------ */

export async function studentStateFor(userId: string, course: QbankCourse): Promise<QbankStudentState> {
  const [log, user] = await Promise.all([
    answerLogFor(userId, course),
    // MCAT and ACT pools are lesson-built and yield-tagged; SAT's are not.
    course !== 'sat' ? prisma.user.findUnique({ where: { id: userId }, select: { lessonIncludeLowYield: true } }) : null,
  ])
  const active = computeMistakes(log).filter((m) => !m.retired)
  return {
    includeLowYield: user?.lessonIncludeLowYield === true,
    seenKeys: new Set(log.map((r) => r.questionKey)),
    incorrectKeys: new Set(active.filter((m) => m.reason !== 'flagged').map((m) => m.questionKey)),
    flaggedKeys: new Set(active.filter((m) => m.reason === 'flagged').map((m) => m.questionKey)),
  }
}

/* ------------------------------------------------------------------ */
/*  Counts (the builder's live numbers)                                */
/* ------------------------------------------------------------------ */

const topicTitleCache = new Map<string, string>()

function humanizeSlug(slug: string): string {
  return slug
    .replace(/^(mcat|sat|act)-/, '')
    .replace(/-(mcat|act)$/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

async function topicTitles(slugs: string[]): Promise<Map<string, string>> {
  const missing = slugs.filter((s) => !topicTitleCache.has(s))
  if (missing.length) {
    try {
      const rows = await prisma.topic.findMany({ where: { slug: { in: missing } }, select: { slug: true, title: true } })
      for (const r of rows) topicTitleCache.set(r.slug, r.title)
    } catch (err) {
      console.warn('[qbank] topic titles unavailable:', err)
    }
  }
  return new Map(slugs.map((s) => [s, topicTitleCache.get(s) ?? humanizeSlug(s)]))
}

/** Pure part of the counts: every facet counted with the other filters applied. */
export function countFacets(course: QbankCourse, pool: QbankPool, f: QbankFilters, s: QbankStudentState) {
  const pools = Object.fromEntries(
    QBANK_POOL_KINDS.map((k) => [k, questionCount(eligibleUnits(pool, f, k, s))]),
  ) as Record<QbankPoolKind, number>

  const bySection = new Map<string, number>()
  for (const u of eligibleUnits(pool, { ...f, sections: [] }, 'all', s)) bySection.set(u.section, (bySection.get(u.section) ?? 0) + u.items.length)

  const byDiscipline = new Map<string, { section: string; count: number }>()
  for (const u of eligibleUnits(pool, { ...f, disciplines: [] }, 'all', s)) {
    const d = byDiscipline.get(u.discipline) ?? { section: u.section, count: 0 }
    d.count += u.items.length
    byDiscipline.set(u.discipline, d)
  }

  const byTopic = new Map<string, { section: string; discipline: string; count: number }>()
  for (const u of eligibleUnits(pool, { ...f, topics: [] }, 'all', s)) {
    const t = byTopic.get(u.topicSlug) ?? { section: u.section, discipline: u.discipline, count: 0 }
    t.count += u.items.length
    byTopic.set(u.topicSlug, t)
  }

  const difficulties = Object.fromEntries(
    QBANK_DIFFICULTIES.map((d) => [d, questionCount(eligibleUnits(pool, { ...f, difficulties: [d] }, 'all', s))]),
  ) as QbankCounts['difficulties']

  return {
    pools,
    sections: QBANK_SECTIONS[course].map((sec) => ({ id: sec.id, label: sec.label, count: bySection.get(sec.id) ?? 0 })),
    disciplines: [...byDiscipline.entries()]
      .map(([id, d]) => ({ id, section: d.section, count: d.count }))
      .sort((a, b) => a.id.localeCompare(b.id)),
    byTopic,
    difficulties,
  }
}

export async function qbankCounts(userId: string, course: QbankCourse, f: QbankFilters): Promise<QbankCounts> {
  const [pool, state] = await Promise.all([getQbankPool(course), studentStateFor(userId, course)])
  const { byTopic, ...facets } = countFacets(course, pool, f, state)
  // Selected topics stay listed even when other filters leave them empty.
  for (const slug of f.topics ?? []) if (!byTopic.has(slug)) byTopic.set(slug, { section: '', discipline: '', count: 0 })
  const titles = await topicTitles([...byTopic.keys()])
  const topics = [...byTopic.entries()]
    .map(([slug, t]) => ({ slug, title: titles.get(slug) ?? slug, ...t }))
    .sort((a, b) => a.title.localeCompare(b.title))
  return { ...facets, topics }
}

/* ------------------------------------------------------------------ */
/*  Sessions                                                           */
/* ------------------------------------------------------------------ */

export interface CreateQbankInput {
  course: QbankCourse
  filters: QbankFilters
  count: number
  mode: QbankMode
  pool: QbankPoolKind
}

type SessionRow = {
  id: string
  userId: string
  course: string
  mode: string
  filters: Prisma.JsonValue
  items: Prisma.JsonValue
  answers: Prisma.JsonValue | null
  flags: Prisma.JsonValue | null
  timings: Prisma.JsonValue | null
  timeLimitSec: number | null
  correct: number | null
  total: number
  startedAt: Date
  completedAt: Date | null
}

export function sessionItems(json: unknown): QbankItem[] {
  return Array.isArray(json) ? (json as QbankItem[]) : []
}

function answerAt(v: unknown): QbankAnswer | null {
  if (!v || typeof v !== 'object') return null
  const a = v as Record<string, unknown>
  const chosenIndex = typeof a.chosenIndex === 'number' && Number.isInteger(a.chosenIndex) ? a.chosenIndex : null
  const chosenText = typeof a.chosenText === 'string' && a.chosenText.trim() ? a.chosenText.trim().slice(0, 20) : null
  return { chosenIndex, chosenText }
}

/** Stored answers aligned with the items (null = unanswered). */
export function sessionAnswers(json: unknown, n: number): (QbankAnswer | null)[] {
  const list = Array.isArray(json) ? json : []
  return Array.from({ length: n }, (_, i) => answerAt(list[i]))
}

export function sessionFlags(json: unknown, n: number): boolean[] {
  const list = Array.isArray(json) ? json : []
  return Array.from({ length: n }, (_, i) => list[i] === true)
}

export function sessionTimings(json: unknown, n: number): number[] {
  const list = Array.isArray(json) ? json : []
  return Array.from({ length: n }, (_, i) => {
    const v = list[i]
    return typeof v === 'number' && Number.isFinite(v) && v > 0 ? Math.min(Math.round(v), MAX_ITEM_SECONDS) : 0
  })
}

/** The student gave an answer (an option or a typed value). */
const hasResponse = (a: QbankAnswer | null) => !!a && (a.chosenIndex !== null || !!a.chosenText)
/** The question is done with: answered, or (tutor) "I don't know". Unanswered slots are null. */
const isSettled = (a: QbankAnswer | null): a is QbankAnswer => a !== null

export function gradeAnswer(item: QbankItem, a: QbankAnswer | null): boolean {
  if (!a) return false
  if (item.gridIn) return !!a.chosenText && gradeGridIn(item.gridIn, a.chosenText)
  return a.chosenIndex !== null && a.chosenIndex === item.correctIndex
}

export function feedbackFor(item: QbankItem, a: QbankAnswer | null): QbankFeedback {
  return {
    correct: gradeAnswer(item, a),
    correctIndex: item.correctIndex,
    explanation: item.explanation,
    ...(item.gridIn ? { acceptedAnswer: item.gridIn.correctAnswer } : {}),
  }
}

/**
 * A submitted answer, kept only if it fits the question: an option index in
 * range for multiple choice, a short typed value for a grid-in.
 */
export function sanitizeAnswer(item: QbankItem, raw: { chosenIndex?: unknown; chosenText?: unknown } | null | undefined): QbankAnswer | null {
  if (!raw) return null
  if (item.gridIn) {
    const text = typeof raw.chosenText === 'string' ? raw.chosenText.trim().slice(0, 20) : ''
    return text ? { chosenIndex: null, chosenText: text } : null
  }
  const i = raw.chosenIndex
  return typeof i === 'number' && Number.isInteger(i) && i >= 0 && i < item.options.length ? { chosenIndex: i, chosenText: null } : null
}

/** The browser's view: keys and explanations only where they may be shown. */
export function sessionView(row: SessionRow): QbankSessionView {
  const items = sessionItems(row.items)
  const n = items.length
  const answers = sessionAnswers(row.answers, n)
  const done = row.completedAt !== null
  const tutor = row.mode === 'tutor'
  const feedback = items.map((it, i) => (done || (tutor && isSettled(answers[i])) ? feedbackFor(it, answers[i]) : null))
  return {
    id: row.id,
    course: row.course as QbankCourse,
    mode: row.mode as QbankMode,
    filters: row.filters,
    timeLimitSec: row.timeLimitSec,
    total: row.total,
    startedAt: row.startedAt.toISOString(),
    completedAt: row.completedAt ? row.completedAt.toISOString() : null,
    items: items.map((it) => ({
      index: it.index,
      question: it.question,
      options: it.options,
      passage: it.passage,
      typed: !!it.gridIn,
      topicSlug: it.topicSlug,
      section: it.section,
      discipline: it.discipline,
    })),
    answers,
    flags: sessionFlags(row.flags, n),
    timings: sessionTimings(row.timings, n),
    feedback,
    result: done
      ? { correct: row.correct ?? feedback.filter((f) => f?.correct).length, total: n, answered: answers.filter(hasResponse).length }
      : null,
  }
}

export async function createQbankSession(userId: string, input: CreateQbankInput): Promise<SessionRow | null> {
  const [pool, state] = await Promise.all([getQbankPool(input.course), studentStateFor(userId, input.course)])
  const units = pickUnits(eligibleUnits(pool, input.filters, input.pool, state), input.count)
  const items = freezeItems(units, randomUUID())
  if (!items.length) return null
  const timeLimitSec = input.mode === 'timed' ? items.reduce((n, it) => n + secondsPerQuestion(input.course, it.section), 0) : null
  return prisma.qbankSession.create({
    data: {
      userId,
      course: input.course,
      mode: input.mode,
      filters: { ...input.filters, pool: input.pool, count: input.count } as Prisma.InputJsonObject,
      items: items as unknown as Prisma.InputJsonArray,
      answers: items.map(() => null) as unknown as Prisma.InputJsonArray,
      flags: items.map(() => false),
      timings: items.map(() => 0),
      timeLimitSec,
      total: items.length,
    },
  })
}

export async function findSession(userId: string, id: string): Promise<SessionRow | null> {
  return prisma.qbankSession.findFirst({ where: { id, userId } })
}

export async function recentSessions(userId: string, course: QbankCourse): Promise<{ sessions: QbankSessionSummary[]; inProgressId: string | null }> {
  const rows = await prisma.qbankSession.findMany({
    where: { userId, course },
    orderBy: { startedAt: 'desc' },
    take: 20,
    select: { id: true, mode: true, total: true, correct: true, startedAt: true, completedAt: true, filters: true },
  })
  const sections = (f: unknown) => {
    const s = f && typeof f === 'object' ? (f as { sections?: unknown }).sections : null
    return Array.isArray(s) ? s.filter((x): x is string => typeof x === 'string') : []
  }
  return {
    sessions: rows.map((r) => ({
      id: r.id,
      mode: r.mode as QbankMode,
      total: r.total,
      correct: r.correct,
      startedAt: r.startedAt.toISOString(),
      completedAt: r.completedAt ? r.completedAt.toISOString() : null,
      sections: sections(r.filters),
    })),
    inProgressId: rows.find((r) => r.completedAt === null)?.id ?? null,
  }
}

/* ------------------------------------------------------------------ */
/*  Answer log                                                         */
/* ------------------------------------------------------------------ */

/** The answer-log row for one question of a session. Pure. */
export function qbankRow(
  course: QbankCourse,
  sessionId: string,
  item: QbankItem,
  answer: QbankAnswer | null,
  flagged: boolean,
  seconds: number,
): QuestionRow {
  const chosenIndex = item.gridIn ? null : answer?.chosenIndex ?? null
  return {
    source: 'PRACTICE',
    courseSlug: MISTAKE_COURSES[course],
    topicSlug: item.topicSlug,
    // MCAT rows carry the section (as full-length rows do); SAT rows the content domain.
    discipline: course === 'mcat' ? item.section : item.discipline,
    questionKey: item.questionKey,
    answered: 1,
    correct: gradeAnswer(item, answer) ? 1 : 0,
    durationMs: seconds > 0 ? Math.round(seconds * 1000) : null,
    attemptKind: 'qbank',
    attemptId: sessionId,
    itemIndex: item.index,
    chosenIndex,
    chosenText: item.gridIn ? answer?.chosenText ?? null : null,
    flagged,
    chosenKey: chosenIndex !== null && item.options[chosenIndex] !== undefined ? optionKey(item.options[chosenIndex]) : null,
  }
}

/** Log these positions of a session, skipping any already in the answer log. */
async function logPositions(userId: string, row: SessionRow, positions: number[], answers: (QbankAnswer | null)[], flags: boolean[], timings: number[]) {
  if (!positions.length) return
  const items = sessionItems(row.items)
  const existing = await prisma.questionActivity.findMany({
    where: { userId, attemptKind: 'qbank', attemptId: row.id, itemIndex: { in: positions } },
    select: { itemIndex: true },
  })
  const logged = new Set(existing.map((r) => r.itemIndex))
  const rows = positions
    .filter((i) => !logged.has(i) && items[i])
    .map((i) => qbankRow(row.course as QbankCourse, row.id, items[i], answers[i], flags[i], timings[i]))
  await recordQuestions(userId, rows)
}

export type QbankActionResult<T> = { ok: true; value: T } | { ok: false; status: number; error: string }

const fail = (status: number, error: string) => ({ ok: false as const, status, error })

/**
 * Tutor mode: grade one question, store the answer and log it. Answering the
 * same question again returns the stored verdict without logging twice. The
 * write is conditional on the answers being unchanged since they were read,
 * so two racing requests can't both log.
 */
export async function answerQbankItem(
  userId: string,
  id: string,
  body: { index: number; chosenIndex?: number | null; chosenText?: string | null; seconds?: number; flagged?: boolean },
): Promise<QbankActionResult<{ feedback: QbankFeedback; completed: boolean; view?: QbankSessionView }>> {
  for (let attempt = 0; attempt < 3; attempt++) {
    const row = await findSession(userId, id)
    if (!row) return fail(404, 'Practice set not found')
    if (row.mode !== 'tutor') return fail(400, 'Timed sets are graded when you submit them.')
    const items = sessionItems(row.items)
    const item = items[body.index]
    if (!item) return fail(400, 'No such question')
    const answers = sessionAnswers(row.answers, items.length)
    if (isSettled(answers[body.index])) {
      return { ok: true, value: { feedback: feedbackFor(item, answers[body.index]), completed: row.completedAt !== null } }
    }
    if (row.completedAt) return fail(409, 'This practice set is finished.')
    // "I don't know" stores an empty answer: settled (and logged as skipped).
    const answer = sanitizeAnswer(item, body) ?? { chosenIndex: null, chosenText: null }
    const flags = sessionFlags(row.flags, items.length)
    const timings = sessionTimings(row.timings, items.length)
    const nextAnswers = answers.map((a, i) => (i === body.index ? answer : a))
    flags[body.index] = body.flagged === true
    timings[body.index] = Math.max(0, Math.min(Math.round(body.seconds ?? 0), MAX_ITEM_SECONDS))
    const allDone = nextAnswers.every(isSettled)
    const correct = allDone ? items.reduce((n, it, i) => n + (gradeAnswer(it, nextAnswers[i]) ? 1 : 0), 0) : undefined
    const won = await prisma.qbankSession.updateMany({
      // Answers start as an array of nulls, so they are never a DB null here.
      where: { id, userId, completedAt: null, ...(row.answers !== null ? { answers: { equals: row.answers as Prisma.InputJsonValue } } : {}) },
      data: {
        answers: nextAnswers as unknown as Prisma.InputJsonArray,
        flags,
        timings,
        ...(allDone ? { completedAt: new Date(), correct } : {}),
      },
    })
    if (won.count === 0) continue // someone else wrote first: re-read
    await logPositions(userId, row, [body.index], nextAnswers, flags, timings)
    const value: { feedback: QbankFeedback; completed: boolean; view?: QbankSessionView } = { feedback: feedbackFor(item, answer), completed: allDone }
    if (allDone) {
      const fresh = await findSession(userId, id)
      if (fresh) value.view = sessionView(fresh)
    }
    return { ok: true, value }
  }
  return fail(409, 'Could not save that answer. Try again.')
}

/** Timed mode: save progress (answers, flags, time) so the set can be resumed. Nothing is graded or logged. */
export async function saveQbankProgress(
  userId: string,
  id: string,
  body: { answers?: unknown[]; flags?: unknown[]; timings?: unknown[] },
): Promise<QbankActionResult<{ saved: true }>> {
  const row = await findSession(userId, id)
  if (!row) return fail(404, 'Practice set not found')
  if (row.mode !== 'timed') return fail(400, 'Only timed sets save progress this way.')
  if (row.completedAt) return fail(409, 'This practice set is finished.')
  const items = sessionItems(row.items)
  const answers = items.map((it, i) => sanitizeAnswer(it, (body.answers?.[i] ?? null) as { chosenIndex?: unknown; chosenText?: unknown } | null))
  await prisma.qbankSession.updateMany({
    where: { id, userId, completedAt: null },
    data: {
      answers: answers as unknown as Prisma.InputJsonArray,
      flags: sessionFlags(body.flags, items.length),
      timings: sessionTimings(body.timings, items.length),
    },
  })
  return { ok: true, value: { saved: true } }
}

/**
 * Finish a set. Timed: grade every question from the submitted answers, store
 * them, and log every question (unanswered ones count as skipped). Tutor:
 * close the set early; its answered questions were logged as they were
 * answered and the rest are left out of the log. Submitting a finished set
 * again returns it unchanged and logs nothing.
 */
export async function submitQbankSession(
  userId: string,
  id: string,
  body: { answers?: unknown[]; flags?: unknown[]; timings?: unknown[] },
): Promise<QbankActionResult<QbankSessionView>> {
  const row = await findSession(userId, id)
  if (!row) return fail(404, 'Practice set not found')
  if (row.completedAt) return { ok: true, value: sessionView(row) }
  const items = sessionItems(row.items)
  const n = items.length
  if (row.mode === 'tutor') {
    const answers = sessionAnswers(row.answers, n)
    const correct = items.reduce((c, it, i) => c + (gradeAnswer(it, answers[i]) ? 1 : 0), 0)
    await prisma.qbankSession.updateMany({ where: { id, userId, completedAt: null }, data: { completedAt: new Date(), correct } })
  } else {
    const answers = items.map((it, i) => sanitizeAnswer(it, (body.answers?.[i] ?? null) as { chosenIndex?: unknown; chosenText?: unknown } | null))
    const flags = sessionFlags(body.flags, n)
    const timings = sessionTimings(body.timings, n)
    const correct = items.reduce((c, it, i) => c + (gradeAnswer(it, answers[i]) ? 1 : 0), 0)
    const won = await prisma.qbankSession.updateMany({
      where: { id, userId, completedAt: null },
      data: { answers: answers as unknown as Prisma.InputJsonArray, flags, timings, correct, completedAt: new Date() },
    })
    // Only the request that closed the set logs it.
    if (won.count > 0) await logPositions(userId, row, items.map((_, i) => i), answers, flags, timings)
  }
  const fresh = await findSession(userId, id)
  return fresh ? { ok: true, value: sessionView(fresh) } : fail(404, 'Practice set not found')
}
