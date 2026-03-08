import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Calculus AB Diagnostic Test | Study Mondo',
  description: 'Take a diagnostic test covering all AP Calculus AB units. Get an estimated AP score and a personalized study plan with 3-5 focused modules.',
  alternates: { canonical: 'https://www.studymondo.com/calcab-diagnostic' },
}

export default function CalcABDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return children
}
