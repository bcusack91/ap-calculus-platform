export const apStatsProbDistPart1Data = {
  topicSlug: 'probability-distributions-apstats',
  sections: [
    {
      id: 'probdistributions-p1-intro',
      type: 'text' as const,
      content: `# 📊 Introduction to Probability Distributions

**Part 1 of 7 — The Normal Model**

---

### The Normal Distribution

The most important continuous probability distribution in statistics.

**Key Properties:**
- Bell-shaped and symmetric
- Mean = median (at the center)
- Described completely by $\\mu$ (mean) and $\\sigma$ (standard deviation)
- Notation: $X \\sim N(\\mu, \\sigma)$

---

### The 68-95-99.7 Rule (Empirical Rule)

| Range | Percent of Data |
|-------|----------------|
| $\\mu \\pm 1\\sigma$ | ≈68% |
| $\\mu \\pm 2\\sigma$ | ≈95% |
| $\\mu \\pm 3\\sigma$ | ≈99.7% |

### Example

Heights of adult women: $N(64, 2.5)$ inches
- 68% are between 61.5 and 66.5 inches
- 95% are between 59 and 69 inches
- 99.7% are between 56.5 and 71.5 inches`
    },    {
      id: 'probdistributions-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The Normal distribution is characterized by:',
            options: ['The mean and the range of the data', 'The mean $\\mu$ and SD $\\sigma$', 'The median and the IQR of the data', 'The sample size $n$ and the mean'],
            correctAnswer: 1,
            explanation: 'A Normal distribution is completely described by its mean $\\mu$ and standard deviation $\\sigma$. A normal curve has no finite range, the median and IQR follow from $\\mu$ and $\\sigma$ rather than defining the curve, and a sample size is not a parameter of the distribution.'
          },
          {
            question: 'Using the 68-95-99.7 rule, about what percent of data falls within 2 standard deviations of the mean?',
            options: ['68%', '95%', '99.7%', '50%'],
            correctAnswer: 1,
            explanation: 'Approximately 95% of data falls within $\\mu \\pm 2\\sigma$. 68% goes with 1 SD, 99.7% with 3 SDs, and 50% is the area on one side of the mean.'
          },
          {
            question: 'If $X \\sim N(100, 15)$, about 68% of values fall between:',
            options: ['70 and 130', '85 and 115', '55 and 145', '100 and 115'],
            correctAnswer: 1,
            explanation: '$100 \\pm 15 = [85, 115]$: about 68% of values lie within one standard deviation of the mean. 70 to 130 is the 95% interval, 55 to 145 is the 99.7% interval, and 100 to 115 covers only about 34%.'
          }
        ]
      }
    },    {
      id: 'probdistributions-p1-input',
      type: 'input-boxes' as const,
      content: `
**Empirical Rule Practice** 🧮

SAT scores follow $N(1060, 195)$.

**1)** 68% of scores fall between ___ and ___ (give the lower bound)

**2)** What’s the upper bound?

**3)** What percent of scores fall below $1060$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['865', '1255', '50'],
        hint1: '$1060 - 195 = ?$',
        hint2: '$1060 + 195 = ?$',
        hint3: 'Normal distribution is symmetric about the mean',
        explanation: '1) $1060 - 195 = 865$. 2) $1060 + 195 = 1255$. 3) 50% — the Normal distribution is symmetric.'
      }
    }
  ]
};
