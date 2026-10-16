import { prisma } from '@/lib/prisma'
import type { AttemptKind } from '@/lib/study-tracking'
import type { ReviewFrqItem, ReviewItem } from '@/lib/question-sources/types'
import { apPracticeFrqItems } from '@/lib/question-sources/ap-practice'
import { exitReviewItems } from '@/lib/question-sources/exit'
import { carsSkillForKey, fullLengthReviewItems, mcatPracticeReviewItems } from '@/lib/question-sources/mcat'
import { satDiagnosticReviewItems, satPracticeReviewItems } from '@/lib/question-sources/sat'
import { isPsatAttemptFormat } from '@/lib/sat-attempt-format'
import { unitTestReviewItems } from '@/lib/question-sources/unit-test'
import { diagnosticReviewItems } from '@/lib/question-sources/diagnostic'
import { qbankReviewItems } from '@/lib/question-sources/qbank'
import { actFlReviewItems } from '@/lib/question-sources/act'
import { ACT_FL_CATEGORY } from '@/lib/act-full-length-server'
import { AP_PRACTICE_CATEGORY_PREFIX, AP_PRACTICE_EXAMS, apPracticeKeyOfCategory } from '@/lib/ap-practice-exams'
import { satOptionExplanationsFor } from '@/data/sat-practice/option-explanations'
import { courseForCategory, diagnosticRouteForKey } from '@/lib/class-plan-config'
import { canonicalizeDiagnosticResults } from '@/lib/ap-topic-canonical'

/**
 * Rebuilds any stored attempt into review items — the permanent review page
 * and the mistake log both go through here. Every lookup is scoped to the
 * owner, so a student can only ever rebuild their own attempts.
 *
 * Items whose content has changed since the attempt (the stored question key
 * no longer matches a fresh one) are marked `revised`; questions that can't be
 * rebuilt at all come back as null.
 */

export const REVIEW_KINDS = ['exit', 'diagnostic', 'unit-test', 'sat-practice', 'mcat-fl', 'mcat-practice', 'qbank', 'act-fl', 'ap-practice'] as const
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
  /** Free-response items with the student's responses and rubric (AP practice exams). */
  frq?: ReviewFrqItem[]
}

const iso = (d: Date) => d.toISOString()
const courseOfCategory = (category: string) => (category.startsWith('mcat') ? 'mcat' : category.startsWith('sat') ? 'sat' : category.startsWith('act') ? 'act' : category.split('-')[0])

/**
 * An AP diagnostic's real course. Splitting the category on '-' turned
 * 'ap-chem-diagnostic-3' into course 'ap' (title "AP diagnostic", back link
 * /ap-diagnostic, a 404). AP diagnostics take the course slug and name from
 * the class-plan registry and link back to that course's diagnostic page.
 */
export function apDiagnosticCourse(category: string): { courseSlug: string; label: string; backHref: string } | null {
  const c = courseForCategory(category)
  if (!c?.courseSlug?.startsWith('ap-')) return null
  return { courseSlug: c.courseSlug, label: c.label, backHref: diagnosticRouteForKey(c.key) }
}
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
      // ACT full-lengths review under their own kind ('act-fl').
      if (d.category === ACT_FL_CATEGORY) return null
      const r = (d.results ?? {}) as Record<string, unknown>
      const ap = isFl ? null : apDiagnosticCourse(d.category)
      const course = ap?.courseSlug ?? courseOfCategory(d.category)
      // Older AP attempts carry legacy topic slugs; review them under the production topic.
      const results = ap ? canonicalizeDiagnosticResults(d.category, d.results) : d.results
      const items = isFl ? fullLengthReviewItems(results) ?? [] : course === 'sat' ? satDiagnosticReviewItems(results) : diagnosticReviewItems(results)
      const correct = items.filter((i) => i && i.chosenIndex === i.correctIndex).length
      return {
        kind, id, course, takenAt: iso(d.createdAt),
        title: isFl ? `MCAT full-length${typeof r.form === 'number' ? ` · Form ${r.form}` : ''}` : ap ? `${ap.label} diagnostic` : `${course.toUpperCase()} diagnostic`,
        score: {
          correct,
          total: items.length,
          label: typeof r.total === 'number' ? `${r.total}` : typeof r.estimatedScore === 'number' ? `${r.estimatedScore}` : typeof r.estimatedAPScore === 'number' ? `${r.estimatedAPScore}/5` : undefined,
        },
        backHref: isFl ? '/mcat-full-length' : ap ? ap.backHref : `/${course}-diagnostic`,
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
      // Adaptive PSAT/NMSQT practice tests share the table (format 'psat-full').
      const psat = isPsatAttemptFormat(s.format)
      return {
        kind, id, course: 'sat', takenAt: iso(s.completedAt),
        title: `${psat ? 'PSAT' : 'SAT'} practice test ${s.testNumber}`,
        score: { correct: s.rwCorrect + s.mathCorrect, total: s.rwTotal + s.mathTotal, label: `${s.totalScore}` },
        backHref: psat ? '/psat-practice' : '/sat-practice',
        items: await satPracticeReviewItems(s),
      }
    }
    case 'act-fl': {
      const d = await prisma.diagnosticTest.findFirst({ where: { id, userId, category: ACT_FL_CATEGORY }, select: { results: true, createdAt: true } })
      if (!d) return null
      const r = (d.results ?? {}) as Record<string, unknown>
      const items = (await actFlReviewItems(d.results)) ?? []
      const correct = items.filter((i) => i.chosenIndex === i.correctIndex).length
      return {
        kind, id, course: 'act', takenAt: iso(d.createdAt),
        title: `ACT full-length${typeof r.form === 'number' ? ` · Form ${r.form}` : ''}${r.includeScience === true ? '' : ' (no Science)'}`,
        score: { correct, total: items.length, label: typeof r.composite === 'number' ? `Composite ${r.composite}` : undefined },
        backHref: '/act-practice/full-length',
        items,
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
    case 'ap-practice': {
      // AP full-length practice exam (src/app/api/ap-practice/submit): a stored
      // review copy of every multiple-choice question as shown, plus each
      // free-response item with what the student wrote and the rubric ticks.
      const d = await prisma.diagnosticTest.findFirst({
        where: { id, userId, category: { startsWith: AP_PRACTICE_CATEGORY_PREFIX } },
        select: { category: true, results: true, createdAt: true },
      })
      if (!d) return null
      const r = (d.results ?? {}) as Record<string, unknown>
      const exam = AP_PRACTICE_EXAMS[apPracticeKeyOfCategory(d.category) ?? '']
      const items = diagnosticReviewItems(d.results)
      const frq = apPracticeFrqItems(d.results)
      const correct = items.filter((i) => i && i.chosenIndex === i.correctIndex).length
      return {
        kind, id, course: exam?.courseSlug ?? 'ap', takenAt: iso(d.createdAt),
        title: `${typeof r.subject === 'string' ? r.subject : 'AP'} practice exam`,
        score: { correct, total: items.length, label: typeof r.estimatedAPScore === 'number' ? `${r.estimatedAPScore}/5` : undefined },
        backHref: exam?.path ?? '/',
        items,
        ...(frq.length ? { frq } : {}),
      }
    }
    case 'qbank': {
      // In-progress sets resolve too (a tutor-mode miss is a mistake-log
      // origin before the set is finished); only graded questions come back.
      const q = await prisma.qbankSession.findFirst({ where: { id, userId } })
      if (!q) return null
      const course = q.course === 'sat' ? 'sat' : q.course === 'act' ? 'act' : 'mcat'
      // CARS questions carry their reasoning skill for the Report tab; SAT
      // questions carry authored per-option notes when the item has them.
      const items = qbankReviewItems(q).map((i) => {
        if (!i) return i
        if (course === 'mcat') {
          const skill = carsSkillForKey(i.questionKey)
          return skill ? { ...i, skill } : i
        }
        if (course === 'act') return i
        const optionExplanations = i.gridIn ? undefined : satOptionExplanationsFor(i.questionKey, i.options)
        return optionExplanations ? { ...i, optionExplanations } : i
      })
      const correct = q.correct ?? items.filter((i) => i && (i.gridIn ? i.correct : i.chosenIndex === i.correctIndex)).length
      return {
        kind, id, course, takenAt: iso(q.completedAt ?? q.startedAt),
        title: `${course.toUpperCase()} practice set · ${q.mode === 'timed' ? 'Timed' : 'Tutor'}${q.completedAt ? '' : ' (in progress)'}`,
        score: { correct, total: q.total },
        backHref: `/${course}/qbank`,
        items,
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
