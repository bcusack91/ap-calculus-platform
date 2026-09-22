import type { Metadata } from 'next'
import DiagnosticAbout from '@/components/DiagnosticAbout'

const canonical = 'https://www.studymondo.com/ap-african-american-studies-diagnostic'

// ISR: the About section below reads course units from the database.
export const revalidate = 3600

export const metadata: Metadata = {
  title: 'AP African American Studies Diagnostic Test | Study Mondo',
  description:
    'Take a free AP African American Studies diagnostic test covering all four units, from origins and freedom to the practice and legacy of the movement. Identify weak areas and get a personalized study plan.',
  alternates: { canonical },
}

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP African American Studies Diagnostic Test',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP African American Studies' },
  url: canonical,
}

export default function APAfricanAmericanStudiesDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
      <DiagnosticAbout slug="ap-african-american-studies-diagnostic" />
    </>
  )
}
