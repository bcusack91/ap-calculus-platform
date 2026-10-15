export const apesBiodiversityConservationPart4Data = {
  topicSlug: 'apes-biodiversity-conservation',
  sections: [
    {
      id: 'apesbiod4-intro',
      type: 'text' as const,
      content: `
# 🛡️ Biodiversity Conservation

**Part 4 of 7 — Monitoring Populations: Sampling and Data**

---

| Section |
|---------|
| 📖 Why Counting Is Hard |
| Mark-Recapture Estimates |
| Quadrat Sampling and Scaling Up |
| Reading a Population Trend |

> 🔑 **Key Concept:** Listing a species, judging a recovery and tracking an invader all depend on knowing how many individuals exist. Scientists almost never count every one. They sample, then calculate. This part works through the two sampling methods APES uses most and shows how to read the trend data that come out of them.
      `
    },
    {
      id: 'apesbiod4-markrecapture',
      type: 'text' as const,
      content: `
## 📖 Why Counting Is Hard

Animals move, hide and look alike, and plants can cover areas too large to walk. So scientists choose a method that fits the organism:

| Organism | Typical method |
|---|---|
| Mobile animals (fish, turtles, small mammals, butterflies) | **Mark-recapture** |
| Plants, slow-moving or attached organisms (barnacles, mussels) | **Quadrat sampling** |
| Large, visible animals in open country (elk, elephants) | Aerial counts or camera traps |

## Mark-Recapture Estimates

1. Capture a sample, **mark** each individual harmlessly (tag, band, paint dot), and release them. Call this number $M$.
2. Wait for the marked animals to mix back into the population.
3. Capture a second sample. Count all individuals caught, $C$, and how many of them carry marks, $R$ (recaptured).

The fraction of marked animals in the second sample should match the fraction marked in the whole population:

$$\\frac{R}{C} = \\frac{M}{N} \\quad\\Rightarrow\\quad N = \\frac{M \\times C}{R}$$

### Worked Example 1: Pond Turtles (illustrative data)

Researchers mark 60 turtles and release them. Two weeks later they catch 50 turtles, and 12 are marked.

$$N = \\frac{60 \\times 50}{12} = \\frac{3{,}000}{12} = 250\\ \\text{turtles}$$

Check the logic: 12 of 50, or 24%, of the second catch were marked. If 60 turtles are 24% of the population, the population is $60 \\div 0.24 = 250$.

### Assumptions, and what breaks them

| Assumption | If it is violated | Effect on the estimate |
|---|---|---|
| Marks are not lost | Tags fall off, so $R$ is too small | Overestimate |
| Marked animals mix randomly | Marked animals stay near the release point and are recaught more often | Underestimate |
| Marking does not change behavior | Marked animals avoid traps ("trap-shy"), so $R$ is too small | Overestimate |
| The population is closed | Births, deaths or migration between samples change $N$ | Estimate describes neither date accurately |

The rule to remember: anything that makes $R$ too small makes $N$ too large, because $R$ is in the denominator.
      `
    },
    {
      id: 'apesbiod4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Biologists band 80 songbirds and release them. Later they net 40 birds, of which 8 are banded. What is the estimated population?',
            options: [
              '400 birds',
              '320 birds',
              '160 birds',
              '640 birds'
            ],
            correctAnswer: 0,
            explanation: 'N = (80 × 40) ÷ 8 = 3,200 ÷ 8 = 400 birds. Dividing by 10 instead of 8 gives 320, and multiplying 80 by 8 gives 640.'
          },
          {
            question: 'In a mark-recapture study, many fish lose their tags before the second sample. How will this affect the population estimate?',
            options: [
              'The estimate will be too high, since fewer marked fish are recaught',
              'The estimate will be too low, since fewer marked fish are recaught',
              'The estimate will be too high, since more total fish are caught',
              'The estimate will not change, since the first sample size is fixed'
            ],
            correctAnswer: 0,
            explanation: 'Lost tags make the recaptured count too small, and that count sits in the denominator of N = MC ÷ R, so N comes out too large. The number of fish caught in the second sample does not depend on whether tags fell off.'
          },
          {
            question: 'Which organism would be counted most appropriately with quadrat sampling rather than mark-recapture?',
            options: [
              'Brook trout in a mountain stream',
              'Box turtles in an oak forest',
              'Milkweed plants in a meadow',
              'Monarch butterflies in a field'
            ],
            correctAnswer: 2,
            explanation: 'Milkweed plants stay in place, so counting them in sample squares and scaling up works well. Trout, turtles and butterflies move around, which is exactly the situation mark-recapture is designed for.'
          }
        ]
      }
    },
    {
      id: 'apesbiod4-quadrat',
      type: 'text' as const,
      content: `
## Quadrat Sampling and Scaling Up

A **quadrat** is a square frame (often 1 m × 1 m) placed at **random** locations. Random placement avoids the bias of choosing spots that "look typical."

| Step | What you do |
|---|---|
| 1 | Count individuals in each quadrat |
| 2 | Find the mean count per quadrat, or total count ÷ total area sampled |
| 3 | Convert to density per m² |
| 4 | Multiply by the full area, in m² |

### Worked Example 2: A Rare Orchid (illustrative data)

Ten 1-m² quadrats in a 2-hectare meadow contain these orchid counts: 3, 5, 0, 4, 6, 2, 4, 5, 3, 5.

**Step 1. Total count:** $3 + 5 + 0 + 4 + 6 + 2 + 4 + 5 + 3 + 5 = 37$

**Step 2. Density:** $37 \\div 10\\ \\text{m}^2 = 3.7$ orchids per m²

**Step 3. Convert the meadow to m²:** $2\\ \\text{ha} \\times 10{,}000\\ \\text{m}^2/\\text{ha} = 20{,}000\\ \\text{m}^2$

**Step 4. Scale up:** $3.7 \\times 20{,}000 = 74{,}000$ orchids

### Worked Example 3: Different Quadrat Sizes

Mussel surveyors use 0.25-m² quadrats (50 cm × 50 cm). Eight quadrats hold a total of 96 mussels.

$$\\text{area sampled} = 8 \\times 0.25 = 2\\ \\text{m}^2 \\qquad \\text{density} = \\frac{96}{2} = 48\\ \\text{per m}^2$$

A common error is dividing by the number of quadrats (96 ÷ 8 = 12) and calling that the density per m². That value is per **quadrat**, and each quadrat is only a quarter of a square meter.
      `
    },
    {
      id: 'apesbiod4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only, without commas or units. Values are illustrative.

1) Researchers mark 120 salamanders. In a later sample of 90 salamanders, 15 are marked. Estimate the population size.

2) Twenty 1-m² quadrats contain a total of 46 invasive garlic mustard plants. What is the density, in plants per m²?

3) Using your density from question 2, how many garlic mustard plants are in a 3-hectare woodland?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['720', '2.3', '69000'],
        hint1: 'N = (marked × total in second sample) ÷ recaptured.',
        hint2: 'Divide the total count by the total area sampled (20 m²).',
        hint3: 'One hectare is 10,000 m², so 3 ha is 30,000 m².',
        explanation: '1) (120 × 90) ÷ 15 = 10,800 ÷ 15 = 720. 2) 46 ÷ 20 = 2.3 plants per m². 3) 2.3 × 30,000 = 69,000 plants.'
      }
    },
    {
      id: 'apesbiod4-trends',
      type: 'text' as const,
      content: `
## Reading a Population Trend

Single estimates matter less than the trend across years. The table below (illustrative data) shows mark-recapture estimates for a river otter population. Trapping was banned and a riverside buffer was protected in 2012.

| Year | 2006 | 2008 | 2010 | 2012 | 2014 | 2016 | 2018 | 2020 |
|---|---|---|---|---|---|---|---|---|
| Otters | 300 | 260 | 220 | 200 | 230 | 290 | 360 | 420 |

### Worked Example 4: Describing and Quantifying the Trend

**Describe:** The population declined from 2006 to 2012, then increased every survey after protection began.

**Percent change before protection (2006 to 2012):**
$$\\frac{200 - 300}{300} \\times 100 \\approx -33\\%$$

**Percent change after protection (2012 to 2020):**
$$\\frac{420 - 200}{200} \\times 100 = 110\\%$$

**Average change per year after protection:**
$$\\frac{420 - 200}{2020 - 2012} = \\frac{220}{8} = 27.5\\ \\text{otters per year}$$

### Correlation is not proof

The turnaround lines up with protection, but the data alone cannot rule out other causes, such as a run of mild winters or better water quality. A stronger study would compare this river with a similar unprotected river over the same years, a **control**.

> 🔑 **AP Connection:** When asked to "describe the trend," state the direction and the turning point with years. When asked to "justify a claim," cite numbers from the table. When asked about a limitation, point to the missing control or to a sampling assumption.
      `
    },
    {
      id: 'apesbiod4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

Use the otter table in the section above.
      `,
      exercise: {
        questions: [
          {
            question: 'What was the percent change in the otter population from 2014 to 2018?',
            options: [
              'About 57 percent',
              'About 130 percent',
              'About 36 percent',
              'About 64 percent'
            ],
            correctAnswer: 0,
            explanation: '(360 − 230) ÷ 230 × 100 ≈ 57 percent. Dividing the 130-otter increase by 360 instead of 230 gives about 36 percent, which uses the wrong starting value.'
          },
          {
            question: 'A student claims the 2012 trapping ban caused the otter recovery. Which additional evidence would best strengthen that claim?',
            options: [
              'A count of otters on this river in 2022',
              'Data showing no rebound on a similar unprotected river over the same years',
              'A survey of how many people fish along the river',
              'A second mark-recapture estimate for 2020'
            ],
            correctAnswer: 1,
            explanation: 'A similar river without protection acts as a control: if it did not recover, mild winters or regional changes become unlikely explanations. More counts on the same river show the trend continuing but cannot separate protection from other causes.'
          },
          {
            question: 'Midway through the study, researchers learn that otters became trap-shy after being marked. How would this affect the estimates made after that point?',
            options: [
              'They would be lower than the true population',
              'They would be higher than the true population',
              'They would be correct, as trapping effort was equal',
              'They would be correct, as the river is a closed system'
            ],
            correctAnswer: 1,
            explanation: 'Trap-shy otters are recaptured less often, so R is too small and N = MC ÷ R is too large. Equal trapping effort does not fix the problem, because marked and unmarked otters no longer have the same chance of capture.'
          }
        ]
      }
    },
    {
      id: 'apesbiod4-summary',
      type: 'text' as const,
      content: `
## Part 4 Summary

| Idea | Key fact |
|---|---|
| Mark-recapture | $N = \\dfrac{M \\times C}{R}$ for mobile animals |
| Assumption check | Anything that makes R too small makes N too large |
| Quadrats | Random squares for stationary organisms; density = total count ÷ total area sampled |
| Scaling up | Density per m² × total area in m²; 1 ha = 10,000 m² |
| Trend data | Describe direction and turning point; quantify with percent change and change per year |
| Causation | Needs a control; a correlation in one place is not proof |

**Next:** Part 5 widens the view from single species to the human activities that drive biodiversity loss, and weighs the trade-offs of the solutions.
      `
    }
  ]
};
