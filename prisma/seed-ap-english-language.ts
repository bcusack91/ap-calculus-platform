import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP English Language and Composition (CED-aligned, 9 units)...')

  const course = await prisma.course.upsert({
    where: { slug: 'ap-english-language' },
    update: {},
    create: {
      slug: 'ap-english-language',
      name: 'AP English Language and Composition',
      icon: '✍️',
      description: 'Master rhetorical analysis, argumentation, synthesis, and composition using nonfiction texts.',
      order: 26,
      color: 'indigo',
    },
  })
  console.log(`✓ Course: ${course.name}`)

  // ─── Unit 1: Rhetorical Situation: Reading ───
  const unit1 = await prisma.category.upsert({
    where: { slug: 'englang-rhetorical-situation' },
    update: { name: 'Rhetorical Situation: Reading', description: 'Identifying purpose, audience, context, and exigence in texts', order: 1 },
    create: {
      slug: 'englang-rhetorical-situation',
      name: 'Rhetorical Situation: Reading',
      description: 'Identifying purpose, audience, context, and exigence in texts',
      order: 1,
      courseId: course.id,
    },
  })
  console.log('  ✓ Unit 1: Rhetorical Situation: Reading')

  await prisma.topic.upsert({
    where: { slug: 'englang-intro-rhetoric' },
    update: {},
    create: {
      slug: 'englang-intro-rhetoric',
      title: 'Introduction to Rhetoric',
      description: 'The rhetorical situation, SOAPSTone, purpose, audience, context, and exigence',
      order: 1,
      categoryId: unit1.id,
      isPremium: false,
      textContent: `# ✍️ Introduction to Rhetoric\n\nStudy the rhetorical situation: speaker/writer, occasion, audience, purpose, subject, and tone (SOAPSTone). Understand exigence (the urgency prompting communication), the rhetorical triangle (ethos, pathos, logos), and how context shapes meaning.`,
    },
  })

  // ─── Unit 2: Rhetorical Situation: Writing ───
  const unit2 = await prisma.category.upsert({
    where: { slug: 'englang-rhetorical-situation-writing' },
    update: { name: 'Rhetorical Situation: Writing', description: 'Making rhetorical choices as a writer based on purpose and audience', order: 2 },
    create: {
      slug: 'englang-rhetorical-situation-writing',
      name: 'Rhetorical Situation: Writing',
      description: 'Making rhetorical choices as a writer based on purpose and audience',
      order: 2,
      courseId: course.id,
    },
  })
  console.log('  ✓ Unit 2: Rhetorical Situation: Writing')

  await prisma.topic.upsert({
    where: { slug: 'englang-writing-for-audience' },
    update: {},
    create: {
      slug: 'englang-writing-for-audience',
      title: 'Writing for Audience & Purpose',
      description: 'Adapting tone, diction, and structure to suit audience and purpose',
      order: 1,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# 🎯 Writing for Audience & Purpose\n\nLearn to make deliberate rhetorical choices: adapting tone, register, and formality for different audiences, selecting evidence appropriate to your purpose, establishing your own credibility as a writer, and crafting introductions that address the rhetorical situation.`,
    },
  })

  // ─── Unit 3: Claims & Evidence: Reading ───
  const unit3 = await prisma.category.upsert({
    where: { slug: 'englang-claims-evidence-reading' },
    update: { name: 'Claims & Evidence: Reading', description: 'Identifying and evaluating claims, evidence, and reasoning in texts', order: 3 },
    create: {
      slug: 'englang-claims-evidence-reading',
      name: 'Claims & Evidence: Reading',
      description: 'Identifying and evaluating claims, evidence, and reasoning in texts',
      order: 3,
      courseId: course.id,
    },
  })
  console.log('  ✓ Unit 3: Claims & Evidence: Reading')

  await prisma.topic.upsert({
    where: { slug: 'englang-claims-evidence' },
    update: {},
    create: {
      slug: 'englang-claims-evidence',
      title: 'Claims, Evidence & Reasoning',
      description: 'Types of claims, evidence selection, logical reasoning, and the Toulmin model',
      order: 1,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# 💡 Claims, Evidence & Reasoning\n\nExplore types of claims (fact, value, policy), selecting and integrating evidence (statistics, expert testimony, anecdotes, examples), logical reasoning, the Toulmin model (claim, grounds, warrant, backing, qualifier, rebuttal), and building a line of reasoning.`,
    },
  })

  // ─── Unit 4: Claims & Evidence: Writing ───
  const unit4 = await prisma.category.upsert({
    where: { slug: 'englang-claims-evidence-writing' },
    update: { name: 'Claims & Evidence: Writing', description: 'Developing claims, selecting evidence, and constructing lines of reasoning', order: 4 },
    create: {
      slug: 'englang-claims-evidence-writing',
      name: 'Claims & Evidence: Writing',
      description: 'Developing claims, selecting evidence, and constructing lines of reasoning',
      order: 4,
      courseId: course.id,
    },
  })
  console.log('  ✓ Unit 4: Claims & Evidence: Writing')

  await prisma.topic.upsert({
    where: { slug: 'englang-developing-arguments' },
    update: {},
    create: {
      slug: 'englang-developing-arguments',
      title: 'Developing Arguments',
      description: 'Writing defensible thesis statements, selecting relevant evidence, and organizing a line of reasoning',
      order: 1,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# 📝 Developing Arguments\n\nPractice writing defensible thesis statements, selecting and embedding relevant evidence, developing commentary that connects evidence to claims, organizing a line of reasoning with topic sentences, and strengthening arguments through concession and rebuttal.`,
    },
  })

  // ─── Unit 5: Reasoning & Organization: Reading ───
  const unit5 = await prisma.category.upsert({
    where: { slug: 'englang-reasoning-org-reading' },
    update: { name: 'Reasoning & Organization: Reading', description: 'Analyzing how writers structure arguments and use reasoning strategies', order: 5 },
    create: {
      slug: 'englang-reasoning-org-reading',
      name: 'Reasoning & Organization: Reading',
      description: 'Analyzing how writers structure arguments and use reasoning strategies',
      order: 5,
      courseId: course.id,
    },
  })
  console.log('  ✓ Unit 5: Reasoning & Organization: Reading')

  await prisma.topic.upsert({
    where: { slug: 'englang-argument-structure' },
    update: {},
    create: {
      slug: 'englang-argument-structure',
      title: 'Argument Structure & Organization',
      description: 'Analyzing organizational patterns, transitions, concession/rebuttal, and logical fallacies',
      order: 1,
      categoryId: unit5.id,
      isPremium: false,
      textContent: `# 🏗️ Argument Structure & Organization\n\nAnalyze how writers organize arguments: organizational patterns (chronological, cause-effect, compare-contrast, problem-solution), transitions and cohesion, inductive vs deductive reasoning, concession and rebuttal, qualifying claims, and identifying logical fallacies.`,
    },
  })

  // ─── Unit 6: Reasoning & Organization: Writing ───
  const unit6 = await prisma.category.upsert({
    where: { slug: 'englang-reasoning-org-writing' },
    update: { name: 'Reasoning & Organization: Writing', description: 'Structuring essays, using transitions, and organizing lines of reasoning', order: 6 },
    create: {
      slug: 'englang-reasoning-org-writing',
      name: 'Reasoning & Organization: Writing',
      description: 'Structuring essays, using transitions, and organizing lines of reasoning',
      order: 6,
      courseId: course.id,
    },
  })
  console.log('  ✓ Unit 6: Reasoning & Organization: Writing')

  await prisma.topic.upsert({
    where: { slug: 'englang-logical-fallacies' },
    update: {},
    create: {
      slug: 'englang-logical-fallacies',
      title: 'Logical Fallacies & Effective Reasoning',
      description: 'Avoiding fallacies, qualifying claims, integrating counterarguments, and writing effective transitions',
      order: 1,
      categoryId: unit6.id,
      isPremium: false,
      textContent: `# ⚠️ Logical Fallacies & Effective Reasoning\n\nIdentify and avoid logical fallacies (ad hominem, straw man, slippery slope, false dilemma, hasty generalization, red herring, circular reasoning). Practice qualifying claims, integrating counterarguments, and writing effective transitions between ideas.`,
    },
  })

  // ─── Unit 7: Style: Reading ───
  const unit7 = await prisma.category.upsert({
    where: { slug: 'englang-style-reading' },
    update: { name: 'Style: Reading', description: 'Analyzing how diction, syntax, and tone create rhetorical effects', order: 7 },
    create: {
      slug: 'englang-style-reading',
      name: 'Style: Reading',
      description: 'Analyzing how diction, syntax, and tone create rhetorical effects',
      order: 7,
      courseId: course.id,
    },
  })
  console.log('  ✓ Unit 7: Style: Reading')

  await prisma.topic.upsert({
    where: { slug: 'englang-diction-syntax' },
    update: {},
    create: {
      slug: 'englang-diction-syntax',
      title: 'Diction & Syntax Analysis',
      description: 'Analyzing word choice, connotation, sentence structure, and their rhetorical effects',
      order: 1,
      categoryId: unit7.id,
      isPremium: false,
      textContent: `# 📝 Diction & Syntax Analysis\n\nStudy how authors' stylistic choices create rhetorical effects: diction (formal, informal, colloquial, technical), connotation vs denotation, abstract vs concrete language, syntax (sentence length, structure, types), periodic vs cumulative sentences, and active vs passive voice.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'englang-ethos-pathos-logos' },
    update: {},
    create: {
      slug: 'englang-ethos-pathos-logos',
      title: 'Rhetorical Appeals & Devices',
      description: 'Ethos, pathos, logos, anaphora, antithesis, parallelism, and rhetorical questions',
      order: 2,
      categoryId: unit7.id,
      isPremium: false,
      textContent: `# 🎯 Rhetorical Appeals & Devices\n\nMaster rhetorical appeals (ethos, pathos, logos) and devices: anaphora, epistrophe, antithesis, parallelism, chiasmus, rhetorical questions, juxtaposition, allusion, analogy, irony, and how writers deploy these strategically to achieve their purpose.`,
    },
  })

  // ─── Unit 8: Style: Writing ───
  const unit8 = await prisma.category.upsert({
    where: { slug: 'englang-style-writing' },
    update: { name: 'Style: Writing', description: 'Developing your own voice, style, and rhetorical sophistication', order: 8 },
    create: {
      slug: 'englang-style-writing',
      name: 'Style: Writing',
      description: 'Developing your own voice, style, and rhetorical sophistication',
      order: 8,
      courseId: course.id,
    },
  })
  console.log('  ✓ Unit 8: Style: Writing')

  await prisma.topic.upsert({
    where: { slug: 'englang-tone-voice-analysis' },
    update: {},
    create: {
      slug: 'englang-tone-voice-analysis',
      title: 'Tone, Voice & Stylistic Choices',
      description: 'Developing your own writer\'s voice, varying sentence structure, and crafting effective prose',
      order: 1,
      categoryId: unit8.id,
      isPremium: false,
      textContent: `# 🎭 Tone, Voice & Stylistic Choices\n\nDevelop your writer's voice: varying sentence structure for effect, choosing precise diction, establishing and shifting tone deliberately, using irony and satire, crafting vivid descriptions, and revising for clarity, concision, and rhetorical impact.`,
    },
  })

  // ─── Unit 9: Synthesis, Argumentation & the AP Exam ───
  const unit9 = await prisma.category.upsert({
    where: { slug: 'englang-synthesis' },
    update: { name: 'Synthesis, Argumentation & the AP Exam', description: 'The three AP Lang essay types and exam preparation', order: 9 },
    create: {
      slug: 'englang-synthesis',
      name: 'Synthesis, Argumentation & the AP Exam',
      description: 'The three AP Lang essay types and exam preparation',
      order: 9,
      courseId: course.id,
    },
  })
  console.log('  ✓ Unit 9: Synthesis, Argumentation & the AP Exam')

  await prisma.topic.upsert({
    where: { slug: 'englang-synthesis-essay' },
    update: {},
    create: {
      slug: 'englang-synthesis-essay',
      title: 'The Synthesis Essay',
      description: 'Reading multiple sources, identifying perspectives, integrating evidence, and crafting a synthesis argument',
      order: 1,
      categoryId: unit9.id,
      isPremium: false,
      textContent: `# 📋 The Synthesis Essay\n\nMaster the AP Lang synthesis essay: reading and annotating multiple sources (text, visual, quantitative), identifying perspectives and biases, integrating at least three sources, attributing sources properly, and crafting a coherent argument that synthesizes diverse viewpoints.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'englang-rhetorical-analysis-essay' },
    update: {},
    create: {
      slug: 'englang-rhetorical-analysis-essay',
      title: 'Rhetorical Analysis & Argument Essays',
      description: 'Analyzing rhetorical choices, writing persuasive arguments, and AP exam strategies',
      order: 2,
      categoryId: unit9.id,
      isPremium: false,
      textContent: `# ✍️ Rhetorical Analysis & Argument Essays\n\nMaster the rhetorical analysis essay (analyzing how a writer uses rhetorical strategies to achieve purpose) and the argument essay (taking a position on a debatable topic). Develop defensible theses, select compelling evidence, write sophisticated commentary, and manage time effectively on the AP exam.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'englang-rhetorical-devices' },
    update: {},
    create: {
      slug: 'englang-rhetorical-devices',
      title: 'Rhetorical Devices',
      description: 'Anaphora, antithesis, parallelism, rhetorical questions, juxtaposition, and more',
      order: 3,
      categoryId: unit9.id,
      isPremium: false,
      textContent: `# 🔧 Rhetorical Devices\n\nStudy key rhetorical devices: anaphora, epistrophe, antithesis, parallelism, chiasmus, rhetorical questions, juxtaposition, allusion, analogy, concession and rebuttal, understatement, overstatement, and how strategic use of language creates persuasive effects.`,
    },
  })

  // ─── Clean up old merged categories ───
  for (const oldSlug of ['englang-appeals-strategies', 'englang-organization', 'englang-style-tone']) {
    const old = await prisma.category.findUnique({ where: { slug: oldSlug } })
    if (old) {
      // Move topics to closest matching new unit before deleting
      const targetId = oldSlug === 'englang-appeals-strategies' ? unit7.id
        : oldSlug === 'englang-organization' ? unit5.id
        : unit7.id
      await prisma.topic.updateMany({
        where: { categoryId: old.id },
        data: { categoryId: targetId },
      })
      await prisma.category.delete({ where: { slug: oldSlug } })
      console.log(`  🧹 Removed old "${oldSlug}" category`)
    }
  }

  console.log('\n🎉 AP English Language and Composition seeding complete!')
  console.log('  📚 9 units, 14 topics created (CED-aligned Reading/Writing pairs)')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
