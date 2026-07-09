import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireClassroomAccess } from '@/lib/teacher-auth'
import { generateTeacherLobbyCode } from '@/lib/teacher-lobby'

/**
 * POST /api/teacher/classrooms/[id]/competitions/[compId]/launch
 *
 * Turn a SCHEDULED competition into a real live game: create a TeacherLobby
 * (the working end-to-end live path — students join by code and play at
 * /teacher/lobby/[id]/play) seeded with the competition's title, topic and
 * duration, and hand the lobby back so the client can jump straight to the
 * lobby control room.
 *
 * ScheduledCompetition has no column that can hold the lobby id (no Json
 * field), so we deliberately do NOT persist the link. Instead the schedule row
 * is marked COMPLETED at launch — it has served its purpose as a calendar
 * entry; the live game itself (roster, scores, results) lives entirely on the
 * TeacherLobby from here on. Simple and honest.
 */
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string; compId: string }> }
) {
  try {
    const { id, compId } = await params
    const result = await requireClassroomAccess(id)
    if ('error' in result && result.error) return result.error
    const teacher = result.user!

    const competition = await prisma.scheduledCompetition.findUnique({
      where: { id: compId },
    })
    if (!competition || competition.classroomId !== id) {
      return NextResponse.json({ error: 'Competition not found' }, { status: 404 })
    }
    if (competition.status !== 'SCHEDULED') {
      return NextResponse.json(
        { error: `Competition is ${competition.status.toLowerCase()} — only scheduled competitions can be launched` },
        { status: 409 },
      )
    }

    // Same creation logic as POST /api/teacher/lobby, seeded from the schedule.
    let joinCode = generateTeacherLobbyCode()
    for (let i = 0; i < 5; i++) {
      const exists = await prisma.teacherLobby.findUnique({ where: { joinCode } })
      if (!exists) break
      joinCode = generateTeacherLobbyCode()
    }

    const lobby = await prisma.teacherLobby.create({
      data: {
        joinCode,
        teacherId: teacher.id,
        classroomId: id,
        name: competition.title,
        topicSlugs: [competition.topicSlug],
        durationSec: Math.max(60, Math.min(60 * 60, competition.duration || 600)),
        gameMode: 'competitive',
        numTeams: 2,
        status: 'OPEN',
      },
    })

    // Consume the schedule entry (see doc comment above for why COMPLETED).
    await prisma.scheduledCompetition.update({
      where: { id: compId },
      data: { status: 'COMPLETED' },
    })

    return NextResponse.json({ lobby }, { status: 201 })
  } catch (error) {
    console.error('[POST /api/teacher/classrooms/[id]/competitions/[compId]/launch]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
