export const apStatsProbDistPart5Data = {
  topicSlug: 'probability-distributions-apstats',
  sections: [
    {
      id: 'probdistributions-p5-intro',
      type: 'text' as const,
      content: `# 📊 Sampling Distributions

**Part 5 of 7 — Sampling Distributions of $\\\\bar{x}$ and $\\\\hat{p}$**

---

### Sampling Distribution of $\\\\bar{x}$

If we take many samples of size $n$ from a population with mean $\\\\mu$ and SD $\\\\sigma$:

$$\\\\bar{x} \\\\sim N\\\\left(\\\\mu, \\\\frac{\\\\sigma}{\\\\sqrt{n}}\\\\right)$$

| Property | Value |
|----------|-------|
| Mean | $\\\\mu_{\\\\bar{x}} = \\\\mu$ |
| Standard deviation | $\\\\sigma_{\\\\bar{x}} = \\\\frac{\\\\sigma}{\\\\sqrt{n}}$ |
| Shape | Normal (if population Normal OR $n \\\\geq 30$) |

---

### Sampling Distribution of $\\\\hat{p}$

For proportions from samples of size $n$ where population proportion is $p$:

$$\\\\hat{p} \\\\sim N\\\\left(p, \\\\sqrt{\\\\frac{p(1-p)}{n}}\\\\right)$$

**Conditions:** $np \\\\geq 10$ and $n(1-p) \\\\geq 10$

### Key Insight

As $n$ increases, the standard deviation **decreases** — larger samples give more precise estimates.`
    },    {
      id: 'probdistributions-p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'The standard deviation of $\\\\bar{x}$ is:',
            options: ['$\\\\sigma$', '$\\\\sigma/n$', '$\\\\sigma/\\\\sqrt{n}$', '$\\\\sqrt{\\\\sigma/n}$'],
            correctAnswer: 2,
            explanation: 'The standard deviation of the sampling distribution of $\\\\bar{x}$ is $\\\\sigma/\\\\sqrt{n}$.'
          },
          {
            question: 'Quadrupling the sample size:',
            options: ['Halves the standard deviation of $\\\\bar{x}$', 'Quarters the standard deviation of $\\\\bar{x}$', 'Doubles the standard deviation of $\\\\bar{x}$', 'Has no effect on the standard deviation'],
            correctAnswer: 0,
            explanation: '$\\\\sigma/\\\\sqrt{4n} = \\\\sigma/(2\\\\sqrt{n})$ — the SD is halved when $n$ is quadrupled.'
          },
          {
            question: 'The sampling distribution of $\\\\hat{p}$ is approximately Normal when:',
            options: ['$n \\\\geq 30$', '$np \\\\geq 10$ and $n(1-p) \\\\geq 10$', '$p = 0.5$', 'The population is Normal'],
            correctAnswer: 1,
            explanation: 'The Normal approximation requires at least 10 expected successes AND 10 expected failures.'
          }
        ]
      }
    },    {
      id: 'probdistributions-p5-input',
      type: 'input-boxes' as const,
      content: `
**Sampling Distribution** 🧮

Population: $\\\\mu = 500$, $\\\\sigma = 100$. Sample size $n = 25$.

**1)** Mean of the sampling distribution of $\\\\bar{x}$?

**2)** Standard deviation of $\\\\bar{x}$?

**3)** $P(\\\\bar{x} > 520) = P(Z > ?)$ — what is the z-score?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['500', '20', '1'],
        hint1: '$\\\\mu_{\\\\bar{x}} = \\\\mu$',
        hint2: '$100/\\\\sqrt{25} = 100/5$',
        hint3: '$(520-500)/20$',
        explanation: '1) $\\\\mu_{\\\\bar{x}} = 500$. 2) $\\\\sigma_{\\\\bar{x}} = 100/\\\\sqrt{25} = 20$. 3) $z = (520-500)/20 = 1.0$.'
      }
    }
  ]
};
