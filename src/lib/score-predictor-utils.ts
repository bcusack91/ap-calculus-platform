/**
 * Shared score-predictor API helpers for AP subjects and ACT.
 * Each route imports these to avoid duplicating the scoring logic.
 */

import { prisma } from '@/lib/prisma'
import { unstable_cache } from 'next/cache'
import { sectionScaledScore } from '@/lib/mcat-scoring'
import type { MCATSection } from '@/data/mcat/types'
import { MCAT_SECTION_ORDER } from '@/data/mcat/types'

interface BasicStats {
  totalTopics: number
  masteredTopics: number
  masteryRate: number
  quizzesAttempted: number
  quizPassRate: number
  recentAvg: number
}

interface TrendPoint {
  date: string
  score: number
  source: string
}

/**
 * Query quiz + topic data for a given subject slug prefix.
 * `slugPrefix` is checked against exitQuizAttempt.topicSlug (e.g. "calcab", "chem").
 * `courseSlugPattern` filters topic progress (e.g. "ap-calculus-ab").
 */
export async function gatherSubjectData(
  userId: string,
  slugPrefix: string,
  courseSlugPattern: string,
  diagnosticCategory?: string,
) {
  const fetchData = unstable_cache(
    async () => {
      const [exitQuizAttempts, topicProgress, courseTopics, diagnosticTests] = await Promise.all([
        prisma.exitQuizAttempt.findMany({
          where: { userId },
          orderBy: { completedAt: 'asc' },
          select: { topicSlug: true, score: true, totalQuestions: true, passed: true, completedAt: true },
        }),
        prisma.topicProgress.findMany({
          where: { userId, topic: { category: { course: { slug: courseSlugPattern } } } },
          select: { status: true },
        }),
        prisma.topic.findMany({
          where: { category: { course: { slug: courseSlugPattern } } },
          select: { slug: true },
        }),
        diagnosticCategory
          ? prisma.diagnosticTest.findMany({
              where: { userId, category: { startsWith: diagnosticCategory } },
              orderBy: { createdAt: 'asc' },
              select: { results: true, createdAt: true },
            })
          : Promise.resolve([]),
      ])
      return { exitQuizAttempts, topicProgress, courseTopics, diagnosticTests }
    },
    [`score-predictor-${userId}-${courseSlugPattern}`],
    { revalidate: 300 }
  )

  const { exitQuizAttempts, topicProgress, courseTopics, diagnosticTests } = await fetchData()

  // Filter exit quizzes by either prefix match or explicit topic slugs in this course.
  const courseTopicSlugs = new Set(courseTopics.map(t => t.slug))
  const subjectQuizzes = exitQuizAttempts.filter(a =>
    a.topicSlug.includes(slugPrefix) || courseTopicSlugs.has(a.topicSlug),
  )
  const quizzesAttempted = subjectQuizzes.length
  const quizPassRate = quizzesAttempted > 0
    ? Math.round((subjectQuizzes.filter(a => a.passed).length / quizzesAttempted) * 100)
    : 0
  const avgPct = quizzesAttempted > 0
    ? subjectQuizzes.reduce((s, a) => s + a.score / a.totalQuestions, 0) / quizzesAttempted
    : 0

  const recentQuizzes = subjectQuizzes.slice(-10)
  const recentAvg = recentQuizzes.length > 0
    ? Math.round((recentQuizzes.reduce((s, a) => s + a.score / a.totalQuestions, 0) / recentQuizzes.length) * 100)
    : Math.round(avgPct * 100)

  const totalTopics = topicProgress.length
  const masteredTopics = topicProgress.filter(tp => tp.status === 'MASTERED').length
  const masteryRate = totalTopics > 0 ? Math.round((masteredTopics / totalTopics) * 100) : 0

  // Trend from diagnostics
  const trend: TrendPoint[] = []
  for (const d of diagnosticTests) {
    try {
      const parsed = d.results as Record<string, unknown>
      if (parsed.estimatedScore) {
        trend.push({ date: (d.createdAt as Date).toISOString(), score: parsed.estimatedScore as number, source: 'diagnostic' })
      }
    } catch {}
  }

  const confidence: 'high' | 'medium' | 'low' =
    quizzesAttempted >= 10 ? 'high' : quizzesAttempted >= 3 ? 'medium' : 'low'

  return {
    subjectQuizzes,
    avgPct,
    stats: { totalTopics, masteredTopics, masteryRate, quizzesAttempted, quizPassRate, recentAvg } as BasicStats,
    trend,
    confidence,
    masteryRate: masteryRate / 100,
  }
}

/** Map average quiz percentage (0–1) to an AP score (1–5). */
export function mapToAPScore(avgPct: number, masteryRate: number): number {
  // Blend 70% quiz performance + 30% mastery rate
  const blended = avgPct * 0.7 + masteryRate * 0.3
  if (blended >= 0.85) return 5
  if (blended >= 0.70) return 4
  if (blended >= 0.55) return 3
  if (blended >= 0.35) return 2
  return 1
}

/** Map average quiz percentage (0–1) to an ACT section score (1–36). */
export function mapToACTScore(avgPct: number): number {
  return Math.max(1, Math.min(36, Math.round(avgPct * 36)))
}

/**
 * Classify an MCAT topic slug into its exam section, mirroring the diagnostic
 * generator's domain→section assignment (biochemistry counts toward
 * Chem/Phys, like the diagnostic's `biochem-cp` domain). Returns null for
 * slugs that don't clearly belong to one section (e.g. cross-cutting
 * strategy/quantitative topics).
 */
export function mcatSectionForTopicSlug(slug: string): MCATSection | null {
  if (/cars/i.test(slug)) return 'cars'
  if (/psych|sociolog/i.test(slug)) return 'psych-soc'
  if (/biolog|molecular|microbio|anatomy|physiolog|organ-systems|genetic|immuno/i.test(slug)) {
    return 'bio-biochem'
  }
  if (/biochem|chemistry|physics/i.test(slug)) return 'chem-phys'
  return null
}

/**
 * Map quiz performance to a total MCAT score (472-528) using the shared
 * percentile-anchored section curve from @/lib/mcat-scoring (the same curve
 * behind the diagnostic and full-length exam) instead of a flat linear map.
 *
 * The blend stays 75% quiz performance + 25% mastery rate. When per-section
 * quiz averages (0-1) are available, each attempted section is scaled through
 * the anchor curve individually and unattempted sections fall back to the
 * overall blend; without section data, the overall blend is pushed through
 * the same curve once and applied to all four sections.
 */
export function mapToMCATScore(
  avgPct: number,
  masteryRate: number,
  sectionAvgs?: Partial<Record<MCATSection, number>>,
): number {
  const blend = (pct: number) => Math.max(0, Math.min(1, pct * 0.75 + masteryRate * 0.25))
  const overallSectionScaled = sectionScaledScore(blend(avgPct))

  const total =
    sectionAvgs && Object.keys(sectionAvgs).length > 0
      ? MCAT_SECTION_ORDER.reduce((sum, section) => {
          const pct = sectionAvgs[section]
          return sum + (typeof pct === 'number' ? sectionScaledScore(blend(pct)) : overallSectionScaled)
        }, 0)
      : overallSectionScaled * 4

  return Math.max(472, Math.min(528, total))
}
