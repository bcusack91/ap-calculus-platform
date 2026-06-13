const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Human Geography Unit Tests',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Human Geography' },
  url: 'https://www.studymondo.com/ap-human-geo-unit-tests',
}

export default function APHumanGeoUnitTestsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
