import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "Organic Chemistry Diagnostic Test | Study Mondo",
  description: "Take the organic chemistry diagnostic to identify strengths and weaknesses across structure & bonding, stereochemistry, reactions, spectroscopy, and more.",
  path: "/ochem-diagnostic",
})

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'Organic Chemistry Diagnostic Test',
  educationalLevel: 'College',
  about: { '@type': 'Thing', name: 'Organic Chemistry' },
  url: 'https://www.studymondo.com/ochem-diagnostic',
}

export default function OChemDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
