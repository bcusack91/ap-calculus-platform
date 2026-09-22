import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
import DiagnosticAbout from '@/components/DiagnosticAbout'

// ISR: the About section below reads course units from the database.
export const revalidate = 3600

export const metadata: Metadata = toolMetadata({
  title: "AP Precalculus Diagnostic Test | Study Mondo",
  description: "Take a free AP Precalculus diagnostic test to assess your exam readiness. Get an estimated AP score and personalized study recommendations.",
  path: "/ap-precalculus-diagnostic",
})

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Precalculus Diagnostic Test',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Precalculus' },
  url: 'https://www.studymondo.com/ap-precalculus-diagnostic',
}

export default function APPrecalculusDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
      <DiagnosticAbout slug="ap-precalculus-diagnostic" />
    </>
  )
}
