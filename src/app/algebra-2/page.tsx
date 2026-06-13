import type { Metadata } from 'next'
import { CourseHub, type HubFeature, type HubUnit } from '@/components/CourseHub'
import { InArticleAd } from '@/components/ad-banner'

export const metadata: Metadata = {
  title: 'Algebra 2 | Free Algebra 2 Practice & Review',
  description:
    'Comprehensive Algebra 2 preparation with interactive lessons, diagnostic tests, flashcards, and daily questions. Free for all students.',
  alternates: { canonical: 'https://www.studymondo.com/algebra-2' },
  openGraph: {
    title: 'Algebra 2 | Free Algebra 2 Practice & Review',
    description: 'Master Algebra 2 with interactive lessons, diagnostics, and daily practice.',
    url: 'https://www.studymondo.com/algebra-2',
  },
}

const features: HubFeature[] = [
  {
    title: 'Interactive Lessons',
    description: 'Step-by-step lessons covering polynomial, rational, exponential, logarithmic, and trigonometric functions.',
    href: '/courses/algebra-2',
    icon: 'lessons',
    color: 'from-cyan-500 to-teal-500',
    stats: 'All units · Step-by-step',
  },
  {
    title: 'Diagnostic Test',
    description: 'Quick assessment across all Algebra 2 topics to identify your strengths and weak areas.',
    href: '/algebra2-diagnostic',
    icon: 'diagnostic',
    color: 'from-green-500 to-teal-500',
    stats: '~25 questions · 25 min',
  },
  {
    title: 'Flashcards',
    description: 'Review key formulas — log rules, complex numbers, conic sections, and trig identities.',
    href: '/flashcards?course=algebra-2',
    icon: 'flashcards',
    color: 'from-purple-500 to-pink-500',
    stats: 'Identities · Formulas · Concepts',
  },
  {
    title: 'Daily Question',
    description: 'A fresh Algebra 2 question every day covering different units. Build consistency.',
    href: '/algebra2-daily-question',
    icon: 'daily',
    color: 'from-rose-500 to-pink-500',
    stats: 'New daily · All units',
  },
  {
    title: 'Score Predictor',
    description: 'See how your quiz results map to a typical course grade and where to focus next.',
    href: '/algebra2-score-predictor',
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
    title: 'Unit 1–2: Functions & Polynomials',
    topics: ['Functions & Their Inverses', 'Polynomial Operations', 'Factoring & Roots', 'Polynomial Graphs'],
    color: 'cyan',
  },
  {
    title: 'Unit 3–4: Rational, Radical & Complex',
    topics: ['Rational Expressions', 'Solving Rational Equations', 'Radical Functions', 'Complex Numbers'],
    color: 'teal',
  },
  {
    title: 'Unit 5–6: Exponential, Log & Sequences',
    topics: ['Exponential Functions', 'Logarithm Properties', 'Solving Exp/Log Equations', 'Arithmetic & Geometric Sequences'],
    color: 'blue',
  },
  {
    title: 'Unit 7–8: Trig, Conics & Probability',
    topics: ['Unit Circle & Trig Functions', 'Trig Identities', 'Conic Sections', 'Probability & Statistics'],
    color: 'indigo',
  },
]

export default function Algebra2Hub() {
  return (
    <>
      <CourseHub
        courseSlug="algebra-2"
        courseName="Algebra 2"
        courseDescription={metadata.description as string}
        tagline="Interactive lessons, diagnostic assessments, flashcards, and daily practice — everything you need to ace Algebra 2."
        primaryCta={{ href: '/algebra2-diagnostic', label: 'Start with Diagnostic' }}
        secondaryCta={{ href: '/courses/algebra-2', label: 'Browse Lessons' }}
        finalCtaHref="/algebra2-diagnostic"
        accent="cyan"
        features={features}
        units={units}
      />
      {/* In-article ad — single placement; the hub body is owned by the shared
          <CourseHub/> component (no mid-page slot), so the ad follows it. */}
      <InArticleAd />
    </>
  )
}
