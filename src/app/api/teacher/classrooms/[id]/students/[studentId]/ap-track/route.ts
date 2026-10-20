import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireStudentInClassroom } from '@/lib/teacher-auth'
import { AP_TRACK_COURSES, AP_TRACK_LABEL, isApTrackCourse, parseApTrack } from '@/lib/ap-track'
import { apTrackForUser } from '@/lib/ap-track-server'

export const dynamic = 'force-dynamic'

interface Ctx { params: Promise<{ id: string; studentId: string }> }

/**
 * PATCH /api/teacher/classrooms/[id]/students/[studentId]/ap-track
 * Body: { courseSlug: 'ap-chemistry' | 'ap-biology' | 'ap-physics-1' | 'ap-calculus-ab',
 *         track: 'foundation' | 'regular' | 'five' | null }
 *
 * Pins (or, with null, un-pins) the student's AP difficulty track in one
 * course (ApTrackOverride, src/lib/ap-track.ts). An override beats the
 * diagnostic in both directions — a teacher who has watched the student work
 * knows things a 33-question diagnostic does not. Authorised like every other
 * per-student teacher route: the caller teaches the classroom (owner,
 * co-teacher or admin) and the student is an ACTIVE member of it.
 *
 * Responds with the student's effective placement after the change, the same
 * shape the class plan's roster carries.
 */
export async function PATCH(request: NextRequest, { params }: Ctx) {
  const { id: classroomId, studentId } = await params
  const access = await requireStudentInClassroom(classroomId, studentId)
  if ('error' in access) return access.error

  const body = (await request.json().catch(() => null)) as { courseSlug?: unknown; track?: unknown } | null
  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }
  const courseSlug = typeof body.courseSlug === 'string' ? body.courseSlug : null
  const track = body.track
  if (!isApTrackCourse(courseSlug)) {
    return NextResponse.json({ error: `courseSlug must be one of: ${AP_TRACK_COURSES.join(', ')}` }, { status: 400 })
  }
  const parsedTrack = parseApTrack(track)
  if (track !== null && !parsedTrack) {
    return NextResponse.json({ error: 'track must be foundation, regular, five, or null to clear the override' }, { status: 400 })
  }

  if (parsedTrack) {
    await prisma.apTrackOverride.upsert({
      where: { userId_courseSlug: { userId: studentId, courseSlug } },
      update: { track: parsedTrack, setById: access.user.id },
      create: { userId: studentId, courseSlug, track: parsedTrack, setById: access.user.id },
    })
  } else {
    await prisma.apTrackOverride.deleteMany({ where: { userId: studentId, courseSlug } })
  }

  const placement = await apTrackForUser(studentId, courseSlug)
  return NextResponse.json({
    ok: true,
    override: parsedTrack,
    apTrack: placement
      ? { track: placement.track, label: placement.label, source: placement.source, override: placement.override }
      : { track: parsedTrack ?? 'regular', label: AP_TRACK_LABEL[parsedTrack ?? 'regular'], source: parsedTrack ? 'teacher' : 'default', override: parsedTrack },
  })
}
