import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Precalculus categories...')

  // Get the AP Precalculus course
  const precalcCourse = await prisma.course.findUnique({
    where: { slug: 'ap-precalculus' }
  })

  if (!precalcCourse) {
    throw new Error('AP Precalculus course not found. Please run seed-courses.ts first.')
  }

  // Create categories for AP Precalculus
  const categories = [
    {
      name: 'Polynomial and Rational Functions',
      slug: 'polynomial-rational-functions',
      description: 'Understanding polynomial and rational functions, their graphs, and behavior',
      order: 1,
      courseId: precalcCourse.id
    },
    {
      name: 'Exponential and Logarithmic Functions',
      slug: 'exponential-logarithmic-functions',
      description: 'Properties and applications of exponential and logarithmic functions',
      order: 2,
      courseId: precalcCourse.id
    },
    {
      name: 'Trigonometric Functions',
      slug: 'trigonometric-functions',
      description: 'Unit circle, trigonometric functions, identities, and equations',
      order: 3,
      courseId: precalcCourse.id
    },
    {
      name: 'Functions Involving Parameters, Vectors, and Matrices',
      slug: 'parameters-vectors-matrices',
      description: 'Parametric equations, vectors, and matrix operations',
      order: 4,
      courseId: precalcCourse.id
    }
  ]

  for (const category of categories) {
    const created = await prisma.category.upsert({
      where: { slug: category.slug },
      update: category,
      create: category
    })
    console.log(`✓ Created/updated category: ${created.name}`)
  }

  console.log('✓ AP Precalculus categories seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
