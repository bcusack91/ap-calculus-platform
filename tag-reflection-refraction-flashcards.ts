import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * Tag flashcards for Reflection & Refraction topic with appropriate lesson parts
 * 
 * Part 1: Introduction - Speed of light, what happens when light hits a surface, white light splitting
 * Part 2: Learning Journey - Study strategies
 * Part 3: Cartesian Sign Convention - Sign rules for mirrors/lenses
 * Part 4: Reflection - Mirror equation, image formation
 * Part 5: Index of Refraction - n = c/v
 * Part 6: Snell's Law & TIR - Refraction calculations
 * Part 7: Total Internal Reflection - Critical angle
 * Part 8: Dispersion - Prisms, rainbows
 */

async function main() {
  console.log('🏷️  Tagging Reflection & Refraction flashcards with lesson parts...\n')

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

  // Define flashcard tagging rules based on content
  const tagRules = [
    // Part 1: Introduction - Speed of light, basics
    {
      part: 1,
      keywords: ['speed of light', 'c = 3', '3.00 × 10^8', 'electromagnetic spectrum', 'white light', 'colors', 'prism splits', 'when light hits'],
      description: 'Introduction - Speed of light, light behavior, white light'
    },
    
    // Part 2: Learning Journey (usually doesn't have content-specific flashcards, more meta)
    {
      part: 2,
      keywords: ['study', 'learning', 'strategy', 'practice'],
      description: 'Learning Journey - Study strategies'
    },
    
    // Part 3: Cartesian Sign Convention
    {
      part: 3,
      keywords: ['sign convention', 'positive', 'negative', 'real image', 'virtual image', 'concave', 'convex', 'which side'],
      description: 'Cartesian Sign Convention'
    },
    
    // Part 4: Reflection - Mirrors
    {
      part: 4,
      keywords: ['mirror equation', '1/f = 1/d_o + 1/d_i', 'mirror', 'reflection', 'focal length', 'image distance'],
      description: 'Reflection - Mirrors and mirror equation'
    },
    
    // Part 5: Index of Refraction
    {
      part: 5,
      keywords: ['index of refraction', 'n = c/v', 'refractive index', 'speed in medium', 'slower in'],
      description: 'Index of Refraction'
    },
    
    // Part 6: Snell's Law
    {
      part: 6,
      keywords: ['snell', 'n1 sin', 'refraction', 'bending', 'angle of refraction'],
      description: 'Snell\'s Law and Refraction'
    },
    
    // Part 7: Total Internal Reflection
    {
      part: 7,
      keywords: ['total internal reflection', 'critical angle', 'TIR', 'fiber optic'],
      description: 'Total Internal Reflection'
    },
    
    // Part 8: Dispersion
    {
      part: 8,
      keywords: ['dispersion', 'rainbow', 'wavelength', 'frequency', 'red bends less', 'violet bends more'],
      description: 'Dispersion'
    }
  ]

  let taggedCount = 0
  const updates = []

  // Tag each flashcard based on its content
  for (const flashcard of topic.flashcards) {
    const content = `${flashcard.front} ${flashcard.back}`.toLowerCase()
    
    // Find the best matching part
    let bestMatch = null
    let maxMatches = 0
    
    for (const rule of tagRules) {
      const matches = rule.keywords.filter(keyword => 
        content.includes(keyword.toLowerCase())
      ).length
      
      if (matches > maxMatches) {
        maxMatches = matches
        bestMatch = rule
      }
    }
    
    if (bestMatch && maxMatches > 0) {
      updates.push({
        id: flashcard.id,
        part: bestMatch.part,
        description: bestMatch.description,
        front: flashcard.front.substring(0, 60) + (flashcard.front.length > 60 ? '...' : '')
      })
    }
  }

  // Display planned updates
  console.log('Planned updates:')
  console.log('='.repeat(80))
  for (const update of updates) {
    console.log(`Part ${update.part} (${update.description}):`)
    console.log(`  "${update.front}"`)
  }
  console.log('='.repeat(80))
  console.log(`\nTotal: ${updates.length} flashcards to tag\n`)

  // Apply updates
  for (const update of updates) {
    await prisma.flashcard.update({
      where: { id: update.id },
      data: { lessonPart: update.part }
    })
    taggedCount++
  }

  console.log(`✅ Successfully tagged ${taggedCount} flashcards!`)
  
  // Show summary by part
  const summary = await prisma.flashcard.groupBy({
    by: ['lessonPart'],
    where: { topicId: topic.id },
    _count: true
  })
  
  console.log('\n📊 Summary by lesson part:')
  summary
    .sort((a, b) => (a.lessonPart || 0) - (b.lessonPart || 0))
    .forEach(({ lessonPart, _count }) => {
      console.log(`  Part ${lessonPart || 'untagged'}: ${_count} flashcards`)
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
