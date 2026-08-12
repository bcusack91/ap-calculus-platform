import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { buildJaasJwt, jaasConfigured, mutedList, touchAttendance } from '@/lib/live-session'

interface Ctx { params: Promise<{ id: string }> }

/**
 * GET /api/live-sessions/[id] — join info for one session.
 *
 * Access: the classroom's teacher/co-teachers, ADMINs, or an ACTIVE member of
 * the classroom. This check is the room's real security — conference JWTs and
 * the fallback room URL are only ever revealed here.
 */
export async function GET(_req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const userId = session.user.id

  const live = await prisma.liveSession.findUnique({
    where: { id },
    include: { classroom: { select: { id: true, name: true, teacherId: true } } },
  })
  if (!live) return NextResponse.json({ error: 'Session not found' }, { status: 404 })

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { name: true, email: true, role: true },
  })
  const isTeacher =
    live.classroom.teacherId === userId ||
    user?.role === 'ADMIN' ||
    !!(await prisma.classroomCoTeacher.findUnique({
      where: { classroomId_userId: { classroomId: live.classroom.id, userId } },
      select: { id: true },
    }))

  if (!isTeacher) {
    const member = await prisma.classroomMember.findUnique({
      where: { classroomId_userId: { classroomId: live.classroom.id, userId } },
      select: { isActive: true, nickname: true },
    })
    if (!member?.isActive) {
      return NextResponse.json({ error: 'You are not enrolled in this class.' }, { status: 403 })
    }
  }

  // Attendance: loading the join info marks presence (fire-and-forget).
  if (live.status === 'LIVE') void touchAttendance(live.id, userId)

  const displayName = user?.name || 'Student'
  const base = {
    id: live.id,
    mode: live.mode,
    status: live.status,
    startedAt: live.startedAt,
    endedAt: live.endedAt,
    classroomId: live.classroom.id,
    classroomName: live.classroom.name,
    boardMode: live.boardMode,
    padsEnabled: live.padsEnabled,
    youAreTeacher: isTeacher,
    youAreMuted: mutedList(live.mutedUserIds).includes(userId),
    displayName,
  }

  if (live.status !== 'LIVE') return NextResponse.json({ session: base })

  if (live.mode === 'WEBCAST') {
    return NextResponse.json({ session: { ...base, streamVideoId: live.streamVideoId } })
  }

  // CONFERENCE — embedded JaaS when keys are configured, else a link-out room
  // on the public meet.jit.si server (embedding the public server is capped at
  // ~5 minutes, so the fallback opens in a new tab instead).
  if (jaasConfigured()) {
    const appId = process.env.JAAS_APP_ID!
    return NextResponse.json({
      session: {
        ...base,
        conference: {
          embed: true as const,
          domain: '8x8.vc',
          appId,
          room: `${appId}/${live.roomName}`,
          jwt: buildJaasJwt({
            roomName: live.roomName,
            userId,
            displayName,
            email: user?.email,
            moderator: isTeacher,
          }),
        },
      },
    })
  }
  return NextResponse.json({
    session: {
      ...base,
      conference: { embed: false as const, url: `https://meet.jit.si/${live.roomName}` },
    },
  })
}
