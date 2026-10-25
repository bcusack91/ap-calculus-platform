import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { generateMatchQuestions, SPEED_RACE_POOL_SIZE, type MatchTier } from '@/lib/competitive-utils'
import { paceMatchQuestions } from '@/lib/bot-pacing-server'
import { Prisma } from '@prisma/client'
import { teamBattleMatchData } from '@/lib/team-match-create'

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
    // Optional question-difficulty tier — used by the claiming joiner only
    // (MatchmakingQueue has no tier column; no migration).
    const tier: MatchTier | undefined = ['easy', 'medium', 'hard'].includes(body.tier) ? body.tier : undefined

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

    // Check if already in queue (a class match pool entry counts: one queue
    // row per user, and the pool owns it until they leave the pool).
    if (user.matchmakingEntry) {
      if (user.matchmakingEntry.poolId) {
        return NextResponse.json({ status: 'in_class_pool', poolId: user.matchmakingEntry.poolId }, { status: 409 })
      }
      return NextResponse.json({ status: 'already_in_queue' })
    }

    // Clean stale entries (older than 5 min). Public rows only — class pools
    // prune their own waiting lists.
    await prisma.matchmakingQueue.deleteMany({
      where: { poolId: null, joinedAt: { lt: new Date(Date.now() - 5 * 60 * 1000) } },
    })

    // Look for 3 other players already queued for TEAM_BATTLE on this topic,
    // then CLAIM them atomically. Same race as the 1v1 queue but worse: four
    // concurrent joiners could each see the same 3 candidates and spin up
    // multiple overlapping team matches / collide on the queue deletes. Inside
    // the transaction we lock the 3 candidate rows FOR UPDATE (ordered by id to
    // avoid deadlocks between joiners locking the same set), re-confirm all 3 are
    // still queued, then delete-claim them before creating the match. If any
    // candidate was already claimed, we bail and the user falls through to wait.
    const mmrRange = 200
    const completedTopicSlugs = user.topicProgress.map((tp) => tp.topic.slug)

    const claimed = await prisma.$transaction(async (tx) => {
      const found = await tx.matchmakingQueue.findMany({
        where: {
          topicSlug,
          gameMode: 'TEAM_BATTLE',
          // Public queue only: class-pool rows pair inside their own pool.
          poolId: null,
          userId: { not: user.id },
          mmr: { gte: mmr - mmrRange, lte: mmr + mmrRange },
        },
        orderBy: { joinedAt: 'asc' },
        take: 3,
        select: { id: true },
      })
      if (found.length < 3) return null

      // Lock the candidate rows and re-read them. Ordering by id gives a stable
      // lock-acquisition order so two joiners contending for the same players
      // can't deadlock. If fewer than 3 survive the lock, someone else claimed
      // one first — abort the pairing.
      const ids = found.map((c) => c.id)
      const locked = await tx.$queryRaw<Array<{ id: string; userId: string; mmr: number }>>`
        SELECT id, "userId", mmr FROM "MatchmakingQueue" WHERE id IN (${Prisma.join(ids)}) AND "poolId" IS NULL ORDER BY id FOR UPDATE
      `
      if (locked.length < 3) return null
      const candidates = locked.slice(0, 3)

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

      // Team battles are first-to-15 (WIN_SCORE) and cycle questions with a
      // modulo index, so a 15-question buffer repeated once an active player
      // passed it. A deeper pool keeps questions fresh; match length is unchanged
      // (score-based completion).
      const drawn = await generateMatchQuestions(SPEED_RACE_POOL_SIZE, topicSlug, completedTopicSlugs, tier)
      const { questions, pacing } = await paceMatchQuestions(drawn, topicSlug, 'TEAM_BATTLE')

      // Claim the 3 opponents (scoped to the exact locked rows).
      await tx.matchmakingQueue.deleteMany({ where: { id: { in: candidates.map((c) => c.id) } } })

      const match = await tx.competitiveMatch.create({
        data: teamBattleMatchData({
          team1: [team1[0], team1[1]],
          team2: [team2[0], team2[1]],
          topicSlug,
          questions,
          pacing,
          tier,
        }),
      })

      return { matchId: match.id }
    }, { timeout: 15000 })

    if (claimed) {
      return NextResponse.json({
        status: 'matched',
        matchId: claimed.matchId,
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
      where: { topicSlug, gameMode: 'TEAM_BATTLE', poolId: null },
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

    await prisma.matchmakingQueue.deleteMany({ where: { userId: user.id, poolId: null } })

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

    // A class match pool entry is matched by its pool, never here.
    if (entry.poolId) {
      return NextResponse.json({ status: 'in_class_pool', poolId: entry.poolId })
    }

    // Expand MMR range over time
    const waitMs = Date.now() - entry.joinedAt.getTime()
    const mmrRange = waitMs < 10000 ? 200 : waitMs < 30000 ? 400 : 600

    // Try to find 3 opponents and claim them atomically (same race-safe pattern
    // as the POST handler / 1v1 queue): lock the candidate rows FOR UPDATE,
    // re-confirm all 3 survive, then delete-claim them plus our own entry inside
    // one transaction. Bail to "still waiting" if any candidate was taken first.
    const completedTopicSlugs = user.topicProgress.map((tp) => tp.topic.slug)

    const claimed = await prisma.$transaction(async (tx) => {
      const found = await tx.matchmakingQueue.findMany({
        where: {
          topicSlug: entry.topicSlug,
          gameMode: 'TEAM_BATTLE',
          poolId: null,
          userId: { not: user.id },
          mmr: { gte: entry.mmr - mmrRange, lte: entry.mmr + mmrRange },
        },
        orderBy: { joinedAt: 'asc' },
        take: 3,
        select: { id: true },
      })
      if (found.length < 3) return null

      const ids = found.map((c) => c.id)
      const locked = await tx.$queryRaw<Array<{ id: string; userId: string; mmr: number }>>`
        SELECT id, "userId", mmr FROM "MatchmakingQueue" WHERE id IN (${Prisma.join(ids)}) AND "poolId" IS NULL ORDER BY id FOR UPDATE
      `
      if (locked.length < 3) return null
      const candidates = locked.slice(0, 3)

      const allPlayers = [
        { userId: candidates[0].userId, mmr: candidates[0].mmr },
        { userId: candidates[1].userId, mmr: candidates[1].mmr },
        { userId: candidates[2].userId, mmr: candidates[2].mmr },
        { userId: user.id, mmr: entry.mmr },
      ]

      allPlayers.sort((a, b) => b.mmr - a.mmr)
      const team1 = [allPlayers[0], allPlayers[3]]
      const team2 = [allPlayers[1], allPlayers[2]]

      const drawn = await generateMatchQuestions(SPEED_RACE_POOL_SIZE, entry.topicSlug, completedTopicSlugs)
      const { questions, pacing } = await paceMatchQuestions(drawn, entry.topicSlug, 'TEAM_BATTLE')

      // Claim the 3 opponents and remove our own entry in the same tx.
      await tx.matchmakingQueue.deleteMany({ where: { id: { in: candidates.map((c) => c.id) } } })
      await tx.matchmakingQueue.deleteMany({ where: { id: entry.id } })

      const match = await tx.competitiveMatch.create({
        data: teamBattleMatchData({
          team1: [team1[0], team1[1]],
          team2: [team2[0], team2[1]],
          topicSlug: entry.topicSlug,
          questions,
          pacing,
        }),
      })

      return { matchId: match.id }
    }, { timeout: 15000 })

    if (claimed) {
      return NextResponse.json({ status: 'matched', matchId: claimed.matchId })
    }

    const queueSize = await prisma.matchmakingQueue.count({
      where: { topicSlug: entry.topicSlug, gameMode: 'TEAM_BATTLE', poolId: null },
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
