import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding AP Human Geography flashcards...\n');

  const topicSlugs = [
    'hg-intro-geography', 'hg-population-distribution', 'hg-migration',
    'hg-culture-diffusion', 'hg-political-geography', 'hg-urbanization',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) { console.log(`⚠ Topic not found: ${slug}`); continue; }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  const t1 = await prisma.topic.findFirst({ where: { slug: 'hg-intro-geography' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'What is human geography?', back: 'The study of how **humans interact with and modify** the physical environment, and how spatial patterns of human activity emerge across the globe.', hint: 'People + place + patterns' },
        { topicId: t1.id, front: 'What is a formal region?', back: 'An area defined by **uniform characteristics** — such as language, climate, or government. Also called a uniform region.\n\nExample: the Corn Belt, Francophone Africa.', hint: 'One shared trait defines the boundary.' },
        { topicId: t1.id, front: 'What is a functional region?', back: 'A region organized around a **central node or focal point**, with connections decreasing with distance.\n\nExample: a city\'s commuter zone, a pizza delivery area.', hint: 'Think hub-and-spoke.' },
        { topicId: t1.id, front: 'What is a perceptual (vernacular) region?', back: 'A region defined by **people\'s feelings and attitudes** rather than precise boundaries.\n\nExamples: "the South," "the Middle East," "Dixie."', hint: 'Exists in people\'s minds.' },
        { topicId: t1.id, front: 'What is spatial distribution?', back: 'The arrangement of a phenomenon (people, cities, resources) **across Earth\'s surface**. Can be clustered, dispersed, or linear.', hint: 'Where things are and how they are arranged.' },
      ],
    });
    console.log('✅ Introduction to Geography flashcards');
  }

  const t2 = await prisma.topic.findFirst({ where: { slug: 'hg-population-distribution' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: 'What is population density?', back: 'The number of people per unit of land area. **Arithmetic density** = total population ÷ total land area.\n\n**Physiological density** = population ÷ arable land.', hint: 'Two key types: arithmetic vs. physiological.' },
        { topicId: t2.id, front: 'What is carrying capacity?', back: 'The **maximum population** an area can sustain given its resources, technology, and cultural practices.', hint: 'Nature\'s population limit.' },
        { topicId: t2.id, front: 'Where are the four major population clusters?', back: '1. **East Asia** (China, Japan, Korea)\n2. **South Asia** (India, Bangladesh, Pakistan)\n3. **Southeast Asia** (Indonesia, Philippines)\n4. **Europe** (Western & Central)', hint: 'All in the Northern Hemisphere.' },
        { topicId: t2.id, front: 'What factors influence population distribution?', back: '• **Physical**: climate, water, soil, terrain\n• **Historical**: colonization, migration patterns\n• **Economic**: jobs, resources, trade routes\n• **Political**: borders, policies, conflicts', hint: 'Physical + human factors combined.' },
      ],
    });
    console.log('✅ Population Distribution flashcards');
  }

  const t3 = await prisma.topic.findFirst({ where: { slug: 'hg-migration' } });
  if (t3) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t3.id, front: 'What is Ravenstein\'s Laws of Migration?', back: 'Key principles:\n1. Most migrants travel **short distances**\n2. Migration proceeds **step by step**\n3. Long-distance migrants go to **major cities**\n4. Each migration stream produces a **counter-stream**\n5. **Urban residents** are less migratory than rural', hint: 'Published in 1885, still largely valid.' },
        { topicId: t3.id, front: 'Push vs. pull factors?', back: '**Push factors**: forces that drive people **away** — war, poverty, persecution, natural disasters.\n\n**Pull factors**: attractions that draw people **to a place** — jobs, freedom, education, family.', hint: 'Push = negative at origin; Pull = positive at destination.' },
        { topicId: t3.id, front: 'What is chain migration?', back: 'Migration of people to a specific location because **relatives or members of the same community** previously migrated there. Creates ethnic neighborhoods and enclaves.', hint: 'Following family/community connections.' },
        { topicId: t3.id, front: 'Voluntary vs. forced migration?', back: '**Voluntary**: migrants choose to move (economic opportunity, lifestyle).\n\n**Forced**: migrants are compelled to move — refugees, asylum seekers, victims of human trafficking, enslaved peoples.', hint: 'Choice vs. compulsion.' },
      ],
    });
    console.log('✅ Migration Patterns flashcards');
  }

  const t4 = await prisma.topic.findFirst({ where: { slug: 'hg-culture-diffusion' } });
  if (t4) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t4.id, front: 'What are the three types of cultural diffusion?', back: '1. **Hierarchical**: spreads through authority figures (fashion trends, tech)\n2. **Contagious**: spreads through direct contact (disease, social media trends)\n3. **Stimulus**: idea sparks a *new* innovation locally (e.g., McDonald\'s menu variations)', hint: 'Hierarchy, contact, and stimulus.' },
        { topicId: t4.id, front: 'What is cultural landscape?', back: 'The **visible imprint** of human activity on the physical environment — buildings, agricultural patterns, road networks, signage.\n\nCarl Sauer coined the term.', hint: 'What you can see that humans created.' },
        { topicId: t4.id, front: 'What is acculturation vs. assimilation?', back: '**Acculturation**: adopting traits of a dominant culture while **keeping** some original traditions.\n\n**Assimilation**: fully adopting the dominant culture, often **losing** original cultural identity.', hint: 'Partial blend vs. total adoption.' },
      ],
    });
    console.log('✅ Cultural Diffusion flashcards');
  }

  const t5 = await prisma.topic.findFirst({ where: { slug: 'hg-political-geography' } });
  if (t5) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t5.id, front: 'What is sovereignty?', back: 'A state\'s ability to **govern itself** without outside interference. A sovereign state has:\n• Defined territory\n• Permanent population\n• Government\n• Recognition by other states', hint: 'Self-rule — the 4 criteria of statehood.' },
        { topicId: t5.id, front: 'What is gerrymandering?', back: 'The manipulation of **electoral district boundaries** to favor a particular political party or group.\n\nTwo types: **packing** (concentrating opponents) and **cracking** (splitting opponents).', hint: 'Drawing districts for political advantage.' },
        { topicId: t5.id, front: 'Types of boundaries?', back: '• **Natural/physical**: rivers, mountains, lakes\n• **Geometric**: straight lines (U.S.-Canada 49th parallel)\n• **Ethnic/cultural**: language, religion boundaries\n• **Relic**: no longer functions but landscape evidence remains (Berlin Wall)', hint: 'Physical, geometric, cultural, relic.' },
        { topicId: t5.id, front: 'What is devolution?', back: 'The transfer of power from a **central government** to regional or local authorities. Often driven by ethnic, economic, or spatial reasons.\n\nExamples: Scotland, Catalonia, Quebec.', hint: 'Power moving down from the center.' },
      ],
    });
    console.log('✅ Political Geography flashcards');
  }

  const t6 = await prisma.topic.findFirst({ where: { slug: 'hg-urbanization' } });
  if (t6) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t6.id, front: 'What is the Burgess Concentric Zone Model?', back: 'City organized in **concentric rings** from center outward:\n1. CBD (Central Business District)\n2. Zone of transition (industry, poverty)\n3. Working-class homes\n4. Middle-class homes\n5. Commuter zone', hint: '5 rings from the center outward.' },
        { topicId: t6.id, front: 'What is a primate city?', back: 'A city that is **at least twice as large** as the next largest city in the country and dominates national life.\n\nExamples: Paris (France), London (UK), Bangkok (Thailand).', hint: 'Disproportionately large and dominant.' },
        { topicId: t6.id, front: 'What is suburbanization?', back: 'The growth of **residential areas on the outskirts** of cities, driven by automobile access, affordable housing, and desire for more space.\n\nLeads to urban sprawl and edge cities.', hint: 'People moving to the edges of cities.' },
        { topicId: t6.id, front: 'What is gentrification?', back: 'The process of **wealthier residents moving into** deteriorated urban neighborhoods, renovating housing, and raising property values — often displacing original lower-income residents.', hint: 'Renovation that displaces existing residents.' },
      ],
    });
    console.log('✅ Urbanization flashcards');
  }

  console.log('\n✅ All AP Human Geography flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
