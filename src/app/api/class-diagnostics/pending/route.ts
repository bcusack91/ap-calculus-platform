import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

/**
 * GET /api/class-diagnostics/pending — assigned class diagnostics in my active
 * classrooms that I haven't taken yet. Powers the "Diagnostic 1 due Friday"
 * banner on the dashboard and assignments pages.
 */
export async function GET() {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const userId = session.user.id

  const memberships = await prisma.classroomMember.findMany({
    where: { userId, isActive: true },
    select: { classroomId: true },
  })
  if (memberships.length === 0) {
    return NextResponse.json({ pending: [] }, { headers: { 'Cache-Control': 'private, no-store' } })
  }

  const diagnostics = await prisma.classDiagnostic.findMany({
    where: { classroomId: { in: memberships.map(m => m.classroomId) } },
    orderBy: { createdAt: 'desc' },
    take: 20,
    select: {
      id: true, courseKey: true, title: true, dueDate: true,
      classroom: { select: { name: true } },
      attempts: { where: { userId }, select: { id: true }, take: 1 },
    },
  })

  const PAGE: Record<string, string> = { mcat: '/mcat-diagnostic', sat: '/sat-diagnostic' }
  return NextResponse.json({
    pending: diagnostics
      .filter(d => d.attempts.length === 0)
      .map(d => ({
        id: d.id,
        title: d.title,
        courseKey: d.courseKey,
        dueDate: d.dueDate,
        classroomName: d.classroom.name,
        href: `${PAGE[d.courseKey] ?? '/dashboard'}?assigned=${d.id}`,
      })),
  }, { headers: { 'Cache-Control': 'private, no-store' } })
}
