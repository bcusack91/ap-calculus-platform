import type { Metadata } from 'next'

const canonical = 'https://www.studymondo.com/ap-english-lang-diagnostic'

export const metadata: Metadata = {
  title: 'AP English Language Diagnostic Test | Study Mondo',
  description:
    'Take a free AP English Language and Composition diagnostic test covering rhetorical analysis, argumentation, and synthesis skills. Pinpoint your weak areas and get a personalized study plan.',
  alternates: { canonical },
}

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP English Language Diagnostic Test',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP English Language and Composition' },
  url: canonical,
}

export default function APEnglishLangDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
