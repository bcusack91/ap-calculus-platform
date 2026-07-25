import type { Metadata } from 'next'
import { CourseHub, type HubFeature, type HubUnit } from '@/components/CourseHub'
import { InArticleAd } from '@/components/ad-banner'
import CourseToolGrid from '@/components/CourseToolGrid'

export const metadata: Metadata = {
  title: 'Grade 8 Math | Free 8th Grade Math Practice & Review',
  description:
    'Comprehensive 8th grade math preparation with interactive lessons, diagnostic tests, flashcards, and daily questions. Free for all students.',
  alternates: { canonical: 'https://www.studymondo.com/grade-8-math' },
  openGraph: {
    title: 'Grade 8 Math | Free 8th Grade Math Practice & Review',
    description: 'Master 8th grade math with interactive lessons, diagnostics, and daily practice.',
    url: 'https://www.studymondo.com/grade-8-math',
  },
}

const features: HubFeature[] = [
  {
    title: 'Interactive Lessons',
    description: 'Step-by-step lessons covering linear functions, systems, exponents, the Pythagorean theorem, and more.',
    href: '/courses/grade-8-math',
    icon: 'lessons',
    color: 'from-violet-500 to-purple-500',
    stats: 'All units · Step-by-step',
  },
  {
    title: 'Diagnostic Test',
    description: 'Quick assessment across all 8th grade math topics to identify strengths and weak areas.',
    href: '/grade8-math-diagnostic',
    icon: 'diagnostic',
    color: 'from-green-500 to-teal-500',
    stats: '~25 questions · 25 min',
  },
  {
    title: 'Flashcards',
    description: 'Review key vocabulary and rules — exponents, scientific notation, slope, and more.',
    href: '/flashcards?course=grade-8-math',
    icon: 'flashcards',
    color: 'from-purple-500 to-pink-500',
    stats: 'Vocab · Rules · Concepts',
  },
  {
    title: 'Daily Question',
    description: 'A fresh 8th grade math question every day covering different units.',
    href: '/grade8-math-daily-question',
    icon: 'daily',
    color: 'from-rose-500 to-pink-500',
    stats: 'New daily · All units',
  },
  {
    title: 'Score Predictor',
    description: 'See how your quiz results map to a typical course grade and where to focus next.',
    href: '/grade8-math-score-predictor',
    icon: 'scorePredictor',
    color: 'from-indigo-500 to-violet-500',
    stats: 'Live estimate · Topic mastery',
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
    title: 'Unit 1–2: Number System & Exponents',
    topics: ['Rational vs. Irrational Numbers', 'Integer Exponents', 'Scientific Notation', 'Square & Cube Roots'],
    color: 'violet',
  },
  {
    title: 'Unit 3–4: Linear Functions & Equations',
    topics: ['Proportional Relationships & Slope', 'Linear Functions', 'Systems of Linear Equations', 'Solving Multi-Step Equations'],
    color: 'purple',
  },
  {
    title: 'Unit 5–6: Geometry & Pythagorean Theorem',
    topics: ['Transformations: Translations, Rotations, Reflections', 'Congruence & Similarity', 'Pythagorean Theorem & Distance', 'Volume of Cones, Cylinders & Spheres'],
    color: 'indigo',
  },
  {
    title: 'Unit 7–8: Statistics & Probability',
    topics: ['Bivariate Data & Scatter Plots', 'Lines of Best Fit', 'Two-Way Tables', 'Patterns of Association'],
    color: 'blue',
  },
]

export default function Grade8MathHub() {
  return (
    <>
      <CourseHub
        courseSlug="grade-8-math"
        courseName="Grade 8 Math"
        courseDescription={metadata.description as string}
        tagline="Interactive lessons, diagnostic assessments, flashcards, and daily practice — everything you need to ace 8th grade math."
        primaryCta={{ href: '/grade8-math-diagnostic', label: 'Start with Diagnostic' }}
        secondaryCta={{ href: '/courses/grade-8-math', label: 'Browse Lessons' }}
        finalCtaHref="/grade8-math-diagnostic"
        accent="violet"
        features={features}
        units={units}
      />
      {/* In-article ad — single placement; the hub body is owned by the shared
          <CourseHub/> component (no mid-page slot), so the ad follows it. */}
      <InArticleAd />
      <CourseToolGrid courseSlug="grade-8-math" />
    </>
  )
}
