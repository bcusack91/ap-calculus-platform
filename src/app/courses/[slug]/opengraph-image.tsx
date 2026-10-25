import { prisma } from '@/lib/prisma'
import { getCourseMetadata } from '@/data/course-metadata'
import { courseDisplayName } from '@/lib/site-stats'
import { renderCourseCard } from '@/lib/og/presets'

// Render at request time (not prerendered at build): next/og fetches emoji
// glyphs from a CDN, and that build-time fetch can ETIMEDOUT and fail the deploy.
export const dynamic = 'force-dynamic'

export const runtime = 'nodejs'
export const alt = 'Study Mondo Course'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const revalidate = 86400 // Cache for 24 hours

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const course = await prisma.course.findUnique({
    where: { slug },
    select: { name: true },
  })

  // The registry's one-line summary ("Series, parametric, polar, …") is the
  // most specific true thing to say about a course.
  const summary = getCourseMetadata(slug).description

  return renderCourseCard(slug, {
    eyebrow: 'Free course',
    // Short name ("AP US Government") reads better at phone size than the
    // full catalog name the page's og:title carries.
    title: course ? courseDisplayName(slug) : 'Study Mondo',
    tagline: summary || 'Interactive lessons and practice',
    chips: ['Interactive lessons', 'Flashcards', 'Free'],
  })
}
