import { prisma } from '@/lib/prisma'
import { getDiagnosticLabel } from '@/lib/diagnostic-challenge-utils'
import { courseForCategory } from '@/lib/class-plan-config'
import { CHALLENGE_GRADIENT, courseCardTheme } from '@/lib/og/course-theme'
import { renderShareCard } from '@/lib/og/share-card'

// Render at request time (not prerendered at build): next/og fetches emoji
// glyphs from a CDN, and that build-time fetch can ETIMEDOUT and fail the deploy.
export const dynamic = 'force-dynamic'

export const runtime = 'nodejs'
export const alt = 'You have been challenged on Study Mondo!'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params
  const challenge = await prisma.diagnosticChallenge.findUnique({
    where: { token },
    select: {
      diagnosticCategory: true,
      creatorScore: true,
      creatorCorrect: true,
      creatorTotal: true,
      creatorAPScore: true,
      creatorName: true,
    },
  })

  const challengerName = challenge?.creatorName ?? 'A friend'
  // Diagnostic categories ('calcab-diagnostic', 'ap-chem-diagnostic', …) map to
  // a course, which gives the card that course's colours and a clean label.
  const course = challenge ? courseForCategory(challenge.diagnosticCategory) : null
  const theme = course?.courseSlug ? courseCardTheme(course.courseSlug) : null
  const subject = course?.label ?? (challenge ? getDiagnosticLabel(challenge.diagnosticCategory) : null)

  const score = challenge?.creatorScore ?? null
  const correct = challenge?.creatorCorrect ?? null
  const total = challenge?.creatorTotal ?? null
  const apScore = challenge?.creatorAPScore ?? null

  const chips: string[] = []
  if (correct !== null && total !== null) chips.push(`🎯 ${correct}/${total} correct`)
  if (apScore !== null) chips.push(`⭐ AP score ${apScore}`)
  chips.push('Tap to accept')

  return renderShareCard({
    eyebrow: '⚔️ Head-to-head challenge',
    title: `${challengerName} challenges you`,
    tagline: subject ? `${subject} diagnostic` : 'Diagnostic challenge',
    chips,
    icon: theme?.icon ?? '⚔️',
    gradient: theme?.gradient ?? CHALLENGE_GRADIENT,
    stat: score !== null ? { value: `${score}%`, label: 'to beat' } : undefined,
  })
}
