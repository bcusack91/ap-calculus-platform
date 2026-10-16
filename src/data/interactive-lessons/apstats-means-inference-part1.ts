export const apStatsMeansInfPart1Data = {
  topicSlug: 'means-inference-apstats',
  sections: [
    {
      id: 'meansinference-p1-intro',
      type: 'text' as const,
      content: `# 📊 Inference for Means

**Part 1 of 7 — The t-Distribution**

---

### Why Not Z?

For means, we rarely know the population standard deviation $\\sigma$. We estimate it with the sample standard deviation $s$, introducing extra uncertainty.

### The t-Distribution

$$t = \\frac{\\bar{x} - \\mu}{s/\\sqrt{n}}$$

**Properties:**
- Bell-shaped and symmetric around 0
- Wider tails than Normal (more spread)
- Depends on **degrees of freedom** $df = n - 1$
- As $df \\to \\infty$, $t \\to N(0,1)$

---

### Conditions for t-Procedures

1. **Random:** Data from random sample or experiment
2. **Normal/Large Sample:** Population is approximately Normal, OR $n \\geq 30$ (CLT), OR (if $n < 30$) the sample data are free from strong skewness and outliers
3. **Independent:** $n < 10\\%$ of population`
    },    {
      id: 'meansinference-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Inference for a population mean uses the $t$-distribution rather than $z$ because:',
            options: ['$n$ is usually large', '$\\sigma$ is unknown', 'The data are always normal', 'It gives a wider interval on purpose'],
            correctAnswer: 1,
            explanation: 'The population SD $\\sigma$ is unknown, so it is estimated by $s$, and the $t$-distribution accounts for that extra uncertainty. Wider intervals are a consequence, not the reason.'
          },
          {
            question: 'Degrees of freedom for a one-sample t-test is:',
            options: ['$n$', '$n - 1$', '$n + 1$', '$n - 2$'],
            correctAnswer: 1,
            explanation: 'For one-sample t-procedures, $df = n - 1$.'
          },
          {
            question: 'As degrees of freedom increase, the t-distribution:',
            options: ['Gets wider and flatter', 'Approaches normal', 'Becomes skewed to the right', 'Develops heavier tails'],
            correctAnswer: 1,
            explanation: 'With more degrees of freedom, the $t$-distribution gets closer to the standard normal $N(0,1)$: thinner, not heavier, tails, and always symmetric.'
          }
        ]
      }
    },    {
      id: 'meansinference-p1-input',
      type: 'input-boxes' as const,
      content: `
**t-Distribution Basics** 🧮

$n = 25$, $\\bar{x} = 82$, $s = 10$.

**1)** Degrees of freedom?

**2)** Standard error $= s/\\sqrt{n} = ?$

**3)** t-statistic for testing $\\mu = 80$: $t = (82 - 80)/SE = ?$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['24', '2', '1'],
        hint1: '$n - 1$',
        hint2: '$10/\\sqrt{25} = 10/5$',
        hint3: '$(82-80)/2$',
        explanation: '1) $df = 25 - 1 = 24$. 2) $SE = 10/5 = 2$. 3) $t = 2/2 = 1.0$.'
      }
    }
  ]
};
