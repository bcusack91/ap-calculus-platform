import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireTeacher } from '@/lib/teacher-auth'

interface Ctx { params: Promise<{ id: string }> }

// POST /api/teacher/lobby/[id]/start — mark lobby IN_PROGRESS (teams must be assigned)
export async function POST(_req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const result = await requireTeacher()
  if ('error' in result && result.error) return result.error

  const lobby = await prisma.teacherLobby.findUnique({
    where: { id },
    include: { participants: true },
  })
  if (!lobby) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  if (lobby.teacherId !== result.user!.id) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }
  if (lobby.status !== 'OPEN') {
    return NextResponse.json({ error: 'Lobby already started' }, { status: 400 })
  }

  const unassigned = lobby.participants.filter(p => p.team === null)
  if (unassigned.length > 0) {
    return NextResponse.json(
      { error: 'Balance teams before starting (some participants have no team).' },
      { status: 400 },
    )
  }

  const updated = await prisma.teacherLobby.update({
    where: { id },
    data: { status: 'IN_PROGRESS', startedAt: new Date() },
  })
  return NextResponse.json({ lobby: updated })
}
