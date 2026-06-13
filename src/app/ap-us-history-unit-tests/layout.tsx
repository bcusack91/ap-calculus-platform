const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP US History Unit Tests',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP US History' },
  url: 'https://www.studymondo.com/ap-us-history-unit-tests',
}

export default function APUSHistoryUnitTestsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
