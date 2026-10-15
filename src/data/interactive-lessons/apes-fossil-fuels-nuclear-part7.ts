export const apesFossilFuelsNuclearPart7Data = {
  topicSlug: 'apes-fossil-fuels-nuclear',
  sections: [
    {
      id: 'apesfoss7-intro',
      type: 'text' as const,
      content: `
# 🛢️ Fossil Fuels & Nuclear Energy

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 The Topic on One Page |
| One Kilowatt-Hour, Four Ways |
| Calculations in This Topic |
| Final Checklist |

## 📖 The Topic on One Page

| CED topic | Big idea | Where you learned it |
|---|---|---|
| 6.3 Fuel types and uses | Wood and charcoal, peat, lignite → bituminous → anthracite; crude oil refined into specialized fuels; natural gas is mostly methane; tar sands; cogeneration | Parts 2–3 |
| 6.5 Fossil fuels | Combustion → steam → turbine → generator; extraction methods; fracking risks groundwater and VOCs | Parts 1–3 |
| 6.6 Nuclear power | U-235 fission in fuel rods; control rods and moderator; thermal pollution and radioactive waste; half-life; Three Mile Island, Chernobyl, Fukushima | Parts 1 and 4 |
| Comparing sources | Life-cycle emissions; reserves and R/P; sulfur and $SO_{2}$; misconceptions | Part 5 |

The global energy mix, net energy and conservation are covered in the Energy lessons, and air pollutants such as $SO_{2}$ and $NO_{x}$ in the Atmospheric Pollution lessons.
      `
    },
    {
      id: 'apesfoss7-chain',
      type: 'text' as const,
      content: `
## One Kilowatt-Hour, Four Ways

Every thermal plant ends with the same machinery: **steam → turbine → generator**. What differs is where the heat comes from and what it leaves behind.

| For 1 kWh of electricity | Coal | Oil | Natural gas | Nuclear |
|---|---|---|---|---|
| Heat source | Burning about 0.4 kg of bituminous coal | Burning oil (now rare for power; oil mainly fuels transport) | Burning methane | Fission of U-235 |
| Smokestack $CO_{2}$ | About 1,000 g | About 840 g | About 490 g | None |
| Life-cycle $CO_{2}$-eq | About 820 g (median) | n/a | About 490 g | About 12 g |
| Other outputs | $SO_{2}$, $NO_{x}$, PM, mercury, ash | $NO_{x}$, $SO_{2}$ | $NO_{x}$; methane leaks upstream | Thermal pollution, spent fuel |
| Extraction | Strip, mountaintop and underground mining | Drilling, spills, tar sands | Fracking | Uranium mining and milling |

(Part 1's ~1,000 g for coal describes a typical older plant; the IPCC's 820 g median reflects a range of plants, many of them newer and more efficient. Either figure puts coal far above every other source.)

### Worked Example: A Two-Source Grid (illustrative data)

A city uses **2 billion kWh** a year: 60% from gas (490 g/kWh) and 40% from coal (1,000 g/kWh).

$$\\text{Gas: } 1.2 \\times 10^{9} \\times 490 = 5.88 \\times 10^{11}\\ \\text{g}$$
$$\\text{Coal: } 0.8 \\times 10^{9} \\times 1{,}000 = 8.0 \\times 10^{11}\\ \\text{g}$$
$$\\text{Total} = 1.388 \\times 10^{12}\\ \\text{g} \\approx 1.39 \\times 10^{6}\\ \\text{t of } CO_{2}$$

If the coal share is replaced by nuclear, the total falls to the gas portion alone, $5.88 \\times 10^{5}$ t, a cut of about 58%.
      `
    },
    {
      id: 'apesfoss7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which feature do coal, natural gas and nuclear power plants all share?',
            options: [
              'Heat boils water, and the steam spins a turbine connected to a generator',
              'Fuel is burned with oxygen, releasing carbon dioxide and water vapor',
              'Electricity is made directly from the fuel without any moving parts',
              'Spent fuel must be stored for thousands of years in sealed casks'
            ],
            correctAnswer: 0,
            explanation: 'All three are thermal plants that use heat to make steam for a turbine and generator. Only the fossil-fuel plants burn fuel, and only the nuclear plant produces spent fuel needing long-term storage.'
          },
          {
            question: 'Which coal grade would a utility choose to get the most energy per tonne shipped?',
            options: [
              'Anthracite',
              'Lignite',
              'Sub-bituminous coal',
              'Peat'
            ],
            correctAnswer: 0,
            explanation: 'Anthracite has the highest carbon content and the least moisture, so it releases the most energy per tonne. Lignite and peat are wet and low in carbon.'
          },
          {
            question: 'The CED lists two consequences of hydraulic fracturing. Which pair is it?',
            options: [
              'Tainted groundwater and VOC release',
              'Acid mine drainage and land subsidence',
              'Coal ash spills and mercury emissions',
              'Thermal pollution and spent fuel waste'
            ],
            correctAnswer: 0,
            explanation: 'Fracking can contaminate groundwater through faulty wells and spills and releases volatile organic compounds. The other pairs belong to coal mining, coal burning and nuclear power.'
          }
        ]
      }
    },
    {
      id: 'apesfoss7-calcs',
      type: 'text' as const,
      content: `
## Calculations in This Topic

| Skill | Formula or fact | Part |
|---|---|---|
| Efficiency chain | Multiply step efficiencies as decimals | 2 |
| Fuel needed | Energy wanted ÷ efficiency ÷ energy per kg | 2 |
| Energy from power | MW × hours (× capacity factor) = MWh; 1 MWh = 1,000 kWh | 2, 6 |
| Unit conversions | 1 kWh = 3.6 MJ ≈ 3,412 BTU; 1 barrel ≈ 159 L; 1 t = $10^{6}$ g | 2, 3 |
| Combustion mass | C → $CO_{2}$ × 44/12; $CH_{4}$ → $CO_{2}$ × 44/16; S → $SO_{2}$ × 2 | 2, 3, 5 |
| Methane as $CO_{2}$-eq | Mass × about 80 (20 yr) or about 30 (100 yr) | 3 |
| Half-life | Remaining = start × (1/2)ⁿ, n = time ÷ half-life | 4, 6 |
| R/P ratio | Reserves ÷ annual production | 5 |
| Emissions | kWh × g per kWh, then convert to tonnes | 5, 6, 7 |

## Final Checklist

- Can you order the coal grades and explain **why** energy content rises with grade?
- Can you trace **fuel → steam → turbine → generator** and say where the waste heat goes?
- Can you explain fractional distillation, tar sands extraction and each step of fracking?
- Can you give the **two CED fracking consequences** and the cause of induced earthquakes?
- Can you name the parts of a reactor and the job of each?
- Can you solve a **half-life** problem forward (amount left) and backward (time or half-life)?
- Can you compare the **three accidents** by cause and consequence?
- Can you evaluate natural gas as a "bridge fuel," with data and a trade-off?
      `
    },
    {
      id: 'apesfoss7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Mixed Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Using a power plant\'s waste heat to warm nearby buildings is called ___',
            options: ['cogeneration', 'enrichment', 'fractionation', 'reclamation']
          },
          {
            label: 'The reactor part that slows fast neutrons so they split U-235 more easily is the ___',
            options: ['moderator', 'control rod', 'containment dome', 'condenser']
          },
          {
            label: 'The 1986 accident in which a reactor with no containment dome exploded and burned was at ___',
            options: ['Chernobyl', 'Three Mile Island', 'Fukushima Daiichi', 'Deepwater Horizon']
          }
        ],
        correctAnswers: ['cogeneration', 'moderator', 'Chernobyl'],
        hint1: 'One fuel, two useful products: heat and electricity.',
        hint2: 'Control rods absorb neutrons; this part only slows them down.',
        hint3: 'It was in Ukraine, then part of the Soviet Union.',
        explanation: 'Capturing waste heat for use is cogeneration. The moderator, usually water, slows neutrons. Chernobyl, in 1986, had no containment structure.'
      }
    },
    {
      id: 'apesfoss7-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only. (Illustrative data.)

1) A plant is 40% efficient, and transmission delivers 95%. What percent of the fuel's energy reaches customers?

2) A 120 g sample of strontium-90 (half-life 29 years) is stored for 87 years. How many grams remain?

3) A 300 MW gas plant runs 6,000 hours in a year and emits 490 g of $CO_{2}$ per kWh. How many tonnes of $CO_{2}$ does it emit? (1 MW = 1,000 kW.)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['38', '15', '882000'],
        hint1: '0.40 × 0.95, then convert to a percent.',
        hint2: '87 ÷ 29 = 3 half-lives.',
        hint3: 'kWh = 300,000 kW × 6,000 h. Multiply by 490 g, then divide by 1,000,000 g per tonne.',
        explanation: '1) 0.40 × 0.95 = 0.38 = 38 percent. 2) 120 → 60 → 30 → 15 g. 3) 1.8 × 10^9 kWh × 490 g = 8.82 × 10^11 g = 882,000 t.'
      }
    },
    {
      id: 'apesfoss7-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Some call natural gas a "bridge fuel" between coal and renewables. Which evidence best supports that claim?',
            options: [
              'Gas plants can ramp output up and down quickly to back up wind and solar',
              'Gas releases no carbon dioxide when it is burned in a combined-cycle plant',
              'Gas extraction by fracking uses no water and causes no habitat disturbance',
              'Gas reserves are unlimited, so no transition away from gas will be needed'
            ],
            correctAnswer: 0,
            explanation: 'Gas plants cut emissions relative to coal and can quickly adjust output when wind and solar vary, which is the bridge argument. Gas still emits carbon dioxide, and fracking has water and habitat costs.'
          },
          {
            question: 'Which statement best compares nuclear power with coal power on environmental grounds?',
            options: [
              'Nuclear avoids air pollutants and most $CO_{2}$ but leaves long-lived waste',
              'Nuclear and coal plants both release large amounts of $SO_{2}$ and mercury',
              'Coal plants make radioactive spent fuel, but nuclear plants make none',
              'Nuclear plants need no cooling water, unlike coal plants beside rivers'
            ],
            correctAnswer: 0,
            explanation: 'Fission releases no combustion pollutants, and life-cycle emissions are about 12 g per kWh versus about 820 for coal, but spent fuel stays hazardous for thousands of years. Both kinds of plant need cooling water.'
          },
          {
            question: 'A town near a planned fracking site wants to protect its drinking water. Which requirement would most directly address the main risk the CED identifies?',
            options: [
              'Testing well casings and nearby groundwater',
              'Requiring the gas be burned in high-efficiency plants',
              'Limiting the hours drilling rigs may run each day',
              'Planting trees around each completed well pad'
            ],
            correctAnswer: 0,
            explanation: 'Groundwater contamination is a CED-listed fracking risk, and it usually occurs through failed casing or cement or surface spills. Testing the casing and monitoring wells targets that pathway directly.'
          }
        ]
      }
    },
    {
      id: 'apesfoss7-summary',
      type: 'text' as const,
      content: `
## Topic Summary

| Theme | Takeaway |
|---|---|
| Formation and grade | Fossil fuels are ancient biomass; deeper burial → higher-grade coal with more energy |
| Making electricity | All thermal plants: heat → steam → turbine → generator; about two-thirds lost as waste heat |
| Oil and gas | Refined by boiling point; tar sands and fracking expand supply at environmental cost |
| Natural gas | Cleanest-burning fossil fuel, but methane leaks erode its advantage |
| Nuclear | Fission of U-235; no air pollutants from the reaction; thermal pollution, waste, accident risk; half-life math |
| Comparing | Use life-cycle data and name a trade-off for every source |

You have now finished Fossil Fuels & Nuclear Energy. The Renewable Energy lessons pick up the alternatives: solar, wind, hydroelectric, geothermal, biomass and hydrogen.
      `
    }
  ]
};
