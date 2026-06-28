import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireClassroomAccess } from '@/lib/teacher-auth'

/**
 * PUT    /api/teacher/classrooms/[id]/assignments/[assignmentId] — edit an assignment
 * DELETE /api/teacher/classrooms/[id]/assignments/[assignmentId] — unassign (soft-deactivate)
 */

/** Resolve the assignment only if the caller owns its classroom AND it belongs to that classroom. */
async function getOwnedAssignment(classroomId: string, assignmentId: string) {
  const result = await requireClassroomAccess(classroomId)
  if ('error' in result && result.error) return { error: result.error }

  const assignment = await prisma.assignment.findUnique({ where: { id: assignmentId } })
  if (!assignment || assignment.classroomId !== classroomId) {
    return { error: NextResponse.json({ error: 'Assignment not found' }, { status: 404 }) }
  }
  return { assignment }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string; assignmentId: string }> }
) {
  try {
    const { id, assignmentId } = await params
    const owned = await getOwnedAssignment(id, assignmentId)
    if ('error' in owned && owned.error) return owned.error

    const { title, description, type, topicSlug, topicSlugs, dueDate, maxAttempts, requiredScore } =
      await req.json()

    if (title !== undefined && (!title || typeof title !== 'string')) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 })
    }

    // Only update fields that were explicitly provided so a partial edit can't
    // null out untouched fields.
    const updated = await prisma.assignment.update({
      where: { id: assignmentId },
      data: {
        ...(title !== undefined && { title: title.trim() }),
        ...(description !== undefined && { description: description?.trim() || null }),
        ...(type !== undefined && { type }),
        ...(topicSlug !== undefined && { topicSlug: topicSlug || null }),
        ...(topicSlugs !== undefined && { topicSlugs: topicSlugs || null }),
        ...(dueDate !== undefined && { dueDate: dueDate ? new Date(dueDate) : null }),
        ...(maxAttempts !== undefined && { maxAttempts: maxAttempts || 1 }),
        ...(requiredScore !== undefined && { requiredScore: requiredScore ?? null }),
      },
    })

    return NextResponse.json({ assignment: updated })
  } catch (error) {
    console.error('[PUT /api/teacher/classrooms/[id]/assignments/[assignmentId]]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string; assignmentId: string }> }
) {
  try {
    const { id, assignmentId } = await params
    const owned = await getOwnedAssignment(id, assignmentId)
    if ('error' in owned && owned.error) return owned.error

    // Soft-deactivate so historical submissions/grades are preserved; the
    // assignment list and classroom detail both filter on isActive: true, so it
    // disappears from the teacher and student views.
    await prisma.assignment.update({
      where: { id: assignmentId },
      data: { isActive: false },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[DELETE /api/teacher/classrooms/[id]/assignments/[assignmentId]]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
