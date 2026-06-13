import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Precalculus Study Plans | Study Mondo',
  description:
    'Ready-made AP Precalculus study plans that schedule polynomial, trigonometric, and exponential functions plus practice into a day-by-day calendar before the exam.',
  alternates: { canonical: 'https://www.studymondo.com/ap-precalc-study-plans' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
