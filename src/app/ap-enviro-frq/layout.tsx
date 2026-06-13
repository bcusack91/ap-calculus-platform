import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP Environmental Science Free-Response Questions (FRQ) Practice | Study Mondo',
  description: 'Practice free AP Environmental Science FRQs on ecosystems, pollution, energy, and data analysis. Get rubric scoring and detailed answer explanations for the APES exam.',
  alternates: { canonical: 'https://www.studymondo.com/ap-enviro-frq' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
