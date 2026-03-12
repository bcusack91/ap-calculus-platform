import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { generateMatchQuestions } from '@/lib/competitive-utils'
import type { Prisma } from '@prisma/client'

/**
 * Team Battle 2v2 Queue
 * Collects 4 players, then splits them into 2 teams and creates a match.
 * Team data is stored in the gameData JSON field of CompetitiveMatch.
 */

// POST - Join the 2v2 team queue
export async function POST(req: NextRequest) {
  try {
    const session = await auth()
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const topicSlug = typeof body.topicSlug === 'string' ? body.topicSlug : 'cumulative'

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        competitiveProfile: true,
        matchmakingEntry: true,
        topicProgress: {
          where: {
            status: { in: ['COMPLETED', 'MASTERED'] },
            masteryLevel: { gte: 0.8 },
          },
          include: { topic: { select: { slug: true } } },
        },
      },
    })

    if (!user?.competitiveProfile) {
      return NextResponse.json({ error: 'Competitive mode not unlocked' }, { status: 403 })
    }

    const mmr = user.competitiveProfile.overallMMR

    // Check if already in queue
    if (user.matchmakingEntry) {
      return NextResponse.json({ status: 'already_in_queue' })
    }

    // Clean stale entries (older than 5 min)
    await prisma.matchmakingQueue.deleteMany({
      where: { joinedAt: { lt: new Date(Date.now() - 5 * 60 * 1000) } },
    })

    // Look for 3 other players already queued for TEAM_BATTLE on this topic
    const mmrRange = 200
    const candidates = await prisma.matchmakingQueue.findMany({
      where: {
        topicSlug,
        gameMode: 'TEAM_BATTLE',
        userId: { not: user.id },
        mmr: { gte: mmr - mmrRange, lte: mmr + mmrRange },
      },
      orderBy: { joinedAt: 'asc' },
      take: 3,
    })

    if (candidates.length >= 3) {
      // We have 4 players (3 candidates + current user). Create a team match.
      const allPlayers = [
        { userId: candidates[0].userId, mmr: candidates[0].mmr },
        { userId: candidates[1].userId, mmr: candidates[1].mmr },
        { userId: candidates[2].userId, mmr: candidates[2].mmr },
        { userId: user.id, mmr },
      ]

      // Balance teams by MMR: sort by MMR, then alternate picks (1-4-2-3 pattern)
      allPlayers.sort((a, b) => b.mmr - a.mmr)
      const team1 = [allPlayers[0], allPlayers[3]] // highest + lowest
      const team2 = [allPlayers[1], allPlayers[2]] // 2nd + 3rd

      const completedTopicSlugs = user.topicProgress.map((tp) => tp.topic.slug)
      const questions = generateMatchQuestions(15, topicSlug, completedTopicSlugs)

      const team1AvgMMR = Math.round((team1[0].mmr + team1[1].mmr) / 2)
      const team2AvgMMR = Math.round((team2[0].mmr + team2[1].mmr) / 2)

      const [match] = await prisma.$transaction([
        prisma.competitiveMatch.create({
          data: {
            player1Id: team1[0].userId,
            player2Id: team2[0].userId,
            gameMode: 'TEAM_BATTLE',
            topicSlug,
            player1MMRBefore: team1AvgMMR,
            player2MMRBefore: team2AvgMMR,
            player1MMRAfter: team1AvgMMR,
            player2MMRAfter: team2AvgMMR,
            player1Score: 0,
            player2Score: 0,
            status: 'IN_PROGRESS',
            startedAt: new Date(),
            gameData: {
              isTeamBattle: true,
              questions,
              team1: {
                players: [team1[0].userId, team1[1].userId],
                score: 0,
                questionIndices: { [team1[0].userId]: 0, [team1[1].userId]: 0 },
                answers: { [team1[0].userId]: [], [team1[1].userId]: [] },
              },
              team2: {
                players: [team2[0].userId, team2[1].userId],
                score: 0,
                questionIndices: { [team2[0].userId]: 0, [team2[1].userId]: 0 },
                answers: { [team2[0].userId]: [], [team2[1].userId]: [] },
              },
              playerMMRs: Object.fromEntries(allPlayers.map(p => [p.userId, p.mmr])),
              player1QuestionIndex: 0,
              player2QuestionIndex: 0,
            } as unknown as Prisma.InputJsonValue,
          },
        }),
        // Remove matched candidates from queue
        prisma.matchmakingQueue.delete({ where: { id: candidates[0].id } }),
        prisma.matchmakingQueue.delete({ where: { id: candidates[1].id } }),
        prisma.matchmakingQueue.delete({ where: { id: candidates[2].id } }),
      ])

      return NextResponse.json({
        status: 'matched',
        matchId: match.id,
        teamMode: '2v2',
      })
    }

    // Not enough players — join queue
    await prisma.matchmakingQueue.create({
      data: {
        userId: user.id,
        topicSlug,
        mmr,
        gameMode: 'TEAM_BATTLE',
      },
    })

    const queueSize = await prisma.matchmakingQueue.count({
      where: { topicSlug, gameMode: 'TEAM_BATTLE' },
    })

    return NextResponse.json({
      status: 'searching',
      playersInQueue: queueSize,
      playersNeeded: 4,
    })
  } catch (error) {
    console.error('Error joining team queue:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// DELETE - Leave the team queue
export async function DELETE() {
  try {
    const session = await auth()
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    await prisma.matchmakingQueue.deleteMany({ where: { userId: user.id } })

    return NextResponse.json({ status: 'left_queue' })
  } catch (error) {
    console.error('Error leaving team queue:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// GET - Check team queue status (with expanding MMR range)
export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        matchmakingEntry: true,
        topicProgress: {
          where: {
            status: { in: ['COMPLETED', 'MASTERED'] },
            masteryLevel: { gte: 0.8 },
          },
          include: { topic: { select: { slug: true } } },
        },
      },
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const entry = user.matchmakingEntry
    if (!entry) {
      // Check for active team match
      const activeMatch = await prisma.competitiveMatch.findFirst({
        where: {
          status: 'IN_PROGRESS',
          gameMode: 'TEAM_BATTLE',
          OR: [{ player1Id: user.id }, { player2Id: user.id }],
        },
        orderBy: { startedAt: 'desc' },
        select: { id: true, gameData: true },
      })

      // Also check gameData for team members
      if (activeMatch) {
        return NextResponse.json({ status: 'matched', matchId: activeMatch.id })
      }

      // Check if user is in a team match as a non-lead player
      const allActiveTeamMatches = await prisma.competitiveMatch.findMany({
        where: {
          status: 'IN_PROGRESS',
          gameMode: 'TEAM_BATTLE',
          startedAt: { gte: new Date(Date.now() - 30 * 60 * 1000) }, // Last 30 min
        },
        select: { id: true, gameData: true },
      })

      for (const m of allActiveTeamMatches) {
        const gd = m.gameData as { team1?: { players?: string[] }; team2?: { players?: string[] } } | null
        if (gd?.team1?.players?.includes(user.id) || gd?.team2?.players?.includes(user.id)) {
          return NextResponse.json({ status: 'matched', matchId: m.id })
        }
      }

      return NextResponse.json({ status: 'not_in_queue' })
    }

    // Expand MMR range over time
    const waitMs = Date.now() - entry.joinedAt.getTime()
    const mmrRange = waitMs < 10000 ? 200 : waitMs < 30000 ? 400 : 600

    // Try to find 3 opponents
    const candidates = await prisma.matchmakingQueue.findMany({
      where: {
        topicSlug: entry.topicSlug,
        gameMode: 'TEAM_BATTLE',
        userId: { not: user.id },
        mmr: { gte: entry.mmr - mmrRange, lte: entry.mmr + mmrRange },
      },
      orderBy: { joinedAt: 'asc' },
      take: 3,
    })

    if (candidates.length >= 3) {
      const allPlayers = [
        { userId: candidates[0].userId, mmr: candidates[0].mmr },
        { userId: candidates[1].userId, mmr: candidates[1].mmr },
        { userId: candidates[2].userId, mmr: candidates[2].mmr },
        { userId: user.id, mmr: entry.mmr },
      ]

      allPlayers.sort((a, b) => b.mmr - a.mmr)
      const team1 = [allPlayers[0], allPlayers[3]]
      const team2 = [allPlayers[1], allPlayers[2]]

      const completedTopicSlugs = user.topicProgress.map((tp) => tp.topic.slug)
      const questions = generateMatchQuestions(15, entry.topicSlug, completedTopicSlugs)

      const team1AvgMMR = Math.round((team1[0].mmr + team1[1].mmr) / 2)
      const team2AvgMMR = Math.round((team2[0].mmr + team2[1].mmr) / 2)

      const [match] = await prisma.$transaction([
        prisma.competitiveMatch.create({
          data: {
            player1Id: team1[0].userId,
            player2Id: team2[0].userId,
            gameMode: 'TEAM_BATTLE',
            topicSlug: entry.topicSlug,
            player1MMRBefore: team1AvgMMR,
            player2MMRBefore: team2AvgMMR,
            player1MMRAfter: team1AvgMMR,
            player2MMRAfter: team2AvgMMR,
            player1Score: 0,
            player2Score: 0,
            status: 'IN_PROGRESS',
            startedAt: new Date(),
            gameData: {
              isTeamBattle: true,
              questions,
              team1: {
                players: [team1[0].userId, team1[1].userId],
                score: 0,
                questionIndices: { [team1[0].userId]: 0, [team1[1].userId]: 0 },
                answers: { [team1[0].userId]: [], [team1[1].userId]: [] },
              },
              team2: {
                players: [team2[0].userId, team2[1].userId],
                score: 0,
                questionIndices: { [team2[0].userId]: 0, [team2[1].userId]: 0 },
                answers: { [team2[0].userId]: [], [team2[1].userId]: [] },
              },
              playerMMRs: Object.fromEntries(allPlayers.map(p => [p.userId, p.mmr])),
              player1QuestionIndex: 0,
              player2QuestionIndex: 0,
            } as unknown as Prisma.InputJsonValue,
          },
        }),
        prisma.matchmakingQueue.delete({ where: { id: candidates[0].id } }),
        prisma.matchmakingQueue.delete({ where: { id: candidates[1].id } }),
        prisma.matchmakingQueue.delete({ where: { id: candidates[2].id } }),
        prisma.matchmakingQueue.delete({ where: { id: entry.id } }),
      ])

      return NextResponse.json({ status: 'matched', matchId: match.id })
    }

    const queueSize = await prisma.matchmakingQueue.count({
      where: { topicSlug: entry.topicSlug, gameMode: 'TEAM_BATTLE' },
    })

    return NextResponse.json({
      status: 'in_queue',
      playersInQueue: queueSize,
      playersNeeded: 4,
      waitTime: waitMs,
    })
  } catch (error) {
    console.error('Error checking team queue:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
