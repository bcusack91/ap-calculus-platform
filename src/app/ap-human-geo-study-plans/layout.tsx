import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Human Geography Study Plans | Study Mondo',
  description:
    'Pre-built AP Human Geography study plans that organize every unit from population to urbanization plus FRQ practice into a clear day-by-day schedule before the exam.',
  alternates: { canonical: 'https://www.studymondo.com/ap-human-geo-study-plans' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
