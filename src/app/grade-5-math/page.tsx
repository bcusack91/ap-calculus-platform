import type { Metadata } from 'next'
import { CourseHub, type HubFeature, type HubUnit } from '@/components/CourseHub'

export const metadata: Metadata = {
  title: 'Grade 5 Math | Free 5th Grade Math Practice',
  description:
    'Comprehensive 5th grade math practice with interactive lessons and flashcards covering place value, fractions, volume, and coordinates. Free for all students.',
  alternates: { canonical: 'https://www.studymondo.com/grade-5-math' },
  openGraph: {
    title: 'Grade 5 Math | Free 5th Grade Math Practice',
    description: 'Master 5th grade math with interactive lessons and flashcards.',
    url: 'https://www.studymondo.com/grade-5-math',
  },
}

const features: HubFeature[] = [
  {
    title: 'Interactive Lessons',
    description: 'Step-by-step lessons covering decimals, fractions, volume, the coordinate plane, and operations.',
    href: '/courses/grade-5-math',
    icon: 'lessons',
    color: 'from-rose-500 to-red-500',
    stats: 'All units · Step-by-step',
  },
  {
    title: 'Flashcards',
    description: 'Review key vocabulary, place value, and operations with fractions and decimals.',
    href: '/flashcards?course=grade-5-math',
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
    title: 'Place Value & Operations',
    topics: ['Place Value to Millions', 'Decimal Place Value', 'Multi-Digit Multiplication & Division', 'Order of Operations'],
    color: 'rose',
  },
  {
    title: 'Fractions',
    topics: ['Adding & Subtracting Unlike Fractions', 'Multiplying Fractions', 'Dividing with Fractions', 'Mixed Numbers'],
    color: 'pink',
  },
  {
    title: 'Measurement & Volume',
    topics: ['Converting Units', 'Volume of Rectangular Prisms', 'Line Plots with Fractions', 'Real-World Problems'],
    color: 'red',
  },
  {
    title: 'Geometry & Coordinates',
    topics: ['The Coordinate Plane', 'Plotting Ordered Pairs', 'Classifying 2D Shapes', 'Hierarchies of Shapes'],
    color: 'orange',
  },
]

export default function Grade5MathHub() {
  return (
    <CourseHub
      courseSlug="grade-5-math"
      courseName="Grade 5 Math"
      courseDescription={metadata.description as string}
      tagline="Interactive lessons, flashcards, and practice — everything you need to ace 5th grade math."
      primaryCta={{ href: '/courses/grade-5-math', label: 'Start Learning' }}
      secondaryCta={{ href: '/flashcards?course=grade-5-math', label: 'Browse Flashcards' }}
      finalCtaHref="/courses/grade-5-math"
      accent="rose"
      features={features}
      units={units}
    />
  )
}
