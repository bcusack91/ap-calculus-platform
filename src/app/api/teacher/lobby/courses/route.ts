import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { listSupportedCourses, getCourseTopics } from '@/lib/teacher-lobby-courses'

// GET /api/teacher/lobby/courses?course=<slug>
//   no slug -> list of courses
//   with slug -> course topics
export async function GET(req: Request) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const url = new URL(req.url)
  const courseSlug = url.searchParams.get('course')
  if (!courseSlug) {
    return NextResponse.json({ courses: listSupportedCourses() })
  }
  const topics = getCourseTopics(courseSlug)
  if (topics.length === 0) {
    return NextResponse.json({ error: 'Unsupported course' }, { status: 404 })
  }
  return NextResponse.json({ courseSlug, topics })
}
