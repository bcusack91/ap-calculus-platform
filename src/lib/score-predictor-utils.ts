/**
 * Shared score-predictor API helpers for AP subjects and ACT.
 * Each route imports these to avoid duplicating the scoring logic.
 */

import { prisma } from '@/lib/prisma'

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
  const [exitQuizAttempts, topicProgress, diagnosticTests] = await Promise.all([
    prisma.exitQuizAttempt.findMany({
      where: { userId },
      orderBy: { completedAt: 'asc' },
      select: { topicSlug: true, score: true, totalQuestions: true, passed: true, completedAt: true },
    }),
    prisma.topicProgress.findMany({
      where: { userId, topic: { category: { course: { slug: courseSlugPattern } } } },
      select: { status: true },
    }),
    diagnosticCategory
      ? prisma.diagnosticTest.findMany({
          where: { userId, category: diagnosticCategory },
          orderBy: { createdAt: 'asc' },
          select: { results: true, createdAt: true },
        })
      : Promise.resolve([]),
  ])

  // Filter exit quizzes to this subject
  const subjectQuizzes = exitQuizAttempts.filter(a => a.topicSlug.includes(slugPrefix))
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
