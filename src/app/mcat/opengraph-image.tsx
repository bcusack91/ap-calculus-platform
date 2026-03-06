import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt = 'Study Mondo MCAT Prep'
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
          background: 'linear-gradient(135deg, #059669 0%, #0D9488 100%)',
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
            🏥
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
            MCAT Prep Suite
          </div>
          <div
            style={{
              fontSize: '28px',
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.4,
            }}
          >
            Free practice questions, diagnostics, daily questions & study plans
          </div>
        </div>

        {/* Feature pills */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {['Practice Questions', 'Diagnostic', 'Study Plans', 'Daily Question', '18+ Lessons'].map(
            (label) => (
              <div
                key={label}
                style={{
                  padding: '8px 16px',
                  borderRadius: '999px',
                  background: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 600,
                }}
              >
                {label}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    { ...size },
  )
}
