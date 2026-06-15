import { ImageResponse } from 'next/og'
import { prisma } from '@/lib/prisma'

// Render at request time (not prerendered at build): next/og fetches emoji
// glyphs from a CDN, and that build-time fetch can ETIMEDOUT and fail the deploy.
export const dynamic = 'force-dynamic'

export const runtime = 'nodejs'
export const alt = 'Study Mondo Course'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const revalidate = 86400 // Cache for 24 hours

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const course = await prisma.course.findUnique({
    where: { slug },
    select: {
      name: true,
      description: true,
      icon: true,
      _count: { select: { categories: true } },
    },
  })

  const name = course?.name || 'Study Mondo'
  const icon = course?.icon || '📚'
  const categoryCount = course?._count?.categories || 0

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #7C3AED 0%, #2563EB 50%, #06B6D4 100%)',
          padding: '60px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '48px' }}>
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
            📚
          </div>
          <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '24px', fontWeight: 600 }}>
            Study Mondo
          </span>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontSize: '80px', marginBottom: '16px' }}>{icon}</div>
          <h1
            style={{
              color: '#fff',
              fontSize: name.length > 30 ? '56px' : '72px',
              fontWeight: 800,
              lineHeight: 1.1,
              margin: '0 0 16px 0',
            }}
          >
            {name}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '24px', margin: 0 }}>
            {categoryCount} {categoryCount === 1 ? 'Category' : 'Categories'} • Comprehensive Study Materials
          </p>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'rgba(255,255,255,0.8)',
            fontSize: '20px',
          }}
        >
          <span>studymondo.com</span>
          <span>Free Notes, Practice Problems & Flashcards</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
