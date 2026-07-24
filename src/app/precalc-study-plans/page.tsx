import type { Metadata } from 'next'
import StudyPlanSelector from '@/components/StudyPlanSelector'
import { config, PRECALCULUS_PLANS } from '@/data/precalculus-study-plans'
import { getContentItems, CONTENT_TYPES } from '@/lib/content-store'

export const metadata: Metadata = {
  title: 'Precalculus Study Plans | Study Mondo',
  description:
    'Pick a Precalculus study plan — a sprint or a standard pace — with a day-by-day schedule of lessons, practice, and review.',
  alternates: { canonical: 'https://www.studymondo.com/precalc-study-plans' },
  openGraph: {
    title: 'Precalculus Study Plans',
    description: 'Day-by-day Precalculus study schedules built around lessons, practice, and review.',
    url: 'https://www.studymondo.com/precalc-study-plans',
  },
}

// Templates come from the content store (DB) with a static fallback.
// ISR: cache the rendered page but pick up content-store edits within the window.
export const revalidate = 300

export default async function Page() {
  const plans = await getContentItems(CONTENT_TYPES.studyPlanTemplate, 'precalculus', PRECALCULUS_PLANS)
  return <StudyPlanSelector {...config} plans={plans} />
}
