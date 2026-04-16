import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP English Literature and Composition (CED-aligned, 9 units)...')

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
    update: { name: 'Short Fiction I', description: 'Character, setting, and the narrator in short fiction', order: 1 },
    create: {
      slug: 'englit-short-fiction-1',
      name: 'Short Fiction I',
      description: 'Character, setting, and the narrator in short fiction',
      order: 1,
      courseId: course.id,
    },
  })
  console.log('  ✓ Unit 1: Short Fiction I')

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
      description: 'First-person, third-person limited and omniscient, unreliable narrator, and narrative distance',
      order: 2,
      categoryId: unit1.id,
      isPremium: false,
      textContent: `# 👁️ Narration & Point of View\n\nExplore types of narrators (first-person, second-person, third-person limited, third-person omniscient), the unreliable narrator, stream of consciousness, narrative distance, and how point of view shapes reader perception and meaning.`,
    },
  })

  // ─── Unit 2: Poetry I ───
  const unit2 = await prisma.category.upsert({
    where: { slug: 'englit-poetry-1' },
    update: { name: 'Poetry I', description: 'Structure, figurative language, and imagery in poetry', order: 2 },
    create: {
      slug: 'englit-poetry-1',
      name: 'Poetry I',
      description: 'Structure, figurative language, and imagery in poetry',
      order: 2,
      courseId: course.id,
    },
  })
  console.log('  ✓ Unit 2: Poetry I')

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

  // ─── Unit 3: Longer Fiction or Drama I ───
  const unit3 = await prisma.category.upsert({
    where: { slug: 'englit-longer-fiction' },
    update: { name: 'Longer Fiction or Drama I', description: 'Character development, plot structure, and setting in novels and plays', order: 3 },
    create: {
      slug: 'englit-longer-fiction',
      name: 'Longer Fiction or Drama I',
      description: 'Character development, plot structure, and setting in novels and plays',
      order: 3,
      courseId: course.id,
    },
  })
  console.log('  ✓ Unit 3: Longer Fiction or Drama I')

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
      title: 'Dramatic Structure & Elements',
      description: 'Dialogue, monologue, soliloquy, staging, tragedy, comedy, and dramatic irony',
      order: 2,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# 🎭 Dramatic Structure & Elements\n\nExplore the elements of drama: dialogue, monologue, soliloquy, aside, stage directions, acts and scenes, tragedy (tragic hero, hamartia, catharsis), comedy, tragicomedy, dramatic irony, and the three unities (time, place, action).`,
    },
  })

  // ─── Unit 4: Short Fiction II ───
  const unit4 = await prisma.category.upsert({
    where: { slug: 'englit-short-fiction-2' },
    update: { name: 'Short Fiction II', description: 'Narrative complexity, multiple perspectives, and unreliable narration', order: 4 },
    create: {
      slug: 'englit-short-fiction-2',
      name: 'Short Fiction II',
      description: 'Narrative complexity, multiple perspectives, and unreliable narration',
      order: 4,
      courseId: course.id,
    },
  })
  console.log('  ✓ Unit 4: Short Fiction II')

  await prisma.topic.upsert({
    where: { slug: 'englit-narrative-perspective' },
    update: {},
    create: {
      slug: 'englit-narrative-perspective',
      title: 'Narrative Perspective & Complexity',
      description: 'Shifting perspectives, frame narratives, multiple narrators, and narrative reliability',
      order: 1,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# 🔄 Narrative Perspective & Complexity\n\nStudy shifting and multiple perspectives, frame narratives, the relationship between narrator and author, how narrative structure creates meaning (in medias res, flashback, nonlinear chronology), and the effects of narrative distance on reader interpretation.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'englit-symbol-motif-fiction' },
    update: {},
    create: {
      slug: 'englit-symbol-motif-fiction',
      title: 'Symbol, Motif & Ambiguity',
      description: 'Symbolism in prose, recurring motifs, textual ambiguity, and interpretive complexity',
      order: 2,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# 🔑 Symbol, Motif & Ambiguity\n\nExplore how authors use symbols (conventional and literary), recurring motifs, imagery patterns, and deliberate ambiguity to create layered meanings. Analyze how multiple valid interpretations can emerge from a single text.`,
    },
  })

  // ─── Unit 5: Poetry II ───
  const unit5 = await prisma.category.upsert({
    where: { slug: 'englit-poetry-2' },
    update: { name: 'Poetry II', description: 'Tone, speaker, structure, and the relationship between form and meaning', order: 5 },
    create: {
      slug: 'englit-poetry-2',
      name: 'Poetry II',
      description: 'Tone, speaker, structure, and the relationship between form and meaning',
      order: 5,
      courseId: course.id,
    },
  })
  console.log('  ✓ Unit 5: Poetry II')

  await prisma.topic.upsert({
    where: { slug: 'englit-tone-speaker' },
    update: {},
    create: {
      slug: 'englit-tone-speaker',
      title: 'Tone, Speaker & Attitude',
      description: 'Diction, tone, mood, speaker vs poet, shifts, and irony types',
      order: 1,
      categoryId: unit5.id,
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
      categoryId: unit5.id,
      isPremium: false,
      textContent: `# 🔊 Sound Devices & Syntax\n\nExplore sound devices: alliteration, assonance, consonance, onomatopoeia, euphony, cacophony, repetition (anaphora, epistrophe). Study how syntax (sentence structure, length, complexity, parallelism) contributes to rhythm, emphasis, and meaning.`,
    },
  })

  // ─── Unit 6: Longer Fiction or Drama II ───
  const unit6 = await prisma.category.upsert({
    where: { slug: 'englit-longer-fiction-2' },
    update: { name: 'Longer Fiction or Drama II', description: 'Complex character relationships, social commentary, and thematic development', order: 6 },
    create: {
      slug: 'englit-longer-fiction-2',
      name: 'Longer Fiction or Drama II',
      description: 'Complex character relationships, social commentary, and thematic development',
      order: 6,
      courseId: course.id,
    },
  })
  console.log('  ✓ Unit 6: Longer Fiction or Drama II')

  await prisma.topic.upsert({
    where: { slug: 'englit-narrative-complexity' },
    update: {},
    create: {
      slug: 'englit-narrative-complexity',
      title: 'Narrative Complexity & Interpretation',
      description: 'Multiple perspectives, ambiguity, subtext, allegory, and literary movements',
      order: 1,
      categoryId: unit6.id,
      isPremium: false,
      textContent: `# 🧩 Narrative Complexity & Interpretation\n\nStudy multiple and shifting perspectives, ambiguity and open endings, subtext and implication, allegory, literary movements (Romanticism, Realism, Modernism, Postmodernism), and how context (historical, cultural, biographical) enriches interpretation.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'englit-social-commentary-drama' },
    update: {},
    create: {
      slug: 'englit-social-commentary-drama',
      title: 'Social Commentary in Fiction & Drama',
      description: 'How authors use fiction and drama to critique society, explore power dynamics, and address injustice',
      order: 2,
      categoryId: unit6.id,
      isPremium: false,
      textContent: `# 🏛️ Social Commentary in Fiction & Drama\n\nAnalyze how authors use narrative and dramatic techniques to comment on society: satire, social realism, dystopian fiction, allegory, the portrayal of class/race/gender dynamics, and how literary works engage with their historical and cultural contexts.`,
    },
  })

  // ─── Unit 7: Short Fiction III ───
  const unit7 = await prisma.category.upsert({
    where: { slug: 'englit-short-fiction-3' },
    update: { name: 'Short Fiction III', description: 'Advanced analysis of prose style, structure, and literary argument', order: 7 },
    create: {
      slug: 'englit-short-fiction-3',
      name: 'Short Fiction III',
      description: 'Advanced analysis of prose style, structure, and literary argument',
      order: 7,
      courseId: course.id,
    },
  })
  console.log('  ✓ Unit 7: Short Fiction III')

  await prisma.topic.upsert({
    where: { slug: 'englit-prose-style-analysis' },
    update: {},
    create: {
      slug: 'englit-prose-style-analysis',
      title: 'Prose Style Analysis',
      description: 'Analyzing an author\'s style choices: syntax, diction, pacing, sentence variety, and their cumulative effects',
      order: 1,
      categoryId: unit7.id,
      isPremium: false,
      textContent: `# ✍️ Prose Style Analysis\n\nDevelop advanced skills in analyzing prose style: how sentence structure (periodic, cumulative, balanced), diction (abstract vs concrete, formal vs colloquial), pacing, rhythm, and repetition work together to create tone, develop character, and advance thematic meaning.`,
    },
  })

  // ─── Unit 8: Poetry III ───
  const unit8 = await prisma.category.upsert({
    where: { slug: 'englit-poetry-3' },
    update: { name: 'Poetry III', description: 'Complex poetic analysis, comparison, and literary argument', order: 8 },
    create: {
      slug: 'englit-poetry-3',
      name: 'Poetry III',
      description: 'Complex poetic analysis, comparison, and literary argument',
      order: 8,
      courseId: course.id,
    },
  })
  console.log('  ✓ Unit 8: Poetry III')

  await prisma.topic.upsert({
    where: { slug: 'englit-complex-poetic-analysis' },
    update: {},
    create: {
      slug: 'englit-complex-poetic-analysis',
      title: 'Complex Poetic Analysis',
      description: 'Synthesizing multiple poetic elements, comparing poems, and developing sophisticated interpretations',
      order: 1,
      categoryId: unit8.id,
      isPremium: false,
      textContent: `# 🔬 Complex Poetic Analysis\n\nSynthesize analysis of structure, figurative language, imagery, tone, and sound to develop complex interpretations. Compare and contrast poems by theme, form, or period. Recognize how poets subvert conventions and use form to reinforce or challenge meaning.`,
    },
  })

  // ─── Unit 9: Longer Fiction or Drama III ───
  const unit9 = await prisma.category.upsert({
    where: { slug: 'englit-longer-fiction-3' },
    update: { name: 'Longer Fiction or Drama III', description: 'Advanced literary argument and the AP Exam essay types', order: 9 },
    create: {
      slug: 'englit-longer-fiction-3',
      name: 'Longer Fiction or Drama III',
      description: 'Advanced literary argument and the AP Exam essay types',
      order: 9,
      courseId: course.id,
    },
  })
  console.log('  ✓ Unit 9: Longer Fiction or Drama III')

  await prisma.topic.upsert({
    where: { slug: 'englit-essay-writing' },
    update: {},
    create: {
      slug: 'englit-essay-writing',
      title: 'AP Lit Essay Writing',
      description: 'Poetry analysis, prose analysis, and literary argument essays: thesis, evidence, commentary, and structure',
      order: 1,
      categoryId: unit9.id,
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
      categoryId: unit9.id,
      isPremium: false,
      textContent: `# 🔍 Critical Approaches to Literature\n\nExplore literary critical lenses: formalism (New Criticism), feminist criticism, Marxist criticism, postcolonial criticism, psychoanalytic criticism, historicism, reader-response theory, and how different theoretical frameworks generate different interpretations of the same text.`,
    },
  })

  // ─── Clean up old unit that no longer exists ───
  // Delete the fabricated "Literary Argumentation" category if it exists
  const oldUnit = await prisma.category.findUnique({ where: { slug: 'englit-argumentation' } })
  if (oldUnit) {
    // Move any topics from old unit to unit 9 before deleting
    await prisma.topic.updateMany({
      where: { categoryId: oldUnit.id },
      data: { categoryId: unit9.id },
    })
    await prisma.category.delete({ where: { slug: 'englit-argumentation' } })
    console.log('  🧹 Removed old "Literary Argumentation" category (merged into Unit 9)')
  }

  console.log('\n🎉 AP English Literature and Composition seeding complete!')
  console.log('  📚 9 units, 15 topics created (CED-aligned 3-cycle spiral)')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
