import { prisma } from '@/lib/prisma'

/**
 * Who may take part in a live session: the classroom's teacher, a co-teacher
 * or an admin (`isTeacher`), or an active member of the classroom. Null when
 * the session doesn't exist or the user isn't enrolled.
 */
export async function sessionAccess(sessionId: string, userId: string) {
  const live = await prisma.liveSession.findUnique({
    where: { id: sessionId },
    select: { id: true, status: true, classroomId: true, classroom: { select: { teacherId: true } } },
  })
  if (!live) return null
  const user = await prisma.user.findUnique({ where: { id: userId }, select: { name: true, role: true } })
  const isTeacher =
    live.classroom.teacherId === userId ||
    user?.role === 'ADMIN' ||
    !!(await prisma.classroomCoTeacher.findUnique({
      where: { classroomId_userId: { classroomId: live.classroomId, userId } },
      select: { id: true },
    }))
  if (!isTeacher) {
    const member = await prisma.classroomMember.findUnique({
      where: { classroomId_userId: { classroomId: live.classroomId, userId } },
      select: { isActive: true },
    })
    if (!member?.isActive) return null
  }
  return { live, isTeacher, userName: user?.name || 'Student' }
}
