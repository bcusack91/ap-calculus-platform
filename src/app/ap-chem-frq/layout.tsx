import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP Chemistry Free-Response Questions (FRQ) Practice | Study Mondo',
  description: 'Practice free AP Chemistry FRQs on stoichiometry, equilibrium, thermodynamics, and kinetics. Get rubric-based scoring and detailed answer explanations for the exam.',
  alternates: { canonical: 'https://www.studymondo.com/ap-chem-frq' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
