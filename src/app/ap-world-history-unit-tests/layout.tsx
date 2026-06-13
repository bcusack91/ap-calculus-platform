const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP World History Unit Tests',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP World History: Modern' },
  url: 'https://www.studymondo.com/ap-world-history-unit-tests',
}

export default function APWorldHistoryUnitTestsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
