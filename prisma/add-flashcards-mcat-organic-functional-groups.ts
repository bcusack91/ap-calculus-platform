import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding MCAT organic functional groups flashcards...\n');

  const slug = 'mcat-organic-chemistry-functional-groups-mcat';
  const topic = await prisma.topic.findFirst({ where: { slug } });
  if (!topic) { console.log(`⚠ Topic not found: ${slug}`); return; }
  await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic.id, front: 'Rank the functional group priority for IUPAC naming (highest to lowest).', back: 'Carboxylic acid > ester > amide > nitrile > aldehyde > ketone > alcohol > amine > alkene/alkyne > alkane.\n\nThe **highest-priority group** gets the lowest locant and determines the suffix.', hint: 'Carboxylic acid wins. More oxidized = higher priority.' },
      { topicId: topic.id, front: 'Rank the oxidation states of carbon-oxygen functional groups (least → most oxidized).', back: 'Alkane < alcohol < aldehyde/ketone < carboxylic acid < $\\text{CO}_2$.\n\nEach step adds a bond to oxygen (or removes a bond to H). PCC oxidizes 1° alcohol → aldehyde (stops there); strong oxidants ($\\text{KMnO}_4$, $\\text{CrO}_3$) go to carboxylic acid.', hint: 'More C–O bonds = more oxidized. PCC is the gentle oxidant.' },
      { topicId: topic.id, front: 'What distinguishes a good leaving group, and rank common ones.', back: 'A **good leaving group** is a weak base (stable as an anion / conjugate base of a strong acid).\n\nBest → worst: $\\text{I}^- > \\text{Br}^- > \\text{Cl}^- >$ tosylate/mesylate $\\gg \\text{F}^- \\gg \\text{OH}^-, \\text{NH}_2^-$.\n\n$\\text{OH}^-$ is a poor leaving group (must be protonated first).', hint: 'Weak base = good leaving group. Iodide is the best halide.' },
      { topicId: topic.id, front: 'Compare nucleophilic addition to aldehydes vs. ketones.', back: 'Aldehydes are **more reactive** toward nucleophilic addition than ketones.\n\nReasons: less **steric hindrance** (one H vs. two alkyl groups) and the carbonyl carbon is **more electrophilic** (alkyl groups donate electron density, stabilizing ketones).', hint: 'Aldehydes are less hindered and more electrophilic = more reactive.' },
      { topicId: topic.id, front: 'What is the product when a hemiacetal/hemiketal forms, and how does it become an acetal?', back: 'Carbonyl + **one** alcohol (acid catalyzed) → **hemiacetal** (OH + OR on same carbon).\n\nWith a **second** alcohol and loss of water → **acetal** (two OR groups).\n\nAcetals are common **protecting groups** for carbonyls (stable to base/nucleophiles).', hint: '"Hemi" = half (one OR). Full acetal = two OR groups. Used to protect carbonyls.' },
      { topicId: topic.id, front: 'What is the alpha-carbon, and why is it acidic?', back: 'The carbon **adjacent** to a carbonyl. Its protons (alpha-hydrogens) are acidic (pKa ~20) because the resulting carbanion is resonance-stabilized as an **enolate**.\n\nEnolates are key nucleophiles in aldol and Claisen condensations.', hint: 'Alpha is next to the carbonyl; its H is acidic via enolate resonance.' },
      { topicId: topic.id, front: 'Describe the aldol condensation product.', back: 'An enolate attacks the carbonyl of another aldehyde/ketone, forming a **beta-hydroxy carbonyl** (the aldol).\n\nWith heat/dehydration → an **alpha,beta-unsaturated carbonyl** (conjugated enone) plus water.', hint: 'Aldol = beta-hydroxy aldehyde/ketone; dehydrate to a conjugated enone.' },
      { topicId: topic.id, front: 'Rank reactivity of carboxylic acid derivatives toward nucleophilic acyl substitution.', back: 'Acid chloride > anhydride > ester ≈ carboxylic acid > amide.\n\nReactivity tracks the **leaving group ability** and how much the heteroatom donates into the carbonyl. You can convert more reactive → less reactive, not the reverse.', hint: 'Acyl chloride most reactive; amide least. Better leaving group = more reactive.' },
      { topicId: topic.id, front: 'What is the Fischer esterification reaction?', back: 'Carboxylic acid + alcohol $\\xrightarrow{\\text{H}^+}$ **ester** + $\\text{H}_2\\text{O}$ (acid catalyzed, reversible).\n\nDriven by excess alcohol or removing water (Le Chatelier). The –OH leaves as water from the carbonyl carbon.', hint: 'Acid + alcohol → ester + water, acid catalyzed and reversible.' },
      { topicId: topic.id, front: 'Distinguish keto-enol tautomers.', back: '**Tautomers** are constitutional isomers in rapid equilibrium that differ in the position of a proton and a double bond.\n\n**Keto form** (C=O, more stable, favored) ⇌ **enol form** (C=C–OH). Acid or base catalyzes the interconversion.', hint: 'Keto (favored) vs enol — proton + double bond shift. Not resonance!' },
      { topicId: topic.id, front: 'How do amines behave as bases and nucleophiles?', back: 'Amines have a lone pair on N, making them **basic** and **nucleophilic**.\n\nBasicity: aliphatic amines > ammonia > aromatic amines (aniline\'s lone pair is delocalized into the ring). Amines form ammonium salts and attack carbonyls to give imines/enamines.', hint: 'N lone pair = base + nucleophile. Aniline is weakly basic (delocalized lone pair).' },
      { topicId: topic.id, front: 'What functional groups result from oxidizing 1° vs 2° vs 3° alcohols?', back: '**1° alcohol** → aldehyde (PCC) → carboxylic acid (strong oxidant).\n**2° alcohol** → ketone.\n**3° alcohol** → **no reaction** (no H on the carbinol carbon to remove).', hint: '3° alcohols can\'t be oxidized — no alpha-H on the C–OH carbon.' },
      { topicId: topic.id, front: 'What is a Michael addition (1,4-conjugate addition)?', back: 'A nucleophile adds to the **beta-carbon** of an alpha,beta-unsaturated carbonyl (the "Michael acceptor").\n\nThis is **1,4-addition** (conjugate addition), as opposed to 1,2-addition directly at the carbonyl. Stabilized nucleophiles (enolates) favor conjugate addition.', hint: 'Conjugate addition at the beta carbon of an enone. 1,4 not 1,2.' },
      { topicId: topic.id, front: 'How can you identify a carboxylic acid by a simple chemical test?', back: 'Carboxylic acids (pKa ~4–5) react with **sodium bicarbonate ($\\text{NaHCO}_3$)** to release $\\text{CO}_2$ gas (bubbling/effervescence).\n\nPhenols (pKa ~10) are not acidic enough to bubble with bicarbonate but will dissolve in NaOH.', hint: 'Carboxylic acid + bicarb = CO2 bubbles. Phenols don\'t bubble.' },
    ],
  });

  console.log('✅ Created 14 MCAT organic functional groups flashcards');
  console.log('\n✅ All MCAT organic functional groups flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
