import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Statistics Diagnostic Test | Study Mondo",
  description: "Take a free AP Statistics diagnostic test to identify your strengths and weaknesses across all 4 content areas. Get personalized study recommendations.",
  path: "/ap-stats-diagnostic",
})

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Statistics Diagnostic Test',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Statistics' },
  url: 'https://www.studymondo.com/ap-stats-diagnostic',
}

export default function APStatsDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
