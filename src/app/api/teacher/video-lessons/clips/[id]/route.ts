import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { normalizeTags, parseDurationSec } from '@/lib/video-lesson-admin'
import { canActFor, clipSelect as select, getActor, noStore } from '@/lib/video-lesson-authoring'

type Ctx = { params: Promise<{ id: string }> }

async function ownedClip(id: string) {
  const a = await getActor()
  if ('error' in a) return a
  const clip = await prisma.videoClip.findUnique({ where: { id }, select: { id: true, instructorId: true, status: true, approvedAt: true } })
  if (!clip || !canActFor(a.actor, clip.instructorId)) return { error: NextResponse.json({ error: 'Clip not found' }, { status: 404 }) }
  return { clip }
}

/**
 * PATCH  /api/teacher/video-lessons/clips/[id] { title?, tags?, durationSec?, restore? }
 * DELETE /api/teacher/video-lessons/clips/[id] — archive (hidden from the
 *        library and from new drafts). A clip in a published lesson cannot be
 *        archived until that lesson stops using it.
 */
export async function PATCH(req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const o = await ownedClip(id)
  if ('error' in o) return o.error
  const body = (await req.json().catch(() => ({}))) as { title?: unknown; tags?: unknown; durationSec?: unknown; restore?: unknown }
  const data: { title?: string; tags?: string[]; durationSec?: number; status?: string } = {}
  if (body.title !== undefined) {
    const title = typeof body.title === 'string' ? body.title.trim().slice(0, 200) : ''
    if (!title) return NextResponse.json({ error: 'Give the clip a title.', field: 'title' }, { status: 400 })
    data.title = title
  }
  if (body.tags !== undefined) data.tags = normalizeTags(body.tags)
  if (body.durationSec !== undefined) {
    const d = parseDurationSec(body.durationSec)
    if (!d) return NextResponse.json({ error: 'Enter the length in seconds.', field: 'durationSec' }, { status: 400 })
    data.durationSec = d
  }
  if (body.restore === true && o.clip.status === 'ARCHIVED') data.status = o.clip.approvedAt ? 'APPROVED' : 'DRAFT'
  const clip = await prisma.videoClip.update({ where: { id }, data, select })
  return NextResponse.json({ clip }, { headers: noStore })
}

export async function DELETE(_req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const o = await ownedClip(id)
  if ('error' in o) return o.error
  const inUse = await prisma.videoLessonStep.findFirst({
    where: { clipId: id, lesson: { published: true } },
    select: { lesson: { select: { title: true } } },
  })
  if (inUse) {
    return NextResponse.json(
      { error: `This clip is in the published lesson "${inUse.lesson.title}". Remove it there and get the change approved first.` },
      { status: 409 },
    )
  }
  const clip = await prisma.videoClip.update({ where: { id }, data: { status: 'ARCHIVED' }, select })
  return NextResponse.json({ clip }, { headers: noStore })
}
