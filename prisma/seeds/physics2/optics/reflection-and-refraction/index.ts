import { PrismaClient } from '@prisma/client'
import { seedReflectionRefractionTopic } from './topic'
import { seedPart01Flashcards } from './part-01-introduction'
import { seedPart04Flashcards } from './part-04-reflection'
import { seedPart06Flashcards } from './part-06-curved-mirrors'
import { seedPart07Flashcards } from './part-07-tir'

const prisma = new PrismaClient()

/**
 * Master seed script for Reflection and Refraction topic.
 * Runs all seed files in order: topic creation, then flashcards for each part.
 */
async function main() {
  console.log('🌱 Seeding Reflection and Refraction...\n')

  try {
    // 1. Create topic, category, and example problems
    await seedReflectionRefractionTopic()
    
    // 2. Seed flashcards for each part
    await seedPart01Flashcards()
    await seedPart04Flashcards()
    await seedPart06Flashcards()
    await seedPart07Flashcards()
    
    console.log('\n✅ Successfully seeded all Reflection and Refraction content!')
    console.log('   - Topic and 3 example problems')
    console.log('   - Part 1: 4 flashcards')
    console.log('   - Part 4: 2 flashcards')
    console.log('   - Part 6: 3 flashcards')
    console.log('   - Part 7: 1 flashcard')
    console.log('   Total: 10 flashcards')
  } catch (error) {
    console.error('❌ Error during seeding:', error)
    throw error
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
