import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding AP Biology process flashcards...\n');

  const topicSlugs = [
    'cellular-respiration',
    'photosynthesis',
    'dna-replication',
    'transcription-rna-processing',
    'translation',
    'cell-cycle-mitosis',
    'meiosis',
    'cell-signaling',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) { console.log(`⚠ Topic not found: ${slug}`); continue; }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  const t1 = await prisma.topic.findFirst({ where: { slug: 'cellular-respiration' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'What happens during glycolysis?', back: 'Glucose (6C) is split into 2 pyruvate (3C) molecules.\n\n**Inputs**: glucose, 2 ATP, 2 NAD⁺\n**Outputs**: 2 pyruvate, 4 ATP (net 2), 2 NADH\n\nOccurs in the **cytoplasm**, doesn\'t require O₂.', hint: 'Glyco = sugar, lysis = splitting.' },
        { topicId: t1.id, front: 'What is the Krebs (citric acid) cycle?', back: 'Acetyl-CoA enters a cycle of reactions in the mitochondrial matrix.\n\n**Per glucose (2 turns)**:\n- 6 NADH, 2 FADH₂, 2 ATP\n- 4 CO₂ released', hint: 'The main electron carrier producer.' },
        { topicId: t1.id, front: 'What happens in the electron transport chain (ETC)?', back: 'NADH and FADH₂ donate electrons to protein complexes in the inner mitochondrial membrane. Energy from electrons pumps H⁺ ions, creating a gradient. H⁺ flows through ATP synthase to produce ~34 ATP.', hint: 'The ETC + chemiosmosis make most of the ATP.' },
        { topicId: t1.id, front: 'What is fermentation?', back: 'Anaerobic pathway to regenerate NAD⁺ when O₂ is absent.\n\n**Lactic acid fermentation**: pyruvate → lactate (muscles)\n**Alcoholic fermentation**: pyruvate → ethanol + CO₂ (yeast)', hint: 'Allows glycolysis to continue without oxygen.' },
      ],
    });
    console.log('✅ Cellular Respiration flashcards');
  }

  const t2 = await prisma.topic.findFirst({ where: { slug: 'photosynthesis' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: 'What are the two stages of photosynthesis?', back: '1. **Light reactions** (thylakoid membrane): H₂O → O₂, produce ATP & NADPH\n2. **Calvin cycle** (stroma): CO₂ → G3P → glucose, uses ATP & NADPH', hint: 'Light reactions capture energy; Calvin cycle builds sugar.' },
        { topicId: t2.id, front: 'What is the role of chlorophyll?', back: 'Chlorophyll absorbs red and blue light (reflects green). It excites electrons using light energy, initiating the electron transport chain in the thylakoid membrane.', hint: 'The primary photosynthetic pigment.' },
        { topicId: t2.id, front: 'What is the Calvin Cycle (C3 fixation)?', back: '3 phases:\n1. **Carbon fixation**: CO₂ + RuBP → 2 G3P (RuBisCO enzyme)\n2. **Reduction**: G3P is reduced using ATP & NADPH\n3. **Regeneration**: RuBP is regenerated\n\n3 turns → 1 G3P (net)', hint: 'RuBisCO is the most abundant enzyme on Earth.' },
      ],
    });
    console.log('✅ Photosynthesis flashcards');
  }

  const t3 = await prisma.topic.findFirst({ where: { slug: 'dna-replication' } });
  if (t3) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t3.id, front: 'What is semiconservative replication?', back: 'Each new DNA molecule contains one original (parent) strand and one newly synthesized strand.', hint: 'Meselson-Stahl experiment proved this.' },
        { topicId: t3.id, front: 'Key enzymes in DNA replication?', back: '- **Helicase**: Unwinds double helix\n- **Primase**: Makes RNA primer\n- **DNA Polymerase III**: Adds nucleotides 5\'→3\'\n- **Ligase**: Seals Okazaki fragments\n- **Topoisomerase**: Relieves tension ahead of fork', hint: 'Helicase opens, polymerase builds, ligase glues.' },
        { topicId: t3.id, front: 'What is the difference between leading and lagging strands?', back: '**Leading strand**: Synthesized continuously 5\'→3\' toward the replication fork.\n**Lagging strand**: Synthesized in short Okazaki fragments 5\'→3\' away from the fork, then joined by ligase.', hint: 'DNA polymerase only works 5\' to 3\'.' },
      ],
    });
    console.log('✅ DNA Replication flashcards');
  }

  const t4 = await prisma.topic.findFirst({ where: { slug: 'transcription-rna-processing' } });
  if (t4) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t4.id, front: 'What are the steps of transcription?', back: '1. **Initiation**: RNA polymerase binds to promoter\n2. **Elongation**: RNA polymerase reads template 3\'→5\', builds mRNA 5\'→3\'\n3. **Termination**: Reaches terminator sequence, mRNA released', hint: 'Template strand is read 3\' to 5\'.' },
        { topicId: t4.id, front: 'What is RNA processing in eukaryotes?', back: '1. **5\' cap**: Modified GTP added for ribosome binding\n2. **3\' poly-A tail**: ~200 adenines for stability\n3. **Splicing**: Introns removed, exons joined by spliceosome', hint: 'Introns are "in" the trash; exons are "ex"pressed.' },
      ],
    });
    console.log('✅ Transcription flashcards');
  }

  const t5 = await prisma.topic.findFirst({ where: { slug: 'translation' } });
  if (t5) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t5.id, front: 'What are the steps of translation?', back: '1. **Initiation**: Small ribosomal subunit binds mRNA at AUG (start codon), tRNA with methionine enters\n2. **Elongation**: tRNAs bring amino acids; peptide bonds form; ribosome translocates\n3. **Termination**: Stop codon (UAA, UAG, UGA) reached; release factor frees polypeptide', hint: 'AUG starts it; stop codons end it.' },
        { topicId: t5.id, front: 'What is the role of tRNA?', back: 'Transfer RNA carries specific amino acids to the ribosome. Its anticodon base-pairs with the mRNA codon, ensuring correct amino acid placement.', hint: 'The adapter molecule between mRNA and protein.' },
      ],
    });
    console.log('✅ Translation flashcards');
  }

  const t6 = await prisma.topic.findFirst({ where: { slug: 'cell-cycle-mitosis' } });
  if (t6) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t6.id, front: 'What are the phases of mitosis (in order)?', back: '**PMAT**:\n1. **Prophase**: Chromosomes condense, spindle forms\n2. **Metaphase**: Chromosomes align at metaphase plate\n3. **Anaphase**: Sister chromatids separate, move to poles\n4. **Telophase**: Nuclear envelopes reform, chromosomes decondense\n\nFollowed by **cytokinesis** (cell division).', hint: 'PMAT — "Please Make Another Taco"' },
        { topicId: t6.id, front: 'What happens during the cell cycle checkpoints?', back: '**G1 checkpoint**: Is DNA undamaged? Is the cell large enough?\n**G2 checkpoint**: Is DNA replication complete?\n**M checkpoint (spindle)**: Are all chromosomes properly attached to spindle fibers?', hint: 'p53 is a key checkpoint protein (tumor suppressor).' },
      ],
    });
    console.log('✅ Cell Cycle & Mitosis flashcards');
  }

  const t7 = await prisma.topic.findFirst({ where: { slug: 'meiosis' } });
  if (t7) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t7.id, front: 'How does meiosis differ from mitosis?', back: '**Meiosis**: 2 divisions → 4 haploid cells, crossing over, independent assortment (genetic variation)\n**Mitosis**: 1 division → 2 identical diploid cells', hint: 'Meiosis makes gametes; mitosis grows the body.' },
        { topicId: t7.id, front: 'What is crossing over?', back: 'During prophase I, homologous chromosomes exchange segments of DNA at chiasmata. This creates new allele combinations (recombinant chromosomes).', hint: 'Increases genetic diversity.' },
      ],
    });
    console.log('✅ Meiosis flashcards');
  }

  const t8 = await prisma.topic.findFirst({ where: { slug: 'cell-signaling' } });
  if (t8) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t8.id, front: 'What are the 3 stages of cell signaling?', back: '1. **Reception**: Signal molecule (ligand) binds to receptor\n2. **Transduction**: Signal is relayed and amplified via signal cascade\n3. **Response**: Cell changes activity (gene expression, enzyme activation, etc.)', hint: 'Receive → Relay → Respond.' },
        { topicId: t8.id, front: 'What is a signal transduction cascade?', back: 'A series of molecular events (often phosphorylation by kinases) that amplify and pass along a signal from receptor to effector, producing a cellular response.', hint: 'One signal molecule can trigger thousands of responses.' },
      ],
    });
    console.log('✅ Cell Signaling flashcards');
  }

  console.log('\n✅ All AP Biology process flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
