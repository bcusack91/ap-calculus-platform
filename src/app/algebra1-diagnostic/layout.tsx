import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "Algebra 1 Diagnostic Test | Study Mondo",
  description: "Take a free Algebra 1 diagnostic test to identify your strengths and weaknesses. Get personalized study recommendations across all key domains.",
  path: "/algebra1-diagnostic",
})

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'Algebra 1 Diagnostic Test',
  educationalLevel: 'High School',
  about: { '@type': 'Thing', name: 'Algebra 1' },
  url: 'https://www.studymondo.com/algebra1-diagnostic',
}

export default function Algebra1DiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
