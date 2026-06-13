import type { Metadata } from 'next'

const canonical = 'https://www.studymondo.com/ap-calcab-diagnostic'

export const metadata: Metadata = {
  title: 'AP Calculus AB Diagnostic Test | Study Mondo',
  description:
    'Take a free AP Calculus AB diagnostic covering all units: limits, continuity, derivatives, integrals, and their applications. Get an estimated AP score and a personalized study plan.',
  alternates: { canonical },
}

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Calculus AB Diagnostic Test',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Calculus AB' },
  url: canonical,
}

export default function APCalcABDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
