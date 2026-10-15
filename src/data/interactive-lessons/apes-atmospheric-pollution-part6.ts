export const apesAtmosphericPollutionPart6Data = {
  topicSlug: 'apes-atmospheric-pollution',
  sections: [
    {
      id: 'apesatmo6-intro',
      type: 'text' as const,
      content: `
# 🏭 Atmospheric Pollution

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📋 Free-Response A: Ozone in a Basin City |
| Model Answers |
| Free-Response B: A Coal Plant Upwind of a Lake District |
| Model Answers |

> 🔑 **Key Concept:** Air pollution questions mix three skills: reading data, doing a calculation with units, and explaining a mechanism. Use the task verb: **identify** asks for a name, **describe** asks for a pattern with numbers, **explain** asks for the cause-and-effect link, and **propose** asks for a specific, realistic action.

## 📋 Free-Response A: Ozone in a Basin City

A city lies in a basin ringed by mountains. The table shows regional data (all values are illustrative).

**Table 1. Vehicle travel, emissions and ozone**

| Year | Vehicle-miles traveled (billion) | $NO_{x}$ emissions (thousand t) | VOC emissions (thousand t) | Days above the 8-hour ozone standard |
|---|---|---|---|---|
| 2000 | 40 | 120 | 100 | 60 |
| 2010 | 46 | 84 | 70 | 38 |
| 2020 | 50 | 54 | 50 | 21 |

**Questions**

(a) **Identify** the two groups of primary pollutants in Table 1 that react to form ground-level ozone.

(b) **Describe** the trend in the number of days above the ozone standard from 2000 to 2020.

(c) **Calculate** the percent change in $NO_{x}$ emissions from 2000 to 2020.

(d) **Calculate** the $NO_{x}$ emitted per billion vehicle-miles in 2000 and in 2020, and **explain** what the change indicates.

(e) **Explain** how a thermal inversion over the basin raises ground-level ozone concentrations.

(f) **Propose** one further way to reduce the number of high-ozone days, and **describe** one disadvantage of your proposal.
      `
    },
    {
      id: 'apesatmo6-input1',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Use Table 1. Enter numbers only.

1) (c) The percent decrease in $NO_{x}$ emissions from 2000 to 2020:

2) The percent increase in vehicle-miles traveled from 2000 to 2020:

3) (d) Thousand tonnes of $NO_{x}$ per billion vehicle-miles in 2000:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['55', '25', '3'],
        hint1: '(54 − 120) ÷ 120 × 100, then report the size of the decrease.',
        hint2: '(50 − 40) ÷ 40 × 100.',
        hint3: 'Divide the 2000 emissions by the 2000 vehicle-miles.',
        explanation: '1) −66 ÷ 120 × 100 = −55 percent, a 55 percent decrease. 2) 10 ÷ 40 × 100 = 25 percent. 3) 120 ÷ 40 = 3 thousand tonnes per billion vehicle-miles.'
      }
    },
    {
      id: 'apesatmo6-modelA',
      type: 'text' as const,
      content: `
## Model Answers

**(a)** **Nitrogen oxides** $(NO_{x})$ and **volatile organic compounds** (VOCs). In sunlight they react to form ozone, a secondary pollutant.

**(b)** The number of days above the standard **decreased steadily**, from 60 in 2000 to 38 in 2010 and 21 in 2020, a drop of 39 days (65 percent).

**(c)**
$$\\frac{54 - 120}{120} \\times 100 = -55\\%$$
A 55 percent decrease.

**(d)**
$$2000: \\frac{120}{40} = 3.0\\ \\text{thousand t per billion miles} \\qquad 2020: \\frac{54}{50} = 1.08\\ \\text{thousand t per billion miles}$$
Emissions per mile fell by about two-thirds even though people drove 25 percent more. Each vehicle became much cleaner, for example through **catalytic converters** and stricter tailpipe standards, which outweighed the growth in driving.

**(e)** In an inversion, a layer of **warm air sits above cooler air** at the surface. The cool, dense air cannot rise through it, so vertical mixing stops. $NO_{x}$ and VOCs from traffic stay concentrated near the ground, where sunlight converts them to ozone, and the mountains block winds that could carry the pollution sideways.

**(f)** Sample proposals, each with a disadvantage:

| Proposal | Disadvantage |
|---|---|
| Expand public transit to cut vehicle-miles | High construction cost; takes years to build |
| Require vapor recovery nozzles and low-VOC paints | Higher costs for stations and consumers |
| Incentives for electric vehicles | Expensive; power plants may still emit $NO_{x}$ unless the grid is clean |

### Reading Table 1 like an examiner

Ozone days fell **65 percent** while $NO_{x}$ fell **55 percent** and VOCs fell **50 percent**. The data show a strong association, but weather also varies from year to year; to support a **causal** claim you would want several years of data at each point and the summer temperature and sunshine for each year.
      `
    },
    {
      id: 'apesatmo6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Data Practice** 🎯

Use Table 1 above.
      `,
      exercise: {
        questions: [
          {
            question: 'Vehicle-miles rose 25 percent from 2000 to 2020, yet $NO_{x}$ emissions fell 55 percent. Which explanation best fits the data?',
            options: [
              'The average vehicle emitted far less $NO_{x}$ per mile than before',
              'Fewer people drove, so the region\'s total traffic fell over time',
              'Ozone formation used up $NO_{x}$ before it could be counted',
              'Stronger inversions held $NO_{x}$ inside the vehicle engines'
            ],
            correctAnswer: 0,
            explanation: 'Total emissions fell while driving grew, so emissions per mile must have dropped, from 3.0 to about 1.1 thousand tonnes per billion miles. The table shows driving increased, and emission inventories count what leaves the tailpipe.'
          },
          {
            question: 'Which additional data would best test whether the drop in high-ozone days came from emission cuts rather than from cooler, cloudier summers?',
            options: [
              'Rain pH readings at each monitoring site',
              'Warm-season heat and sunshine for each year',
              'Radon test results from homes in the city',
              'Dobson unit readings of stratospheric ozone'
            ],
            correctAnswer: 1,
            explanation: 'Ozone forms faster in heat and strong sunlight, so weather records let you check whether summers changed. Rain pH, radon and stratospheric ozone do not measure the conditions that drive ground-level ozone formation.'
          },
          {
            question: 'Nearly all of the city\'s high-ozone days fall between May and September. What is the main reason?',
            options: [
              'Stronger sunlight and heat',
              'Home furnaces burn more fuel then',
              'Winter rain washes out the CFCs',
              'Cold air holds fewer VOC molecules'
            ],
            correctAnswer: 0,
            explanation: 'Sunlight splits nitrogen dioxide to start ozone formation, and heat speeds the reactions and the evaporation of VOCs. Furnaces run in winter, and CFCs affect stratospheric rather than ground-level ozone.'
          }
        ]
      }
    },
    {
      id: 'apesatmo6-frqB',
      type: 'text' as const,
      content: `
## Free-Response B: A Coal Plant Upwind of a Lake District

A coal-burning power plant lies about 300 km west of a region of lakes on granite bedrock. Without controls it would emit **60,000 t** of $SO_{2}$ and **40,000 t** of particulates a year. It installs a **wet scrubber** that removes **95%** of the $SO_{2}$ and an **electrostatic precipitator** that removes **99%** of the particulates. The pH of one lake fell from **6.5** in 1950 to **5.0** in 1990. (All values are illustrative.)

**Questions**

(a) **Calculate** the tonnes of $SO_{2}$ the plant releases each year after scrubbing.

(b) The plant holds **5,000** $SO_{2}$ allowances, each worth **\\$400**. **Calculate** the money it could earn by selling the allowances it no longer needs after scrubbing.

(c) **Calculate** how many times greater the lake's hydrogen ion concentration was in 1990 than in 1950.

(d) **Explain** why lakes on granite bedrock are more vulnerable to acid deposition than lakes on limestone.

(e) **Explain** one way acid deposition harms fish other than through low pH itself.

(f) Managers propose adding crushed limestone to the lake. **Describe** one limitation of this approach.
      `
    },
    {
      id: 'apesatmo6-modelB',
      type: 'text' as const,
      content: `
## Model Answers

**(a)**
$$60{,}000\\ \\text{t} \\times (1 - 0.95) = 60{,}000 \\times 0.05 = 3{,}000\\ \\text{t of } SO_{2}$$

**(b)** Each allowance covers 1 ton, so the plant needs 3,000 and has 5,000.
$$5{,}000 - 3{,}000 = 2{,}000\\ \\text{spare allowances}$$
$$2{,}000 \\times \\$400 = \\$800{,}000$$

**(c)**
$$6.5 - 5.0 = 1.5 \\quad\\Rightarrow\\quad 10^{1.5} \\approx 32\\ \\text{times}$$

**(d)** Limestone is **calcium carbonate**, which reacts with and neutralizes acid, so lakes over it are **buffered**. Granite and thin soils over it contain little carbonate, so incoming acid lowers the lake's pH.

**(e)** Acid deposition **releases aluminum** from soils into the water, and aluminum damages fish **gills**. Low pH also prevents fish **eggs from hatching**, so populations fail to replace themselves.

**(f)** Liming treats the symptom, not the cause: it must be **repeated** as long as acid keeps falling, it is costly across many remote lakes, and it does not restore calcium already leached from the surrounding soils.

### Two common point-losers

- In (a), multiplying by 0.95 gives the amount **removed**, not released.
- In (c), dividing 6.5 by 5.0 gives 1.3, which ignores the logarithmic scale.
      `
    },
    {
      id: 'apesatmo6-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In free-response B, roughly how many times did the lake\'s hydrogen ion concentration rise when its pH fell from 6.5 to 5.0?',
            options: [
              'About 1.3 times',
              'About 32 times',
              'About 15 times',
              'About 150 times'
            ],
            correctAnswer: 1,
            explanation: 'The pH fell by 1.5 units, and 10 to the power 1.5 is about 32. Dividing the pH values gives 1.3, and multiplying the difference by 10 gives 15; neither uses the logarithm.'
          },
          {
            question: 'For part (f), a student writes that adding limestone "solves the acid rain problem." Which reply best explains why that answer is incomplete?',
            options: [
              'Liming has to be repeated and leaves the upwind emissions unchanged',
              'Liming makes the lake too alkaline for any fish to survive in it',
              'Liming adds sulfur, which forms extra sulfuric acid in the water',
              'Liming warms the water, which lowers its dissolved oxygen level'
            ],
            correctAnswer: 0,
            explanation: 'Crushed limestone neutralizes acid already in the lake, but acid keeps arriving from the plant, so the treatment must be repeated. Only cutting sulfur dioxide and nitrogen oxide emissions removes the cause.'
          },
          {
            question: 'Workers in a newly renovated, tightly sealed office with new carpet and pressed-wood desks report eye irritation and headaches. Which pollutant is the most likely cause?',
            options: [
              'Radon-222 gas',
              'Asbestos fibers',
              'Formaldehyde',
              'Carbon dioxide'
            ],
            correctAnswer: 2,
            explanation: 'Formaldehyde is a VOC released by glues in pressed wood and by new carpets, and it irritates the eyes and airways, especially in poorly ventilated buildings. Radon enters from the ground, and asbestos comes from old insulation that is disturbed.'
          }
        ]
      }
    },
    {
      id: 'apesatmo6-summary',
      type: 'text' as const,
      content: `
## Part 6 Summary

| FRQ habit | Example from this part |
|---|---|
| Describe a trend with numbers | High-ozone days fell from 60 to 21 |
| Percent change uses the starting value | (54 − 120) ÷ 120 × 100 = −55% |
| Normalize to compare fairly | $NO_{x}$ per billion vehicle-miles: 3.0 → 1.08 |
| Released = total × (1 − removal fraction) | 60,000 × 0.05 = 3,000 t |
| Allowances: 1 allowance = 1 ton | 2,000 spare × \\$400 = \\$800,000 |
| pH differences are powers of 10 | 1.5 units → about 32 times |
| Explain = mechanism | Warm layer aloft stops vertical mixing |
| Propose = specific action plus trade-off | Transit expansion; high cost |

**Next:** Part 7 ties the whole topic together.
      `
    }
  ]
};
