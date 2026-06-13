import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP Calculus AB Free-Response Questions (FRQ) Practice | Study Mondo',
  description: 'Practice free AP Calculus AB FRQs on derivatives, integrals, related rates, and accumulation. Scored to the College Board rubric with worked answer explanations.',
  alternates: { canonical: 'https://www.studymondo.com/ap-calc-ab-frq' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
