import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pre-Calculus Daily Question | Study Mondo',
  description: 'Practice a new Pre-Calculus question every day. Free daily Pre-Calculus prep covering functions, trigonometry, logs, and sequences.',
  alternates: { canonical: 'https://www.studymondo.com/precalc-daily-question' },
}

export default function Layout({ children }: { children: React.ReactNode }) { return children }
