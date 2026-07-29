import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { normalizeTeacherLobbyCode } from '@/lib/teacher-lobby'

// POST /api/teacher/lobby/join — student joins via 6-char code
export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const userId = session.user.id

  const body = await req.json().catch(() => ({}))
  const code = normalizeTeacherLobbyCode(typeof body?.code === 'string' ? body.code : '')
  if (!code) return NextResponse.json({ error: 'Invalid code' }, { status: 400 })

  const lobby = await prisma.teacherLobby.findUnique({
    where: { joinCode: code },
    include: { participants: { select: { userId: true } } },
  })
  if (!lobby) return NextResponse.json({ error: 'Lobby not found' }, { status: 404 })
  if (lobby.status === 'CLOSED') {
    return NextResponse.json({ error: 'Lobby is closed' }, { status: 400 })
  }

  // Already in lobby? idempotent
  if (lobby.participants.some(p => p.userId === userId)) {
    return NextResponse.json({ lobbyId: lobby.id, alreadyJoined: true })
  }

  // Don't allow joining once teams are running
  if (lobby.status !== 'OPEN') {
    return NextResponse.json({ error: 'Lobby is no longer accepting joiners' }, { status: 400 })
  }

  // Student-hosted open lobbies die with their host: 10 quiet minutes closes
  // the lobby at the door. Teacher lobbies are exempt — a teacher may prep a
  // lobby well before class without keeping the tab open.
  if (
    lobby.studentHosted &&
    lobby.isPublic &&
    Date.now() - lobby.hostLastSeenAt.getTime() > 10 * 60 * 1000
  ) {
    await prisma.teacherLobby.update({
      where: { id: lobby.id },
      data: { status: 'CLOSED', closedAt: new Date() },
    })
    return NextResponse.json({ error: 'That lobby has closed — its host left' }, { status: 410 })
  }

  // Open lobbies advertise a capacity (2v2 = 4, FFA = up to 8). Teacher lobbies
  // set no maxPlayers and are unaffected.
  if (lobby.maxPlayers && lobby.participants.length >= lobby.maxPlayers) {
    return NextResponse.json({ error: 'Lobby is full' }, { status: 400 })
  }

  // Snapshot the student's overall MMR at join time
  const profile = await prisma.competitiveProfile.findUnique({
    where: { userId },
    select: { overallMMR: true },
  })
  const mmr = profile?.overallMMR ?? 1000

  await prisma.teacherLobbyParticipant.create({
    data: { lobbyId: lobby.id, userId, mmrAtJoin: mmr },
  })

  return NextResponse.json({ lobbyId: lobby.id })
}

// DELETE — student leaves the lobby (only while OPEN)
export async function DELETE(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const url = new URL(req.url)
  const lobbyId = url.searchParams.get('lobbyId')
  if (!lobbyId) return NextResponse.json({ error: 'lobbyId required' }, { status: 400 })

  const lobby = await prisma.teacherLobby.findUnique({ where: { id: lobbyId } })
  if (!lobby) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  if (lobby.status !== 'OPEN') {
    return NextResponse.json({ error: 'Cannot leave once started' }, { status: 400 })
  }

  await prisma.teacherLobbyParticipant.deleteMany({
    where: { lobbyId, userId: session.user.id },
  })
  return NextResponse.json({ ok: true })
}
