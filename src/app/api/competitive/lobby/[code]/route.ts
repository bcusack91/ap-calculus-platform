import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { normalizeLobbyCode } from '@/lib/lobby-codes'

// GET lobby state (poll endpoint) — both players + current match summary
export async function GET(
  _req: NextRequest,
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

  const lobby = await prisma.competitiveLobby.findUnique({
    where: { code },
    include: {
      host: { select: { id: true, name: true, image: true } },
      guest: { select: { id: true, name: true, image: true } },
    },
  })
  if (!lobby) return NextResponse.json({ error: 'Lobby not found' }, { status: 404 })

  if (lobby.hostId !== userId && lobby.guestId !== userId) {
    return NextResponse.json({ error: 'Not a participant' }, { status: 403 })
  }

  let currentMatch: {
    id: string
    status: string
    winnerId: string | null
    player1Id: string
    player2Id: string
    player1Score: number
    player2Score: number
    topicSlug: string
    gameMode: string
    completedAt: Date | null
  } | null = null
  if (lobby.currentMatchId) {
    const m = await prisma.competitiveMatch.findUnique({
      where: { id: lobby.currentMatchId },
      select: {
        id: true,
        status: true,
        winnerId: true,
        player1Id: true,
        player2Id: true,
        player1Score: true,
        player2Score: true,
        topicSlug: true,
        gameMode: true,
        completedAt: true,
      },
    })
    if (m) currentMatch = { ...m, status: String(m.status), gameMode: String(m.gameMode) }
  }

  return NextResponse.json({
    code: lobby.code,
    status: lobby.status,
    youAreHost: lobby.hostId === userId,
    host: lobby.host,
    guest: lobby.guest,
    currentMatch,
    lastMatchId: lobby.lastMatchId,
    closedAt: lobby.closedAt,
  })
}
