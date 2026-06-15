import { NextResponse } from 'next/server'
import { COURSE_COUNT } from '@/lib/site-stats'
import { prisma } from '@/lib/prisma'
import { cached } from '@/lib/redis'
import { unstable_cache } from 'next/cache'

// Server-side cache fallback when Redis is unavailable
const getCachedStats = unstable_cache(
  async () => {
    const [
      totalUsers,
      totalTopicProgress,
      totalFlashcardReviews,
      totalMatches,
      totalAsyncCompleted,
      totalCourses,
      totalTopics,
    ] = await Promise.all([
      prisma.user.count(),
      prisma.topicProgress.count(),
      prisma.flashcardProgress.count(),
      prisma.competitiveMatch.count(),
      // Async challenges only count once both players have finished (status = COMPLETED)
      prisma.asyncChallenge.count({ where: { status: 'COMPLETED' } }),
      prisma.course.count(),
      prisma.topic.count(),
    ])

    return {
      students: totalUsers,
      lessonsStudied: totalTopicProgress,
      flashcardsReviewed: totalFlashcardReviews,
      matchesPlayed: totalMatches + totalAsyncCompleted,
      courses: totalCourses,
      topics: totalTopics,
    }
  },
  ['stats-global'],
  { revalidate: 300 }
)

/**
 * GET /api/stats — Public endpoint for site-wide statistics
 * Used for social proof on the homepage (cached 5 min in Redis + HTTP cache)
 */
export async function GET() {
  try {
    const stats = await cached('stats:global', 300, getCachedStats)

    return NextResponse.json(stats, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    })
  } catch (error) {
    console.error('[GET /api/stats]', error)
    return NextResponse.json(
      { students: 0, lessonsStudied: 0, flashcardsReviewed: 0, matchesPlayed: 0, courses: COURSE_COUNT, topics: 950 },
      { status: 200 }
    )
  }
}
