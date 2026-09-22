import type { Metadata } from 'next'
import DiagnosticAbout from '@/components/DiagnosticAbout'

const canonical = 'https://www.studymondo.com/ap-world-history-diagnostic'

// ISR: the About section below reads course units from the database.
export const revalidate = 3600

export const metadata: Metadata = {
  title: 'AP World History Diagnostic Test | Study Mondo',
  description:
    'Take a free AP World History: Modern diagnostic test covering all nine units from c. 1200 CE to the present, including empires, trade, revolutions, and globalization. Get a personalized study plan.',
  alternates: { canonical },
}

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP World History Diagnostic Test',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP World History: Modern' },
  url: canonical,
}

export default function APWorldHistoryDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
      <DiagnosticAbout slug="ap-world-history-diagnostic" />
    </>
  )
}
