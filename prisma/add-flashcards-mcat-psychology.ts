import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding MCAT psychology flashcards...\n');

  const slug = 'mcat-psychology-behavior-mcat';
  const topic = await prisma.topic.findFirst({ where: { slug } });
  if (!topic) { console.log(`⚠ Topic not found: ${slug}`); return; }
  await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic.id, front: 'Distinguish classical from operant conditioning.', back: '**Classical conditioning** (Pavlov): a neutral stimulus becomes associated with an involuntary/reflexive response (dog salivates to bell).\n\n**Operant conditioning** (Skinner): voluntary behavior shaped by **consequences** (reinforcement/punishment).', hint: 'Classical = involuntary association (Pavlov); operant = voluntary, consequence-driven (Skinner).' },
      { topicId: topic.id, front: 'Define the four operant conditioning consequences.', back: '**Positive reinforcement**: add pleasant stimulus → ↑ behavior.\n**Negative reinforcement**: remove unpleasant stimulus → ↑ behavior.\n**Positive punishment**: add unpleasant stimulus → ↓ behavior.\n**Negative punishment**: remove pleasant stimulus → ↓ behavior.', hint: 'Reinforce = increase; punish = decrease. Positive = add; negative = remove.' },
      { topicId: topic.id, front: 'Which reinforcement schedule produces the most resistant behavior?', back: '**Variable ratio** (reward after an unpredictable number of responses) produces the **highest, steadiest response rate and greatest resistance to extinction** (e.g., gambling/slot machines).\n\nRatio schedules (based on responses) beat interval (time-based) for response rate.', hint: 'Variable ratio = gambling = most addictive/resistant.' },
      { topicId: topic.id, front: 'Distinguish the stages of memory and key memory terms.', back: '**Sensory → short-term/working → long-term** memory.\n\n**Encoding** (input) → **storage** → **retrieval**. Short-term holds ~7±2 items (Miller). Long-term divides into **explicit/declarative** (facts/events) and **implicit/procedural** (skills).', hint: 'Sensory → STM (7±2) → LTM. Encode, store, retrieve.' },
      { topicId: topic.id, front: 'Match major learning/development theorists to their concepts.', back: '**Piaget**: cognitive development stages (sensorimotor, preoperational, concrete, formal).\n**Vygotsky**: sociocultural, zone of proximal development.\n**Erikson**: 8 psychosocial stages (trust vs. mistrust, etc.).\n**Kohlberg**: moral development stages.', hint: 'Piaget = cognitive; Vygotsky = social; Erikson = psychosocial; Kohlberg = moral.' },
      { topicId: topic.id, front: 'What are Piaget\'s four stages of cognitive development?', back: '1. **Sensorimotor** (0–2): object permanence.\n2. **Preoperational** (2–7): symbolic thought, egocentrism, lacks conservation.\n3. **Concrete operational** (7–11): conservation, logical about concrete events.\n4. **Formal operational** (11+): abstract/hypothetical reasoning.', hint: 'Sensorimotor → preoperational → concrete → formal. Object permanence first.' },
      { topicId: topic.id, front: 'List the major theories of emotion.', back: '**James-Lange**: stimulus → physiological arousal → emotion ("I shake, therefore I\'m afraid").\n**Cannon-Bard**: arousal and emotion occur **simultaneously**.\n**Schachter-Singer (two-factor)**: arousal + **cognitive label** → emotion.', hint: 'James-Lange = body first; Cannon-Bard = together; Schachter-Singer = arousal + label.' },
      { topicId: topic.id, front: 'What is Maslow\'s hierarchy of needs (bottom to top)?', back: '1. **Physiological** (food, water)\n2. **Safety**\n3. **Love/belonging**\n4. **Esteem**\n5. **Self-actualization**\n\nLower needs must be reasonably met before higher ones drive behavior (humanistic theory).', hint: 'Physiological → safety → love → esteem → self-actualization.' },
      { topicId: topic.id, front: 'Distinguish the major psychological perspectives.', back: '**Psychoanalytic** (Freud): unconscious drives.\n**Behaviorist** (Skinner/Watson): observable behavior, conditioning.\n**Humanistic** (Rogers/Maslow): free will, self-actualization.\n**Cognitive**: mental processes.\n**Biological**: brain/genes.', hint: 'Freud = unconscious; behaviorist = observable; humanistic = growth; cognitive = thought.' },
      { topicId: topic.id, front: 'Distinguish key psychological disorder categories (DSM).', back: '**Depressive/bipolar**: mood disturbance.\n**Anxiety**: excessive fear/worry (GAD, phobias, panic).\n**Schizophrenia**: psychosis — positive symptoms (hallucinations, delusions) and negative symptoms (flat affect, avolition).\n**OCD**: obsessions + compulsions.', hint: 'Schizophrenia: positive (added: hallucinations) vs negative (removed: flat affect).' },
      { topicId: topic.id, front: 'What are the components of attitude and how do attitudes change?', back: 'Attitudes have **ABC** components: **A**ffective (feelings), **B**ehavioral, **C**ognitive (beliefs).\n\n**Elaboration Likelihood Model**: **central route** (deep, logical processing → lasting change) vs. **peripheral route** (superficial cues → temporary change).', hint: 'Attitude = ABC. Persuasion: central (logic) vs peripheral (cues).' },
      { topicId: topic.id, front: 'Distinguish the major theories of intelligence.', back: '**Spearman**: general intelligence factor (**g**).\n**Gardner**: multiple intelligences (linguistic, spatial, musical, etc.).\n**Sternberg**: triarchic — analytical, creative, practical.\n\nFluid intelligence (problem-solving) declines with age; crystallized (knowledge) is stable/increases.', hint: 'Spearman = g; Gardner = multiple; Sternberg = triarchic.' },
      { topicId: topic.id, front: 'What are the stages of sleep and their key features?', back: 'Non-REM **N1** (theta, light) → **N2** (sleep spindles, K-complexes) → **N3** (delta, deep/slow-wave, restorative).\n\n**REM** (paradoxical): brain active (beta-like), dreaming, vivid, muscle atonia. Cycles repeat ~90 min.', hint: 'N1→N2 (spindles)→N3 (delta deep)→REM (dreaming, atonia).' },
      { topicId: topic.id, front: 'Distinguish encoding-related memory phenomena.', back: '**Primacy effect**: better recall of first items (long-term memory).\n**Recency effect**: better recall of last items (short-term memory).\n**Spacing effect**: distributed practice beats cramming.\n**Proactive interference**: old info disrupts new; **retroactive**: new disrupts old.', hint: 'Primacy = first (LTM); recency = last (STM). Proactive = old hurts new.' },
    ],
  });

  console.log('✅ Created 14 MCAT psychology flashcards');
  console.log('\n✅ All MCAT psychology flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
