import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Macroeconomics Study Plans | Study Mondo',
  description:
    'Ready-made AP Macroeconomics study plans that schedule GDP, inflation, and fiscal and monetary policy units plus FRQ graphing into a day-by-day calendar for exam day.',
  alternates: { canonical: 'https://www.studymondo.com/ap-macro-study-plans' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
