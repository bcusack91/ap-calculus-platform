export const apesBiogeochemicalCyclesPart2Data = {
  topicSlug: 'apes-biogeochemical-cycles',
  sections: [
    {
      id: 'apesbiog2-intro',
      type: 'text' as const,
      content: `
# 🔄 Biogeochemical Cycles

**Part 2 of 7 — The Carbon Cycle in Depth**

---

| Section |
|---------|
| Carbon Reservoirs: Fast and Slow |
| Sources, Sinks and Residence Time |
| Carbon Unit Conversions |
| The Ocean Sink and Ocean Acidification |

> 🔑 **Key Concept:** Part 1 listed the processes that move carbon. This part asks **where** the carbon sits, **how long** it stays there, and **how much** moves. That is the language of reservoirs, fluxes, sources and sinks, and it is how the AP exam frames every carbon question.
      `
    },
    {
      id: 'apesbiog2-reservoirs',
      type: 'text' as const,
      content: `
## Carbon Reservoirs: Fast and Slow

A **reservoir** (or pool) is a place where carbon is stored. A **flux** is the rate at which carbon moves between reservoirs, usually measured in gigatonnes of carbon per year (Gt C/yr). One gigatonne is one billion metric tons.

| Reservoir | Form of the carbon | Approximate size | Exchange speed |
|---|---|---|---|
| **Sedimentary rock** | Limestone $(CaCO_{3})$ from shells; organic carbon in shale | Tens of millions of Gt C, by far the largest surface pool | Slow: millions of years |
| **Ocean** | Mostly dissolved inorganic carbon $(HCO_{3}^{-})$ in the deep ocean | About 38,000 Gt C | Surface: years. Deep water: centuries to about 1,000 years |
| **Fossil fuels** | Coal, oil and natural gas formed from buried organisms | A few thousand Gt C | Slow to form; humans release it quickly |
| **Soil** | Dead organic matter, humus, microbes, permafrost | Roughly 1,500 to 2,400 Gt C | Years to centuries |
| **Atmosphere** | $CO_{2}$ and a small amount of $CH_{4}$ | About 890 Gt C | Fast: years |
| **Living biomass** | Mostly wood in forests | About 450 to 650 Gt C | Fast: years to centuries |

### Two cycles running at different speeds

- **The fast carbon cycle** moves carbon among the atmosphere, living things, soil and the surface ocean through photosynthesis, cellular respiration, decomposition and gas exchange at the ocean surface. Large amounts move every year, but these flows roughly balance each other in an undisturbed system.
- **The slow carbon cycle** moves carbon into and out of rock. Shells and organic matter are buried in sediments and become sedimentary rock or fossil fuels. Carbon returns to the fast cycle only through weathering of exposed rock and volcanic outgassing, over millions of years.

Burning fossil fuels short-circuits the slow cycle. Carbon that was out of circulation for millions to hundreds of millions of years enters the atmosphere in decades, much faster than weathering, sedimentation and burial can move it back.
      `
    },
    {
      id: 'apesbiog2-sources-sinks',
      type: 'text' as const,
      content: `
## Sources, Sinks and Residence Time

A **carbon source** releases more carbon than it absorbs. A **carbon sink** absorbs more carbon than it releases. The label describes the **net** flow over a period of time, not whether a single process happens.

| Usually a source | Usually a sink |
|---|---|
| Combustion of fossil fuels | Photosynthesis in growing forests |
| Deforestation and burning of biomass | Ocean absorption of $CO_{2}$ |
| Cellular respiration and decomposition | Burial of organic matter in wetlands and sediments |
| Volcanic outgassing | Formation of limestone from shells |
| Thawing permafrost | Soils that are gaining organic matter |

The same reservoir can switch roles. A young forest that is gaining wood is a sink. If drought, insects or wildfire kill the trees, the same forest releases more than it absorbs and becomes a source.

### Residence time

**Residence time** is the average time a unit of carbon stays in a reservoir. When inflow and outflow are balanced:

$$\\text{residence time} = \\frac{\\text{amount in reservoir}}{\\text{rate of flow out}}$$

### Worked Example: Residence Time of Carbon in the Atmosphere

Use round numbers. The atmosphere holds about 890 Gt C. Photosynthesis and ocean gas exchange together remove roughly 200 Gt C from it each year (and respiration and the ocean return a similar amount).

1. Write the formula: residence time = amount ÷ outflow.
2. Substitute: $\\dfrac{890 \\text{ Gt C}}{200 \\text{ Gt C/yr}}$
3. Divide: $\\approx 4.5$ years.

A typical carbon atom stays in the air only a few years before a plant or the ocean takes it up. Compare a fossil fuel deposit, where carbon stays for **millions** of years. Short residence times mark fast reservoirs; long residence times mark slow ones.

> 🔑 **AP Connection:** A short residence time does **not** mean extra $CO_{2}$ disappears in 4.5 years. The air constantly trades carbon with plants and the surface ocean, so individual atoms swap places, but the **excess** carbon added by fossil fuels takes centuries or longer to be fully drawn back into the slow reservoirs.
      `
    },
    {
      id: 'apesbiog2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following reservoirs holds the most carbon?',
            options: [
              'Sedimentary rock',
              'The deep ocean waters',
              'Soils and permafrost',
              'Coal and oil deposits'
            ],
            correctAnswer: 0,
            explanation: 'Sedimentary rock such as limestone stores tens of millions of gigatonnes of carbon, far more than any other pool. The ocean is a distant second at about 38,000 Gt C, and soils and fossil fuels hold less than that.'
          },
          {
            question: 'A forested region absorbs 120 million tonnes of carbon per year through photosynthesis and releases 135 million tonnes per year through respiration, decomposition and wildfire. For that year, the region is',
            options: [
              'A net carbon source to the atmosphere',
              'A net carbon sink for the atmosphere',
              'Carbon neutral, since both flows occur',
              'A sink, because its biomass is large'
            ],
            correctAnswer: 0,
            explanation: 'Outflow (135) exceeds uptake (120), so the region adds a net 15 million tonnes of carbon to the air and is a source. Source or sink depends on the net balance, not on whether photosynthesis happens or how much wood is standing.'
          },
          {
            question: 'Why does burning fossil fuels raise atmospheric $CO_{2}$ even though plants and the ocean constantly exchange carbon with the air?',
            options: [
              'It shifts carbon locked away for millions of years into the fast cycle',
              'It creates new carbon atoms that the biosphere has never stored',
              'It halts photosynthesis in the forests nearest to power plants',
              'It replaces the carbon dioxide released by natural respiration'
            ],
            correctAnswer: 0,
            explanation: 'Fossil fuels are a slow reservoir, so combustion adds carbon to the fast cycle faster than weathering and burial can remove it. Combustion rearranges existing atoms rather than creating new ones, and it adds to natural respiration rather than replacing it.'
          }
        ]
      }
    },
    {
      id: 'apesbiog2-conversions',
      type: 'text' as const,
      content: `
## Carbon Unit Conversions

Data sets report carbon in three different ways. You must be able to move between them.

| Unit | What it counts | Typical use |
|---|---|---|
| Gt C | Mass of carbon atoms only | Reservoir sizes, carbon cycle diagrams |
| Gt $CO_{2}$ | Mass of whole $CO_{2}$ molecules | National and global emissions reports |
| ppm $CO_{2}$ | Molecules of $CO_{2}$ per million molecules of air | Atmospheric concentration (the Keeling curve) |

### Conversion 1: carbon to carbon dioxide

A carbon atom has a mass of 12. A $CO_{2}$ molecule has a mass of $12 + 16 + 16 = 44$. So every 12 tonnes of carbon becomes 44 tonnes of $CO_{2}$ when it burns.

$$\\text{Gt } CO_{2} = \\text{Gt C} \\times \\frac{44}{12} \\qquad \\text{Gt C} = \\text{Gt } CO_{2} \\times \\frac{12}{44}$$

**Worked Example:** A country burns fuel containing 3 Gt C in one year.

1. Multiply by $\\frac{44}{12}$: $3 \\times \\frac{44}{12} = \\frac{132}{12}$
2. Simplify: $= 11$ Gt $CO_{2}$

**Worked Example (reverse):** A report lists emissions of 22 Gt $CO_{2}$.

1. Multiply by $\\frac{12}{44}$: $22 \\times \\frac{12}{44} = \\frac{264}{44}$
2. Simplify: $= 6$ Gt C

Check the direction: the $CO_{2}$ number must always be **larger** (about 3.67 times larger) because it includes the oxygen.

### Conversion 2: concentration to mass

Raising the whole atmosphere by 1 ppm of $CO_{2}$ takes about **2.12 Gt C**.

**Worked Example:** Atmospheric $CO_{2}$ rises 2.5 ppm in one year.

1. Convert ppm to carbon: $2.5 \\times 2.12 = 5.3$ Gt C
2. Convert to $CO_{2}$ if needed: $5.3 \\times \\frac{44}{12} \\approx 19.4$ Gt $CO_{2}$

### Conversion 3: percent change since pre-industrial times

$$\\text{percent change} = \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100$$

**Worked Example:** $CO_{2}$ rose from about 280 ppm before the Industrial Revolution to about 420 ppm.

1. Change: $420 - 280 = 140$ ppm
2. Divide by the **original** value: $\\dfrac{140}{280} = 0.50$
3. Multiply by 100: a **50% increase**

### Putting it together: where did the carbon go?

Suppose human activity releases 11 Gt C in a year, and the atmosphere gains 2.5 ppm (5.3 Gt C, from above).

1. Fraction that stayed in the air: $\\dfrac{5.3}{11} \\approx 0.48$, or about **48%**
2. The rest, about 52%, was absorbed by the ocean and by land plants and soils.

> 🔑 **AP Connection:** The most common conversion error is dividing by the new value instead of the old one in a percent change, or using $\\frac{12}{44}$ when you meant $\\frac{44}{12}$. Write the units at every step and ask whether the answer should get bigger or smaller.
      `
    },
    {
      id: 'apesbiog2-calc',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

**1)** A coal-fired power plant releases 4 million tonnes of carbon per year. How many million tonnes of $CO_{2}$ is that? (one decimal)

**2)** Atmospheric $CO_{2}$ rises by 3 ppm. How many Gt C were added to the atmosphere? (two decimals)

**3)** Atmospheric $CO_{2}$ was about 315 ppm when continuous measurements began in 1958. What is the percent increase to 420 ppm? (one decimal)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['14.7', '6.36', '33.3'],
        hint1: 'Carbon to carbon dioxide: multiply by 44 and divide by 12.',
        hint2: 'Each 1 ppm of $CO_{2}$ corresponds to about 2.12 Gt C.',
        hint3: 'Subtract 315 from 420, then divide by the starting value of 315.',
        explanation: '1) $4 \\times \\frac{44}{12} \\approx 14.7$ million tonnes of $CO_{2}$. 2) $3 \\times 2.12 = 6.36$ Gt C. 3) $\\frac{420 - 315}{315} \\times 100 = \\frac{105}{315} \\times 100 \\approx 33.3\\%$.'
      }
    },
    {
      id: 'apesbiog2-ocean',
      type: 'text' as const,
      content: `
## The Ocean Sink and Ocean Acidification

The ocean absorbs about **a quarter** of the $CO_{2}$ that humans emit each year. That slows climate change, but it changes ocean chemistry.

### The chemistry, step by step

1. $CO_{2}$ dissolves in seawater and reacts with water to form carbonic acid: $CO_{2} + H_{2}O \\rightarrow H_{2}CO_{3}$
2. Carbonic acid releases hydrogen ions: $H_{2}CO_{3} \\rightarrow H^{+} + HCO_{3}^{-}$
3. More $H^{+}$ means **lower pH**. Surface ocean pH has dropped by about 0.1 units since pre-industrial times. Because the pH scale is logarithmic, that is roughly a 25 to 30% increase in hydrogen ion concentration.
4. Many of the extra $H^{+}$ ions combine with carbonate ions $(CO_{3}^{2-})$ to form bicarbonate. This lowers the supply of **carbonate ions**, which corals, clams, oysters and some plankton need to build calcium carbonate $(CaCO_{3})$ shells and skeletons.

### What controls how much the ocean can absorb

| Factor | Effect on $CO_{2}$ uptake |
|---|---|
| **Cold water** | Holds more dissolved gas, so polar seas absorb more $CO_{2}$ |
| **Warm water** | Holds less dissolved gas, so a warming ocean absorbs less |
| **Phytoplankton photosynthesis** | Converts dissolved $CO_{2}$ to organic carbon near the surface |
| **Sinking organic matter** | Carries carbon to the deep ocean (the "biological pump") |
| **Ocean mixing** | Surface water saturates quickly; the deep ocean takes up carbon only as water slowly overturns |

> 🔑 **AP Connection:** Ocean acidification links Unit 1 (carbon cycle) to Unit 9 (global change). If an FRQ asks how increased $CO_{2}$ harms coral reefs, give **both** mechanisms: lower pH reduces the carbonate ions available for building skeletons, and warming causes coral bleaching.
      `
    },
    {
      id: 'apesbiog2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'As the ocean absorbs more $CO_{2}$, which change makes it harder for corals and shellfish to build their skeletons?',
            options: [
              'Less carbonate ion in seawater',
              'Seawater pH rising toward basic',
              'More dissolved oxygen near reefs',
              'Calcium ions leaving the seawater'
            ],
            correctAnswer: 0,
            explanation: 'Extra hydrogen ions from carbonic acid combine with carbonate ions, leaving less carbonate for building calcium carbonate. Absorbing $CO_{2}$ lowers pH rather than raising it, and calcium remains plentiful in seawater.'
          },
          {
            question: 'In one year, human activity releases 11 Gt C and atmospheric $CO_{2}$ rises by 2.5 ppm. Using 1 ppm ≈ 2.12 Gt C, about what fraction of the emitted carbon stayed in the atmosphere?',
            options: [
              'About 48 percent',
              'About 23 percent',
              'About 52 percent',
              'About 13 percent'
            ],
            correctAnswer: 0,
            explanation: 'The rise is $2.5 \\times 2.12 = 5.3$ Gt C, and $5.3 \\div 11 \\approx 0.48$. Dividing 2.5 by 11 skips the ppm conversion, and 52 percent is the share taken up by the ocean and land instead.'
          }
        ]
      }
    }
  ]
};
