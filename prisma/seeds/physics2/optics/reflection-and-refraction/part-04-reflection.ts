import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * Part 4: Reflection - Law of Reflection and Plane Mirrors
 * 
 * These flashcards cover reflection concepts:
 * - Law of reflection (θ_i = θ_r)
 * - Plane mirror image properties
 */
export async function seedPart04Flashcards() {
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
        lessonPart: 4,
        front: 'State the law of reflection.',
        back: 'θ_i = θ_r. Angle of incidence equals angle of reflection. Both measured from normal (perpendicular) to surface. Incident, reflected, and normal all in same plane.',
      },
      {
        topicId: topic.id,
        lessonPart: 4,
        front: 'Describe image formed by plane mirror.',
        back: 'Virtual (behind mirror), upright, same size (m=1), same distance behind as object is in front (d_i = d_o). Laterally inverted (left↔right reversed).',
      },
    ],
  })

  console.log('✓ Created 2 flashcards for Part 4: Reflection')
}

// Run standalone if executed directly
if (require.main === module) {
  seedPart04Flashcards()
    .then(() => {
      console.log('\n✅ Successfully seeded Part 4 flashcards!')
    })
    .catch((e) => {
      console.error('Error seeding:', e)
      process.exit(1)
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}
