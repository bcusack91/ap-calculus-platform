import type { Metadata } from 'next'
import DiagnosticAbout from '@/components/DiagnosticAbout'

const canonical = 'https://www.studymondo.com/ap-english-lit-diagnostic'

// ISR: the About section below reads course units from the database.
export const revalidate = 3600

export const metadata: Metadata = {
  title: 'AP English Literature Diagnostic Test | Study Mondo',
  description:
    'Take a free AP English Literature and Composition diagnostic test covering poetry, prose fiction, and drama analysis plus literary argument essays. Identify weak skills and get a personalized study plan.',
  alternates: { canonical },
}

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP English Literature Diagnostic Test',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP English Literature and Composition' },
  url: canonical,
}

export default function APEnglishLitDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
      <DiagnosticAbout slug="ap-english-lit-diagnostic" />
    </>
  )
}
