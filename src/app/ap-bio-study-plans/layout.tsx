import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Biology Study Plans | Study Mondo',
  description:
    'Choose from structured AP Biology study plans — 4-week sprint, 10-week standard, or 16-week comprehensive schedules to maximize your AP exam score.',
  alternates: { canonical: 'https://www.studymondo.com/ap-bio-study-plans' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
