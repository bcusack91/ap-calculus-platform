import type { Metadata } from 'next'
import { CourseHub, type HubFeature, type HubUnit } from '@/components/CourseHub'

export const metadata: Metadata = {
  title: 'Algebra 1 | Free Algebra 1 Practice & Review',
  description:
    'Comprehensive Algebra 1 preparation with interactive lessons, diagnostic tests, flashcards, and daily questions. Free for all students.',
  alternates: { canonical: 'https://www.studymondo.com/algebra-1' },
  openGraph: {
    title: 'Algebra 1 | Free Algebra 1 Practice & Review',
    description: 'Master Algebra 1 with interactive lessons, diagnostics, and daily practice.',
    url: 'https://www.studymondo.com/algebra-1',
  },
}

const features: HubFeature[] = [
  {
    title: 'Interactive Lessons',
    description: 'Step-by-step lessons covering linear equations, functions, exponents, polynomials, and quadratic equations.',
    href: '/courses/algebra-1',
    icon: 'lessons',
    color: 'from-sky-500 to-blue-500',
    stats: 'All units · Step-by-step',
  },
  {
    title: 'Diagnostic Test',
    description: 'Quick assessment across all Algebra 1 topics to identify your strengths and weak areas.',
    href: '/algebra1-diagnostic',
    icon: 'diagnostic',
    color: 'from-green-500 to-teal-500',
    stats: '~25 questions · 25 min',
  },
  {
    title: 'Flashcards',
    description: 'Review key vocabulary, formulas, and rules — slope, factoring, exponent rules, and more.',
    href: '/flashcards?course=algebra-1',
    icon: 'flashcards',
    color: 'from-purple-500 to-pink-500',
    stats: 'Vocab · Formulas · Rules',
  },
  {
    title: 'Daily Question',
    description: 'A fresh Algebra 1 question every day covering different units. Build consistency.',
    href: '/algebra1-daily-question',
    icon: 'daily',
    color: 'from-rose-500 to-pink-500',
    stats: 'New daily · All units',
  },
  {
    title: 'Score Predictor',
    description: 'See how your quiz results map to a typical course grade and where to focus next.',
    href: '/algebra1-score-predictor',
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
    title: 'Unit 1–2: Expressions & Equations',
    topics: ['Real Numbers & Properties', 'Order of Operations', 'Solving Linear Equations', 'Solving Inequalities'],
    color: 'sky',
  },
  {
    title: 'Unit 3–4: Linear Functions & Systems',
    topics: ['Slope & Rate of Change', 'Graphing Linear Equations', 'Systems of Equations', 'Systems of Inequalities'],
    color: 'blue',
  },
  {
    title: 'Unit 5–6: Exponents & Polynomials',
    topics: ['Exponent Rules', 'Polynomial Operations', 'Factoring', 'Special Products'],
    color: 'indigo',
  },
  {
    title: 'Unit 7–8: Quadratics & Beyond',
    topics: ['Quadratic Functions', 'Quadratic Formula', 'Radicals & Rational Expressions', 'Data & Statistics Basics'],
    color: 'purple',
  },
]

export default function Algebra1Hub() {
  return (
    <CourseHub
      courseSlug="algebra-1"
      courseName="Algebra 1"
      courseDescription={metadata.description as string}
      tagline="Interactive lessons, diagnostic assessments, flashcards, and daily practice — everything you need to ace Algebra 1."
      primaryCta={{ href: '/algebra1-diagnostic', label: 'Start with Diagnostic' }}
      secondaryCta={{ href: '/courses/algebra-1', label: 'Browse Lessons' }}
      finalCtaHref="/algebra1-diagnostic"
      accent="sky"
      features={features}
      units={units}
    />
  )
}
