import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP Microeconomics Practice Test | Study Mondo',
  description: 'Take a free AP Microeconomics practice test on supply and demand, elasticity, costs, market structures, and factor markets, with instant scoring and answer explanations.',
  alternates: { canonical: 'https://www.studymondo.com/ap-micro-practice' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
