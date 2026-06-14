import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Physics C: Mechanics Diagnostic Test | Study Mondo",
  description: "Take a free AP Physics C: Mechanics diagnostic test to identify your strengths and weaknesses. Get personalized study recommendations across all key domains.",
  path: "/ap-physics-c-mech-diagnostic",
})

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Physics C: Mechanics Diagnostic Test',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Physics C: Mechanics' },
  url: 'https://www.studymondo.com/ap-physics-c-mech-diagnostic',
}

export default function APPhysicsCMechDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
