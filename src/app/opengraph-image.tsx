import { renderShareCard } from '@/lib/og/share-card'
import { BRAND_GRADIENT } from '@/lib/og/course-theme'
import { COURSE_COUNT } from '@/lib/site-stats'

// Render at request time (not prerendered at build): next/og fetches emoji
// glyphs from a CDN, and that build-time fetch can ETIMEDOUT and fail the deploy.
export const dynamic = 'force-dynamic'

export const runtime = 'nodejs'
export const alt = 'Study Mondo — Free AP, SAT & MCAT Study Platform'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return renderShareCard({
    eyebrow: 'Free study platform',
    title: 'Free AP, SAT & MCAT prep',
    tagline: 'Lessons · Flashcards · Practice tests',
    chips: [`${COURSE_COUNT} courses`, 'Diagnostics', 'Competitive mode'],
    icon: '📚',
    gradient: BRAND_GRADIENT,
  })
}
