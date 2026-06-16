import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get user's completed topic count
    const userCompleted = await prisma.topicProgress.count({
      where: {
        userId: session.user.id,
        status: { in: ['COMPLETED', 'MASTERED'] },
      },
    })

    // Get all users' completed topic counts
    const allProgress = await prisma.topicProgress.groupBy({
      by: ['userId'],
      where: { status: { in: ['COMPLETED', 'MASTERED'] } },
      _count: true,
    })

    const totalUsers = allProgress.length
    if (totalUsers === 0) {
      // Match the success-path shape so the client never computes
      // `100 - undefined` (= NaN) for the streak percentile in this empty window.
      return NextResponse.json({
        percentile: 100,
        totalUsers: 0,
        userCompleted: 0,
        streakPercentile: 100,
        currentStreak: 0,
      })
    }

    // Sort and find percentile
    const counts = allProgress.map(a => a._count).sort((a, b) => a - b)
    const belowUser = counts.filter(c => c < userCompleted).length
    const percentile = Math.round((belowUser / totalUsers) * 100)

    // Get user's streak ranking
    const userStreak = await prisma.dailyStreak.findUnique({
      where: { userId: session.user.id },
      select: { currentStreak: true },
    })

    const allStreaks = await prisma.dailyStreak.findMany({
      select: { currentStreak: true },
      orderBy: { currentStreak: 'desc' },
    })

    const streakRank = allStreaks.findIndex(s => s.currentStreak <= (userStreak?.currentStreak ?? 0)) + 1
    const streakPercentile = allStreaks.length > 0
      ? Math.round(((allStreaks.length - streakRank) / allStreaks.length) * 100)
      : 0

    return NextResponse.json({
      percentile: Math.max(1, percentile),
      totalUsers,
      userCompleted,
      streakPercentile: Math.max(1, streakPercentile),
      currentStreak: userStreak?.currentStreak ?? 0,
    })
  } catch (error) {
    console.error('[progress-comparison] Error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
