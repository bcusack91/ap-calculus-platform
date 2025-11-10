import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { generateMatchQuestions } from '@/lib/competitive-utils'

/**
 * Create a practice match against an AI opponent
 * POST /api/competitive/practice-ai
 * 
 * This is for testing and practice - creates an instant match with a simulated AI opponent
 */
export async function POST(req: NextRequest) {
  try {
    const session = await auth()
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const { topicSlug, gameMode, aiDifficulty = 'medium' } = body

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: { competitiveProfile: true }
    })

    if (!user?.competitiveProfile) {
      return NextResponse.json({ error: 'Competitive mode not unlocked' }, { status: 403 })
    }

    // Get or create AI opponent user
    let aiOpponent = await prisma.user.findUnique({
      where: { email: 'ai-opponent@studyai.com' },
      include: { competitiveProfile: true }
    })

    if (!aiOpponent) {
      // Create AI opponent user
      aiOpponent = await prisma.user.create({
        data: {
          email: 'ai-opponent@studyai.com',
          name: 'AI Practice Bot',
          role: 'FREE',
          competitiveProfile: {
            create: {
              competitiveModeUnlocked: true,
              unitCircleMMR: 1000,
              overallMMR: 1000,
            }
          }
        },
        include: { competitiveProfile: true }
      })
    }

    // Calculate AI MMR based on difficulty
    let aiMMR = user.competitiveProfile.unitCircleMMR || 1000
    switch (aiDifficulty) {
      case 'easy':
        aiMMR = Math.max(800, aiMMR - 200) // 200 MMR below player
        break
      case 'medium':
        aiMMR = aiMMR // Same MMR as player
        break
      case 'hard':
        aiMMR = aiMMR + 200 // 200 MMR above player
        break
    }

    // Generate questions for the match
    const questions = generateMatchQuestions(10)
    
    // Create practice match in database
    const competitiveMatch = await prisma.competitiveMatch.create({
      data: {
        player1Id: user.id,
        player2Id: aiOpponent.id,
        gameMode: gameMode || 'SPEED_RACE',
        topicSlug: topicSlug || 'the-unit-circle',
        player1MMRBefore: user.competitiveProfile.unitCircleMMR || 1000,
        player2MMRBefore: aiMMR,
        player1MMRAfter: user.competitiveProfile.unitCircleMMR || 1000,
        player2MMRAfter: aiMMR,
        player1Score: 0,
        player2Score: 0,
        status: 'IN_PROGRESS',
        startedAt: new Date(),
        gameData: {
          questions,
          player1QuestionIndex: 0,
          player2QuestionIndex: 0,
          aiDifficulty, // Store AI difficulty for answer simulation
          isPracticeMatch: true, // Flag to indicate this is practice
        },
      }
    })

    return NextResponse.json({
      status: 'matched',
      matchId: competitiveMatch.id,
      opponent: {
        id: aiOpponent.id,
        name: 'AI Practice Bot',
        isAI: true,
        difficulty: aiDifficulty
      }
    })

  } catch (error) {
    console.error('Error creating AI practice match:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
