import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding AP Chemistry reaction types flashcards...\n');

  const topicSlugs = [
    'reaction-types',
    'oxidation-reduction-reactions',
    'net-ionic-equations',
    'stoichiometry-limiting-reactants',
    'reaction-mechanisms',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) { console.log(`⚠ Topic not found: ${slug}`); continue; }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  const t1 = await prisma.topic.findFirst({ where: { slug: 'reaction-types' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'What is a synthesis (combination) reaction?', back: 'Two or more reactants combine to form one product.\n\n$A + B \\to AB$\n\nExample: $2\\text{Mg} + \\text{O}_2 \\to 2\\text{MgO}$', hint: 'Many things become one.' },
        { topicId: t1.id, front: 'What is a decomposition reaction?', back: 'One compound breaks down into two or more simpler substances.\n\n$AB \\to A + B$\n\nExample: $2\\text{H}_2\\text{O} \\to 2\\text{H}_2 + \\text{O}_2$', hint: 'One thing becomes many.' },
        { topicId: t1.id, front: 'What is a single replacement reaction?', back: 'One element replaces another in a compound.\n\n$A + BC \\to AC + B$\n\nExample: $\\text{Zn} + \\text{CuSO}_4 \\to \\text{ZnSO}_4 + \\text{Cu}$', hint: 'Check the activity series to predict if it occurs.' },
        { topicId: t1.id, front: 'What is a double replacement (metathesis) reaction?', back: 'Cations and anions of two compounds exchange partners.\n\n$AB + CD \\to AD + CB$\n\nExample: $\\text{AgNO}_3 + \\text{NaCl} \\to \\text{AgCl}\\downarrow + \\text{NaNO}_3$', hint: 'Often produces a precipitate, gas, or water.' },
        { topicId: t1.id, front: 'What is a combustion reaction?', back: 'A substance reacts with $\\text{O}_2$, releasing energy.\n\nHydrocarbon combustion: $\\text{C}_x\\text{H}_y + \\text{O}_2 \\to \\text{CO}_2 + \\text{H}_2\\text{O}$', hint: 'Burning = reaction with oxygen.' },
      ],
    });
    console.log('✅ Reaction Types flashcards');
  }

  const t2 = await prisma.topic.findFirst({ where: { slug: 'oxidation-reduction-reactions' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: 'What is oxidation?', back: 'Loss of electrons (increase in oxidation number).\n\nMnemonic: **OIL** — Oxidation Is Loss.', hint: 'Think about what happens to the electrons.' },
        { topicId: t2.id, front: 'What is reduction?', back: 'Gain of electrons (decrease in oxidation number).\n\nMnemonic: **RIG** — Reduction Is Gain.', hint: 'OIL RIG helps remember both.' },
        { topicId: t2.id, front: 'What is an oxidizing agent?', back: 'The substance that gets reduced (gains electrons) and causes another substance to be oxidized.', hint: 'It oxidizes others but is itself reduced.' },
        { topicId: t2.id, front: 'How do you assign oxidation numbers to elements in their standard state?', back: 'Elements in their standard state have oxidation number **0**.\n\nExamples: $\\text{O}_2$, $\\text{Fe}$, $\\text{N}_2$ all have oxidation number 0.', hint: 'Free elements = zero.' },
      ],
    });
    console.log('✅ Oxidation-Reduction flashcards');
  }

  const t3 = await prisma.topic.findFirst({ where: { slug: 'net-ionic-equations' } });
  if (t3) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t3.id, front: 'What are spectator ions?', back: 'Ions that appear on both sides of an equation and do not participate in the reaction. They are removed to write the net ionic equation.', hint: 'They just "watch" the reaction happen.' },
        { topicId: t3.id, front: 'What are the solubility rules for nitrates and alkali metals?', back: 'All **nitrates** ($\\text{NO}_3^-$) and all alkali metal compounds (**Li, Na, K, Rb, Cs**) are soluble.', hint: 'These are never precipitates.' },
      ],
    });
    console.log('✅ Net Ionic Equations flashcards');
  }

  const t4 = await prisma.topic.findFirst({ where: { slug: 'stoichiometry-limiting-reactants' } });
  if (t4) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t4.id, front: 'What is the limiting reactant?', back: 'The reactant that is completely consumed first, determining the maximum amount of product.', hint: 'Convert each reactant to moles of product and compare.' },
        { topicId: t4.id, front: 'How do you calculate percent yield?', back: '$\\text{Percent yield} = \\frac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100\\%$', hint: 'What you actually got divided by what you expected.' },
      ],
    });
    console.log('✅ Stoichiometry flashcards');
  }

  const t5 = await prisma.topic.findFirst({ where: { slug: 'reaction-mechanisms' } });
  if (t5) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t5.id, front: 'What is the rate-determining step?', back: 'The slowest elementary step in a reaction mechanism. It limits the overall reaction rate.', hint: 'Bottleneck of the reaction.' },
        { topicId: t5.id, front: 'What is a catalyst?', back: 'A substance that increases reaction rate by lowering activation energy. It is not consumed in the overall reaction.', hint: 'Appears in one step, regenerated in another.' },
        { topicId: t5.id, front: 'What is an intermediate?', back: 'A species produced in one step and consumed in a later step. It does NOT appear in the overall balanced equation.', hint: 'Made and then used up during the mechanism.' },
      ],
    });
    console.log('✅ Reaction Mechanisms flashcards');
  }

  console.log('\n✅ All AP Chemistry reaction types flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
