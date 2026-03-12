import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MCAT Study Plans | Study Mondo',
  description:
    'Choose from structured MCAT study plans — 3-month intensive, 6-month comprehensive, or 12-month mastery plans to maximize your score.',
  alternates: { canonical: 'https://www.studymondo.com/mcat-study-plans' },
}

export default function MCATStudyPlansLayout({ children }: { children: React.ReactNode }) {
  return children
}
