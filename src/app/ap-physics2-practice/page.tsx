import ApPracticeExam from '@/components/ApPracticeExam'
import { apPracticeFormList } from '@/lib/ap-practice-exams'
import { config } from '@/data/ap-physics2-practice/config'
import { getPracticeExamConfig } from '@/lib/content-store'

// Practice config comes from the content store (DB) with a static fallback (#10).
// ISR: cache the rendered page but pick up content-store edits within the window (#10).
export const revalidate = 300

export default async function Page() {
  const examConfig = await getPracticeExamConfig('ap-physics2', config)
  return <ApPracticeExam examKey="ap-physics2" forms={apPracticeFormList('ap-physics2')} initialConfig={examConfig} />
}
