import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { classPlanCourse, diagnosticRouteForKey } from '@/lib/class-plan-config'
import { isOpenClassDiagnostic } from '@/lib/class-diagnostic-open'

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
      id: true, courseKey: true, title: true, dueDate: true, createdAt: true, testData: true,
      classroom: { select: { id: true, name: true } },
      attempts: { where: { userId }, select: { id: true }, take: 1 },
    },
  })

  // OPEN diagnostics (any course without a frozen class test, see
  // src/lib/class-diagnostic-open.ts) are done once the student has taken
  // that course's diagnostic on or after the assignment date.
  const latestByCourse = new Map<string, Date>()
  const openCourses = [...new Set(diagnostics.filter(d => isOpenClassDiagnostic(d.testData)).map(d => d.courseKey))]
  await Promise.all(openCourses.map(async courseKey => {
    const course = classPlanCourse(courseKey)
    if (!course) return
    const latest = await prisma.diagnosticTest.findFirst({
      where: { userId, category: { startsWith: course.categoryPrefix } },
      orderBy: { createdAt: 'desc' },
      select: { createdAt: true },
    })
    if (latest) latestByCourse.set(courseKey, latest.createdAt)
  }))

  return NextResponse.json({
    pending: diagnostics
      .filter(d => {
        if (!isOpenClassDiagnostic(d.testData)) return d.attempts.length === 0
        const latest = latestByCourse.get(d.courseKey)
        return !latest || latest < d.createdAt
      })
      .map(d => ({
        id: d.id,
        title: d.title,
        courseKey: d.courseKey,
        dueDate: d.dueDate,
        classroomId: d.classroom.id,
        classroomName: d.classroom.name,
        // Frozen tests load by id; an open one is the course's normal diagnostic.
        href: isOpenClassDiagnostic(d.testData)
          ? diagnosticRouteForKey(d.courseKey)
          : `${diagnosticRouteForKey(d.courseKey)}?assigned=${d.id}`,
      })),
  }, { headers: { 'Cache-Control': 'private, no-store' } })
}
