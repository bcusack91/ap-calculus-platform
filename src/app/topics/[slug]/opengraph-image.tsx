import { prisma } from '@/lib/prisma'
import { courseDisplayName } from '@/lib/site-stats'
import { renderCourseCard } from '@/lib/og/presets'

// Render at request time (not prerendered at build): next/og fetches emoji
// glyphs from a CDN, and that build-time fetch can ETIMEDOUT and fail the deploy.
export const dynamic = 'force-dynamic'

export const runtime = 'nodejs'
export const alt = 'Study Mondo Topic'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const revalidate = 86400 // Cache for 24 hours

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const topic = await prisma.topic.findUnique({
    where: { slug },
    select: {
      title: true,
      category: { select: { name: true, course: { select: { slug: true } } } },
      _count: { select: { flashcards: true, exampleProblems: true } },
    },
  })

  const courseSlug = topic?.category.course.slug ?? ''
  const eyebrow = topic
    ? [courseDisplayName(courseSlug), topic.category.name].filter(Boolean).join(' · ')
    : 'Study Mondo'

  // Only name what this topic page actually offers (the lesson banner shows on
  // every topic; flashcards and practice problems depend on the topic).
  const offers = ['Interactive lesson']
  if (topic?._count.flashcards) offers.push(`${topic._count.flashcards} flashcard${topic._count.flashcards === 1 ? '' : 's'}`)
  if (topic?._count.exampleProblems) offers.push('Practice problems')

  return renderCourseCard(courseSlug, {
    eyebrow,
    title: topic?.title ?? 'Free lessons and practice',
    tagline: offers.join(' · '),
  })
}
