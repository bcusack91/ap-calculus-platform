import { createStudyPlanRoute } from '@/lib/study-plan-route'
import { OCHEM2_PLANS } from '@/data/ochem2-study-plans'

export const { POST, GET } = createStudyPlanRoute({
  plans: OCHEM2_PLANS,
  courseSlug: 'organic-chemistry-2',
  diagnosticPrefix: 'ochem2-diagnostic',
})
