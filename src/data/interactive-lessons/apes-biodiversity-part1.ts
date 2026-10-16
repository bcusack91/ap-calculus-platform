export const apesBiodiversityPart1Data = {
  topicSlug: 'apes-biodiversity',
  sections: [
    {
      id: 'apesbd1-intro',
      type: 'text' as const,
      content: `
# 🦜 Biodiversity

**Part 1 of 7 — Types, Importance, and Measurement**

---

## Three Types of Biodiversity

| Type | Definition | Example |
|------|-----------|---------|
| **Genetic diversity** | Variety of genes within a species | Diverse coat colors in wild cat populations |
| **Species diversity** | Number and variety of species in an area | 300 bird species in a tropical forest vs. 50 in a temperate forest |
| **Ecosystem diversity** | Variety of habitats, communities, and ecological processes | Coral reefs, wetlands, grasslands, and forests in one region |

---

## Why Biodiversity Matters

| Category | Ecosystem Service | Example |
|----------|------------------|---------|
| **Provisioning** | Food, medicine, raw materials | 25% of pharmaceuticals derived from plants |
| **Regulating** | Climate regulation, flood control, water purification, pollination | Forests store carbon; wetlands absorb floodwater and filter pollutants |
| **Supporting** | Nutrient cycling, soil formation, primary production | Decomposers recycle nutrients; forests produce oxygen |
| **Cultural** | Recreation, aesthetic, spiritual value | National parks, ecotourism revenue |

> ⚠️ **Classification note:** Pollination and water purification by wetlands are classed as **regulating** services in the Millennium Ecosystem Assessment, but some APES textbooks list them as **supporting**. On the exam, name the category AND explain the function the ecosystem performs, so your answer earns credit either way.

> 🔑 **Key Concept:** Higher biodiversity = greater ecosystem resilience. Diverse ecosystems can better withstand and recover from disturbances.

---

## Measuring Species Diversity

| Metric | What It Measures |
|--------|-----------------|
| **Species richness** | Total number of different species in an area |
| **Species evenness** | How equally individuals are distributed among species |
      `
    },
    {
      id: 'apesbd1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A forest with 20 tree species where each species makes up about 5% of the total has HIGH:',
            options: [
              'Richness but not evenness of species',
              'Species evenness but not richness',
              'Species richness and evenness',
              'Genetic diversity within each species'
            ],
            correctAnswer: 2,
            explanation: 'With 20 species (high richness) each making up ~5% of the population (high evenness), this forest has both components of high species diversity.'
          },
          {
            question: 'Wetlands filtering pollutants from water before it reaches rivers is an example of:',
            options: [
              'A provisioning ecosystem service',
              'A regulating ecosystem service',
              'A cultural ecosystem service',
              'A supporting ecosystem service'
            ],
            correctAnswer: 1,
            explanation: 'Water purification by wetlands is a regulating service — the ecosystem naturally regulates water quality by filtering sediment, nutrients, and pollutants. Provisioning services are products such as food and timber, cultural services are recreation and meaning, and supporting services are underlying processes such as nutrient cycling.'
          }
        ]
      }
    },
    {
      id: 'apesbd1-content',
      type: 'text' as const,
      content: `
## Hotspots and Global Patterns

### Biodiversity Hotspots
- Areas with **exceptionally high species richness** and **high rates of habitat loss**
- Must have at least **1,500 endemic plant species** and have lost **70%+ of original habitat**
- 36 identified hotspots cover just 2.4% of land but contain 50%+ of all plant species
- Examples: Madagascar, Atlantic Forest (Brazil), Sundaland (Southeast Asia)

### Latitude and Biodiversity
| Pattern | Explanation |
|---------|-----------|
| **Higher biodiversity near equator** | More sunlight, warmth, and rainfall year-round |
| **Lower biodiversity at poles** | Extreme cold, low light, short growing seasons |
| **Island biogeography** | Larger islands closer to mainland = more species |

### Island Biogeography Theory (MacArthur and Wilson)
- **Immigration rate** decreases with distance from mainland
- **Extinction rate** decreases with island size (larger island = more resources)
- Equilibrium species number: where immigration rate = extinction rate
      `
    },
    {
      id: 'apesbd1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The three types of biodiversity are genetic, species, and _______ diversity.

2) Biodiversity hotspots must have at least 1,500 endemic plant species and have lost at least _______% of original habitat.

3) According to island biogeography, larger islands have _______ extinction rates than small islands.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['ecosystem', '70', 'lower'],
        hint1: 'The variety of habitats and ecological processes.',
        hint2: 'More than two-thirds of the original habitat.',
        hint3: 'Larger islands have more resources to support species.',
        explanation: 'Three types: genetic, species, ecosystem diversity. Hotspots: lost 70%+ habitat. Larger islands = lower extinction rates (more resources and habitat).'
      }
    },
    {
      id: 'apesbd1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Service** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Forests absorbing $CO_{2}$ and moderating regional climate is a ___ ecosystem service',
            options: ['Regulating', 'Provisioning', 'Cultural', 'Supporting']
          },
          {
            label: 'Harvesting timber from a forest is a ___ ecosystem service',
            options: ['Provisioning', 'Regulating', 'Cultural', 'Supporting']
          },
          {
            label: 'A community with 100 individuals: 97 of Species A and 1 each of Species B, C, D has low ___',
            options: ['Species evenness', 'Species richness', 'Genetic diversity', 'Ecosystem diversity']
          }
        ],
        correctAnswers: ['Regulating', 'Provisioning', 'Species evenness'],
        hint1: 'The ecosystem is controlling a natural process (climate).',
        hint2: 'Direct provision of raw materials.',
        hint3: 'One species dominates while three are rare.',
        explanation: 'Climate regulation by forests = regulating. Timber = provisioning. 97% one species = very low evenness despite having 4 species.'
      }
    },
    {
      id: 'apesbd1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Biodiversity

- Species richness questions: count the different species; when richness is equal, the community whose individuals are spread more evenly is more diverse
- Know the four categories of ecosystem services — the AP exam frequently asks you to classify examples
- **Island biogeography** applies to habitat fragments too (a forest patch surrounded by farmland acts like an island)
- Biodiversity is highest at the equator and lowest at the poles — know WHY (climate stability, energy input)
      `
    },
    {
      id: 'apesbd1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A fragmented forest surrounded by agricultural fields functions ecologically similar to:',
            options: [
              'A continent, where vast connected habitat supports many species',
              'An island, where small isolated patches hold fewer species',
              'A biodiversity hotspot, rich in species found nowhere else',
              'A corridor that lets species move between large habitats'
            ],
            correctAnswer: 1,
            explanation: 'Island biogeography theory applies to habitat fragments: smaller, more isolated patches support fewer species, just as small, distant islands have lower species diversity.'
          },
          {
            question: 'If a single crop disease wiped out all the bananas in commercial plantations (which are genetically identical clones), this would illustrate the danger of low:',
            options: [
              'Diversity among ecosystems in the region',
              'Species richness across the plantations',
              'Diversity within one species',
              'Evenness of species across the farms'
            ],
            correctAnswer: 2,
            explanation: 'Clonal monocultures have virtually no genetic diversity, the variety of genes within one species. If one individual is susceptible to a disease, all are susceptible. Genetic diversity provides insurance against such threats.'
          }
        ]
      }
    }
  ]
};
