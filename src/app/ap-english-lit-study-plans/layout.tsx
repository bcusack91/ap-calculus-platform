import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP English Literature Study Plans | Study Mondo',
  description:
    'Pre-built AP English Literature study plans that schedule poetry, prose, and drama analysis plus timed essay practice into a day-by-day calendar through exam day.',
  alternates: { canonical: 'https://www.studymondo.com/ap-english-lit-study-plans' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
