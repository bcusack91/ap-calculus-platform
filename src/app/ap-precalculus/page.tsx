import type { Metadata } from 'next'
import { CourseHub, type HubFeature, type HubUnit } from '@/components/CourseHub'

export const metadata: Metadata = {
  title: 'AP Precalculus | Free AP Precalc Practice & Review',
  description:
    'Comprehensive AP Precalculus preparation with interactive lessons, diagnostic tests, flashcards, daily questions, and competitive challenges. Free for all students.',
  alternates: { canonical: 'https://www.studymondo.com/ap-precalculus' },
  openGraph: {
    title: 'AP Precalculus | Free AP Precalc Practice & Review',
    description: 'Master AP Precalculus with interactive lessons, diagnostics, and daily practice.',
    url: 'https://www.studymondo.com/ap-precalculus',
  },
}

const features: HubFeature[] = [
  {
    title: 'Interactive Lessons',
    description: 'Step-by-step lessons covering polynomial, rational, exponential, logarithmic, and trigonometric functions plus parametric, polar, vectors, and matrices.',
    href: '/courses/ap-precalculus',
    icon: 'lessons',
    color: 'from-blue-500 to-indigo-500',
    stats: 'All units · Step-by-step',
  },
  {
    title: 'Diagnostic Test',
    description: 'Quick assessment across all AP Precalc units to identify your strengths and weak areas with a personalized study plan.',
    href: '/ap-precalculus-diagnostic',
    icon: 'diagnostic',
    color: 'from-green-500 to-teal-500',
    stats: '~30 questions · 30 min',
  },
  {
    title: 'Flashcards',
    description: 'Review key formulas, identities, function transformations, and AP Precalculus vocabulary.',
    href: '/flashcards?course=ap-precalculus',
    icon: 'flashcards',
    color: 'from-purple-500 to-pink-500',
    stats: 'Identities · Formulas · Terms',
  },
  {
    title: 'Competitive Mode',
    description: 'Challenge other students in real-time precalc question battles. Climb the leaderboard.',
    href: '/competitive',
    icon: 'competitive',
    color: 'from-red-500 to-orange-500',
    stats: 'Real-time · Leaderboard',
  },
  {
    title: 'Daily Question',
    description: 'A fresh AP Precalculus question every day covering different units. Build consistency.',
    href: '/ap-precalculus-daily-question',
    icon: 'daily',
    color: 'from-rose-500 to-pink-500',
    stats: 'New daily · All units',
  },
  {
    title: 'Score Predictor',
    description: 'Estimate your AP Precalculus exam score using your quiz results and topic mastery progress.',
    href: '/ap-precalculus-score-predictor',
    icon: 'scorePredictor',
    color: 'from-indigo-500 to-violet-500',
    stats: 'Live estimate · AP 1-5',
  },
  {
    title: 'Practice Tests',
    description: 'Full mixed-topic practice sets to build endurance and pattern recognition before the exam.',
    href: '/ap-precalc-practice',
    icon: 'practice',
    color: 'from-cyan-500 to-blue-500',
    stats: 'Mixed topics · Timed',
  },
  {
    title: 'FRQ Practice',
    description: 'Practice free-response questions with auto-grading, rubrics, and timed exam simulation. ~38% of the AP exam.',
    href: '/ap-precalc-frq',
    icon: 'frq',
    color: 'from-indigo-500 to-violet-500',
    stats: '4 FRQs · Auto-graded · Timed',
  },
  {
    title: 'Full-Length Practice Exam',
    description: 'Take a complete, timed AP Precalculus practice exam: 40 MCQs (Section I, 120 min) plus 4 FRQs (Section II, 60 min) modeled on the official exam.',
    href: '/ap-precalc-practice',
    icon: 'fullExam',
    color: 'from-blue-500 to-indigo-500',
    stats: '40 MCQ + 4 FRQ · 3 hours · Timed',
  },
  {
    title: 'Study Plans',
    description: 'Multi-week guided plans that pace lessons, quizzes, and FRQ practice up to exam day.',
    href: '/ap-precalc-study-plans',
    icon: 'studyPlan',
    color: 'from-emerald-500 to-green-500',
    stats: 'Weekly · Personalized',
  },
]

const units: HubUnit[] = [
  {
    title: 'Unit 1: Polynomial & Rational Functions',
    topics: ['End Behavior & Degree', 'Roots, Zeros & Factoring', 'Rational Function Asymptotes', 'Modeling with Polynomials'],
    color: 'blue',
  },
  {
    title: 'Unit 2: Exponential & Logarithmic Functions',
    topics: ['Exponential Growth & Decay', 'Logarithm Properties', 'Solving Exp/Log Equations', 'Modeling with Exp & Log'],
    color: 'indigo',
  },
  {
    title: 'Unit 3: Trigonometric & Polar Functions',
    topics: ['Unit Circle & Identities', 'Graphs of Sin, Cos, Tan', 'Inverse Trig & Equations', 'Polar Functions & Coordinates'],
    color: 'purple',
  },
  {
    title: 'Unit 4: Functions Involving Parameters, Vectors & Matrices',
    topics: ['Parametric Equations', 'Vectors in the Plane', 'Matrix Operations', 'Linear Transformations'],
    color: 'green',
  },
]

export default function APPrecalculusHub() {
  return (
    <CourseHub
      courseSlug="ap-precalculus"
      courseName="AP Precalculus"
      courseDescription={metadata.description as string}
      tagline="Interactive lessons, diagnostic assessments, flashcards, daily questions, and competitive challenges — everything you need to score a 5."
      primaryCta={{ href: '/ap-precalculus-diagnostic', label: 'Start with Diagnostic' }}
      secondaryCta={{ href: '/courses/ap-precalculus', label: 'Browse Lessons' }}
      finalCtaHref="/ap-precalculus-diagnostic"
      accent="blue"
      features={features}
      units={units}
      exam={{
        title: 'About the AP Precalculus Exam',
        sections: [
          {
            heading: 'Format',
            bullets: [
              'Section I: 40 MCQs in 2 hours',
              'Section II: 4 FRQs in 1 hour',
              '~62% multiple choice · ~38% free response',
              'Total exam time: 3 hours',
              'Graphing calculator allowed throughout',
            ],
          },
          {
            heading: 'Scoring',
            bullets: [
              'Score range: 1–5',
              '5 = Extremely well qualified',
              'Earn college credit at most 4-year colleges',
              'No penalty for guessing',
              'Most colleges accept 4+',
            ],
          },
        ],
      }}
    />
  )
}
