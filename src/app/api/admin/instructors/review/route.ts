import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-guard'
import { lessonStatus } from '@/lib/video-lesson-admin'
import { noStore } from '@/lib/video-lesson-authoring'

/**
 * GET /api/admin/instructors/review
 *   submitted — lessons waiting for review (draftState SUBMITTED), oldest first
 *   lessons   — every lesson that has ever been published (for Unpublish /
 *               Republish), newest first
 */
export async function GET() {
  const gate = await requireAdmin()
  if ('error' in gate) return gate.error

  const select = {
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
    instructor: { select: { id: true, name: true, slug: true, isActive: true } },
    _count: { select: { steps: true } },
  } as const
  const [submitted, everPublished] = await Promise.all([
    prisma.videoLesson.findMany({ where: { draftState: 'SUBMITTED' }, orderBy: { submittedAt: 'asc' }, select }),
    prisma.videoLesson.findMany({ where: { version: { gt: 0 } }, orderBy: { publishedAt: 'desc' }, take: 300, select }),
  ])
  const slugs = [...new Set([...submitted, ...everPublished].map((l) => l.topicSlug))]
  const topics = await prisma.topic.findMany({ where: { slug: { in: slugs } }, select: { slug: true, title: true } })
  const titleOf = new Map(topics.map((t) => [t.slug, t.title]))

  const shape = (l: (typeof submitted)[number]) => {
    const draft = l.draft as { title?: unknown; steps?: unknown[] } | null
    return {
      id: l.id,
      title: typeof draft?.title === 'string' && draft.title ? draft.title : l.title,
      topicSlug: l.topicSlug,
      topicTitle: titleOf.get(l.topicSlug) ?? l.topicSlug,
      courseSlug: l.courseSlug,
      instructor: l.instructor,
      draftStepCount: Array.isArray(draft?.steps) ? draft.steps.length : 0,
      publishedStepCount: l._count.steps,
      submittedAt: l.submittedAt,
      publishedAt: l.publishedAt,
      status: lessonStatus(l),
      published: l.published,
      archived: l.archived,
      version: l.version,
    }
  }
  return NextResponse.json({ submitted: submitted.map(shape), lessons: everPublished.map(shape) }, { headers: noStore })
}
