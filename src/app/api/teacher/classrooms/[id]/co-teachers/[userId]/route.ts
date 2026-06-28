import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireClassroomOwner } from '@/lib/teacher-auth'

/**
 * DELETE /api/teacher/classrooms/[id]/co-teachers/[userId]
 * Remove a co-teacher. Owner only. Scoped to this classroom.
 */
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string; userId: string }> }
) {
  try {
    const { id: classroomId, userId } = await params
    const result = await requireClassroomOwner(classroomId)
    if ('error' in result && result.error) return result.error

    await prisma.classroomCoTeacher.deleteMany({ where: { classroomId, userId } })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[DELETE /api/teacher/classrooms/[id]/co-teachers/[userId]]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
