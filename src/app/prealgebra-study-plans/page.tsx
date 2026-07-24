import type { Metadata } from 'next'
import StudyPlanSelector from '@/components/StudyPlanSelector'
import { config, PREALGEBRA_PLANS } from '@/data/prealgebra-study-plans'
import { getContentItems, CONTENT_TYPES } from '@/lib/content-store'

export const metadata: Metadata = {
  title: 'Pre-Algebra Study Plans | Study Mondo',
  description:
    'Pick a Pre-Algebra study plan — a sprint or a standard pace — with a day-by-day schedule of lessons, practice, and review.',
  alternates: { canonical: 'https://www.studymondo.com/prealgebra-study-plans' },
  openGraph: {
    title: 'Pre-Algebra Study Plans',
    description: 'Day-by-day Pre-Algebra study schedules built around lessons, practice, and review.',
    url: 'https://www.studymondo.com/prealgebra-study-plans',
  },
}

// Templates come from the content store (DB) with a static fallback.
// ISR: cache the rendered page but pick up content-store edits within the window.
export const revalidate = 300

export default async function Page() {
  const plans = await getContentItems(CONTENT_TYPES.studyPlanTemplate, 'pre-algebra', PREALGEBRA_PLANS)
  return <StudyPlanSelector {...config} plans={plans} />
}
