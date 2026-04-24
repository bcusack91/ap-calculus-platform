import type { Metadata } from 'next'
import { CourseHub, type HubFeature, type HubUnit } from '@/components/CourseHub'

export const metadata: Metadata = {
  title: 'Grade 7 Math | Free 7th Grade Math Practice',
  description:
    'Comprehensive 7th grade math practice with interactive lessons and flashcards covering rational numbers, proportions, and percents. Free for all students.',
  alternates: { canonical: 'https://www.studymondo.com/grade-7-math' },
  openGraph: {
    title: 'Grade 7 Math | Free 7th Grade Math Practice',
    description: 'Master 7th grade math with interactive lessons and flashcards.',
    url: 'https://www.studymondo.com/grade-7-math',
  },
}

const features: HubFeature[] = [
  {
    title: 'Interactive Lessons',
    description: 'Step-by-step lessons covering rational numbers, proportional relationships, percents, and geometry.',
    href: '/courses/grade-7-math',
    icon: 'lessons',
    color: 'from-orange-500 to-amber-500',
    stats: 'All units · Step-by-step',
  },
  {
    title: 'Flashcards',
    description: 'Review key vocabulary and rules — rational number operations, proportions, and probability.',
    href: '/flashcards?course=grade-7-math',
    icon: 'flashcards',
    color: 'from-purple-500 to-pink-500',
    stats: 'Vocab · Rules · Concepts',
  },
  {
    title: 'Competitive Mode',
    description: 'Challenge other students in real-time math question battles. Climb the leaderboard.',
    href: '/competitive',
    icon: 'competitive',
    color: 'from-red-500 to-orange-500',
    stats: 'Real-time · Leaderboard',
  },
]

const units: HubUnit[] = [
  {
    title: 'Rational Numbers',
    topics: ['Adding & Subtracting Rational Numbers', 'Multiplying & Dividing Rationals', 'Converting Between Forms', 'Real-World Applications'],
    color: 'orange',
  },
  {
    title: 'Proportional Relationships',
    topics: ['Unit Rates with Fractions', 'Constant of Proportionality', 'Proportional Tables & Graphs', 'Multi-Step Ratio Problems'],
    color: 'amber',
  },
  {
    title: 'Percents & Equations',
    topics: ['Percent Change & Markups', 'Tax, Tip & Discount', 'Solving Linear Equations', 'Multi-Step Inequalities'],
    color: 'rose',
  },
  {
    title: 'Geometry, Statistics & Probability',
    topics: ['Scale Drawings', 'Circles: Area & Circumference', 'Sampling & Inferences', 'Simple & Compound Probability'],
    color: 'red',
  },
]

export default function Grade7MathHub() {
  return (
    <CourseHub
      courseSlug="grade-7-math"
      courseName="Grade 7 Math"
      courseDescription={metadata.description as string}
      tagline="Interactive lessons, flashcards, and practice — everything you need to ace 7th grade math."
      primaryCta={{ href: '/courses/grade-7-math', label: 'Start Learning' }}
      secondaryCta={{ href: '/flashcards?course=grade-7-math', label: 'Browse Flashcards' }}
      finalCtaHref="/courses/grade-7-math"
      accent="orange"
      features={features}
      units={units}
    />
  )
}
