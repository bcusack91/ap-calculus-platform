import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pre-Algebra Diagnostic Test | Study Mondo',
  description:
    'Take a free Pre-Algebra diagnostic test to identify your strengths and weaknesses. Get personalized study recommendations across all key domains.',
  alternates: { canonical: 'https://www.studymondo.com/prealgebra-diagnostic' },
}

export default function PreAlgebraDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return children
}
