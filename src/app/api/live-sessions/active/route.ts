import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

/**
 * GET /api/live-sessions/active — live sessions in every classroom the current
 * user belongs to (as an active member) or teaches. Powers the "Live now"
 * banner on the dashboard.
 */
export async function GET() {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const userId = session.user.id

  const memberships = await prisma.classroomMember.findMany({
    where: { userId, isActive: true },
    select: { classroomId: true },
  })
  const classroomIds = memberships.map(m => m.classroomId)

  const sessions = await prisma.liveSession.findMany({
    where: {
      status: 'LIVE',
      OR: [
        ...(classroomIds.length > 0 ? [{ classroomId: { in: classroomIds } }] : []),
        { teacherId: userId },
      ],
    },
    orderBy: { startedAt: 'desc' },
    select: {
      id: true,
      mode: true,
      startedAt: true,
      classroom: { select: { name: true } },
    },
  })

  return NextResponse.json({
    sessions: sessions.map(s => ({
      id: s.id,
      mode: s.mode,
      startedAt: s.startedAt,
      classroomName: s.classroom.name,
    })),
  }, { headers: { 'Cache-Control': 'private, no-store' } })
}
