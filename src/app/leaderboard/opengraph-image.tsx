import { renderShareCard } from '@/lib/og/share-card'
import { COMPETITIVE_GRADIENT } from '@/lib/og/course-theme'

// Render at request time (not prerendered at build): next/og fetches emoji
// glyphs from a CDN, and that build-time fetch can ETIMEDOUT and fail the deploy.
export const dynamic = 'force-dynamic'

export const runtime = 'nodejs'
export const alt = 'Study Mondo Leaderboard'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return renderShareCard({
    eyebrow: 'Competitive mode',
    title: 'Leaderboard',
    tagline: 'Top players, ranked by MMR',
    chips: ['Head-to-head matches', 'Ranked tiers', 'Free'],
    icon: '🏆',
    gradient: COMPETITIVE_GRADIENT,
  })
}
