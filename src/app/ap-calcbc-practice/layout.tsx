import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP Calculus BC Practice Exam | Study Mondo',
  description: 'Take a timed AP Calculus BC practice exam covering series, parametric/polar, and advanced integration with instant scoring.',
  alternates: { canonical: 'https://www.studymondo.com/ap-calcbc-practice' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
