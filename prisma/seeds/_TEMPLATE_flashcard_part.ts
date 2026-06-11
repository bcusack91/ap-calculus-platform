import '../../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * TEMPLATE FOR FLASHCARD SEED FILES
 * 
 * Instructions for employees:
 * 1. Copy this file to the appropriate location:
 *    prisma/seeds/{course}/{category}/{topic}/part-{XX}-{name}.ts
 * 
 * 2. Update the metadata at the top:
 *    - Change the part number and description
 *    - List the concepts covered
 * 
 * 3. Update the topicSlug to match your topic (e.g., 'reflection-refraction')
 * 
 * 4. Update the lessonPart number (1, 2, 3, etc.)
 * 
 * 5. Add your flashcards in the data array:
 *    - front: The question/prompt (keep concise)
 *    - back: The answer (include key formulas, concepts, and explanations)
 *    - Each flashcard tests ONE concept
 * 
 * 6. Test by running: npx tsx prisma/seeds/{path-to-this-file}.ts
 * 
 * Example structure:
 * prisma/seeds/
 * ├── physics2/optics/reflection-and-refraction/part-01-introduction.ts
 * ├── chemistry/acids-bases/buffers/part-03-buffer-systems.ts
 * └── calculus/derivatives/power-rule/part-01-introduction.ts
 */

// ============================================
// CONFIGURATION - UPDATE THESE VALUES
// ============================================

const TOPIC_SLUG = 'YOUR-TOPIC-SLUG-HERE'  // e.g., 'reflection-refraction'
const LESSON_PART = 1                       // Which part number (1, 2, 3, etc.)
const PART_NAME = 'Part Name'               // e.g., 'Introduction', 'Advanced Concepts'

/**
 * Part {LESSON_PART}: {PART_NAME}
 * 
 * Concepts covered:
 * - Concept 1
 * - Concept 2
 * - Concept 3
 */
export async function seedFlashcards() {
  const topic = await prisma.topic.findUnique({
    where: { slug: TOPIC_SLUG }
  })

  if (!topic) {
    throw new Error(`Topic "${TOPIC_SLUG}" not found. Make sure the topic has been created first.`)
  }

  // ============================================
  // ADD YOUR FLASHCARDS HERE
  // ============================================
  
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: topic.id,
        lessonPart: LESSON_PART,
        front: 'Question 1: What is the main concept?',
        back: 'Answer: Explanation with key details. Include formulas if needed: E = mc^2. Keep it concise but complete.',
      },
      {
        topicId: topic.id,
        lessonPart: LESSON_PART,
        front: 'Question 2: How do you calculate X?',
        back: 'Answer: Formula and explanation. Example: F = ma. Force equals mass times acceleration.',
      },
      {
        topicId: topic.id,
        lessonPart: LESSON_PART,
        front: 'Question 3: When do you use this technique?',
        back: 'Answer: Use cases and conditions. Provide examples or mnemonics to help students remember.',
      },
      // Add more flashcards as needed...
    ],
  })

  console.log(`✓ Created flashcards for Part ${LESSON_PART}: ${PART_NAME}`)
}

// ============================================
// DO NOT MODIFY BELOW THIS LINE
// ============================================

if (require.main === module) {
  seedFlashcards()
    .then(() => {
      console.log(`\n✅ Successfully seeded ${PART_NAME} flashcards!`)
    })
    .catch((e) => {
      console.error('Error seeding:', e)
      process.exit(1)
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}
