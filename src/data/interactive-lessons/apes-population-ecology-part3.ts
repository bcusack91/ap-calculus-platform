export const apesPopulationEcologyPart3Data = {
  topicSlug: 'apes-population-ecology',
  sections: [
    {
      id: 'apespopu3-intro',
      type: 'text' as const,
      content: `
# 🐾 Population Ecology

**Part 3 of 7 — Survivorship Curves**

---

| Section |
|---------|
| 📖 What a Survivorship Curve Shows |
| Building a Curve From a Life Table |
| Types I, II and III and the Link to r and K |

> 🔑 **Key Concept:** A **survivorship curve** is a line that shows how many members of a cohort are still alive at each age. Its shape tells you **when in life most individuals die**: late in life (Type I), at a steady rate throughout life (Type II) or very early in life (Type III). The shape connects directly to the r- and K-selected strategies from Part 2.
      `
    },
    {
      id: 'apespopu3-axes',
      type: 'text' as const,
      content: `
## 📖 What a Survivorship Curve Shows

A **cohort** is a group of individuals born at the same time. Ecologists follow the cohort until every member has died and record how many are alive at each age. By convention, the cohort is scaled to start at **1,000** newborns so that species can be compared.

### The x axis: age

Age is usually shown as a **percent of maximum lifespan**, from 0% to 100%. This lets you compare a mayfly and an elephant on the same graph even though their lifespans differ enormously.

### The y axis: survivors on a logarithmic scale

The y axis shows the number of survivors, but it is **logarithmic**, not linear. The labels 1, 10, 100 and 1,000 are spaced **equally** up the axis. In words:

- Moving from 1,000 down to 100 covers the same vertical distance as moving from 100 down to 10, or from 10 down to 1.
- Each equal step down the axis means the number of survivors is divided by 10.
- The curve can never reach zero on this scale; the last survivor plots at 1.

### Why use a log scale?

On a log scale, **losing the same percentage** of the survivors in every time interval plots as a **straight line**. That makes the three curve shapes easy to tell apart. It also keeps small numbers visible: the difference between 10 and 5 survivors is as easy to see as the difference between 1,000 and 500.

### Worked Example 1: Reading a Log Axis

A cohort's curve drops from 1,000 to 100 survivors during the first 10% of the lifespan, then from 100 to 10 during the remaining 90%.

**Step 1. Deaths in the first interval:** $1{,}000 - 100 = 900$, which is $\\frac{900}{1{,}000} = 90\\%$ of the cohort.

**Step 2. Deaths in the rest of life:** $100 - 10 = 90$, which is $\\frac{90}{1{,}000} = 9\\%$ of the cohort.

On the graph, both drops cover the **same vertical distance**, because each is a 90% loss of whoever was alive at the start of the interval. The steep part of the curve (the first 10% of life) is where the cohort's mortality is concentrated.
      `
    },
    {
      id: 'apespopu3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'On a survivorship graph with a logarithmic y axis, a Type II curve appears as a straight diagonal line. What does this mean?',
            options: [
              'The same number of individuals dies in each age interval',
              'The same percentage of those alive dies in each age interval',
              'Most individuals die in the first age interval of life',
              'The same rise in deaths occurs with each added year of age'
            ],
            correctAnswer: 1,
            explanation: 'A straight line on a log axis means survivors are reduced by the same proportion in every interval, so the mortality rate is constant. A constant number of deaths, or a death rate that keeps rising with age, would curve on a log axis, and a pile-up of deaths in the first interval describes Type III.'
          },
          {
            question: 'In a life table, 400 members of a cohort are alive at age 2 and 100 are alive at age 3. What is the mortality rate for that interval?',
            options: [
              '25%',
              '300%',
              '75%',
              '33%'
            ],
            correctAnswer: 2,
            explanation: 'Deaths are 400 − 100 = 300, and 300 ÷ 400 = 0.75, a 75 percent mortality rate. Dividing survivors by the starting number gives 25 percent, which is the survival rate, not the mortality rate.'
          },
          {
            question: 'Oysters release millions of eggs each spawning season and provide no parental care. Which survivorship pattern would they most likely show?',
            options: [
              'Type I, with most deaths late in life',
              'Type II, with deaths spread evenly over life',
              'Type III, with most deaths early in life',
              'Type I, with deaths spread evenly over life'
            ],
            correctAnswer: 2,
            explanation: 'With millions of unprotected larvae, nearly all oysters die very young, and the few that settle and grow survive much better, which is a Type III pattern. Type I describes deaths concentrated in old age, and Type II describes a constant mortality rate.'
          }
        ]
      }
    },
    {
      id: 'apespopu3-lifetable',
      type: 'text' as const,
      content: `
## Building a Curve From a Life Table

A **life table** records how many members of a cohort are alive at the start of each age interval. From it you can calculate the deaths and the mortality rate for every interval.

$$\\text{Mortality rate} = \\frac{\\text{number alive at start} - \\text{number alive at end}}{\\text{number alive at start}} \\times 100$$

### Three cohorts of 1,000 (illustrative data)

| Age (% of max lifespan) | Species A: survivors | Species B: survivors | Species C: survivors |
|---|---|---|---|
| 0 | 1,000 | 1,000 | 1,000 |
| 20 | 970 | 250 | 10 |
| 40 | 940 | 63 | 7 |
| 60 | 880 | 16 | 5 |
| 80 | 500 | 4 | 3 |
| 100 | 1 | 1 | 1 |

### Worked Example 2: Mortality Rate in Each Interval

| Interval | Species A | Species B | Species C |
|---|---|---|---|
| 0–20% | $\\frac{30}{1{,}000} = 3\\%$ | $\\frac{750}{1{,}000} = 75\\%$ | $\\frac{990}{1{,}000} = 99\\%$ |
| 20–40% | $\\frac{30}{970} \\approx 3\\%$ | $\\frac{187}{250} \\approx 75\\%$ | $\\frac{3}{10} = 30\\%$ |
| 40–60% | $\\frac{60}{940} \\approx 6\\%$ | $\\frac{47}{63} \\approx 75\\%$ | $\\frac{2}{7} \\approx 29\\%$ |
| 60–80% | $\\frac{380}{880} \\approx 43\\%$ | $\\frac{12}{16} = 75\\%$ | $\\frac{2}{5} = 40\\%$ |

**Read the pattern:**
- **Species A:** mortality is tiny until late in life, then soars. That is **Type I**.
- **Species B:** mortality is about 75% in every interval. A constant rate is **Type II**.
- **Species C:** 99% die in the first interval; survivors then face much lower risk. That is **Type III**.

### Worked Example 3: Percent of the Cohort Reaching Midlife

At 40% of maximum lifespan:

$$\\text{A: } \\frac{940}{1{,}000} = 94\\% \\qquad \\text{B: } \\frac{63}{1{,}000} = 6.3\\% \\qquad \\text{C: } \\frac{7}{1{,}000} = 0.7\\%$$

### What the three curves look like on the log axis

- **Species A (Type I):** stays nearly flat near the top of the graph for most of life, then plunges steeply near the right edge.
- **Species B (Type II):** a straight diagonal line from 1,000 at the upper left to 1 at the lower right, because each interval divides the survivors by 4.
- **Species C (Type III):** plunges almost straight down near age 0, then runs nearly flat along the bottom of the graph.

> 🔑 **AP Connection:** If a question gives you a life table, do not judge the type from the raw numbers alone. Calculate the mortality rate in each interval, then ask: is it low early and high late (I), roughly constant (II) or extremely high early and lower later (III)?
      `
    },
    {
      id: 'apespopu3-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

A biologist follows a cohort of 1,000 newly hatched lizards of one species (illustrative data):

| Age (years) | Survivors |
|---|---|
| 0 | 1,000 |
| 1 | 200 |
| 2 | 150 |
| 3 | 120 |

Enter numbers only, without percent signs, unless a type is asked for.

1) What is the mortality rate, in percent, from age 0 to age 1?

2) What percent of the original cohort is still alive at age 3?

3) Which survivorship type does this cohort show? Enter the Roman numeral.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['80', '12', 'III'],
        hint1: '800 of the 1,000 died in the first year. Divide deaths by the number alive at the start.',
        hint2: 'Divide survivors at age 3 by the original 1,000.',
        hint3: 'Compare first-year mortality (80%) with the later intervals (25% and 20%).',
        explanation: '1) 800 ÷ 1,000 = 80 percent. 2) 120 ÷ 1,000 = 12 percent. 3) Mortality is very high in the first year and much lower afterward (50 ÷ 200 = 25 percent, then 30 ÷ 150 = 20 percent), which is a Type III pattern.'
      }
    },
    {
      id: 'apespopu3-types',
      type: 'text' as const,
      content: `
## Types I, II and III and the Link to r and K

| Type | Shape on a log y axis | When most deaths occur | Examples | Usual strategy |
|---|---|---|---|---|
| **Type I** | Flat for most of life, then a steep drop | Late in life | Humans in developed countries, elephants, many large mammals | K-selected |
| **Type II** | Straight diagonal line | Spread evenly through life; constant mortality rate | Many songbirds, squirrels, many lizards | Between r and K |
| **Type III** | Steep drop at the start, then nearly flat | Very early in life | Oysters, most fish, frogs, sea turtles, dandelions | r-selected |

### Why the shapes match the strategies

- **Type I and K-selection:** K-selected parents produce few offspring and invest heavily in each one (nursing, protection, teaching). That care keeps juvenile survival high, so most individuals live until old age.
- **Type III and r-selection:** r-selected parents release many small offspring with no care. Most are eaten, starve or land in unsuitable habitat almost immediately. The few that survive the early bottleneck are larger and harder to kill, so the curve flattens.
- **Type II:** the risk of death, often from predators or accidents, stays about the same at every age.

### Exceptions and nuance

- The link to r and K is a **tendency**, not a law. Sea turtles are long-lived and mature late, yet show Type III survivorship because hatchlings are so vulnerable.
- Many real species mix patterns. Songbirds often lose a large share of nestlings early, then follow a roughly Type II line as adults.
- A species' curve can change with conditions. Better nutrition and medical care have shifted human survivorship strongly toward Type I.

### A common mistake to avoid

On a log axis, a straight Type II line means a **constant percentage** dies each interval, not a constant **number**. In Species B above, 750 die in the first interval but only 3 in the last, yet the rate is 75% both times.
      `
    },
    {
      id: 'apespopu3-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A mammal produces one offspring every three years, nurses it for more than a year, and 85 percent of its young reach adulthood. Which pattern is expected?',
            options: [
              'Type III curve with a K-selected strategy',
              'Type I curve with an r-selected strategy',
              'Type II curve with an r-selected strategy',
              'Type I curve with a K-selected strategy'
            ],
            correctAnswer: 3,
            explanation: 'Few offspring with long parental care is a K-selected strategy, and high juvenile survival keeps the curve flat until late in life, which is Type I. An r-selected strategy or a Type III curve would mean many offspring with most dying young.'
          },
          {
            question: 'A student claims that any species with a Type III survivorship curve must have a short maximum lifespan. Which evidence best refutes this claim?',
            options: [
              'Elephants show a Type I curve and can live for many decades as adults',
              'Sea turtles show a Type III curve yet can live for many decades as adults',
              'Mayflies show a Type III curve and live only a day or two as adults',
              'Songbirds show a Type II curve and live for several years as adults'
            ],
            correctAnswer: 1,
            explanation: 'Sea turtles lose most hatchlings almost immediately, yet the survivors can live for decades, so a Type III curve does not require a short lifespan. Mayflies support the claim rather than refuting it, and elephants and songbirds have other curve types.'
          },
          {
            question: 'Two cohorts each begin with 1,000 newborns. At 10 percent of maximum lifespan, cohort A has 900 survivors and cohort B has 20. What share of cohort B died in that interval, and which curve type does this suggest?',
            options: [
              '2%, Type III',
              '98%, Type I',
              '98%, Type III',
              '90%, Type II'
            ],
            correctAnswer: 2,
            explanation: 'Cohort B lost 980 of 1,000, or 98 percent, in the first tenth of its lifespan; mortality that heavy, that early, marks a Type III curve. The value 2 percent is the share that survived, not the share that died.'
          }
        ]
      }
    },
    {
      id: 'apespopu3-summary',
      type: 'text' as const,
      content: `
## Part 3 Summary

| Idea | Key fact |
|---|---|
| Survivorship curve | Number of a cohort still alive at each age |
| Cohort | Individuals born at the same time; scaled to start at 1,000 |
| x axis | Age, often as percent of maximum lifespan |
| y axis | Survivors on a log scale: 1, 10, 100, 1,000 equally spaced |
| Mortality rate | (Alive at start − alive at end) ÷ alive at start × 100 |
| Type I | Low mortality until old age; K-selected (humans, elephants) |
| Type II | Constant mortality rate; straight line (songbirds, squirrels) |
| Type III | Very high early mortality; r-selected (oysters, fish, sea turtles) |
| Caution | Constant rate is not the same as a constant number of deaths |

**Next:** Part 4 turns births, deaths and migration into numbers: growth rates, doubling times and the exponential and logistic equations worked step by step.
      `
    }
  ]
};
