import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Precalculus Diagnostic Test | Study Mondo',
  description:
    'Take a free AP Precalculus diagnostic test to assess your exam readiness. Get an estimated AP score and personalized study recommendations.',
  alternates: { canonical: 'https://www.studymondo.com/ap-precalculus-diagnostic' },
}

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Precalculus Diagnostic Test',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Precalculus' },
  url: 'https://www.studymondo.com/ap-precalculus-diagnostic',
}

export default function APPrecalculusDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
