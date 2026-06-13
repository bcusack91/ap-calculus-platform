import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP African American Studies Study Plans | Study Mondo',
  description:
    'Pre-built AP African American Studies study plans that schedule every unit, source analysis, and review session into a day-by-day calendar from now through exam day.',
  alternates: { canonical: 'https://www.studymondo.com/ap-african-american-studies-study-plans' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
