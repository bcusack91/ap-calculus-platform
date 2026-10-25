import FullLengthPracticeExam from '@/components/FullLengthPracticeExam'
import { config } from '@/data/asvab-practice/config'
import { getPracticeExamConfig } from '@/lib/content-store'

// Practice config comes from the content store (DB) with a static fallback (#10).
// ISR: cache the rendered page but pick up content-store edits within the window.
export const revalidate = 300

export default async function Page() {
  const examConfig = await getPracticeExamConfig('asvab', config)
  return (
    <>
      <div className="container px-4 pt-6">
        <p
          className="mx-auto max-w-3xl rounded-2xl border border-accent-muted bg-accent-subtle px-4 py-3 text-sm text-gray-800 dark:bg-accent-light/10 dark:text-gray-100"
          role="note"
        >
          <span className="font-semibold">How this compares to the real test:</span> the CAT-ASVAB is adaptive and is scored with item
          statistics, not by counting right answers. This practice form uses the real subtest order, question counts and time limits,
          but every student sees the same questions, so your AFQT here is an estimate shown as a range.
        </p>
      </div>
      <FullLengthPracticeExam {...examConfig} />
    </>
  )
}
