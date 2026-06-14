import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
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
 *
 * Because the JWT can be stale for up to ~5 minutes, the session role alone is
 * not authoritative for this highest-privilege check. After confirming a valid
 * session, we RE-READ the user's role from the database and treat the DB value
 * as the source of truth, so a demoted or banned admin loses access immediately
 * rather than retaining it until their token refreshes.
 */
export async function requireAdmin() {
  const session = await auth()
  if (!session?.user?.id) {
    return { error: NextResponse.json({ error: 'Unauthorized' }, { status: 401 }) }
  }

  const dbUser = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { role: true },
  })
  if (!dbUser || dbUser.role !== 'ADMIN') {
    return { error: NextResponse.json({ error: 'Forbidden' }, { status: 403 }) }
  }

  return { session, user: session.user as { id: string; role: Role; name?: string; email?: string } }
}
