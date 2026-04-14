export const bioBiodiversityConservationPart1Data = {
  topicSlug: 'biodiversity-conservation',
  sections: [
    {
      id: 'bco1-intro',
      type: 'text' as const,
      content: `# Levels of Biodiversity

**Part 1 of 7 — Biodiversity & Conservation**

**Biodiversity** (biological diversity) encompasses the variety of life at every level of biological organization — from genes within a single population to the range of ecosystems across the biosphere. Conservation biologists recognize three hierarchical levels of biodiversity, each essential for the long-term health of the living world.

### Why Biodiversity Matters

- Ecosystems with greater biodiversity tend to be more **productive** and more **resilient** to disturbance.
- Biodiversity provides the raw material for **evolution** — without genetic variation, populations cannot adapt to changing environments.
- Humans depend on biodiversity for food, medicine, clean water, climate regulation, and countless other **ecosystem services**.

> "We are sawing off the branch on which we sit." — Paul Ehrlich
`
    },
    {
      id: 'bco1-genetic',
      type: 'text' as const,
      content: `## Genetic Diversity

**Genetic diversity** is the total variety of genes and alleles within a species or population.

### Key Points

- **Allelic variation** arises through mutation, sexual reproduction (crossing over, independent assortment), and gene flow between populations.
- Higher genetic diversity gives a population a greater chance of containing individuals that can survive environmental changes (disease, climate shifts, new predators).
- **Loss of genetic diversity** — through bottlenecks, founder effects, or inbreeding — makes a population more vulnerable to extinction.

### Examples

| Situation | Genetic Diversity |
|---|---|
| Cheetahs — severe historical bottleneck | Very low; nearly identical MHC genes → high disease susceptibility |
| Wild corn relatives (teosinte) in Mexico | High; valuable source of disease-resistance alleles for crop breeding |
| Florida panther — small isolated population | Low; inbreeding depression caused heart defects, corrected by introducing Texas cougars |

### AP Connection
Genetic diversity connects directly to **Hardy-Weinberg equilibrium** — deviations from equilibrium (genetic drift, gene flow, selection) alter allele frequencies and therefore genetic diversity.
`
    },
    {
      id: 'bco1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Genetic Diversity** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A wildlife manager introduces 8 Texas cougars into the Florida panther population. What level of biodiversity is this action primarily intended to increase?',
            options: [
              'Ecosystem diversity',
              'Species diversity',
              'Genetic diversity',
              'Landscape diversity'
            ],
            correctAnswer: 2,
            explanation: 'Introducing individuals from a different population increases genetic diversity by adding new alleles to the gene pool. The Florida panther population suffered from inbreeding depression due to low genetic diversity, so gene flow from Texas cougars was used to restore genetic variation.'
          },
          {
            question: 'Which of the following is the BEST explanation for why a population with low genetic diversity is at greater risk of extinction?',
            options: [
              'Low genetic diversity increases the rate of beneficial mutations',
              'Fewer alleles means fewer individuals can reproduce',
              'The population may lack alleles that confer resistance to new diseases or environmental changes',
              'Low genetic diversity always leads to smaller population sizes'
            ],
            correctAnswer: 2,
            explanation: 'When genetic diversity is low, the population may lack alleles that provide resistance to novel pathogens, environmental stressors, or other selective pressures. Without the raw material for natural selection to act upon, the population cannot adapt and faces higher extinction risk.'
          }
        ]
      }
    },
    {
      id: 'bco1-species-eco',
      type: 'text' as const,
      content: `## Species Diversity & Ecosystem Diversity

### Species Diversity
**Species diversity** combines two components:

1. **Species richness** — the total number of different species in an area.
2. **Relative abundance (evenness)** — how evenly individuals are distributed among species.

A community with 10 species, each represented by 100 individuals, has higher species diversity than a community with 10 species where one species has 910 individuals and the other 9 have 10 each.

### Ecosystem Diversity
**Ecosystem diversity** refers to the variety of ecosystems (habitats, communities, ecological processes) within a region.

- A landscape containing forest, wetland, grassland, and stream ecosystems has greater ecosystem diversity than one with only forest.
- Ecosystem diversity supports species diversity because different species are adapted to different habitats.
- Loss of an entire ecosystem type (e.g., draining a wetland) can eliminate many specialist species simultaneously.

### Biodiversity Hotspots

Ecologist Norman Myers identified **biodiversity hotspots** — regions that are both:
1. Exceptionally rich in **endemic species** (species found nowhere else).
2. Under severe **threat** of habitat loss.

| Hotspot Examples | Key Facts |
|---|---|
| Tropical Andes | ~15,000 endemic plant species; most species-rich hotspot |
| Madagascar | ~90% of wildlife is endemic; >90% of original forest lost |
| Sundaland (SE Asia) | Orangutans, Sumatran tiger; rapid deforestation for palm oil |
| California Floristic Province | ~2,125 endemic plant species; urban expansion threatens habitat |

> Hotspots cover only ~2.4% of Earth's land surface but contain >50% of all plant species and ~43% of vertebrate species as endemics.
`
    },
    {
      id: 'bco1-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Levels of Biodiversity** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'The total variety of alleles and genes within a population is called ___ diversity.',
            options: ['species', 'genetic', 'ecosystem', 'landscape']
          },
          {
            label: 'A community where individuals are evenly distributed among species has high ___.',
            options: ['species richness', 'genetic drift', 'evenness', 'mutation rate']
          },
          {
            label: 'Regions with many endemic species under severe habitat threat are called biodiversity ___.',
            options: ['corridors', 'hotspots', 'reserves', 'biomes']
          },
          {
            label: 'Cheetahs have very low genetic diversity because they experienced a severe population ___.',
            options: ['explosion', 'migration', 'bottleneck', 'speciation']
          }
        ],
        correctAnswers: ['genetic', 'evenness', 'hotspots', 'bottleneck'],
        hint1: 'Think about what varies at the molecular level within a population.',
        hint2: 'Evenness describes how equally individuals are distributed among species.',
        hint3: 'Norman Myers coined the term for these threatened, species-rich regions.',
        explanation: 'Genetic diversity refers to allelic variation within populations. Evenness describes equitable distribution of individuals among species — a key component of species diversity. Biodiversity hotspots are regions with exceptional endemic species richness that face significant habitat loss. Cheetahs passed through a severe genetic bottleneck that reduced their genetic variation dramatically.'
      }
    },
    {
      id: 'bco1-summary',
      type: 'text' as const,
      content: `## Part 1 Summary — Levels of Biodiversity

### Key Takeaways
1. **Genetic diversity** = allelic variation within a species; provides raw material for adaptation.
2. **Species diversity** = richness (number of species) + evenness (relative abundance).
3. **Ecosystem diversity** = variety of habitats and ecological processes in a region.
4. All three levels are interconnected — loss at one level cascades to others.
5. **Biodiversity hotspots** harbor >50% of endemic plant species on just ~2.4% of land area.
6. Conservation must address all three levels to be effective.

### AP Exam Connection
- Be prepared to distinguish the three levels of biodiversity and give examples.
- Understand why genetic diversity is critical for population resilience (connect to Hardy-Weinberg and natural selection).
- Know that biodiversity hotspots are prioritized for conservation due to high endemism and severe threat.

**Next up:** Part 2 — Measuring Biodiversity
`
    }
  ]
};
