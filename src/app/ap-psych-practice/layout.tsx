import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP Psychology Practice Exam | Study Mondo',
  description: 'Take a timed AP Psychology practice exam with questions on biological bases, cognition, development, and abnormal psychology.',
  alternates: { canonical: 'https://www.studymondo.com/ap-psych-practice' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
