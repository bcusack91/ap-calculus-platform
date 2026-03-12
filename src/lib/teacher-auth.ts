import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

/**
 * Verify the current user is a TEACHER or ADMIN.
 * Returns the user record or a 401/403 NextResponse.
 */
export async function requireTeacher() {
  const session = await auth()

  if (!session?.user?.email) {
    return { error: NextResponse.json({ error: 'Unauthorized' }, { status: 401 }) }
  }

  if (session.user.role !== 'TEACHER' && session.user.role !== 'ADMIN') {
    return { error: NextResponse.json({ error: 'Forbidden – teacher access required' }, { status: 403 }) }
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  })

  if (!user) {
    return { error: NextResponse.json({ error: 'User not found' }, { status: 404 }) }
  }

  return { user }
}

/**
 * Verify the current user owns a specific classroom.
 */
export async function requireClassroomOwner(classroomId: string) {
  const result = await requireTeacher()
  if ('error' in result && result.error) return result

  const classroom = await prisma.classroom.findUnique({
    where: { id: classroomId },
  })

  if (!classroom) {
    return { error: NextResponse.json({ error: 'Classroom not found' }, { status: 404 }) }
  }

  if (classroom.teacherId !== result.user!.id && result.user!.role !== 'ADMIN') {
    return { error: NextResponse.json({ error: 'Not your classroom' }, { status: 403 }) }
  }

  return { user: result.user!, classroom }
}

/**
 * Generate a random 6-character join code (uppercase alphanumeric, no ambiguous chars).
 */
export function generateJoinCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789' // no 0/O/1/I
  let code = ''
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)]
  }
  return code
}
