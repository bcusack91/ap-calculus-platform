export const apesBiogeochemicalCyclesPart7Data = {
  topicSlug: 'apes-biogeochemical-cycles',
  sections: [
    {
      id: 'apesbiog7-intro',
      type: 'text' as const,
      content: `
# 🔄 Biogeochemical Cycles

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| The Four Cycles Side by Side |
| Where the Cycles Meet |
| Final Checklist |

## The Four Cycles Side by Side

| Feature | Carbon | Nitrogen | Phosphorus | Water |
|---|---|---|---|---|
| Largest reservoir | Sedimentary rock | Atmosphere ($N_{2}$, about 78% of air) | Rock and ocean sediments | Ocean (about 97%) |
| Gas phase? | Yes ($CO_{2}$, $CH_{4}$) | Yes ($N_{2}$, $N_{2}O$, $NH_{3}$, $NO_{x}$) | No significant gas phase | Yes (water vapor) |
| How it enters living things | Photosynthesis | Fixation by bacteria, then assimilation | Weathering, then root uptake | Absorption by roots; drinking |
| Key microbes | Decomposers | Fixing, nitrifying, ammonifying and denitrifying bacteria | Decomposers | None required |
| Main human disruption | Fossil fuel combustion, deforestation | Haber-Bosch fertilizer, combustion ($NO_{x}$) | Mining phosphate rock for fertilizer, detergents, manure | Pavement, dams, irrigation, groundwater pumping |
| Main consequence | Climate change, ocean acidification | Eutrophication, smog, acid deposition, $N_{2}O$ warming | Eutrophication of fresh water | Flooding, less recharge, depleted aquifers |
| Speed | Fast loop (years) plus slow loop (millions of years) | Fast; driven by microbes | **Slowest**; tied to rock weathering and uplift | Fast; about 9 days in the atmosphere |

### Calculations from this topic

| Skill | Rule |
|---|---|
| Carbon ↔ carbon dioxide | Gt $CO_{2}$ = Gt C × 44/12 |
| Concentration ↔ mass | 1 ppm $CO_{2}$ ≈ 2.12 Gt C |
| Residence time | amount in reservoir ÷ rate of outflow |
| Fertilizer | kg of product = kg of nutrient needed ÷ (percent nutrient as a decimal) |
| Rain volume | 1 mm on 1 $m^{2}$ = 1 L |
| Percent change | (new − old) ÷ old × 100 |
| Rule of 70 | doubling time ≈ 70 ÷ percent growth rate |
      `
    },
    {
      id: 'apesbiog7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which cycle has no significant atmospheric component?',
            options: [
              'Phosphorus',
              'Nitrogen',
              'Carbon',
              'Hydrologic'
            ],
            correctAnswer: 0,
            explanation: 'Phosphorus moves through rock, soil, water and organisms and enters the air only as dust. Nitrogen and carbon both have important gases, and the hydrologic cycle includes water vapor.'
          },
          {
            question: 'Which process returns nitrogen from the soil to the atmosphere?',
            options: [
              'Denitrification',
              'Nitrification',
              'Ammonification',
              'Nitrogen fixation'
            ],
            correctAnswer: 0,
            explanation: 'Denitrifying bacteria convert nitrate to nitrogen gas in low-oxygen soils and sediments. Nitrification and ammonification change the form of nitrogen within the soil, and nitrogen fixation moves nitrogen in the opposite direction, from the air into the soil.'
          },
          {
            question: 'A country reports emissions of 33 Gt of $CO_{2}$ in one year. How many gigatonnes of carbon is that?',
            options: [
              '9 Gt C',
              '121 Gt C',
              '12 Gt C',
              '44 Gt C'
            ],
            correctAnswer: 0,
            explanation: 'Convert with 12/44: 33 × 12 ÷ 44 = 9 Gt C. Multiplying by 44/12 instead gives 121, which goes the wrong direction because the carbon mass must be smaller than the carbon dioxide mass.'
          }
        ]
      }
    },
    {
      id: 'apesbiog7-connections',
      type: 'text' as const,
      content: `
## Where the Cycles Meet

The cycles are not separate machines. The exam rewards answers that show how one cycle drives another.

| Connection | How it works |
|---|---|
| **Water carries nutrients** | Runoff and leaching move nitrate and phosphate from fields to streams, lakes and coastal oceans. Without the hydrologic cycle, fertilizer would stay put. |
| **Eutrophication joins three cycles** | Excess N and P (nutrient cycles) feed algae that fix carbon (carbon cycle). When the algae die, decomposers respire that carbon back to $CO_{2}$ and use up oxygen. |
| **Combustion disrupts two cycles at once** | Burning fossil fuels releases $CO_{2}$ (carbon) and, at high temperature, forms $NO_{x}$ from air (nitrogen). |
| **Fertilizer links nitrogen to carbon** | Haber-Bosch ammonia is made with hydrogen from natural gas, releasing $CO_{2}$. |
| **Wetlands serve every cycle** | They store carbon in waterlogged soils, remove nitrate by denitrification, trap phosphorus-laden sediment and slow floodwater. |
| **Warming feeds back on carbon** | Warmer oceans absorb less $CO_{2}$, and thawing permafrost releases $CO_{2}$ and methane, turning sinks into sources. |

### Worked Example: One Scenario, Three Cycles

A 5 ha cornfield receives 140 kg N/ha. A 30 mm storm falls on it, and 20% of the rain runs off, carrying dissolved nitrate.

1. **Nitrogen applied:** $140 \\times 5 = 700$ kg N
2. **Rain volume (water cycle):** area $= 5 \\times 10{,}000 = 50{,}000\\ m^{2}$; volume $= 30 \\times 50{,}000 = 1{,}500{,}000$ L
3. **Runoff:** $0.20 \\times 1{,}500{,}000 = 300{,}000$ L
4. **If the runoff carries 10 mg of nitrate-nitrogen per liter:** $300{,}000 \\times 10 = 3{,}000{,}000$ mg $= 3$ kg N in one storm
5. **Carbon link:** that nitrogen fertilizes an algal bloom downstream, whose decomposition consumes oxygen and releases $CO_{2}$.
      `
    },
    {
      id: 'apesbiog7-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

1) A forest stores 90 Gt C. How many Gt of $CO_{2}$ would be released if all of it burned? (one decimal)

2) A 20 mm storm falls on a 4 ha parking lot. How many liters of rain fall on it? (no commas)

3) Phosphate fertilizer use in a region grows 3.5% per year. Using the rule of 70, how many years until it doubles?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['330', '800000', '20'],
        hint1: 'Multiply by 44 and divide by 12.',
        hint2: '4 ha = 40,000 m². Each mm on each square meter is 1 L.',
        hint3: '70 ÷ 3.5.',
        explanation: '1) 90 × 44 ÷ 12 = 330 Gt CO₂. 2) 20 mm × 40,000 m² = 800,000 L. 3) 70 ÷ 3.5 = 20 years.'
      }
    },
    {
      id: 'apesbiog7-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A coastal wetland is drained and converted to farmland. Which pair of changes to nutrient and carbon cycling is most likely?',
            options: [
              'Less nitrate is removed by denitrification, and stored soil carbon is released as $CO_{2}$',
              'More nitrate is removed by denitrification, and soil carbon storage increases',
              'Phosphorus enters the air as a gas, and carbon is buried more quickly',
              'Nitrogen fixation stops entirely, and atmospheric $CO_{2}$ falls'
            ],
            correctAnswer: 0,
            explanation: 'Draining removes the waterlogged, low-oxygen conditions that support denitrification, and oxygen reaching the peat lets decomposers respire stored carbon as $CO_{2}$. Phosphorus has no significant gas phase.'
          },
          {
            question: 'Why is phosphorus more often the limiting nutrient in lakes than nitrogen?',
            options: [
              'No organism can fix it from the air',
              'It is lost to the atmosphere by denitrifying bacteria',
              'It leaches out of soils faster than nitrate does',
              'It is needed only by animals, not by algae'
            ],
            correctAnswer: 0,
            explanation: 'Some cyanobacteria can fix nitrogen from the air, but no organism can pull phosphorus from the atmosphere, so new phosphorus arrives only as fast as rock weathers. Denitrification removes nitrogen, not phosphorus, and every cell needs phosphorus for DNA and ATP.'
          },
          {
            question: 'Which human activity disrupts both the carbon cycle and the nitrogen cycle most directly?',
            options: [
              'Burning fossil fuels in vehicle engines',
              'Mining phosphate rock for fertilizer',
              'Pumping groundwater for irrigation',
              'Building dams on large rivers for hydropower'
            ],
            correctAnswer: 0,
            explanation: 'Combustion releases $CO_{2}$ from the fuel and forms nitrogen oxides from the air at high engine temperatures. Phosphate mining, groundwater pumping and dams mainly affect the phosphorus and water cycles.'
          }
        ]
      }
    },
    {
      id: 'apesbiog7-checklist',
      type: 'text' as const,
      content: `
## Final Checklist

Before the exam, make sure you can do each of these without notes:

- Name the largest reservoir and the fast and slow processes of each cycle
- Classify a reservoir as a source or a sink from its net flow, and calculate a residence time
- Convert Gt C to Gt $CO_{2}$ and ppm to Gt C
- Give the starting and ending chemical form of every nitrogen-cycle step and the organisms involved
- Explain why phosphorus is limiting in fresh water and why it is the slowest cycle
- Calculate rainfall volume and runoff, and explain how impervious surfaces change the water cycle
- Read the Keeling curve, a dissolved-oxygen graph and a nutrient-addition experiment
- Apply percent change and the rule of 70 to cycle data
- Write the full eutrophication chain and propose a specific solution

> 🔑 **AP Connection:** Biogeochemical cycles come back in Unit 5 (fertilizer and soil), Unit 7 ($NO_{x}$ and acid deposition), Unit 8 (eutrophication) and Unit 9 (climate change and ocean acidification). Learning the cycles well here makes each of those units easier.
      `
    }
  ]
};
