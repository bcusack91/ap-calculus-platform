import type { Metadata } from 'next'
import { prisma } from '@/lib/prisma'

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

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const challenge = await prisma.asyncChallenge.findUnique({
    where: { id },
    select: {
      topicSlug: true,
      questionCount: true,
      challengerScore: true,
      challenger: { select: { name: true } },
    },
  })

  if (!challenge) {
    return {
      title: 'Challenge — Study Mondo',
      description: 'Accept a head-to-head async challenge on Study Mondo.',
    }
  }

  const challengerName = challenge.challenger?.name ?? 'A friend'
  const subject = topicLabel(challenge.topicSlug)
  const title = `${challengerName} challenged you to ${subject}!`
  const description = `${challengerName} scored ${challenge.challengerScore}/${challenge.questionCount} on a ${subject} async quiz. Take the same questions head-to-head and see if you can beat them.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      siteName: 'Study Mondo',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default function AsyncChallengeLayout({ children }: { children: React.ReactNode }) {
  return children
}
