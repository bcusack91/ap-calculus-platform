const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Precalculus Unit Tests',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Precalculus' },
  url: 'https://www.studymondo.com/ap-precalc-unit-tests',
}

export default function APPrecalcUnitTestsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
