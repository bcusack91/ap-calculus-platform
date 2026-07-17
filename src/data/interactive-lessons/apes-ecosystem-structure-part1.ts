export const apesEcosystemStructurePart1Data = {
  topicSlug: 'apes-ecosystem-structure',
  sections: [
    {
      id: 'apesec1-intro',
      type: 'text' as const,
      content: `
# 🌿 Ecosystem Structure

**Part 1 of 7 — Energy Flow and Trophic Levels**

---

## Ecosystem Organization

| Level | Definition | Example |
|-------|-----------|---------|
| **Species** | Group of organisms that can interbreed | Gray wolf (Canis lupus) |
| **Population** | All individuals of one species in an area | All gray wolves in Yellowstone |
| **Community** | All populations of different species in an area | Wolves, elk, grasses, bacteria in Yellowstone |
| **Ecosystem** | Community + abiotic (non-living) factors | Yellowstone: organisms + water, soil, climate |
| **Biome** | Large region with similar climate and organisms | Temperate grassland, tropical rainforest |
| **Biosphere** | All ecosystems on Earth | The entire living planet |

---

## Energy Flow: Trophic Levels

| Trophic Level | Role | Example | Energy Available |
|--------------|------|---------|-----------------|
| **Producers (1st)** | Convert sunlight to chemical energy | Grasses, algae, phytoplankton | 100% of captured energy |
| **Primary consumers (2nd)** | Herbivores eating producers | Deer, rabbits, zooplankton | ~10% |
| **Secondary consumers (3rd)** | Carnivores eating herbivores | Foxes, frogs, small fish | ~1% |
| **Tertiary consumers (4th)** | Top predators | Eagles, sharks, wolves | ~0.1% |
| **Decomposers** | Break down dead organic matter | Bacteria, fungi, detritivores | Process all levels |

> 🔑 **10% Rule:** Only about 10% of energy is transferred from one trophic level to the next. The rest is lost as heat through cellular respiration.
      `
    },
    {
      id: 'apesec1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If producers in an ecosystem capture 10,000 kcal of energy, approximately how much energy is available to secondary consumers?',
            options: [
              '10,000 kcal',
              '1,000 kcal',
              '100 kcal',
              '10 kcal'
            ],
            correctAnswer: 2,
            explanation: 'Using the 10% rule: Producers (10,000) → Primary consumers (1,000) → Secondary consumers (100 kcal). Each level retains only ~10% of the energy from the level below.'
          },
          {
            question: 'Which level of ecological organization includes both biotic and abiotic components?',
            options: [
              'Population',
              'Community',
              'Ecosystem',
              'Species'
            ],
            correctAnswer: 2,
            explanation: 'An ecosystem includes both biotic (living organisms = the community) and abiotic (non-living: water, soil, temperature, sunlight) components interacting together.'
          }
        ]
      }
    },
    {
      id: 'apesec1-content',
      type: 'text' as const,
      content: `
## Productivity

| Measure | Definition | Formula |
|---------|-----------|---------|
| **Gross Primary Productivity (GPP)** | Total energy captured by producers through photosynthesis | Total photosynthesis output |
| **Net Primary Productivity (NPP)** | Energy available to consumers after plant respiration | NPP = GPP - Respiration |

### NPP by Biome

| Biome | Relative NPP | Why? |
|-------|-------------|------|
| **Tropical rainforest** | Highest | Warm, wet, year-round growing season |
| **Estuaries/wetlands** | Very high | Nutrient-rich, mixing of fresh and saltwater |
| **Temperate forest** | Moderate | Seasonal changes limit growing season |
| **Open ocean** | Low per area (but huge total due to size) | Nutrient-poor surface waters |
| **Desert/tundra** | Lowest | Water or temperature limits growth |

## Food Webs vs. Food Chains

- **Food chain**: Simple, linear pathway (grass → rabbit → fox → eagle)
- **Food web**: Complex, interconnected network of food chains
- Food webs are more realistic and show ecosystem resilience — if one species declines, predators have alternative prey
      `
    },
    {
      id: 'apesec1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The percentage of energy transferred between trophic levels is approximately _______%.

2) NPP equals GPP minus _______.

3) The biome with the highest net primary productivity is the tropical _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', 'respiration', 'rainforest'],
        hint1: 'The "ten percent rule."',
        hint2: 'Plants use energy for their own life processes.',
        hint3: 'Warm, wet, and year-round growing season.',
        explanation: '10% rule = ~10% energy transfer. NPP = GPP - Respiration. Tropical rainforests have the highest NPP due to ideal growing conditions.'
      }
    },
    {
      id: 'apesec1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Organism** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Phytoplankton converting sunlight to chemical energy in the ocean are ___',
            options: ['Producers (autotrophs)', 'Primary consumers', 'Decomposers', 'Secondary consumers']
          },
          {
            label: 'Fungi breaking down a fallen log and recycling nutrients are ___',
            options: ['Decomposers', 'Producers', 'Primary consumers', 'Tertiary consumers']
          },
          {
            label: 'A hawk eating a snake that ate a mouse that ate seeds represents a ___',
            options: ['Tertiary consumer (4th trophic level)', 'Secondary consumer', 'Primary consumer', 'Producer']
          }
        ],
        correctAnswers: ['Producers (autotrophs)', 'Decomposers', 'Tertiary consumer (4th trophic level)'],
        hint1: 'They make their own food from sunlight.',
        hint2: 'They break down dead matter.',
        hint3: 'Count the levels: seeds → mouse → snake → hawk.',
        explanation: 'Phytoplankton = producers. Fungi on logs = decomposers. Hawk (4th level) = tertiary consumer.'
      }
    },
    {
      id: 'apesec1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Ecosystem Structure

- **10% rule calculations** are commonly tested — practice converting energy between levels
- Know the difference between GPP and NPP — NPP is what matters for consumers
- **Biomass pyramids** can be inverted in aquatic systems (small but rapidly reproducing phytoplankton support larger zooplankton biomass)
- **Keystone species** have disproportionate impact relative to their abundance (sea otters, wolves)
- Know that energy flows ONE WAY (sun → producers → consumers → heat) but nutrients CYCLE
      `
    },
    {
      id: 'apesec1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An ecosystem has producers with a GPP of 5,000 $kcal/m^{2}/yr$ and plant respiration of 3,000 $kcal/m^{2}/yr$. The NPP is:',
            options: [
              '8,000 $kcal/m^{2}/yr$',
              '5,000 $kcal/m^{2}/yr$',
              '2,000 $kcal/m^{2}/yr$',
              '500 $kcal/m^{2}/yr$'
            ],
            correctAnswer: 2,
            explanation: 'NPP = GPP - Respiration = 5,000 - 3,000 = 2,000 $kcal/m^{2}/yr$. This is the energy actually available to herbivores and the rest of the food web.'
          },
          {
            question: 'Why does eating lower on the food chain (e.g., grain instead of beef) require less land and energy?',
            options: [
              'Grain has more calories per gram than beef',
              'The 10% rule means feeding grain to cattle wastes ~90% of the energy at each transfer',
              'Cattle do not eat grain, only grass',
              'Lower trophic levels have fewer species'
            ],
            correctAnswer: 1,
            explanation: 'Due to the 10% rule, ~90% of energy is lost at each trophic level. Eating grain directly (1st trophic transfer) is far more efficient than feeding grain to cattle and then eating beef (2 transfers).'
          }
        ]
      }
    }
  ]
};
