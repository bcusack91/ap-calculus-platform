const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP US Government Unit Tests',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP US Government and Politics' },
  url: 'https://www.studymondo.com/ap-us-gov-unit-tests',
}

export default function APUSGovUnitTestsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
