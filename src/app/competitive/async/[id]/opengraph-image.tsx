import { ImageResponse } from 'next/og'
import { prisma } from '@/lib/prisma'

export const runtime = 'nodejs'
export const alt = 'You have been challenged on Study Mondo!'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const TOPIC_LABELS: Record<string, string> = {
  'the-unit-circle': 'Unit Circle',
  'derivatives': 'Derivatives',
  'limits': 'Limits',
  'integrals': 'Integrals',
  'algebra': 'Algebra 1',
  'algebra2': 'Algebra 2',
  'geometry': 'Geometry',
  'precalc': 'Pre-Calculus',
  'ap-calculus-ab': 'AP Calculus AB',
  'ap-calculus-bc': 'AP Calculus BC',
  'ap-chemistry': 'AP Chemistry',
  'ap-biology': 'AP Biology',
  'ap-psychology': 'AP Psychology',
  'ap-statistics': 'AP Statistics',
  'ap-physics1': 'AP Physics 1',
  'ap-physics2': 'AP Physics 2',
  'sat-math': 'SAT Math',
  'sat-reading': 'SAT Reading',
  'act-math': 'ACT Math',
  'act-science': 'ACT Science',
  'ochem': 'Organic Chemistry',
}

function topicLabel(slug: string): string {
  return TOPIC_LABELS[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

export default async function Image({ params }: { params: { id: string } }) {
  const challenge = await prisma.asyncChallenge.findUnique({
    where: { id: params.id },
    select: {
      topicSlug: true,
      questionCount: true,
      timeLimit: true,
      challengerScore: true,
      challenger: { select: { name: true } },
    },
  })

  const challengerName = challenge?.challenger?.name ?? 'A friend'
  const subject = challenge ? topicLabel(challenge.topicSlug) : 'a quick quiz'
  const score = challenge?.challengerScore ?? null
  const total = challenge?.questionCount ?? null
  const timeLimit = challenge ? Math.round(challenge.timeLimit / 60) : null

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #DC2626 0%, #DB2777 50%, #7C3AED 100%)',
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
          ⚔️ ASYNC CHALLENGE
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1
            style={{
              color: '#fff',
              fontSize: '76px',
              fontWeight: 800,
              lineHeight: 1.05,
              margin: '0 0 18px 0',
              letterSpacing: '-1.5px',
            }}
          >
            {challengerName} just
          </h1>
          <h1
            style={{
              color: '#FDE68A',
              fontSize: '76px',
              fontWeight: 800,
              lineHeight: 1.05,
              margin: '0 0 30px 0',
              letterSpacing: '-1.5px',
            }}
          >
            challenged you!
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: 'rgba(255,255,255,0.18)',
                borderRadius: '100px',
                padding: '12px 24px',
                fontSize: '24px',
                color: '#fff',
                fontWeight: 700,
              }}
            >
              🎯 {subject}
            </div>
            {score !== null && total !== null && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'rgba(255,255,255,0.18)',
                  borderRadius: '100px',
                  padding: '12px 24px',
                  fontSize: '24px',
                  color: '#fff',
                  fontWeight: 700,
                }}
              >
                🏆 Their score: {score}/{total}
              </div>
            )}
            {timeLimit !== null && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'rgba(255,255,255,0.18)',
                  borderRadius: '100px',
                  padding: '12px 24px',
                  fontSize: '24px',
                  color: '#fff',
                  fontWeight: 700,
                }}
              >
                ⏱️ {timeLimit} min
              </div>
            )}
          </div>
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
          <span>Tap to play head-to-head →</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
