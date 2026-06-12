import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MCAT Psych/Soc Passage Practice — Free Study-Based Passages | Study Mondo',
  description:
    'Free MCAT Psychological, Social & Biological Foundations of Behavior practice with research-study passages and full answer explanations across psychology, sociology, and the biological basis of behavior.',
  alternates: { canonical: 'https://www.studymondo.com/mcat-psych-soc' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
