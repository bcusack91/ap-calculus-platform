import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding AP US History flashcards...\n');

  const topicSlugs = [
    'apush-colonial-america', 'apush-revolution-independence',
    'apush-civil-war', 'apush-reconstruction',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) { console.log(`⚠ Topic not found: ${slug}`); continue; }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  const t1 = await prisma.topic.findFirst({ where: { slug: 'apush-colonial-america' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'What were the three colonial regions?', back: '**New England**: religious (Puritan), subsistence farming, fishing, shipbuilding\n**Middle**: diverse, "breadbasket" agriculture, trade\n**Southern**: plantation agriculture (tobacco, rice, indigo), enslaved labor, rigid social hierarchy', hint: 'North = religion, Middle = diversity, South = plantations.' },
        { topicId: t1.id, front: 'What was mercantilism?', back: 'Economic theory that a nation\'s power depends on its **wealth (bullion)**.\n• Colonies exist to benefit the **mother country**\n• Export more than import (favorable balance of trade)\n• Navigation Acts restricted colonial trade to Britain', hint: 'Colonies serve the mother country\'s wealth.' },
        { topicId: t1.id, front: 'What was salutary neglect?', back: 'Britain\'s **unofficial policy** of loosely enforcing trade regulations in the colonies (roughly 1607–1763).\n\nAllowed colonies to develop **self-governance** and economic independence.\n\nEnded after the French and Indian War.', hint: 'Britain looked the other way — until 1763.' },
      ],
    });
    console.log('✅ Colonial America flashcards');
  }

  const t2 = await prisma.topic.findFirst({ where: { slug: 'apush-revolution-independence' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: 'What were the key causes of the American Revolution?', back: '• **Taxation without representation**: Stamp Act, Tea Act\n• End of **salutary neglect** after 1763\n• **Enlightenment ideas**: natural rights, social contract\n• British **military presence** (Quartering Act)\n• Colonial **unity**: Committees of Correspondence, Continental Congress', hint: 'Taxes, ideas, military, and growing unity.' },
        { topicId: t2.id, front: 'What was the Declaration of Independence?', back: 'Written by **Thomas Jefferson** (1776):\n• Based on **Locke\'s** natural rights (life, liberty, pursuit of happiness)\n• **Social contract** theory — government by consent of the governed\n• Listed **grievances** against King George III\n• Declared colonies **independent states**', hint: 'Jefferson, Locke, grievances, independence.' },
        { topicId: t2.id, front: 'Key battles and turning points?', back: '• **Lexington & Concord** (1775): "shot heard round the world"\n• **Saratoga** (1777): turning point — France enters as ally\n• **Valley Forge** (1777–78): harsh winter, army endures\n• **Yorktown** (1781): final major battle, Cornwallis surrenders', hint: 'Lexington starts it, Saratoga turns it, Yorktown ends it.' },
      ],
    });
    console.log('✅ Revolution & Independence flashcards');
  }

  const t3 = await prisma.topic.findFirst({ where: { slug: 'apush-civil-war' } });
  if (t3) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t3.id, front: 'What were the causes of the Civil War?', back: '• **Slavery**: central moral and economic divide\n• **States\' rights** vs. federal authority\n• **Sectionalism**: North (industrial) vs. South (agricultural)\n• **Political failures**: Compromise of 1850, Kansas-Nebraska Act\n• **Election of Lincoln** (1860): South secedes', hint: 'Slavery was the root cause; sectionalism and politics escalated.' },
        { topicId: t3.id, front: 'What was the Emancipation Proclamation?', back: 'Issued by **Lincoln on Jan. 1, 1863**:\n• Freed enslaved people in **Confederate states only**\n• Did NOT free slaves in border states\n• Transformed the war into a fight **against slavery**\n• Allowed Black soldiers to join the Union Army', hint: 'Freed slaves in rebel states, changed war\'s purpose.' },
        { topicId: t3.id, front: 'What were the advantages of each side?', back: '**Union (North)**:\n• Larger population, industry, railroads\n• Stronger navy (blockade)\n• More resources and money\n\n**Confederacy (South)**:\n• Defensive war on home territory\n• Superior military leadership (early war)\n• Motivation to protect way of life', hint: 'North: resources. South: defense and motivation.' },
      ],
    });
    console.log('✅ Civil War flashcards');
  }

  const t4 = await prisma.topic.findFirst({ where: { slug: 'apush-reconstruction' } });
  if (t4) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t4.id, front: 'What were the Reconstruction Amendments?', back: '**13th** (1865): Abolished slavery\n**14th** (1868): Citizenship, equal protection, due process\n**15th** (1870): Voting rights regardless of race\n\nAll three were designed to protect the rights of formerly enslaved people.', hint: '13 = freedom, 14 = citizenship, 15 = vote.' },
        { topicId: t4.id, front: 'What ended Reconstruction?', back: '**Compromise of 1877**: Hayes wins presidency; federal troops **withdraw from the South**.\n\nResult:\n• **Jim Crow laws** enforced segregation\n• **Black Codes** restricted freedom\n• **Sharecropping** trapped many in economic dependence\n• Voting restrictions (poll taxes, literacy tests)', hint: '1877 compromise → Jim Crow era.' },
      ],
    });
    console.log('✅ Reconstruction flashcards');
  }

  console.log('\n✅ All AP US History flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
