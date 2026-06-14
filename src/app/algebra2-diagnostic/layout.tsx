import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "Algebra 2 Diagnostic Test | Study Mondo",
  description: "Take a free Algebra 2 diagnostic test to identify your strengths and weaknesses. Get personalized study recommendations across all key domains.",
  path: "/algebra2-diagnostic",
})

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'Algebra 2 Diagnostic Test',
  educationalLevel: 'High School',
  about: { '@type': 'Thing', name: 'Algebra 2' },
  url: 'https://www.studymondo.com/algebra2-diagnostic',
}

export default function Algebra2DiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
