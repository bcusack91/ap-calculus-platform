import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding Organic Chemistry reaction mechanisms flashcards...\n');

  const topicSlugs = [
    'nucleophilic-substitution',
    'elimination-reactions',
    'alkenes-reactions',
    'electrophilic-aromatic-substitution',
    'radical-reactions',
    'stereochemistry-chirality',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) { console.log(`⚠ Topic not found: ${slug}`); continue; }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  const t1 = await prisma.topic.findFirst({ where: { slug: 'nucleophilic-substitution' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'SN2 reaction characteristics?', back: '- **One step** (concerted): backside attack\n- Rate = k[substrate][nucleophile] (bimolecular)\n- **Inversion** of stereochemistry (Walden inversion)\n- Favored by: **1° substrates**, strong nucleophiles, polar **aprotic** solvents\n- Steric hindrance slows it down', hint: 'S = substitution, N = nucleophilic, 2 = bimolecular.' },
        { topicId: t1.id, front: 'SN1 reaction characteristics?', back: '- **Two steps**: carbocation intermediate forms first\n- Rate = k[substrate] (unimolecular)\n- **Racemization** (mix of retention and inversion)\n- Favored by: **3° substrates**, weak nucleophiles, polar **protic** solvents\n- Carbocation stability matters', hint: 'S = substitution, N = nucleophilic, 1 = unimolecular.' },
        { topicId: t1.id, front: 'Polar protic vs. polar aprotic solvents?', back: '**Polar protic** (has N–H or O–H): water, methanol, ethanol, acetic acid → favors SN1/E1\n\n**Polar aprotic** (no N–H or O–H): DMSO, DMF, acetone, acetonitrile → favors SN2/E2', hint: 'Protic solvents solvate nucleophiles (weaken them).' },
      ],
    });
    console.log('✅ Nucleophilic Substitution flashcards');
  }

  const t2 = await prisma.topic.findFirst({ where: { slug: 'elimination-reactions' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: 'E2 reaction characteristics?', back: '- **One step**: strong base abstracts β-hydrogen, leaving group departs simultaneously\n- Rate = k[substrate][base] (bimolecular)\n- Requires **anti-periplanar** geometry (H and LG 180° apart)\n- Zaitsev product usually favored (more substituted alkene)', hint: 'Strong base + good leaving group = E2.' },
        { topicId: t2.id, front: 'E1 reaction characteristics?', back: '- **Two steps**: leaving group departs first → carbocation, then base removes H\n- Rate = k[substrate] (unimolecular)\n- Favors **3° substrates** (stable carbocations)\n- Zaitsev product favored\n- Competes with SN1', hint: 'Same carbocation intermediate as SN1.' },
        { topicId: t2.id, front: 'Zaitsev vs. Hofmann product?', back: "**Zaitsev rule**: The more substituted alkene is the major product (most E1 & E2 reactions).\n\n**Hofmann product**: The less substituted alkene, favored with **bulky bases** (e.g., t-BuOK) due to steric hindrance.", hint: 'Big base → less substituted product.' },
      ],
    });
    console.log('✅ Elimination Reactions flashcards');
  }

  const t3 = await prisma.topic.findFirst({ where: { slug: 'alkenes-reactions' } });
  if (t3) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t3.id, front: "Markovnikov's Rule?", back: 'In electrophilic addition to an alkene, the electrophile (H⁺) adds to the **less substituted** carbon, and the nucleophile adds to the **more substituted** carbon (forming the more stable carbocation intermediate).', hint: '"The rich get richer" — H goes to the C with more H\'s.' },
        { topicId: t3.id, front: 'What does hydroboration-oxidation give?', back: '**Anti-Markovnikov** addition of –OH.\n\nBH₃·THF followed by H₂O₂/NaOH.\n**Syn addition** (–OH adds to less substituted carbon from the same face).', hint: 'Anti-Markovnikov, syn addition of water.' },
        { topicId: t3.id, front: 'What reagents convert an alkene to an epoxide?', back: '**mCPBA** (meta-chloroperoxybenzoic acid) or other peracids.\n\nResult: forms a 3-membered ring with oxygen (**epoxide/oxirane**). Syn addition — both C–O bonds form on the same face.', hint: 'Peracids are the standard epoxidation reagents.' },
      ],
    });
    console.log('✅ Alkene Reactions flashcards');
  }

  const t4 = await prisma.topic.findFirst({ where: { slug: 'electrophilic-aromatic-substitution' } });
  if (t4) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t4.id, front: 'General mechanism of electrophilic aromatic substitution (EAS)?', back: '1. **Electrophile attacks** the π system → arenium ion intermediate (carbocation, partial loss of aromaticity)\n2. **Proton lost** to restore aromaticity\n\nResult: H replaced by electrophile. Aromaticity is preserved.', hint: 'Substitution, not addition — aromaticity drives the product.' },
        { topicId: t4.id, front: 'Ortho/para vs. meta directors?', back: '**Ortho/para directors**: Electron-donating groups (–OH, –NH₂, –OR, alkyl, halogens). Activate the ring (except halogens which deactivate but still direct o/p).\n\n**Meta directors**: Electron-withdrawing groups (–NO₂, –CN, –COOH, –SO₃H, –COR). Deactivate the ring.', hint: 'Electron-rich → o/p; electron-poor → meta.' },
      ],
    });
    console.log('✅ EAS flashcards');
  }

  const t5 = await prisma.topic.findFirst({ where: { slug: 'radical-reactions' } });
  if (t5) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t5.id, front: 'What are the 3 steps of a radical chain reaction?', back: '1. **Initiation**: Homolytic cleavage of a bond by heat/light → two radicals\n2. **Propagation**: Radicals react with stable molecules to form new radicals (chain continues)\n3. **Termination**: Two radicals combine → stable molecule (chain ends)', hint: 'Init → Prop → Term, like starting and stopping a chain.' },
        { topicId: t5.id, front: 'Radical stability order?', back: '**3° > 2° > 1° > methyl** (same as carbocations)\n\nMore substituted radicals are more stable due to hyperconjugation.\nAllylic and benzylic radicals are extra stable (resonance).', hint: 'More carbon neighbors = more stable radical.' },
      ],
    });
    console.log('✅ Radical Reactions flashcards');
  }

  const t6 = await prisma.topic.findFirst({ where: { slug: 'stereochemistry-chirality' } });
  if (t6) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t6.id, front: 'What is a chiral center?', back: 'A carbon (or other atom) bonded to **4 different groups**. Also called a stereocenter or asymmetric center. A molecule with one chiral center exists as two enantiomers (R and S).', hint: 'If any two groups are the same, it\'s not chiral.' },
        { topicId: t6.id, front: 'What are enantiomers vs. diastereomers?', back: '**Enantiomers**: Non-superimposable mirror images (opposite at ALL chiral centers). Same physical properties except optical rotation.\n\n**Diastereomers**: Stereoisomers that are NOT mirror images (differ at some but not all centers). Different physical properties.', hint: 'Enantiomers = mirror images. Diastereomers ≠ mirror images.' },
        { topicId: t6.id, front: 'R/S assignment (Cahn-Ingold-Prelog rules)?', back: '1. Assign priority to 4 groups (higher atomic number = higher priority)\n2. Orient lowest priority group **away** from you\n3. Trace a path from highest to lowest priority:\n   - **Clockwise = R** (rectus)\n   - **Counterclockwise = S** (sinister)', hint: 'R = Right (clockwise), S = Sinister (counterclockwise).' },
      ],
    });
    console.log('✅ Stereochemistry flashcards');
  }

  console.log('\n✅ All Organic Chemistry reaction mechanisms flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
