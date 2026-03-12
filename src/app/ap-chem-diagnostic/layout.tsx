import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Chemistry Diagnostic Test | Study Mondo',
  description:
    'Take a free AP Chemistry diagnostic test to identify your strengths and weaknesses across all 9 AP Chem units. Get personalized module recommendations.',
  alternates: { canonical: 'https://www.studymondo.com/ap-chem-diagnostic' },
}

export default function APChemDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return children
}
