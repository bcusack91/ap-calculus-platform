import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding AP African American Studies flashcards...\n');

  const topicSlugs = [
    'aas-african-kingdoms', 'aas-transatlantic-slave-trade',
    'aas-civil-rights-movement', 'aas-great-migration-harlem',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) { console.log(`⚠ Topic not found: ${slug}`); continue; }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  const t1 = await prisma.topic.findFirst({ where: { slug: 'aas-african-kingdoms' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'What was the Kingdom of Mali?', back: 'West African empire (1235–1600):\n• Founded by **Sundiata Keita**\n• Became wealthy through **gold and salt trade**\n• **Mansa Musa** (r. 1312–1337) — famous pilgrimage to Mecca\n• **Timbuktu**: center of learning and Islamic scholarship', hint: 'Gold, Mansa Musa, Timbuktu.' },
        { topicId: t1.id, front: 'Key features of the Kingdom of Kongo?', back: 'Central African kingdom (1390–1914):\n• Centralized government with elected **manikongo** (king)\n• Economy based on **trade, agriculture, metalwork**\n• Early contact with **Portuguese** (1480s)\n• Converted to Christianity but later devastated by **slave trade**', hint: 'Central Africa, Portuguese contact, slave trade devastation.' },
        { topicId: t1.id, front: 'What was Great Zimbabwe?', back: 'Medieval city in southeastern Africa (11th–15th century):\n• Famous **stone enclosures** (no mortar)\n• Center of **gold trade** and cattle herding\n• Connected to **Indian Ocean trade** networks', hint: 'Stone ruins, gold trade, Indian Ocean connections.' },
      ],
    });
    console.log('✅ African Kingdoms flashcards');
  }

  const t2 = await prisma.topic.findFirst({ where: { slug: 'aas-transatlantic-slave-trade' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: 'What was the Middle Passage?', back: 'The **horrific sea voyage** from Africa to the Americas that enslaved Africans were forced to endure.\n\n• Weeks to months in chains below deck\n• Extreme overcrowding, disease, starvation\n• Estimated **15–20% mortality rate**\n• Part of the triangular trade system', hint: 'The ocean crossing: Africa → Americas.' },
        { topicId: t2.id, front: 'What was the triangular trade?', back: '**Three-legged** Atlantic trade system:\n1. **Europe → Africa**: manufactured goods (guns, textiles)\n2. **Africa → Americas**: enslaved people (Middle Passage)\n3. **Americas → Europe**: raw materials (sugar, tobacco, cotton)', hint: 'Goods → People → Raw materials → repeat.' },
        { topicId: t2.id, front: 'How many people were enslaved?', back: 'Estimated **12.5 million** Africans were transported across the Atlantic (1500s–1800s).\n\n• About **10.7 million survived** the Middle Passage\n• Majority went to **Brazil and the Caribbean**\n• About **388,000** went directly to North America', hint: '12.5 million transported; most to Brazil/Caribbean.' },
      ],
    });
    console.log('✅ Transatlantic Slave Trade flashcards');
  }

  const t3 = await prisma.topic.findFirst({ where: { slug: 'aas-civil-rights-movement' } });
  if (t3) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t3.id, front: 'What was Brown v. Board of Education?', back: '**1954 Supreme Court ruling**: "Separate but equal" is **inherently unequal** in public schools.\n\n• Overturned **Plessy v. Ferguson** (1896)\n• Ordered **desegregation** of schools\n• Argued by **Thurgood Marshall**', hint: '1954: separate is NOT equal.' },
        { topicId: t3.id, front: 'Key strategies of the Civil Rights Movement?', back: '• **Nonviolent direct action** (MLK, SNCC): sit-ins, marches, boycotts\n• **Legal challenges** (NAACP/LDF): court cases targeting segregation\n• **Voter registration** drives: Freedom Summer (1964)\n• **Media attention**: TV coverage of brutality built public support', hint: 'Nonviolence, courts, voting, media, coalitions.' },
        { topicId: t3.id, front: 'What were the major Civil Rights laws?', back: '**Civil Rights Act of 1964**: banned discrimination in public accommodations, employment; created EEOC\n\n**Voting Rights Act of 1965**: banned literacy tests, federal oversight of elections in the South\n\n**Fair Housing Act of 1968**: banned discrimination in housing sales/rentals', hint: '1964 = public/employment, 1965 = voting, 1968 = housing.' },
      ],
    });
    console.log('✅ Civil Rights Movement flashcards');
  }

  const t4 = await prisma.topic.findFirst({ where: { slug: 'aas-great-migration-harlem' } });
  if (t4) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t4.id, front: 'What was the Great Migration?', back: 'Massive movement of **6+ million African Americans** from the rural South to cities in the North, Midwest, and West (1910–1970).\n\n**Push**: Jim Crow, sharecropping, racial violence\n**Pull**: factory jobs, better pay, less overt segregation', hint: '6 million moved North — two waves.' },
        { topicId: t4.id, front: 'What was the Harlem Renaissance?', back: 'A **cultural, artistic, and intellectual explosion** centered in Harlem, NYC (1920s–1930s).\n\nKey figures:\n• **Langston Hughes**: poetry\n• **Zora Neale Hurston**: novels\n• **Duke Ellington & Louis Armstrong**: jazz\n• **Claude McKay**: writing', hint: 'Harlem in the 1920s — art, literature, jazz.' },
      ],
    });
    console.log('✅ Great Migration & Harlem Renaissance flashcards');
  }

  console.log('\n✅ All AP African American Studies flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
