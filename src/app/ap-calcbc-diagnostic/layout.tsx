import type { Metadata } from 'next'

const canonical = 'https://www.studymondo.com/ap-calcbc-diagnostic'

export const metadata: Metadata = {
  title: 'AP Calculus BC Diagnostic Test | Study Mondo',
  description:
    'Take a free AP Calculus BC diagnostic covering AB foundations plus BC-exclusive series, parametric, polar, and advanced integration. Get a BC score, AB subscore, and a personalized study plan.',
  alternates: { canonical },
}

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Calculus BC Diagnostic Test',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Calculus BC' },
  url: canonical,
}

export default function APCalcBCDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
