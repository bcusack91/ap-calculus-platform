import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireClassroomAccess } from '@/lib/teacher-auth'

/**
 * GET /api/teacher/classrooms/[id]/report — metadata for the printable
 * whole-class summary report (/teacher/classroom/[id]/report).
 *
 * The heavy per-student aggregation already lives in the sibling
 * `performance` route and is reused as-is by the report page; this route
 * only supplies what that payload lacks: the classroom's display info, the
 * teacher of record, and the true assignment count (per-student
 * `assignmentStats.total` counts submission rows, which understates the
 * denominator for students who never opened an assignment).
 */
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const result = await requireClassroomAccess(id)
    if ('error' in result && result.error) return result.error
    if (!('classroom' in result)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
    const { classroom } = result

    const [teacher, assignmentCount] = await Promise.all([
      prisma.user.findUnique({
        where: { id: classroom.teacherId },
        select: { name: true, email: true },
      }),
      prisma.assignment.count({ where: { classroomId: id } }),
    ])

    return NextResponse.json({
      classroom: {
        id: classroom.id,
        name: classroom.name,
        subject: classroom.subject,
      },
      teacher: {
        name: teacher?.name ?? null,
        email: teacher?.email ?? null,
      },
      assignmentCount,
      generatedAt: new Date().toISOString(),
    })
  } catch (error) {
    console.error('[GET /api/teacher/classrooms/[id]/report]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
