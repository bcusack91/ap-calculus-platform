'use client'
import StudyPlanSelector from '@/components/StudyPlanSelector'
import { config } from '@/data/ap-physics-c-em-study-plans'

export default function Page() {
  return <StudyPlanSelector {...config} />
}
