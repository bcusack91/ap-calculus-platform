import type { Metadata } from 'next'
import { prisma } from '@/lib/prisma'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  
  // Get the topic to create canonical URL pointing to the main topic page
  const topic = await prisma.topic.findUnique({
    where: { slug },
    select: { slug: true }
  })
  
  return {
    robots: {
      index: false, // Don't index flashcard study pages - they're duplicates of topic pages
      follow: true,
    },
    alternates: {
      canonical: topic ? `https://studymondo.com/topics/${topic.slug}` : undefined,
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
