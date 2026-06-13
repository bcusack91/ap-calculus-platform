const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP African American Studies Unit Tests',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP African American Studies' },
  url: 'https://www.studymondo.com/ap-aas-unit-tests',
}

export default function APAASUnitTestsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
