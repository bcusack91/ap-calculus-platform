import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Microeconomics Study Plans | Study Mondo',
  description:
    'Pre-built AP Microeconomics study plans that organize supply, demand, and market structure units plus FRQ graphing into a clear day-by-day schedule before the exam.',
  alternates: { canonical: 'https://www.studymondo.com/ap-micro-study-plans' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
