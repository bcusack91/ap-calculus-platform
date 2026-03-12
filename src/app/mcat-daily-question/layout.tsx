import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MCAT Daily Question | Study Mondo',
  description:
    'Practice a new MCAT question every day across all four sections. Free daily MCAT prep to build consistency.',
  alternates: { canonical: 'https://www.studymondo.com/mcat-daily-question' },
}

export default function MCATDailyQuestionLayout({ children }: { children: React.ReactNode }) {
  return children
}
