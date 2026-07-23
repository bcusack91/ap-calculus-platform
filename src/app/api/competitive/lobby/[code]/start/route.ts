import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { generateMatchQuestions, matchQuestionCount } from '@/lib/competitive-utils'
import { normalizeLobbyCode } from '@/lib/lobby-codes'
import type { Prisma, CompetitiveMode } from '@prisma/client'

// Host starts a new match in the lobby with a chosen topic + game mode
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const userId = session.user.id

  const { code: rawCode } = await params
  const code = normalizeLobbyCode(rawCode)
  if (!code) return NextResponse.json({ error: 'Invalid code' }, { status: 400 })

  const body = await req.json().catch(() => ({}))
  const topicSlug: string = typeof body?.topicSlug === 'string' ? body.topicSlug : ''
  const gameModeRaw: string = typeof body?.gameMode === 'string' ? body.gameMode : 'SPEED_RACE'
  const allowedModes: CompetitiveMode[] = ['SPEED_RACE', 'ACCURACY_CHALLENGE']
  const gameMode = (allowedModes as string[]).includes(gameModeRaw)
    ? (gameModeRaw as CompetitiveMode)
    : 'SPEED_RACE'

  if (!topicSlug) {
    return NextResponse.json({ error: 'topicSlug is required' }, { status: 400 })
  }

  const lobby = await prisma.competitiveLobby.findUnique({
    where: { code },
    include: {
      host: { include: { competitiveProfile: true } },
      guest: { include: { competitiveProfile: true } },
    },
  })
  if (!lobby) return NextResponse.json({ error: 'Lobby not found' }, { status: 404 })
  if (lobby.hostId !== userId) {
    return NextResponse.json({ error: 'Only the host can start a match' }, { status: 403 })
  }
  if (!lobby.guestId || !lobby.guest) {
    return NextResponse.json({ error: 'Waiting for an opponent to join' }, { status: 400 })
  }
  if (lobby.status === 'IN_MATCH') {
    return NextResponse.json({ matchId: lobby.currentMatchId, status: 'already_in_match' })
  }
  if (lobby.status === 'CLOSED') {
    return NextResponse.json({ error: 'Lobby closed' }, { status: 400 })
  }

  const hostMMR = lobby.host.competitiveProfile?.overallMMR ?? 1000
  const guestMMR = lobby.guest.competitiveProfile?.overallMMR ?? 1000

  // Private-lobby matches run through the standard match/answer route, which
  // cycles questions with a modulo index — a shallow buffer repeated the same
  // 10 as soon as a player passed question 10. See matchQuestionCount.
  const questionCount = matchQuestionCount(gameMode)
  const questions = await generateMatchQuestions(questionCount, topicSlug, [])

  const match = await prisma.competitiveMatch.create({
    data: {
      player1Id: lobby.hostId,
      player2Id: lobby.guestId,
      gameMode,
      topicSlug,
      player1MMRBefore: hostMMR,
      player2MMRBefore: guestMMR,
      player1MMRAfter: hostMMR,
      player2MMRAfter: guestMMR,
      status: 'IN_PROGRESS',
      startedAt: new Date(),
      gameData: {
        questions,
        player1QuestionIndex: 0,
        player2QuestionIndex: 0,
        lobbyCode: code,
      } as unknown as Prisma.InputJsonValue,
    },
  })

  await prisma.competitiveLobby.update({
    where: { id: lobby.id },
    data: { status: 'IN_MATCH', currentMatchId: match.id },
  })

  return NextResponse.json({ matchId: match.id, status: 'started' })
}
