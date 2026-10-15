export const apesBiodiversityPart7Data = {
  topicSlug: 'apes-biodiversity',
  sections: [
    {
      id: 'apesbiod7-intro',
      type: 'text' as const,
      content: `
# 🦜 Biodiversity

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 🧭 The Topic on One Page |
| One Landscape, Every Idea |
| Final Checklist |

## 🧭 The Topic on One Page

| CED topic | Big idea | Where you learned it |
|---|---|---|
| 2.1 Introduction to biodiversity | Genetic, species and ecosystem diversity; richness and evenness; bottlenecks reduce genetic diversity and adaptive potential | Parts 1–2 |
| 2.2 Ecosystem services | Provisioning, regulating, cultural and supporting services; losing biodiversity has economic costs | Parts 1, 3 |
| 2.3 Island biogeography | Species number balances immigration (falls with distance) and extinction (falls with size); fragments act as islands | Parts 1, 4 |
| 2.4 Ecological tolerance | Optimal range, zones of physiological stress and zones of intolerance | Part 5 |
| 2.5 Natural disruptions | Periodic, episodic or random events; can match or exceed human disruptions | Part 5 |
| 2.6 Adaptations | Populations adapt over generations by natural selection; rapid change can outpace adaptation | Part 5 |

### Calculations from this topic

| Skill | Rule |
|---|---|
| Percent composition | $n \\div N \\times 100$ |
| Simpson's diversity index | $D = 1 - \\Sigma (n/N)^{2}$; higher D = more diverse |
| Species–area rule of thumb | 10 times the area ≈ 2 times the species |
| Percent change and percent lost | (new − old) ÷ old × 100 |
| Area units | 1 $km^{2}$ = 100 ha = 1,000,000 $m^{2}$ |
| Rule of 70 | doubling (or halving) time ≈ 70 ÷ percent annual rate |
      `
    },
    {
      id: 'apesbiod7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A population of 2,000 animals is reduced to 40 by a hurricane and then recovers to 2,000. Compared with before the hurricane, the recovered population most likely has',
            options: [
              'less genetic diversity, because survivors held only part of the gene pool',
              'more genetic diversity, because the recovery created many new alleles at once',
              'the same genetic diversity, because the final population size is the same',
              'more genetic diversity, because the survivors were the fittest individuals'
            ],
            correctAnswer: 0,
            explanation: 'A bottleneck keeps only the alleles the few survivors happened to carry, so diversity stays low even after numbers recover. New alleles arise by mutation far too slowly to restore it in a few generations.'
          },
          {
            question: 'Which island would be predicted to hold the most species at equilibrium?',
            options: [
              'A large island near the mainland',
              'A small island near the mainland',
              'A large island far from the mainland',
              'A small island far from the mainland'
            ],
            correctAnswer: 0,
            explanation: 'Being near the mainland raises immigration, and being large lowers extinction, so a large, near island has the highest equilibrium species number. A small, distant island has the lowest.'
          },
          {
            question: 'A forest fire that strikes a pine forest every few decades, to which several species are adapted, is best described as which kind of disruption?',
            options: [
              'Periodic',
              'Random',
              'Episodic',
              'Human-made'
            ],
            correctAnswer: 0,
            explanation: 'A disturbance that recurs at fairly regular intervals is periodic, and species can evolve adaptations to it, such as cones that open after fire. Episodic events recur irregularly, and random events have no pattern.'
          }
        ]
      }
    },
    {
      id: 'apesbiod7-landscape',
      type: 'text' as const,
      content: `
## One Landscape, Every Idea

**Scenario:** A river valley holds a 3 $km^{2}$ wetland surrounded by farms, a 50 km² national forest upstream, and a small lake with a native trout population. (All values are hypothetical.)

### Worked Example: Following the Connections

**1. Ecosystem services (2.2).** The wetland provides flood control valued at \\$2,000 per hectare per year.
- Area: $3\\ km^{2} \\times 100\\ \\text{ha}/km^{2} = 300$ ha
- Value: 300 ha × \\$2,000 per ha = \\$600,000 per year

**2. Fragmentation (2.3).** Farms drain all but 0.3 $km^{2}$ of the wetland.
- Percent lost: $\\dfrac{3 - 0.3}{3} \\times 100 = 90\\%$
- Species–area rule: a 10-fold decrease in area, so wetland species richness is predicted to fall by about half.

**3. Tolerance (2.4).** The trout's optimal range is 10–16 °C. Losing streamside shade warms the lake's summer water to 19 °C, a zone of physiological stress: the trout survive, but grow and reproduce poorly.

**4. Rule of 70 (2.6).** The stressed trout population declines 7% per year.
- Halving time $\\approx 70 \\div 7 = 10$ years

**5. Genetic diversity (2.1).** If the trout fall to a few dozen fish, the population passes through a **bottleneck**, losing alleles that might have helped later generations tolerate warmer water.

**6. Natural disruption (2.5).** A drought year on top of these stresses could finish the population. Drought is a natural event, but its impact is larger here because the population has already been weakened.
      `
    },
    {
      id: 'apesbiod7-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

1) A meadow sample has 60 bees, 30 beetles and 10 butterflies. What is Simpson's D? (two decimals)

2) A 4 $km^{2}$ marsh is valued at \\$1,500 per hectare per year for storm protection. What is its total value, in dollars per year? (no commas)

3) An invasive plant spreads at 10% per year. Using the rule of 70, about how many years until the area it covers doubles?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.54', '600000', '7'],
        hint1: 'Proportions 0.6, 0.3 and 0.1. Square, add, subtract from 1.',
        hint2: '4 km² = 400 ha.',
        hint3: '70 ÷ 10.',
        explanation: '1) 0.36 + 0.09 + 0.01 = 0.46, so D = 1 − 0.46 = 0.54. 2) 400 ha × 1,500 = 600,000 dollars per year. 3) 70 ÷ 10 = 7 years.'
      }
    },
    {
      id: 'apesbiod7-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Ocean water near a reef stays 1–2 °C above its normal summer maximum for six weeks, and many corals turn white. Which explanation is best?',
            options: [
              'Heat stress pushed the corals out of their optimal range, and they expelled their algae',
              'Warmer water carried more nutrients, which fed algae that smothered the coral',
              'The corals adapted to the heat by switching off their own pigments',
              'The heat killed the coral\'s predators, and grazing fish stripped the color'
            ],
            correctAnswer: 0,
            explanation: 'Prolonged temperatures above the normal maximum move corals into a zone of physiological stress, and they expel the zooxanthellae that give them color and food. Individual corals cannot adapt in a few weeks; adaptation happens across generations.'
          },
          {
            question: 'Which statement about adaptation is accurate?',
            options: [
              'Populations adapt over generations as individuals with helpful traits leave more offspring',
              'Individual organisms adapt during their own lifetimes by developing whatever traits they need',
              'Adaptation happens fastest in species with long lifespans and few offspring',
              'Adaptation keeps pace with environmental change whenever enough habitat remains'
            ],
            correctAnswer: 0,
            explanation: 'Natural selection acts on existing variation, so traits become common across generations, not within one lifetime. Species with short generations and many offspring adapt fastest, and rapid change can outpace adaptation.'
          },
          {
            question: 'A wetland that absorbs floodwater is drained for farmland, and downstream flood damage rises from \\$2 million to \\$5 million per year. What is the percent change in flood damage?',
            options: [
              '+150%',
              '+60%',
              '+250%',
              '+3%'
            ],
            correctAnswer: 0,
            explanation: 'Percent change is (5 − 2) ÷ 2 × 100 = +150 percent. Dividing the change by the new value instead gives 60 percent, and 250 percent compares the new value to the old without subtracting.'
          }
        ]
      }
    },
    {
      id: 'apesbiod7-checklist',
      type: 'text' as const,
      content: `
## Final Checklist

Before the exam, make sure you can do each of these without notes:

- Define genetic, species and ecosystem diversity, and explain how a bottleneck lowers adaptive potential
- Compare two communities by richness and evenness, and calculate Simpson's D
- Classify ecosystem services into the four categories and explain the economic cost of losing one
- Read the island biogeography graph and predict species number from island size and distance
- Apply the species–area rule of thumb and explain edge effects and corridors
- Identify the optimal range and the zones of stress and intolerance on a tolerance curve
- Classify a natural disruption as periodic, episodic or random
- Explain why adaptation happens to populations over generations, and why rapid change can outpace it
- Calculate percent change, convert $km^{2}$ to hectares, and use the rule of 70

> 🔑 **AP Connection:** Unit 2 ideas return in Unit 3 (populations and succession) and Unit 9 (HIPPCO threats, protected areas and climate change). The calculations and vocabulary from this topic are the tools you will use there.
      `
    }
  ]
};
