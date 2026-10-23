import { createStudyPlanRoute } from '@/lib/study-plan-route'
import { AP_PRECALC_PLANS } from '@/data/ap-precalc-study-plans'

export const { POST, GET } = createStudyPlanRoute({
  plans: AP_PRECALC_PLANS,
  courseSlug: 'ap-precalculus',
  // Must match the category the diagnostic page stores (`ap-precalculus-diagnostic-<form>`,
  // CLASS_PLAN_COURSES 'ap-precalculus'); 'ap-precalc-diagnostic' never matched, so plans never personalized.
  diagnosticPrefix: 'ap-precalculus-diagnostic',
})
