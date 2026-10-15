export const apesFossilFuelsNuclearPart6Data = {
  topicSlug: 'apes-fossil-fuels-nuclear',
  sections: [
    {
      id: 'apesfoss6-intro',
      type: 'text' as const,
      content: `
# 🛢️ Fossil Fuels & Nuclear Energy

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📋 Free-Response 2: Analyze and Interpret Quantitative Data |
| Model Answers |
| Free-Response 3: A Nuclear Plant by the Numbers |
| Model Answers |

> 🔑 **Key Concept:** Energy questions appear in the "Analyze and interpret quantitative data" and "Analyze an environmental problem doing calculations" free-response questions almost every year. Show every setup with units: a correct number without work often earns no point.

## 📋 Free-Response 2: Analyze and Interpret Quantitative Data

A state's electricity sector generated **100 billion kWh** in each of the years below. (All values are illustrative.)

**Table 1. Share of the state's electricity by source, and power-sector $CO_{2}$**

| Year | Coal | Natural gas | Nuclear | Renewables | Power-sector $CO_{2}$ (million t) |
|---|---|---|---|---|---|
| 2005 | 50% | 20% | 20% | 10% | 60 |
| 2015 | 33% | 35% | 20% | 12% | 50 |
| 2025 | 15% | 42% | 19% | 24% | 36 |

**Questions**

(a) **Describe** the trend in coal's share of electricity from 2005 to 2025.

(b) **Calculate** the percent change in power-sector $CO_{2}$ from 2005 to 2025.

(c) **Calculate** the average $CO_{2}$ emitted per kWh in 2025, in grams.

(d) **Identify** the source whose share grew the most from 2005 to 2015, and **explain** why that change lowered emissions.

(e) **Explain** why the $CO_{2}$ data may understate the climate effect of the change in (d).

(f) **Identify** one environmental problem, other than climate change, that would decrease as coal's share falls.
      `
    },
    {
      id: 'apesfoss6-input1',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Use Table 1. Enter numbers only.

1) (b) The percent decrease in power-sector $CO_{2}$ from 2005 to 2025:

2) (c) Average grams of $CO_{2}$ per kWh in 2025:

3) By how many percentage points did the renewable share rise from 2015 to 2025?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['40', '360', '12'],
        hint1: '(36 − 60) ÷ 60 × 100, then report the size of the decrease.',
        hint2: 'Convert 36 million t to grams (× 10^6 t, × 10^6 g per t), then divide by 100 billion (10^11) kWh.',
        hint3: 'Subtract the 2015 share from the 2025 share.',
        explanation: '1) −24 ÷ 60 × 100 = −40 percent, a 40 percent decrease. 2) 3.6 × 10^13 g ÷ 10^11 kWh = 360 g per kWh. 3) 24 − 12 = 12 percentage points.'
      }
    },
    {
      id: 'apesfoss6-model1',
      type: 'text' as const,
      content: `
## Model Answers

**(a)** Coal's share **fell steadily**, from 50% in 2005 to 33% in 2015 and 15% in 2025, a drop of 35 percentage points.

**(b)** $\\dfrac{36 - 60}{60} \\times 100 = -40\\%$, a 40% decrease.

**(c)** $36 \\times 10^{6}\\ \\text{t} \\times 10^{6}\\ \\text{g/t} = 3.6 \\times 10^{13}$ g, and $100$ billion kWh $= 10^{11}$ kWh.
$$\\frac{3.6 \\times 10^{13}\\ \\text{g}}{10^{11}\\ \\text{kWh}} = 360\\ \\text{g/kWh}$$

**(d)** **Natural gas** grew most, from 20% to 35%. Burning natural gas releases about half the $CO_{2}$ per kWh of burning coal, because methane contains more hydrogen per carbon atom and gas plants are more efficient, so replacing coal generation with gas lowers $CO_{2}$ for the same electricity.

**(e)** Natural gas production and pipelines **leak methane**, a greenhouse gas that traps far more heat per kilogram than $CO_{2}$. Those leaks are not counted in power-sector $CO_{2}$, so the real climate benefit is smaller than the table suggests.

**(f)** Less $SO_{2}$ (and so less acid deposition), less mercury, less particulate matter, less coal ash, or fewer acres of strip and mountaintop mining. Any one, clearly linked to coal, earns the point.

### Reading the 2015–2025 change

From 2015 to 2025, coal fell another 18 points, but gas rose only 7. Renewables, which emit no $CO_{2}$ while generating, rose 12 points. That is why emissions fell faster in the second decade (50 to 36, a 28% drop) than in the first (60 to 50, a 17% drop).
      `
    },
    {
      id: 'apesfoss6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Data Practice** 🎯

Use Table 1 above.
      `,
      exercise: {
        questions: [
          {
            question: 'Nuclear\'s share stayed near 20% throughout. What role did that play in the state\'s emissions trend?',
            options: [
              'It kept about a fifth of output low-carbon as coal was replaced',
              'It caused most of the drop in $CO_{2}$ between 2005 and 2025',
              'It raised emissions, since uranium mining grew each decade',
              'It had no relation to emissions, as nuclear plants emit $SO_{2}$'
            ],
            correctAnswer: 0,
            explanation: 'Nuclear output barely changed, so it did not drive the decline; the drop came from gas and renewables replacing coal. Nuclear did keep about a fifth of generation nearly carbon-free throughout.'
          },
          {
            question: 'If the state had replaced its 2025 coal generation with natural gas instead of keeping it, which change to its 2025 $CO_{2}$ would you predict?',
            options: [
              'A decrease, because gas emits about half the $CO_{2}$ per kWh',
              'An increase, because gas plants burn more fuel per kWh than coal',
              'No change, because total generation stays at 100 billion kWh',
              'A decrease to zero, because natural gas releases no $CO_{2}$'
            ],
            correctAnswer: 0,
            explanation: 'Each kWh shifted from coal to gas cuts smokestack carbon dioxide roughly in half. Gas still emits carbon dioxide, so emissions would fall but not to zero.'
          }
        ]
      }
    },
    {
      id: 'apesfoss6-frq3',
      type: 'text' as const,
      content: `
## Free-Response 3: A Nuclear Plant by the Numbers

A **1,000 MW** nuclear plant runs at full output **90%** of the hours in a year (8,760 hours). Its thermal efficiency is **33%**. Each year it removes about **20 t** of spent fuel from its reactor. (Values are illustrative but realistic.)

**Questions**

(a) **Calculate** the electricity the plant generates in one year, in kWh. Show your work and express the answer in scientific notation.

(b) A coal plant emits about 1.0 kg of $CO_{2}$ per kWh. **Calculate** the mass of $CO_{2}$, in tonnes, that the nuclear plant avoids each year compared with an equal-output coal plant.

(c) Plutonium-239 in spent fuel has a half-life of about 24,000 years. **Calculate** the percent of the plutonium that remains after 72,000 years.

(d) **Explain** why the plant's spent fuel is stored on site.

(e) The plant draws cooling water from a river. **Describe** one environmental impact of returning that water to the river, and **propose** one way to reduce it.

(f) **Identify** one environmental impact of the nuclear fuel cycle that occurs **before** the fuel reaches the plant.
      `
    },
    {
      id: 'apesfoss6-model3',
      type: 'text' as const,
      content: `
## Model Answers

**(a)**
$$1{,}000\\ \\text{MW} \\times 8{,}760\\ \\text{h} \\times 0.90 = 7{,}884{,}000\\ \\text{MWh}$$
$$7{,}884{,}000\\ \\text{MWh} \\times 1{,}000\\ \\text{kWh/MWh} = 7.884 \\times 10^{9}\\ \\text{kWh}$$

**(b)**
$$7.884 \\times 10^{9}\\ \\text{kWh} \\times 1.0\\ \\text{kg/kWh} = 7.884 \\times 10^{9}\\ \\text{kg} = 7.884 \\times 10^{6}\\ \\text{t}$$

About 7.9 million tonnes of $CO_{2}$ avoided each year.

**(c)** $n = 72{,}000 \\div 24{,}000 = 3$ half-lives, and $(1/2)^{3} = 1/8 = 0.125$, so **12.5%** remains.

**(d)** The United States has no permanent geologic repository, so spent fuel stays at the plant: first in cooling pools, because it is still hot and highly radioactive, then in sealed dry casks.

**(e)** *Impact:* The returned water is warmer (**thermal pollution**), and warm water holds less dissolved oxygen, which stresses fish and other aquatic organisms. *Proposal:* Use **cooling towers** or a cooling pond so the water cools before it is returned to the river.

**(f)** Uranium mining and milling produce radioactive **tailings** and dust, disturb land and can contaminate water; enrichment is also energy-intensive.

### A check on (a)

A plant this size producing about 7.9 billion kWh a year would, at the 0.4 kg of coal per kWh worked out in Part 2, replace roughly $7.9 \\times 10^{9} \\times 0.4 \\approx 3.2 \\times 10^{9}$ kg, or about 3.2 million tonnes of coal a year, while generating about 20 t of spent fuel.
      `
    },
    {
      id: 'apesfoss6-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In free-response (a), why is the factor 0.90 included in the calculation?',
            options: [
              'The plant generates at full output only 90 percent of the hours',
              'The plant converts 90 percent of the fuel energy to electricity',
              'The plant loses 90 percent of its power on transmission lines',
              'The plant uses 90 percent of its power to run its own pumps'
            ],
            correctAnswer: 0,
            explanation: 'The 0.90 is the share of the year the plant runs at full output, often called its capacity factor. Its conversion efficiency is 33 percent, a separate number used for waste heat.'
          },
          {
            question: 'If refueling and repairs cut the plant\'s capacity factor from 90 percent to 80 percent, about how much electricity would it generate in a year?',
            options: [
              'About 7.0 billion kWh',
              'About 8.8 billion kWh',
              'About 2.3 billion kWh',
              'About 7.9 billion kWh'
            ],
            correctAnswer: 0,
            explanation: '1,000 MW × 8,760 h × 0.80 = 7,008,000 MWh, or about 7.0 billion kWh. Leaving out the capacity factor gives 8.8 billion, and also multiplying by the 33 percent efficiency gives 2.3 billion, which double-counts the losses.'
          },
          {
            question: 'How much of 20 t of spent fuel\'s cesium-137 (half-life 30 years) remains radioactive after 30 years, as a fraction of the original cesium?',
            options: [
              'One-half',
              'One-quarter',
              'One-eighth',
              'One-thirtieth'
            ],
            correctAnswer: 0,
            explanation: 'One half-life has passed, so half the cesium-137 atoms remain. A quarter would remain after 60 years and an eighth after 90 years; the 30 in the half-life is a number of years, not a fraction.'
          }
        ]
      }
    },
    {
      id: 'apesfoss6-summary',
      type: 'text' as const,
      content: `
## Part 6 Summary

| FRQ habit | Example from this part |
|---|---|
| Describe a trend with numbers | Coal fell from 50% to 15% |
| Percent change uses the starting value | (36 − 60) ÷ 60 × 100 = −40% |
| Convert units on paper | million t → g; billion kWh → kWh |
| Energy = power × time × capacity factor | 1,000 MW × 8,760 h × 0.90 |
| Half-life: count the halvings | 72,000 ÷ 24,000 = 3 → 1/8 |
| Explain = mechanism | Warm water holds less dissolved oxygen |
| Propose = specific action | Cooling towers before discharge |

**Next:** Part 7 ties the whole topic together.
      `
    }
  ]
};
