import '../../../../../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * Part 6: Curved Mirrors - Mirror Equation and Magnification
 * 
 * These flashcards cover curved mirror concepts:
 * - Mirror equation (1/f = 1/d_o + 1/d_i)
 * - Magnification formula
 * - Concave vs convex mirrors
 * - Focal length and radius of curvature relationship
 */
export async function seedPart06Flashcards() {
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
        lessonPart: 6,
        front: 'State the mirror equation and magnification formula.',
        back: '1/f = 1/d_o + 1/d_i. Magnification: m = -d_i/d_o = h_i/h_o. f>0 concave, f<0 convex. d_i>0 real (front), d_i<0 virtual (behind). m<0 inverted, m>0 upright.',
      },
      {
        topicId: topic.id,
        lessonPart: 6,
        front: 'Compare concave and convex mirrors.',
        back: 'Concave (f>0): converging, can form real or virtual images. Convex (f<0): diverging, always virtual/upright/reduced. Convex used for wide-angle view (car mirrors).',
      },
      {
        topicId: topic.id,
        lessonPart: 6,
        front: 'What is the relationship between focal length and radius of curvature for mirrors?',
        back: 'f = R/2, where R is radius of curvature. Focal point is halfway between center of curvature (C) and mirror. Concave: f positive. Convex: f negative.',
      },
    ],
  })

  console.log('✓ Created 3 flashcards for Part 6: Curved Mirrors')
}

// Run standalone if executed directly
if (require.main === module) {
  seedPart06Flashcards()
    .then(() => {
      console.log('\n✅ Successfully seeded Part 6 flashcards!')
    })
    .catch((e) => {
      console.error('Error seeding:', e)
      process.exit(1)
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}
