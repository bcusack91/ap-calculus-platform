import { createStudyPlanRoute } from '@/lib/study-plan-route'
import { AP_PHYSICS_C_MECH_PLANS } from '@/data/ap-physics-c-mech-study-plans'

export const { POST, GET } = createStudyPlanRoute({
  plans: AP_PHYSICS_C_MECH_PLANS,
  courseSlug: 'ap-physics-c-mechanics',
  diagnosticPrefix: 'ap-physics-c-mech-diagnostic',
})
