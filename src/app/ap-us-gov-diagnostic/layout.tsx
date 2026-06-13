import type { Metadata } from 'next'

const canonical = 'https://www.studymondo.com/ap-us-gov-diagnostic'

export const metadata: Metadata = {
  title: 'AP US Government Diagnostic Test | Study Mondo',
  description:
    'Take a free AP US Government and Politics diagnostic test covering foundations of democracy, the three branches, civil liberties and rights, political ideologies, and participation. Get a study plan.',
  alternates: { canonical },
}

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP US Government Diagnostic Test',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP US Government and Politics' },
  url: canonical,
}

export default function APUSGovDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
