export const bioEnergyFlowPart3Data = {
  topicSlug: 'energy-flow-nutrient-cycling',
  sections: [
    {
      id: 'bio-energy-flow-nutrient-cycling-p3-s1-intro',
      type: 'text' as const,
      content: `
## Food Webs, Trophic Efficiency and Pyramids

**Part 3 of 7 — Food Webs, Trophic Efficiency and Pyramids**

Parts 1 and 2 showed how energy enters producers and how individuals spend it. This part follows energy **between** organisms: who eats whom, how much energy each transfer passes on, and why that limits the shape of every ecosystem.

### Trophic levels

A **trophic level** is an organism's position in the sequence of energy transfers.

| Trophic level | Role | Grassland example | Lake example |
|---|---|---|---|
| 1 | Producers (autotrophs) | Grasses | Phytoplankton |
| 2 | Primary consumers (herbivores) | Grasshoppers | Zooplankton |
| 3 | Secondary consumers | Mice | Small fish |
| 4 | Tertiary consumers | Snakes | Larger fish |
| 5 | Quaternary consumers | Hawks | Ospreys |

**Detritivores** and **decomposers** feed on dead material and wastes from **every** level. They are often drawn off to the side because they do not occupy a single level.

### Food chains and food webs

A **food chain** is a single path of energy transfer. A **food web** is the set of linked food chains in a community. Food webs are more realistic because most consumers eat more than one kind of food, and **omnivores** feed at more than one trophic level. A bear that eats berries is a primary consumer; the same bear eating salmon is a secondary or higher consumer.

Arrows in food webs point **from the food to the eater**, in the direction energy flows. Reversing them is one of the most common errors on the exam.
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p3-s2-efficiency',
      type: 'text' as const,
      content: `
### Trophic Efficiency: Why So Little Is Passed On

**Trophic efficiency** is the percentage of production at one trophic level that appears as production at the next level:

$$\\text{trophic efficiency} = \\frac{\\text{production at level } n+1}{\\text{production at level } n} \\times 100$$

On average, about **10%** of the energy at one level becomes biomass at the next. This "10% rule" is only an approximate average: measured efficiencies typically range from about **5% to 20%**, depending on the organisms and the ecosystem.

#### Where does the other ~90% go?

1. **Not eaten.** Much plant and animal biomass is never consumed; it dies and goes to decomposers.
2. **Eaten but not assimilated.** Indigestible material such as cellulose, bone and fur leaves in feces, which also feeds decomposers.
3. **Assimilated but respired.** Cellular respiration releases most assimilated energy as heat, which leaves the ecosystem.

#### Case: one caterpillar's budget (illustrative)

A caterpillar eats leaf tissue containing **200 J** of energy.

| Fate | Energy |
|---|---|
| Lost in feces | 100 J |
| Used in cellular respiration (lost as heat) | 67 J |
| Stored as growth (new caterpillar tissue) | 33 J |

Only the **33 J** in new tissue, about one-sixth of what the caterpillar ate, is available to a bird that eats the caterpillar. Notice that energy is never destroyed: all 200 J are accounted for. It is converted to forms the next level cannot use.
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p3-s3-mcq-efficiency',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Trophic Efficiency
      `,
      exercise: {
        questions: [
          {
            question: 'In the caterpillar example, why is only about one-sixth of the energy in the leaves the caterpillar eats available to a bird that eats the caterpillar?',
            options: [
              'Most of it is destroyed as the caterpillar digests the leaf tissue',
              'Most of it exits in feces or is released as heat by the caterpillar\'s respiration',
              'Most of it returns to the plant as nutrients in the caterpillar\'s waste',
              'Most of it becomes extra mass that the caterpillar cannot use'
            ],
            correctAnswer: 1,
            explanation: 'Half of the energy leaves in feces and about a third is released as heat by cellular respiration, leaving only the energy stored in new tissue for the next level. Energy is never destroyed, and nutrients in wastes are matter that cycles, not energy returned to the plant.'
          },
          {
            question: 'Which statement about the "10% rule" for energy passed between trophic levels is most accurate?',
            options: [
              'It is an exact law, and every ecosystem passes on precisely 10% of energy',
              'It is an approximate average, and actual efficiencies range from about 5 to 20%',
              'It describes matter, and 90% of the atoms are lost from the ecosystem at each step',
              'It applies only to producers, and consumers pass on nearly all their energy'
            ],
            correctAnswer: 1,
            explanation: 'Ten percent is a convenient average; measured trophic efficiencies commonly fall between about 5% and 20%. The rule describes energy, not atoms, which are recycled rather than lost.'
          },
          {
            question: 'A single oak tree supports thousands of caterpillars, which feed hundreds of birds. Which ecological pyramid for this food chain would appear inverted at its base?',
            options: [
              'Energy, since the birds hold the most total energy',
              'Biomass, since the caterpillars outweigh the oak',
              'Numbers, since one tree feeds many insects',
              'Energy, since the oak loses most energy as heat'
            ],
            correctAnswer: 2,
            explanation: 'One producer supports thousands of herbivores, so the bar for producers in a pyramid of numbers is narrower than the bar above it. The oak still outweighs its caterpillars and holds more energy, so the biomass and energy pyramids stay upright.'
          }
        ]
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p3-s4-calculations',
      type: 'text' as const,
      content: `
### Worked Calculations

#### 1. Energy remaining after several levels

If each transfer is about 10% efficient, the energy available at trophic level $n$ is

$$E_n = E_1 \\times (0.10)^{\\,n-1}$$

where $E_1$ is the NPP of the producers.

**Example:** Producers in a meadow store **20,000 kcal/m²/yr** as NPP.

| Level | Calculation | Energy (kcal/m²/yr) |
|---|---|---|
| Producers | given | 20,000 |
| Primary consumers | $20{,}000 \\times 0.10$ | 2,000 |
| Secondary consumers | $2{,}000 \\times 0.10$ | 200 |
| Tertiary consumers | $200 \\times 0.10$ | 20 |

Only $\\frac{20}{20{,}000} = 0.1\\%$ of the producers' energy reaches the tertiary consumers.

#### 2. Calculating efficiency from data

Zooplankton in a lake produce **1,500 kJ/m²/yr** of new biomass; the small fish that eat them produce **120 kJ/m²/yr**.

$$\\text{efficiency} = \\frac{120}{1{,}500} \\times 100 = 8\\%$$

#### 3. Working backward

How much NPP is needed to support **5 kcal/m²/yr** of production in a top predator at the fourth trophic level? Each step back multiplies by 10: $5 \\times 10 \\times 10 \\times 10 = 5{,}000$ kcal/m²/yr.

#### What the numbers explain

- **Food chains are short**, usually four or five levels, because too little energy is left to support another population.
- **Top predators are rare** and need large territories.
- **Eating lower on the food chain** lets the same cropland feed more people, since grain fed to livestock loses about 90% of its energy before it becomes meat.
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p3-s5-input-transfer',
      type: 'input-boxes' as const,
      content: `
### Practice — Energy Transfer

1) Producers in a pond store **80,000 kJ/m²/yr** as NPP. Assuming 10% transfer at each step, how much energy (kJ/m²/yr) reaches the **tertiary consumers**?

2) Grasshoppers in a field produce **4,000 kJ/m²/yr** of biomass, and the spiders that eat them produce **300 kJ/m²/yr**. What is the trophic efficiency from grasshoppers to spiders, in percent?
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['80', '7.5'],
        hint1: 'Tertiary consumers are three transfers above the producers.',
        hint2: 'Question 1: 80,000 × 0.10 × 0.10 × 0.10. Question 2: divide the higher level by the lower level.',
        hint3: '300 ÷ 4,000 = 0.075. Multiply by 100 for a percent.',
        explanation: 'Three 10% steps give 80,000 → 8,000 → 800 → 80 kJ/m²/yr. The spiders\' efficiency is 300 ÷ 4,000 × 100 = 7.5%, inside the usual 5–20% range.'
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p3-s6-pyramids',
      type: 'text' as const,
      content: `
### Ecological Pyramids

An **ecological pyramid** stacks one bar per trophic level, with producers at the bottom.

| Pyramid | What each bar shows | Can it be inverted? |
|---|---|---|
| **Energy (production)** | Energy stored per area per time | **Never.** Each level receives only a fraction of the energy below it |
| **Biomass** | Mass of living organisms present at one moment (standing crop) | **Sometimes.** In many open-water systems, phytoplankton biomass is smaller than zooplankton biomass |
| **Numbers** | Count of individuals | **Sometimes.** One tree can support thousands of insects |

#### Why can a biomass pyramid flip?

Phytoplankton reproduce and are eaten so quickly that a **small standing crop** can still have a **high rate of production**. A snapshot of biomass misses that turnover. The energy pyramid, which measures production over time, stays upright.

### When Energy Availability Changes

The CED emphasizes that a change in energy availability ripples upward through an ecosystem:

- A change at the **producer level** changes the number and size of the trophic levels above it. More NPP can support larger consumer populations and sometimes an extra level; less NPP shrinks them.
- A change in an **energy source**, such as sunlight reaching the ground, does the same thing by changing NPP. Haze from a large volcanic eruption that dims sunlight for a season lowers plant growth, and herbivores and predators decline afterward.

These **bottom-up** effects start at the base of the food web. **Top-down** effects, in which predators control the levels below them (keystone species and trophic cascades), are covered in Population and Community Ecology.
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p3-s7-mcq-pyramids',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Pyramids and Energy Availability
      `,
      exercise: {
        questions: [
          {
            question: 'Volcanic haze in the upper atmosphere reduces sunlight reaching a grassland for two growing seasons. What is the most likely effect on the trophic levels?',
            options: [
              'Predators increase as herbivores weakened by hunger become easier to catch',
              'Only producers decline, since consumers do not use light',
              'Lower NPP supports fewer herbivores and fewer predators above them',
              'Herbivores increase as stressed plants grow more nutritious leaves'
            ],
            correctAnswer: 2,
            explanation: 'Less light lowers net primary production, and with less energy entering at the base, fewer herbivores and predators can be supported. Consumers depend on light indirectly through the producers they eat.'
          },
          {
            question: 'In an open-ocean ecosystem, the biomass of phytoplankton present at one time is smaller than the biomass of the zooplankton that eat them. How can this be?',
            options: [
              'Zooplankton also photosynthesize, so they make most of their own food',
              'Phytoplankton reproduce and are eaten so quickly that even a slim crop yields high production',
              'Energy moves from the zooplankton back to the phytoplankton in open water',
              'Phytoplankton store far more energy per gram than any other organism'
            ],
            correctAnswer: 1,
            explanation: 'Rapid turnover lets a small standing crop of phytoplankton produce enough new biomass over time to support a larger standing crop of zooplankton. Zooplankton are consumers, and energy never flows back down a food chain.'
          },
          {
            question: 'Tertiary consumers at the fourth trophic level produce 40 kcal/m²/yr. Assuming 10% efficiency at each transfer, how much NPP must the producers supply?',
            options: [
              '400 kcal/m²/yr',
              '4,000 kcal/m²/yr',
              '40,000 kcal/m²/yr',
              '400,000 kcal/m²/yr'
            ],
            correctAnswer: 2,
            explanation: 'The fourth level is three transfers above the producers, so the producers need 40 × 10 × 10 × 10 = 40,000 kcal/m²/yr. Multiplying by 10 only once or twice skips trophic levels, and multiplying four times adds one too many.'
          }
        ]
      }
    }
  ]
};
