export const apesPopulationEcologyPart7Data = {
  topicSlug: 'apes-population-ecology',
  sections: [
    {
      id: 'apespopu7-intro',
      type: 'text' as const,
      content: `
# 🐾 Population Ecology

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 The Whole Topic on One Page |
| Calculations Recap |
| Mixed Review |

> 🔑 **Key Concept:** Population ecology answers one question: **why does a population grow, stop or crash?** The answer always comes back to the same chain. A species' reproductive strategy sets how fast it can grow; its limiting resources set how large it can get; and density-dependent feedback, time lags and outside shocks decide whether it levels off at K, overshoots or cycles.
      `
    },
    {
      id: 'apespopu7-onepage',
      type: 'text' as const,
      content: `
## 📖 The Whole Topic on One Page

| Part | Big idea | Must-know facts |
|---|---|---|
| 1 | Growth models | Exponential (J): dN/dt = rN. Logistic (S): dN/dt = rN(K − N)/K. Fastest logistic growth at K/2 |
| 2 | Generalists, specialists, r and K | Generalists favored in changing environments; specialists in stable ones and more extinction-prone. r-selected: many offspring, little care. K-selected: few offspring, much care. Most species are in between |
| 3 | Survivorship curves | Type I: deaths late (humans, elephants). Type II: constant rate (songbirds). Type III: deaths early (oysters, fish). Log y axis |
| 4 | Growth calculations | ΔN = (B + I) − (D + E); percent rate = ΔN ÷ N × 100; per 1,000 ÷ 10 = percent; doubling time ≈ 70 ÷ rate |
| 5 | Carrying capacity and overshoot | Limiting resource sets K; K changes; time lags cause overshoot and dieback (St. Matthew Island); hare-lynx cycle about 10 years |
| 6 | Exam skills | Use data in every answer; estimate K from the plateau; fastest growth in the interval containing K/2 |

### How the parts connect

| If a species is... | It tends to have... | So after a disturbance it... |
|---|---|---|
| r-selected generalist | High biotic potential, Type III survivorship, wide tolerance | Rebounds fast; can become invasive in a new habitat |
| K-selected specialist | Low biotic potential, Type I survivorship, narrow niche | Recovers slowly; is among the most likely to go extinct |
| Any species above K | Births below deaths as resources run short | Declines; if resources were damaged, settles at a lower K |
      `
    },
    {
      id: 'apespopu7-recap',
      type: 'text' as const,
      content: `
## Calculations Recap

Work each example yourself before reading the answer.

| Task | Setup | Answer |
|---|---|---|
| Change in a population of 900 with 150 births, 90 deaths, 20 immigrants, 40 emigrants | (150 + 20) − (90 + 40) | +40, so N = 940 |
| Percent growth rate of that population | 40 ÷ 900 × 100 | ≈ 4.4% |
| Rate of natural increase with 28 births and 8 deaths per 1,000 | (28 − 8) ÷ 10 | 2% |
| Doubling time at 5% per year | 70 ÷ 5 | 14 years |
| A population of 300 after 3 doublings | 300 × 2³ | 2,400 |
| Logistic growth with r = 0.2, K = 600, N = 150 | 0.2 × 150 × (450 ÷ 600) | 22.5 per year |
| Mortality from 500 alive to 125 alive | (500 − 125) ÷ 500 × 100 | 75% |
| K with 240,000 kg of forage and 1,200 kg per animal per year | 240,000 ÷ 1,200 | 200 animals |

### Worked Example: Putting Several Steps Together (illustrative data)

A population of 400 rabbits has K = 1,000 and r = 0.5 per year.

**Step 1. Logistic growth now:** $0.5 \\times 400 \\times \\frac{1{,}000 - 400}{1{,}000} = 200 \\times 0.6 = 120$ rabbits per year.

**Step 2. Growth if there were no limit:** $0.5 \\times 400 = 200$ rabbits per year.

**Step 3. Compare:** environmental resistance is already removing $\\frac{200 - 120}{200} \\times 100 = 40\\%$ of the potential growth. As N approaches K, that share rises toward 100%.
      `
    },
    {
      id: 'apespopu7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which combination of traits would make a species most vulnerable to extinction when its habitat changes?',
            options: [
              'A broad niche, early maturity and Type III survivorship',
              'A narrow niche, late maturity and Type I survivorship',
              'A broad niche, late maturity and Type II survivorship',
              'A narrow niche, early maturity and Type III survivorship'
            ],
            correctAnswer: 1,
            explanation: 'A narrow niche leaves no fallback when the habitat changes, and late maturity with Type I survivorship means few offspring and slow recovery. Early maturity and many short-lived young let a population rebuild quickly.'
          },
          {
            question: 'A population of 5,000 has a birth rate of 40 per 1,000 and a death rate of 15 per 1,000, and 50 more individuals emigrate than immigrate in a year. What is its percent growth rate?',
            options: [
              '2.5%',
              '3.5%',
              '1.5%',
              '5.5%'
            ],
            correctAnswer: 2,
            explanation: 'Births are 200 and deaths 75, so natural increase adds 125; subtracting 50 net emigrants leaves 75, and 75 ÷ 5,000 = 1.5 percent. The value 2.5 percent is the rate of natural increase, which ignores migration.'
          },
          {
            question: 'Which description of a population graph matches overshoot followed by dieback?',
            options: [
              'Rises in an S shape and levels off smoothly at K',
              'Rises steeply past K, then drops far below it',
              'Rises steadily in a straight line with no upper limit',
              'Oscillates in small waves just above and below K over time'
            ],
            correctAnswer: 1,
            explanation: 'Overshoot means the population climbs above carrying capacity, and dieback is the steep crash that follows, often to well below K. A smooth S shape is logistic growth, and small waves around K show normal fluctuation rather than overshoot.'
          }
        ]
      }
    },
    {
      id: 'apespopu7-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers without commas or percent signs, or a single word where a term is asked for.

1) A graph showing how many members of a cohort are still alive at each age is called a _______ curve.

2) A population of 2000 has 300 births, 100 deaths, 50 immigrants and 50 emigrants in a year. What is its percent growth rate?

3) A logistic population has r = 0.2 per year and K = 800. When N = 400, what is dN/dt, in individuals per year?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['survivorship', '10', '40'],
        hint1: 'Its three types are labeled I, II and III.',
        hint2: 'Immigrants and emigrants cancel here; divide the change by 2,000 and multiply by 100.',
        hint3: 'N is exactly K/2, so (K − N)/K = 0.5.',
        explanation: '1) A survivorship curve tracks a cohort from birth to death. 2) (300 + 50) − (100 + 50) = 200, and 200 ÷ 2,000 × 100 = 10 percent. 3) 0.2 × 400 × 0.5 = 40 individuals per year, the maximum for this population.'
      }
    },
    {
      id: 'apespopu7-mixed',
      type: 'text' as const,
      content: `
## Mixed Review

The last set of questions mixes every part of the topic. Before you start, run through this checklist:

- Can you sketch J- and S-shaped curves and mark K and K/2?
- Can you place a species on the r–K continuum from its traits, and predict its survivorship curve?
- Can you calculate a growth rate that includes migration, a doubling time and a logistic dN/dt?
- Can you explain, step by step, why a population overshoots and how that can lower K?
- Can you name a density-dependent factor and explain how it slows growth?

> 🔑 **AP Connection:** Multiple-choice questions on this topic often hide a calculation inside a scenario. Underline every number in the stem, decide which formula it belongs to, and check whether the question asks for natural increase or total growth, and for a number or a percent.
      `
    },
    {
      id: 'apespopu7-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A biologist doubles the food supply available to a logistic population that has leveled off at K. If food was the limiting resource, which outcome is best predicted?',
            options: [
              'K stays fixed and the population remains at its old size',
              'K rises and the population grows toward a higher plateau',
              'K rises but the population cannot grow past its original K',
              'K falls because extra food spreads disease through the herd'
            ],
            correctAnswer: 1,
            explanation: 'Carrying capacity is set by the limiting resource, so more food raises K and the population grows toward the new level. A population is not locked to its old K once the resource that set it changes.'
          },
          {
            question: 'An invasive mussel population grows at 14 percent per year. Using the rule of 70, about how many years will it take to double?',
            options: [
              '14 years',
              '5 years',
              '7 years',
              '10 years'
            ],
            correctAnswer: 1,
            explanation: 'Doubling time is about 70 ÷ 14 = 5 years. Using the growth rate itself as the doubling time gives 14 years, and halving it gives 7.'
          },
          {
            question: 'Why do species with Type III survivorship typically produce very large numbers of offspring?',
            options: [
              'Parents care for each young, so large numbers can all be raised to adulthood',
              'Adults die young, so they must reproduce many times before old age arrives',
              'Most young die early, so large numbers are needed for a few to reach adulthood',
              'Few young die early, so the population quickly grows past carrying capacity'
            ],
            correctAnswer: 2,
            explanation: 'In a Type III species, nearly all young die soon after birth, so only very large broods leave enough survivors to replace the parents. Type III species give little parental care, and their deaths are concentrated early in life, not among adults.'
          }
        ]
      }
    },
    {
      id: 'apespopu7-summary',
      type: 'text' as const,
      content: `
## Part 7 Summary

| Question | Short answer |
|---|---|
| How fast can it grow? | Set by biotic potential: r-selected species grow fastest |
| How large can it get? | Set by K, which the limiting resource determines |
| What slows it near K? | Density-dependent factors: competition, disease, predation, territory |
| When do most individuals die? | Read the survivorship curve: late (I), steady (II) or early (III) |
| Why do populations crash? | Overshoot from time lags, often finished off by a density-independent shock |
| Who recovers fastest? | r-selected generalists; K-selected specialists recover slowest |

**Next:** You have finished Population Ecology. The human population topic applies these same ideas to people: age structure, fertility and the demographic transition.
      `
    }
  ]
};
