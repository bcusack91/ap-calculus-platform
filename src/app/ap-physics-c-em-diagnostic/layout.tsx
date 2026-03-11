import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Physics C: E&M Diagnostic Test | Study Mondo',
  description:
    'Take a free AP Physics C: Electricity & Magnetism diagnostic test to identify your strengths and weaknesses. Get personalized study recommendations.',
  alternates: { canonical: 'https://www.studymondo.com/ap-physics-c-em-diagnostic' },
}

export default function APPhysicsCEMDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return children
}
