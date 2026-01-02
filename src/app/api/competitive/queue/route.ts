import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { generateMatchQuestions } from '@/lib/competitive-utils'

// In-memory matchmaking queue (would use Redis in production)
const matchmakingQueue: Map<string, {
  userId: string
  topicSlug: string
  mmr: number
  joinedAt: number
}> = new Map()

// Store matches that have been created but players haven't been notified yet
const pendingMatches: Map<string, string> = new Map() // userId -> matchId

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
    const { topicSlug, gameMode } = body

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: { competitiveProfile: true }
    })

    if (!user?.competitiveProfile) {
      return NextResponse.json({ error: 'Competitive mode not unlocked' }, { status: 403 })
    }

    // Get topic-specific MMR
    const mmr = topicSlug === 'the-unit-circle' 
      ? user.competitiveProfile.unitCircleMMR
      : user.competitiveProfile.overallMMR

    // Check if already in queue
    if (matchmakingQueue.has(user.id)) {
      return NextResponse.json({ 
        status: 'already_in_queue',
        position: Array.from(matchmakingQueue.keys()).indexOf(user.id) + 1
      })
    }

    // Try to find a match
    const match = findMatch(user.id, mmr, topicSlug)

    if (match) {
      // Generate questions for the match with topic-specific content
      const questions = generateMatchQuestions(10, topicSlug);
      
      // Create match in database
      const competitiveMatch = await prisma.competitiveMatch.create({
        data: {
          player1Id: match.player1Id,
          player2Id: match.player2Id,
          gameMode: gameMode || 'SPEED_RACE',
          topicSlug,
          player1MMRBefore: match.player1MMR,
          player2MMRBefore: match.player2MMR,
          player1MMRAfter: match.player1MMR, // Will update after match
          player2MMRAfter: match.player2MMR,
          player1Score: 0,
          player2Score: 0,
          status: 'IN_PROGRESS',
          startedAt: new Date(),
          gameData: {
            questions,
            player1QuestionIndex: 0,
            player2QuestionIndex: 0,
          },
        }
      })

      // Remove both players from queue
      matchmakingQueue.delete(match.player1Id)
      matchmakingQueue.delete(match.player2Id)

      // Store match for both players so they can retrieve it
      pendingMatches.set(match.player1Id, competitiveMatch.id)
      pendingMatches.set(match.player2Id, competitiveMatch.id)

      return NextResponse.json({
        status: 'matched',
        matchId: competitiveMatch.id,
        opponent: {
          id: match.player1Id === user.id ? match.player2Id : match.player1Id
        }
      })
    }

    // Add to queue
    matchmakingQueue.set(user.id, {
      userId: user.id,
      topicSlug,
      mmr,
      joinedAt: Date.now()
    })

    return NextResponse.json({
      status: 'searching',
      queuePosition: matchmakingQueue.size,
      estimatedWait: estimateWaitTime(matchmakingQueue.size)
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
export async function DELETE(req: NextRequest) {
  try {
    const session = await auth()
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    matchmakingQueue.delete(user.id)

    return NextResponse.json({ status: 'left_queue' })

  } catch (error) {
    console.error('Error leaving queue:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

/**
 * Check queue status
 * GET /api/competitive/queue
 */
export async function GET(req: NextRequest) {
  try {
    const session = await auth()
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Check if user has a pending match
    const pendingMatchId = pendingMatches.get(user.id)
    if (pendingMatchId) {
      // Clear the pending match and return it
      pendingMatches.delete(user.id)
      return NextResponse.json({
        status: 'matched',
        matchId: pendingMatchId
      })
    }

    const queueEntry = matchmakingQueue.get(user.id)

    if (!queueEntry) {
      return NextResponse.json({ status: 'not_in_queue' })
    }

    const position = Array.from(matchmakingQueue.keys()).indexOf(user.id) + 1
    const waitTime = Date.now() - queueEntry.joinedAt

    return NextResponse.json({
      status: 'in_queue',
      position,
      waitTime,
      topicSlug: queueEntry.topicSlug
    })

  } catch (error) {
    console.error('Error checking queue:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// Helper functions

function findMatch(userId: string, mmr: number, topicSlug: string) {
  const waitTime = Date.now() - (matchmakingQueue.get(userId)?.joinedAt || Date.now())
  
  // Expand MMR range based on wait time
  const mmrRange = 
    waitTime < 5000 ? 50 :
    waitTime < 15000 ? 100 :
    waitTime < 30000 ? 150 :
    250

  for (const [opponentId, opponent] of matchmakingQueue.entries()) {
    if (opponentId === userId) continue
    if (opponent.topicSlug !== topicSlug) continue
    
    const mmrDiff = Math.abs(opponent.mmr - mmr)
    
    if (mmrDiff <= mmrRange) {
      return {
        player1Id: userId,
        player2Id: opponentId,
        player1MMR: mmr,
        player2MMR: opponent.mmr
      }
    }
  }

  return null
}

function estimateWaitTime(queueSize: number): number {
  // Simple estimation: fewer players = longer wait
  if (queueSize === 1) return 30 // 30 seconds
  if (queueSize <= 3) return 15
  if (queueSize <= 10) return 5
  return 2
}
