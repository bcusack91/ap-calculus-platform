import type { Metadata } from 'next'

const canonical = 'https://www.studymondo.com/ap-csp-diagnostic'

export const metadata: Metadata = {
  title: 'AP Computer Science Principles Diagnostic Test | Study Mondo',
  description:
    'Take a free AP CS Principles diagnostic test covering all five big ideas: creative development, data, algorithms, programming, computing systems, and the internet. Get a personalized study plan.',
  alternates: { canonical },
}

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Computer Science Principles Diagnostic Test',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Computer Science Principles' },
  url: canonical,
}

export default function APCSPDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
