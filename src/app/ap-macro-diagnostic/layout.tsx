import type { Metadata } from 'next'

const canonical = 'https://www.studymondo.com/ap-macro-diagnostic'

export const metadata: Metadata = {
  title: 'AP Macroeconomics Diagnostic Test | Study Mondo',
  description:
    'Take a free AP Macroeconomics diagnostic test covering basic economic concepts, GDP, inflation, AD-AS, fiscal and monetary policy, and international trade. Find weak areas and get a study plan.',
  alternates: { canonical },
}

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Macroeconomics Diagnostic Test',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Macroeconomics' },
  url: canonical,
}

export default function APMacroDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
