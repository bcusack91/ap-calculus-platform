import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP English Language Study Plans | Study Mondo',
  description:
    'Ready-made AP English Language study plans that schedule rhetorical analysis, argument, and synthesis essay practice into a day-by-day calendar through exam day.',
  alternates: { canonical: 'https://www.studymondo.com/ap-english-lang-study-plans' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
