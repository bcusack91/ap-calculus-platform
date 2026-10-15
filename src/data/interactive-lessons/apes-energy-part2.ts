export const apesEnergyPart2Data = {
  topicSlug: 'apes-energy',
  sections: [
    {
      id: 'apesener2-intro',
      type: 'text' as const,
      content: `
# ⚡ Energy Concepts & Resources

**Part 2 of 7 — Global Energy Use: Who Uses What, and Why**

---

| Section |
|---------|
| 📖 Renewable, Nonrenewable and Nondepletable |
| Energy Use Is Not Evenly Shared |
| The Energy Ladder |
| Where the Resources Are |
| What Drives the Choice of Fuel |

> 🔑 **Key Concept:** Part 1 gave the global energy mix. This part asks who uses that energy, why use differs so much between countries, and why each country leans on the sources it does. It covers CED topics 6.1, 6.2 and 6.4, with per-capita and percent-change calculations.
      `
    },
    {
      id: 'apesener2-classify',
      type: 'text' as const,
      content: `
## 📖 Renewable, Nonrenewable and Nondepletable

The CED sorts energy resources by whether they are replaced on a human time scale.

| Category | Definition | Examples |
|---|---|---|
| **Nonrenewable** | Exists in a fixed amount; forms over millions of years, far slower than we use it | Coal, oil, natural gas, uranium |
| **Renewable, depletable** | Replenished naturally, but can run out locally if used faster than it regrows | Wood, charcoal, crops grown for biofuels and other biomass |
| **Renewable, nondepletable** | Not used up no matter how much we capture | Sunlight, wind, tides, flowing water |

Two points trip students up:

- **Uranium is nonrenewable.** Nuclear power is low-carbon, but its fuel is a mined, finite ore.
- **Wood is renewable only if harvested sustainably.** A forest cut faster than it regrows is being depleted, just like a coal seam.

## Energy Use Is Not Evenly Shared

Fossil fuels supply most of the world's energy (Part 1), but the amount each person uses varies enormously.

| Measure | Approximate value (recent years) |
|---|---|
| World primary energy use | About 620 EJ per year (1 EJ = $10^{18}$ J) |
| World population | About 8.0 billion |
| U.S. primary energy use | About 99 EJ per year (about 94 quadrillion BTU) |
| U.S. population | About 335 million |

### Worked Example 1: Energy Per Person

Per-capita use = total use ÷ population.

$$\\text{World: } \\frac{620 \\times 10^{18}\\ \\text{J}}{8.0 \\times 10^{9}\\ \\text{people}} = 7.75 \\times 10^{10}\\ \\text{J} \\approx 78\\ \\text{GJ per person}$$

$$\\text{U.S.: } \\frac{99 \\times 10^{18}\\ \\text{J}}{3.35 \\times 10^{8}\\ \\text{people}} = 2.96 \\times 10^{11}\\ \\text{J} \\approx 296\\ \\text{GJ per person}$$

$$\\frac{296}{78} \\approx 3.8$$

The average American uses roughly **four times** the world average. Put another way, the United States has about 4% of the world's people and uses about 16% of its energy:

$$\\frac{335 \\times 10^{6}}{8.0 \\times 10^{9}} \\times 100 \\approx 4\\% \\qquad \\frac{99}{620} \\times 100 \\approx 16\\%$$

> 🔑 **AP Connection:** The CED states that energy use is **not evenly distributed between developed and developing countries**. When an FRQ gives total energy and population, divide to get per-capita use before you compare countries: a large country can have a large total and a small per-person share.
      `
    },
    {
      id: 'apesener2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A region burns firewood faster than its forests regrow. How should its firewood be classified?',
            options: [
              'Renewable, but being depleted by overuse',
              'Nonrenewable, because wood forms over millions of years',
              'Nondepletable, because trees are powered by sunlight',
              'Nonrenewable, because burning wood releases $CO_{2}$'
            ],
            correctAnswer: 0,
            explanation: 'Wood regrows on a human time scale, so it is renewable, but a renewable resource can still be depleted when harvest outpaces regrowth. Releasing carbon dioxide does not decide whether a resource is renewable.'
          },
          {
            question: 'Country X uses more total energy than Country Y but has five times Country Y\'s population. What can you conclude?',
            options: [
              'Country X uses more energy per person than Country Y',
              'Country X relies more heavily on fossil fuels than Country Y',
              'Nothing about per-person use unless the energy amounts are known',
              'Country X uses less energy per person than Country Y'
            ],
            correctAnswer: 2,
            explanation: 'Per-person use depends on the ratio of total energy to population. If X used only slightly more energy, its per-person use is lower; if it used ten times as much, it is higher, so the totals are needed.'
          },
          {
            question: 'Which resource is classified as nonrenewable even though using it emits almost no $CO_{2}$?',
            options: [
              'Uranium',
              'Geothermal heat',
              'Biomass',
              'Natural gas'
            ],
            correctAnswer: 0,
            explanation: 'Uranium is a finite, mined ore, so nuclear fuel is nonrenewable even though fission releases no carbon dioxide. Natural gas is nonrenewable but does emit carbon dioxide; biomass and geothermal are renewable.'
          }
        ]
      }
    },
    {
      id: 'apesener2-ladder',
      type: 'text' as const,
      content: `
## The Energy Ladder

As households and countries become wealthier, they tend to climb an **energy ladder**: from fuels that are cheap to obtain but inefficient and smoky, to fuels that are cleaner and more convenient but need infrastructure.

| Rung | Typical fuels | Who uses them | Trade-offs |
|---|---|---|---|
| **Traditional biomass** | Wood, charcoal, animal dung, crop residues | Rural households in low-income countries | Free or cheap; smoky indoor air; drives local deforestation; hours spent gathering fuel |
| **Transition fuels** | Kerosene, liquefied petroleum gas (LPG), coal | Growing cities in developing countries | Cleaner and faster to cook with; must be bought |
| **Modern energy** | Electricity, natural gas, gasoline and diesel | Developed countries | Convenient and clean at the point of use; emissions move to power plants and tailpipes |

More than **2 billion people** still cook with traditional biomass or other polluting fuels. The smoke is a major cause of **indoor air pollution** (covered in the Atmospheric Pollution lessons).

The CED adds two trends:

1. **As a country develops, its use of fossil fuels rises.** Industry, cars and electric grids are built mostly on fossil fuels.
2. **As the world industrializes, total energy demand rises.**

So economic growth in Asia and Africa is expected to raise global energy use, and the fuel mix those countries build now will shape emissions for decades.

### Charcoal: a costly step

Charcoal is wood heated with little oxygen. It burns hotter and with less smoke than wood and is easy to carry to city markets, but making it loses a large share of the wood's original energy. Producing charcoal for growing cities is a major driver of deforestation in parts of sub-Saharan Africa and in Haiti.

### Worked Example 2: Percent Change in a Developing Country (illustrative data)

A country's energy use rose from **2.4 EJ** in 2000 to **6.0 EJ** in 2020.

$$\\text{Percent change} = \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100 = \\frac{6.0 - 2.4}{2.4} \\times 100 = 150\\%$$

Over the same years its population grew from 40 to 50 million, so per-capita use went from

$$\\frac{2.4 \\times 10^{18}}{4.0 \\times 10^{7}} = 60\\ \\text{GJ} \\quad\\text{to}\\quad \\frac{6.0 \\times 10^{18}}{5.0 \\times 10^{7}} = 120\\ \\text{GJ}$$

Per-capita use doubled, so most of the growth came from rising use per person, not from population growth.
      `
    },
    {
      id: 'apesener2-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only.

1) A country of 50 million people uses $4.0 \\times 10^{18}$ J of energy per year. What is its per-capita use, in GJ? (1 GJ = $10^{9}$ J)

2) A city's annual electricity use rises from 800 GWh to 1,000 GWh. What is the percent increase?

3) A country has 2% of the world's population and uses 6% of the world's energy. How many times the world per-capita average does each of its residents use?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['80', '25', '3'],
        hint1: 'Divide the energy by 5 × 10^7 people, then convert J to GJ.',
        hint2: '(1,000 − 800) ÷ 800 × 100.',
        hint3: 'Compare its share of energy to its share of people.',
        explanation: '1) 4.0 × 10^18 ÷ 5.0 × 10^7 = 8.0 × 10^10 J = 80 GJ. 2) 200 ÷ 800 × 100 = 25 percent. 3) 6 ÷ 2 = 3 times the average.'
      }
    },
    {
      id: 'apesener2-distribution',
      type: 'text' as const,
      content: `
## Where the Resources Are

The CED states that energy resources are **not distributed evenly**, and that where they are depends on each region's **geologic history** (for fossil fuels and ores) or its **geography and climate** (for renewables).

| Resource | What controls its location | Regions with large supplies |
|---|---|---|
| **Oil** | Ancient marine sediments buried and heated in sedimentary basins | Middle East (Saudi Arabia, Iran, Iraq), Venezuela, Canada's oil sands, Russia, the United States |
| **Natural gas** | Same source rocks as oil, often deeper or hotter | Russia, Iran, Qatar, the United States (much from fracked shale) |
| **Coal** | Ancient swamp forests buried in sedimentary rock | United States, Russia, Australia, China, India |
| **Uranium** | Ore deposits in certain rock formations | Kazakhstan, Canada, Australia |
| **Solar** | Sunshine and clear skies; strongest in subtropical deserts | North Africa, the Middle East, Australia, the U.S. Southwest, Chile's Atacama |
| **Wind** | Steady winds along coasts, open plains, mountain passes and offshore | Great Plains of the U.S., the North Sea |
| **Geothermal** | Heat near plate boundaries and hot spots | Iceland, New Zealand, Indonesia, the western U.S. |
| **Hydroelectric** | Large rivers with steep drops and high rainfall | China, Brazil, Canada, Norway |

Because supplies are uneven, energy is traded across oceans in tankers and pipelines, and countries without their own oil or gas depend on imports. Renewables reduce that dependence, but only where the local sun, wind or water is strong.

## What Drives the Choice of Fuel

The CED names three factors that decide which energy sources people use: **availability, price and government regulation**.

| Factor | Example |
|---|---|
| **Availability** | Iceland heats most homes with geothermal hot water; Norway gets most of its electricity from hydropower |
| **Price** | Cheap natural gas from fracked shale in the 2010s helped push coal's share of U.S. electricity from about 50% in 2005 to about 16% by 2023 |
| **Regulation** | Air-quality rules, emissions limits and renewable-energy mandates raise the cost of some sources and reward others |

### Worked Example 3: A Shift Driven by Price

U.S. coal-fired generation fell from about **2,010 billion kWh** in 2005 to about **675 billion kWh** in 2023.

$$\\frac{675 - 2{,}010}{2{,}010} \\times 100 \\approx -66\\%$$

Coal generation fell by about two-thirds in under two decades, mostly replaced by natural gas, wind and solar.

> 🔑 **AP Connection:** When asked why a country uses a particular source, name a specific factor and connect it: "Iceland uses geothermal energy **because** it sits on a divergent plate boundary, so hot rock lies close to the surface." A factor with no connection earns no point.
      `
    },
    {
      id: 'apesener2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why do Saudi Arabia and Venezuela hold large oil reserves while many other countries hold almost none?',
            options: [
              'Their geologic history buried marine sediments in deep sedimentary basins',
              'Their hot climates speed the conversion of modern plants into crude oil',
              'They sit on plate boundaries where magma pushes oil toward the surface',
              'Their governments have restricted drilling, so their oil was never used'
            ],
            correctAnswer: 0,
            explanation: 'Oil forms from marine organisms buried in sedimentary basins and slowly heated over millions of years, so reserves follow geologic history. Present-day climate and volcanic activity do not create oil deposits.'
          },
          {
            question: 'As a low-income country industrializes, which change in its energy use is most likely?',
            options: [
              'Its total use falls as efficiency improves',
              'Traditional biomass use rises sharply',
              'Its use of fossil fuels per person rises',
              'Its energy use shifts entirely to solar'
            ],
            correctAnswer: 2,
            explanation: 'The CED states that as developing countries develop, their reliance on fossil fuels increases, because factories, vehicles and electric grids run largely on them. Households tend to move away from traditional biomass as incomes rise.'
          },
          {
            question: 'A rural family switches from cooking over a wood fire to cooking with liquefied petroleum gas (LPG). Which outcome is most likely?',
            options: [
              'Cleaner indoor air, but it must now buy a fossil fuel',
              'More indoor smoke, as LPG burns with a sootier flame than wood does',
              'Faster local deforestation, as LPG is refined from wood charcoal',
              'Lower fuel costs, as LPG is gathered locally at no charge like wood'
            ],
            correctAnswer: 0,
            explanation: 'Moving up the energy ladder to LPG cuts indoor smoke and the time spent gathering wood, but LPG is a purchased fossil fuel that emits carbon dioxide when burned. LPG comes from oil and gas processing, not from wood.'
          }
        ]
      }
    },
    {
      id: 'apesener2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Factor** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Iceland heats most of its homes with hot water from underground. The main factor is ___',
            options: ['Availability of a local resource', 'A low global price for oil', 'A national ban on fossil fuels', 'High per-capita income']
          },
          {
            label: 'Cheap shale gas led many U.S. utilities to retire coal plants. The main factor is ___',
            options: ['Price of competing fuels', 'Availability of sunlight', 'Geothermal heat flow', 'Population growth']
          },
          {
            label: 'A household in a rural area with no grid cooks with dung and crop residues. It is on the ___ rung of the energy ladder',
            options: ['Traditional biomass', 'Transition fuel', 'Modern energy', 'Nondepletable']
          }
        ],
        correctAnswers: ['Availability of a local resource', 'Price of competing fuels', 'Traditional biomass'],
        hint1: 'Iceland sits on a plate boundary.',
        hint2: 'Utilities chose the cheaper fuel.',
        hint3: 'Dung and residues are the lowest rung.',
        explanation: 'Geothermal heat in Iceland is a matter of local availability. The coal-to-gas switch was driven by price. Dung and crop residues are traditional biomass.'
      }
    },
    {
      id: 'apesener2-summary',
      type: 'text' as const,
      content: `
## Part 2 Summary

| Idea | Key fact |
|---|---|
| Nonrenewable | Fixed amount, formed over millions of years: coal, oil, gas, uranium |
| Renewable | Replenished on a human time scale; biomass is depletable if overused, sun and wind are nondepletable |
| Uneven use | U.S. per-capita use is roughly 4 times the world average; about 4% of people use about 16% of the energy |
| Development | As countries develop, fossil fuel use rises; as the world industrializes, demand rises |
| Energy ladder | Traditional biomass → kerosene, LPG, coal → electricity and natural gas |
| Distribution | Fossil fuels follow geologic history; renewables follow geography and climate |
| Fuel choice | Availability, price and government regulation |
| Calculations | Per capita = total ÷ population; percent change = (new − old) ÷ old × 100 |

**Next:** Part 3 asks how much energy it takes to get energy: net energy, EROI and cogeneration.
      `
    }
  ]
};
