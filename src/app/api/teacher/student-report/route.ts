import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireTeacher } from '@/lib/auth-guard'
import { scoreLabelFromResults } from '@/lib/class-plan-config'

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

  // Verify the teacher owns OR co-teaches the classroom (ADMIN: any).
  const classroom = await prisma.classroom.findFirst({
    where:
      user.role === 'ADMIN'
        ? { id: classroomId }
        : { id: classroomId, OR: [{ teacherId: user.id }, { coTeachers: { some: { userId: user.id } } }] },
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
    unitTests,
    frqs,
    satTests,
    mcatTests,
    diagnostics,
  ] = await Promise.all([
    // Lesson progress
    prisma.topicProgress.findMany({
      where: { userId: studentId },
      include: { topic: { select: { title: true, slug: true, category: { select: { course: { select: { name: true } } } } } } },
      orderBy: { lastAccessed: 'desc' },
    }),
    // Quiz attempts (last 30), from ExitQuizAttempt.
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
    // Self-directed work. None of the five below used to reach a teacher at
    // all: a student could sit every unit test in a course, write a dozen
    // free-response questions and take a full practice test, and this report
    // would show nothing. Capped because these are read for a single screen.
    prisma.unitTestAttempt.findMany({
      where: { userId: studentId },
      select: { courseSlug: true, unitTitle: true, correct: true, total: true, percentage: true, completedAt: true },
      orderBy: { completedAt: 'desc' },
      take: 30,
    }),
    prisma.frqAttempt.findMany({
      where: { userId: studentId },
      select: { courseSlug: true, mode: true, pointsEarned: true, pointsPossible: true, frqCount: true, completedAt: true },
      orderBy: { completedAt: 'desc' },
      take: 30,
    }),
    prisma.satTestAttempt.findMany({
      where: { userId: studentId },
      select: { testNumber: true, totalScore: true, rwScore: true, mathScore: true, completedAt: true },
      orderBy: { completedAt: 'desc' },
      take: 15,
    }),
    prisma.mcatTestAttempt.findMany({
      where: { userId: studentId },
      select: { sectionName: true, score: true, percentage: true, completedAt: true },
      orderBy: { completedAt: 'desc' },
      take: 15,
    }),
    prisma.diagnosticTest.findMany({
      where: { userId: studentId },
      select: { category: true, results: true, createdAt: true },
      orderBy: { createdAt: 'desc' },
      take: 15,
    }),
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
    // For the printable report header ("<student> — <class>").
    classroom: { id: classroom.id, name: classroom.name },
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
    // Self-directed work, newest first. Surfaced separately from `assignments`
    // because a teacher never asked for any of it — that is the point: it
    // shows what the student chose to do on their own.
    selfDirected: {
      unitTests: unitTests.map((u) => ({
        courseSlug: u.courseSlug,
        unit: u.unitTitle,
        correct: u.correct,
        total: u.total,
        percentage: u.percentage,
        completedAt: u.completedAt.toISOString(),
      })),
      frqs: frqs.map((f) => ({
        courseSlug: f.courseSlug,
        mode: f.mode,
        pointsEarned: f.pointsEarned,
        pointsPossible: f.pointsPossible,
        questionCount: f.frqCount,
        percentage: f.pointsPossible > 0 ? Math.round((f.pointsEarned / f.pointsPossible) * 100) : 0,
        completedAt: f.completedAt.toISOString(),
      })),
      satPracticeTests: satTests.map((t) => ({
        testNumber: t.testNumber,
        totalScore: t.totalScore,
        rwScore: t.rwScore,
        mathScore: t.mathScore,
        completedAt: t.completedAt.toISOString(),
      })),
      mcatPracticeTests: mcatTests.map((t) => ({
        section: t.sectionName,
        score: t.score,
        percentage: t.percentage,
        completedAt: t.completedAt.toISOString(),
      })),
      diagnostics: diagnostics.map((d) => ({
        category: d.category,
        scoreLabel: scoreLabelFromResults(d.results),
        takenAt: d.createdAt.toISOString(),
      })),
      counts: {
        unitTests: unitTests.length,
        frqs: frqs.length,
        satPracticeTests: satTests.length,
        mcatPracticeTests: mcatTests.length,
        diagnostics: diagnostics.length,
      },
    },
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
