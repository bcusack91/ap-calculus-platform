import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Grade 8 Math Daily Question | Study Mondo',
  description: 'Practice a new Grade 8 Math question every day. Free daily practice for equations, geometry, and data.',
  alternates: { canonical: 'https://www.studymondo.com/grade8-math-daily-question' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
