import FullLengthPracticeExam from '@/components/FullLengthPracticeExam'
import { config } from '@/data/act-practice/config'
import { getPracticeExamConfig } from '@/lib/content-store'

// Practice config comes from the content store (DB) with a static fallback (#10).
// ISR: cache the rendered page but pick up content-store edits within the window (#10).
export const revalidate = 300

export default async function Page() {
  const examConfig = await getPracticeExamConfig('act', config)
  return <FullLengthPracticeExam {...examConfig} />
}
