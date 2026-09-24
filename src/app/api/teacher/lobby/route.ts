import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireTeacher } from '@/lib/teacher-auth'
import { generateTeacherLobbyCode } from '@/lib/teacher-lobby'

// GET /api/teacher/lobby — list lobbies created by current teacher
export async function GET() {
  const result = await requireTeacher()
  if ('error' in result && result.error) return result.error
  const teacher = result.user!

  const lobbies = await prisma.teacherLobby.findMany({
    where: { teacherId: teacher.id },
    orderBy: { createdAt: 'desc' },
    include: {
      _count: { select: { participants: true } },
      classroom: { select: { id: true, name: true } },
    },
  })
  return NextResponse.json({ lobbies })
}

// POST /api/teacher/lobby — create a new lobby
export async function POST(req: NextRequest) {
  const result = await requireTeacher()
  if ('error' in result && result.error) return result.error
  const teacher = result.user!

  const body = await req.json().catch(() => ({}))
  const name = (typeof body?.name === 'string' && body.name.trim()) || 'Class Match'
  const gameMode = body?.gameMode === 'CHAOS' ? 'CHAOS' : 'competitive'
  // Gentle is the default on purpose: it bans the shake/flash/blackout effects,
  // which are a real photosensitivity and vestibular risk in a class of 30. A
  // teacher opts into full chaos knowingly rather than discovering it mid-lesson.
  const chaosIntensity = body?.chaosIntensity === 'full' ? 'full' : 'gentle'
  // Free-for-all: every player is their own side, assigned at start (the
  // start route sets numTeams to the player count). Anything else is a team
  // game with 2-8 MMR-drafted sides.
  const format = body?.format === 'RACE_FFA' ? 'RACE_FFA' : null
  const numTeams = format ? 2 : Math.max(2, Math.min(8, Number(body?.numTeams) || 2))
  const classroomId = typeof body?.classroomId === 'string' && body.classroomId ? body.classroomId : null
  const courseSlug = typeof body?.courseSlug === 'string' && body.courseSlug ? body.courseSlug : null
  const topicSlugs = Array.isArray(body?.topicSlugs)
    ? (body.topicSlugs as unknown[]).filter((x): x is string => typeof x === 'string' && x.length > 0)
    : []
  const durationSec = Math.max(60, Math.min(60 * 60, Math.floor(Number(body?.durationSec) || 600)))

  if (classroomId) {
    const classroom = await prisma.classroom.findUnique({ where: { id: classroomId } })
    if (!classroom || classroom.teacherId !== teacher.id) {
      return NextResponse.json({ error: 'Classroom not found or not owned by you' }, { status: 403 })
    }
  }

  // Try a few codes for uniqueness
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
      classroomId,
      name,
      courseSlug,
      topicSlugs,
      durationSec,
      gameMode,
      chaosIntensity,
      numTeams,
      format,
      status: 'OPEN',
    },
  })

  return NextResponse.json({ lobby })
}
