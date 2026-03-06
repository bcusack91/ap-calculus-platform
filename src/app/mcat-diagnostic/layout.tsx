import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MCAT Diagnostic Test | Study Mondo',
  description:
    'Take a free MCAT diagnostic test to identify your strengths and weaknesses across all four MCAT sections.',
  alternates: { canonical: 'https://www.studymondo.com/mcat-diagnostic' },
}

export default function MCATDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return children
}
