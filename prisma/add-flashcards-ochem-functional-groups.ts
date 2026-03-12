import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding Organic Chemistry functional groups flashcards...\n');

  const topicSlugs = [
    'molecular-representations',
    'alcohols-ethers',
    'aldehydes-ketones-reactions',
    'carboxylic-acids-derivatives',
    'amines-nitrogen-compounds',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) { console.log(`⚠ Topic not found: ${slug}`); continue; }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  const t1 = await prisma.topic.findFirst({ where: { slug: 'molecular-representations' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'What is a hydroxyl group (–OH)?', back: '**Alcohol** functional group.\n\nProperties: Polar, hydrogen bonding, increases water solubility.\nNaming: suffix **-ol** (methanol, ethanol, propanol).', hint: 'O-H makes it an alcohol.' },
        { topicId: t1.id, front: 'What is a carbonyl group (C=O)?', back: 'A carbon double-bonded to oxygen. Found in:\n- **Aldehydes** (–CHO): terminal C=O\n- **Ketones** (R-CO-R\'): internal C=O\n- **Carboxylic acids** (–COOH): C=O + –OH', hint: 'The most versatile functional group in OChem.' },
        { topicId: t1.id, front: 'Rank these in order of boiling point: alkane, alcohol, carboxylic acid (same MW)', back: '**Carboxylic acid > Alcohol > Alkane**\n\nCarboxylic acid: strongest H-bonding (can dimerize)\nAlcohol: H-bonding\nAlkane: only London dispersion forces', hint: 'More polar intermolecular forces = higher boiling point.' },
      ],
    });
    console.log('✅ Molecular Representations flashcards');
  }

  const t2 = await prisma.topic.findFirst({ where: { slug: 'alcohols-ethers' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: 'Primary (1°), secondary (2°), and tertiary (3°) alcohols?', back: '**1° alcohol**: –OH on a carbon bonded to 1 other carbon\n**2° alcohol**: –OH on a carbon bonded to 2 other carbons\n**3° alcohol**: –OH on a carbon bonded to 3 other carbons\n\nThis classification determines oxidation products.', hint: 'Count the carbons attached to the C bearing –OH.' },
        { topicId: t2.id, front: 'What does oxidation of each alcohol class produce?', back: '**1° alcohol** → aldehyde → carboxylic acid\n**2° alcohol** → ketone\n**3° alcohol** → no reaction (resistant to oxidation)\n\nCommon oxidizing agents: PCC (to aldehyde), KMnO₄/CrO₃ (to acid).', hint: '1° can go two steps; 2° stops at ketone; 3° won\'t oxidize.' },
        { topicId: t2.id, front: 'What is an ether?', back: 'R–O–R\' (oxygen bonded to two carbon groups).\n\nProperties: Low polarity, low boiling point (no H-bonding as donor), relatively unreactive. Common solvent.\nExample: diethyl ether.', hint: 'Oxygen between two carbons, no –OH hydrogen.' },
      ],
    });
    console.log('✅ Alcohols & Ethers flashcards');
  }

  const t3 = await prisma.topic.findFirst({ where: { slug: 'aldehydes-ketones-reactions' } });
  if (t3) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t3.id, front: 'What is nucleophilic addition (the key aldehyde/ketone reaction)?', back: 'A nucleophile attacks the electrophilic carbonyl carbon:\n\n1. Nucleophile attacks C=O carbon\n2. π bond breaks → alkoxide intermediate\n3. Protonation gives product\n\nAldehydes are more reactive than ketones (less steric hindrance).', hint: 'The C=O carbon is δ+ and attracts nucleophiles.' },
        { topicId: t3.id, front: 'What is a hemiacetal vs. acetal?', back: '**Hemiacetal**: R–C(OH)(OR\') — one OH + one OR on same carbon (from alcohol + aldehyde)\n**Acetal**: R–C(OR\')(OR\'\') — two OR groups (from further reaction with alcohol under acid catalysis)\n\nAcetals are used as **protecting groups**.', hint: 'Hemi = half (one –OH remaining).' },
      ],
    });
    console.log('✅ Aldehydes & Ketones flashcards');
  }

  const t4 = await prisma.topic.findFirst({ where: { slug: 'carboxylic-acids-derivatives' } });
  if (t4) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t4.id, front: 'Rank carboxylic acid derivatives by reactivity toward nucleophilic acyl substitution.', back: '**Acyl chloride > Anhydride > Ester > Amide** (most → least reactive)\n\nBetter leaving groups = more reactive.\nCl⁻ > RCOO⁻ > RO⁻ > NH₂⁻', hint: 'The weaker the base being displaced, the more reactive.' },
        { topicId: t4.id, front: 'What is an ester?', back: 'R–COO–R\' (carboxylic acid derivative with –OR instead of –OH).\n\nFormed by **Fischer esterification**: carboxylic acid + alcohol (acid catalyst).\nHydrolyzed by: acid or base (saponification).', hint: 'Pleasant-smelling compounds found in fruits and perfumes.' },
        { topicId: t4.id, front: 'What is an amide?', back: 'R–CO–NR\'R\'\' (carbonyl bonded to nitrogen).\n\nMost stable carboxylic acid derivative due to resonance (N lone pair delocalizes into C=O). **Peptide bonds** are amide bonds.', hint: 'The least reactive derivative — found in proteins.' },
      ],
    });
    console.log('✅ Carboxylic Acid Derivatives flashcards');
  }

  const t5 = await prisma.topic.findFirst({ where: { slug: 'amines-nitrogen-compounds' } });
  if (t5) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t5.id, front: 'Primary, secondary, and tertiary amines?', back: '**1° amine**: R–NH₂ (1 carbon on N)\n**2° amine**: R₂–NH (2 carbons on N)\n**3° amine**: R₃–N (3 carbons on N)\n\nAll are **basic** (lone pair on nitrogen). Amines are nucleophilic.', hint: 'Count carbons on nitrogen, not on adjacent carbon.' },
        { topicId: t5.id, front: 'Why are amines basic?', back: 'The nitrogen has a **lone pair** that can accept a proton (Brønsted base) or donate electrons to an electrophile (Lewis base).\n\npKb of typical amine ≈ 3-4 (pKa of conjugate acid ≈ 10-11).', hint: 'Nitrogen\'s lone pair is the key.' },
      ],
    });
    console.log('✅ Amines flashcards');
  }

  console.log('\n✅ All Organic Chemistry functional groups flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
