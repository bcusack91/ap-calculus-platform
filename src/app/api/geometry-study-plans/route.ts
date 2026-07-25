import { createStudyPlanRoute } from '@/lib/study-plan-route'
import { GEOMETRY_PLANS } from '@/data/geometry-study-plans'

export const { POST, GET } = createStudyPlanRoute({
  plans: GEOMETRY_PLANS,
  courseSlug: 'geometry',
  diagnosticPrefix: 'geometry-diagnostic',
})
