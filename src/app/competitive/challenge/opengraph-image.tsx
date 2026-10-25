import { renderShareCard } from '@/lib/og/share-card'
import { CHALLENGE_GRADIENT } from '@/lib/og/course-theme'

// Render at request time (not prerendered at build): next/og fetches emoji
// glyphs from a CDN, and that build-time fetch can ETIMEDOUT and fail the deploy.
export const dynamic = 'force-dynamic'

export const runtime = 'nodejs'
export const alt = 'You have been challenged on Study Mondo!'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return renderShareCard({
    eyebrow: '⚔️ Competitive challenge',
    title: "You've been challenged!",
    tagline: 'A friend wants a head-to-head match',
    chips: ['Live head-to-head', 'Tap to accept'],
    icon: '⚔️',
    gradient: CHALLENGE_GRADIENT,
  })
}
