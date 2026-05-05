import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { generateLobbyCode, normalizeLobbyCode } from '@/lib/lobby-codes'

// Create a new private lobby (host) — POST
// Join an existing lobby by code — POST with { code }
export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const userId = session.user.id

  const body = await req.json().catch(() => ({}))
  const rawCode = typeof body?.code === 'string' ? body.code : ''

  // JOIN by code
  if (rawCode) {
    const code = normalizeLobbyCode(rawCode)
    if (!code) return NextResponse.json({ error: 'Invalid code' }, { status: 400 })

    const lobby = await prisma.competitiveLobby.findUnique({ where: { code } })
    if (!lobby || lobby.status === 'CLOSED') {
      return NextResponse.json({ error: 'Lobby not found' }, { status: 404 })
    }
    if (lobby.hostId === userId) {
      return NextResponse.json({ code: lobby.code, lobbyId: lobby.id, role: 'host' })
    }
    if (lobby.guestId && lobby.guestId !== userId) {
      return NextResponse.json({ error: 'Lobby is full' }, { status: 409 })
    }

    // Ensure the joiner has a competitive profile (auto-unlock for invited play, mirroring async-challenge accept flow)
    await prisma.competitiveProfile.upsert({
      where: { userId },
      update: { competitiveModeUnlocked: true },
      create: { userId, competitiveModeUnlocked: true },
    })

    const updated = await prisma.competitiveLobby.update({
      where: { id: lobby.id },
      data: { guestId: userId },
    })
    return NextResponse.json({ code: updated.code, lobbyId: updated.id, role: 'guest' })
  }

  // CREATE
  // Ensure host has competitive profile (lobby is a privileged invite mode — auto-unlock)
  await prisma.competitiveProfile.upsert({
    where: { userId },
    update: {},
    create: { userId, competitiveModeUnlocked: true },
  })

  // Try a few codes in case of rare collision
  let code = generateLobbyCode()
  for (let attempt = 0; attempt < 5; attempt++) {
    const exists = await prisma.competitiveLobby.findUnique({ where: { code } })
    if (!exists) break
    code = generateLobbyCode()
  }

  const lobby = await prisma.competitiveLobby.create({
    data: { code, hostId: userId, status: 'WAITING' },
  })
  return NextResponse.json({ code: lobby.code, lobbyId: lobby.id, role: 'host' })
}
