import { renderCourseCard } from '@/lib/og/presets'

// Render at request time (not prerendered at build): next/og fetches emoji
// glyphs from a CDN, and that build-time fetch can ETIMEDOUT and fail the deploy.
export const dynamic = 'force-dynamic'

export const runtime = 'nodejs'
export const alt = 'Study Mondo SAT Prep'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return renderCourseCard('sat', {
    eyebrow: 'Digital SAT',
    title: 'SAT Prep',
    tagline: 'Practice tests · Lessons · Score predictor',
    chips: ['Diagnostic test', 'Daily question', 'Free'],
  })
}
