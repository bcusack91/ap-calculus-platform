const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Calculus AB Unit Tests',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Calculus AB' },
  url: 'https://www.studymondo.com/ap-calcab-unit-tests',
}

export default function APCalcABUnitTestsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
