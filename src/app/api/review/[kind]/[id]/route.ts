import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { isReviewKind, resolveAttempt } from '@/lib/question-resolver'
import { requireStudentInClassroom } from '@/lib/teacher-auth'
import { courseSlugsForTopics } from '@/lib/study-tracking'
import { reviewFlashcardCourse, reviewTopicSlugs } from '@/lib/review-flashcard-course'

export const dynamic = 'force-dynamic'

/**
 * GET /api/review/<kind>/<id> — one of the student's own attempts rebuilt for
 * review: every question with the option they picked, the answer, the
 * explanation, time and flags. kind = exit | diagnostic | unit-test |
 * sat-practice | mcat-fl | mcat-practice | qbank | act-fl.
 *
 * ?class=<classroomId>&student=<userId> — a teacher reviewing a student's
 * attempt (read-only). Allowed only to someone who teaches that class while
 * the student is an active member; the attempt must belong to that student.
 */
export async function GET(req: Request, { params }: { params: Promise<{ kind: string; id: string }> }) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { kind, id } = await params
  if (!isReviewKind(kind)) return NextResponse.json({ error: 'Unknown attempt type' }, { status: 400 })

  const url = new URL(req.url)
  const classroomId = url.searchParams.get('class')
  const studentId = url.searchParams.get('student')
  let ownerId = userId
  let student: { id: string; name: string | null } | null = null
  if (classroomId && studentId && studentId !== userId) {
    const access = await requireStudentInClassroom(classroomId, studentId)
    if ('error' in access) return access.error
    ownerId = studentId
    student = { id: access.student.id, name: access.student.name }
  }

  const attempt = await resolveAttempt(kind, id, ownerId)
  if (!attempt) return NextResponse.json({ error: 'Attempt not found' }, { status: 404 })
  // The DB course deck "Make a flashcard" files into (AP exit quizzes and
  // practice exams included). Topic lookup only when the attempt's own course
  // key can't answer it.
  let flashcardCourseSlug = reviewFlashcardCourse(attempt)
  if (!flashcardCourseSlug) {
    const slugs = reviewTopicSlugs(attempt)
    if (slugs.length) flashcardCourseSlug = reviewFlashcardCourse(attempt, await courseSlugsForTopics(slugs))
  }
  return NextResponse.json(
    { attempt: { ...attempt, flashcardCourseSlug }, student },
    { headers: { 'Cache-Control': 'private, no-store' } },
  )
}
