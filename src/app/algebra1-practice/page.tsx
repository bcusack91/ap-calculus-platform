import type { Metadata } from 'next'
import FullLengthPracticeExam from '@/components/FullLengthPracticeExam'
import { config } from '@/data/algebra1-practice/config'
import { getPracticeExamConfig } from '@/lib/content-store'

export const metadata: Metadata = {
  title: 'Algebra 1 Practice Test | Study Mondo',
  description:
    'Take a free, full-length, timed Algebra 1 practice test — 40 multiple-choice questions spanning every unit, with an explanation for every answer.',
  alternates: { canonical: 'https://www.studymondo.com/algebra1-practice' },
  openGraph: {
    title: 'Algebra 1 Practice Test',
    description: 'Free full-length Algebra 1 practice test with instant scoring and explanations.',
    url: 'https://www.studymondo.com/algebra1-practice',
  },
}

// Practice config comes from the content store (DB) with a static fallback.
// ISR: cache the rendered page but pick up content-store edits within the window.
export const revalidate = 300

export default async function Algebra1PracticePage() {
  const examConfig = await getPracticeExamConfig('algebra-1', config)
  return <FullLengthPracticeExam {...examConfig} />
}
