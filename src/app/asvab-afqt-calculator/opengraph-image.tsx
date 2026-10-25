import { renderCourseCard } from '@/lib/og/presets'

// Render at request time (not prerendered at build): next/og fetches emoji
// glyphs from a CDN, and that build-time fetch can ETIMEDOUT and fail the deploy.
export const dynamic = 'force-dynamic'

export const runtime = 'nodejs'
export const alt = 'ASVAB AFQT Score Calculator — Study Mondo'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return renderCourseCard('asvab', {
    eyebrow: 'ASVAB',
    title: 'AFQT Score Calculator',
    tagline: 'Your AFQT percentile in seconds',
    chips: ['Free', 'No sign-in', 'Line-score estimates'],
    icon: '🧮',
  })
}
