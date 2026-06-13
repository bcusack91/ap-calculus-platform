const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AP Computer Science Principles Unit Tests',
  educationalLevel: 'AP',
  about: { '@type': 'Thing', name: 'AP Computer Science Principles' },
  url: 'https://www.studymondo.com/ap-csp-unit-tests',
}

export default function APCSPUnitTestsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }} />
      {children}
    </>
  )
}
