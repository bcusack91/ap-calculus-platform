import { createStudyPlanRoute } from '@/lib/study-plan-route'
import { PRECALCULUS_PLANS } from '@/data/precalculus-study-plans'

export const { POST, GET } = createStudyPlanRoute({
  plans: PRECALCULUS_PLANS,
  courseSlug: 'precalculus',
  diagnosticPrefix: 'precalculus-diagnostic',
})
