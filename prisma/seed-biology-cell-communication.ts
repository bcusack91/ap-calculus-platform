import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Biology - Unit 4: Cell Communication and Cell Cycle...')

  const bioCourse = await prisma.course.findUnique({
    where: { slug: 'ap-biology' },
  })

  if (!bioCourse) {
    throw new Error('AP Biology course not found')
  }

  const commCategory = await prisma.category.upsert({
    where: { slug: 'biology-cell-communication' },
    update: {},
    create: {
      slug: 'biology-cell-communication',
      name: 'Cell Communication and Cell Cycle',
      description: 'Signal transduction, cell cycle regulation, and cell division',
      order: 4,
      courseId: bioCourse.id,
    },
  })

  console.log('✓ Created category: Cell Communication and Cell Cycle')

  // Topic 1: Cell Signaling
  const signalingTopic = await prisma.topic.upsert({
    where: { slug: 'cell-signaling' },
    update: {},
    create: {
      slug: 'cell-signaling',
      title: 'Cell Signaling and Signal Transduction',
      description: 'How cells communicate through chemical signals and receptors',
      order: 1,
      categoryId: commCategory.id,
      isPremium: false,
      textContent: `
# 📡 Cell Signaling and Signal Transduction

## Overview

**Cell signaling:** How cells communicate and respond to their environment

**Three stages:**
1. **Reception:** Signal molecule binds to receptor
2. **Transduction:** Signal converted into cellular response
3. **Response:** Cell changes behavior

## Types of Cell Signaling

### 1. Direct Contact
- **Gap junctions:** channels between animal cells
- **Plasmodesmata:** channels between plant cells
- **Cell surface markers:** immune recognition

### 2. Paracrine Signaling
- Local signaling to nearby cells
- Short-distance diffusion
- Example: growth factors, neurotransmitters

### 3. Endocrine Signaling
- Long-distance via bloodstream
- **Hormones** travel throughout body
- Example: insulin, estrogen, testosterone

### 4. Autocrine Signaling
- Cell signals itself
- Important in development and immune response

## Reception

**Receptors:** Proteins that bind signal molecules (ligands)

**Types:**

### 1. Cell Surface Receptors
- For hydrophilic signals (can't cross membrane)
- **G protein-coupled receptors (GPCRs)**
- **Receptor tyrosine kinases (RTKs)**
- **Ligand-gated ion channels**

### 2. Intracellular Receptors
- For hydrophobic signals (can cross membrane)
- Located in cytoplasm or nucleus
- Examples: steroid hormones, thyroid hormones

## Signal Transduction

**Transduction:** Converting signal into cellular response

**Key mechanisms:**

### 1. Protein Phosphorylation Cascades
- **Protein kinases** add phosphate groups
- **Protein phosphatases** remove phosphate groups
- **Phosphorylation relay:** chain of activated proteins
- Amplifies signal

### 2. Second Messengers
Small molecules that relay signals inside cell:

**cAMP (cyclic AMP):**
- Made from ATP by adenylyl cyclase
- Activates protein kinase A (PKA)
- Degraded by phosphodiesterase

**Ca²⁺ (calcium ions):**
- Stored in ER, released into cytoplasm
- Activates many proteins
- Important in muscle contraction, neurotransmitter release

**IP₃ and DAG:**
- Made from membrane phospholipids
- IP₃ triggers Ca²⁺ release
- DAG activates protein kinase C (PKC)

### 3. Signal Amplification
- One signal molecule activates many molecules
- Cascade effect
- Example: 1 epinephrine → billions of glucose molecules released

## Response

**Cellular responses:**
- Gene expression changes
- Enzyme activation/inhibition
- Cell shape/movement changes
- Cell division
- Apoptosis (programmed cell death)

## Regulation of Signaling

**Termination mechanisms:**
- Ligand dissociates from receptor
- Receptor inactivated or degraded
- Second messengers broken down
- Protein phosphatases remove phosphate groups

**Feedback mechanisms:**
- **Negative feedback:** response inhibits pathway
- **Positive feedback:** response enhances pathway

## Key Concepts

1. **Three stages:** reception, transduction, response
2. **Cell surface receptors** for hydrophilic signals
3. **Intracellular receptors** for hydrophobic signals
4. **Phosphorylation cascades** transmit and amplify signals
5. **Second messengers** (cAMP, Ca²⁺) relay signals
6. **Signal amplification** allows small stimulus → large response
7. **Feedback regulation** controls signaling pathways
`,
    },
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: signalingTopic.id,
        front: 'What are the three stages of cell signaling?',
        back: '1) Reception: signal binds receptor. 2) Transduction: signal converted into cellular response. 3) Response: cell changes behavior.',
      },
      {
        topicId: signalingTopic.id,
        front: 'Paracrine vs. endocrine signaling?',
        back: 'Paracrine: local signaling to nearby cells (short distance). Endocrine: long-distance via bloodstream using hormones.',
      },
      {
        topicId: signalingTopic.id,
        front: 'Cell surface vs. intracellular receptors?',
        back: 'Cell surface: for hydrophilic signals that can\'t cross membrane (GPCRs, RTKs). Intracellular: for hydrophobic signals that cross membrane (steroid hormones).',
      },
      {
        topicId: signalingTopic.id,
        front: 'What are second messengers? Give examples.',
        back: 'Small molecules that relay signals inside cell. Examples: cAMP (from ATP), Ca²⁺ (from ER), IP₃ and DAG (from membrane lipids).',
      },
      {
        topicId: signalingTopic.id,
        front: 'What is signal amplification?',
        back: 'One signal molecule activates many molecules through cascade effect, producing large response from small stimulus. Example: 1 epinephrine → billions of glucose molecules.',
      },
      {
        topicId: signalingTopic.id,
        front: 'What is a protein phosphorylation cascade?',
        back: 'Chain reaction where protein kinases add phosphate groups to activate proteins in sequence. Amplifies signal and allows regulation. Reversed by phosphatases.',
      },
    ],
  })

  console.log('✓ Created topic: Cell Signaling and Signal Transduction')

  // Topic 2: Cell Cycle and Mitosis
  const mitosisTopic = await prisma.topic.upsert({
    where: { slug: 'cell-cycle-mitosis' },
    update: {},
    create: {
      slug: 'cell-cycle-mitosis',
      title: 'Cell Cycle and Mitosis',
      description: 'Stages of the cell cycle, mitosis, and regulation',
      order: 2,
      categoryId: commCategory.id,
      isPremium: false,
      textContent: `
# 🔄 Cell Cycle and Mitosis

## Cell Cycle Overview

**Cell cycle:** Ordered series of events from cell formation to division

**Two main phases:**
1. **Interphase:** Cell grows and copies DNA (~90% of cycle)
2. **Mitotic (M) phase:** Cell divides (~10% of cycle)

## Interphase

### G₁ Phase (Gap 1)
- Cell grows
- Normal metabolism
- Organelle production
- **G₁ checkpoint:** check for size, nutrients, DNA damage

### S Phase (Synthesis)
- **DNA replication**
- Each chromosome duplicated → sister chromatids
- Histones synthesized
- Centrosomes duplicated

### G₂ Phase (Gap 2)
- Continued growth
- Protein synthesis for mitosis
- **G₂ checkpoint:** check for DNA replication errors

### G₀ Phase
- Non-dividing state
- Some cells permanently (neurons)
- Some temporarily (liver cells)

## Mitosis

**Purpose:** Produce two identical daughter cells

**Stages: PMAT**

### 1. Prophase
- Chromatin condenses → visible chromosomes
- Each chromosome has 2 sister chromatids (joined at centromere)
- Centrosomes move to opposite poles
- Spindle fibers begin forming
- Nuclear envelope breaks down

### 2. Metaphase
- Chromosomes align at **metaphase plate** (cell equator)
- Spindle fibers attach to kinetochores (on centromeres)
- **M checkpoint (spindle checkpoint):** all chromosomes attached?

### 3. Anaphase
- Sister chromatids separate
- Move to opposite poles
- Cell elongates

### 4. Telophase
- Nuclear envelopes reform around each set of chromosomes
- Chromosomes decondense
- Spindle disappears
- Cleavage furrow begins (animals) or cell plate forms (plants)

## Cytokinesis

**Division of cytoplasm** (overlaps with telophase)

**Animals:**
- Cleavage furrow forms (actin/myosin ring)
- Pinches cell in two

**Plants:**
- Cell plate forms from vesicles
- Builds new cell wall from center outward

## Cell Cycle Regulation

**Cyclins and CDKs (cyclin-dependent kinases):**
- Cyclins: regulatory proteins that fluctuate in concentration
- CDKs: enzymes that phosphorylate target proteins
- **Cyclin-CDK complexes** drive cell cycle forward

**Key regulators:**
- **p53:** "guardian of genome"
  - Stops cycle if DNA damaged
  - Triggers apoptosis if damage severe
- **Rb protein:** regulates G₁ checkpoint

**Checkpoints:**
1. **G₁:** size, nutrients, DNA damage
2. **G₂:** DNA replication complete and accurate
3. **M (spindle):** all chromosomes attached to spindle

## Cancer and Cell Cycle

**Cancer:** Uncontrolled cell division

**Causes:**
- **Proto-oncogenes** mutated → oncogenes (accelerate cycle)
- **Tumor suppressor genes** (p53, Rb) inactivated
- Checkpoint failures

**Characteristics:**
- Ignore stop signals
- Don't undergo apoptosis
- Invade other tissues (metastasis)
- Induce blood vessel formation (angiogenesis)

## Key Concepts

1. **Interphase:** G₁, S (DNA replication), G₂
2. **Mitosis (PMAT):** prophase, metaphase, anaphase, telophase
3. **Sister chromatids** separate in anaphase
4. **Checkpoints** ensure proper progression
5. **Cyclin-CDK complexes** regulate cell cycle
6. **p53** stops cycle if DNA damaged
7. **Cancer** results from cell cycle dysregulation
`,
    },
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: mitosisTopic.id,
        front: 'What are the stages of interphase?',
        back: 'G₁ (growth and normal metabolism), S (DNA replication), G₂ (continued growth and preparation for mitosis). G₀ is non-dividing state.',
      },
      {
        topicId: mitosisTopic.id,
        front: 'What are the four stages of mitosis (PMAT)?',
        back: 'Prophase (chromatin condenses, spindle forms), Metaphase (chromosomes align at plate), Anaphase (sister chromatids separate), Telophase (nuclear envelopes reform).',
      },
      {
        topicId: mitosisTopic.id,
        front: 'What happens during S phase?',
        back: 'DNA replication occurs. Each chromosome is duplicated, forming sister chromatids joined at the centromere. Centrosomes also duplicated.',
      },
      {
        topicId: mitosisTopic.id,
        front: 'What is the metaphase checkpoint checking for?',
        back: 'Spindle checkpoint: ensures all chromosomes are properly attached to spindle fibers at their kinetochores before anaphase begins.',
      },
      {
        topicId: mitosisTopic.id,
        front: 'How do animal and plant cytokinesis differ?',
        back: 'Animals: cleavage furrow (actin/myosin ring) pinches cell. Plants: cell plate forms from vesicles at center, builds outward to create new cell wall.',
      },
      {
        topicId: mitosisTopic.id,
        front: 'What are cyclins and CDKs?',
        back: 'Cyclins: regulatory proteins that fluctuate in concentration. CDKs: cyclin-dependent kinases. Together, cyclin-CDK complexes phosphorylate proteins to drive cell cycle forward.',
      },
      {
        topicId: mitosisTopic.id,
        front: 'What is the role of p53 in cell cycle regulation?',
        back: '"Guardian of genome." Stops cell cycle if DNA is damaged. Triggers repair mechanisms or apoptosis if damage is too severe. Mutations in p53 can lead to cancer.',
      },
      {
        topicId: mitosisTopic.id,
        front: 'What causes cancer at the cellular level?',
        back: 'Uncontrolled cell division from: proto-oncogenes mutating to oncogenes (accelerate cycle), tumor suppressors (p53, Rb) inactivated, checkpoint failures.',
      },
    ],
  })

  console.log('✓ Created topic: Cell Cycle and Mitosis')

  // Topic 3: Meiosis
  const meiosisTopic = await prisma.topic.upsert({
    where: { slug: 'meiosis' },
    update: {},
    create: {
      slug: 'meiosis',
      title: 'Meiosis and Sexual Reproduction',
      description: 'Meiosis process and genetic variation',
      order: 3,
      categoryId: commCategory.id,
      isPremium: false,
      textContent: `
# 🧬 Meiosis and Sexual Reproduction

## Overview

**Meiosis:** Specialized cell division producing gametes (sex cells)

**Key features:**
- **Two divisions:** Meiosis I and Meiosis II
- Produces **4 haploid cells** from 1 diploid cell
- Daughter cells are **genetically different**

**Chromosome numbers:**
- **Diploid (2n):** two sets of chromosomes (one from each parent)
- **Haploid (n):** one set of chromosomes
- Humans: 2n = 46, n = 23

## Meiosis I (Reductional Division)

**Interphase:** DNA replicates (same as mitosis)

### Prophase I (LONGEST phase)
- Chromatin condenses
- **Synapsis:** Homologous chromosomes pair up
- **Tetrad (bivalent):** 4 chromatids (2 homologous chromosomes)
- **Crossing over:** exchange of DNA between homologs
  - Occurs at chiasmata
  - Creates genetic variation
- Nuclear envelope breaks down
- Spindle forms

### Metaphase I
- Tetrads align at metaphase plate
- **Random orientation** of homologs
- Independent assortment occurs

### Anaphase I
- **Homologous chromosomes** separate
- Sister chromatids stay together
- Different from mitosis!

### Telophase I and Cytokinesis
- Two haploid cells form
- Each has one chromosome from each homologous pair
- Sister chromatids still joined

## Meiosis II (Equational Division)

**Similar to mitosis** but with haploid cells

### Prophase II
- Chromosomes condense
- Spindle forms
- No crossing over

### Metaphase II
- Chromosomes align at metaphase plate
- Single file (not pairs)

### Anaphase II
- **Sister chromatids** separate
- Move to opposite poles

### Telophase II and Cytokinesis
- Nuclear envelopes reform
- **4 haploid cells** produced
- Each genetically unique

## Sources of Genetic Variation

### 1. Crossing Over (Prophase I)
- Exchange of DNA between homologous chromosomes
- Creates new allele combinations
- **Recombinant chromosomes**

### 2. Independent Assortment (Metaphase I)
- Random orientation of homologous pairs
- 2ⁿ possible combinations (n = # of chromosome pairs)
- Humans: 2²³ = ~8 million combinations

### 3. Random Fertilization
- Any sperm can fertilize any egg
- (2²³)² = ~70 trillion combinations

## Mitosis vs. Meiosis

| Feature | Mitosis | Meiosis |
|---------|---------|---------|
| Purpose | Growth, repair | Gamete production |
| Divisions | One | Two |
| Daughter cells | 2 diploid | 4 haploid |
| Genetic identity | Identical to parent | Different from parent |
| Crossing over | No | Yes (Prophase I) |
| Homolog pairing | No | Yes (synapsis) |

## Errors in Meiosis

**Nondisjunction:** Homologs or sister chromatids fail to separate

**Results:**
- **Aneuploidy:** abnormal chromosome number
- **Monosomy:** 2n - 1 (one chromosome missing)
- **Trisomy:** 2n + 1 (one extra chromosome)

**Examples:**
- Down syndrome: Trisomy 21 (3 copies of chromosome 21)
- Turner syndrome: Monosomy X (45, X)
- Klinefelter syndrome: XXY (47, XXY)

## Key Concepts

1. **Meiosis has two divisions** producing 4 haploid cells
2. **Meiosis I:** homologous chromosomes separate
3. **Meiosis II:** sister chromatids separate
4. **Crossing over** (Prophase I) exchanges DNA
5. **Independent assortment** randomizes chromosome distribution
6. **Three sources of variation:** crossing over, independent assortment, random fertilization
7. **Nondisjunction** causes aneuploidy
`,
    },
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: meiosisTopic.id,
        front: 'What is the purpose of meiosis?',
        back: 'Produce gametes (sex cells) for sexual reproduction. One diploid cell produces 4 haploid, genetically different cells through two divisions.',
      },
      {
        topicId: meiosisTopic.id,
        front: 'What happens during synapsis in Prophase I?',
        back: 'Homologous chromosomes pair up forming tetrads (4 chromatids). This is unique to meiosis and allows for crossing over.',
      },
      {
        topicId: meiosisTopic.id,
        front: 'What is crossing over and when does it occur?',
        back: 'Exchange of DNA segments between homologous chromosomes during Prophase I. Occurs at chiasmata. Creates recombinant chromosomes and genetic variation.',
      },
      {
        topicId: meiosisTopic.id,
        front: 'What separates in Anaphase I vs. Anaphase II?',
        back: 'Anaphase I: homologous chromosomes separate (sister chromatids stay together). Anaphase II: sister chromatids separate (like mitosis).',
      },
      {
        topicId: meiosisTopic.id,
        front: 'What are the three sources of genetic variation in sexual reproduction?',
        back: '1) Crossing over (exchanges DNA between homologs). 2) Independent assortment (random orientation of chromosome pairs). 3) Random fertilization (any sperm + any egg).',
      },
      {
        topicId: meiosisTopic.id,
        front: 'How many possible gamete combinations from independent assortment in humans?',
        back: '2²³ = ~8 million combinations per parent. Random fertilization: (2²³)² = ~70 trillion possible offspring combinations.',
      },
      {
        topicId: meiosisTopic.id,
        front: 'What is nondisjunction and what does it cause?',
        back: 'Failure of homologous chromosomes or sister chromatids to separate during meiosis. Causes aneuploidy (abnormal chromosome number) like trisomy (2n+1) or monosomy (2n-1).',
      },
      {
        topicId: meiosisTopic.id,
        front: 'Key differences: Mitosis vs. Meiosis?',
        back: 'Mitosis: 1 division, 2 diploid identical cells, growth/repair. Meiosis: 2 divisions, 4 haploid different cells, gamete production, crossing over and synapsis occur.',
      },
    ],
  })

  console.log('✓ Created topic: Meiosis and Sexual Reproduction')

  console.log('\n✅ Successfully seeded AP Biology - Unit 4: Cell Communication and Cell Cycle!')
  console.log('   Topics: 3')
  console.log('   Flashcards: 22')
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
