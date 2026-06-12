import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MCAT Bio/Biochem Passage Practice — Free Experimental Passages | Study Mondo',
  description:
    'Free MCAT Biological & Biochemical Foundations practice with experimental passages (gels, enzyme kinetics, ELISA, PCR) and full answer explanations across biochemistry, molecular biology, genetics, and physiology.',
  alternates: { canonical: 'https://www.studymondo.com/mcat-bio-biochem' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
