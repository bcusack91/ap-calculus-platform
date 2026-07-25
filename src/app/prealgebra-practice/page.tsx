import type { Metadata } from 'next'
import FullLengthPracticeExam from '@/components/FullLengthPracticeExam'
import { config } from '@/data/prealgebra-practice/config'
import { getPracticeExamConfig } from '@/lib/content-store'

export const metadata: Metadata = {
  title: 'Pre-Algebra Practice Test | Study Mondo',
  description:
    'Take a free, full-length, timed Pre-Algebra practice test — 40 multiple-choice questions spanning every unit, with an explanation for every answer.',
  alternates: { canonical: 'https://www.studymondo.com/prealgebra-practice' },
  openGraph: {
    title: 'Pre-Algebra Practice Test',
    description: 'Free full-length Pre-Algebra practice test with instant scoring and explanations.',
    url: 'https://www.studymondo.com/prealgebra-practice',
  },
}

export const revalidate = 300

export default async function PreAlgebraPracticePage() {
  const examConfig = await getPracticeExamConfig('pre-algebra', config)
  return <FullLengthPracticeExam {...examConfig} />
}
