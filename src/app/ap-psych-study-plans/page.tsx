'use client'

import StudyPlanSelector from '@/components/StudyPlanSelector'
import { config } from '@/data/ap-psych-study-plans'

export default function Page() {
  return <StudyPlanSelector {...config} />
}
