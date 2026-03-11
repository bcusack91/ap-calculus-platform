import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Grade 8 Math Diagnostic Test | Study Mondo',
  description:
    'Take a free Grade 8 Math diagnostic test to identify your strengths and weaknesses. Get personalized study recommendations across all key domains.',
  alternates: { canonical: 'https://www.studymondo.com/grade8-math-diagnostic' },
}

export default function Grade8MathDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return children
}
