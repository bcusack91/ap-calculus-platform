import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Physics C: E&M Daily Question | Study Mondo',
  description: 'Practice a new AP Physics C: E&M question every day. Free daily prep covering electric fields, circuits, magnetism, and induction.',
  alternates: { canonical: 'https://www.studymondo.com/ap-physics-c-em-daily-question' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
