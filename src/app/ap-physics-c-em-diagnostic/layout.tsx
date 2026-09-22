import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
import DiagnosticAbout from '@/components/DiagnosticAbout'

// ISR: the About section below reads course units from the database.
export const revalidate = 3600

export const metadata: Metadata = toolMetadata({
  title: "AP Physics C: E&M Diagnostic Test | Study Mondo",
  description: "Take a free AP Physics C: Electricity & Magnetism diagnostic test to identify your strengths and weaknesses. Get personalized study recommendations.",
  path: "/ap-physics-c-em-diagnostic",
})

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Physics C: E&M Diagnostic Test',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Physics C: Electricity and Magnetism' },
  url: 'https://www.studymondo.com/ap-physics-c-em-diagnostic',
}

export default function APPhysicsCEMDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
      <DiagnosticAbout slug="ap-physics-c-em-diagnostic" />
    </>
  )
}
