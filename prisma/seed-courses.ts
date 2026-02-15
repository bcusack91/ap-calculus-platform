import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seedCourses() {
  console.log('🌱 Seeding remaining AP courses...\n')

  const courses = [
    {
      id: 'algebra-1',
      slug: 'algebra-1',
      name: 'Algebra 1',
      description: 'Master linear equations, inequalities, functions, polynomials, and quadratic equations.',
      order: 0,
      icon: '🔢',
      color: 'sky',
    },
    {
      id: 'geometry',
      slug: 'geometry',
      name: 'Geometry',
      description: 'Explore points, lines, angles, triangles, circles, area, volume, and geometric proofs.',
      order: 1,
      icon: '📐',
      color: 'emerald',
    },
    {
      id: 'algebra-2',
      slug: 'algebra-2',
      name: 'Algebra 2',
      description: 'Study advanced functions, polynomials, exponentials, logarithms, rational expressions, and sequences.',
      order: 2,
      icon: '🔣',
      color: 'cyan',
    },
    {
      id: 'ap-precalculus',
      slug: 'ap-precalculus',
      name: 'AP Precalculus',
      description: 'Build a strong foundation in functions, trigonometry, vectors, matrices, and complex numbers to prepare for calculus.',
      order: 3,
      icon: '�',
      color: 'blue',
    },
    {
      id: 'ap-calculus-ab',
      slug: 'ap-calculus-ab',
      name: 'AP Calculus AB',
      description: 'Master limits, derivatives, integrals, and their applications for the AP Calculus AB exam.',
      order: 4,
      icon: '∫',
      color: 'purple',
    },
    {
      id: 'ap-calculus-bc',
      slug: 'ap-calculus-bc',
      name: 'AP Calculus BC',
      description: 'Extend your calculus knowledge with advanced integration, sequences, series, parametric/polar calculus, and vector-valued functions.',
      order: 5,
      icon: '∬',
      color: 'violet',
    },
    {
      id: 'ap-physics-1',
      slug: 'ap-physics-1',
      name: 'AP Physics 1',
      description: 'Explore mechanics, waves, sound, and basic circuits in this algebra-based physics course.',
      order: 6,
      icon: '⚛️',
      color: 'green',
    },
    {
      id: 'ap-physics-2',
      slug: 'ap-physics-2',
      name: 'AP Physics 2',
      icon: '🔬',
      description: 'Study fluids, thermodynamics, electricity, magnetism, optics, and modern physics using algebra-based approaches.',
      order: 7,
      color: 'teal',
    },
    {
      id: 'ap-physics-c-mechanics',
      slug: 'ap-physics-c-mechanics',
      name: 'AP Physics C: Mechanics',
      icon: '🎯',
      description: 'Master calculus-based mechanics including kinematics, energy, momentum, rotation, and oscillations.',
      order: 8,
      color: 'indigo',
    },
    {
      id: 'ap-physics-c-em',
      slug: 'ap-physics-c-em',
      name: 'AP Physics C: Electricity & Magnetism',
      icon: '⚡',
      description: 'Dive deep into electrostatics, conductors, capacitors, electric circuits, magnetic fields, and electromagnetic induction with calculus.',
      order: 9,
      color: 'violet',
    },
    {
      id: 'ap-chemistry',
      slug: 'ap-chemistry',
      name: 'AP Chemistry',
      icon: '🧪',
      description: 'Explore atomic structure, chemical bonding, states of matter, reactions, kinetics, thermodynamics, and equilibrium.',
      order: 10,
      color: 'orange',
    },
    {
      id: 'ap-biology',
      slug: 'ap-biology',
      name: 'AP Biology',
      icon: '🧬',
      description: 'Study the chemistry of life, cells, genetics, evolution, ecology, and the diversity of organisms.',
      order: 11,
      color: 'rose',
    },
    {
      id: 'ap-psychology',
      slug: 'ap-psychology',
      name: 'AP Psychology',
      icon: '🧠',
      description: 'Explore the science of behavior and mental processes including cognition, development, personality, and disorders.',
      order: 12,
      color: 'amber',
    },
    {
      id: 'organic-chemistry',
      slug: 'organic-chemistry',
      name: 'Organic Chemistry',
      icon: '⚗️',
      description: 'Master organic molecular structure, functional groups, reaction mechanisms, synthesis strategies, and spectroscopy.',
      order: 13,
      color: 'lime',
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
