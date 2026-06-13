import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Physics C: Mechanics Study Plans | Study Mondo',
  description:
    'Ready-made AP Physics C: Mechanics study plans that schedule every calculus-based topic from kinematics to rotation plus FRQ practice into a day-by-day exam calendar.',
  alternates: { canonical: 'https://www.studymondo.com/ap-physics-c-mech-study-plans' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
