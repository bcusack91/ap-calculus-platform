import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

/**
 * GET /api/progress/summary — one place that answers "what have I actually done?"
 *
 * Study activity was previously scattered: topic mastery on the dashboard, exit
 * quizzes nowhere, SAT/MCAT test history only on those two practice pages, daily
 * challenges nowhere. This aggregates every student-facing record into a single
 * timeline + headline stats so /progress can show a complete picture.
 *
 * Read-only and user-scoped — every query filters on the session user id.
 */
export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const userId = session.user.id

    const [topicProgress, exitQuizzes, satTests, mcatTests, dailyResults, streak, flashcards] =
      await Promise.all([
        prisma.topicProgress.findMany({
          where: { userId },
          select: {
            status: true,
            masteryLevel: true,
            lastAccessed: true,
            topic: { select: { title: true, slug: true, category: { select: { course: { select: { name: true, slug: true } } } } } },
          },
          orderBy: { lastAccessed: 'desc' },
        }),
        prisma.exitQuizAttempt.findMany({
          where: { userId },
          select: { topicSlug: true, score: true, totalQuestions: true, passed: true, completedAt: true },
          orderBy: { completedAt: 'desc' },
          take: 100,
        }),
        prisma.satTestAttempt.findMany({
          where: { userId },
          select: { testNumber: true, totalScore: true, rwScore: true, mathScore: true, completedAt: true },
          orderBy: { completedAt: 'desc' },
          take: 25,
        }),
        prisma.mcatTestAttempt.findMany({
          where: { userId },
          select: { sectionName: true, score: true, percentage: true, completedAt: true },
          orderBy: { completedAt: 'desc' },
          take: 25,
        }),
        prisma.dailyChallengeResult.findMany({
          where: { userId },
          select: { day: true, score: true, total: true, completedAt: true },
          orderBy: { completedAt: 'desc' },
          take: 30,
        }),
        prisma.dailyStreak.findUnique({
          where: { userId },
          select: { currentStreak: true, longestStreak: true, lastActiveDate: true },
        }),
        prisma.flashcardProgress.findMany({
          where: { userId },
          select: { repetitions: true, nextReview: true },
        }),
      ])

    // ── Headline stats ───────────────────────────────────────────────
    const mastered = topicProgress.filter((t) => t.status === 'MASTERED').length
    const completed = topicProgress.filter((t) => t.status === 'COMPLETED').length
    const inProgress = topicProgress.filter((t) => t.status === 'IN_PROGRESS').length

    const quizAvg = exitQuizzes.length
      ? Math.round(
          (exitQuizzes.reduce((s, q) => s + (q.totalQuestions > 0 ? q.score / q.totalQuestions : 0), 0) /
            exitQuizzes.length) * 100
        )
      : null

    const now = new Date()
    const dueCards = flashcards.filter((f) => !f.nextReview || f.nextReview <= now).length

    // ── Per-course rollup (only courses the student has touched) ─────
    const byCourse = new Map<string, { name: string; slug: string; touched: number; mastered: number }>()
    for (const t of topicProgress) {
      const c = t.topic?.category?.course
      if (!c) continue
      const row = byCourse.get(c.slug) ?? { name: c.name, slug: c.slug, touched: 0, mastered: 0 }
      row.touched++
      if (t.status === 'MASTERED') row.mastered++
      byCourse.set(c.slug, row)
    }

    // ── Unified activity timeline ────────────────────────────────────
    type Item = { kind: string; label: string; detail: string; at: string; href?: string }
    const timeline: Item[] = [
      ...exitQuizzes.map((q) => ({
        kind: 'quiz',
        label: 'Exit quiz',
        detail: `${q.score}/${q.totalQuestions}${q.passed ? ' · passed' : ''}`,
        at: q.completedAt.toISOString(),
        href: `/topics/${q.topicSlug}`,
      })),
      ...satTests.map((t) => ({
        kind: 'sat',
        label: `SAT practice test ${t.testNumber}`,
        detail: `${t.totalScore} (RW ${t.rwScore} · Math ${t.mathScore})`,
        at: t.completedAt.toISOString(),
        href: '/sat-practice',
      })),
      ...mcatTests.map((t) => ({
        kind: 'mcat',
        label: `MCAT · ${t.sectionName}`,
        detail: `${t.score} · ${t.percentage}%`,
        at: t.completedAt.toISOString(),
        href: '/mcat-practice',
      })),
      ...dailyResults.map((d) => ({
        kind: 'daily',
        label: 'Daily challenge',
        detail: `${d.score}/${d.total}`,
        at: d.completedAt.toISOString(),
      })),
      ...topicProgress
        .filter((t) => t.lastAccessed)
        .slice(0, 40)
        .map((t) => ({
          kind: 'topic',
          label: t.topic?.title ?? 'Topic',
          detail: t.status === 'MASTERED' ? 'mastered' : t.status === 'COMPLETED' ? 'completed' : 'studied',
          at: t.lastAccessed!.toISOString(),
          href: t.topic?.slug ? `/topics/${t.topic.slug}` : undefined,
        })),
    ]
      .sort((a, b) => (a.at < b.at ? 1 : -1))
      .slice(0, 60)

    return NextResponse.json({
      stats: {
        topicsMastered: mastered,
        topicsCompleted: completed,
        topicsInProgress: inProgress,
        quizzesTaken: exitQuizzes.length,
        quizAverage: quizAvg,
        satTests: satTests.length,
        bestSat: satTests.length ? Math.max(...satTests.map((t) => t.totalScore)) : null,
        mcatSections: mcatTests.length,
        dailyChallenges: dailyResults.length,
        flashcardsLearned: flashcards.filter((f) => f.repetitions > 0).length,
        flashcardsDue: dueCards,
        currentStreak: streak?.currentStreak ?? 0,
        longestStreak: streak?.longestStreak ?? 0,
      },
      courses: [...byCourse.values()].sort((a, b) => b.touched - a.touched),
      timeline,
    })
  } catch (error) {
    console.error('[GET /api/progress/summary]', error)
    return NextResponse.json({ error: 'Failed to load progress' }, { status: 500 })
  }
}
