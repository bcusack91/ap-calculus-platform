import { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'
import { getAllInteractiveSlugs } from '@/data/interactive-lessons/registry'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { topicHubs } from '@/data/topic-hubs'
import { CRAM_PLANS, CRAM_PLAN_COURSE_SLUGS } from '@/data/cram-plans'

export const revalidate = 3600 // Revalidate every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.studymondo.com'
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/editorial-standards`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/competitive`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // NOTE: /competitive/* sub-pages are auth-walled by middleware. Submitting
    // them in the sitemap causes Google to crawl the signin redirect, which
    // generates many "discovered/excluded by noindex" entries. Keep them out.
    {
      url: `${baseUrl}/flashcards`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // SAT pages
    {
      url: `${baseUrl}/sat`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sat-grid-in`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sat-reading-practice`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    // MCAT passage-based surfaces
    {
      url: `${baseUrl}/mcat-full-length`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/mcat-cars`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    ...['mcat-chem-phys', 'mcat-bio-biochem', 'mcat-psych-soc', 'mcat-reference'].map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    })),
    // PSAT landing page
    {
      url: `${baseUrl}/psat`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Chemistry tools
    {
      url: `${baseUrl}/periodic-table`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ap-chem-full-exam`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ap-chem-labs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Additional pages
    // NOTE: /dashboard, /onboarding, /join-class, /teacher are auth-walled by
    // middleware and noindexed via their layout. Submitting them creates a
    // sitemap-wide "excluded by noindex" warning in Search Console.
    {
      url: `${baseUrl}/topics`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/premium`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/improvement-roadmap`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/hubs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // AP course landing pages
    ...([
      'ap-biology', 'ap-calculus-ab', 'ap-calculus-bc', 'ap-chemistry', 'ap-statistics',
      'ap-psychology', 'ap-physics-1', 'ap-physics-2', 'ap-physics-c-mechanics', 'ap-physics-c-em',
      'ap-human-geography', 'ap-us-government', 'ap-world-history', 'ap-us-history',
      'ap-macroeconomics', 'ap-microeconomics', 'ap-african-american-studies',
      'ap-english-literature', 'ap-english-language', 'ap-environmental-science',
      'ap-computer-science-a', 'ap-cs-principles', 'organic-chemistry',
    ] as const).map(slug => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    // All diagnostic pages
    ...([
      'ap-bio', 'ap-calcab', 'ap-calcbc', 'ap-chem', 'ap-stats', 'ap-psych',
      'ap-physics1', 'ap-physics2', 'ap-physics-c-mech', 'ap-physics-c-em', 'ap-precalculus',
      'ap-human-geo', 'ap-us-gov', 'ap-world-history', 'ap-us-history',
      'ap-macro', 'ap-micro', 'ap-african-american-studies',
      'ap-english-lit', 'ap-english-lang', 'ap-enviro', 'ap-csa', 'ap-csp',
      'sat', 'act', 'mcat', 'algebra1', 'algebra2', 'geometry',
      'grade8-math', 'prealgebra', 'precalc', 'ochem',
    ] as const).map(slug => ({
      url: `${baseUrl}/${slug}-diagnostic`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    })),
    // All daily question pages
    ...([
      'ap-bio', 'ap-calcab', 'ap-calcbc', 'ap-chem', 'ap-stats', 'ap-psych',
      'ap-physics1', 'ap-physics2', 'ap-physics-c-mech', 'ap-physics-c-em', 'ap-precalculus',
      'ap-human-geo', 'ap-us-gov', 'ap-world-history', 'ap-us-history',
      'ap-macro', 'ap-micro', 'ap-african-american-studies',
      'ap-english-lit', 'ap-english-lang', 'ap-enviro', 'ap-csa', 'ap-csp',
      'sat', 'act', 'mcat', 'algebra1', 'algebra2', 'geometry',
      'grade8-math', 'prealgebra', 'precalc', 'ochem',
    ] as const).map(slug => ({
      url: `${baseUrl}/${slug}-daily-question`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    })),
    // All score predictor pages
    ...([
      'ap-bio', 'ap-calcab', 'ap-calcbc', 'ap-chem', 'ap-stats', 'ap-psych',
      'ap-physics1', 'ap-physics2', 'ap-physics-c-mech', 'ap-physics-c-em', 'ap-precalculus',
      'ap-human-geo', 'ap-us-gov', 'ap-world-history', 'ap-us-history',
      'ap-macro', 'ap-micro', 'ap-african-american-studies',
      'ap-english-lit', 'ap-english-lang', 'ap-enviro', 'ap-csa', 'ap-csp',
      'sat', 'act', 'mcat', 'algebra1', 'algebra2', 'geometry',
      'grade8-math', 'prealgebra', 'precalc', 'ochem',
    ] as const).map(slug => ({
      url: `${baseUrl}/${slug}-score-predictor`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    // Study plan pages
    ...([
      'ap-bio', 'ap-calcab', 'ap-calcbc', 'ap-chem', 'ap-stats', 'ap-psych',
      'ap-physics1', 'ap-physics2', 'ap-physics-c-mech', 'ap-physics-c-em', 'ap-precalc',
      'ap-human-geo', 'ap-us-gov', 'ap-world-history', 'ap-us-history',
      'ap-macro', 'ap-micro', 'ap-african-american-studies',
      'ap-english-lit', 'ap-english-lang', 'ap-enviro', 'ap-csa', 'ap-csp',
      'sat', 'mcat', 'act',
    ] as const).map(slug => ({
      url: `${baseUrl}/${slug}-study-plans`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    // Practice test pages
    ...([
      'ap-bio', 'ap-calcab', 'ap-calcbc', 'ap-chem', 'ap-stats', 'ap-psych',
      'ap-physics1', 'ap-physics2', 'ap-physics-c-mech', 'ap-physics-c-em', 'ap-precalc',
      'ap-human-geo', 'ap-us-gov', 'ap-world-history', 'ap-us-history',
      'ap-macro', 'ap-micro', 'ap-african-american-studies',
      'ap-english-lit', 'ap-english-lang', 'ap-enviro', 'ap-csa', 'ap-csp',
      'sat', 'mcat', 'act', 'psat',
    ] as const).map(slug => ({
      url: `${baseUrl}/${slug}-practice`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    })),
    // FRQ pages
    ...([
      'ap-bio', 'ap-calc-ab', 'ap-calc-bc', 'ap-chem', 'ap-stats', 'ap-psych',
      'ap-physics1', 'ap-physics2', 'ap-physics-c-mech', 'ap-physics-c-em', 'ap-precalc',
      'ap-human-geo', 'ap-us-gov', 'ap-world-history', 'ap-us-history',
      'ap-macro', 'ap-micro', 'ap-african-american-studies',
      'ap-english-lit', 'ap-english-lang', 'ap-enviro', 'ap-csa',
    ] as const).map(slug => ({
      url: `${baseUrl}/${slug}-frq`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    })),
    // Unit test pages (every *-unit-tests route dir under src/app)
    ...([
      'ap-aas', 'ap-bio', 'ap-calcab', 'ap-calcbc', 'ap-chem', 'ap-csa', 'ap-csp',
      'ap-english-lang', 'ap-english-lit', 'ap-enviro', 'ap-human-geo',
      'ap-macro', 'ap-micro', 'ap-physics1', 'ap-physics2', 'ap-precalc',
      'ap-psych', 'ap-stats', 'ap-us-gov', 'ap-us-history', 'ap-world-history',
    ] as const).map(slug => ({
      url: `${baseUrl}/${slug}-unit-tests`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    })),
    // Grade-level / foundational math hub pages
    ...([
      'grade-4-math', 'grade-5-math', 'grade-6-math', 'grade-7-math', 'grade-8-math',
      'pre-algebra', 'geometry', 'algebra-1', 'algebra-2',
    ] as const).map(slug => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
  ]

  // Course pages
  const courses = await prisma.course.findMany({
    select: { slug: true, updatedAt: true },
    orderBy: { order: 'asc' },
  }).catch((error) => {
    console.warn('Sitemap: courses unavailable, continuing with static pages only.', error)
    return []
  })

  const coursePages: MetadataRoute.Sitemap = courses.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: course.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  // Topic pages (all 534 topics)
  const topics = await prisma.topic.findMany({
    select: {
      slug: true,
      updatedAt: true,
      textContent: true,
      _count: { select: { exampleProblems: true, subtopics: true } },
    },
    orderBy: { order: 'asc' },
  }).catch((error) => {
    console.warn('Sitemap: topics unavailable, continuing with static pages only.', error)
    return []
  })

  const topicPages: MetadataRoute.Sitemap = topics
    // Exclude genuinely thin topics — these are noindexed in the page metadata,
    // so submitting them would create "submitted but excluded by noindex"
    // warnings. Keep this rule in sync with generateMetadata in
    // src/app/topics/[slug]/page.tsx.
    .filter((topic) => {
      const contentLength = (topic.textContent || '').trim().length
      const isThin =
        contentLength < 600 &&
        topic._count.exampleProblems === 0 &&
        topic._count.subtopics === 0
      return !isThin
    })
    .map((topic) => ({
      url: `${baseUrl}/topics/${topic.slug}`,
      lastModified: topic.updatedAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    }))

  // Category pages
  const categories = await prisma.category.findMany({
    select: { slug: true, updatedAt: true },
    orderBy: { order: 'asc' },
  }).catch((error) => {
    console.warn('Sitemap: categories unavailable, continuing with static pages only.', error)
    return []
  })

  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${baseUrl}/categories/${category.slug}`,
    lastModified: category.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  // Interactive lesson pages (server-rendered with full SEO content).
  // The interactive route applies `robots: { index: false }` for any topic
  // that has neither a registered interactive lesson nor dynamic textContent
  // (see src/app/topics/[slug]/interactive/page.tsx), so we only include the
  // slugs that actually have content.
  const interactiveSlugs = getAllInteractiveSlugs()
  const interactivePages: MetadataRoute.Sitemap = interactiveSlugs.map((slug) => ({
    url: `${baseUrl}/topics/${slug}/interactive`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.85,
  }))

  const topicHubPages: MetadataRoute.Sitemap = topicHubs.map((hub) => ({
    url: `${baseUrl}/hubs/${hub.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.78,
  }))

  // Flashcard study pages (/flashcards/[slug]) are noindexed via
  // src/app/flashcards/[slug]/layout.tsx (canonical points back to the topic
  // page). Submitting them in the sitemap would create one
  // "submitted but excluded by noindex" warning per topic.
  const flashcardPages: MetadataRoute.Sitemap = []

  // Leaderboard page
  const leaderboardPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/leaderboard`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.6,
    },
  ]

  // Blog pages
  const blogDir = path.join(process.cwd(), 'content/blog')
  let blogPages: MetadataRoute.Sitemap = []
  if (fs.existsSync(blogDir)) {
    const blogFiles = fs.readdirSync(blogDir).filter((f) => f.endsWith('.mdx'))
    blogPages = [
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      ...blogFiles.map((filename) => {
        const filePath = path.join(blogDir, filename)
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        const { data } = matter(fileContent)
        return {
          url: `${baseUrl}/blog/${filename.replace(/\.mdx$/, '')}`,
          lastModified: data.date ? new Date(data.date) : new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.7,
        }
      }),
    ]
  }

  // Cram plan landing pages (only include those with an MDX file present)
  const cramPlanDir = path.join(process.cwd(), 'content/cram-plans')
  const cramPlanPages: MetadataRoute.Sitemap = []
  if (fs.existsSync(cramPlanDir)) {
    for (const courseSlug of CRAM_PLAN_COURSE_SLUGS) {
      for (const plan of CRAM_PLANS) {
        const filePath = path.join(cramPlanDir, courseSlug, `${plan.slug}.mdx`)
        if (fs.existsSync(filePath)) {
          cramPlanPages.push({
            url: `${baseUrl}/courses/${courseSlug}/cram/${plan.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.75,
          })
        }
      }
    }
  }

  return [...staticPages, ...coursePages, ...topicPages, ...interactivePages, ...topicHubPages, ...categoryPages, ...flashcardPages, ...leaderboardPage, ...blogPages, ...cramPlanPages]
}
