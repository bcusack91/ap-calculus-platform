import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { unstable_cache } from 'next/cache'

/**
 * GET /api/progress/charts — Returns chart data for student progress visualization
 * Provides: weekly study time, mastery over time, streak calendar heatmap
 */
export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const userId = session.user.id

    const getChartsData = unstable_cache(
      async () => {
        const [topicProgress, flashcardProgress, streakData, recentActivity] = await Promise.all([
      prisma.topicProgress.findMany({
        where: { userId },
        select: {
          status: true,
          masteryLevel: true,
          timeSpent: true,
          lastAccessed: true,
          completedAt: true,
          topic: { select: { title: true, slug: true, category: { select: { name: true } } } },
        },
        orderBy: { lastAccessed: 'desc' },
      }),
      prisma.flashcardProgress.findMany({
        where: { userId },
        select: { lastReviewed: true, repetitions: true },
        orderBy: { lastReviewed: 'desc' },
      }),
      prisma.dailyStreak.findUnique({
        where: { userId },
        select: { currentStreak: true, longestStreak: true },
      }),
      prisma.topicProgress.findMany({
        where: { userId, lastAccessed: { gte: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000) } },
        select: { lastAccessed: true, timeSpent: true },
      }),
    ])

    // === Mastery over time (weekly aggregation for last 12 weeks) ===
    const masteryTimeline: { week: string; avgMastery: number; topicsCompleted: number }[] = []
    const now = new Date()
    for (let i = 11; i >= 0; i--) {
      const weekStart = new Date(now)
      weekStart.setDate(weekStart.getDate() - (7 * (i + 1)))
      const weekEnd = new Date(now)
      weekEnd.setDate(weekEnd.getDate() - (7 * i))

      const weekProgress = topicProgress.filter((tp) => {
        const d = new Date(tp.lastAccessed)
        return d >= weekStart && d < weekEnd
      })

      const avg = weekProgress.length > 0
        ? Math.round((weekProgress.reduce((s, p) => s + p.masteryLevel, 0) / weekProgress.length) * 100)
        : null

      masteryTimeline.push({
        week: weekStart.toISOString().split('T')[0],
        avgMastery: avg ?? 0,
        topicsCompleted: weekProgress.filter((p) => p.status === 'COMPLETED' || p.status === 'MASTERED').length,
      })
    }

    // === Study time per week (last 12 weeks) ===
    const studyTimeline: { week: string; minutes: number }[] = []
    for (let i = 11; i >= 0; i--) {
      const weekStart = new Date(now)
      weekStart.setDate(weekStart.getDate() - (7 * (i + 1)))
      const weekEnd = new Date(now)
      weekEnd.setDate(weekEnd.getDate() - (7 * i))

      const weekActivities = recentActivity.filter((a) => {
        const d = new Date(a.lastAccessed)
        return d >= weekStart && d < weekEnd
      })

      studyTimeline.push({
        week: weekStart.toISOString().split('T')[0],
        minutes: weekActivities.reduce((s, a) => s + a.timeSpent, 0),
      })
    }

    // === Streak calendar heatmap (last 90 days) ===
    const heatmap: Record<string, number> = {}
    for (const activity of recentActivity) {
      const day = new Date(activity.lastAccessed).toISOString().split('T')[0]
      heatmap[day] = (heatmap[day] ?? 0) + activity.timeSpent
    }
    for (const review of flashcardProgress) {
      if (review.lastReviewed) {
        const day = new Date(review.lastReviewed).toISOString().split('T')[0]
        heatmap[day] = (heatmap[day] ?? 0) + 1
      }
    }

    // === Subject breakdown ===
    const bySubject: Record<string, { completed: number; total: number; avgMastery: number }> = {}
    for (const tp of topicProgress) {
      const subject = tp.topic?.category?.name ?? 'Other'
      if (!bySubject[subject]) bySubject[subject] = { completed: 0, total: 0, avgMastery: 0 }
      bySubject[subject].total++
      if (tp.status === 'COMPLETED' || tp.status === 'MASTERED') bySubject[subject].completed++
      bySubject[subject].avgMastery += tp.masteryLevel
    }
    const subjectBreakdown = Object.entries(bySubject).map(([name, data]) => ({
      name,
      completed: data.completed,
      total: data.total,
      avgMastery: data.total > 0 ? Math.round((data.avgMastery / data.total) * 100) : 0,
    })).sort((a, b) => b.total - a.total)

    return NextResponse.json({
      masteryTimeline,
      studyTimeline,
      heatmap,
      subjectBreakdown,
      streak: {
        current: streakData?.currentStreak ?? 0,
        longest: streakData?.longestStreak ?? 0,
      },
      totals: {
        totalTopics: topicProgress.length,
        totalReviews: flashcardProgress.length,
        totalTimeMinutes: topicProgress.reduce((s, p) => s + p.timeSpent, 0),
      },
    }
      },
      [`progress-charts-${userId}`],
      { revalidate: 120 }
    )

    return NextResponse.json(await getChartsData())
  } catch (error) {
    console.error('[GET /api/progress/charts]', error)
    return NextResponse.json({ error: 'Failed to load progress charts' }, { status: 500 })
  }
}
