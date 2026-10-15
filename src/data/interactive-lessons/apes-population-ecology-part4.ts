export const apesPopulationEcologyPart4Data = {
  topicSlug: 'apes-population-ecology',
  sections: [
    {
      id: 'apespopu4-intro',
      type: 'text' as const,
      content: `
# 🐾 Population Ecology

**Part 4 of 7 — Population Growth Calculations**

---

| Section |
|---------|
| 📖 Counting Change: Births, Deaths and Migration |
| Rates: Per Capita, Percent and Per 1,000 |
| Doubling Time and Exponential Projection |
| Exponential vs. Logistic, Number by Number |

> 🔑 **Key Concept:** Every population changes for only four reasons: births, deaths, immigration and emigration. This part turns those four numbers into growth rates and doubling times, then plugs real numbers into the exponential and logistic equations from Part 1 so you can see exactly how growth slows as a population approaches its carrying capacity. (Human birth and death rates and the demographic transition are covered in the human population topic.)
      `
    },
    {
      id: 'apespopu4-change',
      type: 'text' as const,
      content: `
## 📖 Counting Change: Births, Deaths and Migration

$$\\Delta N = (B + I) - (D + E)$$

| Symbol | Meaning | Effect on N |
|---|---|---|
| B | Births | Adds |
| I | Immigration: individuals moving **in** | Adds |
| D | Deaths | Subtracts |
| E | Emigration: individuals moving **out** | Subtracts |

A population with no migration (an island, a lake with no connections) is **closed**: only births and deaths change it. Most wild populations are **open**, and migration can matter as much as births.

### Worked Example 1: An Elk Herd (illustrative data)

A herd starts the year with 1,200 elk. During the year there are 300 births, 180 deaths, 40 elk immigrate and 60 emigrate.

**Step 1. Add the gains:** $B + I = 300 + 40 = 340$

**Step 2. Add the losses:** $D + E = 180 + 60 = 240$

**Step 3. Find the change:** $\\Delta N = 340 - 240 = +100$

**Step 4. New population:** $1{,}200 + 100 = 1{,}300$ elk.
      `
    },
    {
      id: 'apespopu4-rates',
      type: 'text' as const,
      content: `
## Rates: Per Capita, Percent and Per 1,000

Raw numbers do not let you compare a herd of 1,200 with a herd of 120,000. Rates do.

### Per capita growth rate

$$r = \\frac{\\Delta N}{N} \\qquad \\text{Percent growth rate} = \\frac{\\Delta N}{N} \\times 100$$

For the elk herd: $\\frac{100}{1{,}200} \\approx 0.083$, an **8.3% growth rate per year**.

### Rates per 1,000

Ecologists, like demographers, often express births and deaths per 1,000 individuals:

$$\\text{Birth rate} = \\frac{300}{1{,}200} \\times 1{,}000 = 250 \\text{ per 1,000} \\qquad \\text{Death rate} = \\frac{180}{1{,}200} \\times 1{,}000 = 150 \\text{ per 1,000}$$

To convert a difference **per 1,000** into a **percent**, divide by 10:

$$\\text{Rate of natural increase} = \\frac{250 - 150}{10} = 10\\%$$

### Worked Example 2: Why 10% and 8.3% Differ

Natural increase (births minus deaths) for the elk is 10%. Net migration is $40 - 60 = -20$ elk, which is $\\frac{-20}{1{,}200} \\times 100 \\approx -1.7\\%$.

$$10\\% + (-1.7\\%) \\approx 8.3\\%$$

The total growth rate includes migration; the rate of natural increase does not. Read each question carefully to see which one it asks for.

### Percent change between two counts

$$\\text{Percent change} = \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100$$

A trout population that falls from 2,500 to 1,900 changes by $\\frac{1{,}900 - 2{,}500}{2{,}500} \\times 100 = -24\\%$.
      `
    },
    {
      id: 'apespopu4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Calculate It** 🧮
      `,
      exercise: {
        questions: [
          {
            question: 'A fish population of 2,000 has 600 births, 300 deaths, no immigration and 100 emigrants in one year. What is its percent growth rate for that year?',
            options: [
              '15%',
              '20%',
              '10%',
              '30%'
            ],
            correctAnswer: 2,
            explanation: 'The change is (600 + 0) − (300 + 100) = 200, and 200 ÷ 2,000 = 10 percent. Ignoring emigration gives 15 percent, and adding the emigrants instead of subtracting them gives 20 percent.'
          },
          {
            question: 'A deer population has a birth rate of 32 per 1,000 and a death rate of 12 per 1,000, with no migration. What is its percent growth rate?',
            options: [
              '20%',
              '2%',
              '0.2%',
              '0.02%'
            ],
            correctAnswer: 1,
            explanation: 'The difference is 20 per 1,000, and dividing by 10 converts it to a percent: 2 percent per year. Forgetting to divide by 10 gives 20 percent.'
          },
          {
            question: 'A rabbit population is growing at 7 percent per year. Using the rule of 70, about how long will it take to double?',
            options: [
              '7 years',
              '10 years',
              '14 years',
              '70 years'
            ],
            correctAnswer: 1,
            explanation: 'Doubling time is about 70 divided by the percent growth rate, and 70 ÷ 7 = 10 years. Using the growth rate itself, 7 years, or the constant 70 skips the division.'
          }
        ]
      }
    },
    {
      id: 'apespopu4-doubling',
      type: 'text' as const,
      content: `
## Doubling Time and Exponential Projection

### The rule of 70

The rule of 70 (introduced in the biodiversity topic) estimates how long a population growing at a constant percent rate takes to double:

$$\\text{Doubling time} \\approx \\frac{70}{\\text{percent growth rate}}$$

For the elk herd growing 8.3% per year: $\\frac{70}{8.3} \\approx 8.4$ years. The rule is an approximation that works best for small growth rates, roughly under 10% per year; at higher rates it becomes less exact.

### Counting doublings

If you know the doubling time, count how many doublings fit in the period:

$$N_{\\text{final}} = N_{0} \\times 2^{n} \\qquad n = \\frac{\\text{time elapsed}}{\\text{doubling time}}$$

**Worked Example 3:** An invasive snail colony of 250 doubles every 2 years. After 10 years, $n = \\frac{10}{2} = 5$ doublings:

$$250 \\times 2^{5} = 250 \\times 32 = 8{,}000 \\text{ snails}$$

### Year-by-year projection

With a constant annual growth rate r, each year multiplies the population by $(1 + r)$:

$$N_{t} = N_{0}(1 + r)^{t}$$

**Worked Example 4:** 500 rabbits grow at 20% per year.

| Year | Calculation | Population |
|---|---|---|
| 0 | Starting value | 500 |
| 1 | $500 \\times 1.2$ | 600 |
| 2 | $600 \\times 1.2$ | 720 |
| 3 | $720 \\times 1.2$ | 864 |

Notice that the population adds 100, then 120, then 144: the **number** added grows every year even though the **percent** stays fixed. That is what makes exponential growth J-shaped.
      `
    },
    {
      id: 'apespopu4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only, without commas.

1) A newt population of 800 has 120 births, 60 deaths, 10 immigrants and 30 emigrants in a year. What is the population at the end of the year?

2) A population grows at 3.5% per year. Using the rule of 70, what is its doubling time in years?

3) A logistic population has r = 0.5 per year and K = 500. When N = 100, what is dN/dt, in individuals per year?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['840', '20', '40'],
        hint1: 'Gains are births plus immigrants; losses are deaths plus emigrants.',
        hint2: 'Divide 70 by the percent growth rate.',
        hint3: 'Calculate rN first, then multiply by (K − N) ÷ K.',
        explanation: '1) (120 + 10) − (60 + 30) = 40, so 800 + 40 = 840. 2) 70 ÷ 3.5 = 20 years. 3) rN = 0.5 × 100 = 50, and (500 − 100) ÷ 500 = 0.8, so dN/dt = 50 × 0.8 = 40 per year.'
      }
    },
    {
      id: 'apespopu4-logistic',
      type: 'text' as const,
      content: `
## Exponential vs. Logistic, Number by Number

Part 1 gave the two equations:

$$\\text{Exponential: } \\frac{dN}{dt} = rN \\qquad \\text{Logistic: } \\frac{dN}{dt} = rN\\frac{K - N}{K}$$

The factor $\\frac{K - N}{K}$ is the share of carrying capacity still unused. When N is small it is close to 1, so logistic growth looks exponential. As N approaches K it shrinks toward 0.

### Worked Example 5: The Same Population Under Both Models

A population has $r = 0.4$ per year and $K = 1{,}000$.

| N | Exponential: rN | Unused share (K − N)/K | Logistic: rN(K − N)/K |
|---|---|---|---|
| 100 | 40 | 0.90 | $40 \\times 0.90 = 36$ |
| 250 | 100 | 0.75 | $100 \\times 0.75 = 75$ |
| 500 | 200 | 0.50 | $200 \\times 0.50 = 100$ |
| 750 | 300 | 0.25 | $300 \\times 0.25 = 75$ |
| 900 | 360 | 0.10 | $360 \\times 0.10 = 36$ |
| 1,000 | 400 | 0 | $400 \\times 0 = 0$ |

**What the table shows:**
- At small N, the two models nearly agree (40 vs. 36).
- Logistic growth peaks at **N = K/2 = 500**, with 100 individuals per year, and is symmetric around that point (75 at both 250 and 750).
- At N = K, growth is zero. Individuals are still being born; births simply equal deaths.

### Worked Example 6: A Population Above K

If a disturbance-free year of high births pushes the same population to N = 1,200:

$$\\frac{dN}{dt} = 0.4 \\times 1{,}200 \\times \\frac{1{,}000 - 1{,}200}{1{,}000} = 480 \\times (-0.2) = -96$$

The negative value means the model predicts a **decline** of about 96 individuals per year, pulling the population back toward K. Part 5 explores what happens when a population overshoots K much more severely.

> 🔑 **AP Connection:** On calculation questions, write the equation, substitute every value with units and then give the answer with units ("individuals per year"). Partial credit often depends on showing the setup, not just the final number.
      `
    },
    {
      id: 'apespopu4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A logistic population has r = 0.3 per year and K = 2,000. At what population size is growth fastest, and what is dN/dt at that size?',
            options: [
              '2,000; 600 per year',
              '1,000; 300 per year',
              '500; 112.5 per year',
              '1,000; 150 per year'
            ],
            correctAnswer: 3,
            explanation: 'Logistic growth is fastest at K/2 = 1,000, where dN/dt = 0.3 × 1,000 × 0.5 = 150 per year. The value 300 per year leaves out the factor (K − N)/K, and at N = K growth is zero, not 600.'
          },
          {
            question: 'A logistic population with r = 0.4 per year and K = 1,000 currently has 1,200 individuals. What does the model predict?',
            options: [
              'It grows by about 96 individuals per year',
              'It declines by about 96 individuals per year',
              'It grows by about 480 individuals per year',
              'It holds at 1,200 since births equal deaths'
            ],
            correctAnswer: 1,
            explanation: 'Above K, the factor (K − N)/K is negative: 0.4 × 1,200 × (−0.2) = −96, so the population shrinks by about 96 per year. Births equal deaths only at N = K, and 480 is the exponential rate with no limit applied.'
          },
          {
            question: 'Which statement correctly contrasts exponential and logistic growth?',
            options: [
              'Only logistic growth slows as the population nears K',
              'Only exponential growth is limited by carrying capacity, K',
              'Logistic growth peaks at K, where the birth rate is highest',
              'Exponential growth adds the same number of individuals each year'
            ],
            correctAnswer: 0,
            explanation: 'The (K − N)/K factor makes logistic growth slow as the population approaches carrying capacity, while exponential growth has no such limit. Logistic growth peaks at K/2, and exponential growth adds a larger number each year, not the same number.'
          }
        ]
      }
    },
    {
      id: 'apespopu4-summary',
      type: 'text' as const,
      content: `
## Part 4 Summary

| Calculation | Formula | Example |
|---|---|---|
| Change in N | (B + I) − (D + E) | (300 + 40) − (180 + 60) = +100 |
| Percent growth rate | ΔN ÷ N × 100 | 100 ÷ 1,200 × 100 ≈ 8.3% |
| Per 1,000 to percent | Divide by 10 | (250 − 150) ÷ 10 = 10% |
| Percent change | (new − old) ÷ old × 100 | (1,900 − 2,500) ÷ 2,500 × 100 = −24% |
| Doubling time | 70 ÷ percent growth rate | 70 ÷ 7 = 10 years |
| Counting doublings | N₀ × 2ⁿ | 250 × 2⁵ = 8,000 |
| Exponential | dN/dt = rN | 0.4 × 500 = 200 per year |
| Logistic | dN/dt = rN(K − N)/K | 0.4 × 500 × 0.5 = 100 per year |

**Next:** Part 5 asks what sets K in the first place, and what happens when a population overshoots it: dieback, boom-and-bust cycles and the predator-prey oscillations of the snowshoe hare and lynx.
      `
    }
  ]
};
