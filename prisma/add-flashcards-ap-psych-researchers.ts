import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding AP Psychology researcher flashcards...\n');

  const topicSlugs = [
    'classical-conditioning',
    'operant-conditioning',
    'observational-learning-cognition',
    'prenatal-childhood-development',
    'personality-theories',
    'treatment-therapy',
    'social-influence-conformity',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) { console.log(`⚠ Topic not found: ${slug}`); continue; }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  const t1 = await prisma.topic.findFirst({ where: { slug: 'classical-conditioning' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'Ivan Pavlov — what is he known for?', back: '**Classical conditioning**. Demonstrated that dogs could be conditioned to salivate at the sound of a bell paired with food.\n\nKey terms: UCS, UCR, CS, CR', hint: 'Pavlov\'s dogs.' },
        { topicId: t1.id, front: 'John B. Watson — what is he known for?', back: '**Little Albert experiment** — conditioned a baby to fear a white rat by pairing it with a loud noise. Founded **behaviorism**: psychology should study only observable behavior.', hint: 'Psychology as the science of behavior, not consciousness.' },
      ],
    });
    console.log('✅ Classical Conditioning researchers');
  }

  const t2 = await prisma.topic.findFirst({ where: { slug: 'operant-conditioning' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: 'B.F. Skinner — what is he known for?', back: '**Operant conditioning** and the **Skinner box**. Studied how consequences (reinforcement/punishment) shape behavior. Emphasized that free will is an illusion.', hint: 'Rewards and punishments control behavior.' },
        { topicId: t2.id, front: 'Edward Thorndike — what is he known for?', back: '**Law of Effect**: Behaviors followed by satisfying consequences are strengthened; behaviors followed by unpleasant consequences are weakened. Precursor to operant conditioning.', hint: 'Puzzle box experiments with cats.' },
      ],
    });
    console.log('✅ Operant Conditioning researchers');
  }

  const t3 = await prisma.topic.findFirst({ where: { slug: 'observational-learning-cognition' } });
  if (t3) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t3.id, front: 'Albert Bandura — what is he known for?', back: '**Bobo doll experiment** and **social learning theory** (observational learning). Children who watched adults act aggressively toward a Bobo doll imitated the aggression. Also developed the concept of **self-efficacy**.', hint: 'We learn by watching others.' },
      ],
    });
    console.log('✅ Observational Learning researchers');
  }

  const t4 = await prisma.topic.findFirst({ where: { slug: 'prenatal-childhood-development' } });
  if (t4) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t4.id, front: 'Jean Piaget — what is he known for?', back: '**Stages of cognitive development**:\n1. **Sensorimotor** (0–2): Object permanence\n2. **Preoperational** (2–7): Egocentrism, no conservation\n3. **Concrete operational** (7–11): Logical thought on concrete objects\n4. **Formal operational** (12+): Abstract/hypothetical thinking', hint: 'Children think differently at different ages.' },
        { topicId: t4.id, front: 'Lev Vygotsky — what is he known for?', back: '**Zone of proximal development (ZPD)** and **scaffolding**. Believed cognitive development is driven by social interaction and guided learning with more knowledgeable others.', hint: 'Learning is social, not just individual.' },
        { topicId: t4.id, front: 'Erik Erikson — what is he known for?', back: '**8 stages of psychosocial development** across the lifespan. Each stage has a crisis/conflict:\n\n- Trust vs. Mistrust (infancy)\n- Identity vs. Role Confusion (adolescence)\n- Integrity vs. Despair (old age)', hint: 'Development continues throughout life.' },
        { topicId: t4.id, front: 'Harry Harlow — what is he known for?', back: '**Contact comfort experiments** with monkeys. Infant monkeys preferred a soft cloth "mother" over a wire "mother" with food, showing attachment is based on comfort, not just nourishment.', hint: 'Attachment > food.' },
      ],
    });
    console.log('✅ Developmental Psychology researchers');
  }

  const t5 = await prisma.topic.findFirst({ where: { slug: 'personality-theories' } });
  if (t5) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t5.id, front: 'Sigmund Freud — what is he known for?', back: '**Psychoanalysis**. Unconscious mind drives behavior. Personality structure: **id** (pleasure), **ego** (reality), **superego** (morality). **Defense mechanisms** (repression, projection, etc.). **Psychosexual stages**.', hint: 'The father of psychoanalysis.' },
        { topicId: t5.id, front: 'Carl Rogers — what is he known for?', back: '**Humanistic psychology** and **client-centered therapy**. Key concepts: unconditional positive regard, self-concept, empathy. Believed people are inherently good and strive for self-actualization.', hint: 'Accept people as they are.' },
        { topicId: t5.id, front: 'Abraham Maslow — what is he known for?', back: "**Hierarchy of Needs**: physiological → safety → belonging → esteem → self-actualization. People must meet lower needs before pursuing higher ones.", hint: 'The pyramid of needs.' },
      ],
    });
    console.log('✅ Personality Theory researchers');
  }

  const t6 = await prisma.topic.findFirst({ where: { slug: 'treatment-therapy' } });
  if (t6) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t6.id, front: 'Aaron Beck — what is he known for?', back: '**Cognitive therapy** for depression. Identified **cognitive distortions** (all-or-nothing thinking, overgeneralization, catastrophizing) and developed techniques to challenge negative thought patterns.', hint: 'Change your thinking, change your mood.' },
        { topicId: t6.id, front: 'Joseph Wolpe — what is he known for?', back: '**Systematic desensitization** — a behavioral therapy for phobias that pairs relaxation with gradual exposure to the feared stimulus (based on classical conditioning).', hint: 'Slowly facing your fears while staying calm.' },
      ],
    });
    console.log('✅ Treatment & Therapy researchers');
  }

  const t7 = await prisma.topic.findFirst({ where: { slug: 'social-influence-conformity' } });
  if (t7) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t7.id, front: 'Solomon Asch — what is he known for?', back: '**Conformity experiments**. Participants changed their answers to match the group even when the group was obviously wrong. About 75% conformed at least once.', hint: 'Line length experiments with confederates.' },
        { topicId: t7.id, front: 'Stanley Milgram — what is he known for?', back: '**Obedience experiments**. About 65% of participants delivered maximum "shocks" when instructed by an authority figure. Showed the power of authority over personal morality.', hint: 'Electric shock experiment (no one was actually harmed).' },
        { topicId: t7.id, front: 'Philip Zimbardo — what is he known for?', back: '**Stanford Prison Experiment (1971)**. College students assigned as guards or prisoners. Guards became abusive; study was stopped early. Demonstrated the power of situational roles on behavior.', hint: 'Roles and situations shape behavior, not just personality.' },
      ],
    });
    console.log('✅ Social Psychology researchers');
  }

  console.log('\n✅ All AP Psychology researcher flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
