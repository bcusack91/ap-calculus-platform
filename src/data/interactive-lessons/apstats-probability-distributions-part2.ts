export const apStatsProbDistPart2Data = {
  topicSlug: 'probability-distributions-apstats',
  sections: [
    {
      id: 'probdistributions-p2-intro',
      type: 'text' as const,
      content: `# 📏 Z-Scores

**Part 2 of 7 — Standardizing Values**

---

### The Z-Score Formula

$$z = \\\\frac{x - \\\\mu}{\\\\sigma}$$

A z-score tells you **how many standard deviations** a value is from the mean.

| Z-Score | Interpretation |
|---------|---------------|
| $z = 0$ | At the mean |
| $z = 1$ | 1 SD above the mean |
| $z = -2$ | 2 SD below the mean |

---

### Standard Normal Distribution

When we standardize, we convert to $Z \\\\sim N(0, 1)$.

### Example

Test scores: $\\\\mu = 75$, $\\\\sigma = 8$. A student scores 91.

$$z = \\\\frac{91 - 75}{8} = \\\\frac{16}{8} = 2.0$$

The student scored **2 standard deviations above the mean**.`
    },    {
      id: 'probdistributions-p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'A z-score of $-1.5$ means the value is:',
            options: ['1.5 standard deviations above the mean', '1.5 standard deviations below the mean', '1.5 units below the mean', 'Below the median'],
            correctAnswer: 1,
            explanation: 'A negative z-score means below the mean; the magnitude tells how many SDs.'
          },
          {
            question: 'If $\\\\mu = 50$ and $\\\\sigma = 10$, the z-score for $x = 65$ is:',
            options: ['0.5', '1.0', '1.5', '6.5'],
            correctAnswer: 2,
            explanation: '$z = (65-50)/10 = 15/10 = 1.5$.'
          },
          {
            question: 'The standard Normal distribution has:',
            options: ['$\\\\mu = 1, \\\\sigma = 0$', '$\\\\mu = 0, \\\\sigma = 1$', '$\\\\mu = 0, \\\\sigma = 0$', '$\\\\mu = 100, \\\\sigma = 15$'],
            correctAnswer: 1,
            explanation: 'The standard Normal is $N(0, 1)$ — mean 0, standard deviation 1.'
          }
        ]
      }
    },    {
      id: 'probdistributions-p2-input',
      type: 'input-boxes' as const,
      content: `
**Z-Score Calculations** 🧮

Heights: $\\\\mu = 170$ cm, $\\\\sigma = 6$ cm.

**1)** Z-score for a height of 182 cm?

**2)** Z-score for a height of 158 cm?

**3)** A z-score of 0 corresponds to what height? (in cm)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '-2', '170'],
        hint1: '$(182-170)/6$',
        hint2: '$(158-170)/6$',
        hint3: '$z = 0$ means at the mean',
        explanation: '1) $(182-170)/6 = 2.0$. 2) $(158-170)/6 = -2.0$. 3) $z = 0$ corresponds to $\\\\mu = 170$ cm.'
      }
    }
  ]
};
