'use client'

import StudyPlanSelector from '@/components/StudyPlanSelector'
import { config } from '@/data/ap-precalc-study-plans'

export default function APPrecalcStudyPlansPage() {
  return <StudyPlanSelector {...config} />
}
