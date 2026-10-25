import { prisma } from '@/lib/prisma'
import { publicDisplayName } from '@/lib/display-name'
import { CHALLENGE_GRADIENT, courseCardTheme } from '@/lib/og/course-theme'
import { renderShareCard } from '@/lib/og/share-card'

// Render at request time (not prerendered at build): next/og fetches emoji
// glyphs from a CDN, and that build-time fetch can ETIMEDOUT and fail the deploy.
export const dynamic = 'force-dynamic'

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

// Competitive topic slugs that aren't course slugs, for the card's colours.
const TOPIC_COURSE: Record<string, string> = {
  'the-unit-circle': 'ap-precalculus',
  'derivatives': 'ap-calculus-ab',
  'limits': 'ap-calculus-ab',
  'integrals': 'ap-calculus-ab',
  'algebra': 'algebra-1',
  'algebra2': 'algebra-2',
  'precalc': 'ap-precalculus',
  'ap-physics1': 'ap-physics-1',
  'ap-physics2': 'ap-physics-2',
  'sat-math': 'sat-prep',
  'sat-reading': 'sat-prep',
  'act-math': 'act-prep',
  'act-science': 'act-prep',
  'ochem': 'organic-chemistry',
}

function topicLabel(slug: string): string {
  return TOPIC_LABELS[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const challenge = await prisma.asyncChallenge.findUnique({
    where: { id },
    select: {
      topicSlug: true,
      questionCount: true,
      timeLimit: true,
      challengerScore: true,
      challenger: { select: { name: true } },
    },
  })

  const challengerName = publicDisplayName(challenge?.challenger?.name, 'A friend')
  const subject = challenge ? topicLabel(challenge.topicSlug) : null
  const score = challenge?.challengerScore ?? null
  const total = challenge?.questionCount ?? null
  const timeLimit = challenge ? Math.round(challenge.timeLimit / 60) : null
  const theme = challenge ? courseCardTheme(TOPIC_COURSE[challenge.topicSlug] ?? challenge.topicSlug) : null
  const courseTheme = theme?.key ? theme : null

  const chips: string[] = []
  if (total !== null) chips.push(`${total} questions`)
  if (timeLimit !== null) chips.push(`⏱️ ${timeLimit} min`)
  chips.push('Tap to play')

  return renderShareCard({
    eyebrow: '⚔️ Async challenge',
    title: `${challengerName} challenged you`,
    tagline: subject ? `${subject} quiz` : 'Quick quiz',
    chips,
    icon: courseTheme?.icon ?? '⚔️',
    gradient: courseTheme?.gradient ?? CHALLENGE_GRADIENT,
    stat: score !== null && total !== null ? { value: `${score}/${total}`, label: 'their score' } : undefined,
  })
}
