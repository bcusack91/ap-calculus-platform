import { createStudyPlanRoute } from '@/lib/study-plan-route'
import { PSAT_PLANS } from '@/data/psat-study-plans'

export const { POST, GET } = createStudyPlanRoute({
  plans: PSAT_PLANS,
  courseSlug: 'psat',
  diagnosticPrefix: 'sat-diagnostic',
})
