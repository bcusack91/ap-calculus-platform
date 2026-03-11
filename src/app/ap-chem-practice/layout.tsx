import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP Chemistry Practice Exam | Study Mondo',
  description: 'Take a timed AP Chemistry practice exam with instant scoring and detailed topic breakdown across all nine units.',
  alternates: { canonical: 'https://www.studymondo.com/ap-chem-practice' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
