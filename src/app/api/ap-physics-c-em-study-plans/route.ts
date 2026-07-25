import { createStudyPlanRoute } from '@/lib/study-plan-route'
import { AP_PHYSICS_C_EM_PLANS } from '@/data/ap-physics-c-em-study-plans'

export const { POST, GET } = createStudyPlanRoute({
  plans: AP_PHYSICS_C_EM_PLANS,
  courseSlug: 'ap-physics-c-em',
  diagnosticPrefix: 'ap-physics-c-em-diagnostic',
})
