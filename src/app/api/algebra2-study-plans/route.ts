import { createStudyPlanRoute } from '@/lib/study-plan-route'
import { ALGEBRA2_PLANS } from '@/data/algebra2-study-plans'

export const { POST, GET } = createStudyPlanRoute({
  plans: ALGEBRA2_PLANS,
  courseSlug: 'algebra-2',
  diagnosticPrefix: 'algebra2-diagnostic',
})
