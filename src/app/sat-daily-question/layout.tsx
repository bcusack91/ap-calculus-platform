import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SAT Daily Question | Study Mondo',
  description:
    'Practice a new SAT math and reading question every day. Free daily SAT prep to build consistency and confidence.',
  alternates: { canonical: 'https://www.studymondo.com/sat-daily-question' },
}

export default function SATDailyQuestionLayout({ children }: { children: React.ReactNode }) {
  return children
}
