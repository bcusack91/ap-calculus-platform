import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireTeacher } from '@/lib/teacher-auth'
import { snakeDraftTeams, summarizeTeams } from '@/lib/teacher-lobby'

interface Ctx { params: Promise<{ id: string }> }

// POST /api/teacher/lobby/[id]/balance — assign teams using snake-draft by MMR
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
  if (lobby.participants.length < lobby.numTeams) {
    return NextResponse.json(
      { error: `Need at least ${lobby.numTeams} participants to balance` },
      { status: 400 },
    )
  }

  // Refresh MMR snapshots so balancing uses current values
  const userIds = lobby.participants.map(p => p.userId)
  const profiles = await prisma.competitiveProfile.findMany({
    where: { userId: { in: userIds } },
    select: { userId: true, overallMMR: true },
  })
  const mmrByUser = new Map(profiles.map(p => [p.userId, p.overallMMR]))

  const enriched = lobby.participants.map(p => ({
    id: p.id,
    userId: p.userId,
    mmrAtJoin: mmrByUser.get(p.userId) ?? p.mmrAtJoin,
  }))

  const assignment = snakeDraftTeams(enriched, lobby.numTeams)

  await prisma.$transaction(
    Object.entries(assignment).map(([participantId, team]) =>
      prisma.teacherLobbyParticipant.update({
        where: { id: participantId },
        data: { team, mmrAtJoin: enriched.find(e => e.id === participantId)!.mmrAtJoin },
      }),
    ),
  )

  const summary = summarizeTeams(enriched, assignment, lobby.numTeams)
  return NextResponse.json({ ok: true, summary })
}
