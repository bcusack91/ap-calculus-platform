import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Creating SAT and ACT Prep courses...')

  const sat = await prisma.course.upsert({
    where: { slug: 'sat-prep' },
    update: {},
    create: {
      slug: 'sat-prep',
      name: 'SAT Prep',
      description: 'Master the SAT with comprehensive practice for Math and Evidence-Based Reading & Writing sections.',
      order: 100 // After all grade-level courses
    }
  })

  console.log('✅ SAT Prep course created:', sat.slug)

  const act = await prisma.course.upsert({
    where: { slug: 'act-prep' },
    update: {},
    create: {
      slug: 'act-prep',
      name: 'ACT Prep',
      description: 'Ace the ACT with targeted strategies for Math, English, Reading, and Science sections.',
      order: 101 // After SAT
    }
  })

  console.log('✅ ACT Prep course created:', act.slug)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
