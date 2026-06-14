import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireTeacher } from '@/lib/auth-guard'

// GET /api/teacher/student-report?studentId=xxx&classroomId=xxx
export async function GET(req: NextRequest) {
  const authResult = await requireTeacher()
  if ('error' in authResult) return authResult.error
  const { user } = authResult

  const studentId = req.nextUrl.searchParams.get('studentId')
  const classroomId = req.nextUrl.searchParams.get('classroomId')

  if (!studentId || !classroomId) {
    return NextResponse.json({ error: 'studentId and classroomId required' }, { status: 400 })
  }

  // Verify teacher owns the classroom
  const classroom = await prisma.classroom.findFirst({
    where: { id: classroomId, teacherId: user.id },
  })
  if (!classroom) {
    return NextResponse.json({ error: 'Classroom not found' }, { status: 404 })
  }

  // Verify student is a member
  const membership = await prisma.classroomMember.findFirst({
    where: { classroomId, userId: studentId },
    include: { user: { select: { id: true, name: true, email: true, image: true } } },
  })
  if (!membership) {
    return NextResponse.json({ error: 'Student not in classroom' }, { status: 404 })
  }

  // Fetch data in parallel
  const [
    progress,
    quizAttempts,
    assignments,
    flashcardStats,
    streakData,
  ] = await Promise.all([
    // Lesson progress
    prisma.topicProgress.findMany({
      where: { userId: studentId },
      include: { topic: { select: { title: true, slug: true, category: { select: { course: { select: { name: true } } } } } } },
      orderBy: { lastAccessed: 'desc' },
    }),
    // Quiz attempts (last 30). QuizAttempt is a dead table (never written);
    // ExitQuizAttempt is the only real quiz activity.
    prisma.exitQuizAttempt.findMany({
      where: { userId: studentId },
      select: { score: true, totalQuestions: true, topicSlug: true, completedAt: true },
      orderBy: { completedAt: 'desc' },
      take: 30,
    }),
    // Assignment submissions
    prisma.assignmentSubmission.findMany({
      where: {
        studentId,
        assignment: { classroomId },
      },
      include: { assignment: { select: { title: true, requiredScore: true, type: true } } },
      orderBy: { completedAt: 'desc' },
    }),
    // Flashcard progress
    prisma.flashcardProgress.findMany({
      where: { userId: studentId },
      select: { easeFactor: true, interval: true, repetitions: true, nextReview: true },
    }),
    // Streak
    prisma.dailyStreak.findUnique({ where: { userId: studentId } }),
  ])

  // Resolve exit-quiz topic slugs to human-readable titles for the trend chart.
  const quizTopicSlugs = Array.from(new Set(quizAttempts.map((a) => a.topicSlug)))
  const quizTopics = quizTopicSlugs.length > 0
    ? await prisma.topic.findMany({
        where: { slug: { in: quizTopicSlugs } },
        select: { slug: true, title: true },
      })
    : []
  const quizTopicTitleBySlug = new Map(quizTopics.map((t) => [t.slug, t.title]))

  // ExitQuizAttempt.score is a raw count out of totalQuestions; normalize to a 0-100 percent.
  const quizScorePct = (a: { score: number; totalQuestions: number }) =>
    a.totalQuestions > 0 ? Math.round((a.score / a.totalQuestions) * 100) : 0

  // Calculate metrics
  const completedLessons = progress.filter((p) => p.status === 'COMPLETED').length
  const totalLessons = progress.length
  const avgQuizScore = quizAttempts.length > 0
    ? Math.round(quizAttempts.reduce((sum, a) => sum + quizScorePct(a), 0) / quizAttempts.length)
    : null

  const assignmentAvg = assignments.length > 0
    ? Math.round(
        assignments
          .filter((a) => a.score !== null)
          .reduce((sum, a) => sum + (a.score ?? 0) * 100, 0) /
          Math.max(assignments.filter((a) => a.score !== null).length, 1)
      )
    : null

  const flashcardTotal = flashcardStats.length
  const flashcardMastered = flashcardStats.filter((f) => f.interval >= 21).length
  const flashcardDue = flashcardStats.filter((f) => new Date(f.nextReview) <= new Date()).length

  const totalStudyMinutes = progress.reduce((sum, p) => sum + Math.round(p.timeSpent / 60), 0)

  // Subjects breakdown from progress
  const subjectMap = new Map<string, { completed: number; total: number }>()
  for (const p of progress) {
    const course = p.topic?.category?.course?.name ?? 'Other'
    const existing = subjectMap.get(course) || { completed: 0, total: 0 }
    existing.total++
    if (p.status === 'COMPLETED') existing.completed++
    subjectMap.set(course, existing)
  }

  // Quiz score trend (last 10)
  const quizTrend = quizAttempts
    .slice(0, 10)
    .reverse()
    .map((a) => ({
      date: a.completedAt?.toISOString(),
      score: quizScorePct(a),
      topic: quizTopicTitleBySlug.get(a.topicSlug) ?? a.topicSlug,
    }))

  return NextResponse.json({
    student: {
      id: membership.user.id,
      name: membership.user.name,
      email: membership.user.email,
      image: membership.user.image,
    },
    summary: {
      completedLessons,
      totalLessons,
      avgQuizScore,
      assignmentAvg,
      flashcardTotal,
      flashcardMastered,
      flashcardDue,
      totalStudyMinutes,
      currentStreak: streakData?.currentStreak ?? 0,
      longestStreak: streakData?.longestStreak ?? 0,
    },
    subjects: Array.from(subjectMap.entries()).map(([name, data]) => ({
      name,
      ...data,
      percentage: data.total > 0 ? Math.round((data.completed / data.total) * 100) : 0,
    })),
    quizTrend,
    assignments: assignments.map((a) => ({
      title: a.assignment.title,
      type: a.assignment.type,
      score: a.score,
      requiredScore: a.assignment.requiredScore,
      status: a.status,
      completedAt: a.completedAt?.toISOString(),
    })),
    generatedAt: new Date().toISOString(),
  })
}
