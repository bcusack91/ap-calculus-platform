import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🔄 Updating all BC topics to be free (not premium)...')

  // Update all topics where isPremium is true to false
  const result = await prisma.topic.updateMany({
    where: {
      isPremium: true,
    },
    data: {
      isPremium: false,
    },
  })

  console.log(`✅ Updated ${result.count} BC topics to free access!`)
  console.log('All AP Calculus content is now part of the freemium model.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
