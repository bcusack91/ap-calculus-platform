import type { Metadata } from 'next'
import DiagnosticAbout from '@/components/DiagnosticAbout'

const canonical = 'https://www.studymondo.com/ap-human-geo-diagnostic'

// ISR: the About section below reads course units from the database.
export const revalidate = 3600

export const metadata: Metadata = {
  title: 'AP Human Geography Diagnostic Test | Study Mondo',
  description:
    'Take a free AP Human Geography diagnostic test covering all seven units: thinking geographically, population, culture, political, agriculture, cities, and development. Get a personalized study plan.',
  alternates: { canonical },
}

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Human Geography Diagnostic Test',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Human Geography' },
  url: canonical,
}

export default function APHumanGeoDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
      <DiagnosticAbout slug="ap-human-geo-diagnostic" />
    </>
  )
}
