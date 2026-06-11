import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP English Language and Composition course, categories, and topics...')

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

  // ─── Unit 1: Rhetorical Situation ───
  const unit1 = await prisma.category.upsert({
    where: { slug: 'englang-rhetorical-situation' },
    update: {},
    create: {
      slug: 'englang-rhetorical-situation',
      name: 'Rhetorical Situation',
      description: 'Purpose, audience, context, exigence, and the rhetorical triangle',
      order: 1,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Rhetorical Situation')

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

  await prisma.topic.upsert({
    where: { slug: 'englang-claims-evidence' },
    update: {},
    create: {
      slug: 'englang-claims-evidence',
      title: 'Claims, Evidence & Reasoning',
      description: 'Types of claims, evidence selection, logical reasoning, and the Toulmin model',
      order: 2,
      categoryId: unit1.id,
      isPremium: false,
      textContent: `# 💡 Claims, Evidence & Reasoning\n\nExplore types of claims (fact, value, policy), selecting and integrating evidence (statistics, expert testimony, anecdotes, examples), logical reasoning, the Toulmin model (claim, grounds, warrant, backing, qualifier, rebuttal), and building a line of reasoning.`,
    },
  })

  // ─── Unit 2: Claims & Evidence ───
  const unit2 = await prisma.category.upsert({
    where: { slug: 'englang-appeals-strategies' },
    update: {},
    create: {
      slug: 'englang-appeals-strategies',
      name: 'Rhetorical Appeals & Strategies',
      description: 'Ethos, pathos, logos, rhetorical devices, and persuasive strategies',
      order: 2,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Rhetorical Appeals & Strategies')

  await prisma.topic.upsert({
    where: { slug: 'englang-ethos-pathos-logos' },
    update: {},
    create: {
      slug: 'englang-ethos-pathos-logos',
      title: 'Ethos, Pathos & Logos',
      description: 'Ethical, emotional, and logical appeals, credibility, and audience engagement',
      order: 1,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# 🎯 Ethos, Pathos & Logos\n\nMaster rhetorical appeals: ethos (credibility, authority, character), pathos (emotion, values, beliefs), logos (logic, evidence, reasoning). Analyze how writers establish credibility, evoke emotional responses, and construct logical arguments to persuade.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'englang-rhetorical-devices' },
    update: {},
    create: {
      slug: 'englang-rhetorical-devices',
      title: 'Rhetorical Devices',
      description: 'Anaphora, antithesis, parallelism, rhetorical questions, juxtaposition, and more',
      order: 2,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# 🔧 Rhetorical Devices\n\nStudy key rhetorical devices: anaphora, epistrophe, antithesis, parallelism, chiasmus, rhetorical questions, juxtaposition, allusion, analogy, concession and rebuttal, understatement, overstatement, and how strategic use of language creates persuasive effects.`,
    },
  })

  // ─── Unit 3: Organization & Reasoning ───
  const unit3 = await prisma.category.upsert({
    where: { slug: 'englang-organization' },
    update: {},
    create: {
      slug: 'englang-organization',
      name: 'Organization & Reasoning',
      description: 'Essay structure, logical fallacies, counterarguments, and transitions',
      order: 3,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Organization & Reasoning')

  await prisma.topic.upsert({
    where: { slug: 'englang-argument-structure' },
    update: {},
    create: {
      slug: 'englang-argument-structure',
      title: 'Argument Structure & Organization',
      description: 'Thesis statements, topic sentences, transitions, concession/rebuttal, and essay organization patterns',
      order: 1,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# 🏗️ Argument Structure & Organization\n\nMaster thesis development (defensible, specific, arguable), topic sentences, transitional strategies, organizational patterns (chronological, cause-effect, compare-contrast, problem-solution), concession and rebuttal, qualifying claims, and building coherent arguments.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'englang-logical-fallacies' },
    update: {},
    create: {
      slug: 'englang-logical-fallacies',
      title: 'Logical Fallacies',
      description: 'Ad hominem, straw man, slippery slope, false dilemma, appeal to authority, and hasty generalization',
      order: 2,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# ⚠️ Logical Fallacies\n\nIdentify and analyze common logical fallacies: ad hominem, straw man, slippery slope, false dilemma (either/or), appeal to authority, appeal to tradition, hasty generalization, red herring, circular reasoning, equivocation, and bandwagon. Understand how to avoid them in your own writing and identify them in others'.`,
    },
  })

  // ─── Unit 4: Style & Tone ───
  const unit4 = await prisma.category.upsert({
    where: { slug: 'englang-style-tone' },
    update: {},
    create: {
      slug: 'englang-style-tone',
      name: 'Style, Tone & Diction',
      description: 'Word choice, syntax, tone, voice, and stylistic analysis',
      order: 4,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Style, Tone & Diction')

  await prisma.topic.upsert({
    where: { slug: 'englang-diction-syntax' },
    update: {},
    create: {
      slug: 'englang-diction-syntax',
      title: 'Diction & Syntax',
      description: 'Word choice, connotation, denotation, sentence structure, periodic and cumulative sentences, and voice',
      order: 1,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# 📝 Diction & Syntax\n\nStudy diction (formal, informal, colloquial, technical), connotation vs denotation, abstract vs concrete language, syntax (sentence length, structure, types), periodic vs cumulative sentences, active vs passive voice, and how stylistic choices create tone and affect meaning.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'englang-tone-voice-analysis' },
    update: {},
    create: {
      slug: 'englang-tone-voice-analysis',
      title: 'Tone & Voice Analysis',
      description: 'Identifying tone, shifts in tone, the writer\'s voice, irony, satire, and humor',
      order: 2,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# 🎭 Tone & Voice Analysis\n\nExplore how to identify and describe tone (attitude toward subject/audience), tonal shifts, the writer's voice and persona, irony (verbal, situational, dramatic), satire (Horatian vs Juvenalian), sarcasm, humor, and how tone contributes to purpose.`,
    },
  })

  // ─── Unit 5: Synthesis & Argumentation ───
  const unit5 = await prisma.category.upsert({
    where: { slug: 'englang-synthesis' },
    update: {},
    create: {
      slug: 'englang-synthesis',
      name: 'Synthesis & Argumentation',
      description: 'Synthesizing multiple sources, the AP exam essay types, and revision',
      order: 5,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Synthesis & Argumentation')

  await prisma.topic.upsert({
    where: { slug: 'englang-synthesis-essay' },
    update: {},
    create: {
      slug: 'englang-synthesis-essay',
      title: 'The Synthesis Essay',
      description: 'Reading multiple sources, identifying perspectives, integrating evidence, and crafting a synthesis argument',
      order: 1,
      categoryId: unit5.id,
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
      categoryId: unit5.id,
      isPremium: false,
      textContent: `# ✍️ Rhetorical Analysis & Argument Essays\n\nMaster the rhetorical analysis essay (analyzing how a writer uses rhetorical strategies to achieve purpose) and the argument essay (taking a position on a debatable topic). Develop defensible theses, select compelling evidence, write sophisticated commentary, and manage time effectively on the AP exam.`,
    },
  })

  console.log('\n🎉 AP English Language and Composition seeding complete!')
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
