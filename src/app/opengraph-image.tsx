import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt = 'Study Mondo — Free AP, SAT & MCAT Study Platform'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const subjects = [
  { icon: '📐', name: 'Calculus' },
  { icon: '⚛️', name: 'Physics' },
  { icon: '🧪', name: 'Chemistry' },
  { icon: '🧬', name: 'Biology' },
  { icon: '📊', name: 'Statistics' },
  { icon: '📝', name: 'SAT Prep' },
]

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #7C3AED 0%, #4F46E5 40%, #2563EB 100%)',
          padding: '60px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle background decoration */}
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

        {/* Logo + brand */}
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

        {/* Main headline */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1
            style={{
              color: '#fff',
              fontSize: '64px',
              fontWeight: 800,
              lineHeight: 1.1,
              margin: '0 0 12px 0',
              letterSpacing: '-1px',
            }}
          >
            Free AP, SAT & MCAT
          </h1>
          <h1
            style={{
              color: '#fff',
              fontSize: '64px',
              fontWeight: 800,
              lineHeight: 1.1,
              margin: '0 0 24px 0',
              letterSpacing: '-1px',
            }}
          >
            Study Resources
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '26px', margin: '0 0 36px 0', maxWidth: '700px' }}>
            Notes, flashcards, practice problems & interactive lessons — 100% free
          </p>

          {/* Subject pills */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {subjects.map((s) => (
              <div
                key={s.name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: '100px',
                  padding: '10px 20px',
                  fontSize: '18px',
                  color: '#fff',
                  fontWeight: 600,
                }}
              >
                <span>{s.icon}</span>
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
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
          <span>Join thousands of students studying smarter</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
