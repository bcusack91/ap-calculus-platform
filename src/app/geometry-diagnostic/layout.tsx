import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Geometry Diagnostic Test | Study Mondo',
  description:
    'Take a free Geometry diagnostic test to identify your strengths and weaknesses. Get personalized study recommendations across all key domains.',
  alternates: { canonical: 'https://www.studymondo.com/geometry-diagnostic' },
}

export default function GeometryDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return children
}
