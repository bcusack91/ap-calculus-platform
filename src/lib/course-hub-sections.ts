import { prisma } from '@/lib/prisma'
import { courseCategoryLayout, courseTopicWhere, coursesIn, type CourseUnitSection } from '@/lib/course-includes'
import { isHiddenTopicSlug } from '@/lib/legacy-topic-redirects'

/**
 * The sections a course hub lists (server only).
 *
 * Most courses are laid out by their DB Categories. A course with a fixed
 * layout in src/lib/course-includes.ts (the calculus courses) is laid out by
 * CED unit instead, and AP Calculus BC's units interleave the shared AB topics
 * with the BC-only ones. Either way a legacy (308) or retired topic row is
 * never listed (isHiddenTopicSlug), so the hub never shows a duplicate that
 * bounces when clicked.
 */

export interface HubTopic {
  id: string
  slug: string
  title: string
  description: string | null
  subtopicCount: number
  /** The course that owns the row (AP Calculus AB for an AB topic on the BC hub). */
  courseSlug: string
}

export interface HubSection {
  /** Category id, or the layout key ('unit-6') for a fixed layout. */
  id: string
  name: string
  /** /categories/<slug> target, or null when the section spans several Categories. */
  slug: string | null
  description: string | null
  icon: string | null
  topics: HubTopic[]
}

type TopicRow = {
  id: string
  slug: string
  title: string
  description: string
  order: number
  category: { slug: string; course: { slug: string } }
  _count: { subtopics: number }
}

const toHubTopic = (t: TopicRow): HubTopic => ({
  id: t.id,
  slug: t.slug,
  title: t.title,
  description: t.description,
  subtopicCount: t._count.subtopics,
  courseSlug: t.category.course.slug,
})

/**
 * Group rows into a fixed layout's sections (pure). Listed topics come in the
 * layout's order; a visible row the layout does not name joins the section
 * whose Categories hold it, after the listed ones. Legacy and retired rows are
 * dropped, and so is any row no section claims.
 */
export function groupByLayout<T extends { slug: string }>(
  layout: CourseUnitSection[],
  rows: T[],
  categoryOf: (row: T) => string,
  orderOf: (row: T) => number = () => 0,
): { section: CourseUnitSection; rows: T[] }[] {
  const visible = rows.filter((t) => !isHiddenTopicSlug(t.slug))
  const bySlug = new Map(visible.map((t) => [t.slug, t]))
  const placed = new Set<string>()
  return layout.map((section) => {
    const out: T[] = []
    for (const slug of section.topics) {
      const row = bySlug.get(slug)
      if (row && !placed.has(slug)) {
        out.push(row)
        placed.add(slug)
      }
    }
    const extras = visible
      .filter((t) => !placed.has(t.slug) && section.categories.includes(categoryOf(t)))
      .sort((a, b) => orderOf(a) - orderOf(b))
    for (const t of extras) {
      out.push(t)
      placed.add(t.slug)
    }
    return { section, rows: out }
  })
}

/** Place DB topic rows into a fixed layout as hub sections (pure; exported for tests). */
export function placeTopicsInLayout(
  layout: CourseUnitSection[],
  rows: TopicRow[],
  categories: Map<string, { id: string; description: string | null; icon: string | null }>,
): HubSection[] {
  return groupByLayout(layout, rows, (t) => t.category.slug, (t) => t.order)
    .filter((g) => g.rows.length > 0)
    .map(({ section, rows: topics }) => {
      const single = section.categories.length === 1 ? categories.get(section.categories[0]) : undefined
      return {
        id: section.key,
        name: section.name,
        // Link the unit's Category page only when it is the whole unit and exists.
        slug: section.categories.length === 1 && categories.has(section.categories[0]) ? section.categories[0] : null,
        description: single?.description ?? null,
        icon: categories.get(section.categories[0])?.icon ?? null,
        topics: topics.map(toHubTopic),
      }
    })
}

const topicSelect = {
  id: true,
  slug: true,
  title: true,
  description: true,
  order: true,
  category: { select: { slug: true, course: { select: { slug: true } } } },
  _count: { select: { subtopics: true } },
} as const

/**
 * Hub sections for `courseSlug`, or null when the course has no fixed layout
 * (the caller then lists its DB Categories through visibleHubCategories).
 */
export async function fixedLayoutHubSections(courseSlug: string): Promise<HubSection[] | null> {
  const layout = courseCategoryLayout(courseSlug)
  if (!layout) return null
  const [rows, categories] = await Promise.all([
    prisma.topic.findMany({
      where: { ...courseTopicWhere(courseSlug), parentTopicId: null },
      select: topicSelect,
      orderBy: { order: 'asc' },
    }),
    prisma.category.findMany({
      where: { course: { slug: { in: coursesIn(courseSlug) } } },
      select: { id: true, slug: true, description: true, icon: true },
    }),
  ])
  return placeTopicsInLayout(layout, rows, new Map(categories.map((c) => [c.slug, c])))
}

/** A DB Category's topics with legacy and retired rows removed. */
export function visibleTopics<T extends { slug: string }>(topics: T[]): T[] {
  return topics.filter((t) => !isHiddenTopicSlug(t.slug))
}
