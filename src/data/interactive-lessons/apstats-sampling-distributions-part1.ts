export const apStatsSamplingDistPart1Data = {
  topicSlug: 'sampling-distributions-apstats',
  sections: [
    {
      id: 'apstats-samplingdistributions-p1-intro',
      type: 'text' as const,
      content: `# 🎯 The Central Limit Theorem

**Part 1 of 7 — The Most Important Theorem in Statistics**

---

### From Population to Sample

When we take a sample of size $n$ from a population, the sample mean $\\bar{x}$ varies from sample to sample. The **sampling distribution** of $\\bar{x}$ describes this variation.

---

### The Central Limit Theorem (CLT)

For a random sample of size $n$ from a population with mean $\\mu$ and standard deviation $\\sigma$:

$$\\bar{X} \\sim N\\left(\\mu, \\frac{\\sigma}{\\sqrt{n}}\\right) \\text{ (approximately, for large } n\\text{)}$$

| Property | Value |
|----------|-------|
| Mean of $\\bar{X}$ | $\\mu_{\\bar{X}} = \\mu$ |
| Standard deviation of $\\bar{X}$ | $\\sigma_{\\bar{X}} = \\frac{\\sigma}{\\sqrt{n}}$ |
| Shape | Approximately normal for large $n$ (usually $n \\geq 30$) |

> 🔑 **The CLT works regardless of the shape of the population distribution** — as long as $n$ is large enough.

---

### Why It Matters

Even if data is skewed, the distribution of sample means will be approximately normal for large $n$. This is why so many inference procedures use the normal distribution.`
    },
    {
      id: 'apstats-samplingdistributions-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**CLT Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The Central Limit Theorem says that for large $n$, the sampling distribution of $\\bar{x}$ is approximately:',
            options: ['Uniform', 'Normal', 'Skewed right', 'The same shape as the population'],
            correctAnswer: 1,
            explanation: 'The CLT guarantees approximate normality of the sampling distribution of $\\bar{x}$ for large $n$, regardless of the population shape.'
          },
          {
            question: 'As sample size $n$ increases, the standard deviation of $\\bar{x}$:',
            options: ['Increases', 'Decreases', 'Stays the same', 'Becomes zero'],
            correctAnswer: 1,
            explanation: '$\\sigma_{\\bar{x}} = \\sigma/\\sqrt{n}$. As $n$ increases, the denominator grows, so the SD decreases.'
          },
          {
            question: 'If the population SD is $\\sigma = 20$ and $n = 100$, the standard error is:',
            options: ['$20$', '$2$', '$0.2$', '$200$'],
            correctAnswer: 1,
            explanation: '$\\sigma_{\\bar{x}} = 20/\\sqrt{100} = 20/10 = 2$.'
          }
        ]
      }
    },
    {
      id: 'apstats-samplingdistributions-p1-input',
      type: 'input-boxes' as const,
      content: `
**CLT Calculations** 🧮

A population has $\\mu = 50$ and $\\sigma = 12$. Samples of size $n = 36$ are drawn.

**1)** What is the mean of the sampling distribution of $\\bar{x}$?

**2)** What is the standard error of $\\bar{x}$?

**3)** For $n = 144$, what would the standard error be?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['50', '2', '1'],
        hint1: 'The mean of the sampling distribution equals the population mean.',
        hint2: '$\\sigma/\\sqrt{n} = 12/\\sqrt{36} = 12/6$.',
        hint3: '$12/\\sqrt{144} = 12/12 = 1$.',
        explanation: '1) $\\mu_{\\bar{x}} = 50$. 2) $12/6 = 2$. 3) $12/12 = 1$. Quadrupling $n$ halves the SE.'
      }
    }
  ]
};
