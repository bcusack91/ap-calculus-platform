const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP English Language Unit Tests',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP English Language and Composition' },
  url: 'https://www.studymondo.com/ap-english-lang-unit-tests',
}

export default function APEnglishLangUnitTestsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
