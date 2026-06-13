import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Geometry Diagnostic Test | Study Mondo',
  description:
    'Take a free Geometry diagnostic test to identify your strengths and weaknesses. Get personalized study recommendations across all key domains.',
  alternates: { canonical: 'https://www.studymondo.com/geometry-diagnostic' },
}

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
