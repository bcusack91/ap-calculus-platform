import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Physics C: E&M Diagnostic Test | Study Mondo',
  description:
    'Take a free AP Physics C: Electricity & Magnetism diagnostic test to identify your strengths and weaknesses. Get personalized study recommendations.',
  alternates: { canonical: 'https://www.studymondo.com/ap-physics-c-em-diagnostic' },
}

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Physics C: E&M Diagnostic Test',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Physics C: Electricity and Magnetism' },
  url: 'https://www.studymondo.com/ap-physics-c-em-diagnostic',
}

export default function APPhysicsCEMDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
