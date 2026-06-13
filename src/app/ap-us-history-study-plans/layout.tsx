import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP US History Study Plans | Study Mondo',
  description:
    'Ready-made AP US History study plans that schedule all nine APUSH periods plus SAQ, DBQ, and LEQ essay practice into a day-by-day calendar through exam day.',
  alternates: { canonical: 'https://www.studymondo.com/ap-us-history-study-plans' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
