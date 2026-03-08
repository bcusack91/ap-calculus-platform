import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Calculus BC Diagnostic Test | Study Mondo',
  description: 'Take a diagnostic test covering all AP Calculus BC units (AB + BC-exclusive). Get an estimated AP score, AB subscore, and a personalized study plan.',
  alternates: { canonical: 'https://www.studymondo.com/calcbc-diagnostic' },
}

export default function CalcBCDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return children
}
