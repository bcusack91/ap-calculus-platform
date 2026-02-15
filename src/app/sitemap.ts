import { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'
import { getAllInteractiveSlugs } from '@/data/interactive-lessons/registry'

export const dynamic = 'force-dynamic'
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

  return [...staticPages, ...coursePages, ...topicPages, ...interactivePages, ...categoryPages]
}
