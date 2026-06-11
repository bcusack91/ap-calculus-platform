import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const topic = await prisma.topic.findUnique({
    where: { slug: 'multi-digit-multiplication' },
    select: { textContent: true }
  })

  console.log('Current content:')
  console.log(topic?.textContent)
}

main()
  .catch((e) => {
    console.error('Error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
