import { createStudyPlanRoute } from '@/lib/study-plan-route'
import { OCHEM1_PLANS } from '@/data/ochem1-study-plans'

export const { POST, GET } = createStudyPlanRoute({
  plans: OCHEM1_PLANS,
  courseSlug: 'organic-chemistry-1',
  diagnosticPrefix: 'ochem1-diagnostic',
})
