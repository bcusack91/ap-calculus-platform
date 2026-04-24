import { ImageResponse } from 'next/og'
import { prisma } from '@/lib/prisma'
import { getDiagnosticLabel } from '@/lib/diagnostic-challenge-utils'

export const runtime = 'nodejs'
export const alt = 'You have been challenged on Study Mondo!'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: { token: string } }) {
  const challenge = await prisma.diagnosticChallenge.findUnique({
    where: { token: params.token },
    select: {
      diagnosticCategory: true,
      diagnosticForm: true,
      creatorScore: true,
      creatorCorrect: true,
      creatorTotal: true,
      creatorAPScore: true,
      creatorName: true,
    },
  })

  const challengerName = challenge?.creatorName ?? 'A friend'
  const subject = challenge ? getDiagnosticLabel(challenge.diagnosticCategory) : 'a diagnostic'
  const score = challenge?.creatorScore ?? null
  const apScore = challenge?.creatorAPScore ?? null
  const correct = challenge?.creatorCorrect ?? null
  const total = challenge?.creatorTotal ?? null

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #DB2777 0%, #7C3AED 50%, #2563EB 100%)',
          padding: '60px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative orbs */}
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

        {/* Brand row */}
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

        {/* Versus banner */}
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
          ⚔️ HEAD-TO-HEAD CHALLENGE
        </div>

        {/* Headline */}
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
            {challengerName} challenges
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
            you to beat their score!
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
            {score !== null && (
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
                📊 {score}% {correct !== null && total !== null ? `(${correct}/${total})` : ''}
              </div>
            )}
            {apScore !== null && (
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
                ⭐ AP Score {apScore}
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar */}
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
          <span>Tap to take the challenge →</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
