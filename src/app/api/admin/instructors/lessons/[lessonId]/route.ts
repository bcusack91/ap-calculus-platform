import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-guard'
import { parseQuestions } from '@/lib/video-lesson-core'
import { draftClipIds, lessonStatus, validateDraftForApproval } from '@/lib/video-lesson-admin'
import { ApprovalError, approveLesson, noStore } from '@/lib/video-lesson-authoring'

type Ctx = { params: Promise<{ lessonId: string }> }

const clipSelect = { id: true, title: true, provider: true, providerId: true, durationSec: true, status: true, instructorId: true, tags: true } as const

/**
 * GET  /api/admin/instructors/lessons/[lessonId] — the review view: the
 *      draft with its clips resolved, the currently published steps, and the
 *      approval check's issues (empty when it would pass).
 * POST /api/admin/instructors/lessons/[lessonId]
 *      { action: 'approve' }                 — publish the draft (one transaction)
 *      { action: 'return', note }            — back to the instructor with a note
 *      { action: 'unpublish' | 'republish' } — hide / show the published version
 *      { action: 'archive' }                 — unpublish and file away
 */
export async function GET(_req: NextRequest, { params }: Ctx) {
  const gate = await requireAdmin()
  if ('error' in gate) return gate.error
  const { lessonId } = await params
  const lesson = await prisma.videoLesson.findUnique({
    where: { id: lessonId },
    select: {
      id: true,
      title: true,
      topicSlug: true,
      courseSlug: true,
      published: true,
      archived: true,
      version: true,
      draft: true,
      draftState: true,
      reviewNote: true,
      submittedAt: true,
      publishedAt: true,
      instructorId: true,
      instructor: { select: { id: true, name: true, slug: true, headline: true, photoUrl: true, isActive: true } },
      steps: { orderBy: { order: 'asc' }, select: { order: true, yield: true, questions: true, clip: { select: clipSelect } } },
    },
  })
  if (!lesson) return NextResponse.json({ error: 'Lesson not found' }, { status: 404 })

  const topic = await prisma.topic.findUnique({ where: { slug: lesson.topicSlug }, select: { title: true } })
  const clips = await prisma.videoClip.findMany({ where: { id: { in: draftClipIds(lesson.draft) } }, select: clipSelect })
  const clipById = new Map(clips.map((c) => [c.id, c]))
  const draft = lesson.draft as { title?: string; steps?: { clipId: string; yield?: string | null; questions?: unknown }[] } | null
  const check = lesson.draft ? validateDraftForApproval(lesson.draft, clipById, lesson.instructorId) : null

  return NextResponse.json(
    {
      lesson: {
        id: lesson.id,
        title: lesson.title,
        topicSlug: lesson.topicSlug,
        topicTitle: topic?.title ?? lesson.topicSlug,
        courseSlug: lesson.courseSlug,
        instructor: lesson.instructor,
        published: lesson.published,
        archived: lesson.archived,
        version: lesson.version,
        draftState: lesson.draftState,
        reviewNote: lesson.reviewNote,
        submittedAt: lesson.submittedAt,
        publishedAt: lesson.publishedAt,
        status: lessonStatus(lesson),
      },
      draft: draft
        ? {
            title: draft.title ?? '',
            steps: (draft.steps ?? []).map((s) => ({
              clip: clipById.get(s.clipId) ?? null,
              clipId: s.clipId,
              yield: s.yield ?? null,
              questions: Array.isArray(s.questions) ? s.questions : [],
            })),
          }
        : null,
      publishedSteps: lesson.steps.map((s) => ({ order: s.order, yield: s.yield, clip: s.clip, questions: parseQuestions(s.questions) })),
      issues: check && !check.ok ? check.issues : [],
    },
    { headers: noStore },
  )
}

export async function POST(req: NextRequest, { params }: Ctx) {
  const gate = await requireAdmin()
  if ('error' in gate) return gate.error
  const { lessonId } = await params
  const body = (await req.json().catch(() => ({}))) as { action?: unknown; note?: unknown }
  const action = typeof body.action === 'string' ? body.action : ''

  if (action === 'approve') {
    try {
      const lesson = await approveLesson(lessonId, gate.user.id)
      return NextResponse.json({ lesson }, { headers: noStore })
    } catch (e) {
      if (e instanceof ApprovalError) return NextResponse.json({ error: e.message, issues: e.issues }, { status: e.status })
      throw e
    }
  }

  const lesson = await prisma.videoLesson.findUnique({
    where: { id: lessonId },
    select: { id: true, draftState: true, version: true, published: true },
  })
  if (!lesson) return NextResponse.json({ error: 'Lesson not found' }, { status: 404 })
  const select = { id: true, published: true, archived: true, draftState: true, reviewNote: true, version: true } as const

  if (action === 'return') {
    const note = typeof body.note === 'string' ? body.note.trim().slice(0, 4000) : ''
    if (!note) return NextResponse.json({ error: 'Write a note so the instructor knows what to change.' }, { status: 400 })
    if (lesson.draftState !== 'SUBMITTED') return NextResponse.json({ error: 'This lesson is not waiting for review.' }, { status: 409 })
    const updated = await prisma.videoLesson.update({ where: { id: lessonId }, data: { draftState: 'EDITING', reviewNote: note }, select })
    return NextResponse.json({ lesson: updated }, { headers: noStore })
  }
  if (action === 'unpublish') {
    const updated = await prisma.videoLesson.update({ where: { id: lessonId }, data: { published: false }, select })
    return NextResponse.json({ lesson: updated }, { headers: noStore })
  }
  if (action === 'republish') {
    if (lesson.version === 0) return NextResponse.json({ error: 'This lesson has never been approved.' }, { status: 409 })
    const updated = await prisma.videoLesson.update({ where: { id: lessonId }, data: { published: true, archived: false }, select })
    return NextResponse.json({ lesson: updated }, { headers: noStore })
  }
  if (action === 'archive') {
    const updated = await prisma.videoLesson.update({ where: { id: lessonId }, data: { published: false, archived: true }, select })
    return NextResponse.json({ lesson: updated }, { headers: noStore })
  }
  return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
}
