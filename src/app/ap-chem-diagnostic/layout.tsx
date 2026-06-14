import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Chemistry Diagnostic Test | Study Mondo",
  description: "Take a free AP Chemistry diagnostic test to identify your strengths and weaknesses across all 9 AP Chem units. Get personalized module recommendations.",
  path: "/ap-chem-diagnostic",
})

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Chemistry Diagnostic Test',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Chemistry' },
  url: 'https://www.studymondo.com/ap-chem-diagnostic',
}

export default function APChemDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
