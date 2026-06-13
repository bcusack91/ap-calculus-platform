import type { Metadata } from 'next'

const canonical = 'https://www.studymondo.com/ap-micro-diagnostic'

export const metadata: Metadata = {
  title: 'AP Microeconomics Diagnostic Test | Study Mondo',
  description:
    'Take a free AP Microeconomics diagnostic test covering supply and demand, elasticity, production costs, market structures, factor markets, and market failure. Identify gaps and get a study plan.',
  alternates: { canonical },
}

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Microeconomics Diagnostic Test',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Microeconomics' },
  url: canonical,
}

export default function APMicroDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
