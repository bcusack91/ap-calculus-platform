import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { generateMatchQuestions } from '@/lib/competitive-utils'
import { queueJoinSchema, parseBody } from '@/lib/validations'
import { sweepStaleMatchesForUser } from '../_lib/sweep-stale-matches'
import type { Prisma } from '@prisma/client'

/**
 * Join the matchmaking queue
 * POST /api/competitive/queue
 */
export async function POST(req: NextRequest) {
  try {
    const session = await auth()

    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const parsed = parseBody(queueJoinSchema, body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error }, { status: 400 })
    }
    const { topicSlug, gameMode, tier } = parsed.data

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

    // First reap any abandoned (stale IN_PROGRESS) matches this user is in, so a
    // game they disconnected from doesn't count as a "live match" below and lock
    // them out of requeueing forever. No-op for genuinely active matches.
    await sweepStaleMatchesForUser(user.id)

    // Reject queueing if the user already has a live match (#5). Otherwise a
    // user could sit in an IN_PROGRESS match and simultaneously queue for / get
    // pulled into a second one, ending up in two ranked games at once. Send
    // them back to the existing match instead.
    const existingMatch = await prisma.competitiveMatch.findFirst({
      where: {
        status: 'IN_PROGRESS',
        OR: [{ player1Id: user.id }, { player2Id: user.id }],
      },
      orderBy: { startedAt: 'desc' },
      select: { id: true },
    })

    if (existingMatch) {
      return NextResponse.json({
        status: 'matched',
        matchId: existingMatch.id,
        alreadyInMatch: true,
      })
    }

    // Get topic-specific MMR
    const mmr =
      topicSlug === 'the-unit-circle'
        ? user.competitiveProfile.overallMMR
        : user.competitiveProfile.overallMMR

    // Check if already in queue
    if (user.matchmakingEntry) {
      const queueCount = await prisma.matchmakingQueue.count({
        where: { topicSlug: user.matchmakingEntry.topicSlug },
      })
      return NextResponse.json({
        status: 'already_in_queue',
        position: queueCount,
      })
    }

    // Clean up stale entries (older than 5 minutes)
    await prisma.matchmakingQueue.deleteMany({
      where: { joinedAt: { lt: new Date(Date.now() - 5 * 60 * 1000) } },
    })

    // Try to find an opponent already in the queue.
    //
    // The selection + match creation MUST be atomic. Previously this read an
    // opponent with findFirst and then created the match in a separate step, so
    // two joiners could pick the SAME opponent and either double-book them into
    // two matches or collide on the queue delete (one of them 500ing). Here we
    // re-select and CLAIM the opponent inside a transaction: lock the candidate
    // row FOR UPDATE, confirm it's still queued, then delete-claim it before
    // creating the match. The row lock serialises competing joiners; the loser
    // sees the row already gone and falls through to enqueue itself.
    const mmrRange = 50
    const completedTopicSlugs = user.topicProgress.map((tp) => tp.topic.slug)
    const questionCount = gameMode === 'ACCURACY_CHALLENGE' ? 20 : 10

    const claimed = await prisma.$transaction(async (tx) => {
      // Find a candidate opponent inside the tx.
      const candidate = await tx.matchmakingQueue.findFirst({
        where: {
          topicSlug,
          userId: { not: user.id },
          mmr: { gte: mmr - mmrRange, lte: mmr + mmrRange },
        },
        orderBy: { joinedAt: 'asc' },
        select: { id: true },
      })
      if (!candidate) return null

      // Lock the candidate's queue row, then re-read it under the lock. If a
      // competing joiner already claimed (deleted) it, FOR UPDATE on a vanished
      // row returns nothing and we bail — no double-booking.
      const locked = await tx.$queryRaw<Array<{ id: string; userId: string; mmr: number }>>`
        SELECT id, "userId", mmr FROM "MatchmakingQueue" WHERE id = ${candidate.id} FOR UPDATE
      `
      const opponent = locked[0]
      if (!opponent) return null

      // Atomically claim the opponent: delete their queue entry. (Belt-and-
      // suspenders: scope the delete by id so it only removes the row we locked.)
      await tx.matchmakingQueue.delete({ where: { id: opponent.id } })

      // Tier (question-difficulty mix) comes from the claiming joiner — the
      // MatchmakingQueue row has no tier column (and we don't migrate), so a
      // waiting opponent's tier preference can't be recalled here.
      const questions = await generateMatchQuestions(questionCount, topicSlug, completedTopicSlugs, tier)
      const competitiveMatch = await tx.competitiveMatch.create({
        data: {
          player1Id: opponent.userId,
          player2Id: user.id,
          gameMode: gameMode || 'SPEED_RACE',
          topicSlug,
          player1MMRBefore: opponent.mmr,
          player2MMRBefore: mmr,
          player1MMRAfter: opponent.mmr,
          player2MMRAfter: mmr,
          player1Score: 0,
          player2Score: 0,
          status: 'IN_PROGRESS',
          startedAt: new Date(),
          gameData: {
            questions,
            player1QuestionIndex: 0,
            player2QuestionIndex: 0,
            ...(tier ? { tier } : {}),
          } as unknown as Prisma.InputJsonValue,
        },
      })

      return { matchId: competitiveMatch.id, opponentId: opponent.userId }
    }, { timeout: 15000 })

    if (claimed) {
      return NextResponse.json({
        status: 'matched',
        matchId: claimed.matchId,
        opponent: { id: claimed.opponentId },
      })
    }

    // No match found — add to queue
    await prisma.matchmakingQueue.create({
      data: {
        userId: user.id,
        topicSlug,
        mmr,
        gameMode: gameMode || 'SPEED_RACE',
      },
    })

    const queueSize = await prisma.matchmakingQueue.count({ where: { topicSlug } })

    return NextResponse.json({
      status: 'searching',
      queuePosition: queueSize,
      estimatedWait: estimateWaitTime(queueSize),
    })
  } catch (error) {
    console.error('Error joining queue:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

/**
 * Leave the matchmaking queue
 * DELETE /api/competitive/queue
 */
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
    console.error('Error leaving queue:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

/**
 * Check queue status — also performs expanded-range matching for users who
 * have been waiting longer (MMR range widens over time).
 * GET /api/competitive/queue
 */
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
      // Before redirecting the user back into a "live" match, finalize any stale
      // one they abandoned — otherwise the poller would bounce them forever into
      // a dead game instead of returning not_in_queue.
      await sweepStaleMatchesForUser(user.id)

      // Queue entry may have been deleted by opponent's POST creating a match.
      // Check if the user has an active match they should be redirected to.
      const activeMatch = await prisma.competitiveMatch.findFirst({
        where: {
          status: 'IN_PROGRESS',
          OR: [{ player1Id: user.id }, { player2Id: user.id }],
        },
        orderBy: { startedAt: 'desc' },
        select: { id: true },
      })

      if (activeMatch) {
        return NextResponse.json({
          status: 'matched',
          matchId: activeMatch.id,
        })
      }

      return NextResponse.json({ status: 'not_in_queue' })
    }

    // Expand MMR range based on how long the player has waited
    const waitMs = Date.now() - entry.joinedAt.getTime()
    const mmrRange =
      waitMs < 5000
        ? 50
        : waitMs < 15000
          ? 100
          : waitMs < 30000
            ? 150
            : 250

    // Try to find an opponent with the expanded range, and claim them
    // atomically — same race-safe pattern as the POST handler. Without this,
    // two pollers (or a poller racing a POST) could select the same opponent
    // and create duplicate matches / collide on the queue deletes. We lock the
    // candidate's row, re-check it's still queued, then delete-claim both the
    // opponent's entry AND our own entry inside one transaction.
    const completedTopicSlugs = user.topicProgress.map((tp) => tp.topic.slug)
    const questionCount = (entry.gameMode as string) === 'ACCURACY_CHALLENGE' ? 20 : 10

    const claimed = await prisma.$transaction(async (tx) => {
      const candidate = await tx.matchmakingQueue.findFirst({
        where: {
          topicSlug: entry.topicSlug,
          userId: { not: user.id },
          mmr: { gte: entry.mmr - mmrRange, lte: entry.mmr + mmrRange },
        },
        orderBy: { joinedAt: 'asc' },
        select: { id: true },
      })
      if (!candidate) return null

      // Lock + re-read the candidate. If a competitor already claimed it, the
      // locked read returns nothing and we bail (fall through to "still waiting").
      const locked = await tx.$queryRaw<Array<{ id: string; userId: string; mmr: number }>>`
        SELECT id, "userId", mmr FROM "MatchmakingQueue" WHERE id = ${candidate.id} FOR UPDATE
      `
      const opponent = locked[0]
      if (!opponent) return null

      // Claim the opponent and remove our own queue entry in the same tx.
      // deleteMany (not delete) for our own entry so a concurrently-consumed
      // entry is a no-op rather than a P2025 that rolls back the whole pairing.
      await tx.matchmakingQueue.delete({ where: { id: opponent.id } })
      await tx.matchmakingQueue.deleteMany({ where: { id: entry.id } })

      const questions = await generateMatchQuestions(questionCount, entry.topicSlug, completedTopicSlugs)
      const competitiveMatch = await tx.competitiveMatch.create({
        data: {
          player1Id: opponent.userId,
          player2Id: user.id,
          gameMode: (entry.gameMode as 'SPEED_RACE') || 'SPEED_RACE',
          topicSlug: entry.topicSlug,
          player1MMRBefore: opponent.mmr,
          player2MMRBefore: entry.mmr,
          player1MMRAfter: opponent.mmr,
          player2MMRAfter: entry.mmr,
          player1Score: 0,
          player2Score: 0,
          status: 'IN_PROGRESS',
          startedAt: new Date(),
          gameData: {
            questions,
            player1QuestionIndex: 0,
            player2QuestionIndex: 0,
          } as unknown as Prisma.InputJsonValue,
        },
      })

      return { matchId: competitiveMatch.id }
    }, { timeout: 15000 })

    if (claimed) {
      return NextResponse.json({
        status: 'matched',
        matchId: claimed.matchId,
      })
    }

    // Still waiting
    const position = await prisma.matchmakingQueue.count({
      where: { topicSlug: entry.topicSlug, joinedAt: { lte: entry.joinedAt } },
    })

    return NextResponse.json({
      status: 'in_queue',
      position,
      waitTime: waitMs,
      topicSlug: entry.topicSlug,
    })
  } catch (error) {
    console.error('Error checking queue:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

function estimateWaitTime(queueSize: number): number {
  if (queueSize >= 2) return 5
  if (queueSize === 1) return 15
  return 30
}
