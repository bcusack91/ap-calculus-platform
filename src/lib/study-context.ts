import { prisma } from '@/lib/prisma'

/**
 * Study contexts — independent flashcard decks per "study mode".
 *
 * A context key is one of:
 *   'personal'            — the default deck (all pre-existing progress lives here)
 *   'class:<classroomId>' — a classroom the student belongs to (or teaches)
 *   'course:<courseSlug>' — a self-created course study mode (e.g. MCAT mode)
 *
 * The ACTIVE context lives on User.studyContext and is resolved SERVER-side by
 * every flashcard read/write (never trusted from the client), so switching
 * modes instantly re-scopes the review queue, due counts, topic sessions, and
 * lesson-completion unlocks. FlashcardProgress rows are keyed
 * (userId, flashcardId, context): the same card can be "new" in a fresh MCAT
 * class even if mastered long ago in the personal deck — which is the point.
 */

export const PERSONAL_CONTEXT = 'personal'

export function isClassContext(key: string): boolean {
  return key.startsWith('class:')
}
export function isCourseContext(key: string): boolean {
  return key.startsWith('course:')
}

/**
 * The user's effective active context. Falls back to 'personal' when the
 * stored context no longer validates (kicked from the class, deleted course)
 * — without writing back, so rejoining the class restores that deck.
 */
export async function getActiveStudyContext(userId: string): Promise<string> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { studyContext: true },
  })
  const key = user?.studyContext || PERSONAL_CONTEXT
  return (await validateContext(userId, key)) ? key : PERSONAL_CONTEXT
}

/** True when `key` is a context this user may study in right now. */
export async function validateContext(userId: string, key: string): Promise<boolean> {
  if (key === PERSONAL_CONTEXT) return true
  if (isClassContext(key)) {
    const classroomId = key.slice('class:'.length)
    if (!classroomId) return false
    const [member, classroom, coTeacher] = await Promise.all([
      prisma.classroomMember.findUnique({
        where: { classroomId_userId: { classroomId, userId } },
        select: { isActive: true },
      }),
      prisma.classroom.findUnique({ where: { id: classroomId }, select: { teacherId: true, isActive: true } }),
      prisma.classroomCoTeacher.findUnique({
        where: { classroomId_userId: { classroomId, userId } },
        select: { id: true },
      }),
    ])
    if (!classroom?.isActive) return false
    return !!member?.isActive || classroom.teacherId === userId || !!coTeacher
  }
  if (isCourseContext(key)) {
    const slug = key.slice('course:'.length)
    if (!slug) return false
    const course = await prisma.course.findUnique({ where: { slug }, select: { id: true } })
    return !!course
  }
  return false
}

export interface StudyContextOption {
  key: string
  label: string
  kind: 'personal' | 'class' | 'course'
  cardCount?: number
}

/**
 * Every context available to this user: personal, their active classes, and
 * course modes they've already started (distinct course: keys in progress).
 */
export async function listStudyContexts(userId: string): Promise<StudyContextOption[]> {
  const [memberships, teaching, coTeaching, usedContexts] = await Promise.all([
    prisma.classroomMember.findMany({
      where: { userId, isActive: true, classroom: { isActive: true } },
      select: { classroom: { select: { id: true, name: true } } },
    }),
    prisma.classroom.findMany({
      where: { teacherId: userId, isActive: true },
      select: { id: true, name: true },
    }),
    prisma.classroomCoTeacher.findMany({
      where: { userId, classroom: { isActive: true } },
      select: { classroom: { select: { id: true, name: true } } },
    }),
    prisma.flashcardProgress.groupBy({
      by: ['context'],
      where: { userId },
      _count: { _all: true },
    }),
  ])

  const countByKey = new Map(usedContexts.map(u => [u.context, u._count._all]))
  const options: StudyContextOption[] = [
    { key: PERSONAL_CONTEXT, label: 'Personal (everything)', kind: 'personal', cardCount: countByKey.get(PERSONAL_CONTEXT) ?? 0 },
  ]

  const classrooms = new Map<string, string>()
  for (const m of memberships) classrooms.set(m.classroom.id, m.classroom.name)
  for (const c of teaching) classrooms.set(c.id, c.name)
  for (const c of coTeaching) classrooms.set(c.classroom.id, c.classroom.name)
  for (const [id, name] of classrooms) {
    options.push({ key: `class:${id}`, label: name, kind: 'class', cardCount: countByKey.get(`class:${id}`) ?? 0 })
  }

  // Course modes already in use (started via the switcher at some point).
  const courseSlugs = [...countByKey.keys()].filter(isCourseContext).map(k => k.slice('course:'.length))
  if (courseSlugs.length > 0) {
    const courses = await prisma.course.findMany({
      where: { slug: { in: courseSlugs } },
      select: { slug: true, name: true },
    })
    const nameBySlug = new Map(courses.map(c => [c.slug, c.name]))
    for (const slug of courseSlugs) {
      options.push({
        key: `course:${slug}`,
        label: `${nameBySlug.get(slug) ?? slug} (study mode)`,
        kind: 'course',
        cardCount: countByKey.get(`course:${slug}`) ?? 0,
      })
    }
  }

  return options
}
