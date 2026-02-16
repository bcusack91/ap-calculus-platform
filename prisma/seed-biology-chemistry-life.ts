import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Biology - Unit 1: Chemistry of Life...')

  const bioCourse = await prisma.course.findUnique({
    where: { slug: 'ap-biology' },
  })

  if (!bioCourse) {
    throw new Error('AP Biology course not found')
  }

  const chemLifeCategory = await prisma.category.upsert({
    where: { slug: 'biology-chemistry-of-life' },
    update: {},
    create: {
      slug: 'biology-chemistry-of-life',
      name: 'Chemistry of Life',
      description: 'Water, biological macromolecules, and the chemical basis of life',
      order: 1,
      courseId: bioCourse.id,
    },
  })

  console.log('✓ Created category: Chemistry of Life')

  // Topic 1: Water and Its Properties
  const waterTopic = await prisma.topic.upsert({
    where: { slug: 'water-properties' },
    update: {},
    create: {
      slug: 'water-properties',
      title: 'Water and Its Properties',
      description: 'The unique properties of water and their importance to life',
      order: 1,
      categoryId: chemLifeCategory.id,
      isPremium: false,
      textContent: `
# 💧 Water and Its Properties

## Why Water is Essential for Life

Water (H₂O) is the most abundant molecule in living organisms and possesses unique properties critical for life.

### Molecular Structure

**Polarity:**
- Oxygen is more electronegative than hydrogen
- Creates partial negative charge (δ-) on oxygen
- Creates partial positive charge (δ+) on hydrogens
- Bent molecular geometry (104.5° bond angle)

**Hydrogen Bonding:**
- Weak attractions between water molecules
- δ+ hydrogen attracted to δ- oxygen of another molecule
- Each water molecule can form up to 4 hydrogen bonds

## Key Properties of Water

### 1. Cohesion and Adhesion
**Cohesion:** Water molecules stick to each other (enables surface tension, water transport)
**Adhesion:** Water molecules stick to other polar surfaces (capillary action)

### 2. High Specific Heat Capacity
- Requires significant energy to change temperature
- Stabilizes body temperature and moderates climate

### 3. High Heat of Vaporization
- Evaporative cooling (sweating, transpiration)

### 4. Ice Floats
- Lower density as solid due to crystalline structure
- Insulates aquatic life in winter

### 5. Excellent Solvent
- Dissolves polar and ionic substances
- Forms hydration shells around ions

## Hydrophobic vs. Hydrophilic

**Hydrophilic:** Polar molecules that dissolve in water
**Hydrophobic:** Nonpolar molecules that don't dissolve in water
**Amphipathic:** Molecules with both regions (e.g., phospholipids)

## pH and Buffers

Water ionization: H₂O ⇌ H⁺ + OH⁻
- pH = -log[H⁺]
- pH 7 = neutral; <7 = acidic; >7 = basic
- Buffers resist pH changes
`,
    },
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: waterTopic.id,
        front: 'What causes water to be polar?',
        back: 'Oxygen is more electronegative than hydrogen, creating partial negative charge on O and partial positive charges on H. The bent molecular geometry prevents charges from canceling.',
      },
      {
        topicId: waterTopic.id,
        front: 'Define cohesion vs. adhesion.',
        back: 'Cohesion: water molecules stick to each other (hydrogen bonding). Adhesion: water molecules stick to other polar surfaces. Both critical for water transport in plants.',
      },
      {
        topicId: waterTopic.id,
        front: 'Why does ice float on liquid water?',
        back: 'Ice has lower density than liquid water because hydrogen bonds form a crystalline lattice structure with more space between molecules.',
      },
      {
        topicId: waterTopic.id,
        front: 'What makes water an excellent solvent?',
        back: 'Water\'s polarity allows it to form hydration shells around ions and dissolve polar molecules by surrounding charged particles with partial charges.',
      },
      {
        topicId: waterTopic.id,
        front: 'Calculate pH when [H⁺] = 1 × 10⁻³ M',
        back: 'pH = -log[H⁺] = -log(10⁻³) = 3. This is acidic (pH < 7).',
      },
    ],
  })

  console.log('✓ Created topic: Water and Its Properties')

  // Topic 2: Carbohydrates
  const carbsTopic = await prisma.topic.upsert({
    where: { slug: 'carbohydrates' },
    update: {},
    create: {
      slug: 'carbohydrates',
      title: 'Carbohydrates',
      description: 'Structure, function, and types of carbohydrates in biological systems',
      order: 2,
      categoryId: chemLifeCategory.id,
      isPremium: false,
      textContent: `
# 🍞 Carbohydrates

## Overview

Carbohydrates: Carbon (C), Hydrogen (H), Oxygen (O) in 1:2:1 ratio → (CH₂O)ₙ

**Functions:**
1. Energy storage (starch, glycogen)
2. Structural support (cellulose, chitin)
3. Cell recognition
4. Energy currency (glucose)

## Types of Carbohydrates

### 1. Monosaccharides (Simple Sugars)
- **Glucose (C₆H₁₂O₆):** Primary energy source
- **Fructose:** Fruit sugar
- **Galactose:** Component of lactose
- **Ribose/Deoxyribose:** RNA/DNA components

### 2. Disaccharides
Formed by **dehydration synthesis** (removes H₂O):
- **Maltose** = Glucose + Glucose
- **Sucrose** = Glucose + Fructose
- **Lactose** = Glucose + Galactose

Broken by **hydrolysis** (adds H₂O)

### 3. Polysaccharides

**Storage:**
- **Starch (plants):** α-glucose polymer, stored in plastids
- **Glycogen (animals):** highly branched α-glucose, liver/muscle

**Structural:**
- **Cellulose (plants):** β-glucose polymer, cell walls
  - Most abundant organic polymer on Earth
  - Humans cannot digest (lack cellulase)
- **Chitin:** Modified glucose with N-groups
  - Fungal cell walls, arthropod exoskeletons

## Key Concepts

**α-glucose vs. β-glucose:**
- α: OH on C1 below ring → forms starch/glycogen (digestible)
- β: OH on C1 above ring → forms cellulose (indigestible)

**Glycosidic bonds:**
- Formed by dehydration synthesis
- Broken by hydrolysis
- Enzyme specificity determines digestibility
`,
    },
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: carbsTopic.id,
        front: 'What is the general formula for carbohydrates?',
        back: '(CH₂O)ₙ - approximately 1:2:1 ratio of carbon to hydrogen to oxygen atoms.',
      },
      {
        topicId: carbsTopic.id,
        front: 'What are the components of maltose, sucrose, and lactose?',
        back: 'Maltose = glucose + glucose; Sucrose = glucose + fructose; Lactose = glucose + galactose.',
      },
      {
        topicId: carbsTopic.id,
        front: 'What is a glycosidic bond?',
        back: 'A covalent bond between two monosaccharides, formed by dehydration synthesis (removes H₂O).',
      },
      {
        topicId: carbsTopic.id,
        front: 'Compare starch and glycogen.',
        back: 'Both are α-glucose storage polymers. Starch (plants) is less branched. Glycogen (animals) is highly branched for rapid energy release, stored in liver/muscle.',
      },
      {
        topicId: carbsTopic.id,
        front: 'Key difference between α-glucose and β-glucose?',
        back: 'OH group position on carbon 1: α has it below (forms digestible starch), β has it above (forms indigestible cellulose).',
      },
      {
        topicId: carbsTopic.id,
        front: 'Why can\'t humans digest cellulose?',
        back: 'Cellulose has β-1,4-glycosidic bonds. Humans lack cellulase enzyme to break these bonds. Only organisms with cellulase-producing bacteria can digest it.',
      },
    ],
  })

  console.log('✓ Created topic: Carbohydrates')

  // Topic 3: Lipids
  const lipidsTopic = await prisma.topic.upsert({
    where: { slug: 'lipids' },
    update: {},
    create: {
      slug: 'lipids',
      title: 'Lipids',
      description: 'Structure and function of fats, phospholipids, and steroids',
      order: 3,
      categoryId: chemLifeCategory.id,
      isPremium: false,
      textContent: `
# 🧈 Lipids

## Overview

**Lipids:** Hydrophobic (nonpolar) biological molecules
- Not true polymers (no repeating monomers)
- Mostly composed of C, H, with some O
- Functions: energy storage, membranes, signaling, insulation

## Types of Lipids

### 1. Fats and Oils (Triglycerides)

**Structure:**
- 1 glycerol + 3 fatty acids
- Linked by **ester bonds** (dehydration synthesis)

**Fatty Acids:**
- Long hydrocarbon chains (C-C-C...)
- Carboxyl group (-COOH) at one end

**Saturated vs. Unsaturated:**

| Saturated | Unsaturated |
|-----------|-------------|
| No C=C double bonds | One or more C=C double bonds |
| Straight chains | Kinks at double bonds |
| Pack tightly | Pack loosely |
| Solid at room temp (fats) | Liquid at room temp (oils) |
| Animal sources | Plant sources |
| Higher melting point | Lower melting point |

**Energy Storage:**
- More than 2× energy per gram vs. carbohydrates
- Efficient long-term storage
- Adipose tissue in animals

### 2. Phospholipids

**Structure:**
- Glycerol + 2 fatty acids + phosphate group
- **Amphipathic:** hydrophilic head + hydrophobic tails

**Biological Role:**
- **Cell membrane structure**
- Form bilayers in aqueous solution
- Heads face water, tails face each other
- Selectively permeable barrier

### 3. Steroids

**Structure:**
- Four fused carbon rings
- Different functional groups attached

**Examples:**
- **Cholesterol:** membrane fluidity, precursor to other steroids
- **Sex hormones:** testosterone, estrogen
- **Cortisol:** stress hormone

## Key Concepts

1. Lipids are **hydrophobic** (don't dissolve in water)
2. **Triglycerides** store energy efficiently
3. **Saturated fats** have no double bonds, pack tightly (solid)
4. **Unsaturated fats** have double bonds, don't pack well (liquid)
5. **Phospholipids** form cell membranes (bilayer structure)
6. **Steroids** have ring structure, various functions
`,
    },
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: lipidsTopic.id,
        front: 'What makes lipids hydrophobic?',
        back: 'Lipids are mostly nonpolar molecules composed of C and H atoms. They don\'t have charges or polarity to interact with water molecules.',
      },
      {
        topicId: lipidsTopic.id,
        front: 'What is the structure of a triglyceride?',
        back: '1 glycerol molecule + 3 fatty acid chains, linked by ester bonds formed through dehydration synthesis.',
      },
      {
        topicId: lipidsTopic.id,
        front: 'Saturated vs. unsaturated fatty acids?',
        back: 'Saturated: no C=C double bonds, straight chains, solid at room temp. Unsaturated: one or more C=C bonds, kinks in chain, liquid at room temp.',
      },
      {
        topicId: lipidsTopic.id,
        front: 'Why do unsaturated fats remain liquid?',
        back: 'Double bonds create kinks in fatty acid chains, preventing tight packing. This makes them liquid (oils) at room temperature.',
      },
      {
        topicId: lipidsTopic.id,
        front: 'What is the structure of a phospholipid?',
        back: 'Glycerol + 2 fatty acids + phosphate group. Amphipathic: hydrophilic phosphate head and hydrophobic fatty acid tails.',
      },
      {
        topicId: lipidsTopic.id,
        front: 'How do phospholipids form cell membranes?',
        back: 'Form bilayers with hydrophilic heads facing aqueous environments (outside/inside cell) and hydrophobic tails facing each other in the middle.',
      },
      {
        topicId: lipidsTopic.id,
        front: 'What is the basic structure of steroids?',
        back: 'Four fused carbon rings with various functional groups attached. Examples: cholesterol, sex hormones, cortisol.',
      },
    ],
  })

  console.log('✓ Created topic: Lipids')

  // Topic 4: Proteins
  const proteinsTopic = await prisma.topic.upsert({
    where: { slug: 'proteins' },
    update: {},
    create: {
      slug: 'proteins',
      title: 'Proteins',
      description: 'Amino acids, protein structure, and functions of proteins',
      order: 4,
      categoryId: chemLifeCategory.id,
      isPremium: false,
      textContent: `
# 🧬 Proteins

## Overview

**Proteins** are polymers of **amino acids** with diverse functions.

**Functions:**
1. **Enzymes** (catalyze reactions)
2. **Structure** (collagen, keratin)
3. **Transport** (hemoglobin)
4. **Defense** (antibodies)
5. **Movement** (actin, myosin)
6. **Signaling** (hormones like insulin)
7. **Storage** (egg albumin)

## Amino Acids

**Structure:**
- Central carbon (α-carbon)
- Amino group (-NH₂)
- Carboxyl group (-COOH)
- Hydrogen atom
- **R group (side chain)** - determines properties

**20 different amino acids** with different R groups:
- Nonpolar/hydrophobic
- Polar/hydrophilic
- Acidic (negatively charged)
- Basic (positively charged)

## Protein Structure Levels

### Primary Structure (1°)
- **Sequence of amino acids**
- Linked by **peptide bonds**
- Formed by dehydration synthesis
- Determines all higher structure

### Secondary Structure (2°)
Regular folding patterns due to hydrogen bonding:
- **α-helix:** coiled spring shape
- **β-pleated sheet:** accordion-like folds

### Tertiary Structure (3°)
- **3D shape** of entire polypeptide
- Interactions between R groups:
  - Hydrogen bonds
  - Ionic bonds  
  - Hydrophobic interactions
  - Disulfide bridges (covalent S-S bonds)

### Quaternary Structure (4°)
- Multiple polypeptide subunits
- Example: hemoglobin (4 subunits)

## Protein Folding

**Denaturation:**
- Loss of protein structure and function
- Caused by:
  - High temperature
  - pH changes
  - Chemical denaturants
- Usually irreversible

**Chaperone proteins:**
- Help proteins fold correctly
- Prevent misfolding

## Key Concepts

1. **Amino acids** are monomers; **proteins** are polymers
2. **Peptide bonds** link amino acids (dehydration synthesis)
3. **R groups** determine amino acid properties
4. **Primary structure** (sequence) determines final 3D shape
5. **Function depends on shape** ("structure determines function")
6. **Denaturation** destroys protein function
`,
    },
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: proteinsTopic.id,
        front: 'What is the basic structure of an amino acid?',
        back: 'Central α-carbon bonded to: amino group (-NH₂), carboxyl group (-COOH), hydrogen, and an R group (side chain that varies).',
      },
      {
        topicId: proteinsTopic.id,
        front: 'What is a peptide bond?',
        back: 'A covalent bond between the carboxyl group of one amino acid and the amino group of another, formed by dehydration synthesis.',
      },
      {
        topicId: proteinsTopic.id,
        front: 'What are the four levels of protein structure?',
        back: 'Primary (amino acid sequence), Secondary (α-helix/β-sheet), Tertiary (3D shape), Quaternary (multiple subunits).',
      },
      {
        topicId: proteinsTopic.id,
        front: 'What determines a protein\'s final 3D structure?',
        back: 'Primary structure (amino acid sequence) determines how the protein will fold. This folding is driven by interactions between R groups.',
      },
      {
        topicId: proteinsTopic.id,
        front: 'What interactions stabilize tertiary structure?',
        back: 'Hydrogen bonds, ionic bonds, hydrophobic interactions, and disulfide bridges (covalent S-S bonds between cysteine residues).',
      },
      {
        topicId: proteinsTopic.id,
        front: 'What is protein denaturation?',
        back: 'Loss of protein structure and function due to breaking of bonds maintaining shape. Caused by heat, pH changes, or chemical denaturants. Usually irreversible.',
      },
      {
        topicId: proteinsTopic.id,
        front: 'Name 4 major functions of proteins.',
        back: 'Enzymes (catalysis), structure (collagen), transport (hemoglobin), defense (antibodies), movement (actin/myosin), signaling (insulin).',
      },
    ],
  })

  console.log('✓ Created topic: Proteins')

  // Topic 5: Nucleic Acids
  const nucleicTopic = await prisma.topic.upsert({
    where: { slug: 'nucleic-acids' },
    update: {},
    create: {
      slug: 'nucleic-acids',
      title: 'Nucleic Acids',
      description: 'DNA and RNA structure, nucleotides, and genetic information',
      order: 5,
      categoryId: chemLifeCategory.id,
      isPremium: false,
      textContent: `
# 🧬 Nucleic Acids

## Overview

**Nucleic acids** store and transmit genetic information.

**Two types:**
1. **DNA** (deoxyribonucleic acid) - stores genetic info
2. **RNA** (ribonucleic acid) - transfers genetic info, protein synthesis

## Nucleotide Structure

**Three components:**
1. **Pentose sugar** (5-carbon)
   - Deoxyribose (DNA)
   - Ribose (RNA - has extra OH group)
2. **Phosphate group** (PO₄³⁻)
3. **Nitrogenous base**

## Nitrogenous Bases

**Purines (double ring):**
- **Adenine (A)** - DNA & RNA
- **Guanine (G)** - DNA & RNA

**Pyrimidines (single ring):**
- **Cytosine (C)** - DNA & RNA
- **Thymine (T)** - DNA only
- **Uracil (U)** - RNA only (replaces thymine)

## DNA Structure

**Double helix:**
- Two antiparallel polynucleotide strands
- Sugar-phosphate backbone (outside)
- Bases paired in middle
- **Complementary base pairing:**
  - A pairs with T (2 hydrogen bonds)
  - G pairs with C (3 hydrogen bonds)

**Chargaff's Rules:**
- Amount of A = amount of T
- Amount of G = amount of C

**Directionality:**
- 5' end (phosphate group)
- 3' end (OH group on sugar)
- Strands run antiparallel (5'→3' and 3'→5')

## RNA Structure

**Single-stranded** (can fold on itself)

**Types of RNA:**
1. **mRNA** (messenger) - carries genetic code from DNA to ribosomes
2. **tRNA** (transfer) - brings amino acids to ribosomes
3. **rRNA** (ribosomal) - component of ribosomes

## DNA vs RNA

| Feature | DNA | RNA |
|---------|-----|-----|
| Sugar | Deoxyribose | Ribose |
| Bases | A, T, G, C | A, U, G, C |
| Strands | Double (helix) | Single |
| Location | Nucleus (eukaryotes) | Nucleus & cytoplasm |
| Function | Store genetic info | Transfer info, protein synthesis |
| Stability | Very stable | Less stable |

## Key Concepts

1. **Nucleotides** are monomers of nucleic acids
2. **DNA stores** genetic information; **RNA transfers** it
3. **Complementary base pairing:** A-T and G-C (DNA); A-U and G-C (RNA)
4. DNA is **double helix**; RNA is usually **single-stranded**
5. **Antiparallel strands** in DNA (one 5'→3', other 3'→5')
6. **Chargaff's rules:** amount of purines = amount of pyrimidines
`,
    },
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: nucleicTopic.id,
        front: 'What are the three components of a nucleotide?',
        back: '1) Pentose sugar (5-carbon), 2) Phosphate group, 3) Nitrogenous base.',
      },
      {
        topicId: nucleicTopic.id,
        front: 'What are the purines and pyrimidines?',
        back: 'Purines (double ring): Adenine (A) and Guanine (G). Pyrimidines (single ring): Cytosine (C), Thymine (T in DNA), Uracil (U in RNA).',
      },
      {
        topicId: nucleicTopic.id,
        front: 'What is complementary base pairing in DNA?',
        back: 'A pairs with T (2 hydrogen bonds), G pairs with C (3 hydrogen bonds). This allows the two strands to bond together.',
      },
      {
        topicId: nucleicTopic.id,
        front: 'What are Chargaff\'s rules?',
        back: 'In DNA, the amount of adenine equals thymine, and the amount of guanine equals cytosine. %A=%T and %G=%C.',
      },
      {
        topicId: nucleicTopic.id,
        front: 'Key differences between DNA and RNA?',
        back: 'DNA: deoxyribose sugar, thymine, double-stranded, stores info. RNA: ribose sugar, uracil, single-stranded, transfers info.',
      },
      {
        topicId: nucleicTopic.id,
        front: 'What does antiparallel mean in DNA?',
        back: 'The two DNA strands run in opposite directions. One runs 5\'→3\', the other runs 3\'→5\'. The ends are labeled by the carbon numbers on the sugar.',
      },
      {
        topicId: nucleicTopic.id,
        front: 'What are the three types of RNA and their functions?',
        back: 'mRNA (messenger): carries genetic code to ribosomes. tRNA (transfer): brings amino acids. rRNA (ribosomal): component of ribosomes.',
      },
    ],
  })

  console.log('✓ Created topic: Nucleic Acids')

  console.log('\n✅ Successfully seeded AP Biology - Unit 1: Chemistry of Life!')
  console.log('   Topics: 5')
  console.log('   Flashcards: 33')
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
