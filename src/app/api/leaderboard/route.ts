import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export const revalidate = 300 // 5 minutes

export async function GET() {
  // Get top players by overall MMR
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

  const leaderboard = profiles.map((p, i) => ({
    position: i + 1,
    name: p.user.name || 'Anonymous',
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

  return NextResponse.json(leaderboard)
}
