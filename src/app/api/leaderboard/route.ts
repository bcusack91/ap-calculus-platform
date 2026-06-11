import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { publicDisplayName } from '@/lib/display-name'
import { cached } from '@/lib/redis'

export const revalidate = 3600 // 1 hour

// The leaderboard is identical for every visitor, so it's wasteful to run the
// top-100 sort on every request. Cache the computed result in Redis for 60s —
// a viral spike then hits the DB at most once per minute instead of per view.
// Falls through to a direct query when Redis isn't configured.
async function computeLeaderboard() {
  const profiles = await prisma.competitiveProfile.findMany({
    where: { totalMatches: { gte: 1 } },
    orderBy: { overallMMR: 'desc' },
    take: 100,
    select: {
      overallMMR: true,
      totalMatches: true,
      wins: true,
      losses: true,
      winStreak: true,
      bestWinStreak: true,
      averageAccuracy: true,
      rank: true,
      user: {
        select: {
          name: true,
          avatarData: true,
        },
      },
    },
  })

  return profiles.map((p, i) => ({
    position: i + 1,
    name: publicDisplayName(p.user.name),
    avatarData: p.user.avatarData,
    mmr: p.overallMMR,
    rank: p.rank,
    totalMatches: p.totalMatches,
    wins: p.wins,
    losses: p.losses,
    winRate: p.totalMatches > 0 ? Math.round((p.wins / p.totalMatches) * 100) : 0,
    winStreak: p.winStreak,
    bestWinStreak: p.bestWinStreak,
    averageAccuracy: Math.round(p.averageAccuracy),
  }))
}

export async function GET() {
  try {
    const leaderboard = await cached('leaderboard:overall:top100', 60, computeLeaderboard)
    return NextResponse.json(leaderboard)
  } catch (error) {
    console.error('[GET /api/leaderboard]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
