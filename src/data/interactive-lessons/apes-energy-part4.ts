export const apesEnergyPart4Data = {
  topicSlug: 'apes-energy',
  sections: [
    {
      id: 'apesener4-intro',
      type: 'text' as const,
      content: `
# ⚡ Energy Concepts & Resources

**Part 4 of 7 — Reading Energy Data**

---

| Section |
|---------|
| 📖 Energy at National Scale: Quads and Exajoules |
| Reading an Energy-Flow Diagram |
| Rejected Energy and Where to Cut It |
| Reading a Consumption Table Over Time |
| Percent Versus Percentage Points |

> 🔑 **Key Concept:** National energy data come in huge numbers and unfamiliar units. This part builds the data skills the "Analyze and interpret quantitative data" free-response question asks for: converting large units with scientific notation, tracing energy through a flow diagram, and describing and calculating change in a table. (Household units such as kWh and BTU are in the Fossil Fuels lessons; power versus energy is in the Renewable Energy lessons.)
      `
    },
    {
      id: 'apesener4-units',
      type: 'text' as const,
      content: `
## 📖 Energy at National Scale: Quads and Exajoules

| Unit | Size | Where you see it |
|---|---|---|
| **Quad** | 1 quadrillion BTU $= 10^{15}$ BTU $\\approx 1.06 \\times 10^{18}$ J | U.S. national energy data |
| **Exajoule (EJ)** | $10^{18}$ J | International data |
| **Terawatt-hour (TWh)** | $10^{12}$ Wh $= 10^{9}$ kWh | National electricity generation |

Useful equivalents: 1 quad $\\approx$ 1.06 EJ $\\approx 2.93 \\times 10^{11}$ kWh, and 1 kWh $= 3{,}412$ BTU.

### Worked Example 1: The U.S. in Different Units

The United States uses about **94 quads** of primary energy in a year.

**In joules:** $94 \\times 1.06 \\times 10^{18} \\approx 1.0 \\times 10^{20}$ J, or about 100 EJ.

**In kilowatt-hours:**

$$94 \\times 10^{15}\\ \\text{BTU} \\times \\frac{1\\ \\text{kWh}}{3{,}412\\ \\text{BTU}} = \\frac{9.4 \\times 10^{16}}{3.412 \\times 10^{3}} \\approx 2.76 \\times 10^{13}\\ \\text{kWh}$$

**Per person** (about $3.35 \\times 10^{8}$ people):

$$\\frac{2.76 \\times 10^{13}\\ \\text{kWh}}{3.35 \\times 10^{8}} \\approx 8.2 \\times 10^{4}\\ \\text{kWh}$$

About 82,000 kWh of primary energy per American per year, roughly 225 kWh a day. Note that this counts **all** energy (fuel for cars, factories and power plants), not just the household electric bill.

> 🔑 **AP Connection:** With scientific notation, multiply the coefficients and **add** the exponents; divide the coefficients and **subtract** the exponents. Then adjust so the coefficient is between 1 and 10: $28 \\times 10^{12} = 2.8 \\times 10^{13}$.
      `
    },
    {
      id: 'apesener4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which expression equals $(6.0 \\times 10^{9}) \\div (2.0 \\times 10^{3})$?',
            options: [
              '$3.0 \\times 10^{3}$',
              '$3.0 \\times 10^{6}$',
              '$12 \\times 10^{12}$',
              '$4.0 \\times 10^{6}$'
            ],
            correctAnswer: 1,
            explanation: 'Divide the coefficients (6.0 ÷ 2.0 = 3.0) and subtract the exponents (9 − 3 = 6). Multiplying instead of dividing gives the 12 × 10^12 option.'
          },
          {
            question: 'A country generates 450 TWh of electricity in a year. How many kWh is that?',
            options: [
              '$4.5 \\times 10^{11}$ kWh',
              '$4.5 \\times 10^{14}$ kWh',
              '$4.5 \\times 10^{8}$ kWh',
              '$4.5 \\times 10^{12}$ kWh'
            ],
            correctAnswer: 0,
            explanation: 'One TWh is 10^9 kWh, so 450 TWh = 450 × 10^9 = 4.5 × 10^11 kWh. The 10^14 option converts to watt-hours instead of kilowatt-hours.'
          },
          {
            question: 'Why is U.S. primary energy per person far larger than a typical household\'s electricity use?',
            options: [
              'Electric meters record only part of what a home uses',
              'Primary energy counts all fuels, including industry and travel',
              'BTU, the unit used for primary energy, are smaller than kWh',
              'Household electricity is mostly generated from renewables'
            ],
            correctAnswer: 1,
            explanation: 'Primary energy includes fuel burned in power plants (including their waste heat), factories, trucks, planes and cars, not only electricity delivered to homes. Units do not change the amount of energy.'
          }
        ]
      }
    },
    {
      id: 'apesener4-flow',
      type: 'text' as const,
      content: `
## Reading an Energy-Flow Diagram

An **energy-flow diagram** (a Sankey diagram) draws each flow as a band whose width is proportional to the amount of energy. Bands run from **sources** on the left, through **electricity generation**, to the **end-use sectors**, and finally split into **energy services** (useful work, light and heat) and **rejected energy** (waste heat).

The table below gives the flows of a simplified diagram. **(Illustrative data, rounded to resemble a recent U.S. year; all values in quads.)**

**Table 1. Primary energy by source**

| Petroleum | Natural gas | Coal | Nuclear | Renewables | **Total** |
|---|---|---|---|---|---|
| 36 | 33 | 9 | 8 | 8 | **94** |

**Table 2. Where the energy goes**

| Stage | Energy in | Energy services | Rejected energy |
|---|---|---|---|
| Electricity generation | 36 | 13 (delivered as electricity) | 23 |
| Residential and commercial | 21 | 14 | 7 |
| Industrial | 22 | 11 | 11 |
| Transportation | 28 | 6 | 22 |

The end-use sectors receive the 13 quads of electricity plus 58 quads of fuel burned directly (94 − 36), for 71 quads in all.

### Worked Example 2: How Much Is Wasted?

**Total energy services:** $14 + 11 + 6 = 31$ quads

**Total rejected energy:** $23 + 7 + 11 + 22 = 63$ quads

**Check:** $31 + 63 = 94$ quads, matching the total input, as the first law requires.

$$\\text{Share rejected} = \\frac{63}{94} \\times 100 \\approx 67\\%$$

**Sector efficiencies:**

| Stage | Efficiency |
|---|---|
| Electricity generation | $13 \\div 36 \\approx 36\\%$ |
| Residential and commercial | $14 \\div 21 \\approx 67\\%$ |
| Industrial | $11 \\div 22 = 50\\%$ |
| Transportation | $6 \\div 28 \\approx 21\\%$ |

About **two-thirds** of the primary energy ends up as waste heat, mostly in power plants and vehicle engines, as the second law predicts for heat engines.
      `
    },
    {
      id: 'apesener4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Use Tables 1 and 2. Enter numbers only.

1) What percent of total primary energy comes from fossil fuels? Round to the nearest whole number.

2) What percent of all rejected energy comes from transportation? Round to the nearest whole number.

3) If transportation became 40% efficient while delivering the same 6 quads of services, how many quads would it need as input?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['83', '35', '15'],
        hint1: 'Add petroleum, natural gas and coal, then divide by 94.',
        hint2: 'Transportation rejects 22 quads out of 63 in total.',
        hint3: 'Input = services ÷ efficiency, with the efficiency as a decimal.',
        explanation: '1) (36 + 33 + 9) ÷ 94 × 100 = 78 ÷ 94 × 100 ≈ 83 percent. 2) 22 ÷ 63 × 100 ≈ 35 percent. 3) 6 ÷ 0.40 = 15 quads, about half the current 28.'
      }
    },
    {
      id: 'apesener4-cut',
      type: 'text' as const,
      content: `
## Rejected Energy and Where to Cut It

The flow diagram shows where efficiency gains would matter most: the widest bands of rejected energy.

| Waste stream | Why it is large | Ways to shrink it |
|---|---|---|
| Power plants | Heat engines; condenser heat dumped to water or air | Combined-cycle gas plants, cogeneration, more wind and solar (which have no fuel to waste as heat) |
| Transportation | Gasoline engines turn only about a fifth of their fuel energy into motion | Higher fuel economy, hybrids, electric vehicles, public transit |
| Industry | Process heat lost through stacks and walls | Heat recovery, efficient motors, cogeneration |

A caution: an electric vehicle is efficient **at the wheels**, but if its electricity comes from a 36%-efficient fossil plant, part of the transportation waste simply moves to the power-plant band. The overall gain depends on how the electricity is made.

## Reading a Consumption Table Over Time

**Table 3. Energy use in Country Z, by source, in EJ (illustrative data)**

| Year | Coal | Oil | Natural gas | Renewables | **Total** |
|---|---|---|---|---|---|
| 2000 | 10 | 8 | 4 | 1 | **23** |
| 2010 | 16 | 10 | 6 | 2 | **34** |
| 2020 | 18 | 12 | 9 | 6 | **45** |

### Worked Example 3: Three Calculations From One Table

**(a) Percent change in total use, 2000–2020:**
$$\\frac{45 - 23}{23} \\times 100 \\approx 96\\%$$

**(b) Coal's share of the total:** 2000: $10 \\div 23 \\approx 43\\%$; 2020: $18 \\div 45 = 40\\%$.

**(c) Doubling time:** if total use keeps growing at about 3.5% per year, the rule of 70 gives $70 \\div 3.5 = 20$ years to double.

### Percent Versus Percentage Points

Coal's **share** fell from 43% to 40%: a drop of **3 percentage points**. But coal **use** rose from 10 to 18 EJ, an **80% increase**. Both statements are true, and an FRQ may ask for either one, so read the question carefully:

- Change in a **share**: subtract the shares (percentage points).
- Change in an **amount**: use (new − old) ÷ old × 100 (percent).

> 🔑 **AP Connection:** To **describe** a trend, give the direction, the size and the time span with units: "Total energy use nearly doubled, from 23 EJ in 2000 to 45 EJ in 2020." A phrase like "it went up" earns no point.
      `
    },
    {
      id: 'apesener4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

Use Table 3 above.
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about renewables in Country Z from 2000 to 2020 is correct?',
            options: [
              'Their use rose by 500%, and their share rose from about 4% to about 13%',
              'Their use rose by 6%, and their share rose from about 1% to about 6%',
              'Their use rose by 500%, but their share of the total stayed the same',
              'Their use rose by 600%, and their share rose from about 4% to about 6%'
            ],
            correctAnswer: 0,
            explanation: 'Use went from 1 to 6 EJ: (6 − 1) ÷ 1 × 100 = 500 percent. The share went from 1 ÷ 23 ≈ 4 percent to 6 ÷ 45 ≈ 13 percent.'
          },
          {
            question: 'A student writes, "Country Z cut its reliance on coal, so its coal emissions fell." What is wrong with this claim?',
            options: [
              'Coal\'s share fell, but the amount burned still increased by 80%',
              'Coal\'s share rose from 43% to 40%, so reliance actually increased',
              'Coal use fell by 3%, which is too small a decline to affect emissions',
              'Coal emissions depend only on the share, so they fell by 3 points'
            ],
            correctAnswer: 0,
            explanation: 'Emissions follow the amount of coal burned, which grew from 10 to 18 EJ, an 80 percent increase. Only coal\'s share of a growing total fell, by about 3 percentage points.'
          },
          {
            question: 'Based on Table 2, which change would remove the most rejected energy, assuming each stage keeps delivering the same services?',
            options: [
              'Raising industrial efficiency from 50% to 60%',
              'Raising building efficiency from 67% to 75%',
              'Raising transportation efficiency from 21% to 30%',
              'Raising power-plant efficiency from 36% to 40%'
            ],
            correctAnswer: 2,
            explanation: 'Transportation needs 6 ÷ 0.30 = 20 quads instead of 28, saving 8 quads. Power plants would save 36 − 13 ÷ 0.40 = 3.5 quads, industry 22 − 11 ÷ 0.60 ≈ 3.7 and buildings 21 − 14 ÷ 0.75 ≈ 2.3.'
          }
        ]
      }
    },
    {
      id: 'apesener4-summary',
      type: 'text' as const,
      content: `
## Part 4 Summary

| Idea | Key fact |
|---|---|
| Quad | $10^{15}$ BTU ≈ 1.06 EJ ≈ $2.93 \\times 10^{11}$ kWh; the U.S. uses about 94 quads a year |
| Scientific notation | Multiply: add exponents. Divide: subtract exponents |
| Energy-flow diagram | Sources → electricity generation → sectors → services or rejected energy |
| Rejected energy | About two-thirds of U.S. primary energy, mostly from power plants and vehicles |
| Sector efficiency | Services ÷ input; transportation is the least efficient |
| First law check | Services + rejected = total input |
| Percent vs points | Shares change by percentage points; amounts change by percent |
| Describing a trend | Direction, size, time span and units |

**Next:** Part 5 turns to the demand side: how buildings, appliances and transportation can use less energy.
      `
    }
  ]
};
