import type { Metadata } from 'next'
import FullLengthPracticeExam from '@/components/FullLengthPracticeExam'
import { config } from '@/data/ochem2-practice/config'
import { getPracticeExamConfig } from '@/lib/content-store'

export const metadata: Metadata = {
  title: 'Organic Chemistry 2 Practice Test | Study Mondo',
  description:
    'Take a free, full-length, timed Organic Chemistry 2 practice test — 40 multiple-choice questions spanning every unit, with an explanation for every answer.',
  alternates: { canonical: 'https://www.studymondo.com/ochem2-practice' },
  openGraph: {
    title: 'Organic Chemistry 2 Practice Test',
    description: 'Free full-length Organic Chemistry 2 practice test with instant scoring and explanations.',
    url: 'https://www.studymondo.com/ochem2-practice',
  },
}

export const revalidate = 300

export default async function Ochem2PracticePage() {
  const examConfig = await getPracticeExamConfig('organic-chemistry-2', config)
  return <FullLengthPracticeExam {...examConfig} />
}
