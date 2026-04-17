import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding AP English Literature flashcards...\n');

  const topicSlugs = [
    'englit-short-fiction-1', 'englit-poetry-1', 'englit-figurative-language',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) { console.log(`⚠ Topic not found: ${slug}`); continue; }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  const t1 = await prisma.topic.findFirst({ where: { slug: 'englit-short-fiction-1' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'Static vs. dynamic character?', back: '**Static**: remains the **same** throughout the story (no growth or change)\n\n**Dynamic**: undergoes **significant internal change** — beliefs, values, personality\n\nMost protagonists are dynamic; minor characters are often static.', hint: 'Static = unchanged; Dynamic = transformed.' },
        { topicId: t1.id, front: 'What is an unreliable narrator?', back: 'A narrator whose **credibility is compromised** — they may lie, be naive, mentally unstable, or have limited knowledge.\n\nReader must **read between the lines** to find the truth.', hint: 'Can\'t trust everything they say.' },
        { topicId: t1.id, front: 'Direct vs. indirect characterization?', back: '**Direct**: author explicitly **tells** the reader about a character ("She was brave")\n\n**Indirect**: revealed through **STEAL**:\n• **S**peech\n• **T**houghts\n• **E**ffects on others\n• **A**ctions\n• **L**ooks', hint: 'Direct = told; Indirect = shown (STEAL).' },
        { topicId: t1.id, front: 'What is a foil character?', back: 'A character who **contrasts** with another character — usually the protagonist — to **highlight** particular qualities.\n\nExample: Mercutio is a foil to Romeo.', hint: 'Contrast to highlight traits.' },
      ],
    });
    console.log('✅ Short Fiction: Character flashcards');
  }

  const t2 = await prisma.topic.findFirst({ where: { slug: 'englit-poetry-1' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: 'What are the types of imagery?', back: 'Appeals to the **five senses**:\n• **Visual**: sight\n• **Auditory**: sound\n• **Tactile**: touch\n• **Olfactory**: smell\n• **Gustatory**: taste\n\nImagery makes abstract ideas **concrete and vivid**.', hint: 'Five senses: see, hear, touch, smell, taste.' },
        { topicId: t2.id, front: 'What is a conceit?', back: 'An **extended metaphor** that makes an **unusual or surprising comparison** between two seemingly unlike things.\n\n• **Metaphysical conceit**: intellectual, philosophical (John Donne)\n• **Petrarchan conceit**: love poetry, idealized comparisons', hint: 'Extended, surprising metaphor.' },
        { topicId: t2.id, front: 'What is tone vs. mood?', back: '**Tone**: the **author/speaker\'s attitude** toward the subject (sarcastic, reverent, mournful)\n\n**Mood**: the **emotional atmosphere** the reader experiences (eerie, hopeful, tense)\n\nTone creates mood.', hint: 'Tone = author\'s attitude; Mood = reader\'s feeling.' },
      ],
    });
    console.log('✅ Poetry: Imagery flashcards');
  }

  const t3 = await prisma.topic.findFirst({ where: { slug: 'englit-figurative-language' } });
  if (t3) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t3.id, front: 'Simile vs. metaphor vs. analogy?', back: '**Simile**: comparison using "**like**" or "**as**" ("Her smile was like sunshine")\n\n**Metaphor**: direct comparison **without** like/as ("Her smile was sunshine")\n\n**Analogy**: extended comparison for **explanation**', hint: 'Like/as = simile; is = metaphor; explains = analogy.' },
        { topicId: t3.id, front: 'What is synecdoche vs. metonymy?', back: '**Synecdoche**: **part** represents the **whole** (or whole for part)\n• "All hands on deck" (hands = sailors)\n\n**Metonymy**: **associated thing** represents the concept\n• "The White House announced..." (building = president)', hint: 'Part for whole vs. associated thing.' },
        { topicId: t3.id, front: 'What is an allusion?', back: 'An **indirect reference** to a well-known person, event, text, or work of art.\n\nBiblical, mythological, literary, and historical allusions are most common.\n\nPurpose: adds **layers of meaning** by connecting to shared cultural knowledge.', hint: 'Indirect reference to something well-known.' },
        { topicId: t3.id, front: 'What is personification?', back: 'Giving **human qualities** to non-human things (objects, animals, abstract ideas).\n\n"The wind **whispered** through the trees."\n"Justice is **blind**."\n\nMakes descriptions more vivid and relatable.', hint: 'Non-human things acting like humans.' },
      ],
    });
    console.log('✅ Figurative Language flashcards');
  }

  console.log('\n✅ All AP English Literature flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
