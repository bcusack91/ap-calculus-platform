import type { Metadata } from 'next'
import StudyPlanSelector from '@/components/StudyPlanSelector'
import { config, GRADE8_MATH_PLANS } from '@/data/grade8-math-study-plans'
import { getContentItems, CONTENT_TYPES } from '@/lib/content-store'

export const metadata: Metadata = {
  title: 'Grade 8 Math Study Plans | Study Mondo',
  description:
    'Pick a Grade 8 Math study plan — a sprint or a standard pace — with a day-by-day schedule of lessons, practice, and review.',
  alternates: { canonical: 'https://www.studymondo.com/grade8-math-study-plans' },
  openGraph: {
    title: 'Grade 8 Math Study Plans',
    description: 'Day-by-day Grade 8 Math study schedules built around lessons, practice, and review.',
    url: 'https://www.studymondo.com/grade8-math-study-plans',
  },
}

// Templates come from the content store (DB) with a static fallback.
// ISR: cache the rendered page but pick up content-store edits within the window.
export const revalidate = 300

export default async function Page() {
  const plans = await getContentItems(CONTENT_TYPES.studyPlanTemplate, 'grade-8-math', GRADE8_MATH_PLANS)
  return <StudyPlanSelector {...config} plans={plans} />
}
