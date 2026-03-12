import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Creating Grade 4 and Grade 5 Math courses...')

  const grade4 = await prisma.course.upsert({
    where: { slug: 'grade-4-math' },
    update: {},
    create: {
      slug: 'grade-4-math',
      name: 'Grade 4 Math',
      description: 'Learn multiplication, division, fractions, decimals, and basic geometry for 4th grade.',
      order: 0 // Before all other courses
    }
  })

  console.log('✅ Grade 4 Math course created:', grade4.slug)

  const grade5 = await prisma.course.upsert({
    where: { slug: 'grade-5-math' },
    update: {},
    create: {
      slug: 'grade-5-math',
      name: 'Grade 5 Math',
      description: 'Master place value, operations with decimals, fractions, volume, and coordinate planes.',
      order: 0.5 // After Grade 4, before Grade 6
    }
  })

  console.log('✅ Grade 5 Math course created:', grade5.slug)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
