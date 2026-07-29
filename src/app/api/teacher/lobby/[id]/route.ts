import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { requireTeacher, requireLobbyHost } from '@/lib/teacher-auth'

interface Ctx { params: Promise<{ id: string }> }

// GET — anyone in the lobby (teacher or participant) can read it
export async function GET(_req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const lobby = await prisma.teacherLobby.findUnique({
    where: { id },
    include: {
      teacher: { select: { id: true, name: true, email: true } },
      classroom: { select: { id: true, name: true } },
      participants: {
        orderBy: { joinedAt: 'asc' },
        include: { user: { select: { id: true, name: true, email: true, image: true } } },
      },
    },
  })
  if (!lobby) return NextResponse.json({ error: 'Lobby not found' }, { status: 404 })

  const isTeacher = lobby.teacherId === session.user.id
  const isParticipant = lobby.participants.some(p => p.userId === session.user.id)
  if (!isTeacher && !isParticipant) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  // Never leak questionPool (contains correctAnswer indices) over this endpoint —
  // students fetch the safe version from /play.
  const { questionPool: _omit, ...safeLobby } = lobby
  void _omit
  return NextResponse.json({ lobby: safeLobby, isTeacher })
}

// PATCH — teacher updates name/topic/numTeams (while OPEN)
export async function PATCH(req: NextRequest, { params }: Ctx) {
  const { id } = await params
  // Host-based guard: teachers for teacher lobbies, the student host for
  // student-hosted open lobbies. See requireLobbyHost.
  const result = await requireLobbyHost(id)
  if ('error' in result) return result.error
  const lobby = result.lobby
  if (lobby.status !== 'OPEN') {
    return NextResponse.json({ error: 'Lobby is not editable' }, { status: 400 })
  }

  const body = await req.json().catch(() => ({}))
  const data: Record<string, unknown> = {}
  if (typeof body.name === 'string') data.name = body.name.trim() || lobby.name
  if (typeof body.gameMode === 'string') data.gameMode = body.gameMode
  if (typeof body.numTeams === 'number') {
    data.numTeams = Math.max(2, Math.min(8, Math.floor(body.numTeams)))
  }
  if (typeof body.courseSlug === 'string' || body.courseSlug === null) {
    data.courseSlug = body.courseSlug || null
  }
  if (Array.isArray(body.topicSlugs)) {
    data.topicSlugs = (body.topicSlugs as unknown[]).filter(
      (x): x is string => typeof x === 'string' && x.length > 0,
    )
  }
  if (typeof body.durationSec === 'number') {
    data.durationSec = Math.max(60, Math.min(60 * 60, Math.floor(body.durationSec)))
  }

  const updated = await prisma.teacherLobby.update({ where: { id }, data })
  return NextResponse.json({ lobby: updated })
}

// DELETE — teacher deletes lobby (cascades participants)
export async function DELETE(_req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const result = await requireTeacher()
  if ('error' in result && result.error) return result.error

  const lobby = await prisma.teacherLobby.findUnique({ where: { id } })
  if (!lobby) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  if (lobby.teacherId !== result.user!.id) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  await prisma.teacherLobby.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}
