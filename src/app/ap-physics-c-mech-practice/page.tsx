'use client'
import PracticeExam from '@/components/PracticeExam'
import { config } from '@/data/ap-physics-c-mech-practice/config'

export default function Page() {
  return <PracticeExam {...config} />
}
