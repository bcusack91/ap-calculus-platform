import { prisma } from '@/lib/prisma'
import { cardCheckFor, cardChecksFor, CARD_CHECK_TOPICS } from '@/data/flashcard-checks'
import {
  CARD_CHECK_MAX,
  checkKey,
  effectiveAfterReviews,
  gradeChoice,
  nextStudyDayStart,
  pickCheckCards,
  pickVariant,
  ratedConfident,
  shuffledOrder,
  type CheckCandidate,
  type CheckItem,
  type CheckRating,
} from '@/lib/flashcard-check-core'
import { getDailyQueueState } from '@/lib/flashcard-daily-queue'
import { getActiveStudyContext } from '@/lib/study-context'
import { recordQuestions } from '@/lib/study-tracking'
import { isOwnCardId } from '@/lib/user-flashcard-ids'

/**
 * The daily card check, server side (owner, Nov 2026). Rules:
 *
 * - A check COVERS the reviews since the student's last completed check,
 *   looking back at most WINDOW_MS. It asks one question per reviewed card
 *   that has a check question (src/data/flashcard-checks), at most 15. A card
 *   with several questions is asked the one this student saw least recently.
 * - It is REQUIRED whenever that window holds such a card: the day's
 *   flashcards don't count as done until it is taken (the teacher's 7-day
 *   grid reads this through `checkedDays`).
 * - The student may TAKE it once nothing is due right now, or, with a
 *   backlog, after `afterReviews` reviews in the window (repeats count; 150
 *   unless one of their classes sets another number).
 * - After a completed check, no new one is asked for COOLDOWN_MS, so a few
 *   late reviews the same evening roll into the next day's check.
 * - A card the student rated Good or Easy and then MISSED is pulled back to
 *   the next study day as a card to relearn.
 */
const WINDOW_MS = 36 * 60 * 60 * 1000
const COOLDOWN_MS = 14 * 60 * 60 * 1000
/** An unfinished check is reopened as it was for this long, then rebuilt. */
const RESUME_MS = 12 * 60 * 60 * 1000

export type CardCheckResult = { attemptId: string; correct: number; total: number; overconfident: number; completedAt: string }

export type CardCheckState = {
  /** Reviewed cards are waiting on a check. */
  required: boolean
  /** The check can be taken now. */
  eligible: boolean
  /** Questions the check would ask. */
  questions: number
  /** Reviews in the window (repeats count). */
  reviews: number
  /** Reviews after which a student with a backlog may take it. */
  afterReviews: number
  /** Cards still due right now in the active deck. */
  dueNow: number
  /** The latest completed check. */
  last: CardCheckResult | null
  /** True when `last` is recent enough that nothing more is asked today. */
  doneRecently: boolean
}

async function windowOf(userId: string, now: Date) {
  const last = await prisma.flashcardCheckAttempt.findFirst({
    where: { userId, completedAt: { not: null } },
    orderBy: { completedAt: 'desc' },
    select: { id: true, completedAt: true, correct: true, total: true, overconfident: true },
  })
  const floor = now.getTime() - WINDOW_MS
  const windowStart = new Date(Math.max(floor, last?.completedAt?.getTime() ?? 0))
  const doneRecently = !!last?.completedAt && now.getTime() - last.completedAt.getTime() < COOLDOWN_MS
  const lastResult: CardCheckResult | null = last?.completedAt
    ? { attemptId: last.id, correct: last.correct ?? 0, total: last.total, overconfident: last.overconfident ?? 0, completedAt: last.completedAt.toISOString() }
    : null
  return { windowStart, doneRecently, last: lastResult }
}

/** Cards reviewed since `windowStart` that have a check question, with the rating each was last given. */
async function candidatesSince(userId: string, windowStart: Date): Promise<{ candidates: CheckCandidate[]; reviews: number }> {
  const logs = await prisma.flashcardReviewLog.findMany({
    where: { userId, reviewedAt: { gt: windowStart } },
    orderBy: { reviewedAt: 'asc' },
    select: { flashcardId: true, context: true, rating: true, wasNew: true },
  })
  const perCard = new Map<string, { context: string; rating: CheckRating; wasNew: boolean }>()
  for (const l of logs) {
    if (isOwnCardId(l.flashcardId)) continue
    const prev = perCard.get(l.flashcardId)
    perCard.set(l.flashcardId, { context: l.context, rating: l.rating as CheckRating, wasNew: (prev?.wasNew ?? false) || l.wasNew })
  }
  if (perCard.size === 0) return { candidates: [], reviews: logs.length }
  const cards = await prisma.flashcard.findMany({
    where: { id: { in: [...perCard.keys()] }, topic: { slug: { in: CARD_CHECK_TOPICS } } },
    select: { id: true, front: true, topic: { select: { slug: true } } },
  })
  const candidates: CheckCandidate[] = []
  const seenQuestions = new Set<string>()
  for (const c of cards) {
    const check = cardCheckFor(c.topic.slug, c.front)
    if (!check || seenQuestions.has(check.question)) continue
    seenQuestions.add(check.question)
    const p = perCard.get(c.id)!
    candidates.push({ flashcardId: c.id, context: p.context, front: c.front, topicSlug: c.topic.slug, rating: p.rating, wasNew: p.wasNew })
  }
  return { candidates, reviews: logs.length }
}

async function afterReviewsFor(userId: string): Promise<number> {
  const rows = await prisma.classroomMember.findMany({
    where: { userId, isActive: true, classroom: { isActive: true } },
    select: { classroom: { select: { cardCheckAfterReviews: true } } },
  })
  return effectiveAfterReviews(rows.map((r) => r.classroom.cardCheckAfterReviews))
}

export async function getCardCheckState(userId: string, now: Date = new Date()): Promise<CardCheckState> {
  const [{ windowStart, doneRecently, last }, afterReviews, context] = await Promise.all([
    windowOf(userId, now),
    afterReviewsFor(userId),
    getActiveStudyContext(userId),
  ])
  if (doneRecently) return { required: false, eligible: false, questions: 0, reviews: 0, afterReviews, dueNow: 0, last, doneRecently: true }
  const [{ candidates, reviews }, queue] = await Promise.all([candidatesSince(userId, windowStart), getDailyQueueState(userId, context, now)])
  const required = candidates.length > 0
  const dueNow = queue.dueToday
  return {
    required,
    eligible: required && (dueNow === 0 || reviews >= afterReviews),
    questions: Math.min(candidates.length, CARD_CHECK_MAX),
    reviews,
    afterReviews,
    dueNow,
    last,
    doneRecently: false,
  }
}

/** How many past checks are read to see which of a card's questions a student has already been asked. */
const VARIANT_HISTORY = 300

/**
 * When this student was last asked each question of each card, from their
 * completed checks: `topic|front` → per question index, the time (ms). Keyed
 * by the card's text, so the same card met through another deck counts.
 */
async function variantsSeen(userId: string): Promise<Map<string, (number | undefined)[]>> {
  const past = await prisma.flashcardCheckAttempt.findMany({
    where: { userId, completedAt: { not: null } },
    orderBy: { completedAt: 'desc' },
    take: VARIANT_HISTORY,
    select: { completedAt: true, items: true },
  })
  const seen = new Map<string, (number | undefined)[]>()
  for (const a of past) {
    const at = a.completedAt!.getTime()
    for (const it of a.items as unknown as CheckItem[]) {
      const k = `${it.topicSlug}|${checkKey(it.front)}`
      const list = seen.get(k) ?? []
      const v = it.variant ?? 0
      if (list[v] === undefined || list[v]! < at) list[v] = at
      seen.set(k, list)
    }
  }
  return seen
}

export type ServedCheckQuestion = { question: string; options: string[] }
export type ServedCheck = { attemptId: string; questions: ServedCheckQuestion[] }

function serve(attemptId: string, items: CheckItem[]): ServedCheck {
  return {
    attemptId,
    questions: items.map((it) => {
      const check = cardCheckFor(it.topicSlug, it.front, it.variant ?? 0)!
      return { question: check.question, options: it.order.map((i) => check.options[i]) }
    }),
  }
}

/** Open today's check: the unfinished one if there is one, else a new one. Null when it can't be taken yet. */
export async function startCardCheck(userId: string, now: Date = new Date()): Promise<ServedCheck | null> {
  const state = await getCardCheckState(userId, now)
  if (!state.eligible) return null
  const { windowStart } = await windowOf(userId, now)
  const open = await prisma.flashcardCheckAttempt.findFirst({
    where: { userId, completedAt: null, startedAt: { gt: new Date(Math.max(windowStart.getTime(), now.getTime() - RESUME_MS)) } },
    orderBy: { startedAt: 'desc' },
  })
  if (open) {
    const items = open.items as unknown as CheckItem[]
    if (items.length > 0 && items.every((it) => cardCheckFor(it.topicSlug, it.front, it.variant ?? 0))) return serve(open.id, items)
  }
  const { candidates } = await candidatesSince(userId, windowStart)
  const picked = pickCheckCards(candidates, Math.random)
  if (picked.length === 0) return null
  const seen = await variantsSeen(userId)
  const items: CheckItem[] = picked.map((c) => ({
    flashcardId: c.flashcardId,
    context: c.context,
    front: c.front,
    topicSlug: c.topicSlug,
    variant: pickVariant(cardChecksFor(c.topicSlug, c.front).length, seen.get(`${c.topicSlug}|${checkKey(c.front)}`) ?? [], Math.random),
    rating: c.rating,
    order: shuffledOrder(Math.random),
    chosen: null,
    correct: null,
  }))
  await prisma.flashcardCheckAttempt.deleteMany({ where: { userId, completedAt: null } })
  const attempt = await prisma.flashcardCheckAttempt.create({
    data: { userId, windowStart, items: items as unknown as object, total: items.length },
    select: { id: true },
  })
  return serve(attempt.id, items)
}

export type GradedCheckQuestion = {
  question: string
  options: string[]
  chosen: number | null
  correctIndex: number
  correct: boolean
  explanation: string
  /** The card this question checks, and what the student rated it. */
  cardFront: string
  cardBack: string
  rating: CheckRating
  /** Rated Good/Easy and missed: the card comes back the next day. */
  pulledBack: boolean
}
export type GradedCheck = { attemptId: string; correct: number; total: number; overconfident: number; confidentTotal: number; confidentCorrect: number; questions: GradedCheckQuestion[] }

async function graded(attemptId: string, items: CheckItem[]): Promise<GradedCheck> {
  const backs = new Map(
    (await prisma.flashcard.findMany({ where: { id: { in: items.map((i) => i.flashcardId) } }, select: { id: true, back: true } })).map((c) => [c.id, c.back]),
  )
  const questions = items.map((it): GradedCheckQuestion => {
    const check = cardCheckFor(it.topicSlug, it.front, it.variant ?? 0)
    const correct = !!it.correct
    return {
      question: check?.question ?? '(this question is no longer available)',
      options: check ? it.order.map((i) => check.options[i]) : [],
      chosen: it.chosen,
      correctIndex: check ? it.order.indexOf(check.correctAnswer) : -1,
      correct,
      explanation: check?.explanation ?? '',
      cardFront: it.front,
      cardBack: backs.get(it.flashcardId) ?? '',
      rating: it.rating,
      pulledBack: !correct && ratedConfident(it.rating),
    }
  })
  const confident = questions.filter((q) => ratedConfident(q.rating))
  return {
    attemptId,
    correct: questions.filter((q) => q.correct).length,
    total: questions.length,
    overconfident: questions.filter((q) => q.pulledBack).length,
    confidentTotal: confident.length,
    confidentCorrect: confident.filter((q) => q.correct).length,
    questions,
  }
}

/**
 * Grade a check. `answers[i]` is the position the student picked for question
 * i (null = skipped). Idempotent: a second submit returns the stored result.
 */
export async function submitCardCheck(
  userId: string,
  attemptId: string,
  answers: readonly (number | null)[],
  tzOffset?: number | null,
  now: Date = new Date(),
): Promise<GradedCheck | null> {
  const attempt = await prisma.flashcardCheckAttempt.findFirst({ where: { id: attemptId, userId } })
  if (!attempt) return null
  const stored = attempt.items as unknown as CheckItem[]
  if (attempt.completedAt) return graded(attempt.id, stored)

  const items: CheckItem[] = stored.map((it, i) => {
    const check = cardCheckFor(it.topicSlug, it.front, it.variant ?? 0)
    const a = answers[i]
    const chosen = typeof a === 'number' && Number.isInteger(a) && a >= 0 && a < 4 ? a : null
    return { ...it, chosen, correct: check ? gradeChoice(it.order, check.correctAnswer, chosen) : false }
  })
  const correct = items.filter((it) => it.correct).length
  const missedConfident = items.filter((it) => !it.correct && ratedConfident(it.rating))

  // Claim the attempt first, so a double submit can't pull cards back twice.
  const claimed = await prisma.flashcardCheckAttempt.updateMany({
    where: { id: attempt.id, completedAt: null },
    data: { items: items as unknown as object, correct, overconfident: missedConfident.length, completedAt: now },
  })
  if (claimed.count === 0) {
    const fresh = await prisma.flashcardCheckAttempt.findUnique({ where: { id: attempt.id } })
    return fresh ? graded(fresh.id, fresh.items as unknown as CheckItem[]) : null
  }

  // Missed after a Good/Easy: back tomorrow, as a card to relearn.
  const due = nextStudyDayStart(now, tzOffset)
  for (const it of missedConfident) {
    try {
      await prisma.flashcardProgress.updateMany({
        where: { userId, flashcardId: it.flashcardId, context: it.context },
        data: { nextReview: due, interval: 1, isMinuteInterval: false, repetitions: 0 },
      })
    } catch (err) {
      console.error('card check pull-back failed (non-fatal):', err)
    }
  }

  await recordQuestions(
    userId,
    items.map((it) => ({ source: 'CARD_CHECK' as const, topicSlug: it.topicSlug, answered: 1, correct: it.correct ? 1 : 0, answeredAt: now })),
  )
  return graded(attempt.id, items)
}

/** The stored result of a finished check (the results screen on reload). */
export async function getCardCheckResult(userId: string, attemptId: string): Promise<GradedCheck | null> {
  const attempt = await prisma.flashcardCheckAttempt.findFirst({ where: { id: attemptId, userId, completedAt: { not: null } } })
  return attempt ? graded(attempt.id, attempt.items as unknown as CheckItem[]) : null
}

/**
 * For the teacher's 7-day flashcard grid: per student, the UTC days (YYYY-MM-DD)
 * on which they reviewed a card that has a check question, and whether a
 * completed check covers that day (taken that day, or its window reaches the
 * day's reviews).
 */
export async function checkedDays(userIds: readonly string[], since: Date): Promise<Map<string, { day: string; done: boolean; score: string | null }[]>> {
  const out = new Map<string, { day: string; done: boolean; score: string | null }[]>()
  if (userIds.length === 0) return out
  const topicCards = await prisma.flashcard.findMany({
    where: { topic: { slug: { in: CARD_CHECK_TOPICS } } },
    select: { id: true, front: true, topic: { select: { slug: true } } },
  })
  const checkable = new Set(topicCards.filter((c) => cardCheckFor(c.topic.slug, c.front)).map((c) => c.id))
  if (checkable.size === 0) return out
  const [logs, attempts] = await Promise.all([
    prisma.flashcardReviewLog.findMany({
      where: { userId: { in: [...userIds] }, reviewedAt: { gte: since }, flashcardId: { in: [...checkable] } },
      select: { userId: true, reviewedAt: true },
    }),
    prisma.flashcardCheckAttempt.findMany({
      where: { userId: { in: [...userIds] }, completedAt: { gte: since } },
      select: { userId: true, windowStart: true, completedAt: true, correct: true, total: true },
    }),
  ])
  const byUserDay = new Map<string, Date[]>()
  for (const l of logs) {
    const k = `${l.userId}|${l.reviewedAt.toISOString().slice(0, 10)}`
    byUserDay.set(k, [...(byUserDay.get(k) ?? []), l.reviewedAt])
  }
  for (const [k, times] of byUserDay) {
    const [userId, day] = k.split('|')
    const mine = attempts.filter((a) => a.userId === userId && a.completedAt)
    const cover = mine.find(
      (a) => a.completedAt!.toISOString().slice(0, 10) === day || times.some((t) => t > a.windowStart && t <= a.completedAt!),
    )
    out.set(userId, [...(out.get(userId) ?? []), { day, done: !!cover, score: cover ? `${cover.correct ?? 0}/${cover.total}` : null }])
  }
  return out
}
