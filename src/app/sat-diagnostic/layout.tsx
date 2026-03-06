import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SAT Diagnostic Test | Study Mondo',
  description:
    'Take a free SAT diagnostic test to identify your strengths and weaknesses across all SAT sections.',
  alternates: { canonical: 'https://www.studymondo.com/sat-diagnostic' },
}

export default function SATDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return children
}
