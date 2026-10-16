export const apStatsSamplingDistPart2Data = {
  topicSlug: 'sampling-distributions-apstats',
  sections: [
    {
      id: 'apstats-samplingdistributions-p2-intro',
      type: 'text' as const,
      content: `# 📊 Distribution of Sample Means

**Part 2 of 7 — Applying the CLT**

---

### When Is the CLT Valid?

| Population Shape | Sampling distribution of $\\bar{x}$ |
|-----------------|---------------------|
| Normal | Normal for any $n$ (even $n = 1$) |
| Not normal | Approximately normal provided $n \\geq 30$ (CLT) |
| Extremely skewed | May need a sample much larger than 30 |

---

### Finding Probabilities About $\\bar{x}$

To find $P(\\bar{x} > k)$:

1. Calculate $z = \\frac{\\bar{x} - \\mu}{\\sigma / \\sqrt{n}}$
2. Use the z-table

**Example:** Population: $\\mu = 100$, $\\sigma = 15$. Sample $n = 25$. Find $P(\\bar{x} > 106)$.

$z = \\frac{106 - 100}{15/\\sqrt{25}} = \\frac{6}{3} = 2$

$P(\\bar{x} > 106) = P(Z > 2) = 1 - 0.9772 = 0.0228$`
    },
    {
      id: 'apstats-samplingdistributions-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Sample Means Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Heights of women: $\\mu = 64$, $\\sigma = 3$ inches. For a sample of 9, the SE of $\\bar{x}$ is:',
            options: ['$3$', '$1$', '$9$', '$0.33$'],
            correctAnswer: 1,
            explanation: '$SE = 3/\\sqrt{9} = 3/3 = 1$ inch. Dividing by 9 gives 0.33, and 3 is the SD of individual heights.'
          },
          {
            question: 'If the population is normal, the sampling distribution of $\\bar{x}$ is normal for:',
            options: ['Only when $n \\geq 30$', 'Only when $n \\geq 100$', 'Any value of $n$', 'Only when $n \\geq 15$'],
            correctAnswer: 2,
            explanation: 'If the population is normal, the sampling distribution of $\\bar{x}$ is normal for ANY sample size. The $n \\geq 30$ guideline is needed only when the population is not normal.'
          }
        ]
      }
    },
    {
      id: 'apstats-samplingdistributions-p2-input',
      type: 'input-boxes' as const,
      content: `
**Sampling Distribution Calculations** 🧮

Exam scores: $\\mu = 75$, $\\sigma = 10$, $n = 25$.

**1)** Standard error of $\\bar{x}$ = ?

**2)** $z$-score for $\\bar{x} = 79$: $z = (79 - 75) / SE$ = ?

**3)** $P(\\bar{x} > 79) \\approx P(Z > 2)$. Using $P(Z \\leq 2) = 0.9772$, the probability is?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '2', '0.0228'],
        hint1: '$10/\\sqrt{25} = 10/5 = 2$.',
        hint2: '$(79-75)/2 = 2$.',
        hint3: '$1 - 0.9772 = 0.0228$.',
        explanation: '1) SE = 2. 2) $z = 2$. 3) $P \\approx 0.0228$ or about 2.3%.'
      }
    }
  ]
};
