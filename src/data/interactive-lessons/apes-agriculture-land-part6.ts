export const apesAgricultureLandPart6Data = {
  topicSlug: 'apes-agriculture-land',
  sections: [
    {
      id: 'apesagri6-intro',
      type: 'text' as const,
      content: `
# 🌾 Agriculture & Land Use

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📋 Free-Response 1: Design an Investigation (Cover Crops) |
| Model Answers |
| Free-Response 3: Feedlot Versus Rotational Grazing |
| Model Answers |

> 🔑 **Key Concept:** The 2027 exam's three free-response questions are titled "Design an investigation," "Analyze and interpret quantitative data," and "Analyze an environmental problem doing calculations." Agriculture shows up in all three. Practice two of them here, with every value labeled as illustrative.

## 📋 Free-Response 1: Design an Investigation (Cover Crops)

A soil scientist wants to know whether planting winter rye as a cover crop after the corn harvest reduces soil erosion. She prepares **12 identical plots** on the same field with a 5% slope. After harvest, 6 randomly chosen plots are planted with rye and 6 are left bare. A trough at the bottom of each plot collects the sediment carried off by runoff, which is dried and weighed after every storm from October to April. (All values are illustrative.)

**Table 1. Soil lost from October to April**

| Treatment | Plot soil losses (t/ha) | Mean (t/ha) |
|---|---|---|
| Bare after harvest | 8.0, 9.1, 7.6, 8.8, 8.3, 8.6 | 8.4 |
| Winter rye cover crop | 2.4, 1.8, 2.2, 2.0, 1.9, 2.3 | 2.1 |

**Questions**

(a) **Identify** the independent variable in the investigation.

(b) **Identify** the dependent variable.

(c) **Identify** the control group.

(d) **State** the null hypothesis.

(e) **Identify** one variable that should be held constant across all plots, and **explain** why.

(f) **Calculate** the percent reduction in mean soil loss on the rye plots compared with the bare plots.

(g) **Explain** how the cover crop reduces soil erosion.

(h) **Describe** one disadvantage of cover crops for the farmer.
      `
    },
    {
      id: 'apesagri6-model1',
      type: 'text' as const,
      content: `
## Model Answers

**(a)** Whether the plot was planted with a winter rye cover crop (cover crop vs bare).

**(b)** The mass of soil lost to runoff per hectare from October to April (t/ha).

**(c)** The **bare** plots, which received no cover crop.

**(d)** Planting a winter rye cover crop has **no effect** on the amount of soil lost to erosion.

**(e)** Slope, because steeper ground produces faster runoff that carries more soil, so a slope difference could cause differences in soil loss unrelated to the cover crop. (Soil type, rainfall and tillage history are also acceptable, each with its reason.)

**(f)**
$$\\frac{8.4 - 2.1}{8.4} \\times 100 = \\frac{6.3}{8.4} \\times 100 = 75\\%\\ \\text{reduction}$$

**(g)** Rye leaves and stems intercept raindrops before they hit and loosen the soil, and rye roots bind soil particles together, so less soil is detached and carried away by runoff. The plants also slow runoff and increase infiltration.

**(h)** The farmer must pay for seed, fuel and labor to plant (and later kill) the rye, and the cover crop can use soil water that the next cash crop would otherwise use, which matters in dry springs.

### Scoring habits that earn points

- A **null hypothesis** states that there is no effect or no difference. "Rye will reduce erosion" is a hypothesis, not a null hypothesis.
- For a constant, name the variable **and** say how it could affect the dependent variable.
- Repetition matters: 6 plots per treatment, not 1, so one unusual plot cannot drive the result. **Random assignment** of plots prevents a bias such as all the rye plots landing on the gentlest ground.
      `
    },
    {
      id: 'apesagri6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Data Practice** 🎯

Use Table 1 above.
      `,
      exercise: {
        questions: [
          {
            question: 'What is the best reason the scientist used six plots for each treatment instead of one?',
            options: [
              'To keep one unusual plot from deciding the result',
              'To make sure the rye plots would lose less soil',
              'To allow the slope to differ between the plots',
              'To finish the study in fewer storms'
            ],
            correctAnswer: 0,
            explanation: 'Replicates reveal natural variation among plots and keep a single unusual plot from controlling the conclusion. Replication does not decide the outcome in advance.'
          },
          {
            question: 'The rye plots lost between 1.8 and 2.4 t/ha, and the bare plots lost between 7.6 and 9.1 t/ha. What does this pattern support?',
            options: [
              'The ranges do not overlap, so the difference is very unlikely to be chance',
              'Both ranges are wide, so no conclusion can be drawn from these plots at all',
              'The bare plots varied more, so the bare plots must have had steeper slopes',
              'The rye plots varied less, so rye roots must have dried out the soil faster'
            ],
            correctAnswer: 0,
            explanation: 'Every rye plot lost less soil than every bare plot, and the ranges are far apart, which is strong evidence against the null hypothesis. The study design kept slope constant, so slope cannot explain the spread.'
          }
        ]
      }
    },
    {
      id: 'apesagri6-frq3',
      type: 'text' as const,
      content: `
## Free-Response 3: Feedlot Versus Rotational Grazing

A ranching cooperative is choosing how to raise **500 steers** to slaughter weight. It compares a feedlot (CAFO) with rotational grazing. (All values are illustrative.)

**Table 2. Per-steer values for each system**

| | Feedlot | Rotational grazing |
|---|---|---|
| Land used per steer, including cropland for feed (ha) | 0.8 | 2.5 |
| Days to reach slaughter weight | 180 | 400 |
| Weight gained per day (kg) | 1.5 | 0.7 |
| Feed eaten per day (kg of grain-based ration) | 9 | 0 (pasture only) |
| Manure produced per day (kg) | 25 | 25 |

**Questions**

(a) **Calculate** the total land needed for 500 steers in each system.

(b) **Calculate** the percent more land that grazing requires than the feedlot.

(c) **Calculate** the feed conversion ratio (kg feed per kg gained) for a feedlot steer.

(d) **Calculate** the total manure produced by 500 feedlot steers over the 180-day finishing period, in tonnes. Express your answer in scientific notation.

(e) **Explain** why the manure from the feedlot is an environmental problem while the same amount of manure from grazing generally is not.

(f) **Identify** one environmental advantage of the feedlot system.

(g) **Propose** one way to reduce water pollution from the feedlot, and **describe** one drawback of your proposal.
      `
    },
    {
      id: 'apesagri6-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Use Table 2. Enter numbers only, without units.

1) (a) Total land for 500 grazing steers, in hectares:

2) (b) Percent more land needed for grazing than for the feedlot:

3) (d) Total manure from 500 feedlot steers over 180 days, in tonnes:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1250', '212.5', '2250'],
        hint1: '500 × 2.5 ha.',
        hint2: 'Feedlot land is 500 × 0.8 = 400 ha. Then (1,250 − 400) ÷ 400 × 100.',
        hint3: '500 × 25 kg × 180 days gives kilograms; divide by 1,000 for tonnes.',
        explanation: '1) 500 × 2.5 = 1,250 ha. 2) 850 ÷ 400 × 100 = 212.5 percent more land. 3) 500 × 25 × 180 = 2,250,000 kg = 2,250 t.'
      }
    },
    {
      id: 'apesagri6-model3',
      type: 'text' as const,
      content: `
## Model Answers

**(a)** Feedlot: $500 \\times 0.8 = 400$ ha. Grazing: $500 \\times 2.5 = 1{,}250$ ha.

**(b)** $\\dfrac{1{,}250 - 400}{400} \\times 100 = 212.5\\%$ more land.

**(c)** $\\dfrac{9\\ \\text{kg feed}}{1.5\\ \\text{kg gained}} = 6$ kg of feed per kg gained.

**(d)** $500 \\times 25\\ \\text{kg} \\times 180 = 2{,}250{,}000\\ \\text{kg} = 2{,}250\\ \\text{t} = 2.25 \\times 10^{3}$ t.

**(e)** In the feedlot, the manure is **concentrated** in one place, far more than nearby fields can absorb. Stored in lagoons or overapplied to fields, it can leak or run off, carrying nitrogen, phosphorus and fecal bacteria such as *E. coli* into streams and groundwater. On pasture the same manure is **spread thinly** over a large area, where plants and soil organisms take up the nutrients.

**(f)** It uses far less land (400 ha vs 1,250 ha), leaving more land for natural habitat. (Faster weight gain, so fewer days of methane emissions per animal, is also acceptable.)

**(g)** *Proposal:* Line and cover the manure lagoons, or treat manure in an anaerobic digester that captures methane for energy. *Drawback:* Both require a large up-front cost, which raises the price of the meat.

### Why grazing takes longer

At 0.7 kg per day, a grazing steer needs $\\frac{1.5}{0.7} \\approx 2.1$ times as many days as a feedlot steer to gain the same weight, so it occupies land, and emits methane from digestion, for longer. This is one reason grazing is not automatically the lower-emission choice per kilogram of beef.
      `
    },
    {
      id: 'apesagri6-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Using Table 2, how many kilograms does one feedlot steer gain over its 180-day finishing period?',
            options: [
              '270 kg',
              '1,620 kg',
              '126 kg',
              '4,500 kg'
            ],
            correctAnswer: 0,
            explanation: '1.5 kg per day × 180 days = 270 kg. The value 1,620 kg is the feed eaten, 4,500 kg is one steer\'s manure, and 126 kg uses the grazing gain rate.'
          },
          {
            question: 'The cooperative wants to stop routine antibiotic use. Which concern supports that choice?',
            options: [
              'Routine low doses select for drug-resistant bacteria',
              'Antibiotics raise the amount of feed each steer needs',
              'Antibiotics make manure lagoons overflow more often',
              'Routine doses keep steers from gaining weight'
            ],
            correctAnswer: 0,
            explanation: 'Frequent low doses kill susceptible bacteria and leave resistant strains to multiply. Those resistant bacteria can spread to people through meat, manure and water.'
          },
          {
            question: 'A critic says the grazing system will cause desertification. Which condition would make the critic\'s concern most valid?',
            options: [
              'The herd eats grass faster than the pastures regrow',
              'The herd is moved to a new paddock every few days',
              'The pastures receive steady rainfall each season',
              'The herd grazes on native grasses with deep roots'
            ],
            correctAnswer: 0,
            explanation: 'Desertification follows overgrazing, when animals remove plants faster than they regrow. Frequent rotation, reliable rain and deep-rooted grasses all work against it.'
          }
        ]
      }
    },
    {
      id: 'apesagri6-summary',
      type: 'text' as const,
      content: `
## Part 6 Summary

| FRQ skill | What to write |
|---|---|
| Independent variable | The factor the researcher changes (cover crop or not) |
| Dependent variable | What is measured, with units (soil lost, t/ha) |
| Control group | The untreated comparison (bare plots) |
| Null hypothesis | "No effect" or "no difference" |
| Constant | Name it **and** explain how it could affect the result |
| Calculations | Show the setup, keep units, use scientific notation when asked |
| Propose and describe | One specific solution plus one specific drawback |

**Next:** Part 7 ties the whole topic together, from the Green Revolution to sustainable yield.
      `
    }
  ]
};
