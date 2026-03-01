import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { generateMatchQuestions } from '@/lib/competitive-utils'
import { queueJoinSchema, parseBody } from '@/lib/validations'
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
    const { topicSlug, gameMode } = parsed.data

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

    // Get topic-specific MMR
    const mmr =
      topicSlug === 'the-unit-circle'
        ? user.competitiveProfile.unitCircleMMR
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

    // Try to find an opponent already in the queue
    const mmrRange = 50
    const opponent = await prisma.matchmakingQueue.findFirst({
      where: {
        topicSlug,
        userId: { not: user.id },
        mmr: { gte: mmr - mmrRange, lte: mmr + mmrRange },
      },
      orderBy: { joinedAt: 'asc' },
    })

    if (opponent) {
      // Found a match — generate questions, create match, remove opponent from queue
      const completedTopicSlugs = user.topicProgress.map((tp) => tp.topic.slug)
      const questions = generateMatchQuestions(10, topicSlug, completedTopicSlugs)

      const [competitiveMatch] = await prisma.$transaction([
        prisma.competitiveMatch.create({
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
            } as unknown as Prisma.InputJsonValue,
          },
        }),
        prisma.matchmakingQueue.delete({ where: { id: opponent.id } }),
      ])

      return NextResponse.json({
        status: 'matched',
        matchId: competitiveMatch.id,
        opponent: { id: opponent.userId },
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

    // Try to find an opponent with the expanded range
    const opponent = await prisma.matchmakingQueue.findFirst({
      where: {
        topicSlug: entry.topicSlug,
        userId: { not: user.id },
        mmr: { gte: entry.mmr - mmrRange, lte: entry.mmr + mmrRange },
      },
      orderBy: { joinedAt: 'asc' },
    })

    if (opponent) {
      const completedTopicSlugs = user.topicProgress.map((tp) => tp.topic.slug)
      const questions = generateMatchQuestions(10, entry.topicSlug, completedTopicSlugs)

      const [competitiveMatch] = await prisma.$transaction([
        prisma.competitiveMatch.create({
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
        }),
        prisma.matchmakingQueue.delete({ where: { id: opponent.id } }),
        prisma.matchmakingQueue.delete({ where: { id: entry.id } }),
      ])

      return NextResponse.json({
        status: 'matched',
        matchId: competitiveMatch.id,
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
