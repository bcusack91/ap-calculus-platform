const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Macroeconomics Unit Tests',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Macroeconomics' },
  url: 'https://www.studymondo.com/ap-macro-unit-tests',
}

export default function APMacroUnitTestsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
