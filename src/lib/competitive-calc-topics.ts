/**
 * Server side of the competitive topic lists of a fixed-layout course
 * (course-includes: AP Calculus AB/BC, AP Precalculus): its live Topic rows
 * grouped by CED unit, plus the student's completion state. Shared by
 * /api/competitive/calculus-{ab,bc}-topics, /api/competitive/precalculus-topics
 * and the generic /api/competitive/course-topics picker, so all show the same
 * units as the course hub.
 */
import { prisma } from '@/lib/prisma'
import { courseCategoryLayout, type CourseUnitSection } from '@/lib/course-includes'
import { visibleTopics } from '@/lib/course-hub-sections'
import { groupTopicsByLayout, type LayoutUnit } from '@/lib/competitive-course-units'

export interface LayoutTopicRow { id: string; slug: string; title: string }

/**
 * The layout of a fixed-layout course and its live Topic rows (parent topics
 * only; legacy and retired slugs hidden), or null for a DB-laid-out course.
 */
export async function layoutTopicRows(courseSlug: string): Promise<{ layout: CourseUnitSection[]; rows: LayoutTopicRow[] } | null> {
  const layout = courseCategoryLayout(courseSlug)
  if (!layout) return null
  const slugs = layout.flatMap((s) => s.topics)
  const rows = await prisma.topic.findMany({
    where: { slug: { in: slugs }, parentTopicId: null },
    select: { id: true, slug: true, title: true },
  })
  return { layout, rows: visibleTopics(rows) }
}

export interface CompetitiveTopicStatus extends LayoutTopicRow {
  completed: boolean
  masteryLevel: number
  status: string
}

export interface CompetitiveTopicsResponse {
  units: LayoutUnit<CompetitiveTopicStatus>[]
  totalTopics: number
  completedCount: number
  hasAnyCompleted: boolean
}

/**
 * Units of a fixed-layout course's competitive page with the student's
 * completion state: a topic counts as completed on COMPLETED/MASTERED progress
 * at >= 80% mastery or a passed exit quiz (or for an admin full-unlock
 * account). A layout section with no live rows (AP Precalculus exam prep until
 * its lessons exist) is dropped, so unit numbers always come from the layout.
 */
export async function layoutCompetitiveTopics(opts: { slug: string; userId: string; isAdmin: boolean }): Promise<CompetitiveTopicsResponse | null> {
  const found = await layoutTopicRows(opts.slug)
  if (!found) return null
  const { layout, rows } = found
  const topicIds = rows.map((r) => r.id)
  const topicSlugs = rows.map((r) => r.slug)
  const [progress, passedQuizzes] = await Promise.all([
    prisma.topicProgress.findMany({
      where: { userId: opts.userId, topicId: { in: topicIds } },
      select: { topicId: true, status: true, masteryLevel: true },
    }),
    prisma.exitQuizAttempt.findMany({
      where: { userId: opts.userId, passed: true, topicSlug: { in: topicSlugs } },
      select: { topicSlug: true },
      distinct: ['topicSlug'],
    }),
  ])
  const progressMap = new Map(progress.map((p) => [p.topicId, p]))
  const passedQuizSlugs = new Set(passedQuizzes.map((q) => q.topicSlug))

  const units = groupTopicsByLayout(layout, rows).map((u) => ({
    ...u,
    topics: u.topics.map((t): CompetitiveTopicStatus => {
      const tp = progressMap.get(t.id)
      const completedViaProgress = (tp?.status === 'COMPLETED' || tp?.status === 'MASTERED') && (tp?.masteryLevel ?? 0) >= 0.8
      const completedViaQuiz = passedQuizSlugs.has(t.slug)
      return {
        ...t,
        completed: opts.isAdmin || completedViaProgress || completedViaQuiz,
        masteryLevel: tp?.masteryLevel ?? 0,
        status: tp?.status ?? 'NOT_STARTED',
      }
    }),
  }))
  const totalTopics = units.reduce((s, u) => s + u.topics.length, 0)
  const completedCount = units.reduce((s, u) => s + u.topics.filter((t) => t.completed).length, 0)
  return { units, totalTopics, completedCount, hasAnyCompleted: opts.isAdmin || completedCount > 0 }
}

/** The calculus routes' name for layoutCompetitiveTopics (same function). */
export const calcCompetitiveTopics = layoutCompetitiveTopics
