import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Biology - Unit 2: Cell Structure and Function...')

  const bioCourse = await prisma.course.findUnique({
    where: { slug: 'ap-biology' },
  })

  if (!bioCourse) {
    throw new Error('AP Biology course not found')
  }

  const cellCategory = await prisma.category.upsert({
    where: { slug: 'biology-cell-structure' },
    update: {},
    create: {
      slug: 'biology-cell-structure',
      name: 'Cell Structure and Function',
      description: 'Cell organelles, membranes, and cellular processes',
      order: 2,
      courseId: bioCourse.id,
    },
  })

  console.log('✓ Created category: Cell Structure and Function')

  // Topic 1: Prokaryotic vs Eukaryotic Cells
  const cellTypesTopic = await prisma.topic.upsert({
    where: { slug: 'prokaryotic-eukaryotic-cells' },
    update: {},
    create: {
      slug: 'prokaryotic-eukaryotic-cells',
      title: 'Prokaryotic vs. Eukaryotic Cells',
      description: 'Comparison of prokaryotic and eukaryotic cell structures',
      order: 1,
      categoryId: cellCategory.id,
      isPremium: false,
      textContent: `
# 🦠 Prokaryotic vs. Eukaryotic Cells

## Cell Theory

1. All living things are composed of cells
2. The cell is the basic unit of life
3. All cells come from preexisting cells

## Prokaryotic Cells

**Characteristics:**
- **No nucleus** - DNA in nucleoid region
- **No membrane-bound organelles**
- Smaller (1-10 μm)
- Examples: Bacteria, Archaea

**Structures:**
- **Nucleoid:** region containing circular DNA
- **Ribosomes:** protein synthesis (70S)
- **Cell wall:** peptidoglycan (bacteria)
- **Plasma membrane:** phospholipid bilayer
- **Capsule:** protective outer layer (some)
- **Flagella:** movement (some)
- **Pili:** attachment, DNA transfer (some)

## Eukaryotic Cells

**Characteristics:**
- **Nucleus** with nuclear envelope
- **Membrane-bound organelles**
- Larger (10-100 μm)
- Examples: Animals, plants, fungi, protists

**Structures:**
- **Nucleus:** contains DNA
- **Membrane-bound organelles:**
  - Mitochondria
  - Endoplasmic reticulum
  - Golgi apparatus
  - Lysosomes (animals)
  - Peroxisomes
- **Ribosomes:** 80S (larger than prokaryotic)
- **Cytoskeleton:** structural support, movement

## Plant vs. Animal Cells

**Unique to Plants:**
- **Cell wall:** cellulose
- **Chloroplasts:** photosynthesis
- **Central vacuole:** storage, turgor pressure
- **Plasmodesmata:** channels between cells

**Unique to Animals:**
- **Centrioles:** organize spindle fibers
- **Lysosomes:** digestion (rare in plants)

## Surface Area to Volume Ratio

**Importance:**
- Limits cell size
- Larger cells have lower SA:V ratio
- Less efficient diffusion as cells grow
- Cells divide to maintain high SA:V

**Calculation:**
For a cube with side length a:
- Surface area = 6a²
- Volume = a³
- Ratio = 6a²/a³ = 6/a

As a increases, ratio decreases!

## Key Concepts

1. **Prokaryotes** lack nucleus and organelles
2. **Eukaryotes** have nucleus and organelles
3. **Plant cells** have cell wall, chloroplasts, central vacuole
4. **Surface area to volume ratio** limits cell size
5. **All cells** have plasma membrane, ribosomes, DNA
`,
    },
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: cellTypesTopic.id,
        front: 'What are the three tenets of cell theory?',
        back: '1) All living things are composed of cells. 2) The cell is the basic unit of life. 3) All cells come from preexisting cells.',
      },
      {
        topicId: cellTypesTopic.id,
        front: 'Key differences: Prokaryotic vs. Eukaryotic cells?',
        back: 'Prokaryotes: no nucleus, no membrane-bound organelles, smaller (1-10 μm), 70S ribosomes. Eukaryotes: nucleus, membrane-bound organelles, larger (10-100 μm), 80S ribosomes.',
      },
      {
        topicId: cellTypesTopic.id,
        front: 'What structures are unique to plant cells?',
        back: 'Cell wall (cellulose), chloroplasts (photosynthesis), large central vacuole (storage/turgor), plasmodesmata (cell-cell channels).',
      },
      {
        topicId: cellTypesTopic.id,
        front: 'Why does surface area to volume ratio limit cell size?',
        back: 'As cells grow, volume increases faster than surface area. Lower SA:V ratio makes diffusion less efficient. Cells must divide to maintain high SA:V for adequate nutrient/waste exchange.',
      },
      {
        topicId: cellTypesTopic.id,
        front: 'Calculate SA:V ratio for cube with side = 2 cm',
        back: 'SA = 6(2²) = 24 cm². V = 2³ = 8 cm³. Ratio = 24/8 = 3:1 or 3 cm⁻¹.',
      },
    ],
  })

  console.log('✓ Created topic: Prokaryotic vs. Eukaryotic Cells')

  // Topic 2: Cell Organelles
  const organellesTopic = await prisma.topic.upsert({
    where: { slug: 'cell-organelles' },
    update: {},
    create: {
      slug: 'cell-organelles',
      title: 'Cell Organelles',
      description: 'Structure and function of eukaryotic cell organelles',
      order: 2,
      categoryId: cellCategory.id,
      isPremium: false,
      textContent: `
# 🏭 Cell Organelles

## Nucleus

**Structure:**
- Nuclear envelope (double membrane with pores)
- Nucleolus (ribosome assembly)
- Chromatin (DNA + proteins)

**Function:**
- Stores genetic information (DNA)
- Controls cell activities
- Site of transcription

## Endomembrane System

### Endoplasmic Reticulum (ER)

**Rough ER:**
- Studded with ribosomes
- Protein synthesis and modification
- Makes membrane proteins and secreted proteins

**Smooth ER:**
- No ribosomes
- Lipid synthesis
- Detoxification (liver)
- Calcium storage (muscle)

### Golgi Apparatus
- Stack of membrane sacs (cisternae)
- Modifies, sorts, packages proteins
- Adds tags (glycosylation)
- Ships proteins to destinations

### Lysosomes (Animals)
- Contain digestive enzymes
- Break down macromolecules
- Autophagy (digest old organelles)
- Apoptosis (programmed cell death)

### Vacuoles
**Plant central vacuole:**
- Storage (water, ions, pigments)
- Maintains turgor pressure
- Waste disposal

**Animal vacuoles:**
- Smaller, temporary
- Food vacuoles (phagocytosis)
- Contractile vacuoles (osmoregulation)

## Energy Organelles

### Mitochondria
**Structure:**
- Double membrane
- Outer membrane (smooth)
- Inner membrane (cristae - folded)
- Matrix (inner space)

**Function:**
- **Cellular respiration**
- ATP production
- Own DNA (maternal inheritance)
- Divide independently

### Chloroplasts (Plants)
**Structure:**
- Double membrane
- Thylakoids (stacked in grana)
- Stroma (fluid)

**Function:**
- **Photosynthesis**
- Convert light → chemical energy
- Own DNA
- Divide independently

## Cytoskeleton

**Three types of fibers:**

1. **Microfilaments (actin):**
   - Thinnest (7 nm)
   - Cell shape, movement
   - Muscle contraction
   - Cytoplasmic streaming

2. **Intermediate filaments:**
   - Medium (8-12 nm)
   - Structural support
   - Nuclear lamina
   - Keratin in hair/nails

3. **Microtubules:**
   - Thickest (25 nm)
   - Cell shape, organelle movement
   - Chromosome separation (spindle fibers)
   - Cilia and flagella structure

## Other Organelles

### Ribosomes
- Protein synthesis
- Free ribosomes → cytoplasmic proteins
- Bound ribosomes → secreted/membrane proteins
- NOT membrane-bound

### Peroxisomes
- Contain enzymes
- Break down fatty acids
- Detoxify harmful substances
- Produce hydrogen peroxide → water

### Centrioles (Animals)
- Pair of cylindrical structures
- Organize microtubules
- Form spindle apparatus in cell division

## Key Concepts

1. **Nucleus** stores DNA and controls cell
2. **Endomembrane system** makes, modifies, transports proteins
3. **Mitochondria** produce ATP (cellular respiration)
4. **Chloroplasts** capture light energy (photosynthesis)
5. **Cytoskeleton** provides structure and movement
6. **Organelles compartmentalize** cellular functions
`,
    },
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: organellesTopic.id,
        front: 'What is the function of the nucleus?',
        back: 'Stores genetic information (DNA), controls cell activities, site of transcription. Surrounded by nuclear envelope with pores.',
      },
      {
        topicId: organellesTopic.id,
        front: 'Rough ER vs. Smooth ER functions?',
        back: 'Rough ER: has ribosomes, synthesizes and modifies proteins (especially secreted/membrane proteins). Smooth ER: no ribosomes, synthesizes lipids, detoxification, calcium storage.',
      },
      {
        topicId: organellesTopic.id,
        front: 'What does the Golgi apparatus do?',
        back: 'Modifies, sorts, packages, and ships proteins. Adds molecular tags (glycosylation). Sends proteins to their final destinations.',
      },
      {
        topicId: organellesTopic.id,
        front: 'What is the function of lysosomes?',
        back: 'Contain digestive enzymes that break down macromolecules, old organelles (autophagy), and pathogens. Involved in apoptosis. Found mainly in animal cells.',
      },
      {
        topicId: organellesTopic.id,
        front: 'What is the structure and function of mitochondria?',
        back: 'Double membrane with cristae (folded inner membrane). Site of cellular respiration and ATP production. Have own DNA and divide independently.',
      },
      {
        topicId: organellesTopic.id,
        front: 'What is the structure and function of chloroplasts?',
        back: 'Double membrane with thylakoids (stacked in grana) and stroma. Site of photosynthesis - convert light to chemical energy. Have own DNA.',
      },
      {
        topicId: organellesTopic.id,
        front: 'What are the three types of cytoskeleton fibers?',
        back: '1) Microfilaments (actin, 7nm): movement, shape. 2) Intermediate filaments (8-12nm): structural support. 3) Microtubules (25nm): shape, transport, spindle fibers.',
      },
      {
        topicId: organellesTopic.id,
        front: 'What is the function of the plant central vacuole?',
        back: 'Storage of water, ions, and pigments. Maintains turgor pressure (keeps plant rigid). Waste disposal.',
      },
    ],
  })

  console.log('✓ Created topic: Cell Organelles')

  // Topic 3: Cell Membrane and Transport
  const membraneTopic = await prisma.topic.upsert({
    where: { slug: 'cell-membrane-transport' },
    update: {},
    create: {
      slug: 'cell-membrane-transport',
      title: 'Cell Membrane and Transport',
      description: 'Membrane structure and mechanisms of transport across membranes',
      order: 3,
      categoryId: cellCategory.id,
      isPremium: false,
      textContent: `
# 🧱 Cell Membrane and Transport

## Fluid Mosaic Model

**Structure:**
- **Phospholipid bilayer** forms foundation
- **Proteins** embedded or attached
- **Cholesterol** maintains fluidity
- **Carbohydrates** attached (glycoproteins, glycolipids)

**Properties:**
- **Fluid:** phospholipids and proteins can move laterally
- **Mosaic:** varied composition of proteins and lipids
- **Selectively permeable:** controls what enters/exits

**Components:**

1. **Phospholipids:**
   - Hydrophilic heads face water
   - Hydrophobic tails face each other
   - Form bilayer spontaneously

2. **Membrane proteins:**
   - **Integral proteins:** embedded in membrane (transmembrane)
   - **Peripheral proteins:** attached to surface

3. **Cholesterol:**
   - Maintains fluidity at different temperatures
   - Prevents tight packing at low temps
   - Restricts movement at high temps

4. **Carbohydrates:**
   - Attached to proteins (glycoproteins)
   - Attached to lipids (glycolipids)
   - Cell recognition, adhesion

## Transport Mechanisms

### Passive Transport (No ATP required)

**1. Simple Diffusion**
- Movement from high → low concentration
- Down concentration gradient
- Small, nonpolar molecules (O₂, CO₂)

**2. Facilitated Diffusion**
- Uses membrane proteins
- Down concentration gradient
- **Channel proteins:** form pores (ions)
- **Carrier proteins:** change shape (glucose)

**3. Osmosis**
- Diffusion of **water** across membrane
- Moves from high water → low water concentration
- From low solute → high solute concentration

**Water potential (Ψ):**
- Ψ = Ψₛ + Ψₚ
- Ψₛ = solute potential (negative)
- Ψₚ = pressure potential
- Water moves from high → low Ψ

**Tonicity:**
- **Hypertonic:** higher solute outside → cell shrinks (crenation/plasmolysis)
- **Hypotonic:** lower solute outside → cell swells (lysis/turgid)
- **Isotonic:** equal solute → no net movement

### Active Transport (Requires ATP)

**1. Primary Active Transport**
- Directly uses ATP
- Moves against concentration gradient
- Example: **Na⁺/K⁺ pump**
  - Pumps 3 Na⁺ out, 2 K⁺ in
  - Maintains concentration gradients

**2. Secondary Active Transport**
- Uses electrochemical gradient
- No direct ATP use
- **Cotransport:** use one gradient to move another
  - Symport: same direction
  - Antiport: opposite directions

**3. Bulk Transport**

**Endocytosis** (into cell):
- **Phagocytosis:** "cell eating" (solid particles)
- **Pinocytosis:** "cell drinking" (fluid)
- **Receptor-mediated:** specific molecules bind receptors

**Exocytosis** (out of cell):
- Vesicles fuse with membrane
- Release contents outside
- Secretion of proteins, hormones

## Key Concepts

1. **Fluid mosaic model:** phospholipid bilayer with proteins
2. **Selectively permeable:** controls what crosses
3. **Passive transport:** no energy, down gradient
4. **Active transport:** requires energy, against gradient
5. **Osmosis:** diffusion of water across membrane
6. **Water moves from high → low water potential**
7. **Bulk transport:** large molecules via vesicles
`,
    },
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: membraneTopic.id,
        front: 'What is the fluid mosaic model?',
        back: 'Model of cell membrane as phospholipid bilayer with embedded proteins. Fluid: components can move laterally. Mosaic: varied composition of lipids and proteins.',
      },
      {
        topicId: membraneTopic.id,
        front: 'What are the main components of the cell membrane?',
        back: 'Phospholipids (bilayer), proteins (integral/peripheral), cholesterol (fluidity), carbohydrates (glycoproteins/glycolipids for recognition).',
      },
      {
        topicId: membraneTopic.id,
        front: 'Simple diffusion vs. facilitated diffusion?',
        back: 'Simple: small nonpolar molecules cross directly down gradient. Facilitated: uses channel or carrier proteins for polar/large molecules, still down gradient.',
      },
      {
        topicId: membraneTopic.id,
        front: 'What is osmosis?',
        back: 'Diffusion of water across a selectively permeable membrane from high water concentration (low solute) to low water concentration (high solute).',
      },
      {
        topicId: membraneTopic.id,
        front: 'Define hypertonic, hypotonic, and isotonic.',
        back: 'Hypertonic: higher solute outside, cell shrinks. Hypotonic: lower solute outside, cell swells. Isotonic: equal solute, no net water movement.',
      },
      {
        topicId: membraneTopic.id,
        front: 'How does the Na⁺/K⁺ pump work?',
        back: 'Primary active transport: uses ATP to pump 3 Na⁺ out and 2 K⁺ in against their concentration gradients. Maintains electrochemical gradient.',
      },
      {
        topicId: membraneTopic.id,
        front: 'What are the types of endocytosis?',
        back: 'Phagocytosis (cell eating - solid particles), pinocytosis (cell drinking - fluid), receptor-mediated endocytosis (specific molecules).',
      },
      {
        topicId: membraneTopic.id,
        front: 'Water potential equation?',
        back: 'Ψ = Ψₛ + Ψₚ. Water moves from high to low water potential. Ψₛ = solute potential (negative), Ψₚ = pressure potential.',
      },
    ],
  })

  console.log('✓ Created topic: Cell Membrane and Transport')

  console.log('\n✅ Successfully seeded AP Biology - Unit 2: Cell Structure and Function!')
  console.log('   Topics: 3')
  console.log('   Flashcards: 21')
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
