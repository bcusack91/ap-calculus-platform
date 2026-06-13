import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP Environmental Science Practice Test | Study Mondo',
  description: 'Take a free AP Environmental Science (APES) practice test covering ecosystems, energy, pollution, and sustainability, with instant scoring and answer explanations.',
  alternates: { canonical: 'https://www.studymondo.com/ap-enviro-practice' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
