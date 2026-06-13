import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP Physics 2 Free-Response Questions (FRQ) Practice | Study Mondo',
  description: 'Practice free AP Physics 2 FRQs on fluids, thermodynamics, electricity, optics, and modern physics. Scored on the exam rubric with full step-by-step answer explanations.',
  alternates: { canonical: 'https://www.studymondo.com/ap-physics2-frq' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
