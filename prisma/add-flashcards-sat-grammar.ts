import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding SAT grammar rules flashcards...\n');

  const topicSlugs = [
    'sat-subject-verb-agreement',
    'sat-pronoun-agreement',
    'sat-punctuation-commas-semicolons',
    'sat-sentence-structure',
    'sat-transitions-organization',
    'sat-conciseness-redundancy',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) { console.log(`⚠ Topic not found: ${slug}`); continue; }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  const t1 = await prisma.topic.findFirst({ where: { slug: 'sat-subject-verb-agreement' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'Subject-verb agreement with prepositional phrases?', back: 'The verb agrees with the **subject**, not the object of the preposition.\n\n✅ "The box **of chocolates** is on the table."\n❌ "The box of chocolates are on the table."', hint: 'Ignore what comes between subject and verb.' },
        { topicId: t1.id, front: 'Subject-verb agreement with "neither...nor" and "either...or"?', back: 'The verb agrees with the **nearer** subject.\n\n✅ "Neither the students **nor the teacher** was ready."\n✅ "Neither the teacher **nor the students** were ready."', hint: 'Look at whichever subject is closer to the verb.' },
        { topicId: t1.id, front: 'Are collective nouns (team, group, committee) singular or plural?', back: 'Usually **singular** when acting as a unit.\n\n✅ "The team **is** celebrating its victory."', hint: 'One group = singular verb.' },
      ],
    });
    console.log('✅ Subject-Verb Agreement flashcards');
  }

  const t2 = await prisma.topic.findFirst({ where: { slug: 'sat-pronoun-agreement' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: 'When do you use "who" vs. "whom"?', back: '**Who** = subject (he/she/they)\n**Whom** = object (him/her/them)\n\nTrick: If you can replace with "he," use "who." If "him," use "whom."', hint: 'Who did it? → Who. Did it to whom? → Whom.' },
        { topicId: t2.id, front: 'Pronoun-antecedent agreement rule?', back: 'A pronoun must agree with its antecedent in **number** and **gender**.\n\n✅ "Every student should bring **his or her** notebook."\n✅ "All students should bring **their** notebooks."', hint: 'Singular antecedent = singular pronoun.' },
      ],
    });
    console.log('✅ Pronoun Agreement flashcards');
  }

  const t3 = await prisma.topic.findFirst({ where: { slug: 'sat-punctuation-commas-semicolons' } });
  if (t3) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t3.id, front: 'When do you use a semicolon?', back: 'To join two **independent clauses** without a conjunction.\n\n✅ "She studied hard; she aced the exam."\n\nAlso used with conjunctive adverbs: "She studied hard; therefore, she aced the exam."', hint: 'Both sides must be complete sentences.' },
        { topicId: t3.id, front: 'When do you use a colon?', back: 'After a **complete sentence** to introduce a list, explanation, or elaboration.\n\n✅ "She had one goal: to pass the exam."\n❌ "She wanted: to pass the exam."', hint: 'What comes before the colon must be a complete thought.' },
        { topicId: t3.id, front: 'Comma splice — what is it and how to fix it?', back: 'Joining two independent clauses with only a comma.\n\n❌ "I ran fast, I still lost."\n\nFix with:\n- Period: "I ran fast. I still lost."\n- Semicolon: "I ran fast; I still lost."\n- Conjunction: "I ran fast, but I still lost."', hint: 'A comma alone can\'t join two full sentences.' },
      ],
    });
    console.log('✅ Punctuation flashcards');
  }

  const t4 = await prisma.topic.findFirst({ where: { slug: 'sat-sentence-structure' } });
  if (t4) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t4.id, front: 'What is a dangling modifier?', back: 'A modifier that doesn\'t clearly refer to the word it\'s supposed to modify.\n\n❌ "Running to the bus, my coffee spilled." (Coffee wasn\'t running.)\n✅ "Running to the bus, I spilled my coffee."', hint: 'The subject after the comma must be doing the action.' },
        { topicId: t4.id, front: 'What is parallel structure?', back: 'Items in a list or comparison must be in the same grammatical form.\n\n❌ "She likes hiking, swimming, and to bike."\n✅ "She likes hiking, swimming, and biking."', hint: 'Match the form: all -ing, all nouns, all infinitives.' },
      ],
    });
    console.log('✅ Sentence Structure flashcards');
  }

  const t5 = await prisma.topic.findFirst({ where: { slug: 'sat-transitions-organization' } });
  if (t5) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t5.id, front: 'Contrast transitions (list 5)', back: '**However**, **nevertheless**, **on the other hand**, **in contrast**, **although**, **despite**, **conversely**, **yet**, **whereas**', hint: 'Signal a shift or opposition.' },
        { topicId: t5.id, front: 'Cause-effect transitions (list 5)', back: '**Therefore**, **consequently**, **as a result**, **thus**, **hence**, **because**, **since**, **accordingly**', hint: 'Show that one thing leads to another.' },
        { topicId: t5.id, front: 'Addition transitions (list 5)', back: '**Furthermore**, **moreover**, **in addition**, **also**, **likewise**, **similarly**, **additionally**', hint: 'Add more of the same idea.' },
      ],
    });
    console.log('✅ Transitions flashcards');
  }

  const t6 = await prisma.topic.findFirst({ where: { slug: 'sat-conciseness-redundancy' } });
  if (t6) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t6.id, front: 'What is redundancy in writing?', back: 'Using unnecessary words that repeat the same idea.\n\n❌ "She returned **back** to the store."\n✅ "She returned to the store."\n\n❌ "The **true** fact is…"\n✅ "The fact is…"', hint: 'Shorter is usually better on the SAT.' },
        { topicId: t6.id, front: 'SAT Writing golden rule for conciseness?', back: 'When two answer choices express the same idea, **choose the shorter one** — as long as it\'s grammatically correct and clear.', hint: 'Don\'t use 10 words when 5 will do.' },
      ],
    });
    console.log('✅ Conciseness flashcards');
  }

  console.log('\n✅ All SAT grammar rules flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
