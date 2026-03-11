import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'PSAT Practice Test | Study Mondo',
  description: 'Take a timed PSAT practice test with Reading & Writing and Math sections with instant scoring and detailed review.',
  alternates: { canonical: 'https://www.studymondo.com/psat-practice' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
