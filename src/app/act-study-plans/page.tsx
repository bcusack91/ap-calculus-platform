'use client'

import StudyPlanSelector from '@/components/StudyPlanSelector'
import { config } from '@/data/act-study-plans'

export default function Page() {
  return <StudyPlanSelector {...config} />
}
