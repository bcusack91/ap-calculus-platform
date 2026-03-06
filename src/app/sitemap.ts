import { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'
import { getAllInteractiveSlugs } from '@/data/interactive-lessons/registry'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

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
      url: `${baseUrl}/sat-practice`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sat-diagnostic`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sat-daily-question`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sat-score-predictor`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sat-study-plans`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sat-grid-in`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Additional pages
    {
      url: `${baseUrl}/dashboard`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/onboarding`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/join-class`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/topics`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/teacher`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/premium`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Course pages
  const courses = await prisma.course.findMany({
    select: { slug: true, updatedAt: true },
    orderBy: { order: 'asc' },
  })

  const coursePages: MetadataRoute.Sitemap = courses.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: course.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  // Topic pages (all 534 topics)
  const topics = await prisma.topic.findMany({
    select: { slug: true, updatedAt: true },
    orderBy: { order: 'asc' },
  })

  const topicPages: MetadataRoute.Sitemap = topics.map((topic) => ({
    url: `${baseUrl}/topics/${topic.slug}`,
    lastModified: topic.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // Category pages
  const categories = await prisma.category.findMany({
    select: { slug: true, updatedAt: true },
    orderBy: { order: 'asc' },
  })

  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${baseUrl}/categories/${category.slug}`,
    lastModified: category.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  // Interactive lesson pages (server-rendered with full SEO content)
  const interactiveSlugs = getAllInteractiveSlugs()
  const interactivePages: MetadataRoute.Sitemap = interactiveSlugs.map((slug) => ({
    url: `${baseUrl}/topics/${slug}/interactive`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.85,
  }))

  // Flashcard pages (one per topic)
  const flashcardPages: MetadataRoute.Sitemap = topics.map((topic) => ({
    url: `${baseUrl}/flashcards/${topic.slug}`,
    lastModified: topic.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

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

  return [...staticPages, ...coursePages, ...topicPages, ...interactivePages, ...categoryPages, ...flashcardPages, ...leaderboardPage, ...blogPages]
}
