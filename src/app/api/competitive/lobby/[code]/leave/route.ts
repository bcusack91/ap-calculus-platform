import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { normalizeLobbyCode } from '@/lib/lobby-codes'

// Leave or close a lobby
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
  if (!lobby) return NextResponse.json({ status: 'gone' })

  if (lobby.hostId === userId) {
    // Host leaving closes the lobby
    await prisma.competitiveLobby.update({
      where: { id: lobby.id },
      data: { status: 'CLOSED', closedAt: new Date() },
    })
    return NextResponse.json({ status: 'closed' })
  }

  if (lobby.guestId === userId) {
    await prisma.competitiveLobby.update({
      where: { id: lobby.id },
      data: { guestId: null },
    })
    return NextResponse.json({ status: 'left' })
  }

  return NextResponse.json({ error: 'Not a participant' }, { status: 403 })
}
