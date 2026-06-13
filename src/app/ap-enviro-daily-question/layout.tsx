import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Environmental Science Daily Question | Study Mondo',
  description:
    'A new AP Environmental Science practice question every day on ecosystems, pollution, and sustainability, each with a clear explanation to keep your APES prep sharp.',
  alternates: { canonical: 'https://www.studymondo.com/ap-enviro-daily-question' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
