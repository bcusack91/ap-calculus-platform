import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { cached, dashboardCacheKey } from '@/lib/redis'

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const userId = session.user.id

    // Cache the assembled dashboard payload per user for a short window. This
    // absorbs rapid re-navigations / refreshes (and traffic spikes) without
    // re-running ~6 queries each time. Kept short, and invalidated on progress
    // save (see /api/progress/save), so completed work shows up promptly.
    const payload = await cached(dashboardCacheKey(userId), 30, () =>
      buildDashboard(userId)
    )
    return NextResponse.json(payload)
  } catch (error) {
    console.error('Dashboard API error:', error)
    return NextResponse.json(
      { error: 'Failed to load dashboard data' },
      { status: 500 }
    )
  }
}

async function buildDashboard(userId: string) {
    // Fetch all user data in parallel
    const [
      topicProgress,
      flashcardStats,
      streakData,
      recentActivity,
    ] = await Promise.all([
      // Topic progress across all courses
      prisma.topicProgress.findMany({
        where: { userId },
        select: {
          status: true,
          masteryLevel: true,
          timeSpent: true,
          lastAccessed: true,
          topic: {
            select: {
              title: true,
              slug: true,
              category: {
                select: {
                  name: true,
                  course: {
                    select: { name: true, slug: true }
                  }
                }
              }
            }
          }
        },
        orderBy: { lastAccessed: 'desc' },
      }),

      // Flashcard review stats
      prisma.flashcardProgress.groupBy({
        by: ['userId'],
        where: { userId },
        _count: true,
      }),

      // Streak data
      prisma.dailyStreak.findUnique({
        where: { userId },
      }),

      // Recent activity (last 10 topic interactions)
      prisma.topicProgress.findMany({
        where: { userId },
        select: {
          status: true,
          masteryLevel: true,
          lastAccessed: true,
          topic: {
            select: {
              title: true,
              slug: true,
              category: {
                select: {
                  course: { select: { name: true } }
                }
              }
            }
          }
        },
        orderBy: { lastAccessed: 'desc' },
        take: 10,
      }),
    ])

    // Compute due flashcards count
    const dueFlashcards = await prisma.flashcardProgress.count({
      where: {
        userId,
        nextReview: { lte: new Date() },
      },
    })

    // Aggregate by course
    const courseMap: Record<string, {
      name: string
      slug: string
      total: number
      completed: number
      mastered: number
      inProgress: number
    }> = {}

    for (const tp of topicProgress) {
      const courseSlug = tp.topic.category.course.slug
      const courseName = tp.topic.category.course.name
      if (!courseMap[courseSlug]) {
        courseMap[courseSlug] = {
          name: courseName,
          slug: courseSlug,
          total: 0,
          completed: 0,
          mastered: 0,
          inProgress: 0,
        }
      }
      courseMap[courseSlug].total++
      if (tp.status === 'COMPLETED') courseMap[courseSlug].completed++
      if (tp.status === 'MASTERED') courseMap[courseSlug].mastered++
      if (tp.status === 'IN_PROGRESS') courseMap[courseSlug].inProgress++
    }

    const topicsCompleted = topicProgress.filter(
      (tp) => tp.status === 'COMPLETED' || tp.status === 'MASTERED'
    ).length
    const topicsMastered = topicProgress.filter(
      (tp) => tp.status === 'MASTERED'
    ).length
    const topicsInProgress = topicProgress.filter(
      (tp) => tp.status === 'IN_PROGRESS'
    ).length
    const totalTimeSpent = topicProgress.reduce(
      (sum, tp) => sum + (tp.timeSpent || 0),
      0
    )

    return {
      overview: {
        topicsStarted: topicProgress.length,
        topicsCompleted,
        topicsMastered,
        topicsInProgress,
        totalTimeSpentMinutes: Math.round(totalTimeSpent / 60),
        totalFlashcards: flashcardStats[0]?._count ?? 0,
        dueFlashcards,
      },
      streak: streakData
        ? {
            current: streakData.currentStreak,
            longest: streakData.longestStreak,
            lastActive: streakData.lastActiveDate,
          }
        : { current: 0, longest: 0, lastActive: null },
      courseProgress: Object.values(courseMap),
      recentActivity: recentActivity.map((a) => ({
        topicTitle: a.topic.title,
        topicSlug: a.topic.slug,
        courseName: a.topic.category.course.name,
        status: a.status,
        masteryLevel: a.masteryLevel,
        lastAccessed: a.lastAccessed,
      })),
    }
}
