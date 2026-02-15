import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * TEMPLATE: Tag flashcards with lesson parts
 * 
 * Instructions:
 * 1. Set the TOPIC_SLUG constant below
 * 2. Define the lesson parts and keywords for your topic
 * 3. Run: npx tsx tag-flashcards-template.ts
 * 4. Review the planned changes
 * 5. Type 'yes' to confirm
 */

// ============ CONFIGURATION ============
const TOPIC_SLUG = 'your-topic-slug-here' // Change this to your topic slug

// Define what each lesson part covers and keywords to identify flashcards
const LESSON_PART_DEFINITIONS = [
  {
    part: 1,
    title: 'Part 1 Title',
    description: 'What this part covers',
    keywords: [
      'keyword1',
      'keyword2',
      'phrase to look for'
    ]
  },
  {
    part: 2,
    title: 'Part 2 Title', 
    description: 'What this part covers',
    keywords: [
      'keyword3',
      'keyword4'
    ]
  },
  // Add more parts as needed...
]
// ============ END CONFIGURATION ============

async function main() {
  console.log(`🏷️  Tagging flashcards for topic: ${TOPIC_SLUG}\n`)

  // Find the topic
  const topic = await prisma.topic.findUnique({
    where: { slug: TOPIC_SLUG },
    include: { flashcards: true }
  })

  if (!topic) {
    console.log(`❌ Topic not found: ${TOPIC_SLUG}`)
    console.log('Available topics:')
    const topics = await prisma.topic.findMany({
      select: { slug: true, title: true },
      orderBy: { slug: 'asc' }
    })
    topics.forEach(t => console.log(`  - ${t.slug} (${t.title})`))
    return
  }

  console.log(`Found topic: ${topic.title}`)
  console.log(`Total flashcards: ${topic.flashcards.length}\n`)

  const updates: Array<{
    id: string
    part: number
    partTitle: string
    front: string
    matchedKeywords: string[]
  }> = []

  // Tag each flashcard based on its content
  for (const flashcard of topic.flashcards) {
    const content = `${flashcard.front} ${flashcard.back} ${flashcard.hint || ''}`.toLowerCase()
    
    // Find the best matching part
    let bestMatch: typeof LESSON_PART_DEFINITIONS[0] | null = null
    let maxMatches = 0
    let matchedKeywords: string[] = []
    
    for (const partDef of LESSON_PART_DEFINITIONS) {
      const matches = partDef.keywords.filter(keyword => 
        content.includes(keyword.toLowerCase())
      )
      
      if (matches.length > maxMatches) {
        maxMatches = matches.length
        bestMatch = partDef
        matchedKeywords = matches
      }
    }
    
    if (bestMatch && maxMatches > 0) {
      updates.push({
        id: flashcard.id,
        part: bestMatch.part,
        partTitle: bestMatch.title,
        front: flashcard.front.substring(0, 70) + (flashcard.front.length > 70 ? '...' : ''),
        matchedKeywords
      })
    }
  }

  // Display planned updates
  console.log('Planned updates:')
  console.log('='.repeat(100))
  
  // Group by part
  const byPart = updates.reduce((acc, update) => {
    if (!acc[update.part]) acc[update.part] = []
    acc[update.part].push(update)
    return acc
  }, {} as Record<number, typeof updates>)

  for (const [part, cards] of Object.entries(byPart)) {
    const partInfo = LESSON_PART_DEFINITIONS.find(p => p.part === parseInt(part))
    console.log(`\n📚 Part ${part}: ${partInfo?.title} (${cards.length} cards)`)
    console.log(`   Description: ${partInfo?.description}`)
    cards.forEach(card => {
      console.log(`   ✓ "${card.front}"`)
      console.log(`      Matched: ${card.matchedKeywords.join(', ')}`)
    })
  }
  
  console.log('\n' + '='.repeat(100))
  console.log(`\n📊 Summary:`)
  console.log(`   Total flashcards: ${topic.flashcards.length}`)
  console.log(`   Flashcards to tag: ${updates.length}`)
  console.log(`   Untagged: ${topic.flashcards.length - updates.length}`)
  
  if (topic.flashcards.length - updates.length > 0) {
    console.log(`\n⚠️  Warning: ${topic.flashcards.length - updates.length} flashcards didn't match any keywords and will remain untagged.`)
    console.log(`   These flashcards will be available to all lesson parts by default.`)
  }

  // Confirm before applying
  console.log(`\n❓ Apply these tags? (yes/no)`)
  
  // For automated runs, you can set AUTO_CONFIRM=true
  const AUTO_CONFIRM = process.env.AUTO_CONFIRM === 'true'
  
  if (!AUTO_CONFIRM) {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })
    
    const answer = await new Promise<string>(resolve => {
      readline.question('> ', (ans: string) => {
        readline.close()
        resolve(ans)
      })
    })
    
    if (answer.toLowerCase() !== 'yes') {
      console.log('❌ Cancelled. No changes made.')
      return
    }
  }

  // Apply updates
  console.log('\n🔄 Applying tags...')
  let taggedCount = 0
  for (const update of updates) {
    await prisma.flashcard.update({
      where: { id: update.id },
      data: { lessonPart: update.part }
    })
    taggedCount++
  }

  console.log(`✅ Successfully tagged ${taggedCount} flashcards!`)
  
  // Show final summary by part
  const summary = await prisma.flashcard.groupBy({
    by: ['lessonPart'],
    where: { topicId: topic.id },
    _count: true
  })
  
  console.log('\n📊 Final distribution:')
  summary
    .sort((a, b) => (a.lessonPart || 0) - (b.lessonPart || 0))
    .forEach(({ lessonPart, _count }) => {
      const partInfo = LESSON_PART_DEFINITIONS.find(p => p.part === lessonPart)
      console.log(`  Part ${lessonPart || 'untagged'}: ${_count} flashcards${partInfo ? ` (${partInfo.title})` : ''}`)
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
