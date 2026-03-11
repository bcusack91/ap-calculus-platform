import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Statistics Daily Question | Study Mondo',
  description: 'Practice a new AP Statistics question every day. Free daily AP Stats prep covering probability, inference, regression, and experimental design.',
  alternates: { canonical: 'https://www.studymondo.com/ap-stats-daily-question' },
}

export default function Layout({ children }: { children: React.ReactNode }) { return children }
