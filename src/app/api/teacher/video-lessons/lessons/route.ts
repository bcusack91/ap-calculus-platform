import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { lessonStatus } from '@/lib/video-lesson-admin'
import { noStore, requireInstructorCaller, topicInCourse } from '@/lib/video-lesson-authoring'

/**
 * GET  /api/teacher/video-lessons/lessons[?instructorId=] — the instructor's lessons.
 * POST { courseSlug, topicSlug } — open the instructor's lesson for a topic,
 *      creating an empty draft the first time. The topic must exist and belong
 *      to the course; the course must be on the instructor's profile (admins
 *      may use any course).
 */
export async function GET(req: NextRequest) {
  const r = await requireInstructorCaller(req.nextUrl.searchParams.get('instructorId'))
  if ('error' in r) return r.error
  const lessons = await prisma.videoLesson.findMany({
    where: { instructorId: r.instructor.id },
    orderBy: { updatedAt: 'desc' },
    select: {
      id: true, title: true, topicSlug: true, courseSlug: true, published: true, archived: true,
      version: true, draftState: true, reviewNote: true, submittedAt: true, updatedAt: true,
    },
  })
  return NextResponse.json({ lessons: lessons.map((l) => ({ ...l, status: lessonStatus(l) })) }, { headers: noStore })
}

export async function POST(req: NextRequest) {
  const r = await requireInstructorCaller(req.nextUrl.searchParams.get('instructorId'))
  if ('error' in r) return r.error
  const body = (await req.json().catch(() => ({}))) as { courseSlug?: unknown; topicSlug?: unknown }
  const courseSlug = typeof body.courseSlug === 'string' ? body.courseSlug : ''
  const topicSlug = typeof body.topicSlug === 'string' ? body.topicSlug : ''
  if (!courseSlug || !topicSlug) return NextResponse.json({ error: 'courseSlug and topicSlug required' }, { status: 400 })
  if (!r.actor.isAdmin && !r.instructor.courses.includes(courseSlug)) {
    return NextResponse.json({ error: 'This course is not on your instructor profile.' }, { status: 403 })
  }
  const topic = await topicInCourse(topicSlug, courseSlug)
  if (!topic) return NextResponse.json({ error: 'That topic is not in this course.' }, { status: 404 })

  const existing = await prisma.videoLesson.findUnique({
    where: { instructorId_topicSlug: { instructorId: r.instructor.id, topicSlug } },
    select: { id: true },
  })
  if (existing) return NextResponse.json({ lesson: existing, created: false }, { headers: noStore })

  const lesson = await prisma.videoLesson.create({
    data: {
      instructorId: r.instructor.id,
      topicSlug,
      courseSlug,
      title: topic.title,
      draft: { title: topic.title, steps: [] },
      draftState: 'EDITING',
    },
    select: { id: true },
  })
  return NextResponse.json({ lesson, created: true }, { status: 201, headers: noStore })
}
