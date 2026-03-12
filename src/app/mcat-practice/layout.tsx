import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MCAT Practice Tests | Study Mondo',
  description:
    'Take timed MCAT section practice tests with realistic passage-based questions, detailed scoring, and performance analytics.',
  alternates: { canonical: 'https://www.studymondo.com/mcat-practice' },
}

export default function MCATracticeLayout({ children }: { children: React.ReactNode }) {
  return children
}
