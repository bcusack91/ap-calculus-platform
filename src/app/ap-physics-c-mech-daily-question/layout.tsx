import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Physics C: Mechanics Daily Question | Study Mondo',
  description: 'Practice a new AP Physics C: Mechanics question every day. Free daily physics prep covering motion, forces, energy, momentum, and rotation.',
  alternates: { canonical: 'https://www.studymondo.com/ap-physics-c-mech-daily-question' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
