import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { lessonStatus, validateDraftForApproval } from '@/lib/video-lesson-admin'
import { clipsForDraft, loadOwnedLesson, noStore } from '@/lib/video-lesson-authoring'

type Ctx = { params: Promise<{ id: string }> }

/**
 * POST /api/teacher/video-lessons/lessons/[id]/submit — send the saved draft
 * for review. It must pass the same checks an approval runs (every field
 * filled, 1–12 clips, 1–3 questions each, the instructor's own clips with a
 * known length, no clip twice); failures come back as `issues` keyed by path.
 */
export async function POST(_req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const o = await loadOwnedLesson(id)
  if ('error' in o) return o.error
  const { lesson } = o
  if (lesson.draft === null) {
    return NextResponse.json({ error: 'Nothing to submit: make a change and save it first.' }, { status: 409 })
  }
  const check = validateDraftForApproval(lesson.draft, await clipsForDraft(lesson.draft), lesson.instructorId)
  if (!check.ok) {
    return NextResponse.json({ error: 'Fix the highlighted items, then submit again.', issues: check.issues }, { status: 422 })
  }
  const updated = await prisma.videoLesson.update({
    where: { id },
    data: { draft: check.draft, draftState: 'SUBMITTED', submittedAt: new Date() },
    select: { id: true, published: true, archived: true, version: true, draftState: true, reviewNote: true, submittedAt: true },
  })
  return NextResponse.json({ lesson: { ...updated, status: lessonStatus(updated) } }, { headers: noStore })
}
