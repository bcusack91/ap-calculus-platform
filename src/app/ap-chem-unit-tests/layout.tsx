const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Chemistry Unit Tests',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Chemistry' },
  url: 'https://www.studymondo.com/ap-chem-unit-tests',
}

export default function APChemUnitTestsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
