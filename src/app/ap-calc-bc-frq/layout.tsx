import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP Calculus BC Free-Response Questions (FRQ) Practice | Study Mondo',
  description: 'Practice free AP Calculus BC FRQs covering series, parametric and polar curves, and advanced integration. Scored on the exam rubric with step-by-step explanations.',
  alternates: { canonical: 'https://www.studymondo.com/ap-calc-bc-frq' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
