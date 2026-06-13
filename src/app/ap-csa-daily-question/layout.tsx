import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Computer Science A Daily Question | Study Mondo',
  description:
    'A new AP Computer Science A practice question every day covering Java syntax, logic, and data structures, each with a worked explanation to keep your skills sharp.',
  alternates: { canonical: 'https://www.studymondo.com/ap-csa-daily-question' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
