import type { Metadata } from 'next'
import { CourseHub, type HubFeature, type HubUnit } from '@/components/CourseHub'

export const metadata: Metadata = {
  title: 'Geometry | Free Geometry Practice & Review',
  description:
    'Comprehensive Geometry preparation with interactive lessons, diagnostic tests, flashcards, and daily questions. Free for all students.',
  alternates: { canonical: 'https://www.studymondo.com/geometry' },
  openGraph: {
    title: 'Geometry | Free Geometry Practice & Review',
    description: 'Master Geometry with interactive lessons, diagnostics, and daily practice.',
    url: 'https://www.studymondo.com/geometry',
  },
}

const features: HubFeature[] = [
  {
    title: 'Interactive Lessons',
    description: 'Step-by-step lessons covering shapes, congruence, similarity, trigonometry, circles, and 3D solids.',
    href: '/courses/geometry',
    icon: 'lessons',
    color: 'from-emerald-500 to-green-500',
    stats: 'All units · Step-by-step',
  },
  {
    title: 'Diagnostic Test',
    description: 'Quick assessment across all Geometry topics to identify your strengths and weak areas.',
    href: '/geometry-diagnostic',
    icon: 'diagnostic',
    color: 'from-green-500 to-teal-500',
    stats: '~25 questions · 25 min',
  },
  {
    title: 'Flashcards',
    description: 'Review key theorems, postulates, formulas, and vocabulary — angles, triangles, circles, and more.',
    href: '/flashcards?course=geometry',
    icon: 'flashcards',
    color: 'from-purple-500 to-pink-500',
    stats: 'Theorems · Formulas · Vocab',
  },
  {
    title: 'Daily Question',
    description: 'A fresh Geometry question every day covering different units. Build consistency.',
    href: '/geometry-daily-question',
    icon: 'daily',
    color: 'from-rose-500 to-pink-500',
    stats: 'New daily · All units',
  },
  {
    title: 'Score Predictor',
    description: 'See how your quiz results map to a typical course grade and where to focus next.',
    href: '/geometry-score-predictor',
    icon: 'scorePredictor',
    color: 'from-indigo-500 to-violet-500',
    stats: 'Live estimate · Topic mastery',
  },
  {
    title: 'Competitive Mode',
    description: 'Challenge other students in real-time geometry question battles. Climb the leaderboard.',
    href: '/competitive',
    icon: 'competitive',
    color: 'from-red-500 to-orange-500',
    stats: 'Real-time · Leaderboard',
  },
]

const units: HubUnit[] = [
  {
    title: 'Unit 1–2: Foundations & Reasoning',
    topics: ['Points, Lines & Planes', 'Angle Relationships', 'Logical Reasoning', 'Two-Column Proofs'],
    color: 'green',
  },
  {
    title: 'Unit 3–4: Triangles & Congruence',
    topics: ['Triangle Properties', 'Congruent Triangles', 'Pythagorean Theorem', 'Special Right Triangles'],
    color: 'teal',
  },
  {
    title: 'Unit 5–6: Similarity & Trigonometry',
    topics: ['Similar Polygons', 'Right-Triangle Trig', 'Laws of Sines & Cosines', 'Quadrilaterals'],
    color: 'cyan',
  },
  {
    title: 'Unit 7–8: Circles, Area & Solids',
    topics: ['Circle Theorems', 'Arc Length & Sectors', 'Area & Perimeter', '3D Solids: Volume & Surface Area'],
    color: 'blue',
  },
]

export default function GeometryHub() {
  return (
    <CourseHub
      courseSlug="geometry"
      courseName="Geometry"
      courseDescription={metadata.description as string}
      tagline="Interactive lessons, diagnostic assessments, flashcards, and daily practice — everything you need to ace Geometry."
      primaryCta={{ href: '/geometry-diagnostic', label: 'Start with Diagnostic' }}
      secondaryCta={{ href: '/courses/geometry', label: 'Browse Lessons' }}
      finalCtaHref="/geometry-diagnostic"
      accent="green"
      features={features}
      units={units}
    />
  )
}
