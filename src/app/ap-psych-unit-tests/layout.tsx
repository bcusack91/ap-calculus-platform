const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Psychology Unit Tests',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Psychology' },
  url: 'https://www.studymondo.com/ap-psych-unit-tests',
}

export default function APPsychUnitTestsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
