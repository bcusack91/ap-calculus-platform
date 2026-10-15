export const bioEcologyPart7Data = {
  topicSlug: 'ecology-ecosystems',
  sections: [
    {
      id: 'bio-ecology-ecosystems-p7-s1-intro',
      type: 'text' as const,
      content: `
## Synthesis Review

**Part 7 of 7 — Synthesis Review**

This part ties the topic together. Every question about an ecosystem under change comes down to four things: **what the ecosystem is built from**, **how diverse it is**, **which component changed**, and **how large and how fast the change was**.

### The topic on one page

| Part | Big idea | What you should be able to do |
|---|---|---|
| 1. Structure and components | An ecosystem is a community plus its abiotic environment; limiting factors and tolerance ranges decide who can live there | Classify factors as biotic or abiotic; find the limiting factor in an addition experiment |
| 2. Biodiversity and resilience | Genetic, species and ecosystem diversity make ecosystems more resistant and more resilient | Separate resistance from resilience; explain redundancy, response diversity and the portfolio effect |
| 3. Adding or removing components | Producers, keystone species, foundation species and engineers hold structure together | Predict short-term (direct) and long-term (indirect) effects of a change |
| 4. Invasive species and disease | Invaders succeed through enemy release, open niches and naive natives | Trace an invasion from arrival to impact |
| 5. Human and natural disruption | Habitat loss, fragmentation and climate change speed up change; geological and weather events also restructure ecosystems | Calculate edge effects; link a disruption to selection on existing variation |
| 6. Analyzing data | Spread curves, the coefficient of variation and BACI designs turn observations into evidence | Compute effects and justify controls |

### The response to a change depends on four questions

1. **Which component changed?** Removing a producer or foundation species reaches every level. Removing one of several redundant species may change little.
2. **How much diversity is there?** More species, genotypes and habitats mean more ways to absorb the change.
3. **How big and how fast is the change?** A sudden, large change (an asteroid impact, a new pathogen) leaves no time to adapt.
4. **Is there variation to select on?** Survivors come from variation that already existed before the change.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p7-s2-chains',
      type: 'text' as const,
      content: `
### Three cases that use the whole topic

#### Guam: one invader, many layers

- **Part 4:** the brown tree snake arrived in cargo and faced native birds with no evolved defenses against snakes.
- **Part 5:** an island community is small and isolated, so its species are especially vulnerable.
- **Part 3:** most native forest bird species disappeared from the wild. Many trees lost their seed dispersers, a long-term, indirect effect on forest structure.
- **Part 1:** the change is visible at the ecosystem level, not just the population level, because a whole function (seed dispersal) was lost.

#### Coral reefs: a foundation species under climate stress

- **Part 3:** reef-building corals are foundation species and engineers.
- **Part 5:** heat waves break down the coral-algae mutualism (bleaching), and acidification slows skeleton building.
- **Part 5 again:** colonies that host heat-tolerant algae bleach less, so a heat wave selects among existing variants.
- **Part 3 again:** if enough coral dies, the reef can shift to a seaweed-dominated state that does not return on its own.

#### Potatoes and prairies: two levels of diversity

- **Part 2:** the Irish potato crop was a field of near-clones, so *Phytophthora infestans* met almost no resistance. Low **genetic** diversity made an artificial ecosystem fragile.
- **Part 2:** in the Minnesota grassland study, plots with more **species** kept more of their biomass through drought and recovered more fully.
- **Part 6:** the same idea appears in data as a lower coefficient of variation in species-rich plots.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p7-s3-mcq-cases',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Connecting the Cases
      `,
      exercise: {
        questions: [
          {
            question: 'Which ecosystem is predicted to be least resilient to a newly arriving plant pathogen?',
            options: [
              'A mixed forest of many native tree species',
              'A meadow with high species evenness',
              'An orchard of one clonal tree variety',
              'A wetland with diverse grass genotypes'
            ],
            correctAnswer: 2,
            explanation: 'A clonal orchard has almost no genetic or species diversity, so a pathogen that infects one tree can infect them all. The forest, meadow and wetland each contain variation that makes it likely some plants will resist.'
          },
          {
            question: 'On Guam, the loss of most native forest birds to the brown tree snake was followed by reduced seed dispersal for many tree species. How is the change in seed dispersal best classified?',
            options: [
              'A direct effect of snakes on trees',
              'An abiotic effect of the snake invasion',
              'An indirect effect on trees',
              'A density-independent effect on trees'
            ],
            correctAnswer: 2,
            explanation: 'The snakes did not act on the trees themselves; they removed the birds that carried the seeds, so the trees were affected indirectly through the food web. The change involves living dispersers, not an abiotic factor, and it depends on bird numbers.'
          },
          {
            question: 'Two reefs experience the same marine heat wave. Corals on reef A host a mix of algae types, some of them heat-tolerant; corals on reef B all host one heat-sensitive type. Which prediction is best supported?',
            options: [
              'Reef B loses fewer corals, because its algae are all the same type',
              'Reef A loses fewer corals, because some colonies withstand the heat',
              'Reef A loses more corals, because mixed algae compete with each other',
              'Both reefs lose the same share, because the heat wave is identical'
            ],
            correctAnswer: 1,
            explanation: 'The heat wave selects among variation that already exists, and only reef A has heat-tolerant variants. Uniform heat-sensitive algae on reef B give the heat wave nothing to spare.'
          }
        ]
      }
    },
    {
      id: 'bio-ecology-ecosystems-p7-s4-misconceptions',
      type: 'text' as const,
      content: `
### Misconceptions to fix before the exam

| Misconception | Correction |
|---|---|
| "A diverse ecosystem cannot be harmed." | Diversity *tends* to increase resistance and resilience. Diverse ecosystems can still be damaged by fire, drought or invaders. |
| "Every non-native species is invasive." | Invasive means an introduced species that spreads and causes harm. Most introduced species never do. |
| "The keystone species is the most abundant one." | That describes a dominant or foundation species. A keystone species has an effect out of proportion to its abundance. |
| "The disruption creates the trait needed to survive it." | Selection acts on variation already present. A population with no suitable variants declines. |
| "The short-term effect is the whole story." | Direct effects come first; indirect effects through other species and abiotic factors often matter more over decades. |
| "Natural disruptions are always slow." | Many are, but an asteroid impact or an eruption is sudden. What makes current human-driven change unusual is how fast and widespread it is. |
| "An ecosystem always returns to its old state." | Some shift to a different stable state, such as an urchin barren replacing a kelp forest. |

### Exam-day checklist for ecosystem questions

- **Name the level.** Population, community or ecosystem? Bring in abiotic factors only at the ecosystem level.
- **Name the component.** Producer, keystone, foundation species, engineer or abiotic factor?
- **Use the precise term.** Resistance or resilience, not "stability." Invasive, not just "new."
- **Trace two steps.** Give the direct effect, then at least one indirect effect.
- **Tie claims to data.** Quote a number from the graph or table and say what it shows.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
### Practice — Classify the Disruption

Choose the category that best describes each change.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A new highway splits a large forest into two separated patches',
            options: ['introduced disease', 'meteorological event', 'habitat fragmentation', 'ecosystem engineering']
          },
          {
            label: 'Warm Pacific surface water weakens the upwelling of nutrients off Peru',
            options: ['meteorological event', 'habitat fragmentation', 'ecosystem engineering', 'introduced disease']
          },
          {
            label: 'A fungus carried from Asia kills most of the American chestnut trees',
            options: ['habitat fragmentation', 'introduced disease', 'meteorological event', 'ecosystem engineering']
          }
        ],
        correctAnswers: ['habitat fragmentation', 'meteorological event', 'introduced disease'],
        hint1: 'A road usually removes little area but cuts what remains into pieces.',
        hint2: 'El Niño is a change in ocean and atmosphere conditions, not something people cause directly.',
        hint3: 'A pathogen moved by people to hosts that never met it is an introduced disease.',
        explanation: 'The highway fragments habitat. The El Niño warming is a meteorological event. The chestnut blight is an introduced disease acting on hosts with no evolved resistance.'
      }
    },
    {
      id: 'bio-ecology-ecosystems-p7-s6-mcq-final',
      type: 'multiple-choice' as const,
      content: `
### Final Review — Mixed Questions
      `,
      exercise: {
        questions: [
          {
            question: 'About 66 million years ago, an asteroid impact filled the atmosphere with debris and blocked sunlight for an extended period. Why did this event cause extinctions across so many food webs at once?',
            options: [
              'The impact released toxins that poisoned only large land animals',
              'Photosynthesis collapsed, cutting off the energy source at the base of most food webs',
              'Predators multiplied after the impact and overhunted their prey',
              'Cold temperatures froze every freshwater ecosystem on the planet'
            ],
            correctAnswer: 1,
            explanation: 'With sunlight blocked, producers could not photosynthesize, so the energy supply for consumers at every level collapsed. That is why the K-Pg extinction struck marine and land food webs alike rather than a single group.'
          },
          {
            question: 'A student says, "This forest is very diverse, so an invasive insect cannot harm it." Which response best corrects the student?',
            options: [
              'Diversity has no effect on how ecosystems respond to invaders',
              'Diverse forests are easier to invade, because they have more open niches',
              'Diversity tends to buffer change, but it does not make a forest immune',
              'An invader can only harm a forest that has no predators of its own'
            ],
            correctAnswer: 2,
            explanation: 'Greater diversity tends to make an ecosystem more resistant and resilient, but diverse ecosystems can still be damaged. Saying diversity has no effect goes too far in the other direction.'
          },
          {
            question: 'Which change would most likely raise ecosystem diversity in a stream valley over several decades?',
            options: [
              'A dam that ends the yearly spring floods',
              'A highway built along the valley floor',
              'Beavers return and build a chain of dams',
              'A clonal willow planted along both banks'
            ],
            correctAnswer: 2,
            explanation: 'Beaver dams create ponds, marshes and meadows alongside the flowing stream, so the valley holds more kinds of habitat. Ending floods, building a highway and planting one clonal willow all simplify the valley.'
          }
        ]
      }
    }
  ]
};
