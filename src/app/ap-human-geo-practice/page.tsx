import FullLengthPracticeExam from '@/components/FullLengthPracticeExam'
import { config } from '@/data/ap-human-geo-practice/config'
import { getPracticeExamConfig } from '@/lib/content-store'

// Practice config comes from the content store (DB) with a static fallback (#10).
// ISR: cache the rendered page but pick up content-store edits within the window (#10).
export const revalidate = 300

export default async function Page() {
  const examConfig = await getPracticeExamConfig('ap-human-geo', config)
  return <FullLengthPracticeExam {...examConfig} />
}
