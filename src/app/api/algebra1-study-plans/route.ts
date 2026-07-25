import { createStudyPlanRoute } from '@/lib/study-plan-route'
import { ALGEBRA1_PLANS } from '@/data/algebra1-study-plans'

export const { POST, GET } = createStudyPlanRoute({
  plans: ALGEBRA1_PLANS,
  courseSlug: 'algebra-1',
  diagnosticPrefix: 'algebra1-diagnostic',
})
