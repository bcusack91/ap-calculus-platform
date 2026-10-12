import Link from 'next/link'
import FullLengthPracticeExam from '@/components/FullLengthPracticeExam'
import { config } from '@/data/act-practice/config'
import { getPracticeExamConfig } from '@/lib/content-store'

// Practice config comes from the content store (DB) with a static fallback (#10).
// ISR: cache the rendered page but pick up content-store edits within the window (#10).
export const revalidate = 300

export default async function Page() {
  const examConfig = await getPracticeExamConfig('act', config)
  return (
    <>
      <div className="container px-4 pt-6">
        <Link
          href="/act-practice/full-length"
          className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-2 rounded-2xl border border-accent-muted bg-accent-subtle px-4 py-3 text-sm text-gray-800 hover:border-accent dark:bg-accent-light/10 dark:text-gray-100"
        >
          <span>
            <span className="font-semibold">Want the real thing?</span> Take a full-length Enhanced ACT: 131 questions (171 with Science) in real timing.
          </span>
          <span className="font-semibold text-accent">Full-length tests →</span>
        </Link>
      </div>
      <FullLengthPracticeExam {...examConfig} />
    </>
  )
}
