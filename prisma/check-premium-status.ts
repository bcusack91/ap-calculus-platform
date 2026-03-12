import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🔍 Checking current premium status...')

  const premiumTopics = await prisma.topic.findMany({
    where: {
      isPremium: true,
    },
    select: {
      title: true,
      slug: true,
      isPremium: true,
    },
  })

  console.log(`\nFound ${premiumTopics.length} premium topics:`)
  premiumTopics.forEach(topic => {
    console.log(`  - ${topic.title} (${topic.slug})`)
  })

  const allTopics = await prisma.topic.count()
  console.log(`\nTotal topics in database: ${allTopics}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
