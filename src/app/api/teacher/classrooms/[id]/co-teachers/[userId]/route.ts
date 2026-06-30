import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireClassroomOwner, requireTeacher } from '@/lib/teacher-auth'

/**
 * DELETE /api/teacher/classrooms/[id]/co-teachers/[userId]
 * Remove a co-teacher. The classroom OWNER may remove anyone; a co-teacher may
 * remove THEMSELVES (leave the class). Scoped to this classroom.
 */
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string; userId: string }> }
) {
  try {
    const { id: classroomId, userId } = await params

    // Self-leave: a teacher can always remove their own co-teacher link.
    // Otherwise, only the owner may remove another co-teacher.
    const teacher = await requireTeacher()
    if ('error' in teacher && teacher.error) return teacher.error

    if (userId !== teacher.user!.id) {
      const owner = await requireClassroomOwner(classroomId)
      if ('error' in owner && owner.error) return owner.error
    }

    await prisma.classroomCoTeacher.deleteMany({ where: { classroomId, userId } })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[DELETE /api/teacher/classrooms/[id]/co-teachers/[userId]]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
