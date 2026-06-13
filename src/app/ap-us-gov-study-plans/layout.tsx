import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP US Government Study Plans | Study Mondo',
  description:
    'Pre-built AP US Government study plans that schedule every unit, foundational document, and FRQ practice into a clear day-by-day calendar before the exam.',
  alternates: { canonical: 'https://www.studymondo.com/ap-us-gov-study-plans' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
