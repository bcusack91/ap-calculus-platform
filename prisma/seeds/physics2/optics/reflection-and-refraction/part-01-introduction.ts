import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * Part 1: Introduction - Fundamental Properties of Light
 * 
 * These flashcards cover the fundamental concepts introduced in Part 1:
 * - Speed of light in vacuum
 * - Light travels in straight lines (rays)
 * - Light reflection and refraction at surfaces
 * - Why diamonds shine (total internal reflection)
 * - Rainbow formation from raindrops
 */
export async function seedPart01Flashcards() {
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
        lessonPart: 1,
        front: 'What is the speed of light in a vacuum?',
        back: 'c = 3.00 × 10⁸ m/s (or 300,000,000 meters per second). This is the fastest speed possible in the universe. Light slows down when traveling through materials like water or glass.',
      },
      {
        topicId: topic.id,
        lessonPart: 1,
        front: 'Light rays travel in {{c1::straight lines}} until they encounter an obstacle or different medium.',
        back: 'straight lines. Light travels in straight lines (called rays) until it hits something. This is why shadows have sharp edges and why we can aim flashlights in specific directions.',
      },
      {
        topicId: topic.id,
        lessonPart: 1,
        front: 'What are the two things that can happen when light encounters a surface?',
        back: 'Light can either (1) reflect - bounce off the surface back into the original medium, or (2) refract - pass through into the new medium and bend. Often both happen simultaneously (like seeing your reflection in a window while also seeing through it).',
      },
      {
        topicId: topic.id,
        lessonPart: 1,
        front: 'Why do diamonds shine and sparkle so brilliantly?',
        back: 'Diamonds have a very high index of refraction (n = 2.42), which creates a small critical angle. This causes total internal reflection - light entering the diamond bounces around inside multiple times before exiting, creating brilliant flashes of light. The many facets (cut surfaces) enhance this effect.',
      },
      {
        topicId: topic.id,
        lessonPart: 1,
        front: 'Why does sunlight create a rainbow when it hits raindrops?',
        back: 'White sunlight entering a raindrop undergoes: (1) refraction entering the drop - different colors bend at different angles (dispersion), (2) reflection off the back of the drop, (3) refraction exiting the drop - further separating colors. Red bends least, violet bends most, creating the ROYGBIV spectrum.',
      },
    ],
  })

  console.log('✓ Created 5 flashcards for Part 1: Introduction')
}

// Run standalone if executed directly
if (require.main === module) {
  seedPart01Flashcards()
    .then(() => {
      console.log('\n✅ Successfully seeded Part 1 flashcards!')
    })
    .catch((e) => {
      console.error('Error seeding:', e)
      process.exit(1)
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}
