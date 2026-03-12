import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Organic Chemistry Diagnostic Test | Study Mondo',
  description: 'Take the organic chemistry diagnostic to identify strengths and weaknesses across structure & bonding, stereochemistry, reactions, spectroscopy, and more.',
}

export default function OChemDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return children
}
