import type { Metadata } from 'next'
import { CourseHub, type HubFeature, type HubUnit } from '@/components/CourseHub'
import { InArticleAd } from '@/components/ad-banner'
import CourseToolGrid from '@/components/CourseToolGrid'

/**
 * Landing page for the standalone (non-AP) Precalculus track.
 *
 * This track had six tools registered in course-feature-config.ts — diagnostic,
 * unit tests, practice test, study plans, daily question, score predictor — but
 * no hub page at all, so nothing linked them together and two configs pointed
 * their "back to course" link at this non-existent URL. Unlike the other
 * courses there is no DB row (and therefore no /courses/precalculus catalog
 * view), so this page is the track's only home.
 */
export const metadata: Metadata = {
  title: 'Precalculus | Free Precalculus Practice & Review',
  description:
    'Comprehensive Precalculus preparation with a diagnostic test, unit tests, full practice tests, study plans, and daily questions. Free for all students.',
  alternates: { canonical: 'https://www.studymondo.com/precalculus' },
  openGraph: {
    title: 'Precalculus | Free Precalculus Practice & Review',
    description: 'Master Precalculus with diagnostics, unit tests, and daily practice.',
    url: 'https://www.studymondo.com/precalculus',
  },
}

const features: HubFeature[] = [
  {
    title: 'Diagnostic Test',
    description: 'A quick assessment across all six Precalculus units to find your strengths and gaps before you start.',
    href: '/precalc-diagnostic',
    icon: 'diagnostic',
    color: 'from-green-500 to-teal-500',
    stats: 'All units · ~25 min',
  },
  {
    title: 'Unit Tests',
    description: 'Focused tests on any single unit, with four distinct variations each so you can retake until it sticks.',
    href: '/precalc-unit-tests',
    icon: 'exitQuiz',
    color: 'from-fuchsia-500 to-purple-500',
    stats: '6 units · 4 variations each',
  },
  {
    title: 'Full Practice Test',
    description: 'A full-length, mixed practice test drawing from every unit — the closest thing to a real final.',
    href: '/precalc-practice',
    icon: 'practice',
    color: 'from-purple-500 to-violet-500',
    stats: 'Mixed · All units',
  },
  {
    title: 'Study Plans',
    description: 'A day-by-day schedule of lessons, practice, and review — pick a sprint or a standard pace.',
    href: '/precalc-study-plans',
    icon: 'studyPlan',
    color: 'from-violet-500 to-indigo-500',
    stats: 'Sprint or standard pace',
  },
  {
    title: 'Daily Question',
    description: 'A fresh Precalculus question every day, rotating across units to keep every topic warm.',
    href: '/precalc-daily-question',
    icon: 'daily',
    color: 'from-rose-500 to-pink-500',
    stats: 'New daily · All units',
  },
  {
    title: 'Score Predictor',
    description: 'See how your results map to a typical course grade, and which unit to work on next.',
    href: '/precalc-score-predictor',
    icon: 'scorePredictor',
    color: 'from-indigo-500 to-blue-500',
    stats: 'Live estimate · Topic mastery',
  },
]

// Mirrors PRECALCULUS_UNITS in src/data/unit-tests/precalculus.ts.
const units: HubUnit[] = [
  {
    title: 'Unit 1: Functions & Transformations',
    topics: ['Composition & Inverses', 'Transformations', 'Piecewise Functions', 'Average Rate of Change'],
    color: 'purple',
  },
  {
    title: 'Unit 2: Polynomial & Rational Functions',
    topics: ['End Behavior', 'Zeros & Multiplicity', 'Polynomial Division', 'Asymptotes & Complex Zeros'],
    color: 'violet',
  },
  {
    title: 'Unit 3: Exponential & Logarithmic Functions',
    topics: ['Growth & Decay', 'Logarithm Properties', 'Solving Log Equations', 'The Number e'],
    color: 'indigo',
  },
  {
    title: 'Unit 4: Trigonometry',
    topics: ['Unit Circle', 'Sine & Cosine Graphs', 'Inverse Trig & Identities', 'Laws of Sines & Cosines'],
    color: 'blue',
  },
  {
    title: 'Unit 5: Vectors, Matrices, Parametric & Polar',
    topics: ['Two-Dimensional Vectors', 'Matrices & Determinants', 'Parametric Motion', 'Polar Graphs'],
    color: 'cyan',
  },
  {
    title: 'Unit 6: Sequences & Series',
    topics: ['Arithmetic Sequences', 'Geometric Sequences', 'Series & Convergence', 'Sigma Notation'],
    color: 'teal',
  },
]

export default function PrecalculusHub() {
  return (
    <>
      <CourseHub
        courseSlug="precalculus"
        courseName="Precalculus"
        courseDescription={metadata.description as string}
        tagline="Diagnostics, unit tests, full practice tests, and day-by-day study plans — everything you need to get through Precalculus."
        primaryCta={{ href: '/precalc-diagnostic', label: 'Start with Diagnostic' }}
        secondaryCta={{ href: '/precalc-unit-tests', label: 'Browse Unit Tests' }}
        finalCtaHref="/precalc-diagnostic"
        accent="purple"
        features={features}
        units={units}
      />
      <InArticleAd />
      <CourseToolGrid courseSlug="precalculus" />
    </>
  )
}
