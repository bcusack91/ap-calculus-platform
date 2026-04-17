import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt = 'AP Calculus BC — Study Mondo'
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
          background: 'linear-gradient(135deg, #6D28D9 0%, #4338CA 50%, #5B21B6 100%)',
          padding: '60px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.06)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-120px',
            left: '200px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.04)',
            display: 'flex',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '40px' }}>
          <div
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '12px',
              background: 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
            }}
          >
            📚
          </div>
          <span style={{ color: '#fff', fontSize: '28px', fontWeight: 700, letterSpacing: '-0.5px' }}>
            Study Mondo
          </span>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <span style={{ fontSize: '72px' }}>📐</span>
          </div>
          <h1
            style={{
              color: '#fff',
              fontSize: '60px',
              fontWeight: 800,
              lineHeight: 1.1,
              margin: '0 0 16px 0',
              letterSpacing: '-1px',
            }}
          >
            AP Calculus BC
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '26px', margin: '0', maxWidth: '700px' }}>
            Free interactive lessons, practice tests, flashcards & more
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'rgba(255,255,255,0.7)',
            fontSize: '20px',
          }}
        >
          <span style={{ fontWeight: 600 }}>studymondo.com</span>
          <span>100% Free · All Units Covered</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
