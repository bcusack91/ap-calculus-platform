import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding AP English Language flashcards...\n');

  const topicSlugs = [
    'englang-rhetorical-situation', 'englang-claims-evidence', 'englang-ethos-pathos-logos',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) { console.log(`⚠ Topic not found: ${slug}`); continue; }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  const t1 = await prisma.topic.findFirst({ where: { slug: 'englang-rhetorical-situation' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'What are the elements of the rhetorical situation?', back: '**SOAPSTone**:\n• **S**peaker: who is communicating\n• **O**ccasion: context/event prompting the text\n• **A**udience: who is being addressed\n• **P**urpose: why the text exists\n• **S**ubject: what it\'s about\n• **Tone**: author\'s attitude', hint: 'SOAPSTone.' },
        { topicId: t1.id, front: 'What is rhetorical exigence?', back: 'The **urgency or need** that prompts a writer/speaker to create a text.\n\nIt\'s the problem, issue, or situation that **demands a response**.\n\nWithout exigence, there\'s no motivation to communicate.', hint: 'The reason the text needs to exist now.' },
        { topicId: t1.id, front: 'What is kairos?', back: 'The **opportune moment** or timeliness of an argument.\n\nA rhetorically effective text is delivered at the **right time** when the audience is most receptive.\n\nExample: a climate speech after a natural disaster.', hint: 'Right message at the right time.' },
      ],
    });
    console.log('✅ Rhetorical Situation flashcards');
  }

  const t2 = await prisma.topic.findFirst({ where: { slug: 'englang-claims-evidence' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: 'Types of claims?', back: '• **Fact**: asserts something is true or false\n• **Value**: something is good/bad, right/wrong\n• **Policy**: something should or should not be done\n• **Definition**: defines what something is or means\n• **Cause/effect**: X caused Y', hint: 'Fact, value, policy, definition, cause.' },
        { topicId: t2.id, front: 'What makes evidence effective?', back: '• **Relevant**: directly supports the claim\n• **Sufficient**: enough to be convincing\n• **Credible**: from reliable, authoritative sources\n• **Recent**: up-to-date when timeliness matters\n• **Representative**: not cherry-picked', hint: 'Relevant, sufficient, credible, recent, representative.' },
        { topicId: t2.id, front: 'What is a warrant?', back: 'The **logical connection** between evidence and claim — the unstated assumption that makes the argument work.\n\nClaim: "We should ban X"\nEvidence: "X causes Y harm"\nWarrant: "We should ban things that cause harm"', hint: 'The unstated bridge between evidence and claim.' },
      ],
    });
    console.log('✅ Claims & Evidence flashcards');
  }

  const t3 = await prisma.topic.findFirst({ where: { slug: 'englang-ethos-pathos-logos' } });
  if (t3) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t3.id, front: 'What are the three rhetorical appeals?', back: '**Ethos**: appeal to **credibility/authority** — trust the speaker\n**Pathos**: appeal to **emotion** — feel something\n**Logos**: appeal to **logic/reason** — think rationally\n\nEffective arguments use **all three** in balance.', hint: 'Credibility, emotion, logic.' },
        { topicId: t3.id, front: 'How to identify ethos in a text?', back: 'Look for:\n• Author citing **credentials or experience**\n• References to **expert sources**\n• **Professional tone** and fair-mindedness\n• Acknowledging **counterarguments** (concession)\n• Demonstrating **knowledge** of the subject', hint: 'Credentials, experts, fairness, knowledge.' },
        { topicId: t3.id, front: 'How to identify logos in a text?', back: 'Look for:\n• **Statistics and data**\n• **Logical reasoning** (if-then, cause-effect)\n• **Examples and evidence**\n• **Analogies** and comparisons\n• **Structured argument** (clear organization)', hint: 'Data, reasoning, evidence, structure.' },
        { topicId: t3.id, front: 'How to identify pathos in a text?', back: 'Look for:\n• **Emotionally charged language** (vivid diction)\n• **Anecdotes** and personal stories\n• Appeals to **values, fears, or hopes**\n• **Imagery** that evokes strong feelings\n• Rhetorical questions that stir emotion', hint: 'Emotional language, stories, values, imagery.' },
      ],
    });
    console.log('✅ Ethos, Pathos, Logos flashcards');
  }

  console.log('\n✅ All AP English Language flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
