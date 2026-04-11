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

| Population Shape | Required Sample Size |
|-----------------|---------------------|
| Normal | Any $n$ (even $n = 1$) |
| Slightly skewed | $n \\geq 15$ |
| Heavily skewed | $n \\geq 30$ (or more) |
| With outliers | $n \\geq 40$ or remove outliers |

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
            explanation: '$SE = 3/\\sqrt{9} = 3/3 = 1$ inch.'
          },
          {
            question: 'If the population is normal, the sampling distribution of $\\bar{x}$ is normal for:',
            options: ['Only $n \\geq 30$', 'Only $n \\geq 100$', 'Any sample size', 'Only even $n$'],
            correctAnswer: 2,
            explanation: 'If the population is normal, the sampling distribution of $\\bar{x}$ is exactly normal for ANY sample size.'
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
