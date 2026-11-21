import type { Metadata } from 'next'
import StudyPlanSelector from '@/components/StudyPlanSelector'
import { config, ALGEBRA2_PLANS } from '@/data/algebra2-study-plans'
import { getContentItems, CONTENT_TYPES } from '@/lib/content-store'

export const metadata: Metadata = {
  title: 'Algebra 2 Study Schedules | Study Mondo',
  description:
    'Pick a Algebra 2 study plan — a sprint or a standard pace — with a day-by-day schedule of lessons, practice, and review.',
  alternates: { canonical: 'https://www.studymondo.com/algebra2-study-plans' },
  openGraph: {
    title: 'Algebra 2 Study Schedules',
    description: 'Day-by-day Algebra 2 study schedules built around lessons, practice, and review.',
    url: 'https://www.studymondo.com/algebra2-study-plans',
  },
}

// Templates come from the content store (DB) with a static fallback.
// ISR: cache the rendered page but pick up content-store edits within a day (admin edits refresh at once).
export const revalidate = 86400

export default async function Page() {
  const plans = await getContentItems(CONTENT_TYPES.studyPlanTemplate, 'algebra-2', ALGEBRA2_PLANS)
  return <StudyPlanSelector {...config} plans={plans} />
}
