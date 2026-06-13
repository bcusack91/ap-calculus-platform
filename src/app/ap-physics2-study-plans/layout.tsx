import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Physics 2 Study Plans | Study Mondo',
  description:
    'Pre-built AP Physics 2 study plans that schedule fluids, thermodynamics, electromagnetism, and modern physics plus FRQ practice into a day-by-day exam calendar.',
  alternates: { canonical: 'https://www.studymondo.com/ap-physics2-study-plans' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
