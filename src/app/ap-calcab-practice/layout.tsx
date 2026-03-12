import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP Calculus AB Practice Exam | Study Mondo',
  description: 'Take a timed AP Calculus AB practice exam with instant scoring, topic breakdown, and detailed explanations.',
  alternates: { canonical: 'https://www.studymondo.com/ap-calcab-practice' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
