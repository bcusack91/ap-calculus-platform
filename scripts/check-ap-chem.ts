import { prisma } from '../src/lib/prisma'

async function main() {
  const course = await prisma.course.findUnique({
    where: { slug: 'ap-chemistry' },
    include: {
      categories: {
        include: {
          topics: {
            where: { parentTopicId: null },
            orderBy: { order: 'asc' },
          },
        },
        orderBy: { order: 'asc' },
      },
    },
  })
  if (!course) {
    console.log('NOT FOUND')
    await prisma.$disconnect()
    return
  }
  console.log('Course:', course.name)
  for (const cat of course.categories) {
    console.log('  Category:', cat.name, `(${cat.slug})`)
    for (const t of cat.topics) {
      console.log('    Topic:', t.slug, '-', t.title)
    }
  }
  await prisma.$disconnect()
}

main()
