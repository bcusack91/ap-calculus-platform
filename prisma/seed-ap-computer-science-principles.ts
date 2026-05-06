import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Computer Science Principles course, categories, and topics...')

  const course = await prisma.course.upsert({
    where: { slug: 'ap-computer-science-principles' },
    update: {},
    create: {
      slug: 'ap-computer-science-principles',
      name: 'AP Computer Science Principles',
      icon: '🌐',
      description: 'Explore computing concepts, data analysis, algorithms, programming, the internet, and societal impacts of computing.',
      order: 29,
      color: 'cyan',
    },
  })
  console.log(`✓ Course: ${course.name}`)

  // ─── Big Idea 1: Creative Development ───
  const bi1 = await prisma.category.upsert({
    where: { slug: 'csp-creative-development' },
    update: {},
    create: {
      slug: 'csp-creative-development',
      name: 'Creative Development',
      description: 'Collaboration, program design, and iterative development',
      order: 1,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Creative Development')

  await prisma.topic.upsert({
    where: { slug: 'csp-collaboration-development' },
    update: {},
    create: {
      slug: 'csp-collaboration-development',
      title: 'Collaboration & Program Development',
      description: 'Collaboration in computing, program design, iterative development, and debugging strategies',
      order: 1,
      categoryId: bi1.id,
      isPremium: false,
      textContent: `# 🤝 Collaboration & Program Development\n\nStudy collaboration techniques in computing (pair programming, code review), the iterative development process (plan, design, implement, test, refine), incremental and iterative development, program requirements and specifications, identifying and correcting errors (syntax, runtime, logic), and documentation through comments.`,
    },
  })

  // NOTE: The "Create Performance Task" topic was removed because it is a
  // College Board project deliverable, not a study topic. Students should
  // refer to College Board's official Create Task scoring guidelines.

  // ─── Big Idea 2: Data ───
  const bi2 = await prisma.category.upsert({
    where: { slug: 'csp-data' },
    update: {},
    create: {
      slug: 'csp-data',
      name: 'Data',
      description: 'Binary representation, data compression, and data analysis',
      order: 2,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Data')

  await prisma.topic.upsert({
    where: { slug: 'csp-binary-data' },
    update: {},
    create: {
      slug: 'csp-binary-data',
      title: 'Binary & Data Representation',
      description: 'Binary numbers, hexadecimal, data representation, overflow, and number systems',
      order: 1,
      categoryId: bi2.id,
      isPremium: false,
      textContent: `# 🔢 Binary & Data Representation\n\nStudy binary number system (base 2), converting between binary, decimal, and hexadecimal, representing data digitally (text with ASCII/Unicode, images with pixels and RGB, audio with sampling), data abstraction, bits and bytes, integer overflow, and roundoff errors.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'csp-data-compression-analysis' },
    update: {},
    create: {
      slug: 'csp-data-compression-analysis',
      title: 'Data Compression & Analysis',
      description: 'Lossless vs lossy compression, metadata, data cleaning, visualization, and extracting information',
      order: 2,
      categoryId: bi2.id,
      isPremium: false,
      textContent: `# 📊 Data Compression & Analysis\n\nExplore data compression (lossless vs lossy), file sizes and storage, metadata, collecting and cleaning data, data sets, filtering and transforming data, visualizations (charts, graphs, tables), identifying trends and patterns, making predictions, and the limitations of data analysis (bias, incomplete data).`,
    },
  })

  // ─── Big Idea 3: Algorithms & Programming ───
  const bi3 = await prisma.category.upsert({
    where: { slug: 'csp-algorithms-programming' },
    update: {},
    create: {
      slug: 'csp-algorithms-programming',
      name: 'Algorithms & Programming',
      description: 'Variables, control structures, procedures, lists, and algorithm efficiency',
      order: 3,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Algorithms & Programming')

  await prisma.topic.upsert({
    where: { slug: 'csp-variables-control' },
    update: {},
    create: {
      slug: 'csp-variables-control',
      title: 'Variables & Control Structures',
      description: 'Variables, data types, assignment, sequencing, selection (if/else), and iteration (loops)',
      order: 1,
      categoryId: bi3.id,
      isPremium: false,
      textContent: `# 🔀 Variables & Control Structures\n\nStudy variables and data types (numbers, strings, booleans), assignment and expressions, sequencing (executing statements in order), selection (if, if-else, nested conditionals), iteration (loops, repeat-until, for-each), combining control structures, Boolean expressions and operators (AND, OR, NOT), and nested conditionals.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'csp-procedures-lists' },
    update: {},
    create: {
      slug: 'csp-procedures-lists',
      title: 'Procedures & Lists',
      description: 'Procedures with parameters, return values, lists, list operations, and managing complexity',
      order: 2,
      categoryId: bi3.id,
      isPremium: false,
      textContent: `# 📋 Procedures & Lists\n\nMaster procedures (functions): defining procedures with parameters, return values, calling procedures, procedural abstraction, managing complexity, lists (arrays) and list operations (access, insert, append, remove, length), traversing lists with loops, searching lists (linear search), and using lists to manage data.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'csp-algorithms' },
    update: {},
    create: {
      slug: 'csp-algorithms',
      title: 'Algorithms',
      description: 'Algorithm design, efficiency, searching, sorting, and undecidable problems',
      order: 3,
      categoryId: bi3.id,
      isPremium: false,
      textContent: `# ⚙️ Algorithms\n\nExplore algorithm design and analysis: expressing algorithms in pseudocode and flowcharts, evaluating algorithms for correctness, comparing algorithm efficiency (reasonable vs unreasonable time), linear search vs binary search, sorting algorithms, simulations, heuristic and optimization problems, algorithmic bias, and undecidable problems (Halting Problem).`,
    },
  })

  // ─── Big Idea 4: Computing Systems & Networks ───
  const bi4 = await prisma.category.upsert({
    where: { slug: 'csp-computing-systems-networks' },
    update: {},
    create: {
      slug: 'csp-computing-systems-networks',
      name: 'Computing Systems & Networks',
      description: 'The internet, protocols, fault tolerance, and cybersecurity',
      order: 4,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Computing Systems & Networks')

  await prisma.topic.upsert({
    where: { slug: 'csp-internet-protocols' },
    update: {},
    create: {
      slug: 'csp-internet-protocols',
      title: 'The Internet & Protocols',
      description: 'How the internet works, TCP/IP, DNS, HTTP, routing, and packets',
      order: 1,
      categoryId: bi4.id,
      isPremium: false,
      textContent: `# 🌐 The Internet & Protocols\n\nStudy how the internet works: hardware (routers, switches, servers), the Internet Protocol (IP) addressing (IPv4, IPv6), TCP/IP model, DNS (Domain Name System), HTTP/HTTPS, data packets and routing, bandwidth, latency, and how data travels across networks using protocols and layers.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'csp-fault-tolerance-security' },
    update: {},
    create: {
      slug: 'csp-fault-tolerance-security',
      title: 'Fault Tolerance & Cybersecurity',
      description: 'Network redundancy, fault tolerance, encryption, authentication, and security threats',
      order: 2,
      categoryId: bi4.id,
      isPremium: false,
      textContent: `# 🔒 Fault Tolerance & Cybersecurity\n\nExplore fault tolerance (redundancy, multiple paths), parallel and distributed computing, cybersecurity concepts: encryption (symmetric vs asymmetric, public/private keys), digital certificates, authentication, phishing, malware, DDoS attacks, firewalls, and secure practices for protecting data and systems.`,
    },
  })

  // ─── Big Idea 5: Impact of Computing ───
  const bi5 = await prisma.category.upsert({
    where: { slug: 'csp-impact-of-computing' },
    update: {},
    create: {
      slug: 'csp-impact-of-computing',
      name: 'Impact of Computing',
      description: 'Digital divide, bias, crowdsourcing, legal/ethical issues, and safe computing',
      order: 5,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Impact of Computing')

  await prisma.topic.upsert({
    where: { slug: 'csp-social-ethical-impacts' },
    update: {},
    create: {
      slug: 'csp-social-ethical-impacts',
      title: 'Social & Ethical Impacts',
      description: 'Digital divide, computing bias, intellectual property, privacy, crowdsourcing, and citizen science',
      order: 1,
      categoryId: bi5.id,
      isPremium: false,
      textContent: `# 🌍 Social & Ethical Impacts\n\nStudy the beneficial and harmful effects of computing: digital divide (access and equity), computing bias in algorithms and data, intellectual property (Creative Commons, open source, copyright), privacy and data collection (PII, tracking, GDPR), crowdsourcing and citizen science, legal and ethical concerns, and computing innovations that transform society.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'csp-safe-computing' },
    update: {},
    create: {
      slug: 'csp-safe-computing',
      title: 'Safe Computing',
      description: 'Personal security, authentication, encryption, and protecting online identity',
      order: 2,
      categoryId: bi5.id,
      isPremium: false,
      textContent: `# 🛡️ Safe Computing\n\nLearn about safe computing practices: strong passwords and multi-factor authentication, recognizing phishing and social engineering, protecting PII (personally identifiable information), understanding cookies and browser tracking, encryption for secure communication, responsible use of technology, and digital footprint awareness.`,
    },
  })

  console.log('\n🎉 AP Computer Science Principles seeding complete!')
  console.log('  📚 5 categories, 12 topics created')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
