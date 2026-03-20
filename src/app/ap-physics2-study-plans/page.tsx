'use client'

import StudyPlanSelector from '@/components/StudyPlanSelector'
import { config } from '@/data/ap-physics2-study-plans'

export default function Page() {
  return <StudyPlanSelector {...config} />
}
