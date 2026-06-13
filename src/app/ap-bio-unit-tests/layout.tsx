const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Biology Unit Tests',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Biology' },
  url: 'https://www.studymondo.com/ap-bio-unit-tests',
}

export default function APBioUnitTestsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
