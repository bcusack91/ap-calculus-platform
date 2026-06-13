const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Physics 2 Unit Tests',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Physics 2' },
  url: 'https://www.studymondo.com/ap-physics2-unit-tests',
}

export default function APPhysics2UnitTestsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
