import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Algebra 1 Daily Question | Study Mondo',
  description: 'Practice a new Algebra 1 question every day. Free daily algebra prep covering equations, inequalities, functions, and graphing.',
  alternates: { canonical: 'https://www.studymondo.com/algebra1-daily-question' },
}

export default function Layout({ children }: { children: React.ReactNode }) { return children }
