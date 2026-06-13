import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Macroeconomics Daily Question | Study Mondo',
  description:
    'A new AP Macroeconomics practice question every day on GDP, inflation, and fiscal and monetary policy, each with a clear explanation to keep your prep consistent.',
  alternates: { canonical: 'https://www.studymondo.com/ap-macro-daily-question' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
