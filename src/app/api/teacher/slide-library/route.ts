import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireTeacher } from '@/lib/teacher-auth'

/**
 * GET /api/teacher/slide-library — the pre-generated slide deck catalog.
 *   (no params)        → courses that have decks, with counts
 *   ?course=<slug>     → that course's decks grouped by curriculum category
 *   ?topic=<slug>      → one full deck (slides included — teacher-only route,
 *                        so poll answer keys are fine here)
 */
export async function GET(req: NextRequest) {
  const result = await requireTeacher()
  if ('error' in result && result.error) return result.error

  const topicSlug = req.nextUrl.searchParams.get('topic')
  if (topicSlug) {
    const deck = await prisma.topicSlideDeck.findUnique({ where: { topicSlug } })
    if (!deck) return NextResponse.json({ error: 'No deck for this topic yet' }, { status: 404 })
    return NextResponse.json({ deck }, { headers: { 'Cache-Control': 'private, no-store' } })
  }

  const courseSlug = req.nextUrl.searchParams.get('course')
  if (courseSlug) {
    const [course, decks] = await Promise.all([
      prisma.course.findUnique({
        where: { slug: courseSlug },
        select: {
          name: true,
          categories: { orderBy: { order: 'asc' }, select: { name: true, topics: { orderBy: { order: 'asc' }, select: { slug: true, title: true } } } },
        },
      }),
      prisma.topicSlideDeck.findMany({
        where: { courseSlug },
        select: { topicSlug: true, slideCount: true, pollCount: true, generatedAt: true },
      }),
    ])
    if (!course) return NextResponse.json({ error: 'Course not found' }, { status: 404 })
    const deckBySlug = new Map(decks.map(d => [d.topicSlug, d]))
    return NextResponse.json({
      courseName: course.name,
      categories: course.categories
        .map(c => ({
          name: c.name,
          topics: c.topics
            .filter(t => deckBySlug.has(t.slug))
            .map(t => ({ slug: t.slug, title: t.title, ...deckBySlug.get(t.slug)! })),
        }))
        .filter(c => c.topics.length > 0),
    }, { headers: { 'Cache-Control': 'private, no-store' } })
  }

  const grouped = await prisma.topicSlideDeck.groupBy({ by: ['courseSlug'], _count: { _all: true } })
  const courses = await prisma.course.findMany({
    where: { slug: { in: grouped.map(g => g.courseSlug) } },
    select: { slug: true, name: true },
  })
  const nameBySlug = new Map(courses.map(c => [c.slug, c.name]))
  return NextResponse.json({
    courses: grouped
      .map(g => ({ slug: g.courseSlug, name: nameBySlug.get(g.courseSlug) ?? g.courseSlug, deckCount: g._count._all }))
      .sort((a, b) => a.name.localeCompare(b.name)),
  }, { headers: { 'Cache-Control': 'private, no-store' } })
}
