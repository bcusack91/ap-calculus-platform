import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Physics C: E&M Study Plans | Study Mondo',
  description:
    'Pre-built AP Physics C: E&M study plans that schedule every calculus-based topic from electrostatics to induction plus FRQ practice into a day-by-day exam calendar.',
  alternates: { canonical: 'https://www.studymondo.com/ap-physics-c-em-study-plans' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
