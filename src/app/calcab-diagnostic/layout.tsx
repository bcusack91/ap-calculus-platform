import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
import DiagnosticAbout from '@/components/DiagnosticAbout'

// ISR: the About section below reads course units from the database.
export const revalidate = 3600

export const metadata: Metadata = toolMetadata({
  title: "AP Calculus AB Diagnostic Test | Study Mondo",
  description: "Take a diagnostic test covering all AP Calculus AB units. Get an estimated AP score and a personalized study plan with 3-5 focused modules.",
  path: "/calcab-diagnostic",
})

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Calculus AB Diagnostic Test',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Calculus AB' },
  url: 'https://www.studymondo.com/calcab-diagnostic',
}

export default function CalcABDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
      <DiagnosticAbout slug="calcab-diagnostic" />
    </>
  )
}
