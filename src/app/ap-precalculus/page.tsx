import type { Metadata } from 'next'
import { CourseHub, type HubFeature, type HubUnit } from '@/components/CourseHub'
import { InArticleAd } from '@/components/ad-banner'
import CourseToolGrid from '@/components/CourseToolGrid'
import { apDiagnosticStats } from '@/lib/ap-diagnostic-courses'

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
    stats: apDiagnosticStats('ap-precalculus'),
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
    title: 'Daily question',
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
    title: 'Unit Tests',
    description: 'Drill a single AP Precalc unit at a time. 4 units · 4 different variations each — perfect for end-of-unit review.',
    href: '/ap-precalc-unit-tests',
    icon: 'chart',
    color: 'from-emerald-500 to-teal-500',
    stats: '4 units · 4 variations',
  },
  {
    title: 'Exit Quizzes',
    description: 'Short assessments after each lesson to confirm understanding before moving on.',
    href: '/courses/ap-precalculus?exitQuiz=true',
    icon: 'exitQuiz',
    color: 'from-cyan-500 to-blue-500',
    stats: 'Per-topic · Instant feedback',
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
    description: 'Take a complete, timed AP Precalculus practice exam: 42 MCQs (Section I, 105 min) plus 4 FRQs (Section II, 70 min) modeled on the official exam.',
    href: '/ap-precalc-practice',
    icon: 'fullExam',
    color: 'from-blue-500 to-indigo-500',
    stats: '42 MCQ + 4 FRQ · 2h 55m · Timed',
  },
  {
    title: 'Study schedules',
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
]

export default function APPrecalculusHub() {
  return (
    <>
      <CourseHub
        courseSlug="ap-precalculus"
        courseName="AP Precalculus"
        courseDescription={metadata.description as string}
        tagline="Interactive lessons, diagnostic assessments, flashcards, daily questions, and competitive challenges — everything you need to score a 5."
        primaryCta={{ href: '/ap-precalculus-diagnostic', label: 'Start with the free diagnostic' }}
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
                'Section I: 42 MCQs in 1 hour 45 minutes (Part A: 29 no-calculator in 65 min; Part B: 13 graphing-calculator in 40 min)',
                'Section II: 4 FRQs in 1 hour 10 minutes (Part A: 2 with calculator; Part B: 2 without, 35 min each)',
                '~62% multiple choice · ~38% free response',
                'Total exam time: 2 hours 55 minutes',
                'Graphing calculator required on the calculator parts only',
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
      {/* In-article ad — single placement; the hub body is owned by the shared
          <CourseHub/> component (no mid-page slot), so the ad follows it. */}
      <InArticleAd />
      <CourseToolGrid courseSlug="ap-precalculus" />
    </>
  )
}
