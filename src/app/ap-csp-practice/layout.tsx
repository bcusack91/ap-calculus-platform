import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP Computer Science Principles Practice Test | Study Mondo',
  description: 'Take a free AP CSP practice test covering all five big ideas, from algorithms to the internet and data, with instant scoring and answer explanations for every question.',
  alternates: { canonical: 'https://www.studymondo.com/ap-csp-practice' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
