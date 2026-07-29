import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireLobbyHost } from '@/lib/teacher-auth'
import { snakeDraftTeams, summarizeTeams } from '@/lib/teacher-lobby'

interface Ctx { params: Promise<{ id: string }> }

// POST /api/teacher/lobby/[id]/balance — assign teams using snake-draft by MMR
export async function POST(_req: NextRequest, { params }: Ctx) {
  const { id } = await params
  // Host-based guard: teachers for teacher lobbies, the student host for
  // student-hosted open lobbies. See requireLobbyHost.
  const result = await requireLobbyHost(id)
  if ('error' in result) return result.error
  const lobby = result.lobby
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
