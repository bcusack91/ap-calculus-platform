export const apesEnergyPart3Data = {
  topicSlug: 'apes-energy',
  sections: [
    {
      id: 'apesener3-intro',
      type: 'text' as const,
      content: `
# ⚡ Energy Concepts & Resources

**Part 3 of 7 — Net Energy, EROI and Cogeneration**

---

| Section |
|---------|
| 📖 It Takes Energy to Get Energy |
| Net Energy and EROI Calculations |
| Why EROI Falls Over Time |
| Waste Heat and the Second Law |
| Cogeneration: Using the Waste Heat |

> 🔑 **Key Concept:** Part 1 defined net energy, EROI and cogeneration in one line each. This part works them through with numbers: how much of the energy a source delivers is truly surplus, why that surplus shrinks as easy deposits run out, and how capturing waste heat lets one fuel do two jobs.
      `
    },
    {
      id: 'apesener3-netenergy',
      type: 'text' as const,
      content: `
## 📖 It Takes Energy to Get Energy

Every energy source has an **energy cost**: fuel for drilling rigs and mining trucks, electricity for pumps and refineries, diesel for tankers and trains, and the energy embodied in the steel and concrete of wells, dams, turbines and panels.

| Term | Formula | Meaning |
|---|---|---|
| **Gross energy** | Energy delivered | What the source produces |
| **Energy invested** | Energy used to find, extract, process, deliver and build | The cost of getting it |
| **Net energy** | Gross energy − energy invested | The surplus left for the rest of society |
| **EROI** (energy return on investment) | Gross energy ÷ energy invested | How many units come back for each unit put in |

An EROI of **1** means break-even: the source returns only the energy spent to get it, so it adds nothing. The higher the EROI, the larger the surplus available to run homes, farms and factories.

## Net Energy and EROI Calculations

### Worked Example 1: An Oil Field (illustrative data)

Producing and delivering oil from a field takes $5.0 \\times 10^{6}$ MJ of energy and yields $6.0 \\times 10^{7}$ MJ of fuel.

$$\\text{EROI} = \\frac{6.0 \\times 10^{7}}{5.0 \\times 10^{6}} = 12$$

$$\\text{Net energy} = 6.0 \\times 10^{7} - 0.5 \\times 10^{7} = 5.5 \\times 10^{7}\\ \\text{MJ}$$

The share of the gross energy that is surplus is

$$\\frac{\\text{net}}{\\text{gross}} = 1 - \\frac{1}{\\text{EROI}} = 1 - \\frac{1}{12} \\approx 0.92 = 92\\%$$

### Worked Example 2: Corn Ethanol (illustrative data)

A corn-ethanol plant's fuel takes **100 MJ** of fossil energy to make (fertilizer, tractors, irrigation pumps, distilling) and delivers **130 MJ** of ethanol.

$$\\text{EROI} = \\frac{130}{100} = 1.3 \\qquad \\text{Net energy} = 130 - 100 = 30\\ \\text{MJ}$$

Only $1 - \\frac{1}{1.3} \\approx 23\\%$ of the ethanol's energy is surplus. Published estimates for U.S. corn ethanol are commonly close to 1, often between about 1 and 2, which is why it is criticized as a weak energy source even though it is renewable.

### The net-energy cliff

| EROI | Surplus share $(1 - 1/\\text{EROI})$ |
|---|---|
| 50 | 98% |
| 20 | 95% |
| 10 | 90% |
| 5 | 80% |
| 2 | 50% |
| 1 | 0% |

Falling from an EROI of 50 to 10 costs only 8 points of surplus, but falling from 5 to 2 costs 30. Low-EROI sources leave much less energy for everything else.
      `
    },
    {
      id: 'apesener3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A biofuel has an EROI of exactly 1. What does that mean?',
            options: [
              'It delivers twice the energy needed to produce it',
              'It returns no surplus beyond the energy spent making it',
              'It converts all of its chemical energy into useful work',
              'It releases one unit of $CO_{2}$ per unit of energy'
            ],
            correctAnswer: 1,
            explanation: 'EROI is energy delivered divided by energy invested, so a value of 1 means the fuel only pays back what was spent to produce it. Converting all chemical energy to work would be 100 percent efficiency, which is a different idea.'
          },
          {
            question: 'Which of these counts as part of the energy invested in a wind farm?',
            options: [
              'The wind\'s kinetic energy turning the blades',
              'The electricity the turbines send to the grid',
              'Fuel and power used to make and install the towers',
              'Heat released when the electricity is used'
            ],
            correctAnswer: 2,
            explanation: 'Energy invested is the energy spent to build, install and maintain the system, including the energy embodied in steel and concrete. The wind is the resource, and the delivered electricity is the gross output.'
          },
          {
            question: 'Two sources each deliver 1,000 MJ. Source A needed 50 MJ to produce; Source B needed 250 MJ. How do their net energies compare?',
            options: [
              'A provides 200 MJ more net energy than B',
              'B provides 200 MJ more net energy than A',
              'Both provide the same net energy of 1,000 MJ',
              'A provides 5 times the net energy of B'
            ],
            correctAnswer: 0,
            explanation: 'Net energy is gross minus invested: 1,000 − 50 = 950 MJ for A and 1,000 − 250 = 750 MJ for B, a difference of 200 MJ. Their EROIs differ by a factor of 5 (20 versus 4), but their net energies do not.'
          }
        ]
      }
    },
    {
      id: 'apesener3-falling',
      type: 'text' as const,
      content: `
## Why EROI Falls Over Time

People extract the **easiest, richest deposits first**: shallow oil that flows under its own pressure, thick coal seams near the surface, high-grade ores. As those run out, producers turn to resources that take more energy to reach and process.

| Then | Now | Extra energy needed for |
|---|---|---|
| Shallow onshore oil wells | Deep-water offshore platforms | Drilling through kilometers of water and rock |
| Free-flowing crude | Tar sands (bitumen) | Strip mining or steam injection, then upgrading the heavy oil |
| Conventional gas fields | Shale gas and tight oil | Horizontal drilling and hydraulic fracturing (fossil-fuels lessons) |
| Thick, shallow coal seams | Thinner, deeper seams | Removing more overburden per tonne of coal |

As a result, oil's EROI has declined as the easiest deposits were used up. Published estimates vary widely with the method used, so the AP exam tests the **trend and its cause**, not a specific historical number.

| Source | EROI compared with others (published estimates vary widely) |
|---|---|
| Hydroelectric | Among the highest, over a dam's long lifetime |
| Conventional oil, gas and coal | High historically, declining for oil and gas |
| Wind | Moderately high |
| Solar PV | Moderate, rising as panel manufacturing improves |
| Tar sands | Low compared with conventional oil |
| Corn ethanol | Very low, close to break-even |

> 🔑 **AP Connection:** Net energy explains why "there is still plenty of oil in the ground" does not settle the question of supply. Oil that takes nearly as much energy to extract as it delivers is not a useful energy source, whatever its volume.
      `
    },
    {
      id: 'apesener3-cogen',
      type: 'text' as const,
      content: `
## Waste Heat and the Second Law

The **second law of thermodynamics** (Part 1) means a thermal power plant cannot turn all of its fuel's heat into electricity. A fossil-fuel plant converts only about a third (older coal plants) to about 60% (the best combined-cycle gas plants) of the heat into electricity; the rest leaves as **low-temperature waste heat** through the condenser and smokestack.

That waste heat is too cool to spin another turbine efficiently, but it is still hot enough to warm buildings, heat water or supply steam for industry.

## Cogeneration: Using the Waste Heat

**Cogeneration**, also called **combined heat and power (CHP)**, generates electricity and captures the waste heat for a second use. CHP works best where there is a steady demand for heat close by: hospitals, university campuses, factories, and **district heating** systems that pipe hot water to city buildings.

### Worked Example 3: Separate Heat and Power vs CHP (illustrative data)

A campus needs **35 units** of electricity and **45 units** of useful heat.

**Option A: separate systems.** Grid electricity from a plant that is **35%** efficient, plus an on-site boiler that is **85%** efficient.

$$\\text{Fuel for electricity} = \\frac{35}{0.35} = 100\\ \\text{units}$$
$$\\text{Fuel for heat} = \\frac{45}{0.85} \\approx 53\\ \\text{units}$$
$$\\text{Total fuel} \\approx 153\\ \\text{units}$$

**Option B: a CHP plant.** It burns **100 units** of fuel and delivers 35 units of electricity plus 45 units of captured heat.

$$\\text{Overall efficiency} = \\frac{35 + 45}{100} \\times 100 = 80\\%$$

**Fuel saved** by CHP:

$$\\frac{153 - 100}{153} \\times 100 \\approx 35\\%$$

Same electricity and same heat, about a third less fuel, and so about a third less $CO_{2}$ if the same fuel is burned.

> 🔑 **AP Connection:** Cogeneration does not break the second law. The plant still wastes the same share of heat as far as **electricity** is concerned; CHP simply puts that heat to a second use instead of dumping it into a river or the air.
      `
    },
    {
      id: 'apesener3-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only.

1) A solar farm delivers 900 GJ of electricity over its life. Building, installing and maintaining it took 75 GJ. What is its EROI?

2) For the solar farm in question 1, what percent of its gross output is net energy? Round to the nearest whole number.

3) A CHP unit burns 200 MJ of natural gas and delivers 70 MJ of electricity and 90 MJ of useful heat. What is its overall efficiency, in percent?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['12', '92', '80'],
        hint1: 'EROI = energy delivered ÷ energy invested.',
        hint2: 'Net = 900 − 75. Divide by 900 and multiply by 100.',
        hint3: 'Add the two useful outputs, divide by the fuel input, multiply by 100.',
        explanation: '1) 900 ÷ 75 = 12. 2) 825 ÷ 900 × 100 ≈ 91.7, about 92 percent. 3) (70 + 90) ÷ 200 × 100 = 80 percent.'
      }
    },
    {
      id: 'apesener3-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why has the EROI of oil production declined over the past century?',
            options: [
              'Drillers moved to deeper, harder-to-reach and heavier deposits',
              'Engines today burn gasoline less efficiently than early models',
              'Crude oil loses chemical energy the longer it stays underground',
              'Oil now releases less energy per liter than it once did when burned'
            ],
            correctAnswer: 0,
            explanation: 'The easiest deposits were tapped first, so newer production needs more energy for deep drilling, offshore platforms and upgrading heavy oil. The energy content of the oil itself has not changed.'
          },
          {
            question: 'A hospital installs a combined heat and power system. Which result best explains why its total fuel use falls?',
            options: [
              'It generates electricity at a far higher efficiency than the grid',
              'It puts to use heat that electricity generation would otherwise waste',
              'It eliminates waste heat from electricity generation entirely',
              'It switches the hospital from fossil fuels to a renewable source'
            ],
            correctAnswer: 1,
            explanation: 'Combined heat and power captures the heat left over from making electricity and uses it to warm the building, so a separate boiler burns less fuel. Its electrical efficiency is similar to an ordinary plant, and some heat is still lost.'
          },
          {
            question: 'A planner must choose between two biofuels with equal costs. Fuel P has an EROI of 1.2; Fuel Q has an EROI of 6. Which is the stronger argument for Fuel Q?',
            options: [
              'Q burns with no emissions',
              'Q yields far more surplus energy',
              'Q requires no farmland at all',
              'Q has a lower price per liter'
            ],
            correctAnswer: 1,
            explanation: 'At an EROI of 6, about 83 percent of the fuel\'s energy is surplus, versus about 17 percent at 1.2. Both are biofuels that need land and emit carbon dioxide when burned, and the costs were stated to be equal.'
          }
        ]
      }
    },
    {
      id: 'apesener3-summary',
      type: 'text' as const,
      content: `
## Part 3 Summary

| Idea | Key fact |
|---|---|
| Net energy | Gross energy delivered − energy invested |
| EROI | Gross energy ÷ energy invested; 1 = break-even |
| Surplus share | 1 − 1/EROI; drops steeply below an EROI of about 5 |
| Falling EROI | Easiest deposits used first; deep-water oil, tar sands and fracking need more energy |
| Low-EROI examples | Corn ethanol (close to 1) and tar sands |
| Second law | A thermal plant turns only about 33–60% of its heat into electricity |
| Cogeneration | Captures waste heat for buildings or industry; overall efficiency can reach about 80% |
| Fuel saved by CHP | Compare fuel for separate heat and power with fuel for CHP |

**Next:** Part 4 reads national energy data: quads, energy-flow diagrams and how much energy the United States wastes.
      `
    }
  ]
};
