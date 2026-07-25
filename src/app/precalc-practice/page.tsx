import type { Metadata } from 'next'
import FullLengthPracticeExam from '@/components/FullLengthPracticeExam'
import { config } from '@/data/precalc-practice/config'
import { getPracticeExamConfig } from '@/lib/content-store'

export const metadata: Metadata = {
  title: 'Precalculus Practice Test | Study Mondo',
  description:
    'Take a free, full-length, timed Precalculus practice test — 40 multiple-choice questions spanning every unit, with an explanation for every answer.',
  alternates: { canonical: 'https://www.studymondo.com/precalc-practice' },
  openGraph: {
    title: 'Precalculus Practice Test',
    description: 'Free full-length Precalculus practice test with instant scoring and explanations.',
    url: 'https://www.studymondo.com/precalc-practice',
  },
}

// Practice config comes from the content store (DB) with a static fallback.
// ISR: cache the rendered page but pick up content-store edits within the window.
export const revalidate = 300

export default async function PrecalcPracticePage() {
  const examConfig = await getPracticeExamConfig('precalculus', config)
  return <FullLengthPracticeExam {...examConfig} />
}
