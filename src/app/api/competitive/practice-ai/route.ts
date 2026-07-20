import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { generateMatchQuestions, type MatchTier } from '@/lib/competitive-utils'
import type { Prisma } from '@prisma/client'

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
    // Optional question-difficulty tier (distinct from aiDifficulty = bot strength)
    const tier: MatchTier | undefined = ['easy', 'medium', 'hard'].includes(body.tier) ? body.tier : undefined

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        competitiveProfile: true,
        topicProgress: {
          where: {
            status: { in: ['COMPLETED', 'MASTERED'] },
            masteryLevel: { gte: 0.8 }
          },
          include: { topic: { select: { slug: true } } }
        }
      }
    })

    if (!user?.competitiveProfile) {
      return NextResponse.json({ error: 'Competitive mode not unlocked' }, { status: 403 })
    }

    // Helper to get or create an AI bot user
    async function getOrCreateAIBot(email: string, name: string) {
      let bot = await prisma.user.findUnique({
        where: { email },
        include: { competitiveProfile: true }
      })
      if (!bot) {
        bot = await prisma.user.create({
          data: {
            email,
            name,
            role: 'FREE',
            competitiveProfile: {
              create: {
                competitiveModeUnlocked: true,
                overallMMR: 1000,
              }
            }
          },
          include: { competitiveProfile: true }
        })
      }
      return bot
    }

    // Calculate AI MMR based on difficulty
    const playerMMR = user.competitiveProfile.overallMMR || 1000
    let aiMMR = playerMMR
    switch (aiDifficulty) {
      case 'easy':
        aiMMR = Math.max(800, playerMMR - 200)
        break
      case 'medium':
        aiMMR = playerMMR
        break
      case 'hard':
        aiMMR = playerMMR + 200
        break
    }

    // Generate questions for the match based on selected topic
    const completedTopicSlugs = user.topicProgress.map(tp => tp.topic.slug)

    // ---- TEAM BATTLE: create 3 AI bots + team match ----
    if (gameMode === 'TEAM_BATTLE') {
      const [aiTeammate, aiOpp1, aiOpp2] = await Promise.all([
        getOrCreateAIBot('ai-teammate@studyai.com', 'AI Teammate'),
        getOrCreateAIBot('ai-opponent@studyai.com', 'AI Opponent 1'),
        getOrCreateAIBot('ai-opponent-2@studyai.com', 'AI Opponent 2'),
      ])

      const questions = await generateMatchQuestions(15, topicSlug, completedTopicSlugs, tier)

      const team1Players = [user.id, aiTeammate.id]
      const team2Players = [aiOpp1.id, aiOpp2.id]

      const competitiveMatch = await prisma.competitiveMatch.create({
        data: {
          player1Id: user.id,
          player2Id: aiOpp1.id,
          gameMode: 'TEAM_BATTLE',
          topicSlug: topicSlug || 'the-unit-circle',
          player1MMRBefore: playerMMR,
          player2MMRBefore: aiMMR,
          player1MMRAfter: playerMMR,
          player2MMRAfter: aiMMR,
          player1Score: 0,
          player2Score: 0,
          status: 'IN_PROGRESS',
          startedAt: new Date(),
          gameData: {
            isTeamBattle: true,
            questions,
            team1: {
              players: team1Players,
              score: 0,
              questionIndices: { [user.id]: 0, [aiTeammate.id]: 0 },
              answers: { [user.id]: [], [aiTeammate.id]: [] },
            },
            team2: {
              players: team2Players,
              score: 0,
              questionIndices: { [aiOpp1.id]: 0, [aiOpp2.id]: 0 },
              answers: { [aiOpp1.id]: [], [aiOpp2.id]: [] },
            },
            playerMMRs: {
              [user.id]: playerMMR,
              [aiTeammate.id]: aiMMR,
              [aiOpp1.id]: aiMMR,
              [aiOpp2.id]: aiMMR,
            },
            player1QuestionIndex: 0,
            player2QuestionIndex: 0,
            aiDifficulty,
            isPracticeMatch: true,
            ...(tier ? { tier } : {}),
          } as unknown as Prisma.InputJsonValue,
        }
      })

      return NextResponse.json({
        status: 'matched',
        matchId: competitiveMatch.id,
        isTeamMatch: true,
      })
    }

    // ---- Standard 1v1 match ----
    const aiOpponent = await getOrCreateAIBot('ai-opponent@studyai.com', 'AI Practice Bot')
    const questionCount = gameMode === 'ACCURACY_CHALLENGE' ? 20 : 10
    const questions = await generateMatchQuestions(questionCount, topicSlug, completedTopicSlugs, tier)
    
    const competitiveMatch = await prisma.competitiveMatch.create({
      data: {
        player1Id: user.id,
        player2Id: aiOpponent.id,
        gameMode: gameMode || 'SPEED_RACE',
        topicSlug: topicSlug || 'the-unit-circle',
        player1MMRBefore: playerMMR,
        player2MMRBefore: aiMMR,
        player1MMRAfter: playerMMR,
        player2MMRAfter: aiMMR,
        player1Score: 0,
        player2Score: 0,
        status: 'IN_PROGRESS',
        startedAt: new Date(),
        gameData: {
          questions,
          player1QuestionIndex: 0,
          player2QuestionIndex: 0,
          aiDifficulty,
          isPracticeMatch: true,
          ...(tier ? { tier } : {}),
        } as unknown as Prisma.InputJsonValue,
      }
    })

    return NextResponse.json({
      status: 'matched',
      matchId: competitiveMatch.id,
      isTeamMatch: false,
      opponent: {
        id: aiOpponent.id,
        name: 'AI Practice Bot',
        isAI: true,
        difficulty: aiDifficulty
      }
    })

  } catch (error) {
    console.error('Error creating AI practice match:', error)
    console.error('Error details:', JSON.stringify(error, null, 2))
    return NextResponse.json({ 
      error: 'Internal server error', 
      details: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 })
  }
}