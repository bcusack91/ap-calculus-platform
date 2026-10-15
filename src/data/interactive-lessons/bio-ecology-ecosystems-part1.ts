export const bioEcologyPart1Data = {
  topicSlug: 'ecology-ecosystems',
  sections: [
    {
      id: 'bio-ecology-ecosystems-p1-s1-intro',
      type: 'text' as const,
      content: `
## Ecosystem Structure and Components

**Part 1 of 7 — Ecosystem Structure and Components**

Ecology studies how organisms interact with each other and with their physical surroundings. The topic **Population & Community Ecology** worked at the population and community levels: growth curves, species interactions, keystone species and succession. This topic zooms out to the **ecosystem**. It asks what an ecosystem is built from, why biodiversity makes it more resilient, and what happens when parts are added, removed or disrupted (AP Biology CED 8.6 Biodiversity and 8.7 Disruptions to Ecosystems).

### Levels of organization

Ecologists work at nested levels. Each level contains the one before it.

| Level | What it includes | Example: a temperate lake |
|---|---|---|
| **Organism** | One individual | One yellow perch |
| **Population** | All individuals of one species in one area at one time | Every yellow perch in the lake |
| **Community** | All populations of all species living in the area | Perch, pike, zooplankton, algae, rooted plants, bacteria |
| **Ecosystem** | The community **plus** its nonliving (abiotic) environment | The community plus water, light, dissolved oxygen, temperature, sediments |
| **Biome** | A large region with a similar climate and similar dominant vegetation | The temperate deciduous forest biome the lake sits in |
| **Biosphere** | All ecosystems on Earth together | Every ecosystem on the planet |

> **The key boundary:** a community is living things only. The **ecosystem** is the lowest level whose definition includes nonliving factors. If a question mentions temperature, pH or nutrient levels together with the organisms, it is working at the ecosystem level.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p1-s2-factors',
      type: 'text' as const,
      content: `
### Biotic and abiotic factors

**Biotic factors** are the living parts of an ecosystem and their effects: producers, consumers, decomposers, pathogens, mutualists and competitors. **Abiotic factors** are the nonliving physical and chemical conditions.

| Abiotic factor | Why it matters to organisms |
|---|---|
| **Sunlight** | Powers photosynthesis; in water, light fades with depth, so producers are restricted to the upper zone |
| **Temperature** | Sets enzyme activity and metabolic rate; extremes denature proteins |
| **Water availability** | Needed for cell function; often the main limit on land plants in dry regions |
| **Soil and dissolved nutrients** | Supply nitrogen and phosphorus for proteins, nucleic acids and phospholipids |
| **pH and salinity** | Affect protein shape and the osmotic balance of cells |
| **Oxygen** | Required for aerobic respiration; can run low in warm or stagnant water and in waterlogged soil |

#### The influence runs both ways

Abiotic conditions **filter** which species can live in a place. But living things also **change** abiotic conditions:

- A closed forest canopy makes the forest floor shadier, cooler and more humid than a nearby clearing.
- Plant roots hold soil in place and slow erosion.
- Decomposers release nutrients from dead matter back into the soil and water.

So an ecosystem is not a stage with organisms placed on it. The living and nonliving parts form one interacting system.

> **AP Connection:** when an FRQ asks you to "identify an abiotic factor," name a specific, measurable variable (soil moisture, water temperature, dissolved oxygen), not a vague word like "the environment."
      `
    },
    {
      id: 'bio-ecology-ecosystems-p1-s3-mcq-factors',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Levels and Factors
      `,
      exercise: {
        questions: [
          {
            question: 'A team studying a coastal salt marsh records four variables. Which one is a biotic factor that could limit the growth of the marsh grass?',
            options: [
              'Salinity of the water that floods the marsh',
              'Depth of the tidal flooding at high tide',
              'Density of snails that graze on its leaves',
              'Concentration of oxygen in waterlogged mud'
            ],
            correctAnswer: 2,
            explanation: 'Grazing snails are living organisms, so their density is a biotic factor that can reduce the grass. Salinity, flooding depth and soil oxygen all matter to the grass too, but they are nonliving conditions, so they are abiotic factors.'
          },
          {
            question: 'Beneath a closed forest canopy, the forest floor is cooler, shadier and more humid than a nearby clearing. Which statement best describes this pattern?',
            options: [
              'Abiotic factors are determined only by regional climate',
              'Temperature and humidity count as biotic factors in a forest',
              'The clearing and the forest have identical abiotic conditions',
              'Biotic factors are altering abiotic conditions'
            ],
            correctAnswer: 3,
            explanation: 'The trees (biotic) block light and slow evaporation, which changes temperature, light and humidity (abiotic) on the floor below. Regional climate is not the only control, and temperature and humidity stay abiotic no matter what causes them.'
          },
          {
            question: 'Which level of organization is the lowest one whose definition includes abiotic factors?',
            options: [
              'Community',
              'Ecosystem',
              'Population',
              'Biosphere'
            ],
            correctAnswer: 1,
            explanation: 'An ecosystem is a community plus its physical environment, so it is the first level to include abiotic factors. The biosphere includes them too, but it sits above the ecosystem, while populations and communities include living things only.'
          }
        ]
      }
    },
    {
      id: 'bio-ecology-ecosystems-p1-s4-limiting',
      type: 'text' as const,
      content: `
### Limiting factors and tolerance ranges

A **limiting factor** is the resource or condition in shortest supply relative to what organisms need. It caps growth even when everything else is plentiful. Adding more of a factor that is *not* limiting does not increase growth. This idea is often called the **law of the minimum**.

Each species also has a **tolerance range** for each abiotic factor:

- **Optimal range:** growth and reproduction are highest.
- **Zones of physiological stress:** on either side of the optimum, the organism survives but grows and reproduces poorly.
- **Zones of intolerance:** beyond the limits, the organism cannot survive.

Tolerance ranges help explain where species are found. A species is usually absent from places where any one factor falls outside its range.

| Ecosystem | A common limiting factor |
|---|---|
| Hot desert | Water |
| Deep ocean below the sunlit zone | Light (for producers) |
| Many freshwater lakes | Phosphorus |
| Arctic tundra | Low temperature and a short growing season |

### Worked example: finding the limiting factor

Researchers add resources to grassland plots and measure aboveground plant biomass at the end of the season.

| Treatment | Plant biomass (grams per square meter) |
|---|---|
| Control (nothing added) | 120 |
| Nitrogen added | 122 |
| Water added | 190 |
| Water and nitrogen added | 260 |

**Step 1 — compare each single addition with the control.** Nitrogen alone raised biomass by only 2 grams per square meter, which is within normal plot-to-plot variation. Water alone raised it by 70. Water was the **primary limiting factor**.

**Step 2 — check the combined treatment.** With water supplied, adding nitrogen raised biomass from 190 to 260. Once water was no longer in short supply, nitrogen became the next limit. Ecologists call this **co-limitation**.

**Step 3 — write the claim.** "Water limits plant growth in these plots. When water is supplied, nitrogen becomes limiting, because adding nitrogen increases biomass only in watered plots."

> **Common error:** concluding that nitrogen "does nothing" for these plants. Nitrogen had no effect *while water was limiting*. A factor's effect depends on which factor is in shortest supply at the time.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p1-s5-input',
      type: 'input-boxes' as const,
      content: `
### Practice — Read a Limiting-Factor Experiment

Tree seedlings were grown in a greenhouse for eight weeks. Height gain for each treatment is shown.

| Treatment | Height gain (cm) |
|---|---|
| Control | 4 |
| Extra light | 4 |
| Phosphorus added | 11 |
| Extra light and phosphorus added | 12 |

1) Which factor was limiting seedling growth? (one word)

2) By how many centimeters did phosphorus alone increase height gain compared with the control?

3) The full span of a factor's values in which a species can survive is its ___ range. (one word)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['phosphorus', '7', 'tolerance'],
        hint1: 'Compare each single treatment with the control. Which one changed growth, and which one did not?',
        hint2: 'Subtract the control value from the phosphorus-only value: 11 minus 4.',
        hint3: 'The range runs from the lower limit of survival to the upper limit, with an optimal zone in the middle.',
        explanation: 'Phosphorus raised height gain from 4 to 11 cm (an increase of 7), while extra light alone changed nothing, so phosphorus was limiting. The span of conditions a species can survive is its tolerance range.'
      }
    },
    {
      id: 'bio-ecology-ecosystems-p1-s6-open-systems',
      type: 'text' as const,
      content: `
### Ecosystems are open systems

An ecosystem exchanges energy and matter with its surroundings.

- **Energy flows one way.** It enters mostly as sunlight captured by producers (or as chemical energy captured by chemosynthetic bacteria at deep-sea vents), passes through organisms, and leaves as heat. It is not recycled.
- **Matter cycles.** Atoms of carbon, nitrogen and phosphorus move between living organisms and the soil, water and air, and are used again.
- **Boundaries are porous.** Animals migrate in and out, and nutrients wash in from streams and out to the sea. Salmon, for example, carry nutrients from the ocean into the streams where they spawn and die.

How energy moves between trophic levels and how each nutrient cycle works are taught in the topic **Energy Flow & Nutrient Cycling**. Here we focus on structure: who is present and how the parts depend on each other.

### Describing community structure

| Term | What it describes |
|---|---|
| **Species richness** | How many species are present |
| **Species evenness** | How equally individuals are spread among those species |
| **Species composition** | *Which* species are present |
| **Relative abundance** | Each species' share of all individuals |
| **Physical structure** | How the community is arranged in space, such as forest layers (canopy, understory, shrub, herb and leaf litter) |

Two communities can have the same richness and still differ greatly in composition. A meadow of native grasses and a meadow of introduced weeds may each hold 12 species, but they support different insects, birds and soil microbes. Species are not interchangeable parts.

You already computed **Simpson's diversity index**, which combines richness and evenness, in Population & Community Ecology part 5. In this topic we use those measures to ask what diversity *does* for an ecosystem. That is the subject of part 2.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p1-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Limits and Structure
      `,
      exercise: {
        questions: [
          {
            question: 'Two meadows each contain 12 plant species, but only 3 species occur in both. Which feature of community structure differs most between the two meadows?',
            options: [
              'The number of species present',
              'The number of trophic levels',
              'The identity of the species',
              'The degree of abiotic stress'
            ],
            correctAnswer: 2,
            explanation: 'Both meadows have 12 species, so richness is the same, but they share only 3 species, so their species composition differs greatly. Nothing in the data describes trophic levels or abiotic stress.'
          },
          {
            question: 'In the grassland experiment, adding nitrogen alone barely changed biomass, but adding nitrogen together with water raised biomass well above water alone. What does this show?',
            options: [
              'Nitrogen was the primary limit, and water had no real effect on plant growth',
              'Water was the primary limit, and nitrogen became limiting once water was supplied',
              'Neither factor was limiting, because the control plants grew normally',
              'Both factors were equally limiting from the start of the experiment'
            ],
            correctAnswer: 1,
            explanation: 'Water alone produced a large gain while nitrogen alone did not, so water was limiting first. Nitrogen raised biomass only after water was supplied, which shows it became the next limiting factor.'
          }
        ]
      }
    }
  ]
};
