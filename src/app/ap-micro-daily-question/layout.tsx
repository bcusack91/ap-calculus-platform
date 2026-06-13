import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Microeconomics Daily Question | Study Mondo',
  description:
    'A fresh AP Microeconomics practice question every day on supply, demand, and market structures, each with a full explanation to build a consistent daily study habit.',
  alternates: { canonical: 'https://www.studymondo.com/ap-micro-daily-question' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
