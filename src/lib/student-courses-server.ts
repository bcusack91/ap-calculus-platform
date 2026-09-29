import { prisma } from '@/lib/prisma'
import { courseForCategory } from '@/lib/class-plan-config'
import { rankStudentCourses } from '@/lib/student-courses'

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

  return rankStudentCourses({
    progressCourseSlugs: progress.map((p) => p.topic.category.course.slug),
    chosenCourseSlug,
    latestDiagnosticCourseSlug: diagnostic ? courseForCategory(diagnostic.category)?.courseSlug ?? null : null,
  })
}
