import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Physics 2 Diagnostic Test | Study Mondo',
  description: 'Take the AP Physics 2 diagnostic to identify strengths and weaknesses across fluids, thermodynamics, electricity, magnetism, optics, and modern physics.',
}

export default function APPhysics2DiagnosticLayout({ children }: { children: React.ReactNode }) {
  return children
}
