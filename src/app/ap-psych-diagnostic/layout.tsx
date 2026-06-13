import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Psychology Diagnostic Test | Study Mondo',
  description:
    'Take a free AP Psychology diagnostic test to identify your strengths and weaknesses across all 11 AP Psych units. Get personalized study recommendations.',
  alternates: { canonical: 'https://www.studymondo.com/ap-psych-diagnostic' },
}

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Psychology Diagnostic Test',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Psychology' },
  url: 'https://www.studymondo.com/ap-psych-diagnostic',
}

export default function APPsychDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
