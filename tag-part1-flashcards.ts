import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * Tag flashcards for Reflection & Refraction Part 1
 * 
 * Part 1 covers:
 * - Speed of light (c = 3.0 × 10^8 m/s)
 * - Basic properties: light travels in straight lines, reflects, refracts
 * - What happens at boundaries (reflection, refraction, or both)
 * - Introductory concepts before the mathematical details
 */

async function main() {
  console.log('🏷️  Tagging Part 1 flashcards for Reflection & Refraction...\n')

  // Find the reflection-refraction topic
  const topic = await prisma.topic.findUnique({
    where: { slug: 'reflection-refraction' },
    include: { flashcards: true }
  })

  if (!topic) {
    console.log('❌ Topic not found: reflection-refraction')
    return
  }

  console.log(`Found topic: ${topic.title}`)
  console.log(`Total flashcards: ${topic.flashcards.length}\n`)

  // Part 1 flashcards should cover introductory concepts
  // These are flashcards that introduce basic definitions without heavy math
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

  for (const flashcard of topic.flashcards) {
    const content = `${flashcard.front} ${flashcard.back}`.toLowerCase()
    
    // Check if this flashcard matches Part 1 content
    const matchesPart1 = part1Keywords.some(keyword => 
      content.includes(keyword.toLowerCase())
    )
    
    if (matchesPart1) {
      console.log(`✓ Tagging for Part 1:`)
      console.log(`  Front: ${flashcard.front.substring(0, 70)}${flashcard.front.length > 70 ? '...' : ''}`)
      console.log(`  Back: ${flashcard.back.substring(0, 70)}${flashcard.back.length > 70 ? '...' : ''}`)
      console.log()
      
      await prisma.flashcard.update({
        where: { id: flashcard.id },
        data: { lessonPart: 1 }
      })
      taggedCount++
    }
  }

  console.log(`\n✅ Successfully tagged ${taggedCount} flashcards for Part 1!`)
  
  // Show summary by part
  const summary = await prisma.flashcard.groupBy({
    by: ['lessonPart'],
    where: { topicId: topic.id },
    _count: true
  })
  
  console.log('\n📊 Summary by lesson part:')
  summary
    .sort((a, b) => (a.lessonPart || 999) - (b.lessonPart || 999))
    .forEach(({ lessonPart, _count }) => {
      console.log(`  Part ${lessonPart === null ? 'untagged' : lessonPart}: ${_count} flashcards`)
    })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
