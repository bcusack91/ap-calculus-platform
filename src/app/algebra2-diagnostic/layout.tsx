import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Algebra 2 Diagnostic Test | Study Mondo',
  description:
    'Take a free Algebra 2 diagnostic test to identify your strengths and weaknesses. Get personalized study recommendations across all key domains.',
  alternates: { canonical: 'https://www.studymondo.com/algebra2-diagnostic' },
}

export default function Algebra2DiagnosticLayout({ children }: { children: React.ReactNode }) {
  return children
}
