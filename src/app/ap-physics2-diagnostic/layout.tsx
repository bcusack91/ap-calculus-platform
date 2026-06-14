import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Physics 2 Diagnostic Test | Study Mondo",
  description: "Take the AP Physics 2 diagnostic to identify strengths and weaknesses across fluids, thermodynamics, electricity, magnetism, optics, and modern physics.",
  path: "/ap-physics2-diagnostic",
})

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Physics 2 Diagnostic Test',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Physics 2' },
  url: 'https://www.studymondo.com/ap-physics2-diagnostic',
}

export default function APPhysics2DiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
