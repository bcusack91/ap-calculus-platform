import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Psychology course, categories, and topics...')

  // Ensure the course exists
  const course = await prisma.course.upsert({
    where: { slug: 'ap-psychology' },
    update: {},
    create: {
      slug: 'ap-psychology',
      name: 'AP Psychology',
      icon: '🧠',
      description: 'Explore the science of behavior and mental processes including cognition, development, personality, and disorders.',
      order: 10,
      color: 'amber',
    },
  })
  console.log(`✓ Course: ${course.name}`)

  // ─── Unit 1: History & Approaches ───
  const unit1 = await prisma.category.upsert({
    where: { slug: 'psych-history-approaches' },
    update: {},
    create: {
      slug: 'psych-history-approaches',
      name: 'History & Approaches',
      description: 'The origins of psychology, major perspectives, and research methods',
      order: 1,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: History & Approaches')

  await prisma.topic.upsert({
    where: { slug: 'history-approaches-psychology' },
    update: {},
    create: {
      slug: 'history-approaches-psychology',
      title: 'History & Approaches',
      description: 'Origins of psychology, major perspectives, research methods, and ethics',
      order: 1,
      categoryId: unit1.id,
      isPremium: false,
      textContent: `# 🧠 History & Approaches to Psychology\n\nExplore the origins of psychology from Wundt and James to modern perspectives including behaviorism, cognitive, biological, and sociocultural approaches. Learn about research methods, ethics, and statistical analysis.`,
    },
  })

  // ─── Unit 2: Biological Bases of Behavior ───
  const unit2 = await prisma.category.upsert({
    where: { slug: 'psych-biological-bases' },
    update: {},
    create: {
      slug: 'psych-biological-bases',
      name: 'Biological Bases of Behavior',
      description: 'Neural communication, brain structure, genetics, and the nervous system',
      order: 2,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Biological Bases of Behavior')

  await prisma.topic.upsert({
    where: { slug: 'biological-bases-brain' },
    update: {},
    create: {
      slug: 'biological-bases-brain',
      title: 'The Brain & Nervous System',
      description: 'Neural communication, brain structure, cerebral cortex, imaging, and nervous system divisions',
      order: 1,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# 🧠 The Brain & Nervous System\n\nStudy neural communication (neurons, neurotransmitters, action potentials), brain structures (brainstem, limbic system, cerebral cortex), brain imaging techniques, and the divisions of the nervous system.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'genetics-behavior' },
    update: {},
    create: {
      slug: 'genetics-behavior',
      title: 'Genetics & Behavior',
      description: 'Behavioral genetics, twin studies, gene-environment interaction, and evolutionary psychology',
      order: 2,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# 🧬 Genetics & Behavior\n\nExplore how genes influence behavior through twin studies, adoption studies, and heritability estimates. Understand gene-environment interactions, epigenetics, and evolutionary psychology.`,
    },
  })

  // ─── Unit 3: Sensation & Perception ───
  const unit3 = await prisma.category.upsert({
    where: { slug: 'psych-sensation-perception' },
    update: {},
    create: {
      slug: 'psych-sensation-perception',
      name: 'Sensation & Perception',
      description: 'Sensory processing, vision, hearing, and perceptual organization',
      order: 3,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Sensation & Perception')

  await prisma.topic.upsert({
    where: { slug: 'sensation-sensory-processing' },
    update: {},
    create: {
      slug: 'sensation-sensory-processing',
      title: 'Sensation & Sensory Processing',
      description: 'Absolute and difference thresholds, signal detection, vision, hearing, and chemical senses',
      order: 1,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# 👁️ Sensation & Sensory Processing\n\nLearn how sensory receptors transduce stimuli into neural signals. Study vision (rods, cones, color theories), hearing (place theory, frequency theory), and chemical senses (taste and smell).`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'perception-attention' },
    update: {},
    create: {
      slug: 'perception-attention',
      title: 'Perception & Attention',
      description: 'Perceptual organization, depth perception, visual illusions, and selective attention',
      order: 2,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# 🔍 Perception & Attention\n\nExplore Gestalt principles of organization, depth cues (monocular and binocular), visual illusions, selective attention (cocktail party effect), and change blindness.`,
    },
  })

  // ─── Unit 4: Learning ───
  const unit4 = await prisma.category.upsert({
    where: { slug: 'psych-learning' },
    update: {},
    create: {
      slug: 'psych-learning',
      name: 'Learning',
      description: 'Classical conditioning, operant conditioning, and observational learning',
      order: 4,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Learning')

  await prisma.topic.upsert({
    where: { slug: 'classical-conditioning' },
    update: {},
    create: {
      slug: 'classical-conditioning',
      title: 'Classical Conditioning',
      description: 'Pavlov\'s experiments, acquisition, extinction, generalization, discrimination, and applications',
      order: 1,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# 🔔 Classical Conditioning\n\nStudy Pavlov's discovery of classical conditioning: unconditioned stimulus/response, conditioned stimulus/response, acquisition, extinction, spontaneous recovery, generalization, and discrimination.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'operant-conditioning' },
    update: {},
    create: {
      slug: 'operant-conditioning',
      title: 'Operant Conditioning',
      description: 'Thorndike & Skinner, reinforcement types, punishment, schedules, and shaping',
      order: 2,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# 🐀 Operant Conditioning\n\nLearn about Thorndike's Law of Effect and Skinner's operant conditioning: positive/negative reinforcement, positive/negative punishment, schedules of reinforcement, and shaping.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'observational-learning-cognition' },
    update: {},
    create: {
      slug: 'observational-learning-cognition',
      title: 'Observational Learning & Cognition',
      description: 'Bandura\'s Bobo doll experiment, mirror neurons, cognitive maps, and latent learning',
      order: 3,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# 👀 Observational Learning & Cognition\n\nExplore Bandura's social learning theory, Bobo doll experiment, mirror neurons, Tolman's cognitive maps, latent learning, and insight learning.`,
    },
  })

  // ─── Unit 5: Memory ───
  const unit5 = await prisma.category.upsert({
    where: { slug: 'psych-memory' },
    update: {},
    create: {
      slug: 'psych-memory',
      name: 'Memory',
      description: 'Encoding, storage, retrieval, and forgetting',
      order: 5,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Memory')

  await prisma.topic.upsert({
    where: { slug: 'memory-encoding-storage' },
    update: {},
    create: {
      slug: 'memory-encoding-storage',
      title: 'Memory Encoding & Storage',
      description: 'Memory models, sensory memory, short-term/working memory, long-term memory, and encoding strategies',
      order: 1,
      categoryId: unit5.id,
      isPremium: false,
      textContent: `# 🧠 Memory Encoding & Storage\n\nStudy the Atkinson-Shiffrin model, sensory memory, short-term/working memory, long-term memory types (explicit vs implicit), and encoding strategies (elaboration, mnemonics).`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'retrieval-forgetting' },
    update: {},
    create: {
      slug: 'retrieval-forgetting',
      title: 'Retrieval & Forgetting',
      description: 'Retrieval cues, recall vs recognition, forgetting curve, interference, and memory distortion',
      order: 2,
      categoryId: unit5.id,
      isPremium: false,
      textContent: `# 🔎 Retrieval & Forgetting\n\nLearn about retrieval cues, recall vs recognition, Ebbinghaus's forgetting curve, proactive and retroactive interference, source monitoring, and false memories.`,
    },
  })

  // ─── Unit 6: Thinking & Language ───
  const unit6 = await prisma.category.upsert({
    where: { slug: 'psych-thinking-language' },
    update: {},
    create: {
      slug: 'psych-thinking-language',
      name: 'Thinking & Language',
      description: 'Problem solving, decision making, heuristics, language, and intelligence',
      order: 6,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Thinking & Language')

  await prisma.topic.upsert({
    where: { slug: 'thinking-problem-solving' },
    update: {},
    create: {
      slug: 'thinking-problem-solving',
      title: 'Thinking & Problem Solving',
      description: 'Concepts, prototypes, algorithms, heuristics, biases, and decision making',
      order: 1,
      categoryId: unit6.id,
      isPremium: false,
      textContent: `# 💡 Thinking & Problem Solving\n\nExplore concepts and prototypes, problem-solving strategies (algorithms vs heuristics), cognitive biases (confirmation bias, availability heuristic, representativeness), and framing effects.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'language-intelligence' },
    update: {},
    create: {
      slug: 'language-intelligence',
      title: 'Language & Intelligence',
      description: 'Language development, Chomsky vs Skinner, intelligence theories, IQ testing, and nature vs nurture',
      order: 2,
      categoryId: unit6.id,
      isPremium: false,
      textContent: `# 🗣️ Language & Intelligence\n\nStudy language development (babbling, one-word, telegraphic), Chomsky's LAD, linguistic relativity, intelligence theories (Spearman, Gardner, Sternberg), IQ testing, and the nature-nurture debate.`,
    },
  })

  // ─── Unit 7: Developmental Psychology ───
  const unit7 = await prisma.category.upsert({
    where: { slug: 'psych-developmental' },
    update: {},
    create: {
      slug: 'psych-developmental',
      name: 'Developmental Psychology',
      description: 'Prenatal development through adulthood and aging',
      order: 7,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Developmental Psychology')

  await prisma.topic.upsert({
    where: { slug: 'prenatal-childhood-development' },
    update: {},
    create: {
      slug: 'prenatal-childhood-development',
      title: 'Prenatal & Childhood Development',
      description: 'Prenatal development, Piaget\'s stages, attachment, parenting styles, and moral development',
      order: 1,
      categoryId: unit7.id,
      isPremium: false,
      textContent: `# 👶 Prenatal & Childhood Development\n\nLearn about teratogens, prenatal stages, Piaget's cognitive stages (sensorimotor through formal operational), attachment theory (Ainsworth), parenting styles, and Kohlberg's moral development.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'adolescence-adulthood' },
    update: {},
    create: {
      slug: 'adolescence-adulthood',
      title: 'Adolescence & Adulthood',
      description: 'Adolescent development, identity formation, adulthood, aging, and cognitive changes',
      order: 2,
      categoryId: unit7.id,
      isPremium: false,
      textContent: `# 🧑 Adolescence & Adulthood\n\nExplore puberty, Erikson's identity vs role confusion, emerging adulthood, physical and cognitive changes in aging, social development across the lifespan, and Kübler-Ross's stages.`,
    },
  })

  // ─── Unit 8: Motivation, Emotion & Stress ───
  const unit8 = await prisma.category.upsert({
    where: { slug: 'psych-motivation-emotion' },
    update: {},
    create: {
      slug: 'psych-motivation-emotion',
      name: 'Motivation, Emotion & Stress',
      description: 'Theories of motivation and emotion, hunger, stress, and coping',
      order: 8,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Motivation, Emotion & Stress')

  await prisma.topic.upsert({
    where: { slug: 'motivation-theories' },
    update: {},
    create: {
      slug: 'motivation-theories',
      title: 'Motivation Theories',
      description: 'Drive theory, Maslow\'s hierarchy, intrinsic vs extrinsic motivation, hunger, and achievement',
      order: 1,
      categoryId: unit8.id,
      isPremium: false,
      textContent: `# 🎯 Motivation Theories\n\nStudy instinct theory, drive-reduction theory, Maslow's hierarchy of needs, intrinsic vs extrinsic motivation, hunger regulation (lateral and ventromedial hypothalamus), and achievement motivation.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'emotion-stress' },
    update: {},
    create: {
      slug: 'emotion-stress',
      title: 'Emotion & Stress',
      description: 'Theories of emotion, emotional expression, stress and health, and coping strategies',
      order: 2,
      categoryId: unit8.id,
      isPremium: false,
      textContent: `# 😊 Emotion & Stress\n\nLearn about James-Lange, Cannon-Bard, and Schachter-Singer theories, facial feedback hypothesis, general adaptation syndrome, stress and the immune system, and coping strategies.`,
    },
  })

  // ─── Unit 9: Personality ───
  const unit9 = await prisma.category.upsert({
    where: { slug: 'psych-personality' },
    update: {},
    create: {
      slug: 'psych-personality',
      name: 'Personality',
      description: 'Psychoanalytic, trait, humanistic, and social-cognitive theories of personality',
      order: 9,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Personality')

  await prisma.topic.upsert({
    where: { slug: 'personality-theories' },
    update: {},
    create: {
      slug: 'personality-theories',
      title: 'Personality Theories',
      description: 'Psychoanalytic, trait, humanistic, and social-cognitive perspectives on personality',
      order: 1,
      categoryId: unit9.id,
      isPremium: false,
      textContent: `# 🎭 Personality Theories\n\nExplore Freud's psychoanalytic theory (id, ego, superego, defense mechanisms), trait theories (Big Five), Rogers' humanistic theory, Bandura's social-cognitive theory, and personality assessment methods.`,
    },
  })

  // ─── Unit 10: Psychological Disorders & Treatment ───
  const unit10 = await prisma.category.upsert({
    where: { slug: 'psych-disorders-treatment' },
    update: {},
    create: {
      slug: 'psych-disorders-treatment',
      name: 'Psychological Disorders & Treatment',
      description: 'Classification, anxiety, mood, psychotic disorders, and therapeutic approaches',
      order: 10,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Psychological Disorders & Treatment')

  await prisma.topic.upsert({
    where: { slug: 'psychological-disorders-overview' },
    update: {},
    create: {
      slug: 'psychological-disorders-overview',
      title: 'Psychological Disorders Overview',
      description: 'Defining abnormality, DSM-5, anxiety disorders, OCD, PTSD, and somatic disorders',
      order: 1,
      categoryId: unit10.id,
      isPremium: false,
      textContent: `# 📋 Psychological Disorders Overview\n\nLearn about defining abnormality (statistical, functional, distress criteria), DSM-5 classification, anxiety disorders (GAD, phobias, panic), OCD, PTSD, and somatic symptom disorders.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'mood-psychotic-disorders' },
    update: {},
    create: {
      slug: 'mood-psychotic-disorders',
      title: 'Mood & Psychotic Disorders',
      description: 'Major depression, bipolar disorder, schizophrenia, dissociative disorders, and personality disorders',
      order: 2,
      categoryId: unit10.id,
      isPremium: false,
      textContent: `# 🌧️ Mood & Psychotic Disorders\n\nStudy major depressive disorder, bipolar disorder, schizophrenia (positive and negative symptoms), dissociative identity disorder, and personality disorders (antisocial, borderline).`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'treatment-therapy' },
    update: {},
    create: {
      slug: 'treatment-therapy',
      title: 'Treatment & Therapy',
      description: 'Psychotherapy approaches, CBT, biomedical therapies, group/family therapy, and treatment evaluation',
      order: 3,
      categoryId: unit10.id,
      isPremium: false,
      textContent: `# 💊 Treatment & Therapy\n\nExplore psychoanalytic therapy, humanistic therapy, cognitive-behavioral therapy, biomedical treatments (medications, ECT, psychosurgery), group and family therapy, and evidence-based treatment evaluation.`,
    },
  })

  // ─── Unit 11: Social Psychology ───
  const unit11 = await prisma.category.upsert({
    where: { slug: 'psych-social' },
    update: {},
    create: {
      slug: 'psych-social',
      name: 'Social Psychology',
      description: 'Social influence, conformity, attitudes, persuasion, and group behavior',
      order: 11,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Social Psychology')

  await prisma.topic.upsert({
    where: { slug: 'social-influence-conformity' },
    update: {},
    create: {
      slug: 'social-influence-conformity',
      title: 'Social Influence & Conformity',
      description: 'Conformity, obedience, Asch & Milgram experiments, social facilitation, and deindividuation',
      order: 1,
      categoryId: unit11.id,
      isPremium: false,
      textContent: `# 👥 Social Influence & Conformity\n\nStudy Asch's conformity experiments, Milgram's obedience studies, Zimbardo's prison experiment, social facilitation, social loafing, and deindividuation.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'attitudes-persuasion' },
    update: {},
    create: {
      slug: 'attitudes-persuasion',
      title: 'Attitudes & Persuasion',
      description: 'Attitude formation, cognitive dissonance, persuasion techniques, and central vs peripheral routes',
      order: 2,
      categoryId: unit11.id,
      isPremium: false,
      textContent: `# 📢 Attitudes & Persuasion\n\nLearn about attitude formation, Festinger's cognitive dissonance theory, persuasion techniques (foot-in-the-door, door-in-the-face), and the elaboration likelihood model (central vs peripheral routes).`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'group-behavior-prejudice' },
    update: {},
    create: {
      slug: 'group-behavior-prejudice',
      title: 'Group Behavior & Prejudice',
      description: 'Prejudice, discrimination, stereotypes, in-group/out-group dynamics, aggression, and prosocial behavior',
      order: 3,
      categoryId: unit11.id,
      isPremium: false,
      textContent: `# 🤝 Group Behavior & Prejudice\n\nExplore prejudice and discrimination, stereotype threat, in-group/out-group bias, aggression theories, bystander effect, altruism, and prosocial behavior.`,
    },
  })

  console.log('\n🎉 AP Psychology seeding complete!')
  console.log(`  📚 ${11} categories, ${23} topics created`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
