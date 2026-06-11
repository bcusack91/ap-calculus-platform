import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding AP Biology key terms flashcards...\n');

  const topicSlugs = [
    'biology-chemistry-of-life',
    'biology-cell-structure',
    'biology-cellular-energetics',
    'biology-heredity',
    'biology-gene-expression',
    'biology-evolution',
    'biology-ecology',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) { console.log(`⚠ Topic not found: ${slug}`); continue; }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  const t1 = await prisma.topic.findFirst({ where: { slug: 'biology-chemistry-of-life' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'What are the four main classes of biological macromolecules?', back: '1. **Carbohydrates** (sugars, starches, cellulose)\n2. **Lipids** (fats, phospholipids, steroids)\n3. **Proteins** (enzymes, structural, transport)\n4. **Nucleic acids** (DNA, RNA)', hint: 'CLPN — think "Clip N"' },
        { topicId: t1.id, front: 'What is a dehydration synthesis (condensation) reaction?', back: 'A reaction that joins two monomers by removing a water molecule ($\\text{H}_2\\text{O}$), forming a covalent bond.', hint: 'Building polymers removes water.' },
        { topicId: t1.id, front: 'What is hydrolysis?', back: 'A reaction that breaks a polymer into monomers by adding water. The reverse of dehydration synthesis.', hint: 'Hydro = water, lysis = breaking.' },
        { topicId: t1.id, front: 'Why is water important for life? (List 3 properties)', back: '1. **High specific heat** — stabilizes temperature\n2. **Cohesion/adhesion** — enables capillary action\n3. **Universal solvent** — dissolves polar/ionic substances\n4. **Ice floats** — insulates aquatic ecosystems', hint: 'Due to hydrogen bonding between polar water molecules.' },
      ],
    });
    console.log('✅ Chemistry of Life flashcards');
  }

  const t2 = await prisma.topic.findFirst({ where: { slug: 'biology-cell-structure' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: 'What is the fluid mosaic model?', back: 'The cell membrane is a fluid phospholipid bilayer with proteins, cholesterol, and carbohydrates embedded or attached, creating a mosaic pattern.', hint: 'Phospholipids move laterally; proteins float like icebergs.' },
        { topicId: t2.id, front: 'What is the difference between prokaryotic and eukaryotic cells?', back: '**Prokaryotic**: No nucleus, no membrane-bound organelles (bacteria, archaea).\n**Eukaryotic**: True nucleus with nuclear envelope, membrane-bound organelles (animals, plants, fungi, protists).', hint: 'Pro = before, eu = true (nucleus).' },
        { topicId: t2.id, front: 'What is the endosymbiotic theory?', back: 'Mitochondria and chloroplasts were once free-living prokaryotes engulfed by ancestral eukaryotic cells. Evidence: own DNA, double membrane, reproduce by binary fission.', hint: 'Explains why organelles have their own DNA.' },
      ],
    });
    console.log('✅ Cell Structure flashcards');
  }

  const t3 = await prisma.topic.findFirst({ where: { slug: 'biology-cellular-energetics' } });
  if (t3) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t3.id, front: 'What is the overall equation for cellular respiration?', back: '$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\to 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{ATP}$\n\n(~36-38 ATP per glucose)', hint: 'Glucose + oxygen → carbon dioxide + water + energy.' },
        { topicId: t3.id, front: 'What are the 3 stages of cellular respiration?', back: '1. **Glycolysis** (cytoplasm) — 2 ATP net\n2. **Krebs cycle** (mitochondrial matrix) — 2 ATP\n3. **Oxidative phosphorylation** (inner mitochondrial membrane) — ~34 ATP', hint: 'Most ATP comes from the electron transport chain.' },
        { topicId: t3.id, front: 'Overall equation for photosynthesis?', back: '$6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$', hint: 'Reverse of respiration.' },
        { topicId: t3.id, front: 'What is chemiosmosis?', back: 'The flow of $\\text{H}^+$ ions through ATP synthase, driven by an electrochemical gradient, to produce ATP. Occurs in both mitochondria and chloroplasts.', hint: 'The proton gradient powers the ATP synthase turbine.' },
      ],
    });
    console.log('✅ Cellular Energetics flashcards');
  }

  const t4 = await prisma.topic.findFirst({ where: { slug: 'biology-heredity' } });
  if (t4) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t4.id, front: "What is Mendel's Law of Segregation?", back: 'Each organism has two alleles for each gene. During gamete formation, these alleles separate so each gamete carries one allele.', hint: 'Allele pairs split during meiosis.' },
        { topicId: t4.id, front: "What is Mendel's Law of Independent Assortment?", back: 'Genes on different chromosomes (or far apart on the same chromosome) sort independently during gamete formation.', hint: 'Assumes genes are unlinked.' },
        { topicId: t4.id, front: 'What is the difference between genotype and phenotype?', back: '**Genotype**: The genetic makeup (e.g., Bb).\n**Phenotype**: The observable characteristic (e.g., brown eyes).', hint: 'Genotype = genes, Phenotype = physical traits.' },
      ],
    });
    console.log('✅ Heredity flashcards');
  }

  const t5 = await prisma.topic.findFirst({ where: { slug: 'biology-gene-expression' } });
  if (t5) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t5.id, front: 'What is the Central Dogma of molecular biology?', back: '$\\text{DNA} \\xrightarrow{\\text{transcription}} \\text{mRNA} \\xrightarrow{\\text{translation}} \\text{Protein}$', hint: 'Information flows from DNA to RNA to protein.' },
        { topicId: t5.id, front: 'Where does transcription occur vs. translation?', back: '**Transcription**: Nucleus (RNA polymerase copies DNA → mRNA)\n**Translation**: Ribosome in cytoplasm (mRNA → protein)', hint: 'Nucleus makes the message, ribosomes read it.' },
        { topicId: t5.id, front: 'What is a codon?', back: 'A 3-nucleotide sequence on mRNA that codes for one amino acid. There are 64 codons total (61 for amino acids + 3 stop codons).', hint: 'AUG is the start codon (methionine).' },
      ],
    });
    console.log('✅ Gene Expression flashcards');
  }

  const t6 = await prisma.topic.findFirst({ where: { slug: 'biology-evolution' } });
  if (t6) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t6.id, front: 'What is natural selection?', back: 'Organisms with favorable traits for their environment survive and reproduce more, passing those traits to offspring. Over time, the population changes.', hint: 'Survival of the fittest — Darwin.' },
        { topicId: t6.id, front: 'What is genetic drift?', back: 'Random changes in allele frequencies in a population, especially significant in small populations. Two types: **bottleneck** and **founder effect**.', hint: 'Chance, not fitness, drives the change.' },
        { topicId: t6.id, front: 'Hardy-Weinberg equilibrium conditions?', back: '1. No mutation\n2. Random mating\n3. No natural selection\n4. Large population (no drift)\n5. No gene flow\n\nEquations: $p + q = 1$ and $p^2 + 2pq + q^2 = 1$', hint: 'Real populations rarely meet all 5 conditions.' },
      ],
    });
    console.log('✅ Evolution flashcards');
  }

  const t7 = await prisma.topic.findFirst({ where: { slug: 'biology-ecology' } });
  if (t7) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t7.id, front: 'What is the 10% rule in ecology?', back: 'Only about 10% of energy is transferred from one trophic level to the next. The rest is lost as heat through cellular respiration.', hint: 'Explains why food chains are short.' },
        { topicId: t7.id, front: 'What is the difference between primary and secondary succession?', back: '**Primary**: Colonization of bare rock/land with no soil (e.g., after lava flow).\n**Secondary**: Recovery in an area where soil remains (e.g., after forest fire).', hint: 'Primary starts from scratch; secondary has a head start.' },
      ],
    });
    console.log('✅ Ecology flashcards');
  }

  console.log('\n✅ All AP Biology key terms flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
