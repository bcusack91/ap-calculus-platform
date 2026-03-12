import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Delete the original combined topic
  const deleted = await prisma.topic.delete({
    where: { slug: 'unit-circle-radian-measure' }
  })

  console.log('✅ Deleted topic:', deleted.title)
  console.log(`   Slug: ${deleted.slug}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
