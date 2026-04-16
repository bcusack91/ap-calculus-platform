import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP English Literature and Composition course, categories, and topics...')

  const course = await prisma.course.upsert({
    where: { slug: 'ap-english-literature' },
    update: {},
    create: {
      slug: 'ap-english-literature',
      name: 'AP English Literature and Composition',
      icon: '📖',
      description: 'Analyze poetry, prose, and drama while developing skills in literary analysis and argumentative writing.',
      order: 25,
      color: 'rose',
    },
  })
  console.log(`✓ Course: ${course.name}`)

  // ─── Unit 1: Short Fiction I ───
  const unit1 = await prisma.category.upsert({
    where: { slug: 'englit-short-fiction-1' },
    update: {},
    create: {
      slug: 'englit-short-fiction-1',
      name: 'Short Fiction I',
      description: 'Character, setting, narration, and point of view in short fiction',
      order: 1,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Short Fiction I')

  await prisma.topic.upsert({
    where: { slug: 'englit-character-setting' },
    update: {},
    create: {
      slug: 'englit-character-setting',
      title: 'Character & Setting',
      description: 'Character types, characterization methods, setting as context, and the relationship between character and environment',
      order: 1,
      categoryId: unit1.id,
      isPremium: false,
      textContent: `# 📖 Character & Setting\n\nStudy character types (round, flat, static, dynamic), direct vs indirect characterization, protagonist and antagonist, setting as physical and historical context, how setting shapes character, and the significance of time and place in fiction.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'englit-narration-pov' },
    update: {},
    create: {
      slug: 'englit-narration-pov',
      title: 'Narration & Point of View',
      description: 'First-person, third-person limited and omniscient, unreliable narrator, and narrative structure',
      order: 2,
      categoryId: unit1.id,
      isPremium: false,
      textContent: `# 👁️ Narration & Point of View\n\nExplore types of narrators (first-person, second-person, third-person limited, third-person omniscient), the unreliable narrator, stream of consciousness, narrative structure (chronological, in medias res, frame narrative, flashback), and how point of view shapes meaning.`,
    },
  })

  // ─── Unit 2: Poetry I ───
  const unit2 = await prisma.category.upsert({
    where: { slug: 'englit-poetry-1' },
    update: {},
    create: {
      slug: 'englit-poetry-1',
      name: 'Poetry I',
      description: 'Structure, form, figurative language, and imagery in poetry',
      order: 2,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Poetry I')

  await prisma.topic.upsert({
    where: { slug: 'englit-poetic-structure-form' },
    update: {},
    create: {
      slug: 'englit-poetic-structure-form',
      title: 'Poetic Structure & Form',
      description: 'Stanza, meter, rhyme scheme, sonnets, free verse, enjambment, and caesura',
      order: 1,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# 📝 Poetic Structure & Form\n\nStudy stanza types (couplet, tercet, quatrain), meter (iambic pentameter, trochaic, anapestic, dactylic), rhyme schemes, fixed forms (Shakespearean sonnet, Petrarchan sonnet, villanelle, haiku), free verse, enjambment, caesura, and end-stopped lines.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'englit-figurative-language' },
    update: {},
    create: {
      slug: 'englit-figurative-language',
      title: 'Figurative Language & Imagery',
      description: 'Simile, metaphor, personification, symbolism, imagery, and sensory language',
      order: 2,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# 🎨 Figurative Language & Imagery\n\nMaster figurative language: simile, metaphor, extended metaphor, personification, apostrophe, hyperbole, understatement, oxymoron, paradox, synecdoche, metonymy, symbolism, allegory, and the five types of imagery (visual, auditory, tactile, olfactory, gustatory).`,
    },
  })

  // ─── Unit 3: Short Fiction II / Longer Fiction ───
  const unit3 = await prisma.category.upsert({
    where: { slug: 'englit-longer-fiction' },
    update: {},
    create: {
      slug: 'englit-longer-fiction',
      name: 'Longer Fiction & Drama I',
      description: 'Plot, conflict, theme, and dramatic structure in novels and plays',
      order: 3,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Longer Fiction & Drama I')

  await prisma.topic.upsert({
    where: { slug: 'englit-plot-conflict-theme' },
    update: {},
    create: {
      slug: 'englit-plot-conflict-theme',
      title: 'Plot, Conflict & Theme',
      description: 'Plot structure, types of conflict, theme vs subject, motif, and how authors develop thematic ideas',
      order: 1,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# 📚 Plot, Conflict & Theme\n\nStudy plot structure (exposition, rising action, climax, falling action, resolution), types of conflict (person vs person/self/society/nature/fate), the distinction between theme and subject, motif, recurring imagery, and how authors develop thematic complexity through narrative choices.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'englit-dramatic-structure' },
    update: {},
    create: {
      slug: 'englit-dramatic-structure',
      title: 'Dramatic Structure',
      description: 'Elements of drama: dialogue, monologue, soliloquy, staging, tragedy, comedy, and dramatic irony',
      order: 2,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# 🎭 Dramatic Structure\n\nExplore the elements of drama: dialogue, monologue, soliloquy, aside, stage directions, acts and scenes, tragedy (tragic hero, hamartia, catharsis), comedy, tragicomedy, dramatic irony, and the three unities (time, place, action).`,
    },
  })

  // ─── Unit 4: Poetry II ───
  const unit4 = await prisma.category.upsert({
    where: { slug: 'englit-poetry-2' },
    update: {},
    create: {
      slug: 'englit-poetry-2',
      name: 'Poetry II',
      description: 'Tone, attitude, speaker, and complex poetic analysis',
      order: 4,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Poetry II')

  await prisma.topic.upsert({
    where: { slug: 'englit-tone-speaker' },
    update: {},
    create: {
      slug: 'englit-tone-speaker',
      title: 'Tone, Speaker & Attitude',
      description: 'Diction, tone, mood, speaker vs poet, shifts, and irony types',
      order: 1,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# 🗣️ Tone, Speaker & Attitude\n\nStudy diction (connotation vs denotation, register), tone (the author's attitude), mood (the reader's emotional response), the distinction between speaker and poet, tonal shifts (volta), and types of irony (verbal, situational, dramatic).`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'englit-sound-devices' },
    update: {},
    create: {
      slug: 'englit-sound-devices',
      title: 'Sound Devices & Syntax',
      description: 'Alliteration, assonance, consonance, onomatopoeia, syntax, and the effects of sound on meaning',
      order: 2,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# 🔊 Sound Devices & Syntax\n\nExplore sound devices: alliteration, assonance, consonance, onomatopoeia, euphony, cacophony, repetition (anaphora, epistrophe). Study how syntax (sentence structure, length, complexity, parallelism) contributes to rhythm, emphasis, and meaning.`,
    },
  })

  // ─── Unit 5: Longer Fiction & Drama II ───
  const unit5 = await prisma.category.upsert({
    where: { slug: 'englit-longer-fiction-2' },
    update: {},
    create: {
      slug: 'englit-longer-fiction-2',
      name: 'Longer Fiction & Drama II',
      description: 'Complex narrative techniques, multiple perspectives, and literary criticism',
      order: 5,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Longer Fiction & Drama II')

  await prisma.topic.upsert({
    where: { slug: 'englit-narrative-complexity' },
    update: {},
    create: {
      slug: 'englit-narrative-complexity',
      title: 'Narrative Complexity & Interpretation',
      description: 'Multiple perspectives, ambiguity, subtext, allegory, and literary movements',
      order: 1,
      categoryId: unit5.id,
      isPremium: false,
      textContent: `# 🧩 Narrative Complexity & Interpretation\n\nStudy multiple and shifting perspectives, ambiguity and open endings, subtext and implication, allegory, literary movements (Romanticism, Realism, Modernism, Postmodernism), and how context (historical, cultural, biographical) enriches interpretation.`,
    },
  })

  // ─── Unit 6: Literary Argumentation ───
  const unit6 = await prisma.category.upsert({
    where: { slug: 'englit-argumentation' },
    update: {},
    create: {
      slug: 'englit-argumentation',
      name: 'Literary Argumentation',
      description: 'Thesis development, evidence, analysis, and the AP exam essay types',
      order: 6,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Literary Argumentation')

  await prisma.topic.upsert({
    where: { slug: 'englit-essay-writing' },
    update: {},
    create: {
      slug: 'englit-essay-writing',
      title: 'AP Lit Essay Writing',
      description: 'Poetry analysis, prose analysis, and literary argument essays: thesis, evidence, commentary, and structure',
      order: 1,
      categoryId: unit6.id,
      isPremium: false,
      textContent: `# ✍️ AP Lit Essay Writing\n\nMaster the three AP Lit essay types: poetry analysis (how poetic elements develop meaning), prose analysis (how narrative/stylistic choices achieve purpose), and literary argument (defending an interpretation using a chosen work). Develop defensible theses, select and integrate textual evidence, write insightful commentary, and structure coherent arguments.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'englit-literary-criticism' },
    update: {},
    create: {
      slug: 'englit-literary-criticism',
      title: 'Critical Approaches to Literature',
      description: 'Formalism, feminist criticism, Marxist criticism, postcolonial criticism, and reader-response theory',
      order: 2,
      categoryId: unit6.id,
      isPremium: false,
      textContent: `# 🔍 Critical Approaches to Literature\n\nExplore literary critical lenses: formalism (New Criticism), feminist criticism, Marxist criticism, postcolonial criticism, psychoanalytic criticism, historicism, reader-response theory, and how different theoretical frameworks generate different interpretations of the same text.`,
    },
  })

  console.log('\n🎉 AP English Literature and Composition seeding complete!')
  console.log('  📚 6 categories, 13 topics created')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
