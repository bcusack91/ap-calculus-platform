import type { Metadata } from 'next'
import StudyPlanSelector from '@/components/StudyPlanSelector'
import { config, OCHEM2_PLANS } from '@/data/ochem2-study-plans'
import { getContentItems, CONTENT_TYPES } from '@/lib/content-store'

export const metadata: Metadata = {
  title: 'Organic Chemistry 2 Study Plans | Study Mondo',
  description:
    'Pick a Organic Chemistry 2 study plan — a sprint or a full-semester pace — with a day-by-day schedule of lessons, mechanism practice, and unit tests.',
  alternates: { canonical: 'https://www.studymondo.com/ochem2-study-plans' },
  openGraph: {
    title: 'Organic Chemistry 2 Study Plans',
    description: 'Day-by-day Organic Chemistry 2 study schedules built around lessons, practice, and unit tests.',
    url: 'https://www.studymondo.com/ochem2-study-plans',
  },
}

// Templates come from the content store (DB) with a static fallback.
// ISR: cache the rendered page but pick up content-store edits within the window.
export const revalidate = 300

export default async function Page() {
  const plans = await getContentItems(CONTENT_TYPES.studyPlanTemplate, 'organic-chemistry-2', OCHEM2_PLANS)
  return <StudyPlanSelector {...config} plans={plans} />
}
