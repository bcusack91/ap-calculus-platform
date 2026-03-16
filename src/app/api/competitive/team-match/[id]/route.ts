import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

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
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id: matchId } = await params

    const match = await prisma.competitiveMatch.findUnique({
      where: { id: matchId },
      include: {
        player1: { select: { id: true, name: true, avatarData: true } },
        player2: { select: { id: true, name: true, avatarData: true } },
      },
    })

    if (!match) {
      return NextResponse.json({ error: 'Match not found' }, { status: 404 })
    }

    const gameData = match.gameData as unknown as TeamGameData | null
    if (!gameData?.isTeamBattle) {
      return NextResponse.json({ error: 'Not a team battle match' }, { status: 400 })
    }

    // Verify user is a participant
    const allPlayers = [...(gameData.team1?.players || []), ...(gameData.team2?.players || [])]
    if (!allPlayers.includes(session.user.id)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    // Fetch all 4 player names
    const playerRecords = await prisma.user.findMany({
      where: { id: { in: allPlayers } },
      select: { id: true, name: true, avatarData: true },
    })
    const playerMap = Object.fromEntries(playerRecords.map(p => [p.id, p]))

    // Determine which team the current user is on
    const isTeam1 = gameData.team1.players.includes(session.user.id)
    const myTeam = isTeam1 ? gameData.team1 : gameData.team2
    const myQuestionIndex = myTeam.questionIndices[session.user.id] ?? 0

    return NextResponse.json({
      match: {
        id: match.id,
        status: match.status,
        topicSlug: match.topicSlug,
        winnerId: match.winnerId,
        startedAt: match.startedAt?.toISOString(),
        completedAt: match.completedAt?.toISOString(),
        team1: {
          players: gameData.team1.players.map(id => ({
            id,
            name: playerMap[id]?.name || 'Player',
            avatar: playerMap[id]?.avatarData,
          })),
          score: gameData.team1.score,
        },
        team2: {
          players: gameData.team2.players.map(id => ({
            id,
            name: playerMap[id]?.name || 'Player',
            avatar: playerMap[id]?.avatarData,
          })),
          score: gameData.team2.score,
        },
        questions: gameData.questions,
        myQuestionIndex,
        myTeam: isTeam1 ? 1 : 2,
        player1MMRBefore: match.player1MMRBefore,
        player2MMRBefore: match.player2MMRBefore,
        player1MMRAfter: match.player1MMRAfter,
        player2MMRAfter: match.player2MMRAfter,
        // Expose AI practice data so client can simulate bot answers
        ...((gameData as unknown as Record<string, unknown>).isPracticeMatch ? {
          isPracticeMatch: true,
          aiDifficulty: (gameData as unknown as Record<string, unknown>).aiDifficulty || 'medium',
          questionIndices: {
            ...gameData.team1.questionIndices,
            ...gameData.team2.questionIndices,
          },
        } : {}),
      },
      currentUserId: session.user.id,
    })
  } catch (error) {
    console.error('Error fetching team match:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
