import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Grade 8 Math Diagnostic Test | Study Mondo',
  description:
    'Take a free Grade 8 Math diagnostic test to identify your strengths and weaknesses. Get personalized study recommendations across all key domains.',
  alternates: { canonical: 'https://www.studymondo.com/grade8-math-diagnostic' },
}

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'Grade 8 Math Diagnostic Test',
  educationalLevel: 'Middle School',
  about: { '@type': 'Thing', name: 'Grade 8 Math' },
  url: 'https://www.studymondo.com/grade8-math-diagnostic',
}

export default function Grade8MathDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
