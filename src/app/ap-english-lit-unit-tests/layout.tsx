const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP English Literature Unit Tests',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP English Literature and Composition' },
  url: 'https://www.studymondo.com/ap-english-lit-unit-tests',
}

export default function APEnglishLitUnitTestsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
