import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const topic = await prisma.topic.findUnique({
    where: { slug: 'reflection-refraction' },
    include: { 
      flashcards: {
        select: {
          id: true,
          front: true,
          lessonPart: true
        },
        orderBy: { lessonPart: 'asc' }
      }
    }
  })

  if (!topic) {
    console.log('Topic not found')
    return
  }

  console.log(`\nTopic: ${topic.title}`)
  console.log(`Total flashcards: ${topic.flashcards.length}\n`)

  const byPart = topic.flashcards.reduce((acc, card) => {
    const part = card.lessonPart || 'untagged'
    if (!acc[part]) acc[part] = []
    acc[part].push(card)
    return acc
  }, {} as Record<string | number, typeof topic.flashcards>)

  Object.keys(byPart).sort().forEach(part => {
    console.log(`\n=== Part ${part} (${byPart[part].length} cards) ===`)
    byPart[part].forEach((card, i) => {
      console.log(`${i + 1}. ${card.front.substring(0, 80)}${card.front.length > 80 ? '...' : ''}`)
    })
  })
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
