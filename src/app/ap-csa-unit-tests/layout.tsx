const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Computer Science A Unit Tests',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Computer Science A' },
  url: 'https://www.studymondo.com/ap-csa-unit-tests',
}

export default function APCSAUnitTestsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
