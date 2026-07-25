import type { Metadata } from 'next'
import StudyPlanSelector from '@/components/StudyPlanSelector'
import { config, PSAT_PLANS } from '@/data/psat-study-plans'
import { getContentItems, CONTENT_TYPES } from '@/lib/content-store'

export const metadata: Metadata = {
  title: 'PSAT/NMSQT Study Plans | Study Mondo',
  description:
    'Pick a PSAT study plan — a 4-week sprint or an 8-week build — with a day-by-day schedule across all eight digital-PSAT domains.',
  alternates: { canonical: 'https://www.studymondo.com/psat-study-plans' },
  openGraph: {
    title: 'PSAT/NMSQT Study Plans',
    description: 'Day-by-day PSAT study schedules built around lessons, unit tests, and full-length practice.',
    url: 'https://www.studymondo.com/psat-study-plans',
  },
}

export const revalidate = 300

export default async function Page() {
  const plans = await getContentItems(CONTENT_TYPES.studyPlanTemplate, 'psat', PSAT_PLANS)
  return <StudyPlanSelector {...config} plans={plans} />
}
