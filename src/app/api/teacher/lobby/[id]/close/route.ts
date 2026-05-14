import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireTeacher } from '@/lib/teacher-auth'

interface Ctx { params: Promise<{ id: string }> }

// POST /api/teacher/lobby/[id]/close — mark lobby CLOSED
export async function POST(_req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const result = await requireTeacher()
  if ('error' in result && result.error) return result.error

  const lobby = await prisma.teacherLobby.findUnique({ where: { id } })
  if (!lobby) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  if (lobby.teacherId !== result.user!.id) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const updated = await prisma.teacherLobby.update({
    where: { id },
    data: { status: 'CLOSED', closedAt: new Date() },
  })
  return NextResponse.json({ lobby: updated })
}
