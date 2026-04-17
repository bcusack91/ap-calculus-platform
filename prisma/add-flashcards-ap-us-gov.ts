import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding AP US Government flashcards...\n');

  const topicSlugs = [
    'gov-constitutional-foundations', 'gov-federalism',
    'gov-civil-liberties', 'gov-voting-elections',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) { console.log(`⚠ Topic not found: ${slug}`); continue; }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  const t1 = await prisma.topic.findFirst({ where: { slug: 'gov-constitutional-foundations' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'What are the six principles of the Constitution?', back: '1. **Popular sovereignty** — power from the people\n2. **Limited government** — government power is restricted\n3. **Separation of powers** — three branches\n4. **Checks and balances** — each branch limits others\n5. **Judicial review** — courts review constitutionality\n6. **Federalism** — shared state/federal power', hint: 'Six core principles of American governance.' },
        { topicId: t1.id, front: 'What is the Supremacy Clause?', back: 'Article VI: the Constitution, federal laws, and treaties are the **"supreme law of the land"** — they override conflicting state laws.', hint: 'Federal law > state law.' },
        { topicId: t1.id, front: 'What established judicial review?', back: '**Marbury v. Madison** (1803): Chief Justice Marshall declared a law unconstitutional, establishing the Supreme Court\'s power of **judicial review**.\n\nNot explicitly in the Constitution.', hint: 'Marbury v. Madison, 1803.' },
        { topicId: t1.id, front: 'What are the Articles of the Constitution?', back: '• **Article I**: Legislative (Congress)\n• **Article II**: Executive (President)\n• **Article III**: Judicial (Courts)\n• **Article IV**: States & territories\n• **Article V**: Amendment process\n• **Article VI**: Supremacy clause\n• **Article VII**: Ratification', hint: '7 articles — branches, states, amending, supremacy, ratification.' },
      ],
    });
    console.log('✅ Constitutional Foundations flashcards');
  }

  const t2 = await prisma.topic.findFirst({ where: { slug: 'gov-federalism' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: 'Enumerated vs. reserved vs. concurrent powers?', back: '**Enumerated**: powers specifically granted to **Congress** (e.g., coin money, declare war)\n\n**Reserved**: powers kept by the **states** (10th Amendment) — education, marriage, elections\n\n**Concurrent**: shared by **both** — taxation, law enforcement', hint: 'Federal, state, or shared.' },
        { topicId: t2.id, front: 'What is fiscal federalism?', back: 'The use of **federal grants** to influence state and local policy:\n• **Categorical grants**: specific purpose, strict conditions\n• **Block grants**: broader purpose, more state flexibility\n• **Unfunded mandates**: federal requirements without funding', hint: 'Federal money as a policy lever.' },
        { topicId: t2.id, front: 'What is the Commerce Clause?', back: 'Article I, Section 8: Congress can regulate **interstate commerce**. Broadly interpreted to expand federal power.\n\nKey cases: Gibbons v. Ogden (1824), Heart of Atlanta Motel v. US (1964).', hint: 'Federal power to regulate trade between states.' },
      ],
    });
    console.log('✅ Federalism flashcards');
  }

  const t3 = await prisma.topic.findFirst({ where: { slug: 'gov-civil-liberties' } });
  if (t3) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t3.id, front: 'What is selective incorporation?', back: 'The process by which the Supreme Court applies **Bill of Rights protections to the states** through the 14th Amendment\'s Due Process Clause.\n\nDone case by case, not all at once.', hint: '14th Amendment applies federal rights to states.' },
        { topicId: t3.id, front: 'What are the First Amendment freedoms?', back: 'Five freedoms:\n1. **Religion** (Establishment + Free Exercise clauses)\n2. **Speech**\n3. **Press**\n4. **Assembly**\n5. **Petition**\n\nNone are absolute — all have limits.', hint: 'RAPPS: Religion, Assembly, Press, Petition, Speech.' },
        { topicId: t3.id, front: 'What is the exclusionary rule?', back: 'Evidence obtained through **illegal searches** (violating the 4th Amendment) cannot be used in court.\n\nEstablished in **Mapp v. Ohio** (1961).', hint: 'Illegally obtained evidence is excluded.' },
        { topicId: t3.id, front: 'What are Miranda rights?', back: 'From **Miranda v. Arizona** (1966): police must inform suspects of their rights before custodial interrogation:\n• Right to remain silent\n• Anything you say can be used against you\n• Right to an attorney\n• If you cannot afford one, one will be appointed', hint: 'You have the right to remain silent...' },
      ],
    });
    console.log('✅ Civil Liberties flashcards');
  }

  const t4 = await prisma.topic.findFirst({ where: { slug: 'gov-voting-elections' } });
  if (t4) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t4.id, front: 'What is the Electoral College?', back: '**538 total electors** (435 House + 100 Senate + 3 DC).\n**270 needed** to win.\nMost states use **winner-take-all**.', hint: '538 electors, 270 to win.' },
        { topicId: t4.id, front: 'What are linkage institutions?', back: 'Organizations that connect citizens to government:\n• **Political parties**\n• **Interest groups**\n• **Elections**\n• **Media**\n\nThey translate public preferences into policy.', hint: 'Bridges between people and government.' },
        { topicId: t4.id, front: 'Rational choice vs. retrospective vs. prospective voting?', back: '**Rational choice**: vote based on **self-interest** calculation\n**Retrospective**: vote based on **past performance** of incumbent\n**Prospective**: vote based on **future promises** of candidates', hint: 'Self-interest, past results, or future promises.' },
      ],
    });
    console.log('✅ Voting & Elections flashcards');
  }

  console.log('\n✅ All AP US Government flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
