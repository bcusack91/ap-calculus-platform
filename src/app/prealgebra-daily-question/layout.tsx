import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pre-Algebra Daily Question | Study Mondo',
  description: 'Practice a new Pre-Algebra question every day. Free daily practice for arithmetic, equations, and ratios.',
  alternates: { canonical: 'https://www.studymondo.com/prealgebra-daily-question' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
