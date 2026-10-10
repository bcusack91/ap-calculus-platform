import { prisma } from '@/lib/prisma'
import type { AttemptKind } from '@/lib/study-tracking'
import type { ReviewItem } from '@/lib/question-sources/types'
import { exitReviewItems } from '@/lib/question-sources/exit'
import { fullLengthReviewItems, mcatPracticeReviewItems } from '@/lib/question-sources/mcat'
import { satDiagnosticReviewItems, satPracticeReviewItems } from '@/lib/question-sources/sat'
import { unitTestReviewItems } from '@/lib/question-sources/unit-test'
import { diagnosticReviewItems } from '@/lib/question-sources/diagnostic'

/**
 * Rebuilds any stored attempt into review items — the permanent review page
 * and the mistake log both go through here. Every lookup is scoped to the
 * owner, so a student can only ever rebuild their own attempts.
 *
 * Items whose content has changed since the attempt (the stored question key
 * no longer matches a fresh one) are marked `revised`; questions that can't be
 * rebuilt at all come back as null.
 */

export const REVIEW_KINDS = ['exit', 'diagnostic', 'unit-test', 'sat-practice', 'mcat-fl', 'mcat-practice'] as const
export type ReviewKind = (typeof REVIEW_KINDS)[number]

export function isReviewKind(k: unknown): k is ReviewKind {
  return typeof k === 'string' && (REVIEW_KINDS as readonly string[]).includes(k)
}

export interface ResolvedItem extends ReviewItem {
  /** The stored key differs from the rebuilt one — the question was edited after the attempt. */
  revised?: boolean
  /** The topic's display title (cards show it instead of the slug). */
  topicTitle?: string
}

export interface ResolvedAttempt {
  kind: ReviewKind
  id: string
  title: string
  /** 'mcat' | 'sat' | 'act' | other course key, for links and colours. */
  course: string
  takenAt: string
  score: { correct: number; total: number; label?: string } | null
  /** Where the student took it (course hub / test page). */
  backHref: string
  items: (ResolvedItem | null)[]
}

const iso = (d: Date) => d.toISOString()
const courseOfCategory = (category: string) => (category.startsWith('mcat') ? 'mcat' : category.startsWith('sat') ? 'sat' : category.startsWith('act') ? 'act' : category.split('-')[0])
const courseOfSlug = (slug: string) => (slug.startsWith('mcat') ? 'mcat' : slug.startsWith('sat') ? 'sat' : slug.startsWith('act') ? 'act' : 'other')

async function build(kind: ReviewKind, id: string, userId: string): Promise<Omit<ResolvedAttempt, 'items'> & { items: (ReviewItem | null)[] } | null> {
  switch (kind) {
    case 'exit': {
      const a = await prisma.exitQuizAttempt.findFirst({ where: { id, userId } })
      if (!a) return null
      const topic = await prisma.topic.findUnique({ where: { slug: a.topicSlug }, select: { title: true } })
      return {
        kind, id, course: courseOfSlug(a.topicSlug), takenAt: iso(a.completedAt),
        title: `Exit quiz · ${topic?.title ?? a.topicSlug}`,
        score: { correct: a.score, total: a.totalQuestions },
        backHref: `/topics/${a.topicSlug}/interactive`,
        items: await exitReviewItems(a),
      }
    }
    case 'diagnostic':
    case 'mcat-fl': {
      const d = await prisma.diagnosticTest.findFirst({ where: { id, userId }, select: { category: true, results: true, createdAt: true } })
      if (!d) return null
      const isFl = d.category === 'mcat-full-length'
      if ((kind === 'mcat-fl') !== isFl) return null
      const r = (d.results ?? {}) as Record<string, unknown>
      const course = courseOfCategory(d.category)
      const items = isFl ? fullLengthReviewItems(d.results) ?? [] : course === 'sat' ? satDiagnosticReviewItems(d.results) : diagnosticReviewItems(d.results)
      const correct = items.filter((i) => i && i.chosenIndex === i.correctIndex).length
      return {
        kind, id, course, takenAt: iso(d.createdAt),
        title: isFl ? `MCAT full-length${typeof r.form === 'number' ? ` · Form ${r.form}` : ''}` : `${course.toUpperCase()} diagnostic`,
        score: { correct, total: items.length, label: typeof r.total === 'number' ? `${r.total}` : typeof r.estimatedScore === 'number' ? `${r.estimatedScore}` : undefined },
        backHref: isFl ? '/mcat-full-length' : `/${course}-diagnostic`,
        items,
      }
    }
    case 'unit-test': {
      const u = await prisma.mcatUnitTest.findFirst({ where: { id, userId, completedAt: { not: null } } })
      if (!u) return null
      const items = unitTestReviewItems(u.questions, u.answers)
      const slug = items[0]?.topicSlug ?? ''
      const course = courseOfSlug(slug) === 'other' ? 'mcat' : courseOfSlug(slug)
      return {
        kind, id, course, takenAt: iso(u.completedAt ?? u.startedAt),
        title: `${course.toUpperCase()} unit test`,
        score: { correct: u.correct ?? 0, total: u.total, label: u.percentage != null ? `${u.percentage}%` : undefined },
        backHref: `/${course}-unit-test`,
        items,
      }
    }
    case 'sat-practice': {
      const s = await prisma.satTestAttempt.findFirst({ where: { id, userId } })
      if (!s) return null
      return {
        kind, id, course: 'sat', takenAt: iso(s.completedAt),
        title: `SAT practice test ${s.testNumber}`,
        score: { correct: s.rwCorrect + s.mathCorrect, total: s.rwTotal + s.mathTotal, label: `${s.totalScore}` },
        backHref: '/sat-practice',
        items: await satPracticeReviewItems(s),
      }
    }
    case 'mcat-practice': {
      const m = await prisma.mcatTestAttempt.findFirst({ where: { id, userId } })
      if (!m) return null
      return {
        kind, id, course: 'mcat', takenAt: iso(m.completedAt),
        title: `MCAT practice · ${m.sectionName}`,
        score: { correct: m.correct, total: m.total, label: `${m.score}` },
        backHref: '/mcat-practice',
        items: await mcatPracticeReviewItems(m.answers, { timeSpentSeconds: m.timeSpent }),
      }
    }
  }
}

export async function resolveAttempt(kind: ReviewKind, id: string, userId: string): Promise<ResolvedAttempt | null> {
  let built
  try {
    built = await build(kind, id, userId)
  } catch (err) {
    console.error('[question-resolver] rebuild failed:', kind, id, err)
    return null
  }
  if (!built) return null
  // Stored keys per position, to flag questions edited since the attempt.
  const stored = await prisma.questionActivity.findMany({
    where: { userId, attemptId: id },
    select: { itemIndex: true, questionKey: true },
  })
  const keyAt = new Map(stored.filter((r) => r.itemIndex != null).map((r) => [r.itemIndex as number, r.questionKey]))
  const slugs = [...new Set(built.items.map((i) => i?.topicSlug).filter((s): s is string => !!s))]
  const titleOf = new Map(
    slugs.length ? (await prisma.topic.findMany({ where: { slug: { in: slugs } }, select: { slug: true, title: true } })).map((t) => [t.slug, t.title]) : [],
  )
  const items = built.items.map((item): ResolvedItem | null => {
    if (!item) return null
    const was = keyAt.get(item.index)
    const title = item.topicSlug ? titleOf.get(item.topicSlug) : undefined
    return { ...item, ...(title ? { topicTitle: title } : {}), ...(was && was.startsWith('q:') && was !== item.questionKey ? { revised: true } : {}) }
  })
  return { ...built, items }
}

/** One item of an attempt (the mistake re-quiz), by its position. */
export async function resolveItem(
  origin: { attemptKind: string; attemptId: string; itemIndex: number },
  userId: string,
  cache?: Map<string, Promise<ResolvedAttempt | null>>,
): Promise<ResolvedItem | null> {
  if (!isReviewKind(origin.attemptKind)) return null
  const cacheKey = `${origin.attemptKind}:${origin.attemptId}`
  let p = cache?.get(cacheKey)
  if (!p) {
    p = resolveAttempt(origin.attemptKind, origin.attemptId, userId)
    cache?.set(cacheKey, p)
  }
  const attempt = await p
  return attempt?.items.find((i) => i?.index === origin.itemIndex) ?? null
}

export const REVIEW_HREF = (kind: AttemptKind | ReviewKind, id: string) => `/review/${kind}/${id}`
