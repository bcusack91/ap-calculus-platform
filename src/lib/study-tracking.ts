import type { Prisma, QuestionSource } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { getActiveStudyContext, isClassContext } from '@/lib/study-context'

/**
 * Shared writers for the study-tracking tables (FlashcardReviewLog,
 * ActiveTimeDaily, QuestionActivity) that power the teacher's per-student
 * report. Every writer is best-effort: tracking must never fail the
 * student's actual action (a review, a quiz submit), so errors are logged
 * and swallowed.
 */

/** The classroom id inside a 'class:<id>' study context, else ''. */
export function classroomIdFromContext(context: string | null | undefined): string {
  return context && isClassContext(context) ? context.slice('class:'.length) : ''
}

/**
 * Which class a piece of work belongs to, for the report's "This class only"
 * filter: the class that assigned it when known, else the class whose study
 * mode the student is in, else '' (personal study).
 */
export async function resolveClassroomId(userId: string, assignedClassroomId?: string | null): Promise<string> {
  if (assignedClassroomId) return assignedClassroomId
  try {
    return classroomIdFromContext(await getActiveStudyContext(userId))
  } catch {
    return ''
  }
}

// Topic → course slug never changes at runtime; cache per server instance.
const courseByTopic = new Map<string, string>()

export async function courseSlugForTopic(topicSlug: string | null | undefined): Promise<string> {
  if (!topicSlug) return ''
  const cached = courseByTopic.get(topicSlug)
  if (cached !== undefined) return cached
  try {
    const topic = await prisma.topic.findUnique({
      where: { slug: topicSlug },
      select: { category: { select: { course: { select: { slug: true } } } } },
    })
    const slug = topic?.category?.course?.slug ?? ''
    courseByTopic.set(topicSlug, slug)
    return slug
  } catch {
    return ''
  }
}

/** Batch course lookup (one query) for writers that record many topics at once. */
export async function courseSlugsForTopics(topicSlugs: string[]): Promise<Map<string, string>> {
  const out = new Map<string, string>()
  const missing = [...new Set(topicSlugs.filter(Boolean))].filter((s) => {
    const c = courseByTopic.get(s)
    if (c !== undefined) out.set(s, c)
    return c === undefined
  })
  if (missing.length) {
    try {
      const topics = await prisma.topic.findMany({
        where: { slug: { in: missing } },
        select: { slug: true, category: { select: { course: { select: { slug: true } } } } },
      })
      for (const t of topics) {
        const slug = t.category?.course?.slug ?? ''
        courseByTopic.set(t.slug, slug)
        out.set(t.slug, slug)
      }
    } catch {
      /* best-effort */
    }
  }
  return out
}

/**
 * The student's calendar day as a UTC-midnight Date (for @db.Date columns).
 * `tzOffset` uses the JS getTimezoneOffset convention (minutes, UTC − local),
 * the same one the flashcard routes accept; without it, the UTC day.
 */
export function studentLocalDay(now: Date, tzOffset?: number | null): Date {
  const offsetMs = Number.isFinite(tzOffset) ? Math.max(-14 * 60, Math.min(14 * 60, tzOffset as number)) * 60000 : 0
  const local = new Date(now.getTime() - offsetMs)
  return new Date(Date.UTC(local.getUTCFullYear(), local.getUTCMonth(), local.getUTCDate()))
}

export type QuestionRow = {
  source: QuestionSource
  topicSlug?: string
  courseSlug?: string
  discipline?: string
  questionKey?: string
  answered?: number
  correct?: number
  durationMs?: number | null
  answeredAt?: Date
}

/**
 * Record answered questions. Fills courseSlug from topicSlug when missing and
 * stamps the class. Never throws.
 */
export async function recordQuestions(
  userId: string,
  rows: QuestionRow[],
  opts: { classroomId?: string | null; db?: Prisma.TransactionClient } = {},
): Promise<void> {
  if (!rows.length) return
  try {
    const classroomId = await resolveClassroomId(userId, opts.classroomId)
    const courses = await courseSlugsForTopics(rows.filter((r) => !r.courseSlug && r.topicSlug).map((r) => r.topicSlug!))
    const data = rows.map((r) => ({
      userId,
      source: r.source,
      topicSlug: r.topicSlug ?? '',
      courseSlug: r.courseSlug || (r.topicSlug ? courses.get(r.topicSlug) ?? '' : ''),
      discipline: r.discipline ?? '',
      classroomId,
      questionKey: (r.questionKey ?? '').slice(0, 200),
      answered: Math.max(0, Math.round(r.answered ?? 1)),
      correct: Math.max(0, Math.round(r.correct ?? 0)),
      // Capped at 4 h: a full-length MCAT section runs ~95 min, nothing runs longer.
      durationMs: r.durationMs == null ? null : Math.max(0, Math.min(Math.round(r.durationMs), 4 * 60 * 60 * 1000)),
      ...(r.answeredAt ? { answeredAt: r.answeredAt } : {}),
    }))
    await (opts.db ?? prisma).questionActivity.createMany({ data })
  } catch (err) {
    console.error('[study-tracking] recordQuestions failed (ignored):', err)
  }
}
