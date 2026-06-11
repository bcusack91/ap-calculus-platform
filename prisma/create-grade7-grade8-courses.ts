import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Creating Grade 7 and Grade 8 Math courses...')

  const grade7 = await prisma.course.upsert({
    where: { slug: 'grade-7-math' },
    update: {},
    create: {
      slug: 'grade-7-math',
      name: 'Grade 7 Math',
      description: 'Master rational numbers, proportions, expressions, equations, geometry, and probability for 7th grade.',
      order: 2 // After Grade 6
    }
  })

  console.log('✅ Grade 7 Math course created:', grade7.slug)

  const grade8 = await prisma.course.upsert({
    where: { slug: 'grade-8-math' },
    update: {},
    create: {
      slug: 'grade-8-math',
      name: 'Grade 8 Math',
      description: 'Explore exponents, linear equations, functions, geometry transformations, and the Pythagorean theorem.',
      order: 3 // After Grade 7
    }
  })

  console.log('✅ Grade 8 Math course created:', grade8.slug)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
