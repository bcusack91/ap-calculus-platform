import type { Metadata } from 'next'
import FullLengthPracticeExam from '@/components/FullLengthPracticeExam'
import { config } from '@/data/algebra2-practice/config'
import { getPracticeExamConfig } from '@/lib/content-store'

export const metadata: Metadata = {
  title: 'Algebra 2 Practice Test | Study Mondo',
  description:
    'Take a free, full-length, timed Algebra 2 practice test — 40 multiple-choice questions spanning every unit, with an explanation for every answer.',
  alternates: { canonical: 'https://www.studymondo.com/algebra2-practice' },
  openGraph: {
    title: 'Algebra 2 Practice Test',
    description: 'Free full-length Algebra 2 practice test with instant scoring and explanations.',
    url: 'https://www.studymondo.com/algebra2-practice',
  },
}

export const revalidate = 300

export default async function Algebra2PracticePage() {
  const examConfig = await getPracticeExamConfig('algebra-2', config)
  return <FullLengthPracticeExam {...examConfig} />
}
