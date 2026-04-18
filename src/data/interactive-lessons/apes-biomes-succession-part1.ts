export const apesBiomesSuccessionPart1Data = {
  topicSlug: 'apes-biomes-succession',
  sections: [
    {
      id: 'apesbs1-intro',
      type: 'text' as const,
      content: `
# 🌍 Biomes & Ecological Succession

**Part 1 of 7 — Terrestrial and Aquatic Biomes**

---

## Terrestrial Biomes

| Biome | Climate | Key Features | Biodiversity |
|-------|---------|-------------|-------------|
| **Tropical rainforest** | Hot, wet year-round | Tallest canopy, most diverse biome | Highest |
| **Tropical savanna** | Hot, distinct wet/dry seasons | Grassland with scattered trees, fire-adapted | High |
| **Desert** | Hot or cold, <25 cm rain/yr | Sparse vegetation, extreme temperature swings | Low |
| **Temperate grassland** | Moderate temps, 25-75 cm rain | Deep fertile soil (great for agriculture) | Moderate |
| **Temperate forest** | Moderate, distinct seasons | Deciduous trees, autumn leaf drop | Moderate-High |
| **Boreal forest (taiga)** | Cold, long winters | Coniferous trees (spruce, pine, fir) | Low-Moderate |
| **Tundra** | Very cold, permafrost | No trees; mosses, lichens, low shrubs | Low |

> 🔑 **Biome distribution** is primarily determined by **temperature** and **precipitation** — this is why biomes form latitudinal bands.
      `
    },
    {
      id: 'apesbs1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which biome has the deepest, most fertile soil and has been largely converted to agriculture?',
            options: [
              'Tropical rainforest',
              'Temperate grassland',
              'Boreal forest',
              'Tundra'
            ],
            correctAnswer: 1,
            explanation: 'Temperate grasslands (prairies) have deep, nutrient-rich soil formed by centuries of grass growth and decomposition. Most have been converted to farmland (US Great Plains, Ukraine).'
          },
          {
            question: 'The tundra biome is characterized by:',
            options: [
              'Dense deciduous forest and moderate rainfall',
              'Permafrost, no trees, and extremely cold temperatures',
              'Hot temperatures and sparse rainfall',
              'Coniferous trees and long cold winters'
            ],
            correctAnswer: 1,
            explanation: 'Tundra has permanently frozen subsoil (permafrost), no trees (too cold and windy), extreme cold, and short growing seasons. Found in Arctic regions and high mountain tops.'
          }
        ]
      }
    },
    {
      id: 'apesbs1-content',
      type: 'text' as const,
      content: `
## Ecological Succession

| Type | Starting Point | Process | Example |
|------|---------------|---------|---------|
| **Primary succession** | Bare rock/new surface (no soil) | Pioneer species → soil development → complex community | Lava flow, retreating glacier |
| **Secondary succession** | Disturbed area (soil remains) | Faster recovery since soil exists | After fire, abandoned farm, hurricane |

### Succession Stages (Primary)

1. **Pioneer species** arrive: lichens, mosses break down rock
2. **Soil develops** from weathered rock + dead organisms
3. **Grasses and herbs** colonize the new thin soil
4. **Shrubs and small trees** outcompete grasses for light
5. **Climax community** established: mature forest or stable ecosystem

### Key Terms

| Term | Definition |
|------|-----------|
| **Pioneer species** | First to colonize; tolerant of harsh conditions (lichens, mosses) |
| **Climax community** | Stable, mature endpoint of succession |
| **Disturbance** | Event that disrupts the ecosystem (fire, flood, logging) |
| **Resilience** | Ability to recover after disturbance |
| **Resistance** | Ability to withstand disturbance without changing |
      `
    },
    {
      id: 'apesbs1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Succession that begins on bare rock with no soil is called _______ succession.

2) The first organisms to colonize a disturbed or new area are called _______ species.

3) The stable, mature endpoint of succession is called the _______ community.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['primary', 'pioneer', 'climax'],
        hint1: 'Starts from scratch — no soil at all.',
        hint2: 'Lichens and mosses are classic examples.',
        hint3: 'The final, stable stage.',
        explanation: 'Primary succession = starts on bare rock. Pioneer species = first colonizers. Climax community = stable endpoint of succession.'
      }
    },
    {
      id: 'apesbs1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Scenario** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An abandoned parking lot gradually being overtaken by weeds, then shrubs, then trees is ___',
            options: ['Secondary succession', 'Primary succession', 'A climax community', 'Ecological resistance']
          },
          {
            label: 'Lichens growing on newly exposed rock after a glacier retreats is ___',
            options: ['Primary succession', 'Secondary succession', 'A disturbance event', 'Ecological resilience']
          },
          {
            label: 'A biome with coniferous trees, cold winters, and acidic soils is the ___',
            options: ['Boreal forest (taiga)', 'Temperate grassland', 'Tropical savanna', 'Tundra']
          }
        ],
        correctAnswers: ['Secondary succession', 'Primary succession', 'Boreal forest (taiga)'],
        hint1: 'Soil already exists under the pavement.',
        hint2: 'Starting from bare rock — no prior soil.',
        hint3: 'Think Canada and Russia — spruce and pine.',
        explanation: 'Parking lot = secondary (soil present). Bare rock after glacier = primary. Coniferous + cold = taiga/boreal forest.'
      }
    },
    {
      id: 'apesbs1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Biomes & Succession

- Know how to read a **climate diagram** (climograph) showing temperature and precipitation to identify biomes
- Primary vs secondary succession: the KEY difference is whether **soil is present**
- Fire is NOT always bad — many ecosystems (grasslands, chaparral, pine forests) are **fire-adapted** and NEED periodic burning
- **Invasive species** can disrupt succession by outcompeting native species
- Permafrost thawing due to climate change releases methane — a positive feedback loop
      `
    },
    {
      id: 'apesbs1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'After a forest fire destroys the vegetation but leaves the soil intact, regrowth follows secondary succession. Which will likely appear FIRST?',
            options: [
              'Mature oak and maple trees',
              'Fast-growing grasses and wildflowers',
              'Lichens growing on rock surfaces',
              'Dense shrub thickets'
            ],
            correctAnswer: 1,
            explanation: 'In secondary succession (soil present), fast-growing herbaceous plants (grasses, wildflowers) colonize first, followed by shrubs, then pioneer trees, then mature forest.'
          },
          {
            question: 'Climate change is causing permafrost in the tundra to thaw, releasing methane. This is a concern because:',
            options: [
              'Methane cools the atmosphere and could cause an ice age',
              'Methane is a potent greenhouse gas creating a positive feedback loop of more warming',
              'Thawing permafrost increases tundra biodiversity',
              'Methane has no effect on climate'
            ],
            correctAnswer: 1,
            explanation: 'Methane is a potent greenhouse gas. Warming thaws permafrost → releases methane → more warming → more thawing. This is a positive feedback loop that accelerates climate change.'
          }
        ]
      }
    }
  ]
};
