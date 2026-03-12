import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ACT Daily Question | Study Mondo',
  description: 'Practice a new ACT question every day. Free daily ACT prep rotating through English, Math, Reading, and Science.',
  alternates: { canonical: 'https://www.studymondo.com/act-daily-question' },
}

export default function Layout({ children }: { children: React.ReactNode }) { return children }
