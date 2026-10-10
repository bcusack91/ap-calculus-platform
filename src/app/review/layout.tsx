import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Review | Study Mondo',
  description: 'Every question from one of your attempts, with your answer, the correct answer and the explanation.',
  robots: { index: false, follow: false },
}

export default function ReviewLayout({ children }: { children: React.ReactNode }) {
  return children
}
