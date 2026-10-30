import { prisma } from '@/lib/prisma'
import { visibleSteps, parseProgressSteps, type StoredStep, type VisibleStep, type ProgressSteps } from '@/lib/video-lesson-core'

/**
 * Server reads for video lessons. Students only ever see lessons that are
 * published, not archived, and whose instructor is active.
 */

const STUDENT_VISIBLE = { published: true, archived: false, instructor: { isActive: true } } as const

const stepInclude = {
  orderBy: { order: 'asc' as const },
  select: {
    order: true,
    clipId: true,
    yield: true,
    questions: true,
    clip: { select: { title: true, provider: true, providerId: true, durationSec: true } },
  },
}

export type InstructorCard = {
  lessonId: string
  instructor: { slug: string; name: string; headline: string; bio: string; photoUrl: string | null }
  clipCount: number
  totalSeconds: number
}

/** Instructors with a published video lesson for this topic (picker cards). */
export async function publishedLessonsForTopic(topicSlug: string): Promise<InstructorCard[]> {
  const lessons = await prisma.videoLesson.findMany({
    where: { topicSlug, ...STUDENT_VISIBLE },
    orderBy: { publishedAt: 'asc' },
    select: {
      id: true,
      instructor: { select: { slug: true, name: true, headline: true, bio: true, photoUrl: true } },
      steps: { select: { yield: true, clip: { select: { durationSec: true } } } },
    },
  })
  return lessons.map((l) => {
    // Cards show the default (non-low-yield) length.
    const shown = l.steps.filter((s) => s.yield !== 'LOW')
    return {
      lessonId: l.id,
      instructor: l.instructor,
      clipCount: shown.length,
      totalSeconds: shown.reduce((n, s) => n + s.clip.durationSec, 0),
    }
  })
}

/** Topic slugs (from a list) that have at least one published video lesson. */
export async function topicsWithVideoLessons(topicSlugs: readonly string[]): Promise<Set<string>> {
  if (!topicSlugs.length) return new Set()
  const rows = await prisma.videoLesson.findMany({
    where: { topicSlug: { in: [...topicSlugs] }, ...STUDENT_VISIBLE },
    select: { topicSlug: true },
    distinct: ['topicSlug'],
  })
  return new Set(rows.map((r) => r.topicSlug))
}

export async function hasVideoLesson(topicSlug: string): Promise<boolean> {
  return (await topicsWithVideoLessons([topicSlug])).has(topicSlug)
}

export type LoadedLesson = {
  id: string
  title: string
  topicSlug: string
  courseSlug: string
  version: number
  instructor: { id: string; slug: string; name: string; headline: string; photoUrl: string | null }
  steps: VisibleStep[]
  includeLowYield: boolean
  progress: ProgressSteps
  completedAt: Date | null
}

/** A student's view of one instructor's lesson for a topic, with their progress. */
export async function loadStudentLesson(topicSlug: string, instructorSlug: string, userId: string | null): Promise<LoadedLesson | null> {
  const lesson = await prisma.videoLesson.findFirst({
    where: { topicSlug, instructor: { slug: instructorSlug, isActive: true }, published: true, archived: false },
    select: {
      id: true,
      title: true,
      topicSlug: true,
      courseSlug: true,
      version: true,
      instructor: { select: { id: true, slug: true, name: true, headline: true, photoUrl: true } },
      steps: stepInclude,
    },
  })
  if (!lesson) return null
  const [user, progress] = userId
    ? await Promise.all([
        prisma.user.findUnique({ where: { id: userId }, select: { lessonIncludeLowYield: true } }),
        prisma.videoLessonProgress.findUnique({ where: { userId_lessonId: { userId, lessonId: lesson.id } }, select: { steps: true, completedAt: true } }),
      ])
    : [null, null]
  const includeLowYield = !!user?.lessonIncludeLowYield
  return {
    id: lesson.id,
    title: lesson.title,
    topicSlug: lesson.topicSlug,
    courseSlug: lesson.courseSlug,
    version: lesson.version,
    instructor: lesson.instructor,
    steps: visibleSteps(lesson.steps as StoredStep[], includeLowYield),
    includeLowYield,
    progress: parseProgressSteps(progress?.steps),
    completedAt: progress?.completedAt ?? null,
  }
}

/** A published lesson by id, for the progress and answer routes. */
export async function loadPublishedLessonById(lessonId: string) {
  return prisma.videoLesson.findFirst({
    where: { id: lessonId, ...STUDENT_VISIBLE },
    select: { id: true, topicSlug: true, courseSlug: true, version: true, steps: stepInclude },
  })
}
