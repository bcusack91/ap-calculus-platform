import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { lessonStatus } from '@/lib/video-lesson-admin'
import { courseTopicGroups, noStore, requireInstructorCaller } from '@/lib/video-lesson-authoring'

/**
 * GET /api/teacher/video-lessons/topics?course=<slug>[&instructorId=] — the
 * course's topics grouped by unit, each with this instructor's lesson status.
 */
export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams
  const r = await requireInstructorCaller(sp.get('instructorId'))
  if ('error' in r) return r.error
  const course = sp.get('course') ?? ''
  if (!course) return NextResponse.json({ error: 'course required' }, { status: 400 })
  if (!r.actor.isAdmin && !r.instructor.courses.includes(course)) {
    return NextResponse.json({ error: 'This course is not on your instructor profile.' }, { status: 403 })
  }
  const [groups, lessons] = await Promise.all([
    courseTopicGroups(course),
    prisma.videoLesson.findMany({
      where: { instructorId: r.instructor.id },
      select: { id: true, topicSlug: true, published: true, archived: true, version: true, draftState: true, reviewNote: true },
    }),
  ])
  const bySlug = new Map(lessons.map((l) => [l.topicSlug, l]))
  return NextResponse.json(
    {
      groups: groups.map((g) => ({
        name: g.name,
        topics: g.topics.map((t) => {
          const l = bySlug.get(t.slug)
          return { ...t, lessonId: l?.id ?? null, status: l ? lessonStatus(l) : null }
        }),
      })),
    },
    { headers: noStore },
  )
}
