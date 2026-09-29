import type { ActivitySurface, FlashcardRating, QuestionSource } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { TOPIC_CLEAR_PERCENT } from '@/lib/mastery'
import { courseSlugsForTopics } from '@/lib/study-tracking'

/**
 * Per-student study metrics for the teacher report (owner request 2026-09-29):
 * active time, flashcard reviews/ratings/time/health, questions by source,
 * weakest areas, MCAT score trend and pacing, weekly targets.
 *
 * Pure summarizers (tested directly) + two loaders: one student in depth,
 * and a whole roster in one pass for the class table and CSV.
 *
 * Scope: `classroomId` null = everything the student did on the site (the
 * owner's default); a class id = only rows stamped with that class (its study
 * mode, assignments, class diagnostics). Lesson-by-topic time, topics cleared
 * and self-taken tests carry no class stamp, so they always show all study.
 */

// ─── Constants ──────────────────────────────────────────────────────────

export const METRICS_RANGES = ['7d', '30d', '90d', 'all'] as const
export type MetricsRange = (typeof METRICS_RANGES)[number]

/** A card is mature once its interval reaches 21 days (the usual SRS convention). */
export const MATURE_INTERVAL_DAYS = 21
/** Rating faster than this on average, over enough cards, looks like tapping through. */
export const RUSHING_AVG_MS = 2000
export const RUSHING_MIN_REVIEWS = 20
/** Areas need this many answers before accuracy means anything. */
export const WEAK_AREA_MIN_ANSWERS = 5
/** Real-exam MCAT pace: 230 questions in 375 minutes ≈ 95 s per question. */
export const MCAT_EXAM_SECONDS_PER_QUESTION = 95

/**
 * Weekly study targets by course. MCAT: the class cadence is 5 topics a week,
 * which measured out to ~2.3-2.7 h/day at steady state (memory:
 * mcat-live-course-workflow) — target the low end, 16 h/week.
 */
export const WEEKLY_TARGETS: Record<string, { hours: number; topics: number; label: string }> = {
  'mcat-prep': { hours: 16, topics: 5, label: 'MCAT' },
}

const DAY_MS = 86_400_000

export function rangeStart(range: MetricsRange, now: Date): Date | null {
  if (range === 'all') return null
  const days = range === '7d' ? 7 : range === '30d' ? 30 : 90
  return new Date(now.getTime() - days * DAY_MS)
}

/** Date-only key for @db.Date values and timestamps (UTC calendar day). */
export function dayKey(d: Date): string {
  return d.toISOString().slice(0, 10)
}

const SURFACES: ActivitySurface[] = [
  'LESSON',
  'ENTRANCE_QUIZ',
  'EXIT_QUIZ',
  'FLASHCARDS',
  'DIAGNOSTIC',
  'PRACTICE_TEST',
  'FULL_LENGTH',
  'COMPETITIVE',
  'OTHER',
]
const SOURCES: QuestionSource[] = ['ENTRANCE', 'LESSON', 'EXIT', 'DIAGNOSTIC', 'PRACTICE', 'FULL_LENGTH', 'DAILY', 'COMPETITIVE']
const RATINGS: FlashcardRating[] = ['AGAIN', 'HARD', 'GOOD', 'EASY']

const zeroBy = <K extends string>(keys: readonly K[]) => Object.fromEntries(keys.map((k) => [k, 0])) as Record<K, number>

// ─── Active time ────────────────────────────────────────────────────────

export type ActiveTimeRow = { day: Date; surface: ActivitySurface; seconds: number }
export type ActiveTimeSummary = {
  totalSeconds: number
  activeDays: number
  bySurface: Record<ActivitySurface, number>
  byDay: { day: string; seconds: number; bySurface: Partial<Record<ActivitySurface, number>> }[]
}

export function summarizeActiveTime(rows: ActiveTimeRow[]): ActiveTimeSummary {
  const bySurface = zeroBy(SURFACES)
  const days = new Map<string, { seconds: number; bySurface: Partial<Record<ActivitySurface, number>> }>()
  let totalSeconds = 0
  for (const r of rows) {
    if (r.seconds <= 0) continue
    totalSeconds += r.seconds
    bySurface[r.surface] += r.seconds
    const k = dayKey(r.day)
    const d = days.get(k) ?? { seconds: 0, bySurface: {} }
    d.seconds += r.seconds
    d.bySurface[r.surface] = (d.bySurface[r.surface] ?? 0) + r.seconds
    days.set(k, d)
  }
  const byDay = [...days.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([day, d]) => ({ day, ...d }))
  return { totalSeconds, activeDays: byDay.length, bySurface, byDay }
}

// ─── Flashcards ─────────────────────────────────────────────────────────

export type ReviewLogRow = {
  rating: FlashcardRating
  durationMs: number | null
  wasNew: boolean
  intervalBefore: number
  reviewedAt: Date
}
export type FlashcardSummary = {
  reviews: number
  newCards: number
  /** Sum of measured time on cards (reviews from old clients have none). */
  totalSeconds: number
  timedReviews: number
  avgSecondsPerCard: number | null
  ratings: Record<FlashcardRating, number>
  /** Share of all ratings, 0-1. */
  ratingShares: Record<FlashcardRating, number>
  matureReviews: number
  /** Mature-card reviews NOT rated Again, 0-1; null with no mature reviews. */
  retention: number | null
  /** Studied cards past due right now (not scoped by range). */
  overdue: number
  rushing: boolean
  byDay: { day: string; reviews: number }[]
}

export function summarizeFlashcards(logs: ReviewLogRow[], overdue: number): FlashcardSummary {
  const ratings = zeroBy(RATINGS)
  let newCards = 0
  let totalMs = 0
  let timedReviews = 0
  let matureReviews = 0
  let matureKept = 0
  const days = new Map<string, number>()
  for (const l of logs) {
    ratings[l.rating]++
    if (l.wasNew) newCards++
    if (l.durationMs != null) {
      totalMs += l.durationMs
      timedReviews++
    }
    if (l.intervalBefore >= MATURE_INTERVAL_DAYS) {
      matureReviews++
      if (l.rating !== 'AGAIN') matureKept++
    }
    const k = dayKey(l.reviewedAt)
    days.set(k, (days.get(k) ?? 0) + 1)
  }
  const reviews = logs.length
  const ratingShares = Object.fromEntries(RATINGS.map((r) => [r, reviews ? ratings[r] / reviews : 0])) as Record<FlashcardRating, number>
  const avgMs = timedReviews ? totalMs / timedReviews : null
  return {
    reviews,
    newCards,
    totalSeconds: Math.round(totalMs / 1000),
    timedReviews,
    avgSecondsPerCard: avgMs == null ? null : Math.round(avgMs / 100) / 10,
    ratings,
    ratingShares,
    matureReviews,
    retention: matureReviews ? matureKept / matureReviews : null,
    overdue,
    rushing: avgMs != null && timedReviews >= RUSHING_MIN_REVIEWS && avgMs < RUSHING_AVG_MS,
    byDay: [...days.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([day, n]) => ({ day, reviews: n })),
  }
}

// ─── Questions ──────────────────────────────────────────────────────────

export type QuestionRowLite = {
  source: QuestionSource
  topicSlug: string
  courseSlug: string
  discipline: string
  answered: number
  correct: number
}
export type Tally = { answered: number; correct: number }
export type QuestionSummary = { total: Tally; bySource: Record<QuestionSource, Tally> }

export function summarizeQuestions(rows: QuestionRowLite[]): QuestionSummary {
  const bySource = Object.fromEntries(SOURCES.map((s) => [s, { answered: 0, correct: 0 }])) as Record<QuestionSource, Tally>
  const total = { answered: 0, correct: 0 }
  for (const r of rows) {
    const answered = Math.max(0, r.answered)
    const correct = Math.max(0, Math.min(r.correct, answered))
    bySource[r.source].answered += answered
    bySource[r.source].correct += correct
    total.answered += answered
    total.correct += correct
  }
  return { total, bySource }
}

export type WeakArea = { kind: 'discipline' | 'topic'; key: string; answered: number; correct: number; accuracy: number }

/**
 * Weakest areas, lowest accuracy first. Disciplines (MCAT sections, SAT
 * domains) and topics are ranked separately and interleaved by accuracy;
 * anything with fewer than WEAK_AREA_MIN_ANSWERS answers is left out.
 */
export function weakestAreas(rows: QuestionRowLite[], limit = 8): WeakArea[] {
  const tallies = new Map<string, WeakArea>()
  const add = (kind: WeakArea['kind'], key: string, r: QuestionRowLite) => {
    if (!key) return
    const id = `${kind}:${key}`
    const t = tallies.get(id) ?? { kind, key, answered: 0, correct: 0, accuracy: 0 }
    t.answered += Math.max(0, r.answered)
    t.correct += Math.max(0, Math.min(r.correct, r.answered))
    tallies.set(id, t)
  }
  for (const r of rows) {
    add('discipline', r.discipline, r)
    add('topic', r.topicSlug, r)
  }
  return [...tallies.values()]
    .filter((t) => t.answered >= WEAK_AREA_MIN_ANSWERS)
    .map((t) => ({ ...t, accuracy: t.correct / t.answered }))
    .sort((a, b) => a.accuracy - b.accuracy || b.answered - a.answered)
    .slice(0, limit)
}

// ─── MCAT trend and pacing ──────────────────────────────────────────────

export const MCAT_SECTION_KEYS = ['C/P', 'CARS', 'B/B', 'P/S'] as const
export type McatSectionKey = (typeof MCAT_SECTION_KEYS)[number]
export type McatTrendPoint = {
  at: string
  kind: 'diagnostic' | 'class-diagnostic' | 'full-length'
  total: number | null
  sections: Partial<Record<McatSectionKey, number>>
}

const MCAT_DIAG_FIELDS: Record<McatSectionKey, string> = {
  'C/P': 'chemPhysScore',
  CARS: 'carsScore',
  'B/B': 'bioBiochemScore',
  'P/S': 'psychSocScore',
}
const inRange = (n: unknown, lo: number, hi: number): n is number => typeof n === 'number' && Number.isFinite(n) && n >= lo && n <= hi
const obj = (v: unknown): Record<string, unknown> => (v && typeof v === 'object' ? (v as Record<string, unknown>) : {})

/**
 * Which of the four sections a stored name refers to. Full-length sections
 * carry a short code ('C/P', 'CARS', 'B/B', 'P/S'); section practice carries
 * the long name. Order matters: "Psychological, Social, and Biological
 * Foundations" mentions biology and "Biological and Biochemical Foundations"
 * mentions chemistry, so the distinctive word is checked first.
 */
function fullLengthSectionKey(short: unknown, section: unknown): McatSectionKey | null {
  const code = typeof short === 'string' ? short.trim().toUpperCase() : ''
  if ((MCAT_SECTION_KEYS as readonly string[]).includes(code)) return code as McatSectionKey
  const s = `${typeof short === 'string' ? short : ''} ${typeof section === 'string' ? section : ''}`.toLowerCase()
  if (s.includes('cars') || s.includes('critical')) return 'CARS'
  if (s.includes('psych')) return 'P/S'
  if (s.includes('physical') || s.includes('chem-phys') || s.includes('c/p')) return 'C/P'
  if (s.includes('bio') || s.includes('b/b')) return 'B/B'
  if (s.includes('chem')) return 'C/P'
  return null
}

export type DiagnosticRowLite = { category: string; results: unknown; createdAt: Date; classDiagnosticId: string | null }

export function mcatTrend(rows: DiagnosticRowLite[]): McatTrendPoint[] {
  const points: McatTrendPoint[] = []
  for (const row of rows) {
    const r = obj(row.results)
    if (row.category === 'mcat-full-length') {
      const sections: Partial<Record<McatSectionKey, number>> = {}
      for (const s of Array.isArray(r.sections) ? r.sections : []) {
        const so = obj(s)
        const key = fullLengthSectionKey(so.short, so.section)
        if (key && inRange(so.scaled, 118, 132)) sections[key] = so.scaled
      }
      const total = inRange(r.total, 472, 528) ? r.total : null
      if (total != null || Object.keys(sections).length) {
        points.push({ at: row.createdAt.toISOString(), kind: 'full-length', total, sections })
      }
      continue
    }
    if (!row.category.startsWith('mcat-full-diagnostic')) continue
    const sections: Partial<Record<McatSectionKey, number>> = {}
    for (const key of MCAT_SECTION_KEYS) {
      const v = r[MCAT_DIAG_FIELDS[key]]
      if (inRange(v, 118, 132)) sections[key] = v
    }
    const total = inRange(r.estimatedScore, 472, 528) ? r.estimatedScore : null
    if (total != null || Object.keys(sections).length) {
      points.push({
        at: row.createdAt.toISOString(),
        kind: row.classDiagnosticId ? 'class-diagnostic' : 'diagnostic',
        total,
        sections,
      })
    }
  }
  return points.sort((a, b) => a.at.localeCompare(b.at))
}

export type PacingPoint = { at: string; kind: 'full-length' | 'practice'; label: string; secondsPerQuestion: number }

export function mcatPacing(
  fullLengths: DiagnosticRowLite[],
  practice: { sectionName: string; total: number; timeSpent: number; completedAt: Date }[],
): PacingPoint[] {
  const out: PacingPoint[] = []
  for (const row of fullLengths) {
    if (row.category !== 'mcat-full-length') continue
    for (const s of Array.isArray(obj(row.results).sections) ? (obj(row.results).sections as unknown[]) : []) {
      const so = obj(s)
      if (inRange(so.elapsedSeconds, 1, 24 * 3600) && inRange(so.total, 1, 1000)) {
        const key = fullLengthSectionKey(so.short, so.section)
        out.push({
          at: row.createdAt.toISOString(),
          kind: 'full-length',
          label: key ?? String(so.short ?? so.section ?? 'Section'),
          secondsPerQuestion: Math.round(so.elapsedSeconds / so.total),
        })
      }
    }
  }
  for (const p of practice) {
    if (p.total > 0 && p.timeSpent > 0) {
      out.push({
        at: p.completedAt.toISOString(),
        kind: 'practice',
        label: fullLengthSectionKey(p.sectionName, p.sectionName) ?? p.sectionName,
        secondsPerQuestion: Math.round(p.timeSpent / p.total),
      })
    }
  }
  return out.sort((a, b) => a.at.localeCompare(b.at))
}

// ─── Weekly targets ─────────────────────────────────────────────────────

export type ExitAttemptLite = { topicSlug: string; score: number; totalQuestions: number; completedAt: Date }

/** A passing exit attempt under the one site-wide pass mark (80%). */
export function isClearingAttempt(a: { score: number; totalQuestions: number }): boolean {
  return a.totalQuestions > 0 && (a.score / a.totalQuestions) * 100 >= TOPIC_CLEAR_PERCENT
}

/** Topics whose FIRST clearing attempt falls in [from, to). */
export function topicsFirstClearedBetween(attempts: ExitAttemptLite[], from: Date, to: Date): string[] {
  const first = new Map<string, number>()
  for (const a of attempts) {
    if (!isClearingAttempt(a)) continue
    const t = a.completedAt.getTime()
    const prev = first.get(a.topicSlug)
    if (prev == null || t < prev) first.set(a.topicSlug, t)
  }
  return [...first.entries()].filter(([, t]) => t >= from.getTime() && t < to.getTime()).map(([slug]) => slug)
}

export type WeeklyTargets = {
  /** Start of the rolling 7-day window (ISO). */
  since: string
  activeSeconds: number
  activeDays: number
  topicsCleared: number
  target: { courseSlug: string; label: string; hours: number; topics: number } | null
}

// ─── Lessons ────────────────────────────────────────────────────────────

export type LessonRow = {
  topicSlug: string
  title: string
  courseSlug: string
  status: string
  timeSeconds: number
  lastAccessed: string
  clearedByExit: boolean
}

// ─── Loader: one student ────────────────────────────────────────────────

export type StudentMetrics = {
  range: MetricsRange
  scope: 'all' | 'class'
  generatedAt: string
  primaryCourseSlug: string | null
  activeTime: ActiveTimeSummary
  flashcards: FlashcardSummary
  questions: QuestionSummary
  weakAreas: WeakArea[]
  lessons: LessonRow[]
  exitQuizzes: { attempts: number; passes: number; topicsCleared: number }
  weekly: WeeklyTargets
  mcat: { trend: McatTrendPoint[]; pacing: PacingPoint[]; examPace: number } | null
}

type LoadOpts = { range: MetricsRange; classroomId: string | null; now?: Date }

const scopeWhere = (classroomId: string | null) => (classroomId ? { classroomId } : {})

async function overdueCount(userId: string, classroomId: string | null, now: Date): Promise<number> {
  return prisma.flashcardProgress.count({
    where: {
      userId,
      reviewCount: { gt: 0 },
      nextReview: { lt: now },
      ...(classroomId ? { context: `class:${classroomId}` } : {}),
    },
  })
}

export async function loadStudentMetrics(userId: string, opts: LoadOpts): Promise<StudentMetrics> {
  const now = opts.now ?? new Date()
  const since = rangeStart(opts.range, now)
  const weekSince = new Date(now.getTime() - 7 * DAY_MS)
  const scope = scopeWhere(opts.classroomId)

  const [timeRows, weekTimeRows, reviewLogs, overdue, questionRows, exitAttempts, progress, diagnostics, practice] = await Promise.all([
    prisma.activeTimeDaily.findMany({
      where: { userId, ...scope, ...(since ? { day: { gte: new Date(dayKey(since)) } } : {}) },
      select: { day: true, surface: true, seconds: true, courseSlug: true },
    }),
    prisma.activeTimeDaily.findMany({
      where: { userId, ...scope, day: { gte: new Date(dayKey(weekSince)) } },
      select: { day: true, surface: true, seconds: true, courseSlug: true },
    }),
    prisma.flashcardReviewLog.findMany({
      where: { userId, ...scope, ...(since ? { reviewedAt: { gte: since } } : {}) },
      select: { rating: true, durationMs: true, wasNew: true, intervalBefore: true, reviewedAt: true },
    }),
    overdueCount(userId, opts.classroomId, now),
    prisma.questionActivity.findMany({
      where: { userId, ...scope, ...(since ? { answeredAt: { gte: since } } : {}) },
      select: { source: true, topicSlug: true, courseSlug: true, discipline: true, answered: true, correct: true },
    }),
    prisma.exitQuizAttempt.findMany({
      where: { userId },
      select: { topicSlug: true, score: true, totalQuestions: true, completedAt: true },
    }),
    prisma.topicProgress.findMany({
      where: { userId, ...(since ? { lastAccessed: { gte: since } } : {}) },
      orderBy: { lastAccessed: 'desc' },
      take: 200,
      select: {
        status: true,
        timeSpent: true,
        lastAccessed: true,
        topic: { select: { slug: true, title: true, category: { select: { course: { select: { slug: true } } } } } },
      },
    }),
    prisma.diagnosticTest.findMany({
      where: {
        userId,
        OR: [{ category: { startsWith: 'mcat-full-diagnostic' } }, { category: 'mcat-full-length' }],
        ...(opts.classroomId ? { classDiagnostic: { classroomId: opts.classroomId } } : {}),
      },
      orderBy: { createdAt: 'asc' },
      select: { category: true, results: true, createdAt: true, classDiagnosticId: true },
    }),
    prisma.mcatTestAttempt.findMany({
      where: { userId, ...(since ? { completedAt: { gte: since } } : {}) },
      select: { sectionName: true, total: true, timeSpent: true, completedAt: true },
    }),
  ])

  // Primary course: most active time in range; else the latest lesson's
  // course; else MCAT when the student has MCAT tests.
  const courseSeconds = new Map<string, number>()
  for (const r of timeRows) if (r.courseSlug) courseSeconds.set(r.courseSlug, (courseSeconds.get(r.courseSlug) ?? 0) + r.seconds)
  const primaryCourseSlug =
    [...courseSeconds.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ??
    progress.find((p) => p.topic.category?.course?.slug)?.topic.category?.course?.slug ??
    (diagnostics.length || practice.length ? 'mcat-prep' : null)

  const inWindow = exitAttempts.filter((a) => !since || a.completedAt >= since)
  const clearedEver = new Set(topicsFirstClearedBetween(exitAttempts, new Date(0), new Date(now.getTime() + 1)))
  const lessons: LessonRow[] = progress.map((p) => ({
    topicSlug: p.topic.slug,
    title: p.topic.title,
    courseSlug: p.topic.category?.course?.slug ?? '',
    status: p.status,
    timeSeconds: p.timeSpent,
    lastAccessed: p.lastAccessed.toISOString(),
    clearedByExit: clearedEver.has(p.topic.slug),
  }))

  const targetCourse = primaryCourseSlug && WEEKLY_TARGETS[primaryCourseSlug] ? primaryCourseSlug : null
  const weekTime = summarizeActiveTime(weekTimeRows)
  // Topics first cleared this week, counted in the target course when there is one.
  const weekCleared = topicsFirstClearedBetween(exitAttempts, weekSince, new Date(now.getTime() + 1))
  const weekCourses = targetCourse ? await courseSlugsForTopics(weekCleared) : null
  const weekClearedInCourse = weekCourses ? weekCleared.filter((slug) => weekCourses.get(slug) === targetCourse) : weekCleared

  const isMcat = diagnostics.length > 0 || practice.length > 0 || primaryCourseSlug === 'mcat-prep'

  return {
    range: opts.range,
    scope: opts.classroomId ? 'class' : 'all',
    generatedAt: now.toISOString(),
    primaryCourseSlug,
    activeTime: summarizeActiveTime(timeRows),
    flashcards: summarizeFlashcards(reviewLogs, overdue),
    questions: summarizeQuestions(questionRows),
    weakAreas: weakestAreas(questionRows),
    lessons,
    exitQuizzes: {
      attempts: inWindow.length,
      passes: inWindow.filter(isClearingAttempt).length,
      topicsCleared: topicsFirstClearedBetween(exitAttempts, since ?? new Date(0), new Date(now.getTime() + 1)).length,
    },
    weekly: {
      since: weekSince.toISOString(),
      activeSeconds: weekTime.totalSeconds,
      activeDays: weekTime.activeDays,
      topicsCleared: weekClearedInCourse.length,
      target: targetCourse ? { courseSlug: targetCourse, ...WEEKLY_TARGETS[targetCourse] } : null,
    },
    mcat: isMcat
      ? {
          trend: mcatTrend(diagnostics),
          pacing: mcatPacing(diagnostics, practice),
          examPace: MCAT_EXAM_SECONDS_PER_QUESTION,
        }
      : null,
  }
}

// ─── Loader: whole roster (class table + CSV) ───────────────────────────

export type ClassStudentRow = {
  userId: string
  activeSeconds: number
  activeDays: number
  reviews: number
  flashcardSeconds: number
  againRate: number | null
  answered: number
  correct: number
  accuracy: number | null
  exitPasses: number
  overdue: number
  flags: ('rushing' | 'backlog' | 'below-target' | 'inactive')[]
}

/** Overdue cards past this count flag a growing backlog. */
export const BACKLOG_FLAG = 100

export async function loadClassMetrics(
  userIds: string[],
  opts: LoadOpts & { targetCourseSlug?: string | null },
): Promise<ClassStudentRow[]> {
  if (!userIds.length) return []
  const now = opts.now ?? new Date()
  const since = rangeStart(opts.range, now)
  const scope = scopeWhere(opts.classroomId)
  const users = { userId: { in: userIds } }

  const [time, reviews, reviewTimes, questions, exits, overdue] = await Promise.all([
    prisma.activeTimeDaily.findMany({
      where: { ...users, ...scope, ...(since ? { day: { gte: new Date(dayKey(since)) } } : {}) },
      select: { userId: true, day: true, seconds: true },
    }),
    prisma.flashcardReviewLog.groupBy({
      by: ['userId', 'rating'],
      where: { ...users, ...scope, ...(since ? { reviewedAt: { gte: since } } : {}) },
      _count: { _all: true },
    }),
    prisma.flashcardReviewLog.groupBy({
      by: ['userId'],
      where: { ...users, ...scope, durationMs: { not: null }, ...(since ? { reviewedAt: { gte: since } } : {}) },
      _sum: { durationMs: true },
      _count: { _all: true },
    }),
    prisma.questionActivity.groupBy({
      by: ['userId'],
      where: { ...users, ...scope, ...(since ? { answeredAt: { gte: since } } : {}) },
      _sum: { answered: true, correct: true },
    }),
    prisma.exitQuizAttempt.findMany({
      where: { ...users, ...(since ? { completedAt: { gte: since } } : {}) },
      select: { userId: true, score: true, totalQuestions: true },
    }),
    prisma.flashcardProgress.groupBy({
      by: ['userId'],
      where: {
        ...users,
        reviewCount: { gt: 0 },
        nextReview: { lt: now },
        ...(opts.classroomId ? { context: `class:${opts.classroomId}` } : {}),
      },
      _count: { _all: true },
    }),
  ])

  const target = opts.targetCourseSlug ? WEEKLY_TARGETS[opts.targetCourseSlug] : undefined
  const rangeDays = since ? Math.round((now.getTime() - since.getTime()) / DAY_MS) : null

  return userIds.map((userId) => {
    const t = time.filter((r) => r.userId === userId)
    const activeSeconds = t.reduce((n, r) => n + r.seconds, 0)
    const activeDays = new Set(t.filter((r) => r.seconds > 0).map((r) => dayKey(r.day))).size
    const rv = reviews.filter((r) => r.userId === userId)
    const reviewCount = rv.reduce((n, r) => n + r._count._all, 0)
    const again = rv.find((r) => r.rating === 'AGAIN')?._count._all ?? 0
    const timed = reviewTimes.find((r) => r.userId === userId)
    const q = questions.find((r) => r.userId === userId)
    const answered = q?._sum.answered ?? 0
    const correct = q?._sum.correct ?? 0
    const od = overdue.find((r) => r.userId === userId)?._count._all ?? 0
    const timedCount = timed?._count._all ?? 0
    const timedMs = timed?._sum.durationMs ?? 0

    const flags: ClassStudentRow['flags'] = []
    if (timedCount >= RUSHING_MIN_REVIEWS && timedMs / timedCount < RUSHING_AVG_MS) flags.push('rushing')
    if (od >= BACKLOG_FLAG) flags.push('backlog')
    if (target && rangeDays && activeSeconds < ((target.hours * 3600) / 7) * rangeDays) flags.push('below-target')
    if (activeSeconds === 0 && reviewCount === 0 && answered === 0) flags.push('inactive')

    return {
      userId,
      activeSeconds,
      activeDays,
      reviews: reviewCount,
      flashcardSeconds: Math.round(timedMs / 1000),
      againRate: reviewCount ? again / reviewCount : null,
      answered,
      correct,
      accuracy: answered ? correct / answered : null,
      exitPasses: exits.filter((e) => e.userId === userId && isClearingAttempt(e)).length,
      overdue: od,
      flags,
    }
  })
}
