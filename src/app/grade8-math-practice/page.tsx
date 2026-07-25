import type { Metadata } from 'next'
import FullLengthPracticeExam from '@/components/FullLengthPracticeExam'
import { config } from '@/data/grade8-math-practice/config'
import { getPracticeExamConfig } from '@/lib/content-store'

export const metadata: Metadata = {
  title: 'Grade 8 Math Practice Test | Study Mondo',
  description:
    'Take a free, full-length, timed Grade 8 Math practice test — 40 multiple-choice questions spanning every unit, with an explanation for every answer.',
  alternates: { canonical: 'https://www.studymondo.com/grade8-math-practice' },
  openGraph: {
    title: 'Grade 8 Math Practice Test',
    description: 'Free full-length Grade 8 Math practice test with instant scoring and explanations.',
    url: 'https://www.studymondo.com/grade8-math-practice',
  },
}

export const revalidate = 300

export default async function Grade8MathPracticePage() {
  const examConfig = await getPracticeExamConfig('grade-8-math', config)
  return <FullLengthPracticeExam {...examConfig} />
}
