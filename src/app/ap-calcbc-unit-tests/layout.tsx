const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Calculus BC Unit Tests',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Calculus BC' },
  url: 'https://www.studymondo.com/ap-calcbc-unit-tests',
}

export default function APCalcBCUnitTestsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
