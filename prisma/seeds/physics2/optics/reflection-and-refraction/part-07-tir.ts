import '../../../../../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * Part 7: Total Internal Reflection
 * 
 * These flashcards cover TIR concepts:
 * - What is total internal reflection
 * - Critical angle
 * - Applications (fiber optics, diamonds)
 */
export async function seedPart07Flashcards() {
  const topic = await prisma.topic.findUnique({
    where: { slug: 'reflection-refraction' }
  })

  if (!topic) {
    throw new Error('Topic "reflection-refraction" not found. Run topic.ts first.')
  }

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: topic.id,
        lessonPart: 7,
        front: 'What is total internal reflection? When does it occur?',
        back: 'Complete reflection when going from denser to less dense medium (n₁>n₂) at angle > critical angle. sinθ_c = n₂/n₁. Used in fiber optics, diamonds, prisms.',
      },
    ],
  })

  console.log('✓ Created 1 flashcard for Part 7: Total Internal Reflection')
}

// Run standalone if executed directly
if (require.main === module) {
  seedPart07Flashcards()
    .then(() => {
      console.log('\n✅ Successfully seeded Part 7 flashcards!')
    })
    .catch((e) => {
      console.error('Error seeding:', e)
      process.exit(1)
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}
