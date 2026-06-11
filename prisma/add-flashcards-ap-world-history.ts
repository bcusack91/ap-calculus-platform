import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding AP World History flashcards...\n');

  const topicSlugs = [
    'wh-global-tapestry', 'wh-silk-roads-mongols',
    'wh-exploration-columbian-exchange', 'wh-industrial-revolution',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) { console.log(`⚠ Topic not found: ${slug}`); continue; }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  const t1 = await prisma.topic.findFirst({ where: { slug: 'wh-global-tapestry' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'What was the Song Dynasty known for?', back: 'China (960–1279):\n• **Economic revolution**: paper money, banking\n• **Agricultural innovations**: champa rice\n• **Technological advances**: gunpowder, compass, printing\n• **Neo-Confucianism** blended Buddhism & Daoism\n• Largest economy in the world at its peak', hint: 'Chinese economic and technological golden age.' },
        { topicId: t1.id, front: 'What was the Delhi Sultanate?', back: 'Series of **Muslim kingdoms** ruling northern India (1206–1526).\n• Brought **Islam to South Asia**\n• Cultural synthesis of Hindu and Islamic traditions\n• Eventually replaced by the Mughal Empire', hint: 'Muslim rule in India before the Mughals.' },
        { topicId: t1.id, front: 'What were the key features of feudal Europe?', back: '• **Decentralized** political system\n• **Manor system**: self-sufficient agricultural estates\n• Social hierarchy: king → lords → knights → serfs\n• Catholic Church was the **unifying institution**\n• Limited trade and urbanization', hint: 'Decentralized, manors, Church as unifier.' },
      ],
    });
    console.log('✅ Global Tapestry flashcards');
  }

  const t2 = await prisma.topic.findFirst({ where: { slug: 'wh-silk-roads-mongols' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: 'What were the effects of Mongol rule?', back: '**Pax Mongolica** (1200s–1300s):\n• United largest contiguous **land empire** in history\n• Facilitated **trade** across Eurasia (Silk Roads revival)\n• Spread of **technologies** (gunpowder, printing)\n• **Religious tolerance** in most khanates\n• Also spread the **Black Death** along trade routes', hint: 'Peace, trade, technology, and plague.' },
        { topicId: t2.id, front: 'What goods traveled the Silk Roads?', back: '**East → West**: silk, porcelain, spices, tea, paper, gunpowder\n**West → East**: gold, silver, glass, horses, textiles\n\nAlso spread: religions (Buddhism, Islam, Christianity), diseases, technologies', hint: 'Luxury goods + ideas + diseases.' },
        { topicId: t2.id, front: 'What was the role of caravanserais?', back: '**Roadside inns** along trade routes providing rest, food, and safety for merchants and animals.\n\n• Facilitated long-distance trade\n• Served as cultural exchange points', hint: 'Rest stops of the Silk Roads.' },
      ],
    });
    console.log('✅ Silk Roads & Mongols flashcards');
  }

  const t3 = await prisma.topic.findFirst({ where: { slug: 'wh-exploration-columbian-exchange' } });
  if (t3) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t3.id, front: 'What was the Columbian Exchange?', back: 'The massive **transfer of plants, animals, diseases, and people** between the **Americas and Afro-Eurasia** after 1492.\n\n**To Americas**: horses, wheat, sugar, diseases (smallpox)\n**From Americas**: potatoes, corn, tomatoes, tobacco, chocolate', hint: 'Biological exchange between hemispheres.' },
        { topicId: t3.id, front: 'Why did Europeans explore in the 1400s–1500s?', back: '**God, Gold, and Glory**:\n• **God**: spread Christianity\n• **Gold**: find wealth and trade routes\n• **Glory**: national prestige and competition\n\nAlso: new navigation technology (compass, astrolabe, caravel)', hint: 'Three Gs + better ships.' },
        { topicId: t3.id, front: 'What was the impact of disease on the Americas?', back: 'European diseases (smallpox, measles, influenza) killed an estimated **50–90% of indigenous populations**.\n\n• No prior exposure = no immunity\n• Facilitated European conquest\n• Created labor shortages → led to African slave trade', hint: 'Devastating population collapse.' },
      ],
    });
    console.log('✅ Exploration & Columbian Exchange flashcards');
  }

  const t4 = await prisma.topic.findFirst({ where: { slug: 'wh-industrial-revolution' } });
  if (t4) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t4.id, front: 'Why did the Industrial Revolution start in Britain?', back: '• **Natural resources**: coal, iron, waterways\n• **Agricultural revolution**: enclosure movement freed labor\n• **Capital**: banking system and colonial wealth\n• **Stable government**: protected property rights\n• **Geographic advantages**: island nation, ports', hint: 'Resources, labor, capital, stability, geography.' },
        { topicId: t4.id, front: 'What were the social effects of industrialization?', back: '• **Urbanization**: mass migration to cities\n• **New social classes**: industrial middle class and working class\n• **Poor working conditions**: long hours, child labor, unsafe factories\n• **Reform movements**: labor unions, socialism, Marxism\n• **Women and children** entered factory workforce', hint: 'Cities grew, new classes, terrible conditions, reform.' },
      ],
    });
    console.log('✅ Industrial Revolution flashcards');
  }

  console.log('\n✅ All AP World History flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
