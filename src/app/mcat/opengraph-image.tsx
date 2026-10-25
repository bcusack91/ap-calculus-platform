import { renderCourseCard } from '@/lib/og/presets'

// Render at request time (not prerendered at build): next/og fetches emoji
// glyphs from a CDN, and that build-time fetch can ETIMEDOUT and fail the deploy.
export const dynamic = 'force-dynamic'

export const runtime = 'nodejs'
export const alt = 'Study Mondo MCAT Prep'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return renderCourseCard('mcat', {
    eyebrow: 'MCAT',
    title: 'MCAT Prep',
    tagline: 'Full-length exams · Passage practice',
    chips: ['472–528 scoring', 'CARS passages', 'Free'],
  })
}
