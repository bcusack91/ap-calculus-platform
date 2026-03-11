import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Precalculus Diagnostic Test | Study Mondo',
  description:
    'Take a free AP Precalculus diagnostic test to assess your exam readiness. Get an estimated AP score and personalized study recommendations.',
  alternates: { canonical: 'https://www.studymondo.com/ap-precalculus-diagnostic' },
}

export default function APPrecalculusDiagnosticLayout({ children }: { children: React.ReactNode }) {
  return children
}
