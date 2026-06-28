import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireClassroomAccess } from '@/lib/teacher-auth'

/**
 * DELETE /api/teacher/classrooms/[id]/members/[memberId] — remove a student
 */
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string; memberId: string }> }
) {
  try {
    const { id, memberId } = await params
    const result = await requireClassroomAccess(id)
    if ('error' in result && result.error) return result.error

  // Scope the mutation to THIS classroom — keying on memberId alone would let
  // any classroom owner deactivate members of other teachers' classrooms.
  const { count } = await prisma.classroomMember.updateMany({
    where: { id: memberId, classroomId: id },
    data: { isActive: false },
  })
  if (count === 0) {
    return NextResponse.json({ error: 'Member not found in this classroom' }, { status: 404 })
  }

  return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[DELETE /api/teacher/classrooms/[id]/members/[memberId]]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
