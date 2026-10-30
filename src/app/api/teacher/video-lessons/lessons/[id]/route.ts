import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { parseQuestions } from '@/lib/video-lesson-core'
import { draftClipIds, lessonStatus, looseDraftSchema, type LooseDraft } from '@/lib/video-lesson-admin'
import { clipSelect, loadOwnedLesson, noStore } from '@/lib/video-lesson-authoring'

type Ctx = { params: Promise<{ id: string }> }

/**
 * GET /api/teacher/video-lessons/lessons/[id] — the lesson with its published
 *     steps, its draft, and `editable`: the draft, or the published steps as a
 *     starting draft when there is none. `clips` resolves every clip either uses.
 * PUT { draft } — save work in progress (blank fields allowed; Submit runs the
 *     full checks). Every clip must be one of the instructor's non-archived
 *     clips. Students keep seeing the published steps until an admin approves.
 */
export async function GET(_req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const o = await loadOwnedLesson(id)
  if ('error' in o) return o.error
  const { lesson } = o
  const published = lesson.steps.map((s) => ({
    clipId: s.clipId,
    yield: s.yield === 'LOW' ? ('LOW' as const) : null,
    questions: parseQuestions(s.questions),
  }))
  const editable = lesson.draft ?? { title: lesson.title, steps: published }
  const ids = [...new Set([...draftClipIds(lesson.draft), ...published.map((s) => s.clipId)])]
  const [clips, topic] = await Promise.all([
    prisma.videoClip.findMany({ where: { id: { in: ids } }, select: clipSelect }),
    prisma.topic.findUnique({ where: { slug: lesson.topicSlug }, select: { title: true } }),
  ])
  const { steps: _steps, draft: _draft, ...meta } = lesson
  return NextResponse.json(
    {
      lesson: { ...meta, topicTitle: topic?.title ?? lesson.topicSlug, status: lessonStatus(lesson), hasDraft: lesson.draft !== null },
      published,
      editable,
      clips,
    },
    { headers: noStore },
  )
}

export async function PUT(req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const o = await loadOwnedLesson(id)
  if ('error' in o) return o.error
  const body = (await req.json().catch(() => ({}))) as { draft?: unknown }
  const parsed = looseDraftSchema.safeParse(body.draft)
  if (!parsed.success) return NextResponse.json({ error: 'The draft is not in the right shape.' }, { status: 400 })
  const draft: LooseDraft = parsed.data

  const bad = await badClipIds(draft, o.lesson.instructorId)
  if (bad.length) {
    return NextResponse.json(
      { error: 'Some clips are archived or not in this instructor’s library.', issues: bad.map((i) => ({ path: `steps.${i}.clipId`, message: 'Pick a clip from your library.' })) },
      { status: 400 },
    )
  }
  const updated = await prisma.videoLesson.update({
    where: { id },
    data: { draft, draftState: 'EDITING' },
    select: { id: true, published: true, archived: true, version: true, draftState: true, reviewNote: true, updatedAt: true },
  })
  return NextResponse.json({ lesson: { ...updated, status: lessonStatus(updated) } }, { headers: noStore })
}

/** Indices of steps whose clip is missing, archived or another instructor's. */
async function badClipIds(draft: LooseDraft, instructorId: string): Promise<number[]> {
  const ids = [...new Set(draft.steps.map((s) => s.clipId))]
  const ok = new Set(
    (await prisma.videoClip.findMany({
      where: { id: { in: ids }, instructorId, status: { not: 'ARCHIVED' } },
      select: { id: true },
    })).map((c) => c.id),
  )
  return draft.steps.flatMap((s, i) => (ok.has(s.clipId) ? [] : [i]))
}
