/**
 * The order a course's topics are studied in, and a topic's neighbours in it.
 *
 * ONE definition of "the next topic" for every surface that offers one (the
 * topic page's prev/next cards, the flashcard session's end screen, the
 * post-completion panel when the topic is in no diagnostic plan). Before this
 * each surface improvised: the topic page walked the DB Category's topics by
 * `order`, which for the MCAT (one category of 43 topics in a parent/subtopic
 * tree, orders unique only among siblings) jumped from Circuits Part 1 to an
 * unrelated order-2 topic, and the flashcard end screen took the first
 * pending topic of ANY diagnostic plan (an old Precalculus plan sent an MCAT
 * student to Rational Functions).
 *
 * Sequence = the course hub's reading order:
 *   - a fixed-layout course (AP Calculus AB/BC, AP Precalculus, ASVAB — see
 *     src/lib/course-includes.ts) lists its layout's topics in layout order;
 *   - every other course walks its DB Categories by `order`, each category's
 *     top-level topics by `order`, and each topic's subtopics (MCAT areas →
 *     lessons) right after their parent, by `order`. Ties break on createdAt
 *     then title so the walk is stable.
 *
 * `orderCourseTopics` is pure (unit-tested); `getTopicNeighbors` feeds it from
 * the database.
 */
import { prisma } from '@/lib/prisma'
import { courseLayoutTopics, courseTopicWhere } from '@/lib/course-includes'

export interface SequenceRow {
  slug: string
  title: string
  order: number
  createdAt: Date
  parentTopicId: string | null
  id: string
  categoryId: string
  categoryOrder: number
  categoryName: string
}

export interface SequenceTopic {
  slug: string
  title: string
}

function byOrder(a: SequenceRow, b: SequenceRow): number {
  return a.order - b.order || a.createdAt.getTime() - b.createdAt.getTime() || a.title.localeCompare(b.title)
}

/** A course's topics in study order. `fixedOrder` (a code layout) wins when given. */
export function orderCourseTopics(rows: SequenceRow[], fixedOrder?: readonly string[] | null): SequenceTopic[] {
  if (fixedOrder && fixedOrder.length > 0) {
    const bySlug = new Map(rows.map((r) => [r.slug, r]))
    return fixedOrder.flatMap((slug) => {
      const r = bySlug.get(slug)
      return r ? [{ slug: r.slug, title: r.title }] : []
    })
  }
  const ids = new Set(rows.map((r) => r.id))
  const children = new Map<string, SequenceRow[]>()
  const topLevel: SequenceRow[] = []
  for (const r of rows) {
    // A subtopic whose parent is not in this course walks as a top-level topic.
    if (r.parentTopicId && ids.has(r.parentTopicId)) {
      children.set(r.parentTopicId, [...(children.get(r.parentTopicId) ?? []), r])
    } else {
      topLevel.push(r)
    }
  }
  const categories = new Map<string, { order: number; name: string; topics: SequenceRow[] }>()
  for (const r of topLevel) {
    const c = categories.get(r.categoryId) ?? { order: r.categoryOrder, name: r.categoryName, topics: [] }
    c.topics.push(r)
    categories.set(r.categoryId, c)
  }
  const out: SequenceTopic[] = []
  const sortedCategories = [...categories.values()].sort((a, b) => a.order - b.order || a.name.localeCompare(b.name))
  for (const c of sortedCategories) {
    for (const t of c.topics.sort(byOrder)) {
      out.push({ slug: t.slug, title: t.title })
      for (const s of (children.get(t.id) ?? []).sort(byOrder)) out.push({ slug: s.slug, title: s.title })
    }
  }
  return out
}

/** Previous and next topic around `slug` in an ordered sequence. */
export function neighborsIn(sequence: SequenceTopic[], slug: string): { prev: SequenceTopic | null; next: SequenceTopic | null } {
  const i = sequence.findIndex((t) => t.slug === slug)
  if (i < 0) return { prev: null, next: null }
  return { prev: i > 0 ? sequence[i - 1] : null, next: i < sequence.length - 1 ? sequence[i + 1] : null }
}

export interface TopicNeighbors {
  course: { slug: string; name: string }
  prev: SequenceTopic | null
  next: SequenceTopic | null
}

/** The topic's course and its neighbours in that course's study order; null for an unknown topic. */
export async function getTopicNeighbors(topicSlug: string): Promise<TopicNeighbors | null> {
  const topic = await prisma.topic.findUnique({
    where: { slug: topicSlug },
    select: { category: { select: { course: { select: { slug: true, name: true } } } } },
  })
  if (!topic) return null
  const course = topic.category.course
  const rows = await prisma.topic.findMany({
    where: courseTopicWhere(course.slug),
    select: {
      id: true,
      slug: true,
      title: true,
      order: true,
      createdAt: true,
      parentTopicId: true,
      categoryId: true,
      category: { select: { order: true, name: true } },
    },
  })
  const sequence = orderCourseTopics(
    rows.map((r) => ({ ...r, categoryOrder: r.category.order, categoryName: r.category.name })),
    courseLayoutTopics(course.slug),
  )
  return { course, ...neighborsIn(sequence, topicSlug) }
}
