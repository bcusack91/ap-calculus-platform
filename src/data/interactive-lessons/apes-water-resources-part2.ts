export const apesWaterResourcesPart2Data = {
  topicSlug: 'apes-water-resources',
  sections: [
    {
      id: 'apeswate2-intro',
      type: 'text' as const,
      content: `
# 💧 Water Resources

**Part 2 of 7 — Groundwater, Irrigation and Water Conservation**

---

| Section |
|---------|
| 📖 How Aquifers Store and Lose Water |
| Irrigation Methods and Their Efficiencies |
| Waterlogging and Salinization |
| Worked Example: How Much Water Does a Field Need? |
| Conserving Water |

> 🔑 **Key Concept:** Part 1 showed that agriculture uses about 70% of the world's fresh water and that the Ogallala Aquifer is being drained. This part explains **how** groundwater is stored and depleted, compares the four irrigation methods in CED Topic 5.5 by how much water each wastes, and practices the volume and rate calculations that go with them.
      `
    },
    {
      id: 'apeswate2-aquifers',
      type: 'text' as const,
      content: `
## 📖 How Aquifers Store and Lose Water

Groundwater fills the pore spaces and cracks in sediment and rock. An **aquifer** is a layer permeable enough (sand, gravel, porous sandstone, fractured limestone) for that water to flow to a well.

### Unconfined vs confined aquifers

| Feature | Unconfined aquifer | Confined aquifer |
|---|---|---|
| What lies above it | Permeable soil and rock open to the surface | An impermeable layer such as clay or shale (an aquiclude) |
| Recharge | Directly from rain and snowmelt soaking down from above | Slowly, from a recharge zone where the layer reaches the surface, often far away |
| Water level | The water table rises and falls with rainfall and pumping | Water is under pressure; a well may flow upward on its own (an **artesian well**) |
| Pollution risk | Higher: contaminants seep straight down | Lower near the well, but very slow to clean once polluted |

### What over-pumping does

| Effect | Mechanism |
|---|---|
| **Cone of depression** | A pumping well draws water from the surrounding rock faster than it can flow back, lowering the water table in a funnel shape around the well. Nearby shallow wells can go dry. |
| **Saltwater intrusion** | Near coasts, fresh groundwater normally pushes outward against seawater in the rock. Heavy pumping lowers the freshwater pressure, so salt water moves inland into the aquifer and wells turn salty. |
| **Land subsidence** | When water is removed from clay-rich sediments, the grains compact and the ground surface sinks. Compacted clay cannot be refilled, so the aquifer permanently loses storage. |
| **Depletion** | When withdrawal exceeds recharge year after year, the aquifer's stored water shrinks, like spending savings faster than income arrives. |

### The Ogallala Aquifer

The Ogallala (part of the High Plains aquifer system) underlies parts of eight Great Plains states and supplies much of the irrigation water for the region's corn, wheat and cattle feed. Most of its water accumulated over thousands of years, while recharge in the drier southern plains today is only a small fraction of each year's pumping. Water levels have dropped by more than 30 m (about 100 ft) in parts of Texas and Kansas, and some wells there have been abandoned. Because the water is being used far faster than it is replaced, the Ogallala is treated as a **nonrenewable** resource on human time scales.
      `
    },
    {
      id: 'apeswate2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A town on the coast pumps more groundwater each summer as tourists arrive. After several years, its wells begin to taste salty. What best explains this?',
            options: [
              'Lower freshwater pressure lets seawater move inland through the rock',
              'Ocean spray settles on the soil above the wells and seeps downward',
              'Tourists add salt to the sewage, which leaks back into the wells',
              'Warmer summer water dissolves salt minerals out of the aquifer rock'
            ],
            correctAnswer: 0,
            explanation: 'Fresh groundwater normally holds seawater back by pushing outward. Pumping lowers that pressure, so salt water intrudes into the aquifer. Sea spray, sewage and warm water do not explain a change tied to the amount pumped.'
          },
          {
            question: 'Why does a confined aquifer usually take far longer to recharge than an unconfined aquifer?',
            options: [
              'Its water is too salty for rain to dilute',
              'Clay above it blocks water seeping down',
              'Pumping from it is banned in most areas',
              'Its rock pores are too large to hold water'
            ],
            correctAnswer: 1,
            explanation: 'An impermeable layer of clay or shale seals a confined aquifer from above, so it refills only from a distant recharge zone. Large pores would make an aquifer hold and transmit more water, not less.'
          },
          {
            question: 'A farm installs a high-capacity irrigation well. That summer, a neighbor\'s shallow household well nearby goes dry. What happened?',
            options: [
              'A cone of depression lowered the water table',
              'The farm well pulled saltwater into the aquifer',
              'Subsidence sealed the neighbor\'s well casing shut',
              'Evaporation from the farm field dried out the soil'
            ],
            correctAnswer: 0,
            explanation: 'Heavy pumping draws down the water table in a funnel around the farm well. If the neighbor\'s shallow well sits inside that cone, the water level falls below the well\'s intake.'
          }
        ]
      }
    },
    {
      id: 'apeswate2-irrigation',
      type: 'text' as const,
      content: `
## Irrigation Methods and Their Efficiencies

**Efficiency** here means the share of applied water that actually reaches the crop roots. The rest is lost to evaporation and runoff. These are the CED figures for Topic 5.5.

| Method | How it works | Water lost | Efficiency | Trade-offs |
|---|---|---|---|---|
| **Furrow** | Water flows down trenches cut between crop rows | About 1/3 | About 66% | Cheap and simple; most wasteful |
| **Flood** | The whole field is covered with water | About 20% | About 80% | Cheap; can cause **waterlogging** |
| **Spray** | Groundwater is pumped through sprinkler nozzles over the field | 1/4 or less | About 75% or better | Costs more than furrow or flood and needs energy to run the pumps |
| **Drip** | Perforated hoses release small amounts of water at the roots | About 5% | About 95% | Most efficient, but expensive, so it is used less often |

The CED describes spray as more efficient than furrow and flood; its "1/4 or less" is an upper limit on losses, and well-designed sprinklers lose less.

Notice the pattern: the methods that waste the most water are the cheapest to install. That cost gap is why furrow and flood irrigation remain common even where water is scarce.

## Waterlogging and Salinization

| Problem | Cause | Effect |
|---|---|---|
| **Waterlogging** | Too much water is applied and left sitting in the soil, which raises the water table | Water fills the soil pores, so roots cannot absorb the oxygen they need |
| **Salinization** | Irrigation water carries small amounts of dissolved salt; when the water evaporates, the salt stays behind in the topsoil | Salt builds up year after year until the soil becomes toxic to plants |

Salinization is worst in hot, dry climates where evaporation is high. Remedies include drip irrigation (less water left to evaporate at the surface), flushing the soil with fresh water and improving drainage. You may see white salt crusts on badly affected fields.
      `
    },
    {
      id: 'apeswate2-worked',
      type: 'text' as const,
      content: `
## Worked Example: How Much Water Does a Field Need?

A farm grows cotton on **40 hectares**. Over the season, the crop needs **25 cm** of water to reach its roots. (Illustrative data.)

**Step 1. Area in square meters.** One hectare is $100\\ \\text{m} \\times 100\\ \\text{m} = 10{,}000\\ \\text{m}^2$.
$$40\\ \\text{ha} \\times \\frac{10{,}000\\ \\text{m}^2}{1\\ \\text{ha}} = 400{,}000\\ \\text{m}^2$$

**Step 2. Volume the roots need.** Convert depth to meters: 25 cm = 0.25 m.
$$400{,}000\\ \\text{m}^2 \\times 0.25\\ \\text{m} = 100{,}000\\ \\text{m}^3 = 1.0 \\times 10^{5}\\ \\text{m}^3$$

**Step 3. Water that must be applied.** Divide the need by the efficiency.

| Method | Calculation | Water applied |
|---|---|---|
| Furrow (66%) | $100{,}000 \\div 0.66$ | about 151,500 m³ |
| Drip (95%) | $100{,}000 \\div 0.95$ | about 105,300 m³ |

**Step 4. Water saved by switching to drip.**
$$151{,}500 - 105{,}300 = 46{,}200\\ \\text{m}^3$$
Since $1\\ \\text{m}^3 = 1{,}000\\ \\text{L}$, that is about $4.6 \\times 10^{7}$ liters per season.

**Step 5. Years until a well field runs dry.** Suppose the aquifer under the farm has 30 m of saturated thickness. Pumping lowers the water table 0.8 m per year and recharge restores 0.2 m per year.
$$\\text{net decline} = 0.8 - 0.2 = 0.6\\ \\text{m/yr} \\qquad \\frac{30\\ \\text{m}}{0.6\\ \\text{m/yr}} = 50\\ \\text{years}$$

> 🔑 **AP Connection:** Divide by efficiency when you know what the crop needs and want what must be applied; multiply when you know what was applied and want what reaches the crop. Write units at every step, because a missing conversion (cm to m, ha to m²) is the most common lost point.
      `
    },
    {
      id: 'apeswate2-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only, without units or commas.

1) A sprinkler system that is 75% efficient applies 500,000 L to a field. How many liters reach the crop roots?

2) A crop needs 76,000 L to reach its roots. How many liters must a flood system (80% efficient) apply?

3) An aquifer has 36 m of saturated thickness. Pumping lowers it 1.0 m per year and recharge restores 0.4 m per year. How many years until it is used up?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['375000', '95000', '60'],
        hint1: 'Multiply the water applied by the efficiency as a decimal (0.75).',
        hint2: 'Divide what the roots need by 0.80.',
        hint3: 'Find the net decline per year first (1.0 − 0.4), then divide the thickness by it.',
        explanation: '1) 500,000 × 0.75 = 375,000 L. 2) 76,000 ÷ 0.80 = 95,000 L. 3) The net decline is 0.6 m per year, and 36 ÷ 0.6 = 60 years.'
      }
    },
    {
      id: 'apeswate2-conservation',
      type: 'text' as const,
      content: `
## Conserving Water

| Sector | Conservation options |
|---|---|
| **Agriculture** (about 70% of use) | Switch from furrow or flood to drip or efficient spray; irrigate at night or early morning to cut evaporation; grow crops suited to the local rainfall; level fields so water spreads evenly |
| **Industry** | Recycle cooling and process water instead of using it once |
| **Homes and cities** | Low-flow showerheads and toilets; fix leaks; xeriscaping (landscaping with drought-tolerant native plants); reuse lightly used household "graywater" on landscapes; pricing that charges more per liter at high use |

Because agriculture uses by far the most water, a modest efficiency gain on farms saves more water than large cuts in household use. Increasing supply, for example by building dams or by **desalination** (removing salt from seawater, which uses a lot of energy and leaves concentrated brine), does not fix the underlying problem of withdrawals exceeding recharge.
      `
    },
    {
      id: 'apeswate2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Fields in a hot, dry valley have been irrigated for decades and now show white crusts and falling yields. Which process is responsible?',
            options: [
              'Water evaporates and leaves its dissolved salts behind in the topsoil',
              'The crops pull salt up from deep bedrock through their roots each year',
              'Fertilizer reacts with irrigation water to form a hard white mineral',
              'Rain washes salt down from the mountains and deposits it in the valley'
            ],
            correctAnswer: 0,
            explanation: 'Irrigation water carries small amounts of dissolved salt, and in a hot, dry climate the water evaporates and leaves the salt in the soil. Over decades this salinization makes the soil toxic to plants.'
          },
          {
            question: 'A farmer floods a poorly drained field heavily every week. The crop wilts even though the soil is soaked. What is the most likely cause?',
            options: [
              'Waterlogged soil cuts off oxygen to the roots',
              'The roots take in too much nitrogen from the water',
              'Standing water reflects sunlight away from the leaves',
              'Flooding washes the plant\'s seeds out of the soil'
            ],
            correctAnswer: 0,
            explanation: 'Waterlogging fills the soil pores with water and raises the water table, so roots cannot absorb the oxygen they need. The plant wilts from root damage, not from a lack of water.'
          },
          {
            question: 'A farmer must choose a new irrigation system that wastes as little water as possible. Which statement best describes the trade-off?',
            options: [
              'Drip saves the most water but is expensive to install',
              'Furrow saves the most water but needs pumps to run it',
              'Flood saves the most water but is the costliest to build',
              'Spray saves the most water but causes the most salinization'
            ],
            correctAnswer: 0,
            explanation: 'Drip loses only about 5% of its water, the least of any method, but its hoses and emitters are expensive to install. Furrow and flood are cheap but lose about a third and a fifth of their water.'
          }
        ]
      }
    },
    {
      id: 'apeswate2-summary',
      type: 'text' as const,
      content: `
## Part 2 Summary

| Idea | Key fact |
|---|---|
| Unconfined aquifer | Recharges from directly above; easily polluted |
| Confined aquifer | Sealed by clay or shale; recharges slowly from a distant zone |
| Over-pumping | Cone of depression, saltwater intrusion, subsidence, depletion |
| Ogallala | Pumped far faster than recharged; effectively nonrenewable |
| Irrigation losses | Furrow about 1/3, flood about 20%, spray 1/4 or less, drip about 5% |
| Waterlogging | Raised water table starves roots of oxygen |
| Salinization | Evaporation leaves salts that poison the soil |
| Calculations | Volume = area × depth; applied = need ÷ efficiency; years = thickness ÷ net decline |

**Next:** Part 3 follows water after it is used, looking at what pollutes rivers, lakes, wetlands and oceans and how those ecosystems respond.
      `
    }
  ]
};
