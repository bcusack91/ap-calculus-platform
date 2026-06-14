import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "Geometry Diagnostic Test | Study Mondo",
  description: "Take a free Geometry diagnostic test to identify your strengths and weaknesses. Get personalized study recommendations across all key domains.",
  path: "/geometry-diagnostic",
})

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'Geometry Diagnostic Test',
  educationalLevel: 'High School',
  about: { '@type': 'Thing', name: 'Geometry' },
  url: 'https://www.studymondo.com/geometry-diagnostic',
}

export default function GeometryDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
