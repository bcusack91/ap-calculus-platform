import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SAT Study Plans | Study Mondo',
  description:
    'Choose from structured SAT study plans — 4-week sprint, 8-week standard, or 12-week comprehensive plans to boost your score.',
  alternates: { canonical: 'https://www.studymondo.com/sat-study-plans' },
}

export default function SATStudyPlansLayout({ children }: { children: React.ReactNode }) {
  return children
}
