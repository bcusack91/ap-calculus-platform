import StudyPlanSelector from '@/components/StudyPlanSelector'
import { config, AP_ENVIRO_PLANS } from '@/data/ap-enviro-study-plans'
import { getContentItems, CONTENT_TYPES } from '@/lib/content-store'

// Templates come from the content store (DB) with a static fallback (#10).
// ISR: cache the rendered page but pick up content-store edits within the window (#10).
export const revalidate = 300

export default async function Page() {
  const plans = await getContentItems(CONTENT_TYPES.studyPlanTemplate, 'ap-environmental-science', AP_ENVIRO_PLANS)
  return <StudyPlanSelector {...config} plans={plans} />
}
