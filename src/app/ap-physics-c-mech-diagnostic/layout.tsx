import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Physics C: Mechanics Diagnostic Test | Study Mondo',
  description:
    'Take a free AP Physics C: Mechanics diagnostic test to identify your strengths and weaknesses. Get personalized study recommendations across all key domains.',
  alternates: { canonical: 'https://www.studymondo.com/ap-physics-c-mech-diagnostic' },
}

export default function APPhysicsCMechDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return children
}
