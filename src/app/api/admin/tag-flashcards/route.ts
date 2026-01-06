import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST() {
  try {
    console.log('🏷️  Starting flashcard tagging for Part 1...')

    // Find the reflection-refraction topic
    const topic = await prisma.topic.findUnique({
      where: { slug: 'reflection-refraction' },
      include: { flashcards: true }
    })

    if (!topic) {
      return NextResponse.json(
        { error: 'Topic not found: reflection-refraction' },
        { status: 404 }
      )
    }

    console.log(`Found topic: ${topic.title}`)
    console.log(`Total flashcards: ${topic.flashcards.length}`)

    // Part 1 flashcards keywords
    const part1Keywords = [
      'speed of light',
      'c = 3',
      '3.0 × 10^8',
      '3.00 × 10^8',
      'electromagnetic wave',
      'wavelength',
      'frequency',
      'λ f',
      'constant',
      'what happens to frequency',
      'frequency: constant'
    ]

    let taggedCount = 0
    const taggedCards = []

    for (const flashcard of topic.flashcards) {
      const content = `${flashcard.front} ${flashcard.back}`.toLowerCase()
      
      // Check if this flashcard matches Part 1 content
      const matchesPart1 = part1Keywords.some(keyword => 
        content.includes(keyword.toLowerCase())
      )
      
      if (matchesPart1) {
        await prisma.flashcard.update({
          where: { id: flashcard.id },
          data: { lessonPart: 1 }
        })
        taggedCount++
        taggedCards.push({
          front: flashcard.front.substring(0, 70),
          back: flashcard.back.substring(0, 70)
        })
      }
    }

    // Get summary
    const summary = await prisma.flashcard.groupBy({
      by: ['lessonPart'],
      where: { topicId: topic.id },
      _count: true
    })

    return NextResponse.json({
      success: true,
      taggedCount,
      taggedCards,
      summary: summary.map(({ lessonPart, _count }) => ({
        part: lessonPart === null ? 'untagged' : lessonPart,
        count: _count
      }))
    })

  } catch (error) {
    console.error('Error tagging flashcards:', error)
    return NextResponse.json(
      { error: 'Failed to tag flashcards', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}
