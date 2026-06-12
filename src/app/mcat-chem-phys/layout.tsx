import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MCAT Chem/Phys Passage Practice — Free Experimental Passages | Study Mondo',
  description:
    'Free MCAT Chemical & Physical Foundations practice with experimental, data-table passages and full answer explanations across general chemistry, physics, organic chemistry, and biochemistry.',
  alternates: { canonical: 'https://www.studymondo.com/mcat-chem-phys' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
