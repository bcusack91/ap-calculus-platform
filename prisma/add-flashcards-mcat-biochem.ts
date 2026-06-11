import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding MCAT biochemistry pathways flashcards...\n');

  const topicSlugs = [
    'mcat-biochemistry-bioenergetics-mcat',
    'mcat-biochemistry-carbohydrate-metabolism-mcat',
    'mcat-biochemistry-lipid-metabolism-mcat',
    'mcat-biochemistry-enzymes-kinetics-mcat',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) { console.log(`⚠ Topic not found: ${slug}`); continue; }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  const t1 = await prisma.topic.findFirst({ where: { slug: 'mcat-biochemistry-bioenergetics-mcat' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'How many ATP are produced per glucose in aerobic respiration?', back: '**~30-32 ATP** total:\n- Glycolysis: 2 ATP + 2 NADH\n- Pyruvate dehydrogenase: 2 NADH\n- Krebs cycle: 2 ATP + 6 NADH + 2 FADH₂\n- ETC: ~26-28 ATP from electron carriers\n\nNADH → ~2.5 ATP each; FADH₂ → ~1.5 ATP each', hint: 'Most ATP comes from oxidative phosphorylation.' },
        { topicId: t1.id, front: 'What is substrate-level phosphorylation?', back: 'Direct transfer of a phosphate group from a substrate to ADP, forming ATP. Occurs in:\n- **Glycolysis** (2 ATP)\n- **Krebs cycle** (1 GTP → ATP per turn)', hint: 'No electron transport chain needed.' },
        { topicId: t1.id, front: 'What is the difference between $\\Delta G$ and $\\Delta G^\\circ$?', back: '$\\Delta G^\\circ$: Standard free energy change (1M, 1 atm, 25°C).\n$\\Delta G$: Actual free energy change under **cellular conditions**.\n\nA reaction with positive $\\Delta G^\\circ$ can still proceed if concentrations make $\\Delta G$ negative.', hint: 'Cellular conditions ≠ standard conditions.' },
      ],
    });
    console.log('✅ Bioenergetics flashcards');
  }

  const t2 = await prisma.topic.findFirst({ where: { slug: 'mcat-biochemistry-carbohydrate-metabolism-mcat' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: 'What are the 3 irreversible steps of glycolysis?', back: '1. **Hexokinase**: Glucose → Glucose-6-phosphate\n2. **PFK-1**: Fructose-6-phosphate → Fructose-1,6-bisphosphate (**rate-limiting**)\n3. **Pyruvate kinase**: PEP → Pyruvate', hint: 'PFK-1 is the key regulatory enzyme.' },
        { topicId: t2.id, front: 'What regulates PFK-1 (main glycolysis regulator)?', back: '**Activated by**: AMP, fructose-2,6-bisphosphate (F2,6BP), insulin (indirectly)\n**Inhibited by**: ATP, citrate\n\nHigh energy = slow down glycolysis. Low energy = speed up.', hint: 'Energy status of the cell controls glycolysis.' },
        { topicId: t2.id, front: 'What is gluconeogenesis?', back: 'Synthesis of glucose from non-carbohydrate sources (lactate, amino acids, glycerol). Essentially the **reverse of glycolysis** with 3 bypass enzymes. Occurs mainly in the **liver**.', hint: 'Fasting/starvation pathway to maintain blood glucose.' },
        { topicId: t2.id, front: 'What is the pentose phosphate pathway?', back: '**Produces**:\n1. **NADPH** — for biosynthesis and antioxidant defense\n2. **Ribose-5-phosphate** — for nucleotide synthesis\n\nKey enzyme: **Glucose-6-phosphate dehydrogenase** (G6PD)', hint: 'Not for ATP — for NADPH and ribose.' },
      ],
    });
    console.log('✅ Carbohydrate Metabolism flashcards');
  }

  const t3 = await prisma.topic.findFirst({ where: { slug: 'mcat-biochemistry-lipid-metabolism-mcat' } });
  if (t3) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t3.id, front: 'What is β-oxidation?', back: 'Breakdown of fatty acids into **acetyl-CoA** (2 carbons at a time). Each cycle produces:\n- 1 NADH\n- 1 FADH₂\n- 1 acetyl-CoA\n\nOccurs in the **mitochondrial matrix**. Fatty acids enter via **carnitine shuttle**.', hint: 'A 16-carbon fatty acid produces 8 acetyl-CoA.' },
        { topicId: t3.id, front: 'How many ATP from a 16-carbon fatty acid (palmitate)?', back: '**~129 ATP** (or ~106 net after activation cost of 2 ATP)\n\n7 rounds of β-oxidation → 7 NADH + 7 FADH₂ + 8 acetyl-CoA\n8 acetyl-CoA → 24 NADH + 8 FADH₂ + 8 GTP (Krebs)', hint: 'Fats yield much more ATP per carbon than glucose.' },
        { topicId: t3.id, front: 'What are ketone bodies?', back: 'Acetoacetate, β-hydroxybutyrate, and acetone. Made from **excess acetyl-CoA** in the liver during fasting/starvation. Used as fuel by brain, heart, and muscle when glucose is scarce.', hint: 'The brain\'s backup fuel source.' },
      ],
    });
    console.log('✅ Lipid Metabolism flashcards');
  }

  const t4 = await prisma.topic.findFirst({ where: { slug: 'mcat-biochemistry-enzymes-kinetics-mcat' } });
  if (t4) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t4.id, front: 'Michaelis-Menten equation?', back: '$v = \\frac{V_{\\max}[S]}{K_m + [S]}$\n\n$K_m$ = substrate concentration at half $V_{\\max}$.\nLow $K_m$ = high affinity for substrate.', hint: 'When [S] = Km, v = Vmax/2.' },
        { topicId: t4.id, front: 'Competitive vs. noncompetitive inhibition?', back: '**Competitive**: Binds active site. ↑ apparent $K_m$, **same** $V_{\\max}$ (overcome with more substrate).\n\n**Noncompetitive**: Binds allosteric site. **Same** $K_m$, ↓ $V_{\\max}$ (cannot be overcome).', hint: 'Competitive changes Km; noncompetitive changes Vmax.' },
        { topicId: t4.id, front: 'What is a Lineweaver-Burk plot?', back: 'Double reciprocal plot: $\\frac{1}{v}$ vs. $\\frac{1}{[S]}$\n\ny-intercept = $\\frac{1}{V_{\\max}}$\nx-intercept = $-\\frac{1}{K_m}$\n\nUseful for distinguishing inhibition types.', hint: 'Linearizes the Michaelis-Menten curve.' },
      ],
    });
    console.log('✅ Enzyme Kinetics flashcards');
  }

  console.log('\n✅ All MCAT biochemistry pathways flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
