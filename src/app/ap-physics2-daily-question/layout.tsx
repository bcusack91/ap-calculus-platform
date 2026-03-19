import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Physics 2 Daily Question | Study Mondo',
  description: 'Practice a new AP Physics 2 question every day. Free daily physics prep covering fluids, thermodynamics, electricity, magnetism, optics, and modern physics.',
  alternates: { canonical: 'https://www.studymondo.com/ap-physics2-daily-question' },
}

export default function Layout({ children }: { children: React.ReactNode }) { return children }
