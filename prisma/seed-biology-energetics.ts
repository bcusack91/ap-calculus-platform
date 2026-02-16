import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Biology - Unit 3: Cellular Energetics...')

  const bioCourse = await prisma.course.findUnique({
    where: { slug: 'ap-biology' },
  })

  if (!bioCourse) {
    throw new Error('AP Biology course not found')
  }

  const energyCategory = await prisma.category.upsert({
    where: { slug: 'biology-cellular-energetics' },
    update: {},
    create: {
      slug: 'biology-cellular-energetics',
      name: 'Cellular Energetics',
      description: 'Enzymes, cellular respiration, and photosynthesis',
      order: 3,
      courseId: bioCourse.id,
    },
  })

  console.log('✓ Created category: Cellular Energetics')

  // Topic 1: Enzymes and Metabolism
  const enzymesTopic = await prisma.topic.upsert({
    where: { slug: 'enzymes-metabolism' },
    update: {},
    create: {
      slug: 'enzymes-metabolism',
      title: 'Enzymes and Metabolism',
      description: 'Enzyme structure, function, and regulation of metabolic pathways',
      order: 1,
      categoryId: energyCategory.id,
      isPremium: false,
      textContent: `
# ⚡ Enzymes and Metabolism

## Energy and Metabolism

**Thermodynamics in Biology:**
- **Free energy (ΔG):** energy available to do work
- **Exergonic reactions:** ΔG < 0 (release energy, spontaneous)
- **Endergonic reactions:** ΔG > 0 (require energy input)

**ATP (Adenosine Triphosphate):**
- Universal energy currency
- Stores energy in phosphate bonds
- ATP → ADP + P releases ~30.5 kJ/mol

## Enzymes

**What are enzymes?**
- Biological catalysts (usually proteins)
- Speed up reactions without being consumed
- Lower activation energy (Ea)
- Do NOT change ΔG of reaction

**Structure:**
- **Active site:** region where substrate binds
- **Substrate:** reactant molecule
- Specific shape determines which substrates bind

**Mechanism:**
1. **Induced fit model:**
   - Enzyme changes shape when substrate binds
   - Active site molds around substrate
   - Forms enzyme-substrate complex
   - Products released, enzyme returns to original shape

2. **Enzyme + Substrate ⇌ ES complex → Enzyme + Product**

## Factors Affecting Enzyme Activity

### 1. Temperature
- Optimal temperature maximizes activity
- Too low: slow molecular movement
- Too high: denaturation (lose shape)
- Most human enzymes optimal at 37°C

### 2. pH
- Each enzyme has optimal pH
- Extreme pH denatures enzyme
- Examples:
  - Pepsin (stomach): pH 2
  - Trypsin (intestine): pH 8

### 3. Substrate Concentration
- Low [S]: activity increases with more substrate
- High [S]: enzyme saturation (plateau)
- Maximum velocity (Vmax) reached

### 4. Enzyme Concentration
- More enzyme = more activity
- Linear relationship (if substrate abundant)

## Enzyme Regulation

### Competitive Inhibition
- Inhibitor competes with substrate for active site
- Similar shape to substrate
- Can be overcome by adding more substrate

### Noncompetitive Inhibition
- Inhibitor binds to allosteric site (not active site)
- Changes enzyme shape → active site altered
- Cannot be overcome by adding substrate

### Allosteric Regulation
- Regulatory molecule binds to allosteric site
- Can be activator or inhibitor
- Changes enzyme shape and activity

### Feedback Inhibition
- End product inhibits earlier enzyme in pathway
- Prevents overproduction
- Example: ATP inhibits glycolysis enzymes

### Cofactors and Coenzymes
- **Cofactors:** inorganic helpers (metal ions like Zn²⁺, Fe²⁺)
- **Coenzymes:** organic helpers (vitamins like NAD⁺, FAD)
- Required for enzyme function

## Key Concepts

1. **Enzymes lower activation energy** but don't change ΔG
2. **Active site** binds substrate with high specificity
3. **Induced fit:** enzyme changes shape upon binding
4. **Temperature and pH** affect enzyme shape and activity
5. **Competitive inhibitors** block active site
6. **Noncompetitive inhibitors** change enzyme shape
7. **Feedback inhibition** regulates metabolic pathways
`,
    },
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: enzymesTopic.id,
        front: 'What is the function of enzymes?',
        back: 'Biological catalysts that speed up reactions by lowering activation energy. They are not consumed in the reaction and do not change the ΔG.',
      },
      {
        topicId: enzymesTopic.id,
        front: 'What is the induced fit model?',
        back: 'Enzyme active site changes shape when substrate binds, molding around substrate to form enzyme-substrate complex. After reaction, products released and enzyme returns to original shape.',
      },
      {
        topicId: enzymesTopic.id,
        front: 'How does temperature affect enzyme activity?',
        back: 'Each enzyme has optimal temperature (usually 37°C for humans). Too low = slow activity. Too high = denaturation and loss of function.',
      },
      {
        topicId: enzymesTopic.id,
        front: 'Competitive vs. noncompetitive inhibition?',
        back: 'Competitive: inhibitor competes for active site, can be overcome with more substrate. Noncompetitive: inhibitor binds allosteric site, changes enzyme shape, cannot be overcome.',
      },
      {
        topicId: enzymesTopic.id,
        front: 'What is feedback inhibition?',
        back: 'End product of metabolic pathway inhibits an earlier enzyme in the pathway. Prevents overproduction and regulates metabolism.',
      },
      {
        topicId: enzymesTopic.id,
        front: 'Cofactors vs. coenzymes?',
        back: 'Cofactors: inorganic helpers (metal ions like Zn²⁺, Fe²⁺). Coenzymes: organic helpers derived from vitamins (NAD⁺, FAD). Both required for enzyme function.',
      },
    ],
  })

  console.log('✓ Created topic: Enzymes and Metabolism')

  // Topic 2: Cellular Respiration
  const respTopic = await prisma.topic.upsert({
    where: { slug: 'cellular-respiration' },
    update: {},
    create: {
      slug: 'cellular-respiration',
      title: 'Cellular Respiration',
      description: 'Glycolysis, Krebs cycle, and oxidative phosphorylation',
      order: 2,
      categoryId: energyCategory.id,
      isPremium: false,
      textContent: `
# 🔋 Cellular Respiration

## Overview

**Cellular respiration:** Process of breaking down glucose to produce ATP

**Overall equation:**
\`\`\`
C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ~32 ATP
\`\`\`

**Three main stages:**
1. Glycolysis (cytoplasm)
2. Krebs cycle (mitochondrial matrix)
3. Oxidative phosphorylation (inner membrane)

## Stage 1: Glycolysis

**Location:** Cytoplasm

**Process:**
- Glucose (6C) → 2 Pyruvate (3C each)
- Does NOT require oxygen (anaerobic)
- "Glucose splitting"

**Energy yield:**
- 2 ATP (net) - used 2, produced 4
- 2 NADH

**Steps:**
1. Energy investment phase (uses 2 ATP)
2. Energy payoff phase (makes 4 ATP, 2 NADH)

## Stage 2: Krebs Cycle (Citric Acid Cycle)

**Location:** Mitochondrial matrix

**Before Krebs:**
- Pyruvate → Acetyl CoA (by pyruvate dehydrogenase)
- Releases CO₂, makes NADH

**Process:**
- Acetyl CoA (2C) enters cycle
- Combines with oxaloacetate (4C) → citrate (6C)
- Series of redox reactions
- Regenerates oxaloacetate

**Energy yield (per glucose = 2 turns):**
- 2 ATP (or GTP)
- 6 NADH
- 2 FADH₂
- 4 CO₂ released

## Stage 3: Oxidative Phosphorylation

**Two parts:**

### Electron Transport Chain (ETC)

**Location:** Inner mitochondrial membrane (cristae)

**Process:**
- NADH and FADH₂ donate electrons
- Electrons pass through protein complexes
- Energy used to pump H⁺ into intermembrane space
- Creates electrochemical gradient (proton-motive force)

**Protein complexes:**
1. Complex I: NADH → Q
2. Complex II: FADH₂ → Q
3. Complex III: Q → Cytochrome c
4. Complex IV: Cytochrome c → O₂

**Final electron acceptor:** O₂ → H₂O

### Chemiosmosis

**Process:**
- H⁺ gradient created by ETC
- H⁺ flows back through **ATP synthase**
- Flow drives ATP synthesis
- ~3 ATP per NADH
- ~2 ATP per FADH₂

## Total ATP Yield

**From one glucose:**
- Glycolysis: 2 ATP + 2 NADH
- Pyruvate → Acetyl CoA: 2 NADH
- Krebs cycle: 2 ATP + 6 NADH + 2 FADH₂
- Oxidative phosphorylation: ~28 ATP

**Total: ~32 ATP** (varies by cell type)

## Anaerobic Respiration (Fermentation)

**When O₂ unavailable:**

**Lactic acid fermentation:**
- Pyruvate → Lactate
- Regenerates NAD⁺ for glycolysis
- Occurs in muscles during intense exercise

**Alcohol fermentation:**
- Pyruvate → Ethanol + CO₂
- Regenerates NAD⁺
- Used by yeast

**Energy yield:** Only 2 ATP (from glycolysis)

## Key Concepts

1. **Glycolysis:** glucose → 2 pyruvate (2 ATP, 2 NADH)
2. **Krebs cycle:** completes glucose oxidation (2 ATP, 8 NADH, 2 FADH₂)
3. **ETC:** electrons from NADH/FADH₂ pump H⁺
4. **Chemiosmosis:** H⁺ gradient drives ATP synthesis
5. **O₂ is final electron acceptor** in aerobic respiration
6. **Fermentation:** anaerobic, regenerates NAD⁺, only 2 ATP
`,
    },
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: respTopic.id,
        front: 'What is the overall equation for cellular respiration?',
        back: 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ~32 ATP. Glucose and oxygen produce carbon dioxide, water, and energy.',
      },
      {
        topicId: respTopic.id,
        front: 'Where does glycolysis occur and what are its products?',
        back: 'Cytoplasm. Products: 2 pyruvate, 2 ATP (net), 2 NADH. Does not require oxygen (anaerobic).',
      },
      {
        topicId: respTopic.id,
        front: 'Where does the Krebs cycle occur and what are its products?',
        back: 'Mitochondrial matrix. Per glucose (2 cycles): 2 ATP, 6 NADH, 2 FADH₂, 4 CO₂ released.',
      },
      {
        topicId: respTopic.id,
        front: 'What is the function of the electron transport chain?',
        back: 'NADH and FADH₂ donate electrons. Energy from electron transfers pumps H⁺ into intermembrane space, creating gradient. O₂ is final electron acceptor.',
      },
      {
        topicId: respTopic.id,
        front: 'What is chemiosmosis?',
        back: 'H⁺ flows down gradient through ATP synthase, driving ATP synthesis. Couples ETC to ATP production. Produces ~28 ATP from NADH/FADH₂.',
      },
      {
        topicId: respTopic.id,
        front: 'What is fermentation and when does it occur?',
        back: 'Anaerobic process when O₂ unavailable. Regenerates NAD⁺ for glycolysis. Types: lactic acid (muscles) and alcohol (yeast). Only produces 2 ATP.',
      },
      {
        topicId: respTopic.id,
        front: 'What is the total ATP yield from cellular respiration?',
        back: '~32 ATP per glucose: 2 from glycolysis, 2 from Krebs, ~28 from oxidative phosphorylation.',
      },
    ],
  })

  console.log('✓ Created topic: Cellular Respiration')

  // Topic 3: Photosynthesis
  const photoTopic = await prisma.topic.upsert({
    where: { slug: 'photosynthesis' },
    update: {},
    create: {
      slug: 'photosynthesis',
      title: 'Photosynthesis',
      description: 'Light reactions and Calvin cycle in photosynthesis',
      order: 3,
      categoryId: energyCategory.id,
      isPremium: false,
      textContent: `
# ☀️ Photosynthesis

## Overview

**Photosynthesis:** Process converting light energy into chemical energy

**Overall equation:**
\`\`\`
6CO₂ + 6H₂O + Light → C₆H₁₂O₆ + 6O₂
\`\`\`

**Location:** Chloroplasts
- **Thylakoids:** light reactions
- **Stroma:** Calvin cycle

**Two main stages:**
1. Light-dependent reactions (thylakoids)
2. Light-independent reactions/Calvin cycle (stroma)

## Light-Dependent Reactions

**Location:** Thylakoid membrane

**Key components:**
- **Photosystem II (PSII)**
- **Photosystem I (PSI)**
- **Electron transport chain**
- **ATP synthase**

**Process:**

1. **PSII:**
   - Light excites electrons in chlorophyll
   - Water splitting: 2H₂O → 4H⁺ + O₂ + 4e⁻
   - **O₂ released** as byproduct
   - Electrons replace those lost from chlorophyll

2. **ETC between PSII and PSI:**
   - Electrons move through chain
   - Energy pumps H⁺ into thylakoid space
   - Creates gradient

3. **PSI:**
   - Light re-excites electrons
   - Electrons transferred to NADP⁺
   - Forms NADPH

4. **Chemiosmosis:**
   - H⁺ flows through ATP synthase
   - Produces ATP (photophosphorylation)

**Products:**
- ATP (energy)
- NADPH (reducing power)
- O₂ (byproduct from water)

## Light-Independent Reactions (Calvin Cycle)

**Location:** Stroma

**Three phases:**

### 1. Carbon Fixation
- CO₂ combines with RuBP (5C)
- Catalyzed by **RuBisCO** enzyme
- Forms 2 molecules of 3-PGA (3C each)

### 2. Reduction
- 3-PGA reduced to G3P (glyceraldehyde-3-phosphate)
- Uses ATP and NADPH from light reactions
- Some G3P exits to make glucose

### 3. Regeneration
- Remaining G3P regenerates RuBP
- Uses ATP
- Cycle continues

**For one G3P (½ glucose):**
- 3 CO₂ fixed
- 9 ATP used
- 6 NADPH used

**For one glucose:**
- 6 CO₂
- 18 ATP
- 12 NADPH

## C4 and CAM Plants

**Problem:** Hot, dry conditions cause stomata to close
- Less CO₂ available
- O₂ builds up
- **Photorespiration:** RuBisCO uses O₂ instead of CO₂ (wasteful)

### C4 Plants
- Separate CO₂ fixation from Calvin cycle
- **Mesophyll cells:** fix CO₂ → 4C compound
- **Bundle sheath cells:** Calvin cycle occurs
- Concentrates CO₂ around RuBisCO
- Examples: corn, sugarcane

### CAM Plants
- **Temporal separation**
- Night: open stomata, fix CO₂ → 4C compound
- Day: close stomata, use stored CO₂ for Calvin cycle
- Conserves water
- Examples: cacti, pineapple

## Key Concepts

1. **Light reactions:** convert light → ATP and NADPH
2. **Water is split:** source of O₂
3. **Chemiosmosis:** H⁺ gradient drives ATP synthesis
4. **Calvin cycle:** uses ATP/NADPH to fix CO₂ → glucose
5. **RuBisCO:** enzyme that fixes CO₂
6. **C4 and CAM:** adaptations to reduce photorespiration
7. **Photosynthesis is reverse of cellular respiration**
`,
    },
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: photoTopic.id,
        front: 'What is the overall equation for photosynthesis?',
        back: '6CO₂ + 6H₂O + Light → C₆H₁₂O₆ + 6O₂. Carbon dioxide and water produce glucose and oxygen using light energy.',
      },
      {
        topicId: photoTopic.id,
        front: 'Where do light-dependent reactions occur?',
        back: 'Thylakoid membrane of chloroplasts. Products: ATP, NADPH, O₂ (from water splitting).',
      },
      {
        topicId: photoTopic.id,
        front: 'What is the role of Photosystem II?',
        back: 'Light excites electrons in chlorophyll. Water is split (2H₂O → O₂ + 4H⁺ + 4e⁻) to replace lost electrons. O₂ is released.',
      },
      {
        topicId: photoTopic.id,
        front: 'Where does the Calvin cycle occur and what does it produce?',
        back: 'Stroma of chloroplasts. Uses ATP and NADPH from light reactions to fix CO₂ into glucose (G3P → glucose).',
      },
      {
        topicId: photoTopic.id,
        front: 'What are the three phases of the Calvin cycle?',
        back: '1) Carbon fixation: CO₂ + RuBP → 3-PGA. 2) Reduction: 3-PGA → G3P using ATP/NADPH. 3) Regeneration: G3P → RuBP using ATP.',
      },
      {
        topicId: photoTopic.id,
        front: 'What is RuBisCO and what does it do?',
        back: 'Enzyme that catalyzes carbon fixation in Calvin cycle. Combines CO₂ with RuBP. Most abundant protein on Earth.',
      },
      {
        topicId: photoTopic.id,
        front: 'How do C4 plants differ from C3 plants?',
        back: 'C4 plants spatially separate CO₂ fixation (mesophyll cells) from Calvin cycle (bundle sheath cells). Concentrates CO₂ to reduce photorespiration in hot/dry conditions.',
      },
      {
        topicId: photoTopic.id,
        front: 'How do CAM plants adapt to dry conditions?',
        back: 'Temporal separation: fix CO₂ at night (stomata open) → store as 4C compound. Use stored CO₂ for Calvin cycle during day (stomata closed). Conserves water.',
      },
    ],
  })

  console.log('✓ Created topic: Photosynthesis')

  console.log('\n✅ Successfully seeded AP Biology - Unit 3: Cellular Energetics!')
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
