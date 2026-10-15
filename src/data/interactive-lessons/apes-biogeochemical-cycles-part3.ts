export const apesBiogeochemicalCyclesPart3Data = {
  topicSlug: 'apes-biogeochemical-cycles',
  sections: [
    {
      id: 'apesbiog3-intro',
      type: 'text' as const,
      content: `
# 🔄 Biogeochemical Cycles

**Part 3 of 7 — The Nitrogen Cycle in Depth**

---

| Section |
|---------|
| Each Step: Forms, Organisms and Conditions |
| Why Nitrogen Is So Often Limiting |
| Human Changes to the Nitrogen Cycle |
| Fertilizer Calculations |

> 🔑 **Key Concept:** The atmosphere is about 78% nitrogen gas, yet most living things cannot use a single molecule of it. The nitrogen cycle is the story of how microbes (and now factories) turn unusable $N_{2}$ into forms that plants can absorb, and how those forms leak into air and water when there is too much of them.
      `
    },
    {
      id: 'apesbiog3-steps',
      type: 'text' as const,
      content: `
## Each Step: Forms, Organisms and Conditions

Follow the **chemical form** of the nitrogen at every step. On the exam, naming the starting and ending form is usually how you show you know the step.

| Step | Starting form → ending form | Who does it | Conditions |
|---|---|---|---|
| **Nitrogen fixation (biological)** | $N_{2}$ → $NH_{3}$, which becomes ammonium $(NH_{4}^{+})$ in soil water | *Rhizobium* in legume root nodules; free-living soil bacteria; cyanobacteria in water and rice paddies | Requires a lot of energy to break the $N \\equiv N$ triple bond |
| **Nitrogen fixation (atmospheric)** | $N_{2}$ → nitrogen oxides → nitrate $(NO_{3}^{-})$ in rain | Lightning | Small share of natural fixation |
| **Nitrification** | $NH_{4}^{+}$ → nitrite $(NO_{2}^{-})$ → nitrate $(NO_{3}^{-})$ | Nitrifying bacteria (for example, *Nitrosomonas* then *Nitrobacter*) | Needs oxygen (aerobic soils) |
| **Assimilation** | $NH_{4}^{+}$ or $NO_{3}^{-}$ → amino acids, proteins, DNA | Plants absorb through roots; animals get nitrogen by eating plants or other animals | Happens wherever plants grow |
| **Ammonification** | Organic nitrogen in wastes and dead tissue → $NH_{3}$ / $NH_{4}^{+}$ | Decomposer bacteria and fungi | Returns nitrogen to the soil |
| **Denitrification** | $NO_{3}^{-}$ → $N_{2}$ (with some $N_{2}O$ released along the way) | Denitrifying bacteria | Needs **low oxygen**: waterlogged soils, wetlands, lake and ocean sediments |

### Reading the cycle as a loop

1. Fixation brings nitrogen **in** from the atmosphere.
2. Nitrification, assimilation and ammonification **recycle** it within the soil and living things, often many times.
3. Denitrification sends it **back out** to the atmosphere as $N_{2}$.

Notice the oxygen contrast: nitrification needs oxygen, while denitrification happens where oxygen is scarce. That is why wetlands, which have waterlogged, low-oxygen soils, are so good at removing excess nitrate from water flowing through them.
      `
    },
    {
      id: 'apesbiog3-limiting',
      type: 'text' as const,
      content: `
## Why Nitrogen Is So Often Limiting

A **limiting nutrient** is the one in shortest supply relative to what organisms need. Adding it increases growth; adding other nutrients does not.

Nitrogen is frequently the limiting nutrient for plants on land and in many coastal ocean waters, for three reasons:

- **The triple bond.** Breaking $N_{2}$ apart takes a lot of energy, and only certain bacteria and archaea have the enzyme (nitrogenase) to do it.
- **Nitrate leaches.** Most soil clay and humus particles carry a negative charge. Positively charged ammonium $(NH_{4}^{+})$ sticks to them, but negatively charged nitrate $(NO_{3}^{-})$ is repelled and moves downward with water, below the roots and into groundwater.
- **Denitrification removes it.** Any soil that becomes waterlogged can lose nitrate back to the air as $N_{2}$.

Plants need a lot of nitrogen because it is part of every amino acid (and therefore every protein, including enzymes), part of the chlorophyll molecule, and part of DNA and RNA. When it runs short, leaves turn pale yellow and growth slows.

> 🔑 **AP Connection:** Expect a stem that asks why legumes such as soybeans, clover and alfalfa can grow in nitrogen-poor soil. The answer is symbiosis: *Rhizobium* bacteria in root nodules fix $N_{2}$ into ammonium for the plant, and the plant supplies the bacteria with sugars. Planting legumes in crop rotation adds nitrogen to the soil naturally.
      `
    },
    {
      id: 'apesbiog3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A field is flooded for several weeks, so the soil contains almost no oxygen. Which nitrogen-cycle process is most likely to speed up?',
            options: [
              'Denitrification',
              'Nitrification',
              'Nitrogen fixation',
              'Ammonification'
            ],
            correctAnswer: 0,
            explanation: 'Denitrifying bacteria thrive in low-oxygen soils, converting nitrate back to $N_{2}$ gas. Nitrification slows in flooded soil because nitrifying bacteria need oxygen.'
          },
          {
            question: 'Why is nitrogen often the nutrient that limits plant growth on land, even though the atmosphere is about 78 percent nitrogen?',
            options: [
              'Only a few specialized microbes can break the triple bond in $N_{2}$ gas',
              'Plants lose most absorbed nitrogen to the air through their leaves',
              'Soil bacteria convert nearly all nitrate straight into ammonia gas',
              'Nitrogen gas binds tightly to clay and cannot reach plant roots'
            ],
            correctAnswer: 0,
            explanation: 'Atmospheric $N_{2}$ is held together by a triple bond that only nitrogen-fixing microbes (and industrial processes) can break. Plants do not lose most of their nitrogen through leaves, and gaseous $N_{2}$ does not bind to clay.'
          },
          {
            question: 'Which form of nitrogen is most likely to wash down through the soil and into groundwater?',
            options: [
              'Nitrate',
              'Ammonium',
              'Nitrogen gas',
              'Organic nitrogen'
            ],
            correctAnswer: 0,
            explanation: 'Negatively charged nitrate is repelled by negatively charged soil particles, so it moves with percolating water. Positively charged ammonium is held on clay and humus, and organic nitrogen stays in plant residues and humus until decomposers release it.'
          }
        ]
      }
    },
    {
      id: 'apesbiog3-human',
      type: 'text' as const,
      content: `
## Human Changes to the Nitrogen Cycle

### The Haber-Bosch process

In the early 1900s, chemists developed a way to fix nitrogen industrially:

$$N_{2} + 3H_{2} \\rightarrow 2NH_{3}$$

The reaction runs at high temperature and very high pressure over an iron catalyst. The hydrogen usually comes from natural gas, so fertilizer production uses fossil fuels and releases $CO_{2}$. The ammonia is sold directly or converted to urea, ammonium nitrate and other fertilizers.

Haber-Bosch fertilizer made it possible to feed billions more people. It also means humans now fix at least as much nitrogen each year as all natural processes on land combined, so far more reactive nitrogen is moving through soils, water and air than before industrialization.

### Where the extra nitrogen goes

| Human source | Form released | Where it goes | Environmental effect |
|---|---|---|---|
| **Synthetic fertilizer** | Nitrate $(NO_{3}^{-})$ | Leaches to groundwater; runs off to streams | Eutrophication, hypoxic dead zones, nitrate in drinking water |
| **Manure and urea spread on fields** | Ammonia gas $(NH_{3})$ | Volatilizes to the air, then falls back as ammonium | Fertilizes and eutrophies distant ecosystems; forms fine particles |
| **Fossil fuel combustion** (vehicles, power plants) | Nitrogen oxides $(NO_{x})$ | Atmosphere | Photochemical smog, ground-level ozone, nitric acid in acid deposition |
| **Fertilized and waterlogged soils** | Nitrous oxide $(N_{2}O)$ | Atmosphere | Long-lived greenhouse gas, hundreds of times more potent than $CO_{2}$ per kilogram; also depletes stratospheric ozone |

### Leaching versus volatilization

These two losses are easy to mix up. Both waste fertilizer, but they go in opposite directions.

| | Nitrate leaching | Ammonia volatilization |
|---|---|---|
| **Form** | $NO_{3}^{-}$ (dissolved ion) | $NH_{3}$ (gas) |
| **Direction** | Down, with water | Up, into the air |
| **Favored by** | Heavy rain or irrigation, sandy soils, fertilizer applied long before crops can use it | Urea or manure left on the soil surface, warm and windy weather, high-pH soils |
| **Reduced by** | Smaller split applications timed to crop demand, cover crops that soak up leftover nitrate | Working fertilizer or manure into the soil, applying before light rain |

> 🔑 **AP Connection:** Combustion makes $NO_{x}$ because the high temperature inside an engine forces nitrogen and oxygen from the **air** to react. The nitrogen mostly comes from the air, not from the fuel. This links the nitrogen cycle to Unit 7 (air pollution).
      `
    },
    {
      id: 'apesbiog3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Pathway** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Fossil fuel combustion in car engines adds reactive nitrogen to the air mainly as ___',
            options: ['nitrogen oxides', 'ammonia gas', 'nitrate ions', 'dinitrogen gas']
          },
          {
            label: 'Fertilizer nitrogen most often reaches groundwater wells by ___',
            options: ['leaching', 'volatilization', 'denitrification', 'assimilation']
          },
          {
            label: 'A greenhouse gas released as a byproduct of denitrification in fertilized soils is ___',
            options: ['nitrous oxide', 'nitrogen dioxide', 'ammonia', 'nitric acid']
          }
        ],
        correctAnswers: ['nitrogen oxides', 'leaching', 'nitrous oxide'],
        hint1: 'High engine temperatures make nitrogen and oxygen from the air react.',
        hint2: 'Nitrate dissolves in water and moves downward through the soil.',
        hint3: 'Its formula is $N_{2}O$.',
        explanation: 'Engines produce nitrogen oxides $(NO_{x})$, which form smog and acid deposition. Nitrate moves down to groundwater by leaching. Incomplete denitrification releases nitrous oxide $(N_{2}O)$, a long-lived greenhouse gas.'
      }
    },
    {
      id: 'apesbiog3-fertilizer',
      type: 'text' as const,
      content: `
## Fertilizer Calculations

A fertilizer label lists three numbers, called the **N-P-K grade**. The first number is the **percent nitrogen by mass**. (The second and third numbers are reported as the compounds $P_{2}O_{5}$ and $K_{2}O$, so only the first is the pure element.)

| Product | Grade | Percent nitrogen |
|---|---|---|
| Urea | 46-0-0 | 46% |
| Ammonium nitrate | 34-0-0 | 34% |
| Garden fertilizer | 10-10-10 | 10% |

### Worked Example 1: Nitrogen in a bag

How much nitrogen is in a 50 kg bag of ammonium nitrate (34-0-0)?

1. Convert the percent to a decimal: $34\\% = 0.34$
2. Multiply by the mass: $0.34 \\times 50 \\text{ kg} = 17$ kg of nitrogen

### Worked Example 2: How much fertilizer for a field

A farmer wants to apply 120 kg of nitrogen per hectare (kg N/ha) to a 15 ha cornfield using urea (46-0-0).

1. Total nitrogen needed: $120 \\dfrac{\\text{kg N}}{\\text{ha}} \\times 15 \\text{ ha} = 1{,}800$ kg N
2. Fertilizer needed: $\\dfrac{1{,}800 \\text{ kg N}}{0.46} \\approx 3{,}913$ kg of urea, or about 3.9 tonnes

Divide by the decimal fraction, because only 46% of each kilogram of urea is nitrogen. Multiplying by 0.46 instead would give far too little.

### Worked Example 3: Converting the rate

One hectare is $100 \\text{ m} \\times 100 \\text{ m} = 10{,}000 \\text{ m}^{2}$. Express 120 kg N/ha in grams per square meter.

1. Kilograms to grams: $120 \\text{ kg} \\times 1{,}000 = 120{,}000$ g
2. Divide by the area: $\\dfrac{120{,}000 \\text{ g}}{10{,}000 \\text{ m}^{2}} = 12 \\text{ g/m}^{2}$

### Worked Example 4: Nitrogen lost to leaching

Suppose 25% of the 1,800 kg of nitrogen on that cornfield leaches below the root zone.

1. $0.25 \\times 1{,}800 = 450$ kg of nitrogen lost to groundwater and streams
2. That nitrogen was paid for but never reached the crop, which is why reducing leaching saves farmers money as well as protecting water.

> 🔑 **AP Connection:** FRQs often say "calculate" and then "explain" in the next part. Show the setup with units, then connect the number to an impact, such as how the leached nitrogen contributes to eutrophication downstream.
      `
    },
    {
      id: 'apesbiog3-calc',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

**1)** How many kilograms of nitrogen are in a 50 kg bag of urea (46-0-0)?

**2)** A farmer wants to apply 150 kg N/ha to a 20 ha field using urea (46-0-0). How many kilograms of urea are needed? (round to the nearest whole kilogram)

**3)** Express an application rate of 150 kg N/ha in grams of nitrogen per square meter.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['23', '6522', '15'],
        hint1: 'Multiply the bag mass by the nitrogen fraction, 0.46.',
        hint2: 'First find total nitrogen (rate × area), then divide by 0.46.',
        hint3: '1 ha = 10,000 m² and 1 kg = 1,000 g.',
        explanation: '1) $0.46 \\times 50 = 23$ kg N. 2) $150 \\times 20 = 3{,}000$ kg N, and $3{,}000 \\div 0.46 \\approx 6{,}522$ kg of urea. 3) $150{,}000 \\text{ g} \\div 10{,}000 \\text{ m}^{2} = 15 \\text{ g/m}^{2}$.'
      }
    }
  ]
};
