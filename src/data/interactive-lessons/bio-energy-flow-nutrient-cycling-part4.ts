export const bioEnergyFlowPart4Data = {
  topicSlug: 'energy-flow-nutrient-cycling',
  sections: [
    {
      id: 'bio-energy-flow-nutrient-cycling-p4-s1-intro',
      type: 'text' as const,
      content: `
## Carbon and Water Cycles

**Part 4 of 7 — Carbon and Water Cycles**

Energy passes through an ecosystem once. Matter does not: the atoms in your cells were once in the air, in rocks, in other organisms. A **biogeochemical cycle** traces how an element moves between living (**biotic**) and non-living (**abiotic**) parts of Earth.

Every cycle is described with two kinds of terms:

- **Reservoirs (pools):** places where the element is stored, such as the atmosphere, the ocean, living biomass, soil and rock.
- **Fluxes (processes):** the transfers that move it between reservoirs, such as photosynthesis, respiration, decomposition and burial.

### Why organisms need carbon

Carbon is the backbone of biological molecules. Organisms use carbon to build **carbohydrates, lipids, proteins and nucleic acids**, and to make storage compounds and new cells. Producers take carbon in as $\\text{CO}_2$; consumers get it by eating organic molecules. Every carbon atom in a hawk's feathers was fixed by a producer at some point.
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p4-s2-carbon',
      type: 'text' as const,
      content: `
### The Carbon Cycle

#### Reservoirs

| Reservoir | Form of carbon | Speed of exchange |
|---|---|---|
| Atmosphere | $\\text{CO}_2$ gas (plus a little methane) | Fast |
| Ocean | Dissolved $\\text{CO}_2$, bicarbonate and carbonate | Fast at the surface, slow in the deep ocean |
| Living biomass | Organic molecules in organisms | Fast |
| Soil and dead organic matter | Litter, humus, peat | Years to centuries |
| Fossil fuels | Coal, oil, natural gas | Millions of years, unless burned |
| Sedimentary rock | Limestone and other carbonates | Millions of years |

The ocean holds far more carbon than the atmosphere, and sedimentary rocks hold the most of all, but rock carbon cycles very slowly.

#### Fluxes

| Process | Direction of carbon |
|---|---|
| **Photosynthesis** (and chemosynthesis) | Atmosphere or water → organic molecules |
| **Cellular respiration** | Organic molecules → $\\text{CO}_2$ |
| **Decomposition** | Dead organic matter → $\\text{CO}_2$ (respiration by decomposers) |
| **Combustion** (fires, fossil fuels) | Organic carbon → $\\text{CO}_2$ |
| **Diffusion** at the sea surface | $\\text{CO}_2$ moves between air and water, in either direction |
| **Burial and sedimentation** | Organic matter and shells → sediments, fossil fuels, rock |
| **Volcanic activity** | Rock carbon → $\\text{CO}_2$ |

Photosynthesis and respiration are nearly balanced over a year in an undisturbed ecosystem. Notice that respiration appears for producers, consumers **and** decomposers. Plants are a source of $\\text{CO}_2$ at night and a sink during the day.
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p4-s3-mcq-carbon',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Carbon Fluxes
      `,
      exercise: {
        questions: [
          {
            question: 'Which process moves carbon from the atmosphere into living organisms?',
            options: [
              'Cellular respiration by consumers',
              'Photosynthesis by producers',
              'Decomposition by soil bacteria',
              'Combustion of fossil fuels in engines'
            ],
            correctAnswer: 1,
            explanation: 'Producers fix atmospheric carbon dioxide into sugars during photosynthesis, bringing carbon into the biotic part of the cycle. Respiration, decomposition and combustion all move carbon in the opposite direction, back to the atmosphere.'
          },
          {
            question: 'At Mauna Loa, atmospheric CO2 falls each Northern Hemisphere summer and rises each winter, on top of a long-term increase. What causes the seasonal drop?',
            options: [
              'Warm summer oceans release more dissolved carbon dioxide',
              'Northern plants fix more carbon than the biosphere respires',
              'Fossil fuel burning stops during the warm summer months',
              'Northern soil decomposers absorb carbon dioxide from the air'
            ],
            correctAnswer: 1,
            explanation: 'The Northern Hemisphere has most of Earth\'s land plants, and during its growing season photosynthesis removes more carbon dioxide than respiration and decomposition release. Decomposers release carbon dioxide rather than absorbing it, and warmer water holds less dissolved gas, which would raise atmospheric levels.'
          }
        ]
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p4-s4-human',
      type: 'text' as const,
      content: `
### How Human Activity Alters the Carbon Cycle

Two human activities add carbon to the atmosphere faster than natural sinks remove it:

1. **Fossil fuel combustion.** Coal, oil and natural gas are the remains of organisms buried for millions of years. Burning them moves that long-stored carbon into the atmosphere as $\\text{CO}_2$ in decades, far faster than burial and rock formation can return it.
2. **Deforestation.** Burning or decomposing cleared trees releases their carbon, and the land then fixes less carbon each year because there is less photosynthesis.

#### The data

Air bubbles trapped in ice cores show that atmospheric $\\text{CO}_2$ was about **280 ppm** before the Industrial Revolution. Direct measurements at Mauna Loa, Hawaii, which began in 1958, show it passing **420 ppm** in the 2020s. The record (the Keeling curve) has two features:

- A **long-term rise**, caused mainly by fossil fuel combustion.
- A **yearly zigzag**: $\\text{CO}_2$ falls during the Northern Hemisphere growing season, when photosynthesis outpaces respiration, and rises in fall and winter, when respiration and decomposition dominate.

#### Worked example: percent change

$$\\text{percent change} = \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100 = \\frac{420 - 280}{280} \\times 100 = 50\\%$$

About a quarter of the extra $\\text{CO}_2$ dissolves into the ocean, which slows the atmospheric rise but makes seawater more acidic. The effects of rising $\\text{CO}_2$ on ecosystems, such as warming, range shifts and coral bleaching, are covered in Ecology and Ecosystems. Here, focus on the **mechanism**: carbon moves from a slow reservoir (fossil fuels) to a fast one (the atmosphere).
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p4-s5-input-carbon',
      type: 'input-boxes' as const,
      content: `
### Practice — Carbon Budgets

1) Atmospheric $\\text{CO}_2$ measured at Mauna Loa rose from about 350 ppm in the late 1980s to about 420 ppm in the 2020s. What is the percent increase?

2) Over one year, the plants in a forest plot fix **120 g C/m²** by photosynthesis. Respiration by the plants, animals and decomposers releases **110 g C/m²**. How many g C/m² does the plot store that year?
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['20', '10'],
        hint1: 'Percent change = (new − old) ÷ old × 100.',
        hint2: '(420 − 350) ÷ 350 = 70 ÷ 350. For question 2, compare carbon taken in with carbon released.',
        hint3: '70 ÷ 350 = 0.2. For the forest, 120 − 110.',
        explanation: 'The rise is 70 ÷ 350 × 100 = 20%. The forest takes in 120 g C/m² and releases 110 g C/m², so it stores a net 10 g C/m² and acts as a carbon sink that year.'
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p4-s6-water',
      type: 'text' as const,
      content: `
### The Water Cycle

Water cycles through the biosphere driven by **solar energy** (which evaporates it) and **gravity** (which brings it back down and moves it downhill).

| Process | What happens |
|---|---|
| **Evaporation** | Liquid water at the surface becomes vapor, mostly from the oceans |
| **Transpiration** | Plants lose water vapor through their stomata; water pulled up from the soil exits the leaves |
| **Condensation** | Vapor cools and forms clouds |
| **Precipitation** | Rain and snow return water to the surface |
| **Runoff** | Water flows over land into streams, lakes and the ocean |
| **Infiltration** | Water soaks into the soil and recharges groundwater |

The oceans hold about 97% of Earth's water. Most of the rest is in ice and groundwater; only a small fraction is in lakes, rivers and the atmosphere at any time.

#### Water and living things

- Water is the **solvent** for cellular chemistry and the medium for transport in organisms.
- It is a **reactant** in photosynthesis (split to release $\\text{O}_2$) and in hydrolysis, and a **product** of cellular respiration and dehydration synthesis.
- Over land, **transpiration** returns a large share of the water that falls as rain to the atmosphere, so forests help generate their own rainfall.

> **Case: clearing a forest.** Removing trees cuts transpiration, so less water vapor returns to the air and rainfall downwind can decline. Without roots and leaf litter to slow it, more rain becomes runoff instead of infiltrating, increasing erosion and lowering groundwater recharge.
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p4-s7-mcq-cycles',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Carbon and Water
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best explains why fossil fuel combustion increases atmospheric CO2 over time?',
            options: [
              'It turns oxygen in the air directly into new carbon dioxide',
              'It adds long-buried carbon to the air faster than sinks can absorb it',
              'It kills nearby plants, halting photosynthesis across the region',
              'It heats the oceans until they release all their dissolved carbon'
            ],
            correctAnswer: 1,
            explanation: 'Fossil fuels hold carbon removed from the cycle long ago, and burning them returns it to the atmosphere far faster than photosynthesis, ocean uptake and burial can remove it. The carbon in the carbon dioxide comes from the fuel, not from oxygen in the air.'
          },
          {
            question: 'After a large forest is clear-cut, rainfall downwind decreases. Loss of which process most directly reduces the water vapor returned to the air over the cleared land?',
            options: [
              'Infiltration into groundwater',
              'Runoff into nearby streams',
              'Transpiration from leaves',
              'Condensation in the clouds'
            ],
            correctAnswer: 2,
            explanation: 'Trees pull water from the soil and release it as vapor through their stomata, so removing them cuts transpiration. Runoff and infiltration move liquid water across or into the ground, and condensation removes vapor from the air rather than adding it.'
          },
          {
            question: 'A biologist supplies a grass leaf with CO2 containing labeled carbon atoms. A grasshopper then eats the leaf. Which molecule in the grasshopper would NOT contain any of the labeled atoms?',
            options: [
              'Glycogen stored in its muscle cells',
              'Phospholipids in its membranes',
              'Water made during its respiration',
              'DNA in the nuclei of its cells'
            ],
            correctAnswer: 2,
            explanation: 'Glycogen, phospholipids and DNA are all built on carbon skeletons, so labeled carbon from the leaf can end up in any of them. Water contains only hydrogen and oxygen, so it cannot carry the label, even though it is made during respiration.'
          }
        ]
      }
    }
  ]
};
