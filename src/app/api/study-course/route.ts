import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { coursesContaining, INCLUDE_COURSE_NAMES } from '@/lib/course-includes'
import { studyCourseFor } from '@/lib/study-course-server'

/**
 * GET /api/study-course?topicCourse=<slug> → { courseSlug, courseName }
 *
 * The course the signed-in student studies a topic of `topicCourse` for
 * (src/lib/study-course-server.ts): AP Calculus BC for an AB topic when the
 * student is a BC student, else `topicCourse` itself. The topic and lesson
 * pages are ISR (no per-user server rendering), so their labels and back links
 * ask here on the client. A visitor, or a course nothing includes, gets
 * `topicCourse` back with no lookup.
 */
export async function GET(request: Request) {
  const topicCourse = new URL(request.url).searchParams.get('topicCourse')
  if (!topicCourse || !/^[a-z0-9-]{1,80}$/.test(topicCourse)) {
    return NextResponse.json({ error: 'topicCourse required' }, { status: 400 })
  }
  if (coursesContaining(topicCourse).length === 1) {
    return NextResponse.json({ courseSlug: topicCourse, courseName: INCLUDE_COURSE_NAMES[topicCourse] ?? null })
  }
  const session = await auth()
  const courseSlug = (await studyCourseFor(session?.user?.id, topicCourse)) ?? topicCourse
  const courseName = INCLUDE_COURSE_NAMES[courseSlug] ?? null
  return NextResponse.json({ courseSlug, courseName })
}
