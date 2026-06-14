import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Physics 1 Diagnostic Test | Study Mondo",
  description: "Take a free AP Physics 1 diagnostic test to identify your strengths and weaknesses across all 7 units. Get personalized study recommendations.",
  path: "/ap-physics1-diagnostic",
})

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Physics 1 Diagnostic Test',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Physics 1' },
  url: 'https://www.studymondo.com/ap-physics1-diagnostic',
}

export default function APPhysics1DiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
