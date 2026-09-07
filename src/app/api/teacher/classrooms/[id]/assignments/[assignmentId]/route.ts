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
  return { assignment, user: result.user! }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string; assignmentId: string }> }
) {
  try {
    const { id, assignmentId } = await params
    const owned = await getOwnedAssignment(id, assignmentId)
    if ('error' in owned && owned.error) return owned.error

    const { title, description, type, topicSlug, topicSlugs, courseSlug, unitId, flashcardSetId, dueDate, maxAttempts, requiredScore } =
      await req.json()

    if (title !== undefined && (!title || typeof title !== 'string')) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 })
    }

    // Mirror of the POST-route topic check: lessons and quizzes deep-link to
    // /topics/<slug>, so every slug must be a real DB Topic — competitive-bank
    // slugs 404 there. Validate whenever this edit touches the type or the
    // topic list; unspecified fields fall back to the stored values so a
    // type-only change can't smuggle stored bank slugs into a QUIZ.
    const existing = 'assignment' in owned ? owned.assignment : null
    const effectiveType = type !== undefined ? type : existing?.type
    if (
      (effectiveType === 'INTERACTIVE_LESSON' || effectiveType === 'QUIZ') &&
      (type !== undefined || topicSlug !== undefined || topicSlugs !== undefined)
    ) {
      const rawList: unknown[] =
        topicSlugs !== undefined
          ? (Array.isArray(topicSlugs) ? topicSlugs : [])
          : topicSlug !== undefined
          ? [topicSlug]
          : Array.isArray(existing?.topicSlugs)
          ? (existing?.topicSlugs as unknown[])
          : existing?.topicSlug
          ? [existing.topicSlug]
          : []
      const requested = [
        ...new Set(rawList.filter((s): s is string => typeof s === 'string' && s.trim().length > 0).map((s) => s.trim())),
      ]
      if (requested.length > 0) {
        const found = await prisma.topic.findMany({ where: { slug: { in: requested } }, select: { slug: true } })
        const foundSet = new Set(found.map((t) => t.slug))
        const missing = requested.filter((s) => !foundSet.has(s))
        if (missing.length > 0) {
          return NextResponse.json(
            {
              error: `These topics have no ${effectiveType === 'QUIZ' ? 'quiz' : 'lesson'} page and can't be assigned as ${
                effectiveType === 'QUIZ' ? 'a quiz' : 'an interactive lesson'
              }: ${missing.join(', ')}. Competitive-only topics can only be assigned as Competitive Practice.`,
            },
            { status: 400 }
          )
        }
      }
    }

    // If a flashcard set is being attached, the caller must own it (mirrors POST).
    const fsid = typeof flashcardSetId === 'string' && flashcardSetId.trim() ? flashcardSetId.trim() : null
    if (fsid) {
      const teacherId = 'user' in owned ? owned.user.id : null
      if (!teacherId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      const ownedSet = await prisma.flashcardSet.findFirst({ where: { id: fsid, teacherId } })
      if (!ownedSet) return NextResponse.json({ error: 'Not your flashcard set' }, { status: 403 })
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
        // UNIT_TEST / FRQ_PRACTICE course scoping and flashcard sets were
        // previously dropped on edit — the modal sends them, persist them.
        ...(courseSlug !== undefined && { courseSlug: courseSlug || null }),
        ...(unitId !== undefined && { unitId: unitId || null }),
        ...(flashcardSetId !== undefined && { flashcardSetId: fsid }),
        ...(dueDate !== undefined && { dueDate: dueDate ? new Date(dueDate) : null }),
        ...(maxAttempts !== undefined && { maxAttempts: Number(maxAttempts) > 0 ? Math.min(Math.floor(Number(maxAttempts)), 9999) : 9999 }),
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
