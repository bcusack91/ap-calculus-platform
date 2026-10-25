import { renderShareCard } from '@/lib/og/share-card'
import { BRAND_GRADIENT } from '@/lib/og/course-theme'
import { COURSE_COUNT, TOPIC_COUNT_LABEL } from '@/lib/site-stats'

// Render at request time (not prerendered at build): next/og fetches emoji
// glyphs from a CDN, and that build-time fetch can ETIMEDOUT and fail the deploy.
export const dynamic = 'force-dynamic'

export const runtime = 'nodejs'
export const alt = 'Study Mondo Flashcards'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return renderShareCard({
    eyebrow: 'Spaced repetition',
    title: 'Flashcards',
    tagline: `${TOPIC_COUNT_LABEL} topics across ${COURSE_COUNT} courses`,
    chips: ['AP · SAT · MCAT', 'Review queue', 'Free'],
    icon: '🗂️',
    gradient: BRAND_GRADIENT,
  })
}
