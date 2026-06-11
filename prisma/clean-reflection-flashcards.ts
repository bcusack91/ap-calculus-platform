import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🧹 Cleaning up reflection-refraction flashcards...\n')

  const topic = await prisma.topic.findUnique({
    where: { slug: 'reflection-refraction' },
    include: { flashcards: true }
  })

  if (!topic) {
    console.log('Topic not found')
    return
  }

  console.log(`Found ${topic.flashcards.length} total flashcards`)
  
  // Delete ALL existing flashcards for this topic
  const deleted = await prisma.flashcard.deleteMany({
    where: { topicId: topic.id }
  })
  
  console.log(`✓ Deleted ${deleted.count} flashcards`)
  console.log('\nNow run the seed files to recreate them with correct tagging:')
  console.log('npx tsx prisma/seeds/physics2/optics/reflection-and-refraction/index.ts')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
