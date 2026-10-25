import { createStudyPlanRoute } from '@/lib/study-plan-route'
import { ASVAB_PLANS } from '@/data/asvab-study-plans'

export const { POST, GET } = createStudyPlanRoute({
  plans: ASVAB_PLANS,
  courseSlug: 'asvab',
  // The category the diagnostic stores (CLASS_PLAN_COURSES 'asvab').
  diagnosticPrefix: 'asvab-diagnostic',
})
