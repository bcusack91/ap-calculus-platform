import type { Metadata } from 'next'
import { CourseHub, type HubFeature, type HubUnit } from '@/components/CourseHub'
import { InArticleAd } from '@/components/ad-banner'
import CourseToolGrid from '@/components/CourseToolGrid'

export const metadata: Metadata = {
  title: 'Grade 4 Math | Free 4th Grade Math Practice',
  description:
    'Comprehensive 4th grade math practice with interactive lessons and flashcards covering multiplication, division, fractions, and decimals. Free for all students.',
  alternates: { canonical: 'https://www.studymondo.com/grade-4-math' },
  openGraph: {
    title: 'Grade 4 Math | Free 4th Grade Math Practice',
    description: 'Master 4th grade math with interactive lessons and flashcards.',
    url: 'https://www.studymondo.com/grade-4-math',
  },
}

const features: HubFeature[] = [
  {
    title: 'Interactive Lessons',
    description: 'Step-by-step lessons covering multi-digit multiplication, long division, fractions, decimals, and measurement.',
    href: '/courses/grade-4-math',
    icon: 'lessons',
    color: 'from-pink-500 to-rose-500',
    stats: 'All units · Step-by-step',
  },
  {
    title: 'Flashcards',
    description: 'Review key vocabulary, multiplication facts, and fraction concepts.',
    href: '/flashcards?course=grade-4-math',
    icon: 'flashcards',
    color: 'from-purple-500 to-pink-500',
    stats: 'Vocab · Facts · Concepts',
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
    title: 'Multiplication & Division',
    topics: ['Multi-Digit Multiplication', 'Long Division', 'Factors & Multiples', 'Word Problems'],
    color: 'pink',
  },
  {
    title: 'Fractions & Decimals',
    topics: ['Equivalent Fractions', 'Comparing Fractions', 'Adding & Subtracting Fractions', 'Decimal Notation'],
    color: 'rose',
  },
  {
    title: 'Measurement & Data',
    topics: ['Units of Measurement', 'Area & Perimeter', 'Line Plots', 'Time Problems'],
    color: 'purple',
  },
  {
    title: 'Geometry',
    topics: ['Lines, Rays & Angles', 'Classifying Shapes', 'Symmetry', 'Angle Measurement'],
    color: 'indigo',
  },
]

export default function Grade4MathHub() {
  return (
    <>
      <CourseHub
        courseSlug="grade-4-math"
        courseName="Grade 4 Math"
        courseDescription={metadata.description as string}
        tagline="Interactive lessons, flashcards, and practice — everything you need to ace 4th grade math."
        primaryCta={{ href: '/courses/grade-4-math', label: 'Start Learning' }}
        secondaryCta={{ href: '/flashcards?course=grade-4-math', label: 'Browse Flashcards' }}
        finalCtaHref="/courses/grade-4-math"
        accent="pink"
        features={features}
        units={units}
      />
      {/* In-article ad — single placement; the hub body is owned by the shared
          <CourseHub/> component (no mid-page slot), so the ad follows it. */}
      <InArticleAd />
      <CourseToolGrid courseSlug="grade-4-math" />
    </>
  )
}
