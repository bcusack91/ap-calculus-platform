import { auth } from '@/lib/auth'
import { NextResponse } from 'next/server'

type Role = 'FREE' | 'PREMIUM' | 'TEACHER' | 'ADMIN'

/**
 * Require the session user to have one of the allowed roles.
 * Returns { session, user } on success, or a NextResponse error.
 */
export async function requireRole(...allowedRoles: Role[]) {
  const session = await auth()
  if (!session?.user?.id) {
    return { error: NextResponse.json({ error: 'Unauthorized' }, { status: 401 }) }
  }

  const role = (session.user as { role?: string }).role as Role | undefined
  if (!role || !allowedRoles.includes(role)) {
    return { error: NextResponse.json({ error: 'Forbidden' }, { status: 403 }) }
  }

  return { session, user: session.user as { id: string; role: Role; name?: string; email?: string } }
}

/**
 * Require authenticated teacher or admin.
 */
export async function requireTeacher() {
  return requireRole('TEACHER', 'ADMIN')
}

/**
 * Require authenticated admin.
 */
export async function requireAdmin() {
  return requireRole('ADMIN')
}
