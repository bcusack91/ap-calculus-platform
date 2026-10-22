import { prisma } from '@/lib/prisma'
import { courseForCategory } from '@/lib/class-plan-config'
import { rankStudentCourses } from '@/lib/student-courses'
import { coursesContaining } from '@/lib/course-includes'
import { studyCourseFor } from '@/lib/study-course-server'

/**
 * The student's ranked courses from the database (see rankStudentCourses).
 * Three small queries; callers should treat a failure as "no courses".
 */
export async function getStudentCourseRanking(userId: string): Promise<string[]> {
  const [progress, path, diagnostic] = await Promise.all([
    prisma.topicProgress.findMany({
      where: { userId },
      orderBy: { lastAccessed: 'desc' },
      take: 300,
      select: { topic: { select: { category: { select: { course: { select: { slug: true } } } } } } },
    }),
    prisma.learningPath.findUnique({ where: { userId }, select: { currentTopic: true } }),
    prisma.diagnosticTest.findFirst({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      select: { category: true },
    }),
  ])

  let chosenCourseSlug: string | null = null
  if (path?.currentTopic) {
    const topic = await prisma.topic.findUnique({
      where: { slug: path.currentTopic },
      select: { category: { select: { course: { select: { slug: true } } } } },
    })
    chosenCourseSlug = topic?.category.course.slug ?? null
  }

  // An AP Calculus AB topic studied by a BC student is BC work
  // (src/lib/course-includes.ts), so it counts toward BC, not a separate AB.
  const asStudied = new Map<string, string>()
  const topicCourses = [...new Set([...progress.map((p) => p.topic.category.course.slug), ...(chosenCourseSlug ? [chosenCourseSlug] : [])])]
  await Promise.all(
    topicCourses
      .filter((c) => coursesContaining(c).length > 1)
      .map(async (c) => asStudied.set(c, (await studyCourseFor(userId, c)) ?? c)),
  )
  const studied = (c: string) => asStudied.get(c) ?? c

  return rankStudentCourses({
    progressCourseSlugs: progress.map((p) => studied(p.topic.category.course.slug)),
    chosenCourseSlug: chosenCourseSlug ? studied(chosenCourseSlug) : null,
    latestDiagnosticCourseSlug: diagnostic ? courseForCategory(diagnostic.category)?.courseSlug ?? null : null,
  })
}
