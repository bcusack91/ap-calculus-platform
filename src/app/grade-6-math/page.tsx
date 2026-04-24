import type { Metadata } from 'next'
import { CourseHub, type HubFeature, type HubUnit } from '@/components/CourseHub'

export const metadata: Metadata = {
  title: 'Grade 6 Math | Free 6th Grade Math Practice',
  description:
    'Comprehensive 6th grade math practice with interactive lessons and flashcards covering ratios, rates, integers, and geometry. Free for all students.',
  alternates: { canonical: 'https://www.studymondo.com/grade-6-math' },
  openGraph: {
    title: 'Grade 6 Math | Free 6th Grade Math Practice',
    description: 'Master 6th grade math with interactive lessons and flashcards.',
    url: 'https://www.studymondo.com/grade-6-math',
  },
}

const features: HubFeature[] = [
  {
    title: 'Interactive Lessons',
    description: 'Step-by-step lessons covering ratios, rates, integers, expressions, equations, and basic geometry.',
    href: '/courses/grade-6-math',
    icon: 'lessons',
    color: 'from-red-500 to-orange-500',
    stats: 'All units · Step-by-step',
  },
  {
    title: 'Flashcards',
    description: 'Review key vocabulary and rules — ratios, rates, integer operations, and expressions.',
    href: '/flashcards?course=grade-6-math',
    icon: 'flashcards',
    color: 'from-purple-500 to-pink-500',
    stats: 'Vocab · Rules · Concepts',
  },
  {
    title: 'Competitive Mode',
    description: 'Challenge other students in real-time math question battles. Climb the leaderboard.',
    href: '/competitive',
    icon: 'competitive',
    color: 'from-rose-500 to-red-500',
    stats: 'Real-time · Leaderboard',
  },
]

const units: HubUnit[] = [
  {
    title: 'Ratios & Proportional Reasoning',
    topics: ['Ratios & Equivalent Ratios', 'Unit Rates', 'Percents', 'Measurement Conversions'],
    color: 'red',
  },
  {
    title: 'The Number System',
    topics: ['Dividing Fractions', 'Decimal Operations', 'Integers & the Number Line', 'Absolute Value'],
    color: 'orange',
  },
  {
    title: 'Expressions & Equations',
    topics: ['Variables & Expressions', 'Solving One-Variable Equations', 'Inequalities', 'Dependent & Independent Variables'],
    color: 'amber',
  },
  {
    title: 'Geometry & Statistics',
    topics: ['Area of Polygons', 'Surface Area & Volume', 'Coordinate Plane Geometry', 'Statistical Measures'],
    color: 'rose',
  },
]

export default function Grade6MathHub() {
  return (
    <CourseHub
      courseSlug="grade-6-math"
      courseName="Grade 6 Math"
      courseDescription={metadata.description as string}
      tagline="Interactive lessons, flashcards, and practice — everything you need to ace 6th grade math."
      primaryCta={{ href: '/courses/grade-6-math', label: 'Start Learning' }}
      secondaryCta={{ href: '/flashcards?course=grade-6-math', label: 'Browse Flashcards' }}
      finalCtaHref="/courses/grade-6-math"
      accent="red"
      features={features}
      units={units}
    />
  )
}
