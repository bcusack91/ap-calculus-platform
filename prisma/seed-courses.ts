import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
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
      icon: '📈',
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
      id: 'ap-statistics',
      slug: 'ap-statistics',
      name: 'AP Statistics',
      icon: '📊',
      description: 'Learn data analysis, probability, sampling, inference, and statistical reasoning for the AP Statistics exam.',
      order: 13,
      color: 'pink',
    },
    {
      id: 'organic-chemistry',
      slug: 'organic-chemistry',
      name: 'Organic Chemistry',
      icon: '⚗️',
      description: 'Master organic molecular structure, functional groups, reaction mechanisms, synthesis strategies, and spectroscopy.',
      order: 14,
      color: 'lime',
    },
    {
      id: 'sat-prep',
      slug: 'sat-prep',
      name: 'SAT Prep',
      icon: '📝',
      description: 'Prepare for SAT Math and Reading/Writing with diagnostics, daily questions, and targeted practice.',
      order: 15,
      color: 'blue',
    },
    {
      id: 'act-prep',
      slug: 'act-prep',
      name: 'ACT Prep',
      icon: '📋',
      description: 'Prepare for ACT Math, English, Reading, and Science with focused drills and predictor tools.',
      order: 16,
      color: 'purple',
    },
    {
      id: 'mcat-prep',
      slug: 'mcat-prep',
      name: 'MCAT Prep',
      icon: '🏥',
      description: 'Study Chem/Phys, CARS, Bio/Biochem, and Psych/Soc with integrated diagnostics and question sets.',
      order: 17,
      color: 'teal',
    },
    {
      id: 'ap-human-geography',
      slug: 'ap-human-geography',
      name: 'AP Human Geography',
      icon: '🗺️',
      description: 'Study population, migration, culture, political geography, agriculture, and urbanization patterns worldwide.',
      order: 18,
      color: 'sky',
    },
    {
      id: 'ap-us-government',
      slug: 'ap-us-government',
      name: 'AP United States Government and Politics',
      icon: '🏛️',
      description: 'Explore the Constitution, branches of government, civil liberties, civil rights, and political participation.',
      order: 19,
      color: 'red',
    },
    {
      id: 'ap-world-history',
      slug: 'ap-world-history',
      name: 'AP World History: Modern',
      icon: '🌏',
      description: 'Trace global developments from c. 1200 CE to the present including trade networks, empires, and revolutions.',
      order: 20,
      color: 'amber',
    },
    {
      id: 'ap-us-history',
      slug: 'ap-us-history',
      name: 'AP United States History',
      icon: '🇺🇸',
      description: 'Study American history from pre-contact through the present including politics, economics, society, and culture.',
      order: 21,
      color: 'blue',
    },
    {
      id: 'ap-macroeconomics',
      slug: 'ap-macroeconomics',
      name: 'AP Macroeconomics',
      icon: '📈',
      description: 'Master GDP, inflation, unemployment, fiscal policy, monetary policy, and international trade.',
      order: 22,
      color: 'emerald',
    },
    {
      id: 'ap-microeconomics',
      slug: 'ap-microeconomics',
      name: 'AP Microeconomics',
      icon: '📉',
      description: 'Study supply and demand, consumer choice, production costs, market structures, and market failures.',
      order: 23,
      color: 'teal',
    },
    {
      id: 'ap-african-american-studies',
      slug: 'ap-african-american-studies',
      name: 'AP African American Studies',
      icon: '✊',
      description: 'Explore the history, culture, politics, and contributions of African Americans from origins to the present.',
      order: 24,
      color: 'yellow',
    },
    {
      id: 'ap-english-literature',
      slug: 'ap-english-literature',
      name: 'AP English Literature and Composition',
      icon: '📖',
      description: 'Analyze poetry, prose, and drama while developing skills in literary analysis and argumentative writing.',
      order: 25,
      color: 'rose',
    },
    {
      id: 'ap-english-language',
      slug: 'ap-english-language',
      name: 'AP English Language and Composition',
      icon: '✍️',
      description: 'Master rhetorical analysis, argumentation, synthesis, and composition using nonfiction texts.',
      order: 26,
      color: 'indigo',
    },
    {
      id: 'ap-environmental-science',
      slug: 'ap-environmental-science',
      name: 'AP Environmental Science',
      icon: '🌍',
      description: 'Study ecosystems, biodiversity, population dynamics, land and water use, energy, pollution, and sustainability.',
      order: 27,
      color: 'green',
    },
    {
      id: 'ap-computer-science-a',
      slug: 'ap-computer-science-a',
      name: 'AP Computer Science A',
      icon: '💻',
      description: 'Learn Java programming, object-oriented design, data structures, algorithms, and recursion.',
      order: 28,
      color: 'gray',
    },
    {
      id: 'ap-computer-science-principles',
      slug: 'ap-computer-science-principles',
      name: 'AP Computer Science Principles',
      icon: '🖥️',
      description: 'Explore the big ideas of computing: creativity, abstraction, data, algorithms, programming, the internet, and impact.',
      order: 29,
      color: 'cyan',
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
