import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "MCAT Diagnostic Test | Study Mondo",
  description: "Take a free MCAT diagnostic test to identify your strengths and weaknesses across all four MCAT sections.",
  path: "/mcat-diagnostic",
})

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'MCAT Diagnostic Test',
  educationalLevel: 'MCAT',
  about: { '@type': 'Thing', name: 'MCAT' },
  url: 'https://www.studymondo.com/mcat-diagnostic',
}

export default function MCATDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
