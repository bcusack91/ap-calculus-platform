import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MCAT High-Yield Reference Sheets — Equations, Constants & Facts | Study Mondo',
  description:
    'Free MCAT reference sheets: the high-yield equations, constants, amino acids, enzyme kinetics, hormones, neurotransmitters, and theories worth memorizing — organized by section.',
  alternates: { canonical: 'https://www.studymondo.com/mcat-reference' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
