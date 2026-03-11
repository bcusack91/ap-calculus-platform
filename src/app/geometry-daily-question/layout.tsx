import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Geometry Daily Question | Study Mondo',
  description: 'Practice a new geometry question every day. Free daily geometry prep covering shapes, proofs, area, volume, and transformations.',
  alternates: { canonical: 'https://www.studymondo.com/geometry-daily-question' },
}

export default function Layout({ children }: { children: React.ReactNode }) { return children }
