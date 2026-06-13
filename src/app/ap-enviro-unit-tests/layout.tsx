const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Environmental Science Unit Tests',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Environmental Science' },
  url: 'https://www.studymondo.com/ap-enviro-unit-tests',
}

export default function APEnviroUnitTestsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
