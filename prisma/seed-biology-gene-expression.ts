import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Biology - Unit 6: Gene Expression and Regulation...')

  const bioCourse = await prisma.course.findUnique({
    where: { slug: 'ap-biology' },
  })

  if (!bioCourse) {
    throw new Error('AP Biology course not found')
  }

  const geneCategory = await prisma.category.upsert({
    where: { slug: 'biology-gene-expression' },
    update: {},
    create: {
      slug: 'biology-gene-expression',
      name: 'Gene Expression and Regulation',
      description: 'DNA replication, transcription, translation, and gene regulation',
      order: 6,
      courseId: bioCourse.id,
    },
  })

  console.log('✓ Created category: Gene Expression and Regulation')

  // Topic 1: DNA Structure and Replication
  const dnaTopic = await prisma.topic.upsert({
    where: { slug: 'dna-replication' },
    update: {},
    create: {
      slug: 'dna-replication',
      title: 'DNA Structure and Replication',
      description: 'DNA structure, replication process, and proofreading mechanisms',
      order: 1,
      categoryId: geneCategory.id,
      isPremium: false,
      textContent: `
# 🧬 DNA Structure and Replication

## DNA Structure Review

**Double helix:**
- Two antiparallel strands (5'→3' and 3'→5')
- Sugar-phosphate backbone (outside)
- Nitrogenous bases paired inside
- A pairs with T (2 H-bonds)
- G pairs with C (3 H-bonds)

## DNA Replication

**Purpose:** Copy DNA before cell division
**Timing:** S phase of cell cycle
**Result:** Two identical DNA molecules

### Key Features

**Semiconservative replication:**
- Each new DNA has one original strand + one new strand
- Proven by Meselson-Stahl experiment

**Origin of replication:**
- Starting point for replication
- Multiple origins in eukaryotes
- Single origin in prokaryotes

**Bidirectional replication:**
- Proceeds in both directions from origin
- Forms replication bubbles

## Enzymes and Proteins

### 1. Helicase
- **Unwinds** double helix
- Breaks hydrogen bonds between bases
- Creates replication fork

### 2. Single-Strand Binding Proteins (SSB)
- Bind to separated strands
- Prevent strands from reannealing
- Protect single-stranded DNA

### 3. Topoisomerase
- Relieves tension from unwinding
- Prevents supercoiling ahead of replication fork

### 4. Primase
- RNA polymerase enzyme
- Synthesizes short **RNA primers** (5-10 nucleotides)
- DNA polymerase needs primer to start

### 5. DNA Polymerase III (prokaryotes) / DNA Polymerase δ (eukaryotes)
- **Main replication enzyme**
- Adds nucleotides to 3' end only (5'→3' direction)
- Proofreads as it goes (3'→5' exonuclease activity)

### 6. DNA Polymerase I (prokaryotes)
- Removes RNA primers
- Replaces with DNA nucleotides
- 5'→3' exonuclease activity

### 7. DNA Ligase
- Seals gaps between Okazaki fragments
- Forms phosphodiester bonds
- Creates continuous strand

## Leading vs. Lagging Strand

### Leading Strand
- Synthesized **continuously** in 5'→3' direction
- Same direction as replication fork movement
- Only one primer needed

### Lagging Strand
- Synthesized **discontinuously** in 5'→3' direction
- Opposite direction to fork movement
- Forms **Okazaki fragments** (1000-2000 nucleotides)
- Multiple primers needed
- Fragments joined by DNA ligase

## Replication Steps

1. **Initiation:**
   - Helicase unwinds DNA at origin
   - SSB proteins stabilize
   - Primase adds RNA primers

2. **Elongation:**
   - DNA polymerase adds nucleotides (5'→3')
   - Leading strand: continuous synthesis
   - Lagging strand: Okazaki fragments formed

3. **Termination:**
   - DNA polymerase I removes RNA primers
   - Replaces with DNA
   - DNA ligase seals gaps
   - Two identical DNA molecules

## Proofreading and Repair

**Proofreading:**
- DNA polymerase checks each nucleotide
- 3'→5' exonuclease removes errors
- Error rate: ~1 in 10 billion

**Mismatch repair:**
- Enzymes scan for mismatched bases
- Remove and replace incorrect nucleotides
- Occurs after replication

**DNA repair mechanisms:**
- Base excision repair
- Nucleotide excision repair (UV damage)
- Direct repair

## Telomeres and Telomerase

**Problem:** DNA polymerase can't replicate ends of linear chromosomes

**Telomeres:**
- Repetitive sequences at chromosome ends (TTAGGG in humans)
- Protect genes from being lost
- Shorten with each division

**Telomerase:**
- Enzyme that extends telomeres
- Active in germ cells, stem cells
- Inactive in most somatic cells
- Overactive in cancer cells (immortality)

## Key Concepts

1. **Semiconservative:** each new DNA has one old + one new strand
2. **5'→3' direction:** DNA polymerase adds to 3' end only
3. **Leading strand:** continuous synthesis
4. **Lagging strand:** discontinuous, forms Okazaki fragments
5. **Proofreading:** ensures high fidelity (~1 error in 10¹⁰)
6. **Telomeres:** protect chromosome ends, shorten with age
`,
    },
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: dnaTopic.id,
        front: 'What is semiconservative replication?',
        back: 'Each new DNA molecule consists of one original (parental) strand and one newly synthesized strand. Proven by Meselson-Stahl experiment.',
      },
      {
        topicId: dnaTopic.id,
        front: 'What is the function of helicase?',
        back: 'Unwinds the DNA double helix by breaking hydrogen bonds between base pairs, creating the replication fork.',
      },
      {
        topicId: dnaTopic.id,
        front: 'Why are RNA primers needed for DNA replication?',
        back: 'DNA polymerase can only add nucleotides to existing 3\' OH group. It cannot start from scratch. Primase synthesizes short RNA primers to provide starting point.',
      },
      {
        topicId: dnaTopic.id,
        front: 'Leading strand vs. lagging strand synthesis?',
        back: 'Leading: continuous synthesis in 5\'→3\' direction toward fork. Lagging: discontinuous synthesis away from fork, forms Okazaki fragments that are joined by ligase.',
      },
      {
        topicId: dnaTopic.id,
        front: 'What are Okazaki fragments?',
        back: 'Short DNA segments (1000-2000 nucleotides) synthesized discontinuously on the lagging strand. Joined together by DNA ligase after RNA primers removed.',
      },
      {
        topicId: dnaTopic.id,
        front: 'How does DNA polymerase proofread?',
        back: '3\'→5\' exonuclease activity allows it to remove incorrectly paired nucleotides immediately. Reduces error rate to ~1 in 10 billion nucleotides.',
      },
      {
        topicId: dnaTopic.id,
        front: 'What are telomeres and why do they shorten?',
        back: 'Repetitive sequences (TTAGGG) at chromosome ends. DNA polymerase can\'t replicate the very ends of linear chromosomes, so telomeres shorten with each division. Protects genes from being lost.',
      },
      {
        topicId: dnaTopic.id,
        front: 'What is the role of telomerase?',
        back: 'Enzyme that extends telomeres by adding repetitive sequences. Active in germ cells and stem cells. Inactive in most somatic cells. Overactive in cancer cells (contributes to immortality).',
      },
    ],
  })

  console.log('✓ Created topic: DNA Structure and Replication')

  // Topic 2: Transcription and RNA Processing
  const transcriptionTopic = await prisma.topic.upsert({
    where: { slug: 'transcription-rna-processing' },
    update: {},
    create: {
      slug: 'transcription-rna-processing',
      title: 'Transcription and RNA Processing',
      description: 'Gene transcription, RNA processing in eukaryotes, and gene expression',
      order: 2,
      categoryId: geneCategory.id,
      isPremium: false,
      textContent: `
# 📝 Transcription and RNA Processing

## Overview

**Gene expression:** DNA → RNA → Protein

**Transcription:** DNA → RNA (this topic)
**Translation:** RNA → Protein (next topic)

## Transcription Process

**Purpose:** Synthesize RNA from DNA template

**Key enzyme: RNA polymerase**
- Does NOT need primer (unlike DNA polymerase)
- Synthesizes RNA 5'→3' direction
- Reads template strand 3'→5'

### Three Stages

### 1. Initiation
- **Promoter:** DNA sequence where RNA polymerase binds
- **TATA box:** common promoter element in eukaryotes (~25 bp upstream)
- **Transcription factors** help RNA polymerase bind (eukaryotes)
- RNA polymerase unwinds DNA

### 2. Elongation
- RNA polymerase moves along DNA (3'→5' on template)
- Adds RNA nucleotides (5'→3')
- **Coding strand** (non-template) has same sequence as RNA (except T→U)
- **Template strand** (antisense) used to make RNA

### 3. Termination
- **Prokaryotes:** terminator sequence causes hairpin loop
- **Eukaryotes:** cleavage signal, polyadenylation signal
- RNA polymerase releases
- RNA transcript complete

## Prokaryotic vs. Eukaryotic Transcription

| Feature | Prokaryotes | Eukaryotes |
|---------|-------------|------------|
| RNA polymerase | One type | Three types (I, II, III) |
| Promoter | -10, -35 boxes | TATA box, others |
| Processing | None | Extensive |
| Location | Cytoplasm | Nucleus |
| Coupling | Transcription + translation | Separated |

## RNA Processing (Eukaryotes Only)

**Primary transcript (pre-mRNA)** must be processed before translation

### 1. 5' Cap
- **7-methylguanosine cap** added to 5' end
- **Functions:**
  - Protects from degradation
  - Helps ribosome recognize mRNA
  - Aids in export from nucleus

### 2. 3' Poly-A Tail
- ~50-250 adenine nucleotides added to 3' end
- **Functions:**
  - Protects from degradation
  - Aids in export from nucleus
  - Helps ribosome locate start codon

### 3. RNA Splicing
- **Introns** (non-coding) removed
- **Exons** (coding) joined together
- Carried out by **spliceosome** (snRNPs + proteins)

**Alternative splicing:**
- Different combinations of exons
- One gene → multiple proteins
- Increases protein diversity
- ~95% of human genes alternatively spliced

## Gene Structure (Eukaryotes)

**Gene organization:**
- Promoter
- 5' UTR (untranslated region)
- **Exons** (expressed sequences)
- **Introns** (intervening sequences)
- 3' UTR
- Terminator

## Types of RNA

### 1. mRNA (messenger RNA)
- Carries genetic information DNA → ribosome
- Translated into protein
- ~5% of total RNA

### 2. rRNA (ribosomal RNA)
- Structural and catalytic component of ribosomes
- Most abundant RNA (~80%)

### 3. tRNA (transfer RNA)
- Brings amino acids to ribosome
- Has anticodon that pairs with mRNA codon
- ~15% of total RNA

### 4. Other RNAs
- **snRNA:** splicing (in snRNPs)
- **miRNA:** gene regulation (microRNA)
- **siRNA:** gene silencing (small interfering RNA)

## Key Concepts

1. **RNA polymerase** synthesizes RNA 5'→3', reads DNA 3'→5'
2. **Promoter** is where transcription starts
3. **Template strand** is copied; **coding strand** has same sequence as RNA
4. **Eukaryotic processing:** 5' cap, poly-A tail, splicing
5. **Introns** removed, **exons** joined
6. **Alternative splicing** increases protein diversity
7. **Three main RNAs:** mRNA (message), tRNA (transfer), rRNA (ribosomal)
`,
    },
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: transcriptionTopic.id,
        front: 'What are the three stages of transcription?',
        back: '1) Initiation: RNA polymerase binds to promoter. 2) Elongation: RNA polymerase synthesizes RNA 5\'→3\'. 3) Termination: polymerase releases at terminator sequence.',
      },
      {
        topicId: transcriptionTopic.id,
        front: 'Template strand vs. coding strand?',
        back: 'Template (antisense): read 3\'→5\' to make RNA. Coding (sense): has same sequence as RNA (except T→U), not copied. RNA polymerase reads template strand.',
      },
      {
        topicId: transcriptionTopic.id,
        front: 'What are the three types of RNA processing in eukaryotes?',
        back: '1) 5\' cap (7-methylguanosine): protects, helps ribosome bind. 2) 3\' poly-A tail: protects, aids export. 3) RNA splicing: introns removed, exons joined.',
      },
      {
        topicId: transcriptionTopic.id,
        front: 'What are introns and exons?',
        back: 'Introns: non-coding sequences removed during RNA splicing. Exons: expressed sequences that are kept and joined together to form mature mRNA.',
      },
      {
        topicId: transcriptionTopic.id,
        front: 'What is alternative splicing?',
        back: 'Different combinations of exons can be joined together, allowing one gene to produce multiple different proteins. ~95% of human genes are alternatively spliced.',
      },
      {
        topicId: transcriptionTopic.id,
        front: 'What is the spliceosome?',
        back: 'Complex of snRNPs (small nuclear ribonucleoproteins) and proteins that removes introns and joins exons during RNA splicing.',
      },
      {
        topicId: transcriptionTopic.id,
        front: 'Compare the three main types of RNA.',
        back: 'mRNA: carries genetic code, translated (5%). rRNA: component of ribosomes, catalytic (80%). tRNA: brings amino acids, has anticodon (15%).',
      },
      {
        topicId: transcriptionTopic.id,
        front: 'Key differences: prokaryotic vs. eukaryotic transcription?',
        back: 'Prokaryotes: no RNA processing, coupled with translation, cytoplasm. Eukaryotes: 5\' cap, poly-A tail, splicing, separated from translation, nucleus.',
      },
    ],
  })

  console.log('✓ Created topic: Transcription and RNA Processing')

  // Topic 3: Translation
  const translationTopic = await prisma.topic.upsert({
    where: { slug: 'translation' },
    update: {},
    create: {
      slug: 'translation',
      title: 'Translation and Protein Synthesis',
      description: 'The genetic code, translation process, and protein synthesis',
      order: 3,
      categoryId: geneCategory.id,
      isPremium: false,
      textContent: `
# 🔤 Translation and Protein Synthesis

## The Genetic Code

**Codon:** Three-nucleotide sequence in mRNA that codes for amino acid

**Key features:**
- **64 codons** total (4³ = 64)
- **61 code for amino acids**
- **3 are stop codons:** UAA, UAG, UGA
- **1 start codon:** AUG (also codes for methionine)

**Properties:**

1. **Redundant (degenerate):**
   - Multiple codons for most amino acids
   - Example: Leucine has 6 codons

2. **Unambiguous:**
   - Each codon specifies only ONE amino acid

3. **Nearly universal:**
   - Same in almost all organisms
   - Strong evidence for common ancestry

4. **Non-overlapping:**
   - Read in groups of 3, no overlap
   - Frame matters (reading frame)

## tRNA Structure and Function

**Structure:**
- Cloverleaf shape (2D), L-shape (3D)
- **Anticodon:** three bases that pair with mRNA codon
- **Amino acid attachment site:** 3' end

**Function:**
- Brings correct amino acid to ribosome
- Anticodon pairs with codon (complementary, antiparallel)

**Aminoacyl-tRNA synthetase:**
- Enzyme that attaches amino acid to correct tRNA
- 20 different synthetases (one per amino acid)
- Ensures accuracy

## Ribosome Structure

**Two subunits:**
- **Small subunit:** binds mRNA
- **Large subunit:** catalyzes peptide bond formation

**Three binding sites:**
- **A site (aminoacyl):** incoming tRNA
- **P site (peptidyl):** tRNA with growing chain
- **E site (exit):** empty tRNA leaves

**Ribosomal RNA (rRNA):**
- Catalytic component
- **Ribozyme:** RNA with enzymatic activity
- Forms peptide bonds

## Translation Process

### 1. Initiation

**Prokaryotes:**
- Small ribosomal subunit binds mRNA at **Shine-Dalgarno sequence**
- Initiator tRNA (fMet-tRNA) binds start codon (AUG)
- Large subunit joins
- Initiation factors help

**Eukaryotes:**
- Small subunit binds 5' cap
- Scans for start codon (AUG)
- Initiator tRNA (Met-tRNA) binds
- Large subunit joins

### 2. Elongation

**Three steps (repeating):**

1. **Codon recognition:**
   - Aminoacyl-tRNA enters A site
   - Anticodon pairs with codon

2. **Peptide bond formation:**
   - rRNA catalyzes peptide bond
   - Amino acid transferred from P site to A site
   - Growing chain now on A-site tRNA

3. **Translocation:**
   - Ribosome moves 3 nucleotides (one codon)
   - tRNA in A site → P site
   - tRNA in P site → E site → exits
   - A site now empty for next tRNA
   - Requires GTP and elongation factors

### 3. Termination

- Stop codon enters A site (UAA, UAG, or UGA)
- **Release factors** bind (no tRNA for stop codons)
- Polypeptide released
- Ribosomal subunits dissociate

## Polyribosomes (Polysomes)

- Multiple ribosomes on one mRNA
- Simultaneous translation
- Increases protein production efficiency

## Mutations

### Point Mutations

**Silent mutation:**
- Changes codon but NOT amino acid (due to redundancy)
- Usually no effect

**Missense mutation:**
- Changes codon → different amino acid
- May affect protein function
- Example: sickle cell (Glu → Val)

**Nonsense mutation:**
- Changes codon → stop codon
- Premature termination
- Nonfunctional protein (usually)

### Frameshift Mutations

**Insertion or deletion** of nucleotides (not multiple of 3)
- Shifts reading frame
- All downstream codons changed
- Usually severe effects

## Post-Translational Modifications

**After translation, proteins may be modified:**
- Cleaving signal sequences
- Adding chemical groups (phosphorylation, acetylation)
- Adding sugars (glycosylation)
- Folding with chaperones
- Forming disulfide bonds

## Key Concepts

1. **Genetic code:** 64 codons, 61 for amino acids, 3 stop, 1 start (AUG)
2. **tRNA:** brings amino acids, anticodon pairs with codon
3. **Ribosome:** catalyzes peptide bonds (rRNA is ribozyme)
4. **Three sites:** A (incoming), P (peptide), E (exit)
5. **Elongation:** codon recognition → peptide bond → translocation
6. **Stop codons:** UAA, UAG, UGA (no tRNA, release factors bind)
7. **Mutations:** silent, missense, nonsense, frameshift
`,
    },
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: translationTopic.id,
        front: 'What is a codon?',
        back: 'Three-nucleotide sequence in mRNA that codes for one amino acid. 64 total codons: 61 code for amino acids, 3 are stop codons (UAA, UAG, UGA).',
      },
      {
        topicId: translationTopic.id,
        front: 'What is the start codon and what does it code for?',
        back: 'AUG. Codes for methionine (Met) and signals where translation begins. All proteins initially start with Met.',
      },
      {
        topicId: translationTopic.id,
        front: 'What are the properties of the genetic code?',
        back: 'Redundant (multiple codons per amino acid), unambiguous (one meaning per codon), nearly universal (same in all organisms), non-overlapping (read in threes).',
      },
      {
        topicId: translationTopic.id,
        front: 'What is the function of tRNA?',
        back: 'Brings correct amino acid to ribosome during translation. Anticodon on tRNA pairs with codon on mRNA. Amino acid attached to 3\' end.',
      },
      {
        topicId: translationTopic.id,
        front: 'What are the three ribosome binding sites?',
        back: 'A site (aminoacyl): incoming tRNA. P site (peptidyl): tRNA with growing chain. E site (exit): empty tRNA leaves.',
      },
      {
        topicId: translationTopic.id,
        front: 'What are the three steps of elongation in translation?',
        back: '1) Codon recognition: tRNA enters A site. 2) Peptide bond formation: amino acid transferred to A site. 3) Translocation: ribosome moves, tRNAs shift sites.',
      },
      {
        topicId: translationTopic.id,
        front: 'Compare silent, missense, and nonsense mutations.',
        back: 'Silent: codon change, same amino acid (no effect). Missense: different amino acid (may affect function). Nonsense: creates stop codon (premature termination).',
      },
      {
        topicId: translationTopic.id,
        front: 'What is a frameshift mutation?',
        back: 'Insertion or deletion of nucleotides (not a multiple of 3) that shifts the reading frame. Changes all downstream codons. Usually severe effects.',
      },
    ],
  })

  console.log('✓ Created topic: Translation and Protein Synthesis')

  // Topic 4: Gene Regulation
  const regulationTopic = await prisma.topic.upsert({
    where: { slug: 'gene-regulation' },
    update: {},
    create: {
      slug: 'gene-regulation',
      title: 'Gene Regulation',
      description: 'Gene regulation in prokaryotes and eukaryotes, operons, and epigenetics',
      order: 4,
      categoryId: geneCategory.id,
      isPremium: false,
      textContent: `
# 🎛️ Gene Regulation

## Why Regulate Genes?

**All cells have same DNA, but different functions**
- Not all genes expressed in all cells
- Gene expression controlled at multiple levels
- Conserves energy and resources
- Responds to environmental changes

## Prokaryotic Gene Regulation

**Operon:** Cluster of genes under one promoter

### lac Operon (Inducible)

**Components:**
- **Promoter:** RNA polymerase binding site
- **Operator:** repressor binding site
- **Structural genes:** lacZ, lacY, lacA (encode enzymes for lactose metabolism)
- **Regulatory gene:** lacI (encodes repressor protein)

**Without lactose (OFF):**
1. Repressor protein binds operator
2. Blocks RNA polymerase
3. No transcription of structural genes

**With lactose (ON):**
1. Lactose (allolactose) binds repressor
2. Repressor releases from operator
3. RNA polymerase transcribes genes
4. Lactose metabolized

**Function:** Inducible system - genes turned ON when substrate present

### trp Operon (Repressible)

**Tryptophan synthesis genes**

**Without tryptophan (ON):**
1. Repressor inactive (can't bind operator)
2. RNA polymerase transcribes genes
3. Tryptophan synthesized

**With tryptophan (OFF):**
1. Tryptophan (corepressor) binds repressor
2. Activated repressor binds operator
3. Blocks transcription

**Function:** Repressible system - genes turned OFF when product present

## Eukaryotic Gene Regulation

**More complex than prokaryotes:**
- Chromatin structure
- Transcription factors
- Alternative splicing
- mRNA stability
- Translation control
- Post-translational modifications

### Chromatin Structure

**Histone modifications:**
- **Acetylation:** loosens chromatin (genes accessible - ON)
- **Methylation:** can activate or repress (depends on location)
- **Phosphorylation:** various effects

**DNA methylation:**
- Addition of methyl groups to cytosine
- Usually silences genes
- Heritable (epigenetic)

**Chromatin remodeling:**
- **Euchromatin:** loosely packed, genes active
- **Heterochromatin:** tightly packed, genes inactive

### Transcription Factors

**Activators:**
- Promote transcription
- Help RNA polymerase bind
- Bind to enhancers (DNA sequences)

**Repressors:**
- Inhibit transcription
- Block activators or RNA polymerase
- Bind to silencers

**Enhancers and silencers:**
- Can be far from gene
- DNA loops bring them near promoter

### Control Elements

**Proximal control elements:**
- Near promoter
- TATA box, CAAT box, GC box

**Distal control elements:**
- Far from promoter
- Enhancers and silencers

## Epigenetics

**Changes in gene expression without DNA sequence changes**

**Mechanisms:**
1. **DNA methylation:** adds methyl groups to DNA
2. **Histone modification:** acetylation, methylation, etc.
3. **Chromatin remodeling:** changes DNA packaging

**Characteristics:**
- Can be **heritable** (passed to daughter cells)
- Can be **reversible**
- Influenced by **environment**
  - Diet, stress, toxins, behavior

**Examples:**
- **X-inactivation** in females (Barr body)
- **Genomic imprinting:** parent-specific expression
- **Cancer:** abnormal methylation patterns

## Post-Transcriptional Regulation

**mRNA processing:**
- Alternative splicing (one gene → multiple proteins)
- 5' cap and poly-A tail additions

**mRNA stability:**
- Some mRNAs degraded quickly
- Others stable for long time
- Controlled by sequences in 3' UTR

**microRNA (miRNA) and siRNA:**
- Small RNAs that bind mRNA
- Block translation or cause degradation
- Gene silencing

## Levels of Gene Regulation

1. **Chromatin structure** (access to DNA)
2. **Transcription** (RNA synthesis)
3. **RNA processing** (splicing, capping, tailing)
4. **mRNA stability** (degradation)
5. **Translation** (protein synthesis)
6. **Post-translational** (protein modifications)

## Key Concepts

1. **lac operon:** inducible, turned ON by lactose
2. **trp operon:** repressible, turned OFF by tryptophan
3. **Chromatin modifications** control gene accessibility
4. **Transcription factors** (activators/repressors) control transcription
5. **Epigenetics:** heritable changes without DNA sequence change
6. **Multiple levels** of regulation in eukaryotes
7. **miRNA and siRNA** silence genes post-transcriptionally
`,
    },
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: regulationTopic.id,
        front: 'What is an operon?',
        back: 'Cluster of genes under control of a single promoter in prokaryotes. Genes transcribed together as one mRNA. Allows coordinated regulation.',
      },
      {
        topicId: regulationTopic.id,
        front: 'How does the lac operon work?',
        back: 'Inducible operon. Without lactose: repressor blocks transcription. With lactose: lactose binds repressor, repressor releases, genes transcribed. Genes turned ON when needed.',
      },
      {
        topicId: regulationTopic.id,
        front: 'How does the trp operon work?',
        back: 'Repressible operon. Without tryptophan: genes ON, trp synthesized. With tryptophan: trp binds repressor, activated repressor blocks genes. Genes turned OFF when product present.',
      },
      {
        topicId: regulationTopic.id,
        front: 'How does histone acetylation affect gene expression?',
        back: 'Acetylation loosens chromatin structure (euchromatin), making DNA accessible to transcription factors and RNA polymerase. Activates gene expression.',
      },
      {
        topicId: regulationTopic.id,
        front: 'What is epigenetics?',
        back: 'Changes in gene expression without changes to DNA sequence. Mechanisms: DNA methylation, histone modifications, chromatin remodeling. Can be heritable and influenced by environment.',
      },
      {
        topicId: regulationTopic.id,
        front: 'What are transcription factors?',
        back: 'Proteins that control transcription. Activators: promote transcription, bind enhancers. Repressors: inhibit transcription, bind silencers. Work with RNA polymerase.',
      },
      {
        topicId: regulationTopic.id,
        front: 'What are microRNAs (miRNA)?',
        back: 'Small RNA molecules that bind to complementary mRNA sequences. Block translation or cause mRNA degradation. Post-transcriptional gene silencing.',
      },
      {
        topicId: regulationTopic.id,
        front: 'What are the levels of eukaryotic gene regulation?',
        back: '1) Chromatin structure, 2) Transcription, 3) RNA processing (splicing), 4) mRNA stability, 5) Translation, 6) Post-translational modifications.',
      },
    ],
  })

  console.log('✓ Created topic: Gene Regulation')

  console.log('\n✅ Successfully seeded AP Biology - Unit 6: Gene Expression and Regulation!')
  console.log('   Topics: 4')
  console.log('   Flashcards: 32')
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
