import { prisma } from '@/lib/prisma'

/**
 * Build-time slug selection for generateStaticParams on the topic routes.
 *
 * Returns ~200 topic slugs drawn from the most popular courses (same curated
 * ordering as the homepage POPULAR_SLUGS card grid), ordered by course
 * popularity → category order → topic order. Everything not in this subset
 * still renders on first request and is ISR-cached (dynamicParams defaults to
 * true) — the subset only controls what gets prerendered at build time.
 *
 * Resilient by design: the build may run in an environment where DATABASE_URL
 * points at an unreachable database (e.g. local builds against a stopped
 * Docker DB). Returning [] in that case keeps the build green; the routes are
 * still registered as ISR and simply prerender nothing up front.
 */

// Mirrors POPULAR_SLUGS in src/app/page.tsx (homepage "Most popular" grid).
const POPULAR_COURSE_SLUGS = [
  'ap-calculus-ab', 'ap-biology', 'sat', 'ap-us-history',
  'ap-chemistry', 'mcat', 'ap-psychology', 'ap-physics-1',
  'ap-calculus-bc', 'ap-statistics',
]

const BUILD_TOPIC_LIMIT = 200

export async function getBuildTimeTopicSlugs(): Promise<string[]> {
  try {
    const topics = await prisma.topic.findMany({
      where: {
        category: { course: { slug: { in: POPULAR_COURSE_SLUGS } } },
      },
      select: {
        slug: true,
        order: true,
        category: {
          select: { order: true, course: { select: { slug: true } } },
        },
      },
    })

    topics.sort((a, b) => {
      const courseRank =
        POPULAR_COURSE_SLUGS.indexOf(a.category.course.slug) -
        POPULAR_COURSE_SLUGS.indexOf(b.category.course.slug)
      if (courseRank !== 0) return courseRank
      if (a.category.order !== b.category.order) return a.category.order - b.category.order
      return a.order - b.order
    })

    return topics.slice(0, BUILD_TOPIC_LIMIT).map((t) => t.slug)
  } catch {
    // Database unreachable at build time — prerender nothing, stay ISR.
    return []
  }
}
