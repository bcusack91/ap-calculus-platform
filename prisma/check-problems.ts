import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const topic = await prisma.topic.findUnique({
    where: { slug: 'multi-digit-multiplication' },
    include: {
      exampleProblems: true
    }
  })

  if (topic) {
    console.log(`\nTopic: ${topic.name}`)
    console.log(`Number of problems: ${topic.exampleProblems.length}\n`)
    
    if (topic.exampleProblems.length === 0) {
      console.log('No problems found for this topic.')
    } else {
      topic.exampleProblems.forEach((problem, index) => {
        console.log(`\n=== Problem ${index + 1} ===`)
        console.log(`ID: ${problem.id}`)
        console.log(`Question: ${problem.question}`)
        console.log(`\nSolution:\n${problem.solution}`)
        console.log(`\n${'='.repeat(80)}`)
      })
    }
  } else {
    console.log('Topic not found')
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
