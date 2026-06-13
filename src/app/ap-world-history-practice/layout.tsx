import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP World History Practice Test | Study Mondo',
  description: 'Take a free AP World History: Modern practice test covering c. 1200 to the present across all nine units, with instant scoring and answer explanations.',
  alternates: { canonical: 'https://www.studymondo.com/ap-world-history-practice' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
