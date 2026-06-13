import type { Metadata } from 'next'

const canonical = 'https://www.studymondo.com/ap-csa-diagnostic'

export const metadata: Metadata = {
  title: 'AP Computer Science A Diagnostic Test | Study Mondo',
  description:
    'Take a free AP Computer Science A diagnostic test covering Java fundamentals, objects, arrays, ArrayLists, 2D arrays, inheritance, and recursion. Find your gaps and get a personalized study plan.',
  alternates: { canonical },
}

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Computer Science A Diagnostic Test',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Computer Science A' },
  url: canonical,
}

export default function APCSADiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
