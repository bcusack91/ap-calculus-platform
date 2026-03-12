import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP Physics 2 Practice Exam | Study Mondo',
  description: 'Take a timed AP Physics 2 practice exam covering electricity, magnetism, optics, thermodynamics, and modern physics.',
  alternates: { canonical: 'https://www.studymondo.com/ap-physics2-practice' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
