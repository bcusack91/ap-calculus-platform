import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireTeacher } from '@/lib/auth-guard'
import {
  CORE_MODULE_CATEGORY,
  coreSkillsTrackStatus,
  type SatTrackOverride,
} from '@/data/sat-practice/core-skills-modules'

const VALID_OVERRIDES = ['core-skills', 'regular', 'auto'] as const
type OverrideInput = (typeof VALID_OVERRIDES)[number]

/**
 * Verify the teacher may act on this student, and return the classroom if so.
 * Mirrors the ownership check used across the teacher API: own or co-teach the
 * classroom, ADMIN may act on any.
 */
async function authorizeForStudent(
  userId: string,
  role: string,
  studentId: string,
  classroomId: string,
) {
  const classroom = await prisma.classroom.findFirst({
    where:
      role === 'ADMIN'
        ? { id: classroomId }
        : { id: classroomId, OR: [{ teacherId: userId }, { coTeachers: { some: { userId } } }] },
  })
  if (!classroom) return { error: NextResponse.json({ error: 'Classroom not found' }, { status: 404 }) }

  const membership = await prisma.classroomMember.findFirst({
    where: { classroomId, userId: studentId },
  })
  if (!membership) return { error: NextResponse.json({ error: 'Student not in classroom' }, { status: 404 }) }
  return { ok: true as const }
}

/**
 * GET /api/teacher/sat-track?studentId=…&classroomId=…
 * The student's current SAT track placement, and whether it came from their
 * diagnostic score or from a teacher's override.
 */
export async function GET(req: NextRequest) {
  const authResult = await requireTeacher()
  if ('error' in authResult) return authResult.error
  const { user } = authResult

  const studentId = req.nextUrl.searchParams.get('studentId')
  const classroomId = req.nextUrl.searchParams.get('classroomId')
  if (!studentId || !classroomId) {
    return NextResponse.json({ error: 'studentId and classroomId required' }, { status: 400 })
  }

  const authz = await authorizeForStudent(user.id, user.role, studentId, classroomId)
  if ('error' in authz) return authz.error

  const [student, regularAttempts, coreModuleAttempts] = await Promise.all([
    prisma.user.findUnique({ where: { id: studentId }, select: { satTrackOverride: true } }),
    prisma.diagnosticTest.findMany({
      where: { userId: studentId, category: 'sat-full-diagnostic' },
      orderBy: { createdAt: 'desc' },
      select: { results: true },
    }),
    prisma.diagnosticTest.findMany({
      where: { userId: studentId, category: { startsWith: CORE_MODULE_CATEGORY } },
      orderBy: { createdAt: 'desc' },
      select: { category: true, results: true },
    }),
  ])

  const status = coreSkillsTrackStatus(
    regularAttempts,
    coreModuleAttempts,
    (student?.satTrackOverride ?? null) as SatTrackOverride,
  )
  return NextResponse.json({ override: student?.satTrackOverride ?? null, status })
}

/**
 * PATCH /api/teacher/sat-track
 * Body: { studentId, classroomId, override: 'core-skills' | 'regular' | 'auto' }
 *
 * 'auto' clears the override and returns the student to score-based placement.
 * An override always beats the score — a teacher who has watched the student
 * work knows things a 30-question screen does not.
 */
export async function PATCH(req: NextRequest) {
  const authResult = await requireTeacher()
  if ('error' in authResult) return authResult.error
  const { user } = authResult

  let body: { studentId?: string; classroomId?: string; override?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const { studentId, classroomId, override } = body
  if (!studentId || !classroomId) {
    return NextResponse.json({ error: 'studentId and classroomId required' }, { status: 400 })
  }
  if (!override || !VALID_OVERRIDES.includes(override as OverrideInput)) {
    return NextResponse.json(
      { error: `override must be one of: ${VALID_OVERRIDES.join(', ')}` },
      { status: 400 },
    )
  }

  const authz = await authorizeForStudent(user.id, user.role, studentId, classroomId)
  if ('error' in authz) return authz.error

  const value = override === 'auto' ? null : override
  await prisma.user.update({
    where: { id: studentId },
    data: { satTrackOverride: value },
  })

  return NextResponse.json({ ok: true, override: value })
}
