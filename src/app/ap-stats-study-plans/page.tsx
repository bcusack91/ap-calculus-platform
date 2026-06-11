import StudyPlanSelector from '@/components/StudyPlanSelector'
import { config } from '@/data/ap-stats-study-plans'
import { AP_STATS_PLANS } from '@/data/ap-stats-study-plans'
import { getContentItems, CONTENT_TYPES } from '@/lib/content-store'

// Templates now come from the content store (DB) with a static fallback (#10),
// so they can be edited without a deploy. Server component → fetch on the server.
// ISR: cache the rendered page but pick up content-store edits within the window (#10).
export const revalidate = 300

export default async function Page() {
  const plans = await getContentItems(CONTENT_TYPES.studyPlanTemplate, 'ap-statistics', AP_STATS_PLANS)
  return <StudyPlanSelector {...config} plans={plans} />
}
