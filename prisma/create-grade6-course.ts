import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Creating Grade 6 Math course...')

  const grade6 = await prisma.course.upsert({
    where: { slug: 'grade-6-math' },
    update: {},
    create: {
      slug: 'grade-6-math',
      name: 'Grade 6 Math',
      description: 'Build a strong foundation in whole numbers, fractions, decimals, ratios, geometry basics, and introduction to negative numbers.',
      order: 1 // First course (youngest students)
    }
  })

  console.log('✅ Grade 6 Math course created:', grade6.slug)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
