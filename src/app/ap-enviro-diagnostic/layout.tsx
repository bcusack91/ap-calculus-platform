import type { Metadata } from 'next'

const canonical = 'https://www.studymondo.com/ap-enviro-diagnostic'

export const metadata: Metadata = {
  title: 'AP Environmental Science Diagnostic Test | Study Mondo',
  description:
    'Take a free AP Environmental Science (APES) diagnostic test covering ecosystems, biodiversity, populations, land and water use, energy, pollution, and global change. Get a targeted study plan.',
  alternates: { canonical },
}

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Environmental Science Diagnostic Test',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Environmental Science' },
  url: canonical,
}

export default function APEnviroDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
