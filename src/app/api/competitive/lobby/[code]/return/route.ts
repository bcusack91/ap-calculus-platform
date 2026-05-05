import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { normalizeLobbyCode } from '@/lib/lobby-codes'

// Both players have seen the results — reset lobby to WAITING so they can pick another challenge
export async function POST(
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

  const lobby = await prisma.competitiveLobby.findUnique({ where: { code } })
  if (!lobby) return NextResponse.json({ error: 'Lobby not found' }, { status: 404 })
  if (lobby.hostId !== userId && lobby.guestId !== userId) {
    return NextResponse.json({ error: 'Not a participant' }, { status: 403 })
  }
  if (lobby.status === 'CLOSED') {
    return NextResponse.json({ error: 'Lobby closed' }, { status: 400 })
  }

  // Verify the current match is actually finished before resetting
  if (lobby.currentMatchId) {
    const m = await prisma.competitiveMatch.findUnique({
      where: { id: lobby.currentMatchId },
      select: { status: true },
    })
    if (m && m.status !== 'COMPLETED' && m.status !== 'CANCELLED') {
      return NextResponse.json({ error: 'Match still in progress' }, { status: 400 })
    }
  }

  const updated = await prisma.competitiveLobby.update({
    where: { id: lobby.id },
    data: {
      status: 'WAITING',
      lastMatchId: lobby.currentMatchId,
      currentMatchId: null,
    },
  })

  return NextResponse.json({ status: updated.status, lastMatchId: updated.lastMatchId })
}
