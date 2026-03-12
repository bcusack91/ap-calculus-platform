import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireClassroomOwner } from '@/lib/teacher-auth'

/**
 * DELETE /api/teacher/classrooms/[id]/members/[memberId] — remove a student
 */
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string; memberId: string }> }
) {
  try {
    const { id, memberId } = await params
    const result = await requireClassroomOwner(id)
    if ('error' in result && result.error) return result.error

  await prisma.classroomMember.update({
    where: { id: memberId },
    data: { isActive: false },
  })

  return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[DELETE /api/teacher/classrooms/[id]/members/[memberId]]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
