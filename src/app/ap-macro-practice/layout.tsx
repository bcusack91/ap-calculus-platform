import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP Macroeconomics Practice Test | Study Mondo',
  description: 'Take a free AP Macroeconomics practice test on GDP, inflation, fiscal and monetary policy, and international trade, with instant scoring and answer explanations.',
  alternates: { canonical: 'https://www.studymondo.com/ap-macro-practice' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
