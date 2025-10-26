import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Chemistry categories...')

  // Get the AP Chemistry course
  const chemistryCourse = await prisma.course.findUnique({
    where: { slug: 'ap-chemistry' }
  })

  if (!chemistryCourse) {
    throw new Error('AP Chemistry course not found. Please run seed-courses.ts first.')
  }

  // Create categories for AP Chemistry based on College Board units
  const categories = [
    {
      name: 'Atomic Structure and Properties',
      slug: 'atomic-structure',
      description: 'Moles, atomic structure, electron configuration, and periodic trends',
      order: 1,
      courseId: chemistryCourse.id
    },
    {
      name: 'Molecular and Ionic Compound Structure and Properties',
      slug: 'molecular-ionic-compounds',
      description: 'Chemical bonding, molecular geometry, and intermolecular forces',
      order: 2,
      courseId: chemistryCourse.id
    },
    {
      name: 'Intermolecular Forces and Properties',
      slug: 'intermolecular-forces',
      description: 'Properties of solids, liquids, and gases based on intermolecular forces',
      order: 3,
      courseId: chemistryCourse.id
    },
    {
      name: 'Chemical Reactions',
      slug: 'chemical-reactions',
      description: 'Types of reactions, stoichiometry, and balancing equations',
      order: 4,
      courseId: chemistryCourse.id
    },
    {
      name: 'Kinetics',
      slug: 'kinetics',
      description: 'Reaction rates, rate laws, and reaction mechanisms',
      order: 5,
      courseId: chemistryCourse.id
    },
    {
      name: 'Thermodynamics',
      slug: 'thermodynamics',
      description: 'Energy changes, enthalpy, entropy, and Gibbs free energy',
      order: 6,
      courseId: chemistryCourse.id
    },
    {
      name: 'Equilibrium',
      slug: 'equilibrium',
      description: 'Chemical equilibrium, Le Chatelier\'s principle, and equilibrium calculations',
      order: 7,
      courseId: chemistryCourse.id
    },
    {
      name: 'Acids and Bases',
      slug: 'acids-bases',
      description: 'pH, acid-base theories, titrations, and buffer solutions',
      order: 8,
      courseId: chemistryCourse.id
    },
    {
      name: 'Applications of Thermodynamics',
      slug: 'thermodynamics-applications',
      description: 'Electrochemistry, galvanic cells, and electrolysis',
      order: 9,
      courseId: chemistryCourse.id
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

  console.log('✓ AP Chemistry categories seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
