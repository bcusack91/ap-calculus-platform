import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Biology - Unit 7: Evolution and Unit 8: Ecology...')

  const bioCourse = await prisma.course.findUnique({
    where: { slug: 'ap-biology' },
  })

  if (!bioCourse) {
    throw new Error('AP Biology course not found')
  }

  // UNIT 7: EVOLUTION
  const evolutionCategory = await prisma.category.upsert({
    where: { slug: 'biology-evolution' },
    update: {},
    create: {
      slug: 'biology-evolution',
      name: 'Evolution',
      description: 'Natural selection, population genetics, and evidence for evolution',
      order: 7,
      courseId: bioCourse.id,
    },
  })

  console.log('✓ Created category: Evolution')

  // Evolution Topic 1: Natural Selection
  const naturalSelTopic = await prisma.topic.upsert({
    where: { slug: 'natural-selection' },
    update: {},
    create: {
      slug: 'natural-selection',
      title: 'Natural Selection and Evolution',
      description: 'Mechanisms of evolution, natural selection, and adaptation',
      order: 1,
      categoryId: evolutionCategory.id,
      isPremium: false,
      textContent: `
# 🦎 Natural Selection and Evolution

## Evolution Defined

**Evolution:** Change in allele frequencies in a population over time

**Population:** Group of individuals of same species in same area that can interbreed

## Darwin's Theory of Natural Selection

**Key observations:**
1. **Overproduction:** More offspring than can survive
2. **Variation:** Individuals differ in traits
3. **Heredity:** Traits passed to offspring
4. **Competition:** Struggle for resources

**Result: Natural Selection**
- Individuals with advantageous traits survive and reproduce more
- Favorable alleles increase in frequency
- **"Survival of the fittest"** (reproductive success)

## Mechanisms of Evolution

### 1. Natural Selection
**Types:**

**Directional selection:**
- One extreme favored
- Mean shifts one direction
- Example: antibiotic resistance, peppered moths

**Stabilizing selection:**
- Intermediate favored
- Reduces variation
- Example: human birth weight

**Disruptive selection:**
- Both extremes favored
- Increases variation
- Example: beak sizes in African seedcrackers

**Sexual selection:**
- Traits increase mating success
- May reduce survival (e.g., peacock tail)
- Examples: bright colors, large antlers, mating displays

### 2. Genetic Drift
**Random changes** in allele frequencies
- More effect in **small populations**
- Not related to fitness

**Bottleneck effect:**
- Population drastically reduced
- Survivors' alleles determine future
- Reduces genetic diversity
- Example: Northern elephant seals

**Founder effect:**
- Small group colonizes new area
- Limited genetic variation
- Example: Amish populations

### 3. Gene Flow (Migration)
- Movement of alleles between populations
- **Increases** genetic variation
- Can introduce new alleles
- Reduces differences between populations

### 4. Mutation
- Ultimate source of new alleles
- Random changes in DNA
- Provides raw material for evolution
- Usually neutral or harmful, rarely beneficial

## Conditions for Hardy-Weinberg Equilibrium

**Hardy-Weinberg:** Population NOT evolving (allele frequencies constant)

**Five conditions:**
1. **No mutations**
2. **Random mating**
3. **No gene flow** (migration)
4. **Large population** (no genetic drift)
5. **No natural selection**

**If conditions met:** p² + 2pq + q² = 1 and p + q = 1
- p = frequency of dominant allele
- q = frequency of recessive allele
- p² = homozygous dominant
- 2pq = heterozygous
- q² = homozygous recessive

**Real populations:** Always evolving (conditions rarely met)

## Evidence for Evolution

### 1. Fossil Record
- Shows change over time
- Transitional forms
- Age determined by radiometric dating

### 2. Comparative Anatomy
**Homologous structures:**
- Same structure, different function
- Common ancestry
- Example: vertebrate forelimbs

**Vestigial structures:**
- Reduced, no longer functional
- Evidence of evolutionary past
- Example: human appendix, whale pelvis

**Analogous structures:**
- Different structure, same function
- **Convergent evolution** (not common ancestry)
- Example: bird and insect wings

### 3. Molecular Biology
- DNA and protein similarities
- More similar = more recent common ancestor
- Universal genetic code
- Cytochrome c comparisons

### 4. Biogeography
- Geographic distribution of species
- Islands have unique species
- Related to continental species
- Example: Darwin's finches (Galápagos)

### 5. Direct Observation
- Bacterial resistance
- Pesticide resistance in insects
- Changes in populations over time

## Speciation

**Speciation:** Formation of new species

**Species:** Group that can interbreed and produce fertile offspring

**Reproductive isolation:**
- Prezygotic barriers (before fertilization)
- Postzygotic barriers (after fertilization)

**Allopatric speciation:**
- Geographic separation
- Most common type

**Sympatric speciation:**
- No geographic separation
- Polyploidy in plants

## Key Concepts

1. **Evolution** = change in allele frequencies over time
2. **Natural selection** favors advantageous traits
3. **Three types:** directional, stabilizing, disruptive
4. **Genetic drift** = random changes (bottleneck, founder effect)
5. **Hardy-Weinberg** describes non-evolving population
6. **Evidence:** fossils, anatomy, molecular, biogeography, observation
7. **Speciation** creates new species through reproductive isolation
`,
    },
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: naturalSelTopic.id,
        front: 'What is evolution?',
        back: 'Change in allele frequencies in a population over time. Descent with modification from common ancestors.',
      },
      {
        topicId: naturalSelTopic.id,
        front: 'What are Darwin\'s key observations for natural selection?',
        back: '1) Overproduction of offspring, 2) Variation in traits, 3) Heredity (traits inherited), 4) Competition for resources. Result: differential survival and reproduction.',
      },
      {
        topicId: naturalSelTopic.id,
        front: 'Compare directional, stabilizing, and disruptive selection.',
        back: 'Directional: one extreme favored (mean shifts). Stabilizing: intermediate favored (reduces variation). Disruptive: both extremes favored (increases variation).',
      },
      {
        topicId: naturalSelTopic.id,
        front: 'What is genetic drift?',
        back: 'Random changes in allele frequencies, especially in small populations. Includes bottleneck effect (population crash) and founder effect (small group colonizes). Not based on fitness.',
      },
      {
        topicId: naturalSelTopic.id,
        front: 'What are the Hardy-Weinberg conditions?',
        back: '1) No mutations, 2) Random mating, 3) No gene flow, 4) Large population, 5) No natural selection. If met, population is NOT evolving (allele frequencies constant).',
      },
      {
        topicId: naturalSelTopic.id,
        front: 'What is the Hardy-Weinberg equation?',
        back: 'p² + 2pq + q² = 1 and p + q = 1. p = dominant allele frequency, q = recessive. p² = AA, 2pq = Aa, q² = aa.',
      },
      {
        topicId: naturalSelTopic.id,
        front: 'Homologous vs. analogous structures?',
        back: 'Homologous: same structure, different function, common ancestry (vertebrate forelimbs). Analogous: different structure, same function, convergent evolution (bird/insect wings).',
      },
      {
        topicId: naturalSelTopic.id,
        front: 'What are five types of evidence for evolution?',
        back: '1) Fossil record, 2) Comparative anatomy (homologous/vestigial structures), 3) Molecular biology (DNA/protein similarities), 4) Biogeography, 5) Direct observation (bacteria, insects).',
      },
    ],
  })

  console.log('✓ Created topic: Natural Selection and Evolution')

  // UNIT 8: ECOLOGY
  const ecologyCategory = await prisma.category.upsert({
    where: { slug: 'biology-ecology' },
    update: {},
    create: {
      slug: 'biology-ecology',
      name: 'Ecology',
      description: 'Population ecology, community interactions, ecosystems, and biodiversity',
      order: 8,
      courseId: bioCourse.id,
    },
  })

  console.log('✓ Created category: Ecology')

  // Ecology Topic 1: Population Ecology
  const popEcologyTopic = await prisma.topic.upsert({
    where: { slug: 'population-ecology' },
    update: {},
    create: {
      slug: 'population-ecology',
      title: 'Population Ecology',
      description: 'Population growth, carrying capacity, and population dynamics',
      order: 1,
      categoryId: ecologyCategory.id,
      isPremium: false,
      textContent: `
# 📈 Population Ecology

## Population Characteristics

**Population:** Group of individuals of same species in same area

**Density:** Number of individuals per unit area/volume

**Dispersion patterns:**
- **Clumped:** Groups (most common) - resources, social
- **Uniform:** Evenly spaced - territoriality, competition
- **Random:** No pattern - rare in nature

**Age structure:**
- Pre-reproductive
- Reproductive  
- Post-reproductive
- Predicts future growth

**Sex ratio:** Affects reproduction rate

## Population Growth Models

### Exponential Growth (J-curve)

**Occurs when:**
- Unlimited resources
- No competition
- Ideal conditions

**Equation:** dN/dt = r_max × N
- N = population size
- t = time
- r_max = maximum per capita growth rate

**Characteristics:**
- J-shaped curve
- Continuous acceleration
- Unsustainable long-term

**Examples:**
- Bacteria in fresh medium
- Invasive species (initially)
- Populations after disturbance

### Logistic Growth (S-curve)

**Occurs when:**
- Limited resources
- Carrying capacity exists

**Equation:** dN/dt = r_max × N × (K - N) / K
- K = carrying capacity (maximum sustainable population)

**Characteristics:**
- S-shaped curve
- Slows as approaches K
- Levels off at K

**Phases:**
1. **Lag:** Slow initial growth
2. **Exponential:** Rapid growth
3. **Deceleration:** Slowing growth
4. **Plateau:** Stable at K

## Carrying Capacity (K)

**Definition:** Maximum population size environment can sustain

**Determined by:**
- Food availability
- Water
- Space
- Shelter
- Waste accumulation

**Populations:**
- May fluctuate around K
- Can temporarily exceed K (overshoot)
- Resource depletion if exceed K

## Limiting Factors

### Density-Dependent Factors
**Effect increases with population density:**
- Competition (food, space, mates)
- Predation
- Disease/parasites
- Accumulation of wastes
- Stress/hormonal changes

### Density-Independent Factors
**Effect regardless of density:**
- Weather (temperature, precipitation)
- Natural disasters (fire, flood, earthquake)
- Seasonal cycles
- Human activities

## Reproductive Strategies

### r-Selected Species
**Maximize growth rate (r):**
- Many offspring
- Small body size
- Short lifespan
- Little parental care
- Fast maturation
- Opportunistic
- **Examples:** Insects, weeds, mice

### K-Selected Species
**Maximize carrying capacity (K):**
- Few offspring
- Large body size
- Long lifespan
- Extensive parental care
- Slow maturation
- Competitive in stable environments
- **Examples:** Elephants, whales, humans

## Survivorship Curves

**Type I:**
- High survival early/middle life
- Death mainly in old age
- K-selected species
- **Example:** Humans, elephants

**Type II:**
- Constant death rate
- Equal probability at any age
- **Example:** Birds, rodents

**Type III:**
- High death rate early
- Survivors live long
- r-selected species
- **Example:** Fish, invertebrates, plants

## Human Population Growth

**Historical pattern:**
- Exponential growth
- Industrial revolution accelerated growth
- Medical advances reduced death rates

**Current:**
- ~8 billion people
- Growth rate slowing but still increasing
- Approaching carrying capacity?

**Demographic transition:**
- Stage 1: High birth/death rates
- Stage 2: Death rate drops
- Stage 3: Birth rate drops
- Stage 4: Low birth/death rates (stable)

**Factors affecting:**
- Economic development
- Education (especially women)
- Access to contraception
- Cultural/religious factors

## Key Concepts

1. **Exponential growth:** J-curve, unlimited resources
2. **Logistic growth:** S-curve, limited by carrying capacity
3. **Carrying capacity (K):** Maximum sustainable population
4. **Density-dependent** factors increase with density
5. **r-selected:** many offspring, little care, opportunistic
6. **K-selected:** few offspring, much care, competitive
7. **Survivorship curves:** Type I (humans), II (constant), III (high early death)
`,
    },
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: popEcologyTopic.id,
        front: 'What is the difference between exponential and logistic growth?',
        back: 'Exponential (J-curve): unlimited resources, continuous acceleration. Logistic (S-curve): limited resources, levels off at carrying capacity (K).',
      },
      {
        topicId: popEcologyTopic.id,
        front: 'What is carrying capacity?',
        back: 'Maximum population size that an environment can sustain indefinitely. Determined by resources like food, water, space, and shelter.',
      },
      {
        topicId: popEcologyTopic.id,
        front: 'Density-dependent vs. density-independent factors?',
        back: 'Density-dependent: effect increases with population density (competition, predation, disease). Density-independent: effect regardless of density (weather, disasters).',
      },
      {
        topicId: popEcologyTopic.id,
        front: 'Compare r-selected and K-selected species.',
        back: 'r-selected: many offspring, small, short life, little care, opportunistic (insects, weeds). K-selected: few offspring, large, long life, much care, competitive (elephants, humans).',
      },
      {
        topicId: popEcologyTopic.id,
        front: 'Describe the three types of survivorship curves.',
        back: 'Type I: high survival early, death in old age (humans). Type II: constant death rate (birds). Type III: high early death, survivors live long (fish, plants).',
      },
    ],
  })

  console.log('✓ Created topic: Population Ecology')

  // Ecology Topic 2: Community Ecology
  const communityTopic = await prisma.topic.upsert({
    where: { slug: 'community-ecology' },
    update: {},
    create: {
      slug: 'community-ecology',
      title: 'Community Ecology and Interactions',
      description: 'Species interactions, ecological niches, and community structure',
      order: 2,
      categoryId: ecologyCategory.id,
      isPremium: false,
      textContent: `
# 🌳 Community Ecology and Interactions

## Community

**Community:** All populations of different species in an area

## Species Interactions

### 1. Competition (- / -)
**Both species harmed**

**Intraspecific:** Within same species
**Interspecific:** Between different species

**Competitive exclusion principle:**
- Two species can't occupy same niche
- One outcompetes the other
- One goes extinct or evolves

**Resource partitioning:**
- Species divide resources
- Reduces competition
- Allows coexistence
- Example: Warbler species feed at different tree heights

### 2. Predation (+ / -)
**Predator benefits, prey harmed**

**Predator adaptations:**
- Speed, strength, claws, teeth
- Camouflage (cryptic coloration)
- Acute senses

**Prey defenses:**
- **Camouflage:** blend with environment
- **Warning coloration (aposematic):** bright colors signal toxicity
- **Mimicry:**
  - Batesian: harmless mimics harmful
  - Müllerian: multiple harmful species look alike

### 3. Herbivory (+ / -)
**Herbivore benefits, plant harmed**

**Plant defenses:**
- Thorns, spines
- Chemical defenses (toxins, tannins)
- Tough leaves

### 4. Symbiosis
**Close long-term relationship**

**Mutualism (+ / +):**
- Both benefit
- Examples:
  - Pollinators and flowers
  - Nitrogen-fixing bacteria and legumes
  - Mycorrhizae (fungi + plant roots)
  - Lichens (fungus + algae/cyanobacteria)

**Commensalism (+ / 0):**
- One benefits, other unaffected
- Examples:
  - Barnacles on whales
  - Cattle egrets and cattle
  - Remoras on sharks

**Parasitism (+ / -):**
- Parasite benefits, host harmed
- Examples:
  - Tapeworms, ticks, fleas
  - Mistletoe (plant parasite)

## Ecological Niche

**Niche:** Total of organism's use of biotic and abiotic resources
- "Ecological role" or "profession"
- Includes: where it lives, what it eats, when it's active

**Fundamental niche:** Potential niche (no competition)
**Realized niche:** Actual niche (with competition)

## Community Structure

**Species richness:** Number of species
**Species diversity:** Richness + evenness (relative abundance)

**Dominant species:**
- Most abundant/biomass
- Greatest influence

**Keystone species:**
- Disproportionate effect relative to abundance
- Removal drastically changes community
- Examples: sea otters, wolves, beavers

## Succession

**Ecological succession:** Change in species composition over time

### Primary Succession
**Starts with no soil:**
- Bare rock (lava, glacier retreat)
- **Pioneer species:** lichens, mosses
- Slow soil formation
- Grasses → shrubs → trees
- Takes centuries

### Secondary Succession
**Starts with soil:**
- After disturbance (fire, farming, flood)
- Faster than primary
- Seeds/roots already present
- Grasses → shrubs → trees
- Takes decades

**Climax community:**
- Stable end point
- Mature forest (usually)
- High biodiversity

## Disturbance

**Intermediate disturbance hypothesis:**
- Moderate disturbance → highest diversity
- Too frequent → only early successional species
- Too rare → competitive exclusion

## Key Concepts

1. **Competition:** Resource partitioning allows coexistence
2. **Predation:** Predator-prey arms race (adaptations)
3. **Mutualism:** Both species benefit (+/+)
4. **Parasitism:** Parasite benefits, host harmed (+/-)
5. **Keystone species:** Disproportionate effect on community
6. **Primary succession:** No soil (bare rock → climax)
7. **Secondary succession:** Soil present (faster recovery)
`,
    },
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: communityTopic.id,
        front: 'What is the competitive exclusion principle?',
        back: 'Two species cannot occupy the same ecological niche. One will outcompete the other, leading to extinction or evolution. Resource partitioning allows coexistence.',
      },
      {
        topicId: communityTopic.id,
        front: 'What is resource partitioning?',
        back: 'Species divide resources to reduce competition. Allows coexistence. Example: different warbler species feed at different heights in trees.',
      },
      {
        topicId: communityTopic.id,
        front: 'Compare Batesian and Müllerian mimicry.',
        back: 'Batesian: harmless species mimics harmful one (viceroy butterfly mimics monarch). Müllerian: multiple harmful species resemble each other (share warning signal).',
      },
      {
        topicId: communityTopic.id,
        front: 'Compare mutualism, commensalism, and parasitism.',
        back: 'Mutualism (+/+): both benefit (pollinators/flowers). Commensalism (+/0): one benefits, other unaffected (barnacles on whales). Parasitism (+/-): parasite benefits, host harmed (tapeworms).',
      },
      {
        topicId: communityTopic.id,
        front: 'What is a keystone species?',
        back: 'Species with disproportionately large effect relative to its abundance. Removal drastically changes community structure. Examples: sea otters, wolves.',
      },
      {
        topicId: communityTopic.id,
        front: 'Primary vs. secondary succession?',
        back: 'Primary: starts with no soil (bare rock), very slow, pioneer species are lichens/mosses. Secondary: starts with soil (after disturbance), faster, seeds/roots present.',
      },
    ],
  })

  console.log('✓ Created topic: Community Ecology and Interactions')

  // Ecology Topic 3: Ecosystems and Energy Flow
  const ecosystemTopic = await prisma.topic.upsert({
    where: { slug: 'ecosystems-energy' },
    update: {},
    create: {
      slug: 'ecosystems-energy',
      title: 'Ecosystems and Energy Flow',
      description: 'Energy flow, food chains, food webs, and biogeochemical cycles',
      order: 3,
      categoryId: ecologyCategory.id,
      isPremium: false,
      textContent: `
# 🌍 Ecosystems and Energy Flow

## Ecosystem

**Ecosystem:** Community + abiotic environment
- Biotic (living): organisms
- Abiotic (non-living): sunlight, temperature, water, nutrients

## Trophic Levels

**Producers (Autotrophs):**
- Convert sunlight → chemical energy
- Photosynthesis (plants, algae, cyanobacteria)
- Chemosynthesis (some bacteria)
- **Base of food chain**

**Consumers (Heterotrophs):**
- **Primary consumers:** Herbivores (eat producers)
- **Secondary consumers:** Carnivores (eat herbivores)
- **Tertiary consumers:** Top carnivores
- **Omnivores:** Eat both plants and animals

**Decomposers (Detritivores):**
- Break down dead organic matter
- Bacteria, fungi
- Recycle nutrients
- Essential for nutrient cycling

## Energy Flow

**Direction:** One-way through ecosystem (enters as light, exits as heat)

**10% Rule:**
- Only ~10% of energy transferred to next level
- 90% lost as heat (metabolism, movement)
- Limits food chain length (~4-5 levels)

**Energy pyramid:**
- Producers (largest energy)
- Primary consumers
- Secondary consumers  
- Tertiary consumers (smallest energy)

**Biomass pyramid:**
- Usually same shape as energy pyramid
- Total mass of organisms at each level

## Food Chains and Webs

**Food chain:** Linear energy transfer (A → B → C)

**Food web:** Interconnected food chains
- More realistic
- Shows multiple feeding relationships
- More stable (redundancy)

## Biogeochemical Cycles

### Water Cycle
**Processes:**
- Evaporation: liquid → gas
- Transpiration: plants release water
- Condensation: gas → liquid (clouds)
- Precipitation: rain, snow
- Runoff: water flows to ocean

### Carbon Cycle
**Processes:**
- **Photosynthesis:** CO₂ → organic compounds
- **Cellular respiration:** organic → CO₂
- **Combustion:** burning releases CO₂
- **Decomposition:** releases CO₂
- **Fossilization:** long-term storage

**Human impact:**
- Burning fossil fuels
- Deforestation
- Increased atmospheric CO₂
- Climate change

### Nitrogen Cycle
**Nitrogen fixation:**
- N₂ (atmosphere) → NH₃ or NO₃⁻
- Bacteria in soil or root nodules
- Lightning

**Nitrification:**
- NH₃ → NO₂⁻ → NO₃⁻
- Bacteria convert

**Assimilation:**
- Plants absorb NO₃⁻
- Incorporate into proteins, DNA

**Ammonification:**
- Decomposers convert organic N → NH₃

**Denitrification:**
- Bacteria convert NO₃⁻ → N₂
- Returns N to atmosphere

### Phosphorus Cycle
- No atmospheric component
- Weathering releases from rocks
- Plants absorb from soil
- Passed through food web
- Returns via decomposition
- Runoff to ocean (sediments)

**Human impact:**
- Fertilizers cause eutrophication
- Algal blooms
- Oxygen depletion

## Ecosystem Services

**Benefits from ecosystems:**
1. **Provisioning:** Food, water, timber, fiber
2. **Regulating:** Climate, water purification, pollination
3. **Supporting:** Nutrient cycling, soil formation
4. **Cultural:** Recreation, aesthetic, spiritual

## Key Concepts

1. **Energy flows** one-way through ecosystems (enters as light, exits as heat)
2. **10% rule:** Only ~10% energy transferred between trophic levels
3. **Producers** form base; **decomposers** recycle nutrients
4. **Food webs** show interconnected feeding relationships
5. **Carbon cycle:** photosynthesis removes CO₂, respiration releases
6. **Nitrogen cycle:** bacteria fix N₂, plants assimilate, denitrification returns
7. **Human activities** alter biogeochemical cycles (climate change, eutrophication)
`,
    },
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: ecosystemTopic.id,
        front: 'What is the 10% rule in ecosystems?',
        back: 'Only about 10% of energy is transferred from one trophic level to the next. 90% is lost as heat through metabolism and movement. This limits food chain length.',
      },
      {
        topicId: ecosystemTopic.id,
        front: 'What are the roles of producers, consumers, and decomposers?',
        back: 'Producers (autotrophs): convert light to chemical energy. Consumers (heterotrophs): eat other organisms. Decomposers: break down dead matter, recycle nutrients.',
      },
      {
        topicId: ecosystemTopic.id,
        front: 'How does carbon cycle through ecosystems?',
        back: 'Photosynthesis: CO₂ → organic compounds. Cellular respiration: organic → CO₂. Combustion and decomposition release CO₂. Fossilization stores carbon long-term.',
      },
      {
        topicId: ecosystemTopic.id,
        front: 'What is nitrogen fixation?',
        back: 'Conversion of atmospheric N₂ into usable forms (NH₃ or NO₃⁻). Done by nitrogen-fixing bacteria in soil or root nodules, and by lightning.',
      },
      {
        topicId: ecosystemTopic.id,
        front: 'What are the main steps of the nitrogen cycle?',
        back: '1) Fixation (N₂ → NH₃/NO₃⁻), 2) Nitrification (NH₃ → NO₃⁻), 3) Assimilation (plants absorb), 4) Ammonification (organic N → NH₃), 5) Denitrification (NO₃⁻ → N₂).',
      },
      {
        topicId: ecosystemTopic.id,
        front: 'How do human activities impact biogeochemical cycles?',
        back: 'Burning fossil fuels increases CO₂ (climate change). Deforestation reduces CO₂ absorption. Fertilizers cause nitrogen/phosphorus runoff (eutrophication, algal blooms, oxygen depletion).',
      },
    ],
  })

  console.log('✓ Created topic: Ecosystems and Energy Flow')

  console.log('\n✅ Successfully seeded AP Biology - Unit 7: Evolution and Unit 8: Ecology!')
  console.log('   Topics: 4')
  console.log('   Flashcards: 19')
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
