import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seedCourses() {
  console.log('🌱 Seeding remaining AP courses...\n')

  const courses = [
    {
      id: 'ap-precalculus',
      slug: 'ap-precalculus',
      name: 'AP Precalculus',
      description: 'Build a strong foundation in functions, trigonometry, vectors, matrices, and complex numbers to prepare for calculus.',
      order: 2,
      icon: '📐',
      color: 'blue',
    },
    {
      id: 'ap-physics-1',
      slug: 'ap-physics-1',
      name: 'AP Physics 1',
      description: 'Explore mechanics, waves, sound, and basic circuits in this algebra-based physics course.',
      order: 3,
      icon: '⚛️',
      color: 'green',
    },
    {
      id: 'ap-physics-2',
      slug: 'ap-physics-2',
      name: 'AP Physics 2',
      icon: '🔬',
      description: 'Study fluids, thermodynamics, electricity, magnetism, optics, and modern physics using algebra-based approaches.',
      order: 4,
      color: 'teal',
    },
    {
      id: 'ap-physics-c-mechanics',
      slug: 'ap-physics-c-mechanics',
      name: 'AP Physics C: Mechanics',
      icon: '🎯',
      description: 'Master calculus-based mechanics including kinematics, energy, momentum, rotation, and oscillations.',
      order: 5,
      color: 'indigo',
    },
    {
      id: 'ap-physics-c-em',
      slug: 'ap-physics-c-em',
      name: 'AP Physics C: Electricity & Magnetism',
      icon: '⚡',
      description: 'Dive deep into electrostatics, conductors, capacitors, electric circuits, magnetic fields, and electromagnetic induction with calculus.',
      order: 6,
      color: 'violet',
    },
    {
      id: 'ap-chemistry',
      slug: 'ap-chemistry',
      name: 'AP Chemistry',
      icon: '🧪',
      description: 'Explore atomic structure, chemical bonding, states of matter, reactions, kinetics, thermodynamics, and equilibrium.',
      order: 7,
      color: 'orange',
    },
    {
      id: 'ap-biology',
      slug: 'ap-biology',
      name: 'AP Biology',
      icon: '🧬',
      description: 'Study the chemistry of life, cells, genetics, evolution, ecology, and the diversity of organisms.',
      order: 8,
      color: 'rose',
    },
  ]

  for (const course of courses) {
    const result = await prisma.course.upsert({
      where: { slug: course.slug },
      update: course,
      create: course,
    })
    console.log(`✅ Created/updated course: ${result.name}`)
  }

  console.log('\n🎉 All courses seeded successfully!')
  console.log('📝 Note: These courses have no categories or topics yet.')
  console.log('   Add content by creating seed scripts for each course.\n')
}

seedCourses()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
