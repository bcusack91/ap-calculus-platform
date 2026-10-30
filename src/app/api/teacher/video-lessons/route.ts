import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { lessonStatus } from '@/lib/video-lesson-admin'
import { getActor, noStore, resolveInstructor } from '@/lib/video-lesson-authoring'

/**
 * GET /api/teacher/video-lessons[?instructorId=] — the authoring home: the
 * caller's instructor profile, the courses they may author in, and their
 * lessons. Admins without a linked profile get `instructors` to pick from
 * (then pass ?instructorId= on every call).
 */
export async function GET(req: NextRequest) {
  const a = await getActor()
  if ('error' in a) return a.error
  const { actor } = a
  const param = req.nextUrl.searchParams.get('instructorId')

  const instructors = actor.isAdmin
    ? await prisma.instructor.findMany({ orderBy: { name: 'asc' }, select: { id: true, name: true, isActive: true } })
    : undefined
  if (actor.isAdmin && !param && !actor.own) {
    return NextResponse.json({ instructor: null, instructors, isAdmin: true, courses: [], lessons: [] }, { headers: noStore })
  }

  const r = await resolveInstructor(actor, param)
  if ('error' in r) return r.error
  const { instructor } = r

  const [courses, lessons] = await Promise.all([
    prisma.course.findMany({
      where: actor.isAdmin && instructor.courses.length === 0 ? {} : { slug: { in: instructor.courses } },
      orderBy: { order: 'asc' },
      select: { slug: true, name: true },
    }),
    prisma.videoLesson.findMany({
      where: { instructorId: instructor.id },
      orderBy: { updatedAt: 'desc' },
      select: {
        id: true, title: true, topicSlug: true, courseSlug: true, published: true, archived: true,
        version: true, draftState: true, reviewNote: true, submittedAt: true, updatedAt: true,
      },
    }),
  ])
  const topics = await prisma.topic.findMany({
    where: { slug: { in: lessons.map((l) => l.topicSlug) } },
    select: { slug: true, title: true },
  })
  const titleOf = new Map(topics.map((t) => [t.slug, t.title]))
  return NextResponse.json(
    {
      instructor,
      instructors,
      isAdmin: actor.isAdmin,
      courses,
      lessons: lessons.map((l) => ({ ...l, topicTitle: titleOf.get(l.topicSlug) ?? l.topicSlug, status: lessonStatus(l) })),
    },
    { headers: noStore },
  )
}
