import { createStudyPlanRoute } from '@/lib/study-plan-route'
import { PREALGEBRA_PLANS } from '@/data/prealgebra-study-plans'

export const { POST, GET } = createStudyPlanRoute({
  plans: PREALGEBRA_PLANS,
  courseSlug: 'pre-algebra',
  diagnosticPrefix: 'prealgebra-diagnostic',
})
