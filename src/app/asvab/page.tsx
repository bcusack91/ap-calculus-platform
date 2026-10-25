import type { Metadata } from 'next'
import { CourseHub, type HubFeature, type HubUnit, type HubUnitColor } from '@/components/CourseHub'
import { InArticleAd } from '@/components/ad-banner'
import CourseToolGrid from '@/components/CourseToolGrid'
import { ASVAB_CATEGORIES, ASVAB_TOPIC_TITLES } from '@/lib/course-includes'

// Facts on this page stay qualitative until asvab-pipeline/ASVAB-FACTS.md is
// final: every timing, item count, scoring rule and branch minimum quoted on
// the site must come from that file (PLAN.md).
export const metadata: Metadata = {
  title: 'ASVAB Prep | Free ASVAB Practice Tests, AFQT Calculator & Lessons',
  description:
    'Free ASVAB prep for all ten CAT-ASVAB subtests: interactive lessons, a diagnostic, practice tests, an AFQT calculator, daily questions, flashcards and competitive matches. Built around the four AFQT subtests.',
  alternates: { canonical: 'https://www.studymondo.com/asvab' },
  openGraph: {
    title: 'ASVAB Prep | Free ASVAB Practice Tests, AFQT Calculator & Lessons',
    description: 'Prepare for every ASVAB subtest with lessons, practice tests, an AFQT calculator and daily questions.',
    url: 'https://www.studymondo.com/asvab',
  },
}

const features: HubFeature[] = [
  {
    title: 'Interactive Lessons',
    description: 'Step-by-step lessons for every subtest, deepest on the four that make up your AFQT: Word Knowledge, Paragraph Comprehension, Arithmetic Reasoning and Mathematics Knowledge.',
    href: '/courses/asvab',
    icon: 'lessons',
    color: 'from-green-500 to-lime-500',
    stats: '10 subtests · 35 lessons',
  },
  {
    title: 'Diagnostic Test',
    description: 'Find out where you stand on each subtest, get an AFQT estimate and a personalized list of lessons to study next.',
    href: '/asvab-diagnostic',
    icon: 'diagnostic',
    color: 'from-green-500 to-teal-500',
    stats: 'AFQT estimate · Study plan',
  },
  {
    title: 'AFQT Calculator',
    description: 'See how your Word Knowledge, Paragraph Comprehension, Arithmetic Reasoning and Mathematics Knowledge scores combine into an AFQT percentile.',
    href: '/asvab-afqt-calculator',
    icon: 'chart',
    color: 'from-emerald-500 to-green-500',
    stats: 'Free · No sign-in',
  },
  {
    title: 'Practice Test',
    description: 'A timed practice test across the subtests, scored with explanations for every question.',
    href: '/asvab-practice',
    icon: 'practice',
    color: 'from-cyan-500 to-blue-500',
    stats: 'All subtests · Timed',
  },
  {
    title: 'Score Predictor',
    description: 'Estimate your AFQT from your quiz results and lesson progress, and see which subtests would move it most.',
    href: '/asvab-score-predictor',
    icon: 'scorePredictor',
    color: 'from-indigo-500 to-violet-500',
    stats: 'Live estimate · AFQT',
  },
  {
    title: 'Unit Tests',
    description: 'Drill one subtest at a time with several test variations, ideal after finishing a unit.',
    href: '/asvab-unit-tests',
    icon: 'exitQuiz',
    color: 'from-emerald-500 to-teal-500',
    stats: '10 subtests · Variations',
  },
  {
    title: 'Study schedules',
    description: 'Week-by-week plans that pace lessons, quizzes and practice tests up to your test date.',
    href: '/asvab-study-plans',
    icon: 'studyPlan',
    color: 'from-emerald-500 to-green-500',
    stats: 'Weekly · Personalized',
  },
  {
    title: 'Daily question',
    description: 'A fresh ASVAB question every day, rotating through the subtests.',
    href: '/asvab-daily-question',
    icon: 'daily',
    color: 'from-rose-500 to-pink-500',
    stats: 'New daily · All subtests',
  },
  {
    title: 'Flashcards',
    description: 'Spaced-repetition flashcards for vocabulary roots, math formulas, science facts and shop, auto and electronics terms.',
    href: '/flashcards?course=asvab',
    icon: 'flashcards',
    color: 'from-purple-500 to-pink-500',
    stats: 'Vocabulary · Formulas · Terms',
  },
  {
    title: 'Competitive Mode',
    description: 'Challenge other students to real-time ASVAB question battles by subtest and climb the leaderboard.',
    href: '/competitive/asvab',
    icon: 'competitive',
    color: 'from-red-500 to-orange-500',
    stats: 'Real-time · Leaderboard',
  },
]

const UNIT_COLORS: HubUnitColor[] = ['blue', 'indigo', 'green', 'teal', 'cyan', 'amber', 'orange', 'rose', 'violet', 'pink', 'purple']

// The 11 units and their lessons come from the one layout in course-includes.
const units: HubUnit[] = ASVAB_CATEGORIES.map((c, i) => ({
  title: c.order <= 4 ? `${c.name} · AFQT` : c.name,
  topics: c.topics.map((slug) => ({ label: ASVAB_TOPIC_TITLES[slug] ?? slug, href: `/topics/${slug}` })),
  color: UNIT_COLORS[i % UNIT_COLORS.length],
}))

export default function ASVABHub() {
  return (
    <>
      <CourseHub
        courseSlug="asvab"
        courseName="ASVAB"
        courseDescription={metadata.description as string}
        tagline="Lessons, practice tests, an AFQT calculator, daily questions and competitive matches for every ASVAB subtest, with the most depth on the four that decide your AFQT."
        primaryCta={{ href: '/asvab-diagnostic', label: 'Start with the free diagnostic' }}
        secondaryCta={{ href: '/courses/asvab', label: 'Browse Lessons' }}
        finalCtaHref="/asvab-diagnostic"
        accent="green"
        features={features}
        units={units}
        exam={{
          title: 'About the ASVAB',
          sections: [
            {
              heading: 'What it is',
              bullets: [
                'The Armed Services Vocational Aptitude Battery: the test every military branch uses for enlistment',
                'Ten subtests on the computer-adaptive CAT-ASVAB at a MEPS',
                'The high-school ASVAB CEP covers the same content',
                'Your line scores, built from groups of subtests, decide which jobs you qualify for',
              ],
            },
            {
              heading: 'The AFQT',
              bullets: [
                'Armed Forces Qualification Test: four subtests decide whether you can enlist',
                'Word Knowledge, Paragraph Comprehension, Arithmetic Reasoning and Mathematics Knowledge',
                'Reported as a percentile: how you did compared with a national reference group',
                'Each branch sets its own minimum AFQT',
              ],
            },
          ],
        }}
      />
      <InArticleAd />
      <CourseToolGrid courseSlug="asvab" />
    </>
  )
}
