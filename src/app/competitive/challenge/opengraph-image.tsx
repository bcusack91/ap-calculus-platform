import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt = 'You have been challenged on Study Mondo!'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #F59E0B 0%, #DC2626 50%, #7C3AED 100%)',
          padding: '60px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-120px',
            width: '460px',
            height: '460px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.08)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-160px',
            left: '120px',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
            display: 'flex',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '26px',
            }}
          >
            📚
          </div>
          <span style={{ color: '#fff', fontSize: '26px', fontWeight: 700, letterSpacing: '-0.5px' }}>
            Study Mondo
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            background: 'rgba(255, 215, 0, 0.95)',
            color: '#7C2D12',
            padding: '10px 22px',
            borderRadius: '999px',
            fontSize: '22px',
            fontWeight: 800,
            alignSelf: 'flex-start',
            marginBottom: '32px',
            letterSpacing: '0.5px',
          }}
        >
          ⚔️ COMPETITIVE CHALLENGE
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1
            style={{
              color: '#fff',
              fontSize: '84px',
              fontWeight: 800,
              lineHeight: 1.05,
              margin: '0 0 18px 0',
              letterSpacing: '-1.5px',
            }}
          >
            You&apos;ve been
          </h1>
          <h1
            style={{
              color: '#FDE68A',
              fontSize: '84px',
              fontWeight: 800,
              lineHeight: 1.05,
              margin: '0 0 30px 0',
              letterSpacing: '-1.5px',
            }}
          >
            challenged!
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '30px', margin: 0, maxWidth: '900px', fontWeight: 500 }}>
            A friend wants to test your skills head-to-head. Accept the challenge and prove you&apos;re the better student.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'rgba(255,255,255,0.85)',
            fontSize: '22px',
            fontWeight: 600,
          }}
        >
          <span>studymondo.com</span>
          <span>Tap to accept the challenge →</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
