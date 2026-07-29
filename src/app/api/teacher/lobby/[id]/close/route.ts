import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireLobbyHost } from '@/lib/teacher-auth'

interface Ctx { params: Promise<{ id: string }> }

// POST /api/teacher/lobby/[id]/close — mark lobby CLOSED
export async function POST(_req: NextRequest, { params }: Ctx) {
  const { id } = await params
  // Host-based guard: teachers for teacher lobbies, the student host for
  // student-hosted open lobbies. See requireLobbyHost.
  const result = await requireLobbyHost(id)
  if ('error' in result) return result.error
  const lobby = result.lobby

  const updated = await prisma.teacherLobby.update({
    where: { id },
    data: { status: 'CLOSED', closedAt: new Date() },
  })
  return NextResponse.json({ lobby: updated })
}
