import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ACT Diagnostic Test | Study Mondo',
  description: 'Take the ACT diagnostic to identify strengths and weaknesses across English, Math, Reading, and Science sections.',
}

export default function ACTDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return children
}
