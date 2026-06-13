import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ACT Diagnostic Test | Study Mondo',
  description: 'Take the ACT diagnostic to identify strengths and weaknesses across English, Math, Reading, and Science sections.',
  alternates: { canonical: 'https://www.studymondo.com/act-diagnostic' },
}

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'ACT Diagnostic Test',
  educationalLevel: 'ACT',
  about: { '@type': 'Thing', name: 'ACT' },
  url: 'https://www.studymondo.com/act-diagnostic',
}

export default function ACTDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
