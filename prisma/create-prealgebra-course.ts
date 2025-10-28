import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Creating Pre-Algebra course...')

  const preAlgebra = await prisma.course.upsert({
    where: { slug: 'pre-algebra' },
    update: {},
    create: {
      slug: 'pre-algebra',
      name: 'Pre-Algebra',
      description: 'Master the fundamentals: integers, fractions, decimals, basic equations, and essential problem-solving skills for algebra success.',
      order: 3 // Before Algebra 1
    }
  })

  console.log('✅ Pre-Algebra course created:', preAlgebra.slug)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
