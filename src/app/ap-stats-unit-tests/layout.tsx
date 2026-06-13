const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Statistics Unit Tests',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Statistics' },
  url: 'https://www.studymondo.com/ap-stats-unit-tests',
}

export default function APStatsUnitTestsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
