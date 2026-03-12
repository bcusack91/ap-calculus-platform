import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'ACT Practice Test | Study Mondo',
  description: 'Take a timed ACT practice test with English, Math, Reading, and Science sections with instant scoring and detailed review.',
  alternates: { canonical: 'https://www.studymondo.com/act-practice' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
