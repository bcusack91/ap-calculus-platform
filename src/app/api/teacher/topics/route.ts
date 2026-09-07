import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireTeacher } from '@/lib/teacher-auth'
import { MCAT_SECTIONS } from '@/data/competitive-questions/mcat-bank'

/**
 * GET /api/teacher/topics — list all topics grouped by course for assignment creation
 */
export async function GET() {
  try {
    const result = await requireTeacher()
    if ('error' in result && result.error) return result.error

    const courses = await prisma.course.findMany({
      include: {
        categories: {
          include: {
            topics: {
              select: { slug: true, title: true, order: true },
              orderBy: { order: 'asc' },
            },
          },
          orderBy: { order: 'asc' },
        },
      },
      orderBy: { order: 'asc' },
    })

    // Transform to the shape the client expects: { courseTitle, topics[] }.
    // `kind` tags which slug vocabulary a group's topics belong to:
    //   'curriculum' — real DB Topic rows with /topics/<slug> pages (lessons,
    //                  quizzes, and competitive play are all valid targets)
    //   'bank'       — competitive-bank-only slugs with NO topic pages; they
    //                  are only assignable as COMPETITIVE_PRACTICE
    const grouped = courses.map((c) => ({
      courseSlug: c.slug,
      courseTitle: c.name,
      kind: 'curriculum' as const,
      topics: c.categories.flatMap((cat) =>
        cat.topics.map((t) => ({ slug: t.slug, title: t.title, category: cat.name }))
      ),
    }))

    // MCAT competitive hierarchy. These slugs are bank-backed rather than DB
    // Topic rows, so they don't come out of the query above — but teachers need
    // them to assign MCAT competitive practice (individually or mixed with
    // other courses' topics in one multi-topic assignment). MCAT is the only
    // course with a separate bank vocabulary — SAT's competitive bank reuses
    // the lesson taxonomy, so no analogous pseudo-course exists for it.
    const mcatCompetitive = {
      // Pseudo-course: competitive-bank topics with no DB Course row. The slug
      // is only an identity key for classroom-course attachment.
      courseSlug: 'mcat-competitive',
      courseTitle: 'MCAT Prep (Competitive)',
      kind: 'bank' as const,
      topics: MCAT_SECTIONS.flatMap((section) => [
        { slug: section.slug, title: `${section.short} — whole section`, category: section.title },
        ...section.areas.flatMap((area) => [
          { slug: area.slug, title: `${area.title} — all`, category: section.short },
          ...area.subtopics.map((t) => ({ slug: t.slug, title: t.title, category: `${section.short} · ${area.title}` })),
        ]),
      ]),
    }

    return NextResponse.json([...grouped, mcatCompetitive])
  } catch (error) {
    console.error('[GET /api/teacher/topics]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
