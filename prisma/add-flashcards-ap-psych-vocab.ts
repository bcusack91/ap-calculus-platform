import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding AP Psychology vocabulary flashcards...\n');

  const topicSlugs = [
    'history-approaches-psychology',
    'biological-bases-brain',
    'sensation-sensory-processing',
    'memory-encoding-storage',
    'language-intelligence',
    'psychological-disorders-overview',
    'emotion-stress',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) { console.log(`⚠ Topic not found: ${slug}`); continue; }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  const t1 = await prisma.topic.findFirst({ where: { slug: 'history-approaches-psychology' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'What is the biological perspective?', back: 'Focuses on physical processes — genetics, neurotransmitters, hormones, brain structure — as the basis for behavior and mental processes.', hint: 'Bio = body and brain.' },
        { topicId: t1.id, front: 'What is the cognitive perspective?', back: 'Studies mental processes such as thinking, memory, problem-solving, and decision-making. Focuses on how we process, store, and retrieve information.', hint: 'Like a computer processing information.' },
        { topicId: t1.id, front: 'What is the behavioral perspective?', back: 'Focuses on observable behavior and how it is learned through conditioning (classical & operant). Founded by John B. Watson; advanced by B.F. Skinner.', hint: 'If you can\'t see it, it doesn\'t count.' },
        { topicId: t1.id, front: 'What is the psychodynamic perspective?', back: 'Emphasizes unconscious motives, internal conflicts, and early childhood experiences. Founded by **Sigmund Freud** (id, ego, superego).', hint: 'Hidden motives and childhood memories.' },
      ],
    });
    console.log('✅ History & Approaches flashcards');
  }

  const t2 = await prisma.topic.findFirst({ where: { slug: 'biological-bases-brain' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: 'What is a neurotransmitter?', back: 'A chemical messenger that crosses the synaptic gap to stimulate or inhibit the next neuron. Examples: serotonin, dopamine, acetylcholine, GABA, glutamate.', hint: 'Chemical signals between neurons.' },
        { topicId: t2.id, front: 'What does dopamine do?', back: 'Influences movement, learning, attention, and **reward/pleasure**. Excess dopamine is linked to schizophrenia; deficiency is linked to Parkinson\'s disease.', hint: 'The "feel good" neurotransmitter.' },
        { topicId: t2.id, front: 'What does serotonin do?', back: 'Regulates **mood, sleep, appetite**, and body temperature. Low serotonin is associated with depression.', hint: 'SSRIs increase serotonin availability.' },
        { topicId: t2.id, front: 'What is Broca\'s area?', back: 'Left frontal lobe area controlling **speech production**. Damage causes Broca\'s aphasia (can understand but cannot speak fluently).', hint: 'Broca\'s = Broken speech.' },
        { topicId: t2.id, front: 'What is Wernicke\'s area?', back: 'Left temporal lobe area responsible for **language comprehension**. Damage causes Wernicke\'s aphasia (fluent but meaningless speech).', hint: 'Wernicke\'s = Wordy but wrong.' },
      ],
    });
    console.log('✅ Biological Bases flashcards');
  }

  const t3 = await prisma.topic.findFirst({ where: { slug: 'sensation-sensory-processing' } });
  if (t3) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t3.id, front: 'What is the absolute threshold?', back: 'The minimum stimulation needed to detect a particular stimulus 50% of the time.', hint: 'The softest sound you can just barely hear.' },
        { topicId: t3.id, front: 'What is sensory adaptation?', back: 'Decreased sensitivity to a constant, unchanging stimulus over time. Example: not noticing background noise after a while.', hint: 'You stop noticing what doesn\'t change.' },
        { topicId: t3.id, front: 'What is the difference between sensation and perception?', back: '**Sensation**: Detection of physical stimuli by sensory organs.\n**Perception**: The brain\'s interpretation and organization of sensory input.', hint: 'Sensation = raw data, Perception = meaning.' },
      ],
    });
    console.log('✅ Sensation & Perception flashcards');
  }

  const t4 = await prisma.topic.findFirst({ where: { slug: 'memory-encoding-storage' } });
  if (t4) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t4.id, front: 'What are the 3 stages of memory?', back: '1. **Encoding**: Processing information into memory\n2. **Storage**: Retaining information over time\n3. **Retrieval**: Getting information back out', hint: 'Like saving and opening a file.' },
        { topicId: t4.id, front: 'What is the difference between short-term and long-term memory?', back: '**Short-term (working) memory**: ~7 items, ~30 seconds without rehearsal.\n**Long-term memory**: Unlimited capacity, potentially permanent storage.', hint: 'STM is the desk; LTM is the filing cabinet.' },
        { topicId: t4.id, front: 'What is the difference between explicit and implicit memory?', back: '**Explicit (declarative)**: Conscious recall — facts (semantic) and personal events (episodic). Hippocampus.\n**Implicit (nondeclarative)**: Unconscious — skills, habits, conditioning. Cerebellum/basal ganglia.', hint: 'Knowing "that" vs. knowing "how".' },
      ],
    });
    console.log('✅ Memory flashcards');
  }

  const t5 = await prisma.topic.findFirst({ where: { slug: 'psychological-disorders-overview' } });
  if (t5) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t5.id, front: 'What is the DSM-5?', back: 'The **Diagnostic and Statistical Manual of Mental Disorders, 5th Edition**. Published by the APA, it provides standard criteria for classifying mental disorders.', hint: 'The "bible" of psychiatric diagnosis.' },
        { topicId: t5.id, front: 'What is generalized anxiety disorder (GAD)?', back: 'Persistent, excessive worry about various everyday things for at least 6 months, with physical symptoms (restlessness, fatigue, muscle tension, difficulty concentrating).', hint: 'Worry about everything, not just one thing.' },
        { topicId: t5.id, front: 'What is major depressive disorder?', back: 'Two or more weeks of depressed mood or loss of interest/pleasure, plus symptoms like sleep changes, fatigue, guilt, difficulty concentrating, or suicidal thoughts.', hint: 'More than just feeling sad — it\'s persistent and disabling.' },
      ],
    });
    console.log('✅ Psychological Disorders flashcards');
  }

  const t6 = await prisma.topic.findFirst({ where: { slug: 'emotion-stress' } });
  if (t6) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t6.id, front: 'James-Lange theory of emotion?', back: 'We experience a physiological response first, then interpret it as an emotion.\n\n"I\'m trembling, therefore I\'m afraid."', hint: 'Body first, then emotion.' },
        { topicId: t6.id, front: 'Cannon-Bard theory of emotion?', back: 'Physiological arousal and emotional experience occur simultaneously and independently.\n\n"I tremble AND feel afraid at the same time."', hint: 'Everything happens at once.' },
        { topicId: t6.id, front: 'Schachter-Singer Two-Factor theory?', back: 'Emotion = physiological arousal + cognitive label. We experience arousal, then label it based on context.\n\n"I\'m aroused and there\'s a bear, so I must be scared."', hint: 'Arousal + label = emotion.' },
      ],
    });
    console.log('✅ Emotion & Stress flashcards');
  }

  console.log('\n✅ All AP Psychology vocabulary flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
