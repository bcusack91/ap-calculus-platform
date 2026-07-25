import type { Metadata } from 'next'
import { CourseHub, type HubFeature, type HubUnit } from '@/components/CourseHub'
import { InArticleAd } from '@/components/ad-banner'
import CourseToolGrid from '@/components/CourseToolGrid'

export const metadata: Metadata = {
  title: 'Pre-Algebra | Free Pre-Algebra Practice & Review',
  description:
    'Comprehensive Pre-Algebra preparation with interactive lessons, diagnostic tests, flashcards, and daily questions. Free for all students.',
  alternates: { canonical: 'https://www.studymondo.com/pre-algebra' },
  openGraph: {
    title: 'Pre-Algebra | Free Pre-Algebra Practice & Review',
    description: 'Master Pre-Algebra with interactive lessons, diagnostics, and daily practice.',
    url: 'https://www.studymondo.com/pre-algebra',
  },
}

const features: HubFeature[] = [
  {
    title: 'Interactive Lessons',
    description: 'Step-by-step lessons covering integers, fractions, decimals, ratios, percents, and basic equations.',
    href: '/courses/pre-algebra',
    icon: 'lessons',
    color: 'from-yellow-500 to-amber-500',
    stats: 'All units · Step-by-step',
  },
  {
    title: 'Diagnostic Test',
    description: 'Quick assessment across all Pre-Algebra topics to identify your strengths and weak areas.',
    href: '/prealgebra-diagnostic',
    icon: 'diagnostic',
    color: 'from-green-500 to-teal-500',
    stats: '~25 questions · 25 min',
  },
  {
    title: 'Flashcards',
    description: 'Review key vocabulary, properties, and rules — order of operations, exponents, and number sense.',
    href: '/flashcards?course=pre-algebra',
    icon: 'flashcards',
    color: 'from-purple-500 to-pink-500',
    stats: 'Vocab · Rules · Properties',
  },
  {
    title: 'Daily Question',
    description: 'A fresh Pre-Algebra question every day covering different units. Build consistency.',
    href: '/prealgebra-daily-question',
    icon: 'daily',
    color: 'from-rose-500 to-pink-500',
    stats: 'New daily · All units',
  },
  {
    title: 'Score Predictor',
    description: 'See how your quiz results map to a typical course grade and where to focus next.',
    href: '/prealgebra-score-predictor',
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
    title: 'Unit 1–2: Number Sense & Operations',
    topics: ['Integers & Number Line', 'Order of Operations', 'Fractions & Decimals', 'Exponents & Roots'],
    color: 'amber',
  },
  {
    title: 'Unit 3–4: Ratios, Proportions & Percents',
    topics: ['Ratios & Rates', 'Proportions', 'Percents & Discounts', 'Simple Interest'],
    color: 'orange',
  },
  {
    title: 'Unit 5–6: Expressions & Equations',
    topics: ['Variables & Expressions', 'Properties of Equality', 'Solving One- & Two-Step Equations', 'Inequalities'],
    color: 'rose',
  },
  {
    title: 'Unit 7–8: Geometry & Data',
    topics: ['Angles & Triangles', 'Area & Perimeter', 'Volume & Surface Area', 'Mean, Median & Probability'],
    color: 'pink',
  },
]

export default function PreAlgebraHub() {
  return (
    <>
      <CourseHub
        courseSlug="pre-algebra"
        courseName="Pre-Algebra"
        courseDescription={metadata.description as string}
        tagline="Interactive lessons, diagnostic assessments, flashcards, and daily practice — everything you need to ace Pre-Algebra."
        primaryCta={{ href: '/prealgebra-diagnostic', label: 'Start with Diagnostic' }}
        secondaryCta={{ href: '/courses/pre-algebra', label: 'Browse Lessons' }}
        finalCtaHref="/prealgebra-diagnostic"
        accent="amber"
        features={features}
        units={units}
      />
      {/* In-article ad — single placement; the hub body is owned by the shared
          <CourseHub/> component (no mid-page slot), so the ad follows it. */}
      <InArticleAd />
      <CourseToolGrid courseSlug="pre-algebra" />
    </>
  )
}
