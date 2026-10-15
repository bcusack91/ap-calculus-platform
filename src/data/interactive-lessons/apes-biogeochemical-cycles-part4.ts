export const apesBiogeochemicalCyclesPart4Data = {
  topicSlug: 'apes-biogeochemical-cycles',
  sections: [
    {
      id: 'apesbiog4-intro',
      type: 'text' as const,
      content: `
# 🔄 Biogeochemical Cycles

**Part 4 of 7 — The Phosphorus and Hydrologic Cycles**

---

| Section |
|---------|
| The Phosphorus Cycle: A Cycle Through Rock |
| Why Phosphorus Limits Freshwater Growth |
| The Hydrologic Cycle: Processes and Reservoirs |
| Runoff, Infiltration and Rainfall Volume Calculations |

> 🔑 **Key Concept:** Phosphorus and water are opposites in speed. Phosphorus has no significant gas phase and moves on geologic timescales, while water cycles through the atmosphere in days. Water is also the vehicle that carries phosphorus (and nitrogen) from land into lakes and the ocean.
      `
    },
    {
      id: 'apesbiog4-phosphorus',
      type: 'text' as const,
      content: `
## The Phosphorus Cycle: A Cycle Through Rock

Living things need phosphorus for **DNA and RNA**, **ATP** (the energy carrier in cells), **phospholipids** in cell membranes, and the calcium phosphate in **bones and teeth**.

### Reservoirs

| Reservoir | Form | Exchange speed |
|---|---|---|
| **Sedimentary rock** (phosphate rock) | Phosphate minerals | Largest reservoir; millions of years |
| **Ocean sediments** | Phosphate settled on the sea floor | Very slow; becomes new rock |
| **Soil** | Phosphate bound to soil particles; organic phosphorus in humus | Years to centuries |
| **Living organisms** | DNA, ATP, membranes, bones | Fast; recycled by decomposers |

### The path of a phosphorus atom

1. **Weathering** of phosphate rock by rain and chemical reactions releases phosphate ions $(PO_{4}^{3-})$ into soil and water.
2. **Plant uptake:** roots absorb dissolved phosphate. Consumers get phosphorus by eating plants or other animals.
3. **Decomposition** returns phosphate from wastes and dead organisms to the soil.
4. **Runoff and erosion** carry phosphate, much of it stuck to soil particles, into streams, lakes and eventually the ocean.
5. **Sedimentation:** phosphate settles to the ocean floor and, over millions of years, is compressed into new sedimentary rock.
6. **Geologic uplift:** tectonic forces raise sea-floor rock above sea level, where weathering can begin the cycle again.

Steps 2 and 3 can repeat many times in a short loop. Steps 4 through 6 form the long loop, which takes millions of years.

## Why Phosphorus Limits Freshwater Growth

- **No atmospheric source.** Phosphorus enters the air only as dust particles, never as a significant gas, so there is no equivalent of nitrogen fixation to pull new phosphorus out of the air.
- **Low solubility.** Phosphate binds tightly to soil minerals (iron, aluminum and calcium compounds), so very little dissolves in water at any time.
- **Slow supply.** New phosphate arrives only as fast as rock weathers.

As a result, phosphorus is most often the **limiting nutrient in freshwater lakes and streams**. In the 1970s, scientists in Canada's Experimental Lakes Area divided a lake with a plastic curtain and fertilized both halves with carbon and nitrogen, but only one half with phosphorus. Only the half with added phosphorus developed a dense algal bloom.

### Human changes to the phosphorus cycle

| Human activity | Effect |
|---|---|
| **Mining phosphate rock** for fertilizer | Moves phosphorus from a slow reservoir into soils and water far faster than weathering; phosphate rock is a nonrenewable resource |
| **Fertilizer and manure runoff** | Phosphorus attached to eroded soil reaches lakes and causes eutrophication |
| **Phosphate detergents and sewage** | Wastewater added phosphate to lakes; many places restricted phosphate detergents to reduce algal blooms |
| **Soil erosion** from cleared land | Carries particle-bound phosphorus into waterways |

> 🔑 **AP Connection:** Because phosphorus travels mostly attached to soil particles, practices that stop **erosion** (cover crops, buffer strips, conservation tillage) are the main way to keep it out of lakes. Practices that stop **leaching** matter more for nitrate.
      `
    },
    {
      id: 'apesbiog4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Phosphorus cycles far more slowly than carbon or nitrogen. Which feature of the phosphorus cycle best explains this?',
            options: [
              'Its main reservoir is rock, released as phosphate during gradual weathering',
              'Its bacteria convert phosphate to a gas that lingers in the air',
              'It is used by organisms only in tiny amounts inside their bones',
              'It is fixed from the air by lightning at a very slow rate'
            ],
            correctAnswer: 0,
            explanation: 'Phosphorus is stored mainly in rock and enters ecosystems only as the rock weathers, a process that takes a very long time. Phosphorus has no significant gas phase, so neither bacterial gas production nor lightning fixation plays a role.'
          },
          {
            question: 'In which kind of ecosystem is phosphorus most often the limiting nutrient?',
            options: [
              'Freshwater lakes',
              'Coastal salt marshes',
              'Temperate grasslands',
              'Northern boreal forests'
            ],
            correctAnswer: 0,
            explanation: 'Phosphate binds to sediments and has no atmospheric source, so freshwater algae usually run out of phosphorus first. Plant growth in grasslands, boreal forests and coastal marshes is more often limited by nitrogen.'
          },
          {
            question: 'Phosphate-based laundry detergents were restricted in many areas. What problem were the restrictions mainly meant to reduce?',
            options: [
              'Algal blooms in lakes fed by treated sewage',
              'Groundwater salinization near water plants',
              'Toxic phosphorus buildup in fish tissue',
              'Soil acidification where wastewater is reused'
            ],
            correctAnswer: 0,
            explanation: 'Detergent phosphate passed through sewage treatment into lakes, where it fertilized algae and drove eutrophication. Phosphate is not a cause of salinization or acidification, and it does not biomagnify in fish.'
          }
        ]
      }
    },
    {
      id: 'apesbiog4-water',
      type: 'text' as const,
      content: `
## The Hydrologic Cycle: Processes and Reservoirs

The water cycle is powered by **solar energy** (which evaporates water) and **gravity** (which pulls precipitation down and drives runoff and groundwater flow).

| Process | What happens |
|---|---|
| **Evaporation** | Liquid water at the surface becomes water vapor, mostly from the ocean |
| **Transpiration** | Plants draw water up from roots and release vapor through leaf stomata |
| **Evapotranspiration** | Evaporation plus transpiration from a land area |
| **Sublimation** | Ice changes directly to vapor, as on high, dry glaciers |
| **Condensation** | Vapor cools and forms cloud droplets |
| **Precipitation** | Rain, snow, sleet or hail falls to the surface |
| **Infiltration** | Water soaks from the ground surface into the soil |
| **Percolation** | Water moves down through soil and rock into aquifers (groundwater recharge) |
| **Runoff** | Water flows over the surface into streams, lakes and the ocean |

### Where Earth's water is stored

| Reservoir | Approximate share |
|---|---|
| **Ocean** (salt water) | About 97% of all water |
| **Fresh water** | About 2.5 to 3% of all water |
| ↳ Ice caps and glaciers | About 69% of fresh water |
| ↳ Groundwater | About 30% of fresh water |
| ↳ Lakes, rivers, soil moisture, atmosphere, living things | About 1% of fresh water |

Two consequences matter for the exam. First, almost all **liquid** fresh water is groundwater, so aquifers are critical drinking and irrigation supplies. Second, the lakes and rivers people see make up only a tiny fraction of the total.

### Residence time again

Water spends about **9 days** in the atmosphere on average, but thousands of years in the deep ocean and anywhere from days to tens of thousands of years in groundwater. Deep aquifers that recharge very slowly behave like a nonrenewable resource when they are pumped faster than they refill.

### The role of plants

Forests return a large share of rainfall to the air through transpiration, and that vapor falls again as rain farther inland. Clearing a large forest therefore reduces transpiration, which can lower rainfall downwind and increase runoff and erosion on the cleared land.

> 🔑 **AP Connection:** The water cycle connects the other cycles. Runoff carries nitrate and phosphate to lakes, and infiltrating water carries nitrate to groundwater. When an FRQ asks how a nutrient reaches a water body, name the water-cycle process (runoff, leaching or erosion) that moves it.
      `
    },
    {
      id: 'apesbiog4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Most of the liquid fresh water on Earth is found in',
            options: [
              'Groundwater aquifers',
              'Lakes and rivers',
              'The atmosphere',
              'Wetlands and soil moisture'
            ],
            correctAnswer: 0,
            explanation: 'About 30% of all fresh water is groundwater, while lakes, rivers, soil moisture and the atmosphere together hold only about 1%. Ice holds more fresh water than groundwater, but ice is not liquid.'
          },
          {
            question: 'A large area of rainforest is cleared and replaced with cattle pasture. Which change to the local water cycle is most likely?',
            options: [
              'Transpiration drops, so less moisture returns to the air to form rain',
              'Infiltration rises since pasture soils are looser than forest soils',
              'Evaporation falls to zero because the bare soil stays dry',
              'Runoff drops as rain soaks more quickly into exposed ground'
            ],
            correctAnswer: 0,
            explanation: 'Trees move large amounts of water from soil to air through transpiration, and losing them reduces the vapor that recycles as rain. Cleared, compacted soil absorbs less water, so runoff rises rather than falls.'
          },
          {
            question: 'On a lawn after a storm, rainwater soaks from the ground surface into the soil. This process is',
            options: [
              'Infiltration',
              'Transpiration',
              'Surface runoff',
              'Precipitation'
            ],
            correctAnswer: 0,
            explanation: 'Infiltration is the entry of water into the soil at the surface. Surface runoff is water that flows over the ground instead of soaking in, and transpiration moves water from plants to the air.'
          }
        ]
      }
    },
    {
      id: 'apesbiog4-runoff',
      type: 'text' as const,
      content: `
## Runoff, Infiltration and Rainfall Volume Calculations

### Impervious surfaces

Roads, parking lots and rooftops are **impervious**: water cannot soak through them. Replacing soil and plants with pavement changes the local water cycle in predictable ways.

| Natural land (forest, meadow) | Paved urban land |
|---|---|
| Most rain infiltrates | Most rain becomes runoff |
| Groundwater is recharged | Less groundwater recharge; streams may run low between storms |
| Runoff is slow and spread out | Runoff is fast and peaks sharply, causing flash flooding |
| Soil and roots filter pollutants | Runoff carries oil, metals, fertilizer, sediment and heat straight to streams |

Solutions include **permeable pavement**, **rain gardens**, **green roofs**, and **retention ponds** that hold water so it can infiltrate slowly.

### The key conversion: 1 mm of rain on 1 m² = 1 L

1. 1 mm of rain is a layer of water $0.001$ m deep.
2. Volume = area × depth = $1 \\text{ m}^{2} \\times 0.001 \\text{ m} = 0.001 \\text{ m}^{3}$
3. Since $1 \\text{ m}^{3} = 1{,}000$ L, $0.001 \\text{ m}^{3} = 1$ L

So: **liters of rain = millimeters of rain × square meters of area.**

### Worked Example 1: Rain on a parking lot

A 25 mm rainstorm falls on a 2,000 m² parking lot.

1. Total rain: $25 \\text{ mm} \\times 2{,}000 \\text{ m}^{2} = 50{,}000$ L
2. Suppose 95% runs off the pavement: $0.95 \\times 50{,}000 = 47{,}500$ L of runoff

### Worked Example 2: The same storm on a meadow

Suppose only 15% of the rain runs off a meadow of the same size.

1. Runoff: $0.15 \\times 50{,}000 = 7{,}500$ L
2. Paving the meadow would increase runoff by $47{,}500 - 7{,}500 = 40{,}000$ L in this one storm.
3. Percent increase: $\\dfrac{40{,}000}{7{,}500} \\times 100 \\approx 533\\%$

### Worked Example 3: Working in hectares

1 ha = 10,000 m², so 1 mm of rain on 1 ha is $1 \\times 10{,}000 = 10{,}000$ L, which is 10 m³. A 40 mm storm on a 3 ha housing development delivers:

1. Area in m²: $3 \\times 10{,}000 = 30{,}000 \\text{ m}^{2}$
2. Volume: $40 \\times 30{,}000 = 1{,}200{,}000$ L, or 1,200 m³

> 🔑 **AP Connection:** Keep the units visible. Area must be in square meters and rainfall in millimeters for the 1 mm × 1 m² = 1 L shortcut to work. Convert hectares or kilometers first.
      `
    },
    {
      id: 'apesbiog4-calc',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

**1)** How many liters of water fall on a 500 m² roof during a 20 mm rainstorm?

**2)** A 30 mm storm falls on a 2 ha shopping center parking lot, and 90% of the rain runs off. How many liters of runoff are produced?

**3)** About 2.5% of Earth's water is fresh, and about 69% of that fresh water is frozen in ice. What percent of ALL of Earth's water is ice? (two decimals)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10000', '540000', '1.725'],
        hint1: 'Liters = millimeters of rain × square meters of area.',
        hint2: 'Convert 2 ha to square meters first (1 ha = 10,000 m²), then take 90% of the total.',
        hint3: 'Multiply the two fractions: 0.025 × 0.69, then convert to a percent.',
        explanation: '1) $20 \\times 500 = 10{,}000$ L. 2) $30 \\times 20{,}000 = 600{,}000$ L of rain, and $0.90 \\times 600{,}000 = 540{,}000$ L of runoff. 3) $0.025 \\times 0.69 = 0.01725$, or about 1.73% of all water.'
      }
    }
  ]
};
