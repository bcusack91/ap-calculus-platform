import { ImageResponse } from 'next/og'
import { prisma } from '@/lib/prisma'

// Render at request time (not prerendered at build): next/og fetches emoji
// glyphs from a CDN, and that build-time fetch can ETIMEDOUT and fail the deploy.
export const dynamic = 'force-dynamic'

export const runtime = 'nodejs'
export const alt = 'Study Mondo Topic'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const revalidate = 86400 // Cache for 24 hours

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const topic = await prisma.topic.findUnique({
    where: { slug },
    select: {
      title: true,
      description: true,
      category: {
        select: {
          name: true,
          course: { select: { name: true } },
        },
      },
    },
  })

  const title = topic?.title || 'Study Mondo'
  const courseName = topic?.category?.course?.name || 'Study Mondo'
  const categoryName = topic?.category?.name || ''

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
            📚
          </div>
          <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '24px', fontWeight: 600 }}>
            Study Mondo
          </span>
        </div>

        {/* Breadcrumb */}
        <div style={{ display: 'flex', gap: '8px', color: 'rgba(255,255,255,0.7)', fontSize: '20px', marginBottom: '24px' }}>
          <span>{courseName}</span>
          <span>→</span>
          <span>{categoryName}</span>
        </div>

        {/* Title */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <h1
            style={{
              color: '#fff',
              fontSize: title.length > 40 ? '52px' : '64px',
              fontWeight: 800,
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            {title}
          </h1>
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
          <span>Free Study Materials & Practice Problems</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
