import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
import DiagnosticAbout from '@/components/DiagnosticAbout'

// ISR: the About section below reads course units from the database.
export const revalidate = 3600

export const metadata: Metadata = toolMetadata({
  title: 'ASVAB Diagnostic Test | Free AFQT Estimate | Study Mondo',
  description: 'Take a free ASVAB diagnostic test across the subtests. Get an AFQT estimate and a personalized list of lessons to study next.',
  path: '/asvab-diagnostic',
})

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'ASVAB Diagnostic Test',
  about: { '@type': 'Thing', name: 'ASVAB' },
  url: 'https://www.studymondo.com/asvab-diagnostic',
}

export default function ASVABDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
      <DiagnosticAbout slug="asvab-diagnostic" />
    </>
  )
}
