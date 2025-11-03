import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  
  return {
    robots: {
      index: false, // Don't index flashcard study pages - they're duplicates of topic pages
      follow: true,
    },
  }
}

export default function FlashcardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
