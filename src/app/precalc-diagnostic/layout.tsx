import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pre-Calculus Diagnostic Test | Study Mondo',
  description:
    'Take a free Pre-Calculus diagnostic test to identify your strengths and weaknesses. Get personalized study recommendations across all key domains.',
  alternates: { canonical: 'https://www.studymondo.com/precalc-diagnostic' },
}

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'Pre-Calculus Diagnostic Test',
  educationalLevel: 'High School',
  about: { '@type': 'Thing', name: 'Pre-Calculus' },
  url: 'https://www.studymondo.com/precalc-diagnostic',
}

export default function PreCalcDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
