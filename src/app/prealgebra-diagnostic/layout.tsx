import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "Pre-Algebra Diagnostic Test | Study Mondo",
  description: "Take a free Pre-Algebra diagnostic test to identify your strengths and weaknesses. Get personalized study recommendations across all key domains.",
  path: "/prealgebra-diagnostic",
})

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'Pre-Algebra Diagnostic Test',
  educationalLevel: 'Middle School',
  about: { '@type': 'Thing', name: 'Pre-Algebra' },
  url: 'https://www.studymondo.com/prealgebra-diagnostic',
}

export default function PreAlgebraDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
