import { prisma } from '@/lib/prisma'
import { CLASS_PLAN_COURSES } from '@/lib/class-plan-config'
import { coursesContaining } from '@/lib/course-includes'

/**
 * The course a student is studying a topic FOR (server only).
 *
 * A topic belongs to exactly one course (Topic -> Category -> Course), but an
 * AP Calculus AB topic is also part of AP Calculus BC (src/lib/course-includes.ts).
 * For a BC student that AB lesson is BC work: labels, back links, the primary
 * course and the flashcard deck should say BC. A student counts as studying
 * course C when they have, for C:
 *   - C as their active flashcard study mode (decisive: they picked it), or
 *   - a diagnostic, an active study plan, or an active class enrolment for C;
 *     the most recent of these signals wins.
 * With no signal for a containing course the topic's own course is returned,
 * so an AB student (or a visitor) is never moved to BC.
 */

function diagnosticPrefixFor(courseSlug: string): string | null {
  return CLASS_PLAN_COURSES.find((c) => c.courseSlug === courseSlug)?.categoryPrefix ?? null
}

/** Pure ranking step of studyCourseFor (exported for tests). */
export function pickStudyCourse(opts: {
  topicCourse: string
  candidates: string[]
  activeContextCourse: string | null
  signals: { course: string; at: Date }[]
}): string {
  const { topicCourse, candidates, activeContextCourse, signals } = opts
  if (activeContextCourse && candidates.includes(activeContextCourse)) return activeContextCourse
  let best: { course: string; at: number } | null = null
  for (const s of signals) {
    if (!candidates.includes(s.course)) continue
    const at = s.at.getTime()
    if (!best || at > best.at) best = { course: s.course, at }
  }
  return best?.course ?? topicCourse
}

/**
 * `topicCourse` for most students; a containing course (AP Calculus BC for an
 * AB topic) when the student is studying that course. Never throws: any DB
 * failure falls back to the topic's own course.
 */
export async function studyCourseFor(userId: string | null | undefined, topicCourse: string | null | undefined): Promise<string | null> {
  if (!topicCourse) return topicCourse ?? null
  const candidates = coursesContaining(topicCourse)
  if (!userId || candidates.length === 1) return topicCourse
  try {
    const [user, diagnostics, plans, classes] = await Promise.all([
      prisma.user.findUnique({ where: { id: userId }, select: { studyContext: true } }),
      Promise.all(
        candidates.map(async (course) => {
          const prefix = diagnosticPrefixFor(course)
          if (!prefix) return null
          const d = await prisma.diagnosticTest.findFirst({
            where: { userId, category: { startsWith: prefix } },
            orderBy: { createdAt: 'desc' },
            select: { createdAt: true },
          })
          return d ? { course, at: d.createdAt } : null
        }),
      ),
      prisma.studyPlan.findMany({
        where: { userId, isActive: true, courseSlug: { in: candidates } },
        select: { courseSlug: true, updatedAt: true },
      }),
      prisma.classroomMember.findMany({
        where: { userId, isActive: true, classroom: { isActive: true, courses: { some: { courseSlug: { in: candidates } } } } },
        select: { joinedAt: true, classroom: { select: { courses: { select: { courseSlug: true } } } } },
      }),
    ])
    const ctx = user?.studyContext ?? ''
    const activeContextCourse = ctx.startsWith('course:') ? ctx.slice('course:'.length) : null
    const signals: { course: string; at: Date }[] = []
    for (const d of diagnostics) if (d) signals.push(d)
    for (const p of plans) if (p.courseSlug) signals.push({ course: p.courseSlug, at: p.updatedAt })
    for (const m of classes) {
      for (const c of m.classroom.courses) {
        if (candidates.includes(c.courseSlug)) signals.push({ course: c.courseSlug, at: m.joinedAt })
      }
    }
    return pickStudyCourse({ topicCourse, candidates, activeContextCourse, signals })
  } catch {
    return topicCourse
  }
}
