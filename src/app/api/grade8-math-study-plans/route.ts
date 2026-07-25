import { createStudyPlanRoute } from '@/lib/study-plan-route'
import { GRADE8_MATH_PLANS } from '@/data/grade8-math-study-plans'

export const { POST, GET } = createStudyPlanRoute({
  plans: GRADE8_MATH_PLANS,
  courseSlug: 'grade-8-math',
  diagnosticPrefix: 'grade8-math-diagnostic',
})
