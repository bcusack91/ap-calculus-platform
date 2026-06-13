const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Microeconomics Unit Tests',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Microeconomics' },
  url: 'https://www.studymondo.com/ap-micro-unit-tests',
}

export default function APMicroUnitTestsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
