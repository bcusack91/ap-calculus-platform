import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { requireTeacher } from '@/lib/teacher-auth'

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

  return NextResponse.json({ lobby, isTeacher })
}

// PATCH — teacher updates name/topic/numTeams (while OPEN)
export async function PATCH(req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const result = await requireTeacher()
  if ('error' in result && result.error) return result.error

  const lobby = await prisma.teacherLobby.findUnique({ where: { id } })
  if (!lobby) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  if (lobby.teacherId !== result.user!.id) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }
  if (lobby.status !== 'OPEN') {
    return NextResponse.json({ error: 'Lobby is not editable' }, { status: 400 })
  }

  const body = await req.json().catch(() => ({}))
  const data: Record<string, unknown> = {}
  if (typeof body.name === 'string') data.name = body.name.trim() || lobby.name
  if (typeof body.topicSlug === 'string') data.topicSlug = body.topicSlug || null
  if (typeof body.gameMode === 'string') data.gameMode = body.gameMode
  if (typeof body.numTeams === 'number') {
    data.numTeams = Math.max(2, Math.min(8, Math.floor(body.numTeams)))
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
