import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP Statistics Practice Exam | Study Mondo',
  description: 'Take a timed AP Statistics practice exam with questions on probability, inference, regression, and sampling with instant scoring.',
  alternates: { canonical: 'https://www.studymondo.com/ap-stats-practice' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
