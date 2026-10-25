import { renderCourseCard } from '@/lib/og/presets'

// Render at request time (not prerendered at build): next/og fetches emoji
// glyphs from a CDN, and that build-time fetch can ETIMEDOUT and fail the deploy.
export const dynamic = 'force-dynamic'

export const runtime = 'nodejs'
export const alt = 'Organic Chemistry — Study Mondo'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return renderCourseCard('organic-chemistry', {
    eyebrow: 'College course',
    title: 'Organic Chemistry',
    tagline: 'OChem 1 & 2 lessons and practice',
    chips: ['1–5 score predictor', 'Diagnostic test', 'Free'],
  })
}
