import { ImageResponse } from 'next/og'
import { TOPIC_COUNT_LABEL } from '@/lib/site-stats'

// Render at request time (not prerendered at build): next/og fetches emoji
// glyphs from a CDN, and that build-time fetch can ETIMEDOUT and fail the deploy.
export const dynamic = 'force-dynamic'

export const runtime = 'nodejs'
export const alt = 'Study Mondo Flashcards'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)',
          padding: '60px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '10px',
              background: 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
            }}
          >
            🃏
          </div>
          <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '24px', fontWeight: 600 }}>
            Study Mondo
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: '64px',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}
          >
            Flashcards
          </div>
          <div
            style={{
              fontSize: '28px',
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.4,
            }}
          >
            {TOPIC_COUNT_LABEL} topics with interactive flashcards for AP courses, math & science
          </div>
        </div>

        {/* Bottom tag */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <div
            style={{
              padding: '8px 20px',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.15)',
              color: 'white',
              fontSize: '18px',
              fontWeight: 600,
            }}
          >
            Free — No Account Required
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
