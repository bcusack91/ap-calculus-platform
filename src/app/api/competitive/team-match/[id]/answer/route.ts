import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { calculateMMRChange, getRankFromMMR } from '@/lib/competitive-utils'
import type { Prisma } from '@prisma/client'

interface TeamData {
  players: string[]
  score: number
  questionIndices: Record<string, number>
  answers: Record<string, Array<{ questionIndex: number; answerIndex: number; correct: boolean }>>
}

interface TeamGameData {
  isTeamBattle: boolean
  questions: Array<{ answerIndex?: number; options?: string[]; [key: string]: unknown }>
  team1: TeamData
  team2: TeamData
  playerMMRs: Record<string, number>
  player1QuestionIndex?: number
  player2QuestionIndex?: number
  isPracticeMatch?: boolean
}

const WIN_SCORE = 15 // Team battles: first team to 15 wins

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id: matchId } = await params
    const body = await request.json()
    const questionIndex = typeof body.questionIndex === 'number' ? body.questionIndex : -1
    const answerIndex = typeof body.answerIndex === 'number' ? body.answerIndex : -1

    if (questionIndex < 0 || answerIndex < 0) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
    }

    // The entire read-modify-write of gameData runs inside one transaction with a
    // row-level lock (#4). Two teammates answering at the same moment would
    // otherwise each read the old gameData, mutate their copy, and the later
    // write would clobber the earlier one (lost-update → dropped points / wrong
    // question indices). FOR UPDATE serialises them.
    const result = await prisma.$transaction(async (tx) => {
      await tx.$queryRaw`SELECT id FROM "CompetitiveMatch" WHERE id = ${matchId} FOR UPDATE`

      const match = await tx.competitiveMatch.findUnique({
        where: { id: matchId },
      })

      if (!match) {
        return { error: 'Match not found', status: 404 }
      }

      if (match.status !== 'IN_PROGRESS') {
        return { error: 'Match is not in progress', status: 400 }
      }

      const gameData = match.gameData as unknown as TeamGameData | null
      if (!gameData?.isTeamBattle) {
        return { error: 'Not a team battle match', status: 400 }
      }

      const isPracticeMatch = (gameData as unknown as Record<string, unknown>).isPracticeMatch === true

      // Support playerId override for AI bot submissions (only allowed in AI practice matches)
      const userId = (body.playerId && isPracticeMatch)
        ? body.playerId
        : session.user.id
      const isTeam1 = gameData.team1.players.includes(userId)
      const isTeam2 = gameData.team2.players.includes(userId)

      if (!isTeam1 && !isTeam2) {
        return { error: 'Unauthorized', status: 403 }
      }

      const myTeam = isTeam1 ? gameData.team1 : gameData.team2
      const myQuestionIndex = myTeam.questionIndices[userId] ?? 0

      if (questionIndex !== myQuestionIndex) {
        return { error: 'Invalid question index', status: 400 }
      }

      // Check answer — null-guard the question so a bad/out-of-range index
      // returns 400 instead of throwing on `.answerIndex` of undefined (#4).
      const questions = gameData.questions
      const currentQuestion = questions[questionIndex]
      if (!currentQuestion) {
        return { error: 'Invalid question index', status: 400 }
      }
      const isCorrect = answerIndex === currentQuestion.answerIndex
      // Returned so the client can show right/wrong feedback without the GET
      // route shipping the answer up-front for ranked play (#1).
      const correctAnswerIndex = currentQuestion.answerIndex ?? null

      // Record answer
      if (!myTeam.answers[userId]) myTeam.answers[userId] = []
      myTeam.answers[userId].push({ questionIndex, answerIndex, correct: isCorrect })

      // Update team score
      if (isCorrect) {
        myTeam.score += 1
      } else {
        myTeam.score = Math.max(0, myTeam.score - 1)
      }

      // Advance player's question index (wrap around)
      myTeam.questionIndices[userId] = (myQuestionIndex + 1) % questions.length

      // Check win condition
      const matchComplete = gameData.team1.score >= WIN_SCORE || gameData.team2.score >= WIN_SCORE

      if (matchComplete) {
        const winningTeamNum = gameData.team1.score >= WIN_SCORE ? 1 : 2
        const winningTeam = winningTeamNum === 1 ? gameData.team1 : gameData.team2
        const losingTeam = winningTeamNum === 1 ? gameData.team2 : gameData.team1

        // winnerId = lead player of winning team (player1Id or player2Id)
        const winnerId = winningTeamNum === 1 ? match.player1Id : match.player2Id

        // ---- Practice matches: finalize the RECORD only, never touch ranked
        // stats / MMR history (#2). Otherwise a player could farm wins vs bots. ----
        if (isPracticeMatch) {
          await tx.competitiveMatch.update({
            where: { id: matchId },
            data: {
              status: 'COMPLETED',
              winnerId,
              completedAt: new Date(),
              player1Score: gameData.team1.score,
              player2Score: gameData.team2.score,
              gameData: gameData as unknown as Prisma.InputJsonValue,
            },
          })

          return {
            data: {
              correct: isCorrect,
              correctAnswerIndex,
              matchComplete: true,
              winningTeam: winningTeamNum,
              team1Score: gameData.team1.score,
              team2Score: gameData.team2.score,
            },
            status: 200,
          }
        }

        const winAvgMMR = Math.round(
          winningTeam.players.reduce((s, id) => s + (gameData.playerMMRs[id] || 1000), 0) / 2
        )
        const loseAvgMMR = Math.round(
          losingTeam.players.reduce((s, id) => s + (gameData.playerMMRs[id] || 1000), 0) / 2
        )

        // Update all 4 players' profiles
        const allPlayerIds = [...winningTeam.players, ...losingTeam.players]
        const profiles = await tx.competitiveProfile.findMany({
          where: { userId: { in: allPlayerIds } },
        })

        for (const profile of profiles) {
          const isWinner = winningTeam.players.includes(profile.userId)
          const playerMMR = gameData.playerMMRs[profile.userId] || profile.overallMMR
          const opponentAvgMMR = isWinner ? loseAvgMMR : winAvgMMR
          const mmrChange = calculateMMRChange(playerMMR, opponentAvgMMR, isWinner, profile.totalMatches)
          const newMMR = playerMMR + mmrChange

          await tx.competitiveProfile.update({
            where: { userId: profile.userId },
            data: {
              overallMMR: newMMR,
              totalMatches: { increment: 1 },
              wins: isWinner ? { increment: 1 } : undefined,
              losses: !isWinner ? { increment: 1 } : undefined,
              winStreak: isWinner ? { increment: 1 } : 0,
              bestWinStreak: isWinner
                ? Math.max(profile.winStreak + 1, profile.bestWinStreak)
                : undefined,
              rank: getRankFromMMR(newMMR),
            },
          })

          await tx.mMRHistory.create({
            data: {
              userId: profile.userId,
              matchId,
              topicSlug: match.topicSlug,
              mmrBefore: playerMMR,
              mmrAfter: newMMR,
              mmrChange,
              gameMode: 'TEAM_BATTLE',
              performance: JSON.stringify({
                team: winningTeam.players.includes(profile.userId) ? 'winning' : 'losing',
                teamScore: isWinner ? winningTeam.score : losingTeam.score,
              }),
            },
          })
        }

        // Calculate team avg MMR after
        const team1AfterMMR = Math.round(
          gameData.team1.players.reduce((s, id) => {
            const p = profiles.find(pr => pr.userId === id)
            const before = gameData.playerMMRs[id] || 1000
            const isW = winningTeam.players.includes(id)
            return s + before + calculateMMRChange(before, isW ? loseAvgMMR : winAvgMMR, isW, p?.totalMatches || 0)
          }, 0) / 2
        )
        const team2AfterMMR = Math.round(
          gameData.team2.players.reduce((s, id) => {
            const p = profiles.find(pr => pr.userId === id)
            const before = gameData.playerMMRs[id] || 1000
            const isW = winningTeam.players.includes(id)
            return s + before + calculateMMRChange(before, isW ? loseAvgMMR : winAvgMMR, isW, p?.totalMatches || 0)
          }, 0) / 2
        )

        await tx.competitiveMatch.update({
          where: { id: matchId },
          data: {
            status: 'COMPLETED',
            winnerId,
            completedAt: new Date(),
            player1Score: gameData.team1.score,
            player2Score: gameData.team2.score,
            player1MMRAfter: team1AfterMMR,
            player2MMRAfter: team2AfterMMR,
            gameData: gameData as unknown as Prisma.InputJsonValue,
          },
        })

        return {
          data: {
            correct: isCorrect,
            correctAnswerIndex,
            matchComplete: true,
            winningTeam: winningTeamNum,
            team1Score: gameData.team1.score,
            team2Score: gameData.team2.score,
          },
          status: 200,
        }
      }

      // Match continues
      await tx.competitiveMatch.update({
        where: { id: matchId },
        data: {
          player1Score: gameData.team1.score,
          player2Score: gameData.team2.score,
          gameData: gameData as unknown as Prisma.InputJsonValue,
        },
      })

      return {
        data: {
          correct: isCorrect,
          correctAnswerIndex,
          matchComplete: false,
          myTeamScore: myTeam.score,
          opponentTeamScore: isTeam1 ? gameData.team2.score : gameData.team1.score,
        },
        status: 200,
      }
    }, { timeout: 15000 })

    if ('error' in result) {
      return NextResponse.json({ error: result.error }, { status: result.status })
    }
    return NextResponse.json(result.data, { status: result.status })
  } catch (error) {
    console.error('Error submitting team answer:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
