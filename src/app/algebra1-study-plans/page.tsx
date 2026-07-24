import type { Metadata } from 'next'
import StudyPlanSelector from '@/components/StudyPlanSelector'
import { config, ALGEBRA1_PLANS } from '@/data/algebra1-study-plans'
import { getContentItems, CONTENT_TYPES } from '@/lib/content-store'

export const metadata: Metadata = {
  title: 'Algebra 1 Study Plans | Study Mondo',
  description:
    'Pick a Algebra 1 study plan — a sprint or a standard pace — with a day-by-day schedule of lessons, practice, and review.',
  alternates: { canonical: 'https://www.studymondo.com/algebra1-study-plans' },
  openGraph: {
    title: 'Algebra 1 Study Plans',
    description: 'Day-by-day Algebra 1 study schedules built around lessons, practice, and review.',
    url: 'https://www.studymondo.com/algebra1-study-plans',
  },
}

// Templates come from the content store (DB) with a static fallback.
// ISR: cache the rendered page but pick up content-store edits within the window.
export const revalidate = 300

export default async function Page() {
  const plans = await getContentItems(CONTENT_TYPES.studyPlanTemplate, 'algebra-1', ALGEBRA1_PLANS)
  return <StudyPlanSelector {...config} plans={plans} />
}
