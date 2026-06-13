import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP World History Study Plans | Study Mondo',
  description:
    'Pre-built AP World History study plans that schedule every period from 1200 to today plus SAQ, DBQ, and LEQ practice into a day-by-day calendar before the exam.',
  alternates: { canonical: 'https://www.studymondo.com/ap-world-history-study-plans' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
