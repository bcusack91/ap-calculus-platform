import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SAT Grid-In Practice | Study Mondo',
  description:
    'Practice free-response SAT math grid-in questions with instant feedback and detailed explanations.',
  alternates: { canonical: 'https://www.studymondo.com/sat-grid-in' },
}

export default function SATGridInLayout({ children }: { children: React.ReactNode }) {
  return children
}
