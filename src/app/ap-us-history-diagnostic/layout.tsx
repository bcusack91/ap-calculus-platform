import type { Metadata } from 'next'

const canonical = 'https://www.studymondo.com/ap-us-history-diagnostic'

export const metadata: Metadata = {
  title: 'AP US History Diagnostic Test | Study Mondo',
  description:
    'Take a free AP US History (APUSH) diagnostic test spanning all nine periods from 1491 to the present. Identify the eras and themes you need to review and get a personalized study plan.',
  alternates: { canonical },
}

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP US History Diagnostic Test',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP US History' },
  url: canonical,
}

export default function APUSHistoryDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
