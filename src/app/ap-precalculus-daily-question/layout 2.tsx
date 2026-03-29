import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Precalculus Daily Question | Study Mondo',
  description: 'Practice a new AP Precalculus question every day. Free daily AP Precalculus prep.',
  alternates: { canonical: 'https://www.studymondo.com/ap-precalculus-daily-question' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
