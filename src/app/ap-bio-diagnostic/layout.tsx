import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Biology Diagnostic Test | Study Mondo',
  description:
    'Take a free AP Biology diagnostic test to identify your strengths and weaknesses across all 8 AP Bio units. Get personalized study recommendations.',
  alternates: { canonical: 'https://www.studymondo.com/ap-bio-diagnostic' },
}

export default function APBioDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return children
}
