export const apesRenewableEnergyPart5Data = {
  topicSlug: 'apes-renewable-energy',
  sections: [
    {
      id: 'apesrene5-intro',
      type: 'text' as const,
      content: `
# 🌞 Renewable Energy

**Part 5 of 7 — Intermittency, Storage and Trade-offs**

---

| Section |
|---------|
| 🔋 Matching Supply to Demand |
| Energy Storage Options |
| Nameplate Capacity vs Real Output |
| Comparing Sources Over Their Life Cycle |
| Worked Example: Storage and Emissions |
| Common Misconceptions |

> 🔑 **Key Concept:** Solar and wind are now cheap to build, so the hard problem is **timing**: the grid must match supply to demand every second, but the sun sets and the wind drops on their own schedule. This part explains the tools that fill the gaps, how to compare sources fairly, and the misconceptions that cost points on the exam.
      `
    },
    {
      id: 'apesrene5-grid',
      type: 'text' as const,
      content: `
## 🔋 Matching Supply to Demand

On a typical day, electricity demand is lowest overnight, rises in the morning and often peaks in the early evening, when people come home, cook and turn on lights. Solar output follows the sun: zero at night, highest at midday, falling to zero just as the evening peak arrives. Wind output changes with the weather and in many regions is stronger at night and in winter.

Sources fall into two groups:

| Group | Examples | Output |
|---|---|---|
| **Variable (intermittent)** | Solar PV, wind, run-of-river hydro | Set by the weather; cannot be raised on demand |
| **Dispatchable** | Storage dams, geothermal, biomass, natural gas plants | Operators can raise or lower output when needed |

Grid operators use several tools to cover the gaps left by variable sources:

| Tool | How it helps |
|---|---|
| **Energy storage** | Saves surplus electricity when supply is high and releases it when supply is low |
| **Grid interconnection** | Long transmission lines link wide regions, so wind blowing in one place offsets calm in another |
| **Diverse mix** | Solar (daytime, summer) and wind (often night, winter) partly fill each other's gaps |
| **Demand response** | Customers are paid to shift flexible use, such as charging electric cars, to times of high supply |
| **Dispatchable backup** | Hydro, geothermal or gas plants ramp up when solar and wind fall |

Using less electricity in the first place, through efficiency and conservation (covered in the Energy topic), also shrinks the gaps that storage must fill.

## Energy Storage Options

| Storage | How it works | Typical use | Drawbacks |
|---|---|---|---|
| **Lithium-ion batteries** | Chemical energy stored in cells; responds in a fraction of a second | Shifting midday solar into the evening (a few hours) | Mining lithium, cobalt and nickel; limited lifespan; fire risk |
| **Pumped-storage hydropower** | Water is pumped from a lower reservoir to a higher one when power is plentiful, then released through turbines when needed | Large amounts of energy over many hours | Needs two reservoirs at different heights; floods land; about a quarter of the energy is lost |
| **Molten salt (thermal)** | CSP plants store collected heat in hot salt | Running a solar thermal plant after sunset | Only works with CSP plants |
| **Hydrogen** | Surplus electricity makes hydrogen by electrolysis; fuel cells turn it back into electricity | Long-term or seasonal storage | Large energy losses (Part 4 showed about 30% overall) |

Storage never creates energy. Every cycle of charging and discharging loses some as heat, measured by **round-trip efficiency**:

$$\\text{Round-trip efficiency} = \\frac{\\text{energy delivered}}{\\text{energy stored}} \\times 100$$
      `
    },
    {
      id: 'apesrene5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Tool** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Pumping water uphill when power is plentiful and releasing it through turbines later is ___',
            options: ['Pumped-storage hydropower', 'Run-of-river hydroelectricity', 'Tidal barrage power', 'Binary-cycle geothermal']
          },
          {
            label: 'Paying customers to charge their electric cars at midday, when solar output is high, is ___',
            options: ['Demand response', 'Grid interconnection', 'Baseload generation', 'Net metering']
          },
          {
            label: 'Linking grids across a wide region so that wind in one area offsets calm in another is ___',
            options: ['Grid interconnection', 'Demand response', 'Thermal energy storage', 'Peak shaving']
          }
        ],
        correctAnswers: ['Pumped-storage hydropower', 'Demand response', 'Grid interconnection'],
        hint1: 'This stores energy rather than producing it, using two reservoirs.',
        hint2: 'The supply stays the same; the timing of use changes.',
        hint3: 'Long transmission lines spread the weather risk over a large area.',
        explanation: 'Pumped storage moves water between two reservoirs to store and release energy. Demand response shifts when customers use power. Interconnection links distant areas whose weather differs.'
      }
    },
    {
      id: 'apesrene5-compare',
      type: 'text' as const,
      content: `
## Nameplate Capacity vs Real Output

A plant's **nameplate capacity** is its maximum power output (MW). Its **capacity factor** is the percent of that maximum it actually produces over a year. Two plants with the same nameplate capacity can produce very different amounts of energy.

| Source | Approximate capacity factor (U.S. averages, early 2020s) | Why |
|---|---|---|
| Nuclear | Over 90% | Runs almost continuously except during refueling |
| Geothermal | About 70% or more | Steady heat, day and night |
| Hydroelectric | About 35–40% | Limited by river flow and water management |
| Wind | About 30–35% | Wind speed varies |
| Solar PV | About 20–25% | No output at night; less in clouds and winter |

To replace the yearly energy of a 100 MW plant running near 90%, you need roughly 360 MW of solar at 25%, plus storage to cover the night.

## Comparing Sources Over Their Life Cycle

"No emissions during operation" is not the whole story. A **life-cycle assessment** adds up emissions from mining materials, manufacturing, construction, operation and disposal.

| Source | Life-cycle greenhouse gases (g $CO_{2}$-equivalent per kWh, IPCC 2014 median estimates) |
|---|---|
| Coal | 820 |
| Natural gas (combined cycle) | 490 |
| Biomass (dedicated crops) | 230 |
| Solar PV (utility-scale) | 48 |
| Geothermal | 38 |
| Hydroelectric | 24 |
| Nuclear | 12 |
| Wind (onshore) | 11 |

Every renewable source releases some greenhouse gas over its life cycle, but solar, wind, hydro and geothermal release roughly one-tenth or less of what natural gas releases per kWh, and a small fraction of coal's.

| Source | Main environmental trade-off |
|---|---|
| Solar | Land and desert habitat; mining and manufacturing; end-of-life panels |
| Wind | Bird and bat deaths; noise and visual impact |
| Hydroelectric | Flooded habitat, blocked fish, trapped sediment, reservoir methane |
| Geothermal | Hydrogen sulfide; limited to active geologic areas |
| Biomass | Air pollutants, deforestation, land and fertilizer for fuel crops |
| Hydrogen | Only as clean as the energy that made the hydrogen |
      `
    },
    {
      id: 'apesrene5-worked',
      type: 'text' as const,
      content: `
## Worked Example: Storage and Emissions (illustrative data)

**A. Sizing a battery.** A town needs 20 MW from storage for the 4 hours after sunset. The battery's round-trip efficiency is 85%.

$$\\text{Energy to deliver} = 20\\ \\text{MW} \\times 4\\ \\text{h} = 80\\ \\text{MWh}$$
$$\\text{Energy that must be stored} = \\frac{80\\ \\text{MWh}}{0.85} \\approx 94\\ \\text{MWh}$$

The extra 14 MWh is lost as heat during charging and discharging.

**B. Pumped storage efficiency.** A plant uses 1,000 MWh to pump water uphill and later generates 760 MWh.

$$\\frac{760}{1{,}000} \\times 100 = 76\\%\\ \\text{round-trip efficiency}$$

**C. Solar nameplate needed.** How much solar capacity, at a 25% capacity factor, produces as much energy in a year as a steady 100 MW?

$$\\frac{100\\ \\text{MW}}{0.25} = 400\\ \\text{MW of solar}$$

**D. Emissions avoided.** A utility replaces $1.0 \\times 10^{9}$ kWh per year of coal power (820 g per kWh) with onshore wind (11 g per kWh).

$$\\text{Savings per kWh} = 820 - 11 = 809\\ \\text{g}$$
$$809\\ \\text{g/kWh} \\times 1.0 \\times 10^{9}\\ \\text{kWh} = 8.09 \\times 10^{11}\\ \\text{g}$$

Because 1 metric ton = $10^{6}$ g:

$$\\frac{8.09 \\times 10^{11}\\ \\text{g}}{10^{6}\\ \\text{g/t}} = 8.09 \\times 10^{5}\\ \\text{t of } CO_{2}\\text{-equivalent per year}$$

**E. Percent reduction:** $\\dfrac{809}{820} \\times 100 \\approx 98.7\\%$ lower life-cycle emissions per kWh.
      `
    },
    {
      id: 'apesrene5-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

(Illustrative data.) Enter numbers only.

1) A battery stores 500 MWh and later delivers 450 MWh. What is its round-trip efficiency, in percent?

2) A city needs 30 MW from batteries for 5 hours each evening. How many MWh must the batteries deliver?

3) How many MW of wind capacity at a 30% capacity factor produce as much energy in a year as a steady 120 MW?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['90', '150', '400'],
        hint1: 'Energy delivered ÷ energy stored × 100.',
        hint2: 'Energy (MWh) = power (MW) × time (h).',
        hint3: 'Divide the steady power by the capacity factor written as a decimal.',
        explanation: '1) 450 ÷ 500 × 100 = 90 percent. 2) 30 MW × 5 h = 150 MWh. 3) 120 MW ÷ 0.30 = 400 MW of wind capacity.'
      }
    },
    {
      id: 'apesrene5-misconceptions',
      type: 'text' as const,
      content: `
## Common Misconceptions

| Misconception | What is actually true |
|---|---|
| "Renewable means no environmental impact." | Every source uses land and materials and affects wildlife; the trade-offs differ by source. |
| "A 100 MW solar farm supplies 100 MW." | 100 MW is the peak rating; over a year it averages only about 20–25 MW. |
| "Solar panels produce nothing on cloudy days." | Output drops, often sharply, but diffuse light still produces some electricity. |
| "Hydrogen is a renewable energy source." | Hydrogen is a carrier; energy from another source must make it first. |
| "Geothermal heat pumps and geothermal power plants are the same." | Heat pumps move heat from shallow ground and work almost anywhere; power plants need deep, hot rock near plate boundaries. |
| "Biomass is always carbon-neutral." | Farming, processing and land clearing add greenhouse gases; forests take decades to regrow. |
| "Batteries are a source of energy." | Batteries store energy made elsewhere and lose some of it each cycle. |
| "Wind turbines are the main cause of bird deaths." | Turbines do kill birds, but cats and collisions with buildings kill far more. |

> 🔑 **AP Connection:** FRQs often ask you to "describe one disadvantage" and "propose a solution." For intermittency, a complete answer names the problem (no solar output at night) **and** a specific fix (lithium-ion batteries charged by midday surplus, or pumped-storage hydropower).
      `
    },
    {
      id: 'apesrene5-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 100 MW solar farm has a capacity factor of 25%. What is its average power output over a year?',
            options: [
              '75 MW',
              '100 MW',
              '25 MW',
              '400 MW'
            ],
            correctAnswer: 2,
            explanation: 'Average output equals nameplate capacity times capacity factor: 100 MW × 0.25 = 25 MW. 400 MW is the nameplate needed to average 100 MW, which divides instead of multiplying.'
          },
          {
            question: 'In a region that gets much of its electricity from solar panels, why is the early evening the hardest time to meet demand?',
            options: [
              'Demand is near its peak just as solar output falls toward zero',
              'Solar output peaks in the evening, just as demand reaches its low',
              'Batteries can be charged only after sunset, so none are ready',
              'Wind speeds drop at sunset everywhere, removing all other supply'
            ],
            correctAnswer: 0,
            explanation: 'People use the most electricity in the early evening, but solar output is falling to zero then, so storage or dispatchable plants must fill a large and rapidly growing gap. Batteries are charged by midday surplus, before the evening.'
          },
          {
            question: 'A student argues that wind power should be stopped because turbines are the leading cause of bird deaths in the United States. Which response best evaluates the claim?',
            options: [
              'It is accurate, since turbines kill more birds than any other cause',
              'Turbines do kill birds, but cats and buildings kill far more',
              'It is inaccurate, because birds see the blades and avoid them',
              'Turbines mainly harm bats, and the bird deaths are too few to count'
            ],
            correctAnswer: 1,
            explanation: 'Turbine collisions are real, which is why siting matters, but outdoor cats and collisions with buildings and windows kill far more birds each year. Birds do strike blades, so the claim that they avoid them is wrong.'
          },
          {
            question: 'Which ranking of life-cycle greenhouse gas emissions per kWh, from highest to lowest, is correct?',
            options: [
              'Natural gas, coal, wind, solar PV',
              'Coal, solar PV, natural gas, wind',
              'Coal, natural gas, solar PV, wind',
              'Solar PV, coal, wind, natural gas'
            ],
            correctAnswer: 2,
            explanation: 'Coal releases the most per kWh, natural gas roughly 60% as much, and solar PV and wind far less, with onshore wind among the lowest of all. Solar has some life-cycle emissions from manufacturing, but far below either fossil fuel.'
          }
        ]
      }
    },
    {
      id: 'apesrene5-summary',
      type: 'text' as const,
      content: `
## Part 5 Summary

| Idea | Key fact |
|---|---|
| Intermittency | Solar and wind output follow the weather, not demand; the evening peak is the hardest gap |
| Grid tools | Storage, interconnection, a diverse mix, demand response, dispatchable backup |
| Storage | Lithium-ion batteries (hours), pumped hydro (large, hours), molten salt (CSP), hydrogen (long-term, lossy) |
| Round-trip efficiency | Energy out ÷ energy in × 100; storage always loses some energy |
| Capacity factor | Nuclear over 90%, geothermal about 70%, hydro and wind about 35%, solar about 25% |
| Life cycle | All renewables emit some greenhouse gas, but far less per kWh than coal or natural gas |

**Next:** Part 6 puts these skills to work on AP-style free-response and multiple-choice questions.
      `
    }
  ]
};
