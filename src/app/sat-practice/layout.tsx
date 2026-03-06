import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SAT Practice Tests | Study Mondo',
  description:
    'Take full-length SAT practice tests with realistic questions, timed sections, and detailed score reports.',
  alternates: { canonical: 'https://www.studymondo.com/sat-practice' },
}

export default function SATPracticeLayout({ children }: { children: React.ReactNode }) {
  return children
}
