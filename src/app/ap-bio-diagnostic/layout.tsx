import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Biology Diagnostic Test | Study Mondo",
  description: "Take a free AP Biology diagnostic test to identify your strengths and weaknesses across all 8 AP Bio units. Get personalized study recommendations.",
  path: "/ap-bio-diagnostic",
})

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Biology Diagnostic Test',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Biology' },
  url: 'https://www.studymondo.com/ap-bio-diagnostic',
}

export default function APBioDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
