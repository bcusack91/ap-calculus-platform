import { createStudyPlanRoute } from '@/lib/study-plan-route'
import { AP_PRECALC_PLANS } from '@/data/ap-precalc-study-plans'

export const { POST, GET } = createStudyPlanRoute({
  plans: AP_PRECALC_PLANS,
  courseSlug: 'ap-precalculus',
  diagnosticPrefix: 'ap-precalc-diagnostic',
})
