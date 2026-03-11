import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Physics 1 Diagnostic Test | Study Mondo',
  description:
    'Take a free AP Physics 1 diagnostic test to identify your strengths and weaknesses across all 7 units. Get personalized study recommendations.',
  alternates: { canonical: 'https://www.studymondo.com/ap-physics1-diagnostic' },
}

export default function APPhysics1DiagnosticLayout({ children }: { children: React.ReactNode }) {
  return children
}
