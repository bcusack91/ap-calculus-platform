import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP Precalculus Practice Test | Study Mondo',
  description: 'Take a free AP Precalculus practice test on polynomial, rational, exponential, logarithmic, and trigonometric functions, with instant scoring and answer explanations.',
  alternates: { canonical: 'https://www.studymondo.com/ap-precalc-practice' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
