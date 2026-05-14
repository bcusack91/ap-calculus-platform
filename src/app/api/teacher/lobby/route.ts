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
  const topicSlug = typeof body?.topicSlug === 'string' && body.topicSlug ? body.topicSlug : null
  const gameMode = (typeof body?.gameMode === 'string' && body.gameMode) || 'competitive'
  const numTeams = Math.max(2, Math.min(8, Number(body?.numTeams) || 2))
  const classroomId = typeof body?.classroomId === 'string' && body.classroomId ? body.classroomId : null

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
      topicSlug,
      gameMode,
      numTeams,
      status: 'OPEN',
    },
  })

  return NextResponse.json({ lobby })
}
