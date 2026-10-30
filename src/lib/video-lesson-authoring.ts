import { NextResponse } from 'next/server'
import { Prisma } from '@prisma/client'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { courseCategoryLayout, coursesIn, courseContainsTopic, excludedTopicsOf } from '@/lib/course-includes'
import { groupByLayout, visibleTopics } from '@/lib/course-hub-sections'
import { getInteractiveLessonData, getInteractiveTopicConfig } from '@/data/interactive-lessons/registry'
import { getShotList } from '@/data/video-shot-lists'
import {
  dedupeSuggestions,
  draftClipIds,
  stepRowsFromDraft,
  suggestionsFromDeckSlides,
  suggestionsFromLessonSections,
  validateDraftForApproval,
  type ClipForApproval,
  type DraftIssue,
  type QuestionSuggestion,
} from '@/lib/video-lesson-admin'

/**
 * Server side of the video-lesson instructor and owner tools (plan §5).
 * Routes: /api/teacher/video-lessons/* and /api/admin/instructors/*.
 */

export const noStore = { 'Cache-Control': 'private, no-store' }

/** What the authoring tools get for a clip. */
export const clipSelect = {
  id: true, title: true, provider: true, providerId: true, durationSec: true, tags: true,
  status: true, approvedAt: true, createdAt: true,
  _count: { select: { steps: true } },
} as const

export type Actor = {
  userId: string
  isAdmin: boolean
  /** The caller's own linked instructor (any isActive), or null. */
  own: { id: string; isActive: boolean } | null
}

/**
 * Signed in, TEACHER or ADMIN (role re-read from the DB), plus the linked
 * instructor if any. Returns an error response for anyone else.
 */
export async function getActor(): Promise<{ actor: Actor } | { error: NextResponse }> {
  const session = await auth()
  const id = session?.user?.id
  if (!id) return { error: NextResponse.json({ error: 'Unauthorized' }, { status: 401 }) }
  const user = await prisma.user.findUnique({
    where: { id },
    select: { id: true, role: true, instructorProfile: { select: { id: true, isActive: true } } },
  })
  if (!user || (user.role !== 'TEACHER' && user.role !== 'ADMIN')) {
    return { error: NextResponse.json({ error: 'Forbidden' }, { status: 403 }) }
  }
  return { actor: { userId: user.id, isAdmin: user.role === 'ADMIN', own: user.instructorProfile ?? null } }
}

const notInstructor = () =>
  NextResponse.json(
    { error: 'Your account is not set up as an instructor yet. Ask the site owner to set up your instructor profile.', code: 'NOT_INSTRUCTOR' },
    { status: 403 },
  )

/** May this actor author for this instructor? Admins: any. Others: their own ACTIVE profile. */
export function canActFor(actor: Actor, instructorId: string): boolean {
  if (actor.isAdmin) return true
  return !!actor.own && actor.own.isActive && actor.own.id === instructorId
}

/**
 * The instructor a list/create call works on: `?instructorId=` for admins,
 * otherwise the caller's own active profile.
 */
export type AuthoringInstructor = { id: string; slug: string; name: string; courses: string[]; isActive: boolean }

export async function resolveInstructor(
  actor: Actor,
  instructorIdParam: string | null,
): Promise<{ instructor: AuthoringInstructor } | { error: NextResponse }> {
  const id = actor.isAdmin && instructorIdParam ? instructorIdParam : actor.own?.id
  if (!id) {
    return actor.isAdmin
      ? { error: NextResponse.json({ error: 'Pick an instructor.', code: 'PICK_INSTRUCTOR' }, { status: 400 }) }
      : { error: notInstructor() }
  }
  if (!canActFor(actor, id)) return { error: notInstructor() }
  const instructor = await prisma.instructor.findUnique({
    where: { id },
    select: { id: true, slug: true, name: true, courses: true, isActive: true },
  })
  if (!instructor) return { error: NextResponse.json({ error: 'Instructor not found' }, { status: 404 }) }
  return { instructor }
}

export async function requireInstructorCaller(
  instructorIdParam: string | null,
): Promise<{ actor: Actor; instructor: AuthoringInstructor } | { error: NextResponse }> {
  const a = await getActor()
  if ('error' in a) return a
  const r = await resolveInstructor(a.actor, instructorIdParam)
  if ('error' in r) return r
  return { actor: a.actor, instructor: r.instructor }
}

/** A lesson the caller may author (404 for anyone else's). */
export async function loadOwnedLesson(id: string) {
  const a = await getActor()
  if ('error' in a) return a
  const lesson = await prisma.videoLesson.findUnique({
    where: { id },
    select: {
      id: true, instructorId: true, topicSlug: true, courseSlug: true, title: true, published: true,
      archived: true, version: true, draft: true, draftState: true, reviewNote: true, submittedAt: true,
      publishedAt: true, updatedAt: true,
      steps: { orderBy: { order: 'asc' }, select: { order: true, clipId: true, yield: true, questions: true } },
    },
  })
  if (!lesson || !canActFor(a.actor, lesson.instructorId)) {
    return { error: NextResponse.json({ error: 'Lesson not found' }, { status: 404 }) }
  }
  return { actor: a.actor, lesson }
}

/** Clips by id for the approval check. */
export async function clipsForDraft(draft: unknown, client: Prisma.TransactionClient = prisma): Promise<Map<string, ClipForApproval>> {
  const ids = draftClipIds(draft)
  if (!ids.length) return new Map()
  const rows = await client.videoClip.findMany({
    where: { id: { in: ids } },
    select: { id: true, instructorId: true, durationSec: true, status: true },
  })
  return new Map(rows.map((c) => [c.id, c]))
}

export class ApprovalError extends Error {
  constructor(message: string, public status: number, public issues: DraftIssue[] = []) {
    super(message)
  }
}

/**
 * Approve a submitted lesson in ONE transaction: validate the draft, replace
 * the published steps (order = index), publish, bump the version, clear the
 * draft and mark the clips APPROVED.
 */
export async function approveLesson(lessonId: string, adminId: string) {
  return prisma.$transaction(async (tx) => {
    const lesson = await tx.videoLesson.findUnique({
      where: { id: lessonId },
      select: { id: true, instructorId: true, draft: true, draftState: true, publishedAt: true, version: true },
    })
    if (!lesson) throw new ApprovalError('Lesson not found', 404)
    if (lesson.draftState !== 'SUBMITTED') throw new ApprovalError('This lesson is not waiting for review.', 409)
    const check = validateDraftForApproval(lesson.draft, await clipsForDraft(lesson.draft, tx), lesson.instructorId)
    if (!check.ok) throw new ApprovalError('The draft does not pass the checks.', 422, check.issues)
    const now = new Date()
    const rows = stepRowsFromDraft(check.draft)
    await tx.videoLessonStep.deleteMany({ where: { lessonId } })
    await tx.videoLessonStep.createMany({
      data: rows.map((r) => ({ ...r, lessonId, questions: r.questions as Prisma.InputJsonValue })),
    })
    const updated = await tx.videoLesson.update({
      where: { id: lessonId },
      data: {
        title: check.draft.title,
        published: true,
        archived: false,
        publishedAt: lesson.publishedAt ?? now,
        version: { increment: 1 },
        draft: Prisma.DbNull,
        draftState: null,
        submittedAt: null,
        reviewNote: null,
      },
      select: { id: true, version: true, published: true, publishedAt: true },
    })
    await tx.videoClip.updateMany({
      where: { id: { in: rows.map((r) => r.clipId) }, status: { not: 'APPROVED' } },
      data: { status: 'APPROVED', approvedById: adminId, approvedAt: now },
    })
    return updated
  })
}

/** A course's topics grouped by unit (fixed CED layout when the course has one). */
export async function courseTopicGroups(courseSlug: string) {
  const categories = await prisma.category.findMany({
    where: { course: { slug: { in: coursesIn(courseSlug) } } },
    orderBy: { order: 'asc' },
    select: {
      name: true,
      slug: true,
      course: { select: { slug: true } },
      topics: { where: { parentTopicId: null }, orderBy: { order: 'asc' }, select: { slug: true, title: true } },
    },
  })
  const excluded = new Set(excludedTopicsOf(courseSlug))
  const layout = courseCategoryLayout(courseSlug)
  const groups = layout
    ? groupByLayout(
        layout,
        categories.flatMap((c) => c.topics.filter((t) => !excluded.has(t.slug)).map((t) => ({ ...t, categorySlug: c.slug }))),
        (t) => t.categorySlug,
      ).map(({ section, rows }) => ({ name: section.name, topics: rows.map(({ slug, title }) => ({ slug, title })) }))
    : categories
        .filter((c) => c.course.slug === courseSlug)
        .map((c) => ({ name: c.name, topics: visibleTopics(c.topics) }))
  return groups.filter((g) => g.topics.length > 0)
}

/** Does `topicSlug` exist and belong to `courseSlug` (included courses count)? */
export async function topicInCourse(topicSlug: string, courseSlug: string) {
  const topic = await prisma.topic.findUnique({
    where: { slug: topicSlug },
    select: { slug: true, title: true, category: { select: { course: { select: { slug: true } } } } },
  })
  if (!topic) return null
  return courseContainsTopic(courseSlug, topic.category.course.slug, topic.slug) ? topic : null
}

/** Checkpoint-question suggestions for a topic: lesson parts first, then deck polls. */
export async function topicQuestionSuggestions(topicSlug: string): Promise<QuestionSuggestion[]> {
  const out: QuestionSuggestion[] = []
  // The topic's recording plan comes first: its questions were written for the clips.
  const plan = await getShotList(topicSlug)
  plan?.clips.forEach((clip, i) => {
    for (const q of clip.checkpoint) out.push({ ...q, source: `recording plan · clip ${i + 1}: ${clip.title}` })
  })
  const config = getInteractiveTopicConfig(topicSlug)
  if (config) {
    const parts = await Promise.all(
      config.parts.map((_, i) => getInteractiveLessonData(topicSlug, i + 1).catch(() => null)),
    )
    parts.forEach((data, i) => {
      if (data) out.push(...suggestionsFromLessonSections(data.sections, i + 1))
    })
  }
  const deck = await prisma.topicSlideDeck.findUnique({ where: { topicSlug }, select: { slides: true } })
  if (deck) out.push(...suggestionsFromDeckSlides(deck.slides))
  return dedupeSuggestions(out)
}
