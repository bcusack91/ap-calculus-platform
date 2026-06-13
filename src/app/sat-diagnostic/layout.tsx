import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SAT Diagnostic Test | Study Mondo',
  description:
    'Take a free SAT diagnostic test to identify your strengths and weaknesses across all SAT sections.',
  alternates: { canonical: 'https://www.studymondo.com/sat-diagnostic' },
}

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'SAT Diagnostic Test',
  educationalLevel: 'SAT',
  about: { '@type': 'Thing', name: 'SAT' },
  url: 'https://www.studymondo.com/sat-diagnostic',
}

export default function SATDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
