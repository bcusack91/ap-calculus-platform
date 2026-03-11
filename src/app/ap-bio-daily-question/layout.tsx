import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Biology Daily Question | Study Mondo',
  description: 'Practice a new AP Biology question every day. Free daily AP Bio prep covering evolution, ecology, genetics, cell biology, and more.',
  alternates: { canonical: 'https://www.studymondo.com/ap-bio-daily-question' },
}

export default function Layout({ children }: { children: React.ReactNode }) { return children }
