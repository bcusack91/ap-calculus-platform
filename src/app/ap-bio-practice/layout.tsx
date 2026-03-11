import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP Biology Practice Exam | Study Mondo',
  description: 'Take a timed AP Biology practice exam covering cell biology, genetics, evolution, ecology, and physiology with instant scoring.',
  alternates: { canonical: 'https://www.studymondo.com/ap-bio-practice' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
