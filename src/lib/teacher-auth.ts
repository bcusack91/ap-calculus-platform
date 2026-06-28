import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import crypto from 'crypto'

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

  return { user: result.user!, classroom, isOwner: true as const }
}

/**
 * Verify the current user may *teach* a classroom — i.e. they are the owner, an
 * ADMIN, or a co-teacher. Use for teaching operations (view roster,
 * assignments, gradebook, analytics, announcements, competitions, lobby).
 * Owner-only actions (settings, archive, managing co-teachers) must keep using
 * requireClassroomOwner. The returned `isOwner` lets callers gate further.
 */
export async function requireClassroomAccess(classroomId: string) {
  const result = await requireTeacher()
  if ('error' in result && result.error) return result

  const classroom = await prisma.classroom.findUnique({
    where: { id: classroomId },
  })

  if (!classroom) {
    return { error: NextResponse.json({ error: 'Classroom not found' }, { status: 404 }) }
  }

  // Owner or ADMIN — full access.
  if (classroom.teacherId === result.user!.id || result.user!.role === 'ADMIN') {
    return { user: result.user!, classroom, isOwner: true as const }
  }

  // Co-teacher — teaching access, not ownership.
  const coTeacher = await prisma.classroomCoTeacher.findUnique({
    where: { classroomId_userId: { classroomId, userId: result.user!.id } },
    select: { id: true },
  })
  if (coTeacher) {
    return { user: result.user!, classroom, isOwner: false as const }
  }

  return { error: NextResponse.json({ error: 'Not your classroom' }, { status: 403 }) }
}

/**
 * Generate a random 6-character join code (uppercase alphanumeric, no ambiguous chars).
 */
export function generateJoinCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789' // no 0/O/1/I
  let code = ''
  for (let i = 0; i < 6; i++) {
    // crypto.randomInt: CSPRNG, unbiased — join codes are bearer credentials
    code += chars[crypto.randomInt(chars.length)]
  }
  return code
}
