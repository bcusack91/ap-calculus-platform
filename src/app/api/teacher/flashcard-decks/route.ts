import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { coursesIn, coursesTopicWhere } from '@/lib/course-includes'
import { isHiddenTopicSlug } from '@/lib/legacy-topic-redirects'
import { requireTeacher, requireClassroomAccess } from '@/lib/teacher-auth'

/**
 * GET /api/teacher/flashcard-decks[?classroomId=<id>]
 *
 * Platform topic decks a teacher can assign as FLASHCARD_REVIEW: every DB
 * Topic that has at least one seeded Flashcard, grouped by course for the
 * assignment modal's two-step (course → deck) picker.
 *
 * These are NOT FlashcardSets — assigning one goes through
 * POST /api/teacher/flashcard-sets/from-topic, which materializes a
 * teacher-owned copy so the existing flashcardSetId ownership validation and
 * student set-viewer flow work unchanged.
 *
 * Scoping mirrors the topic picker: with ?classroomId= the list is filtered to
 * the classroom's attached courses (ClassroomCourse) so a teacher isn't
 * scrolling ~1,000 decks; a classroom with NO attached courses — and a call
 * without a classroomId — gets the full catalog, so nothing is ever
 * unassignable.
 */
export async function GET(req: NextRequest) {
  try {
    const classroomId = req.nextUrl.searchParams.get('classroomId')

    let courseFilter: string[] = []
    if (classroomId) {
      // Teaching access (owner, admin, or co-teacher), same gate as the
      // neighboring assignment routes.
      const gate = await requireClassroomAccess(classroomId)
      if ('error' in gate && gate.error) return gate.error
      const attached = await prisma.classroomCourse.findMany({
        where: { classroomId },
        select: { courseSlug: true },
      })
      courseFilter = attached.map((a) => a.courseSlug)
    } else {
      const gate = await requireTeacher()
      if ('error' in gate && gate.error) return gate.error
    }

    const topics = await prisma.topic.findMany({
      where: {
        flashcards: { some: {} },
        ...(courseFilter.length > 0
          ? coursesTopicWhere(courseFilter)
          : {}),
      },
      select: {
        slug: true,
        title: true,
        order: true,
        _count: { select: { flashcards: true } },
        category: {
          select: {
            name: true,
            order: true,
            course: { select: { slug: true, name: true, order: true } },
          },
        },
      },
    })

    // Group by course; sort course → category → topic by their seeded orders.
    topics.sort(
      (a, b) =>
        a.category.course.order - b.category.course.order ||
        a.category.order - b.category.order ||
        a.order - b.order
    )
    const byCourse = new Map<
      string,
      {
        courseSlug: string
        courseTitle: string
        decks: { topicSlug: string; topicTitle: string; category: string; cardCount: number }[]
      }
    >()
    // A class's course includes the courses it contains (a BC class gets the AB
    // decks, src/lib/course-includes.ts); file those under the class's course.
    const containerOf = (slug: string) =>
      courseFilter.length > 0 && !courseFilter.includes(slug)
        ? courseFilter.find((f) => coursesIn(f).includes(slug))
        : undefined
    const filterCourse = new Map<string, { slug: string; name: string }>()
    if (courseFilter.length > 0) {
      const rows = await prisma.course.findMany({ where: { slug: { in: courseFilter } }, select: { slug: true, name: true } })
      for (const r of rows) filterCourse.set(r.slug, r)
    }
    for (const t of topics) {
      if (isHiddenTopicSlug(t.slug)) continue
      const container = containerOf(t.category.course.slug)
      const c = (container && filterCourse.get(container)) || t.category.course
      const group = byCourse.get(c.slug) ?? { courseSlug: c.slug, courseTitle: c.name, decks: [] }
      group.decks.push({
        topicSlug: t.slug,
        topicTitle: t.title,
        category: t.category.name,
        cardCount: t._count.flashcards,
      })
      byCourse.set(c.slug, group)
    }

    return NextResponse.json({ courses: [...byCourse.values()] })
  } catch (error) {
    console.error('[GET /api/teacher/flashcard-decks]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
