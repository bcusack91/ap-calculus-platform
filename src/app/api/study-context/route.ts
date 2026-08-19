import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { getActiveStudyContext, isCourseContext, listStudyContexts, validateContext } from '@/lib/study-context'
import { maybeUnlockFlashcards } from '@/lib/flashcard-unlock'

/**
 * GET  /api/study-context — the user's active study mode + every mode they can
 *      switch to (personal, their classes, started course modes) + the course
 *      catalog for creating a new course study mode.
 * PUT  /api/study-context { context } — switch modes. 'course:<slug>' keys are
 *      created implicitly on first switch; class keys require membership.
 */
export async function GET() {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const userId = session.user.id

  const [active, contexts, courses] = await Promise.all([
    getActiveStudyContext(userId),
    listStudyContexts(userId),
    prisma.course.findMany({ select: { slug: true, name: true }, orderBy: { name: 'asc' } }),
  ])
  return NextResponse.json(
    { active, contexts, courseCatalog: courses },
    { headers: { 'Cache-Control': 'private, no-store' } },
  )
}

export async function PUT(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const userId = session.user.id

  const body = await req.json().catch(() => ({}))
  const context = typeof body?.context === 'string' ? body.context.trim() : ''
  if (!context || context.length > 100) {
    return NextResponse.json({ error: 'context required' }, { status: 400 })
  }
  if (!(await validateContext(userId, context))) {
    return NextResponse.json({ error: 'You do not have access to that study mode.' }, { status: 403 })
  }
  await prisma.user.update({ where: { id: userId }, data: { studyContext: context } })

  // Switching INTO a course mode brings already-earned cards along: re-run the
  // unlock check for every topic of that course the student has an exit-quiz
  // attempt on (idempotent; the helper re-verifies lesson-done + quiz-done and
  // writes into the now-active mode). Without this, a student who finished
  // "Sentence Structure" in Personal mode and THEN created their SAT Prep mode
  // found it inexplicably empty. Best-effort — a failure must not block the
  // switch.
  if (isCourseContext(context)) {
    try {
      const courseSlug = context.slice('course:'.length)
      // Caps sized for the largest course decks (MCAT: 102 topics) — the old
      // take:100/take:30 silently dropped topics for students far into a big
      // course. Lesson-completed topics are included because quiz-less topics
      // unlock on the lesson alone (see flashcard-unlock.ts).
      const [attempts, completed] = await Promise.all([
        prisma.exitQuizAttempt.findMany({
          where: { userId },
          select: { topicSlug: true },
          distinct: ['topicSlug'],
          take: 500,
        }),
        prisma.topicProgress.findMany({
          where: { userId, status: { in: ['COMPLETED', 'MASTERED'] } },
          select: { topic: { select: { slug: true } } },
          take: 500,
        }),
      ])
      const slugs = [...new Set([
        ...attempts.map((a) => a.topicSlug),
        ...completed.map((c) => c.topic.slug),
      ])]
      if (slugs.length > 0) {
        const courseTopics = await prisma.topic.findMany({
          where: { slug: { in: slugs }, category: { course: { slug: courseSlug } } },
          select: { slug: true },
          take: 200,
        })
        for (const t of courseTopics) {
          await maybeUnlockFlashcards(userId, t.slug)
        }
      }
    } catch (backfillError) {
      console.error('course-mode unlock backfill failed (non-fatal):', backfillError)
    }
  }

  return NextResponse.json({ active: context })
}
