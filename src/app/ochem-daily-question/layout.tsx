import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Organic Chemistry Daily Question | Study Mondo',
  description: 'Practice a new Organic Chemistry question every day. Free daily OChem prep for reactions, mechanisms, and spectroscopy.',
  alternates: { canonical: 'https://www.studymondo.com/ochem-daily-question' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
